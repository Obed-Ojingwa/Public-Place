"""
Contact form submission endpoint
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.core.deps import get_db
from app.crud.lead import lead
from app.schemas.lead import LeadCreate, Lead

router = APIRouter()


@router.post("/", response_model=Lead, status_code=status.HTTP_201_CREATED)
def create_lead(
    *,
    db: Session = Depends(get_db),
    lead_in: LeadCreate
) -> Lead:
    """
    Create new lead from contact form submission.
    """
    lead_obj = lead.create(db, obj_in=lead_in)
    return lead_obj


@router.get("/", response_model=List[Lead])
def read_leads(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
) -> List[Lead]:
    """
    Retrieve leads.
    """
    leads = lead.get_multi(db, skip=skip, limit=limit)
    return leads
