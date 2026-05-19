"""
CRUD operations for Lead model
"""
from typing import List
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.crud.base import CRUDBase
from app.models.lead import Lead
from app.schemas.lead import LeadCreate, LeadUpdate


class CRUDLead(CRUDBase[Lead, LeadCreate, LeadUpdate]):
    def get_by_email(self, db: Session, email: str) -> List[Lead]:
        stmt = select(Lead).where(Lead.email == email)
        return list(db.execute(stmt).scalars().all())

    def get_recent_leads(self, db: Session, *, limit: int = 100) -> List[Lead]:
        stmt = select(Lead).order_by(Lead.created_at.desc()).limit(limit)
        return list(db.execute(stmt).scalars().all())


lead = CRUDLead(Lead)
