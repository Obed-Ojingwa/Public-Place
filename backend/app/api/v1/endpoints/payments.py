# // ============================================================================
# // FILE 3: Backend Payment Routes
# // Path: C:\Users\[YourUsername]\Documents\nerdpace\backend\app\api\v1\endpoints\payments.py
 
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession
import stripe
from datetime import datetime
 
from app.core.config import settings
from app.models.client import Client
from app.models.user import User
from app.db.session import get_db
from app.services.email import send_payment_confirmation_email
 
# Initialize Stripe
stripe.api_key = settings.STRIPE_SECRET_KEY
 
router = APIRouter()
 
 
@router.post("/create-payment-intent")
async def create_payment_intent(
    payment_data: dict,
    db: AsyncSession = Depends(get_db)
):
    """Create a Stripe payment intent"""
    
    try:
        intent = stripe.PaymentIntent.create(
            amount=payment_data['amount'],  # Amount in cents
            currency='usd',
            description=f"NerdPace Plan: {payment_data['planId']}",
            metadata={
                'plan_id': payment_data['planId'],
                'email': payment_data['email'],
            },
        )
 
        return {"clientSecret": intent.client_secret}
 
    except stripe.error.CardError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except stripe.error.RateLimitError:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")
    except stripe.error.InvalidRequestError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except stripe.error.APIConnectionError:
        raise HTTPException(status_code=503, detail="Network error")
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=500, detail="Payment processing error")
 
 
@router.post("/webhook")
async def stripe_webhook(request: Request, db: AsyncSession = Depends(get_db)):
    """Handle Stripe webhook events"""
    
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')
 
    try:
        event = stripe.Webhook.construct_event(
            payload,
            sig_header,
            settings.STRIPE_WEBHOOK_SECRET
        )
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid signature")
 
    # Handle the event
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        await handle_payment_succeeded(payment_intent, db)
 
    elif event['type'] == 'payment_intent.payment_failed':
        payment_intent = event['data']['object']
        await handle_payment_failed(payment_intent, db)
 
    elif event['type'] == 'customer.subscription.updated':
        subscription = event['data']['object']
        await handle_subscription_updated(subscription, db)
 
    elif event['type'] == 'customer.subscription.deleted':
        subscription = event['data']['object']
        await handle_subscription_cancelled(subscription, db)
 
    return {"status": "success"}
 
 
async def handle_payment_succeeded(payment_intent: dict, db: AsyncSession):
    """Handle successful payment"""
    
    email = payment_intent['metadata']['email']
    plan_id = payment_intent['metadata']['plan_id']
    amount = payment_intent['amount'] / 100  # Convert from cents
 
    # Map plan IDs to subscription details
    plan_mapping = {
        'starter-audit': {'tier': 'starter', 'monthly_cost': 497, 'is_one_time': True},
        'growth-seo': {'tier': 'growth', 'monthly_cost': 1500, 'is_one_time': False},
        'premium-retainer': {'tier': 'premium', 'monthly_cost': 3500, 'is_one_time': False},
    }
 
    plan_details = plan_mapping.get(plan_id)
    if not plan_details:
        return
 
    # Create or update user
    from sqlalchemy import select
    user_query = select(User).where(User.email == email)
    result = await db.execute(user_query)
    user = result.scalar_one_or_none()
 
    if not user:
        user = User(
            email=email,
            first_name='Customer',
            role='user'
        )
        db.add(user)
        await db.flush()
 
    # Create client subscription
    client = Client(
        user_id=user.id,
        subscription_tier=plan_details['tier'],
        subscription_status='active',
        stripe_customer_id=payment_intent['customer'],
        monthly_cost=plan_details['monthly_cost'],
        contract_start_date=datetime.now().date(),
        auto_renew=not plan_details['is_one_time'],
    )
    db.add(client)
    await db.commit()
 
    # Send confirmation email
    await send_payment_confirmation_email(
        email=email,
        plan_name=plan_id.replace('-', ' ').title(),
        amount=amount
    )
 
 
async def handle_payment_failed(payment_intent: dict, db: AsyncSession):
    """Handle failed payment"""
    # Log failed payment and send notification email
    email = payment_intent['metadata']['email']
    # Send email to user
    pass
 
 
async def handle_subscription_updated(subscription: dict, db: AsyncSession):
    """Handle subscription update"""
    # Update client subscription in database
    pass
 
 
async def handle_subscription_cancelled(subscription: dict, db: AsyncSession):
    """Handle subscription cancellation"""
    # Update client subscription status to cancelled
    from sqlalchemy import select, update
    
    stripe_customer_id = subscription['customer']
    
    # Update client status
    stmt = (
        update(Client)
        .where(Client.stripe_customer_id == stripe_customer_id)
        .values(subscription_status='cancelled')
    )
    await db.execute(stmt)
    await db.commit()
 
 
@router.post("/invoices")
async def get_customer_invoices(
    customer_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Get customer invoices"""
    
    try:
        invoices = stripe.Invoice.list(customer=customer_id, limit=10)
        return {"invoices": invoices['data']}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=500, detail=str(e))
 
 
@router.post("/update-payment-method")
async def update_payment_method(
    customer_id: str,
    payment_method_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Update customer payment method"""
    
    try:
        stripe.Customer.modify(
            customer_id,
            invoice_settings={
                'default_payment_method': payment_method_id,
            }
        )
        return {"status": "success", "message": "Payment method updated"}
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=500, detail=str(e))
 
 
@router.post("/cancel-subscription")
async def cancel_subscription(
    customer_id: str,
    current_user: dict = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    """Cancel customer subscription"""
    
    try:
        # Get active subscriptions for customer
        subscriptions = stripe.Subscription.list(
            customer=customer_id,
            status='active',
            limit=1
        )
 
        if subscriptions['data']:
            subscription = subscriptions['data'][0]
            stripe.Subscription.delete(subscription['id'])
 
        # Update database
        from sqlalchemy import update
        stmt = (
            update(Client)
            .where(Client.stripe_customer_id == customer_id)
            .values(subscription_status='cancelled')
        )
        await db.execute(stmt)
        await db.commit()
 
        return {"status": "success", "message": "Subscription cancelled"}
 
    except stripe.error.StripeError as e:
        raise HTTPException(status_code=500, detail=str(e))
 