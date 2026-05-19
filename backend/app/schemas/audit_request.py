"""
Pydantic schemas for AuditRequest model
"""
from pydantic import BaseModel, EmailStr, HttpUrl
from typing import Optional
from datetime import datetime


class AuditRequestBase(BaseModel):
    website: HttpUrl
    name: str
    email: EmailStr
    company: Optional[str] = None
    industry: Optional[str] = None


class AuditRequestCreate(AuditRequestBase):
    pass


class AuditRequestUpdate(BaseModel):
    website: Optional[HttpUrl] = None
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    company: Optional[str] = None
    industry: Optional[str] = None


class AuditRequest(AuditRequestBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
