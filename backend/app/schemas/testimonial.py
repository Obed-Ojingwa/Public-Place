"""
Pydantic schemas for Testimonial model
"""
from pydantic import BaseModel, HttpUrl
from typing import Optional
from datetime import datetime


class TestimonialBase(BaseModel):
    name: str
    role: Optional[str] = None
    content: str
    rating: int = 5
    photo_url: Optional[HttpUrl] = None
    company_name: Optional[str] = None
    linkedin_url: Optional[HttpUrl] = None
    company_logo_url: Optional[HttpUrl] = None
    is_featured: bool = False
    is_approved: bool = False


class TestimonialCreate(TestimonialBase):
    pass


class TestimonialUpdate(BaseModel):
    name: Optional[str] = None
    role: Optional[str] = None
    content: Optional[str] = None
    rating: Optional[int] = None
    photo_url: Optional[HttpUrl] = None
    company_name: Optional[str] = None
    linkedin_url: Optional[HttpUrl] = None
    company_logo_url: Optional[HttpUrl] = None
    is_featured: Optional[bool] = None
    is_approved: Optional[bool] = None


class Testimonial(TestimonialBase):
    id: str
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True