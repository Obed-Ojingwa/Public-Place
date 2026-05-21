 
# // ============================================================================
# // FILE 4: Client Model for Subscriptions
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\models\client.py
 
from sqlalchemy import Column, String, DateTime, Boolean, Numeric, Date, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from datetime import datetime, date
import uuid
 
from app.db.base import Base
 
 
class Client(Base):
    """Client subscription model for paid plans"""
    
    __tablename__ = "clients"
 
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), unique=True, nullable=False)
    
    # Subscription details
    subscription_tier = Column(String(50))  # 'starter', 'growth', 'premium'
    subscription_status = Column(String(50), default='active')  # 'active', 'cancelled', 'paused'
    
    # Stripe integration
    stripe_customer_id = Column(String(255), unique=True)
    stripe_subscription_id = Column(String(255), unique=True, nullable=True)
    
    # Billing
    monthly_cost = Column(Numeric(10, 2))
    contract_start_date = Column(Date, default=date.today)
    contract_end_date = Column(Date, nullable=True)
    auto_renew = Column(Boolean, default=True)
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    user = relationship("User", backref="client")
 
    def __repr__(self):
        return f"<Client {self.user_id} - {self.subscription_tier}>"
 
 
class Invoice(Base):
    """Invoice model for payment tracking"""
    
    __tablename__ = "invoices"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    client_id = Column(UUID(as_uuid=True), ForeignKey("clients.id"))
    
    stripe_invoice_id = Column(String(255), unique=True)
    amount = Column(Numeric(10, 2))
    currency = Column(String(3), default='USD')
    status = Column(String(50))  # 'paid', 'pending', 'failed'
    
    invoice_date = Column(Date)
    due_date = Column(Date)
    paid_date = Column(Date, nullable=True)
    
    description = Column(String(500))
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    client = relationship("Client", backref="invoices")
 
    def __repr__(self):
        return f"<Invoice {self.stripe_invoice_id}>"
 