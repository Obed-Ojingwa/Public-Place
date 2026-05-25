// ============================================================================
// FIX 6: OPAY API ROUTE
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\api\create-opay-transaction\route.ts
 
import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, email, amount, planName } = body;
 
    if (!email || !amount) {
      return NextResponse.json(
        { status: 400, message: 'Missing required fields' },
        { status: 400 }
      );
    }
 
    
    // Call your backend API to create transaction
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
 
    const response = await fetch(`${backendUrl}/api/v1/payments/create-opay-transaction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planId,
        email,
        amount,
        planName,
        timestamp: new Date().toISOString(),
      }),
    });
 
    const data = await response.json();
 
    return NextResponse.json(data);
  } catch (error) {
    console.error('Transaction Error:', error);
    return NextResponse.json(
      {
        status: 500,
        message: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}