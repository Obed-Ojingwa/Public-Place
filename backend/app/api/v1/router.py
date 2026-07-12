"""
API v1 Router - Aggregates all endpoints
"""
from fastapi import APIRouter
from app.api.v1.endpoints import health, contact, audit, opay_payments, blog, testimonials, leads

# Initialize router
api_router = APIRouter()

# Health endpoint
api_router.include_router(health.router, tags=["Health"])

# Contact form endpoints
api_router.include_router(contact.router, prefix="/contact", tags=["contact"])

# Audit request endpoints
api_router.include_router(audit.router, prefix="/audit", tags=["audit"])

# Blog endpoints
api_router.include_router(blog.router, prefix="/blog", tags=["blog"])

# Opay payment endpoints
api_router.include_router(opay_payments.router, prefix="/payments", tags=["payments"])

# Testimonial endpoints
api_router.include_router(testimonials.router, prefix="/testimonials", tags=["testimonials"])

# Leads endpoints
api_router.include_router(leads.router, prefix="/leads", tags=["leads"])

