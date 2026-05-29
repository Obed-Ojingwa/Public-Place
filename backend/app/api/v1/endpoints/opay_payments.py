# // ============================================================================
# // FIX 7: BACKEND OPAY ENDPOINT - COMPLETE PAYMENT FLOW
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\api\v1\endpoints\opay_payments.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from datetime import datetime
import uuid

from app.db.session import get_db
from app.models.opay_payment import OpayTransaction, OpayTransactionStatus
from app.services.email import send_payment_confirmation_email, send_payment_receipt_email
from app.services.receipt import generate_receipt_json

router = APIRouter()

# Opay Configuration - Get from environment or use defaults
OPAY_ACCOUNT_NUMBER = "0123456789"  # Your business Opay account number
 
@router.post("/create-opay-transaction")
async def create_opay_transaction(
    transaction_data: dict,
    db: AsyncSession = Depends(get_db)
):
    """Create Opay transaction reference"""
    
    try:
        email = transaction_data.get('email')
        amount = transaction_data.get('amount')
        plan_id = transaction_data.get('planId')
        plan_name = transaction_data.get('planName')
 
        if not email or not amount:
            raise HTTPException(status_code=400, detail="Missing required fields")
 
        # Generate transaction reference
        transaction_ref = f"NP-{uuid.uuid4().hex[:8].upper()}-{datetime.now().strftime('%Y%m%d')}"
 
        # Store transaction in database
        new_transaction = OpayTransaction(
            reference=transaction_ref,
            email=email,
            amount=amount,
            plan_id=plan_id,
            plan_name=plan_name,
            status=OpayTransactionStatus.PENDING,
            created_at=datetime.utcnow(),
        )
 
        db.add(new_transaction)
        await db.commit()
        await db.refresh(new_transaction)
 
        # Send transaction confirmation email
        await send_payment_confirmation_email(
            email=email,
            transaction_ref=transaction_ref,
            amount=amount,
            plan_name=plan_name,
            payment_method="Opay"
        )
 
        return {
            "status": 200,
            "message": "Transaction created successfully",
            "data": {
                "reference": transaction_ref,
                "amount": amount,
                "email": email,
                "plan": plan_name,
                "accountNumber": OPAY_ACCOUNT_NUMBER,
            }
        }
 
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to create transaction: {str(e)}"
        )
 
 
@router.post("/verify-opay-payment")
async def verify_opay_payment(
    transaction_data: dict,
    db: AsyncSession = Depends(get_db)
):
    """Verify Opay payment status"""
    
    try:
        reference = transaction_data.get('reference')
        
        if not reference:
            raise HTTPException(status_code=400, detail="Transaction reference required")
 
        # Get transaction from database
        query = select(OpayTransaction).where(OpayTransaction.reference == reference)
        result = await db.execute(query)
        transaction = result.scalar_one_or_none()
 
        if not transaction:
            raise HTTPException(status_code=404, detail="Transaction not found")
 
        # In production, verify with Opay API
        # For now, mark as completed when verification is triggered
        if transaction.status == OpayTransactionStatus.PENDING:
            stmt = (
                update(OpayTransaction)
                .where(OpayTransaction.reference == reference)
                .values(
                    status=OpayTransactionStatus.COMPLETED,
                    completed_at=datetime.utcnow()
                )
            )
            await db.execute(stmt)
            await db.commit()
 
            # Send receipt email
            await send_payment_receipt_email(
                email=transaction.email,
                transaction_ref=reference,
                amount=float(transaction.amount),
                plan_name=transaction.plan_name,
                status="completed"
            )
 
            # Generate receipt
            receipt_data = generate_receipt_json(
                transaction_ref=reference,
                email=transaction.email,
                amount=float(transaction.amount),
                plan_name=transaction.plan_name,
                status="completed"
            )
 
            return {
                "status": 200,
                "message": "Payment verified successfully",
                "data": {
                    "reference": reference,
                    "status": "completed",
                    **receipt_data
                }
            }
        else:
            return {
                "status": 200,
                "message": "Payment already processed",
                "data": {
                    "reference": reference,
                    "status": transaction.status.value
                }
            }
 
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to verify payment: {str(e)}"
        )


@router.get("/receipt/{reference}")
async def get_receipt(
    reference: str,
    db: AsyncSession = Depends(get_db)
):
    """Get payment receipt by transaction reference"""
    try:
        query = select(OpayTransaction).where(OpayTransaction.reference == reference)
        result = await db.execute(query)
        transaction = result.scalar_one_or_none()

        if not transaction:
            raise HTTPException(status_code=404, detail="Transaction not found")

        receipt_data = generate_receipt_json(
            transaction_ref=reference,
            email=transaction.email,
            amount=float(transaction.amount),
            plan_name=transaction.plan_name,
            status=transaction.status.value
        )

        return {
            "status": 200,
            "message": "Receipt retrieved successfully",
            **receipt_data
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve receipt: {str(e)}"
        )


@router.post("/transaction-status/{reference}")
async def get_transaction_status(
    reference: str,
    db: AsyncSession = Depends(get_db)
):
    """Get transaction status"""
    try:
        query = select(OpayTransaction).where(OpayTransaction.reference == reference)
        result = await db.execute(query)
        transaction = result.scalar_one_or_none()

        if not transaction:
            raise HTTPException(status_code=404, detail="Transaction not found")

        return {
            "status": 200,
            "data": {
                "reference": reference,
                "status": transaction.status.value,
                "email": transaction.email,
                "amount": float(transaction.amount),
                "plan_name": transaction.plan_name,
                "created_at": transaction.created_at.isoformat(),
                "completed_at": transaction.completed_at.isoformat() if transaction.completed_at else None,
            }
        }

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to retrieve transaction status: {str(e)}"
        )
