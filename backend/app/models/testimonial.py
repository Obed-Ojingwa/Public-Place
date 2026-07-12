"""
Testimonial model for storing customer testimonials
"""
from sqlalchemy import Column, String, Text, DateTime, Integer, Boolean
from sqlalchemy.sql import func
import uuid
from .base import Base


class Testimonial(Base):
    """Testimonial model for customer testimonials"""
    __tablename__ = "testimonials"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(255), nullable=False)
    role = Column(String(255), nullable=True)
    content = Column(Text, nullable=False)
    rating = Column(Integer, default=5)  # 1-5 rating
    photo_url = Column(String(500), nullable=True)
    company_name = Column(String(255), nullable=True)
    linkedin_url = Column(String(500), nullable=True)
    company_logo_url = Column(String(500), nullable=True)
    is_featured = Column(Boolean, default=False)
    is_approved = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    def __repr__(self):
        return f"<Testimonial {self.name}>"