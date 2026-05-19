"""
CRUD operations for AuditRequest model
"""
from typing import List
from sqlalchemy.orm import Session
from sqlalchemy import select
from app.crud.base import CRUDBase
from app.models.audit_request import AuditRequest
from app.schemas.audit_request import AuditRequestCreate, AuditRequestUpdate


class CRUDAuditRequest(CRUDBase[AuditRequest, AuditRequestCreate, AuditRequestUpdate]):
    def get_by_email(self, db: Session, email: str) -> List[AuditRequest]:
        stmt = select(AuditRequest).where(AuditRequest.email == email)
        return list(db.execute(stmt).scalars().all())

    def get_recent_requests(self, db: Session, *, limit: int = 100) -> List[AuditRequest]:
        stmt = select(AuditRequest).order_by(AuditRequest.created_at.desc()).limit(limit)
        return list(db.execute(stmt).scalars().all())


audit_request = CRUDAuditRequest(AuditRequest)
