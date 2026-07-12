"""
Testimonial management endpoints
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.core.deps import get_db
from app.crud.testimonial import testimonial
from app.schemas.testimonial import TestimonialCreate, TestimonialUpdate, Testimonial

router = APIRouter()


@router.get("/", response_model=List[Testimonial])
def read_testimonials(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    approved_only: bool = False,
):
    """
    Retrieve testimonials.
    """
    if approved_only:
        testimonials = testimonial.get_approved(db, skip=skip, limit=limit)
    else:
        testimonials = testimonial.get_multi(db, skip=skip, limit=limit)
    return testimonials


@router.get("/featured", response_model=List[Testimonial])
def read_featured_testimonials(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
):
    """
    Retrieve featured testimonials.
    """
    testimonials = testimonial.get_featured(db, skip=skip, limit=limit)
    return testimonials


@router.post("/", response_model=Testimonial, status_code=status.HTTP_201_CREATED)
def create_testimonial(
    *,
    db: Session = Depends(get_db),
    testimonial_in: TestimonialCreate,
):
    """
    Create new testimonial.
    """
    testimonial_obj = testimonial.create(db, obj_in=testimonial_in)
    return testimonial_obj


@router.get("/{testimonial_id}", response_model=Testimonial)
def read_testimonial(
    testimonial_id: str,
    db: Session = Depends(get_db),
):
    """
    Get testimonial by ID.
    """
    testimonial_obj = testimonial.get(db, id=testimonial_id)
    if not testimonial_obj:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return testimonial_obj


@router.put("/{testimonial_id}", response_model=Testimonial)
def update_testimonial(
    *,
    db: Session = Depends(get_db),
    testimonial_id: str,
    testimonial_in: TestimonialUpdate,
):
    """
    Update testimonial.
    """
    testimonial_obj = testimonial.get(db, id=testimonial_id)
    if not testimonial_obj:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    testimonial_obj = testimonial.update(db, db_obj=testimonial_obj, obj_in=testimonial_in)
    return testimonial_obj


@router.delete("/{testimonial_id}", response_model=Testimonial)
def delete_testimonial(
    *,
    db: Session = Depends(get_db),
    testimonial_id: str,
):
    """
    Delete testimonial.
    """
    testimonial_obj = testimonial.get(db, id=testimonial_id)
    if not testimonial_obj:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    testimonial_obj = testimonial.remove(db, id=testimonial_id)
    return testimonial_obj


@router.patch("/{testimonial_id}/approve", response_model=Testimonial)
def approve_testimonial(
    *,
    db: Session = Depends(get_db),
    testimonial_id: str,
):
    """
    Approve testimonial.
    """
    testimonial_obj = testimonial.get(db, id=testimonial_id)
    if not testimonial_obj:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    testimonial_obj.is_approved = True
    db.add(testimonial_obj)
    db.commit()
    db.refresh(testimonial_obj)
    return testimonial_obj


@router.patch("/{testimonial_id}/unapprove", response_model=Testimonial)
def unapprove_testimonial(
    *,
    db: Session = Depends(get_db),
    testimonial_id: str,
):
    """
    Unapprove testimonial.
    """
    testimonial_obj = testimonial.get(db, id=testimonial_id)
    if not testimonial_obj:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    testimonial_obj.is_approved = False
    db.add(testimonial_obj)
    db.commit()
    db.refresh(testimonial_obj)
    return testimonial_obj


@router.patch("/{testimonial_id}/feature", response_model=Testimonial)
def feature_testimonial(
    *,
    db: Session = Depends(get_db),
    testimonial_id: str,
):
    """
    Feature/unfeature testimonial.
    """
    testimonial_obj = testimonial.get(db, id=testimonial_id)
    if not testimonial_obj:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    testimonial_obj.is_featured = not testimonial_obj.is_featured
    db.add(testimonial_obj)
    db.commit()
    db.refresh(testimonial_obj)
    return testimonial_obj