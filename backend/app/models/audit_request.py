"""
Audit Request model for storing audit form submissions
"""
from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.sql import func
from .base import Base


class AuditRequest(Base):
    """Audit request model"""
    __tablename__ = "audit_requests"

    id = Column(Integer, primary_key=True, index=True)
    website = Column(String(255), nullable=False, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    company = Column(String(255), nullable=True)
    industry = Column(String(100), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
