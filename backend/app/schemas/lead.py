"""
Pydantic schemas for Lead model
"""
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class LeadBase(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str


class LeadCreate(LeadBase):
    pass


class LeadUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    company: Optional[str] = None
    phone: Optional[str] = None
    message: Optional[str] = None
    is_contacted: Optional[bool] = None


class Lead(LeadBase):
    id: int
    is_contacted: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True
