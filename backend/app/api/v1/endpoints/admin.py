
# // ============================================================================
# // FILE 3: Backend Admin API Endpoints
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\api\v1\endpoints\admin.py
 
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, and_
from datetime import datetime, timedelta
 
from app.models.lead import Lead, LeadStatus
from app.models.seo_audit import SEOAudit, AuditStatus
from app.models.client import Client
from app.db.session import get_db
from app.core.security import get_current_admin_user
 
router = APIRouter()
 
 
@router.get("/dashboard")
async def get_dashboard(
    current_user: dict = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db)
):
    """Get admin dashboard statistics"""
    
    # Total leads
    total_leads_query = select(func.count(Lead.id))
    total_leads = (await db.execute(total_leads_query)).scalar() or 0
    
    # Qualified leads
    qualified_leads_query = select(func.count(Lead.id)).where(
        Lead.status == LeadStatus.QUALIFIED
    )
    qualified_leads = (await db.execute(qualified_leads_query)).scalar() or 0
    
    # Total audits
    total_audits_query = select(func.count(SEOAudit.id))
    total_audits = (await db.execute(total_audits_query)).scalar() or 0
    
    # Completed audits
    completed_audits_query = select(func.count(SEOAudit.id)).where(
        SEOAudit.status == AuditStatus.COMPLETED
    )
    completed_audits = (await db.execute(completed_audits_query)).scalar() or 0
    
    # This month revenue (from active clients)
    this_month_start = datetime.utcnow().replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    revenue_query = select(func.sum(Client.monthly_cost)).where(
        Client.subscription_status == "active",
        Client.created_at >= this_month_start
    )
    this_month_revenue = (await db.execute(revenue_query)).scalar() or 0
    
    # Conversion rate
    last_30_days = datetime.utcnow() - timedelta(days=30)
    new_leads_query = select(func.count(Lead.id)).where(Lead.created_at >= last_30_days)
    new_leads = (await db.execute(new_leads_query)).scalar() or 0
    
    converted_query = select(func.count(Lead.id)).where(
        and_(
            Lead.status == LeadStatus.CONVERTED,
            Lead.created_at >= last_30_days
        )
    )
    converted_leads = (await db.execute(converted_query)).scalar() or 0
    
    conversion_rate = (converted_leads / new_leads * 100) if new_leads > 0 else 0
    
    return {
        "total_leads": total_leads,
        "qualified_leads": qualified_leads,
        "total_audits": total_audits,
        "completed_audits": completed_audits,
        "this_month_revenue": float(this_month_revenue),
        "conversion_rate": round(conversion_rate, 2),
    }
 
 
@router.get("/leads/stats")
async def get_leads_stats(
    current_user: dict = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db)
):
    """Get detailed leads statistics"""
    
    status_breakdown = {}
    for status in LeadStatus:
        count_query = select(func.count(Lead.id)).where(Lead.status == status)
        count = (await db.execute(count_query)).scalar() or 0
        status_breakdown[status.value] = count
    
    return {"status_breakdown": status_breakdown}
 
 
@router.get("/audits/stats")
async def get_audits_stats(
    current_user: dict = Depends(get_current_admin_user),
    db: AsyncSession = Depends(get_db)
):
    """Get detailed audit statistics"""
    
    status_breakdown = {}
    for status in AuditStatus:
        count_query = select(func.count(SEOAudit.id)).where(SEOAudit.status == status)
        count = (await db.execute(count_query)).scalar() or 0
        status_breakdown[status.value] = count
    
    return {"status_breakdown": status_breakdown}
 
 
@router.get("/revenue/monthly")
async def get_monthly_revenue(
    current_user: dict = Depends(get_current_admin_user),
    months: int = 12,
    db: AsyncSession = Depends(get_db)
):
    """Get monthly revenue data for the last N months"""
    
    revenue_data = []
    
    for i in range(months):
        # Calculate month start and end
        month_start = (datetime.utcnow() - timedelta(days=30 * (months - i))).replace(
            day=1, hour=0, minute=0, second=0, microsecond=0
        )
        
        if i == 0:
            month_end = datetime.utcnow()
        else:
            month_end = (datetime.utcnow() - timedelta(days=30 * (months - i - 1))).replace(
                day=1, hour=0, minute=0, second=0, microsecond=0
            ) - timedelta(seconds=1)
        
        # Query revenue for this month
        revenue_query = select(func.sum(Client.monthly_cost)).where(
            and_(
                Client.subscription_status == "active",
                Client.created_at >= month_start,
                Client.created_at <= month_end
            )
        )
        
        revenue = (await db.execute(revenue_query)).scalar() or 0
        
        revenue_data.append({
            "month": month_start.strftime("%B %Y"),
            "revenue": float(revenue),
        })
    
    return {"monthly_revenue": revenue_data}