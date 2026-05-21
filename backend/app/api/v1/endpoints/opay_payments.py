# // ============================================================================
# // FIX 7: BACKEND OPAY ENDPOINT
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\api\v1\endpoints\opay_payments.py
 
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import datetime
import uuid
import httpx
 
from app.db.session import get_db
from app.services.email import send_payment_confirmation_email
 
router = APIRouter()
 
# Opay Configuration
OPAY_API_BASE = "https://api.opayweb.com/api/v1"
OPAY_MERCHANT_ID = "YOUR_MERCHANT_ID"  # Get from Opay dashboard
OPAY_API_KEY = "YOUR_API_KEY"  # Get from Opay
OPAY_ACCOUNT_NUMBER = "0123456789"  # Your business account
 
@router.post("/create-opay-transaction")
async def create_opay_transaction(
    transaction_data: dict,
    db: AsyncSession = Depends(get_db)
):
    """Create Opay transaction reference"""
    
    try:
        email = transaction_data.get('email')
        amount = transaction_data.get('amount')
        plan_id = transaction_data.get('planId')
        plan_name = transaction_data.get('planName')
 
        if not email or not amount:
            raise HTTPException(status_code=400, detail="Missing required fields")
 
        # Generate transaction reference
        transaction_ref = f"NP-{uuid.uuid4().hex[:8].upper()}-{datetime.now().strftime('%Y%m%d')}"
 
        # Store transaction in database
        from app.models.payment import OpayTransaction
        from app.models.payment import OpayTransactionStatus
 
        new_transaction = OpayTransaction(
            reference=transaction_ref,
            email=email,
            amount=amount,
            plan_id=plan_id,
            plan_name=plan_name,
            status=OpayTransactionStatus.PENDING,
            created_at=datetime.utcnow(),
        )
 
        db.add(new_transaction)
        await db.commit()
 
        # Send transaction details to email
        await send_payment_confirmation_email(
            email=email,
            transaction_ref=transaction_ref,
            amount=amount,
            plan_name=plan_name,
            payment_method="Opay"
        )
 
        return {
            "status": 200,
            "message": "Transaction created successfully",
            "data": {
                "reference": transaction_ref,
                "amount": amount,
                "email": email,
                "plan": plan_name,
                "accountNumber": OPAY_ACCOUNT_NUMBER,
            }
        }
 
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
 
 
@router.post("/verify-opay-payment")
async def verify_opay_payment(
    transaction_data: dict,
    db: AsyncSession = Depends(get_db)
):
    """Verify Opay payment status"""
    
    try:
        reference = transaction_data.get('reference')
        
        if not reference:
            raise HTTPException(status_code=400, detail="Transaction reference required")
 
        # Verify payment with Opay API
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{OPAY_API_BASE}/payment/status",
                headers={
                    "Authorization": f"Bearer {OPAY_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={"reference": reference}
            )
 
            if response.status_code != 200:
                raise HTTPException(status_code=400, detail="Payment verification failed")
 
            payment_data = response.json()
 
            if payment_data.get('status') == 'completed':
                # Mark transaction as paid in database
                from app.models.payment import OpayTransaction, OpayTransactionStatus
                from sqlalchemy import select, update
 
                stmt = (
                    update(OpayTransaction)
                    .where(OpayTransaction.reference == reference)
                    .values(status=OpayTransactionStatus.COMPLETED)
                )
                await db.execute(stmt)
                await db.commit()
 
                return {
                    "status": 200,
                    "message": "Payment verified successfully",
                    "data": {"reference": reference, "status": "completed"}
                }
            else:
                return {
                    "status": 200,
                    "message": "Payment pending",
                    "data": {"reference": reference, "status": "pending"}
                }
 
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))