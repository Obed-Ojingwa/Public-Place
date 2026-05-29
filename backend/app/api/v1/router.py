"""
API v1 Router - Aggregates all endpoints
"""
from fastapi import APIRouter
from app.api.v1.endpoints import health, contact, audit, opay_payments

# Initialize router
api_router = APIRouter()

# Health endpoint
api_router.include_router(health.router, tags=["Health"])

# Contact form endpoints
api_router.include_router(contact.router, prefix="/contact", tags=["contact"])

# Audit request endpoints
api_router.include_router(audit.router, prefix="/audit", tags=["audit"])

# Opay payment endpoints
api_router.include_router(opay_payments.router, prefix="/payments", tags=["payments"])

