"""
Audit request submission endpoint
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.core.deps import get_db
from app.crud.audit_request import audit_request
from app.schemas.audit_request import AuditRequestCreate, AuditRequest

router = APIRouter()


@router.post("/", response_model=AuditRequest, status_code=status.HTTP_201_CREATED)
def create_audit_request(
    *,
    db: Session = Depends(get_db),
    audit_in: AuditRequestCreate
) -> AuditRequest:
    """
    Create new audit request from form submission.
    """
    audit_obj = audit_request.create(db, obj_in=audit_in)
    return audit_obj


@router.get("/", response_model=List[AuditRequest])
def read_audit_requests(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
) -> List[AuditRequest]:
    """
    Retrieve audit requests.
    """
    audits = audit_request.get_multi(db, skip=skip, limit=limit)
    return audits
