import { NextRequest, NextResponse } from "next/server";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reference } = body;

    if (!reference) {
      return NextResponse.json(
        { status: 400, message: "Transaction reference required" },
        { status: 400 }
      );
    }

    // Call backend to verify payment
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/v1/payments/verify-opay-payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reference }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "Failed to verify payment",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
