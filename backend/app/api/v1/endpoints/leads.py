"""
Lead management endpoints
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.core.deps import get_db
from app.crud.lead import lead
from app.schemas.lead import LeadCreate, LeadUpdate, Lead

router = APIRouter()


@router.get("/", response_model=List[Lead])
def read_leads(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    """
    Retrieve leads.
    """
    leads = lead.get_multi(db, skip=skip, limit=limit)
    return leads


@router.get("/{lead_id}", response_model=Lead)
def read_lead(
    lead_id: int,
    db: Session = Depends(get_db),
):
    """
    Get lead by ID.
    """
    lead_obj = lead.get(db, id=lead_id)
    if not lead_obj:
        raise HTTPException(status_code=404, detail="Lead not found")
    return lead_obj


@router.put("/{lead_id}", response_model=Lead)
def update_lead(
    *,
    db: Session = Depends(get_db),
    lead_id: int,
    lead_in: LeadUpdate,
):
    """
    Update lead.
    """
    lead_obj = lead.get(db, id=lead_id)
    if not lead_obj:
        raise HTTPException(status_code=404, detail="Lead not found")
    lead_obj = lead.update(db, db_obj=lead_obj, obj_in=lead_in)
    return lead_obj


@router.delete("/{lead_id}", response_model=Lead)
def delete_lead(
    *,
    db: Session = Depends(get_db),
    lead_id: int,
):
    """
    Delete lead.
    """
    lead_obj = lead.get(db, id=lead_id)
    if not lead_obj:
        raise HTTPException(status_code=404, detail="Lead not found")
    lead_obj = lead.remove(db, id=lead_id)
    return lead_obj


@router.get("/recent/", response_model=List[Lead])
def read_recent_leads(
    limit: int = 100,
    db: Session = Depends(get_db),
):
    """
    Retrieve recent leads.
    """
    leads = lead.get_recent_leads(db, limit=limit)
    return leads