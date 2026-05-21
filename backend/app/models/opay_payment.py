# // ============================================================================
# // FIX 8: OPAY PAYMENT MODEL
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\models\opay_payment.py
 
from sqlalchemy import Column, String, Numeric, DateTime, Boolean, Enum
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid
import enum
 
from app.db.base import Base
 
 
class OpayTransactionStatus(str, enum.Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"
 
 
class OpayTransaction(Base):
    """Opay payment transaction tracking"""
    
    __tablename__ = "opay_transactions"
 
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    reference = Column(String(255), unique=True, nullable=False, index=True)
    
    # Transaction details
    email = Column(String(255), nullable=False)
    amount = Column(Numeric(10, 2), nullable=False)
    plan_id = Column(String(100))
    plan_name = Column(String(255))
    
    # Status tracking
    status = Column(Enum(OpayTransactionStatus), default=OpayTransactionStatus.PENDING)
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    completed_at = Column(DateTime, nullable=True)
 
    def __repr__(self):
        return f"<OpayTransaction {self.reference}>"
 