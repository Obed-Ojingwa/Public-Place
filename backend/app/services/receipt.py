"""
Receipt generation service
"""
from datetime import datetime
from typing import Optional


class ReceiptService:
    """Service for generating payment receipts"""

    @staticmethod
    def generate_receipt_html(
        transaction_ref: str,
        email: str,
        amount: float,
        plan_name: str,
        status: str = "completed",
        customer_name: str = "",
    ) -> str:
        """Generate HTML receipt"""
        status_badge = "✓ Completed" if status == "completed" else "⏳ Pending"
        status_color = "#10b981" if status == "completed" else "#f59e0b"
        transaction_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        html = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{
                    font-family: Arial, sans-serif;
                    background-color: #f9fafb;
                    margin: 0;
                    padding: 20px;
                }}
                .receipt-container {{
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    padding: 40px;
                }}
                .receipt-header {{
                    text-align: center;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }}
                .company-name {{
                    font-size: 28px;
                    font-weight: bold;
                    color: #1f2937;
                    margin: 0;
                }}
                .receipt-title {{
                    font-size: 18px;
                    font-weight: bold;
                    color: #1f2937;
                    margin: 20px 0 10px 0;
                }}
                .receipt-details {{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin: 20px 0;
                }}
                .detail-item {{
                    padding: 10px 0;
                    border-bottom: 1px solid #f3f4f6;
                }}
                .detail-label {{
                    font-size: 12px;
                    color: #6b7280;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 5px;
                }}
                .detail-value {{
                    font-size: 14px;
                    font-weight: bold;
                    color: #1f2937;
                }}
                .summary {{
                    background-color: #f3f4f6;
                    border-radius: 8px;
                    padding: 20px;
                    margin: 30px 0;
                }}
                .summary-row {{
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0;
                    font-size: 14px;
                }}
                .summary-label {{
                    color: #6b7280;
                }}
                .summary-value {{
                    font-weight: bold;
                    color: #1f2937;
                }}
                .total-row {{
                    font-size: 18px;
                    font-weight: bold;
                    border-top: 2px solid #e5e7eb;
                    padding-top: 10px;
                }}
                .status-badge {{
                    display: inline-block;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-weight: bold;
                    margin: 20px 0;
                    background-color: {status_color}20;
                    color: {status_color};
                }}
                .footer {{
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                    font-size: 12px;
                    color: #6b7280;
                }}
                .print-button {{
                    text-align: center;
                    margin-top: 20px;
                }}
                .print-button button {{
                    background-color: #3b82f6;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                }}
                .print-button button:hover {{
                    background-color: #2563eb;
                }}
                @media print {{
                    .print-button {{
                        display: none;
                    }}
                }}
            </style>
        </head>
        <body>
            <div class="receipt-container">
                <div class="receipt-header">
                    <h1 class="company-name">NerdPace</h1>
                    <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">Technical SEO Agency</p>
                </div>

                <h2 class="receipt-title">Payment Receipt</h2>

                <div class="receipt-details">
                    <div class="detail-item">
                        <div class="detail-label">Receipt Number</div>
                        <div class="detail-value">{transaction_ref}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Date</div>
                        <div class="detail-value">{transaction_date}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Email</div>
                        <div class="detail-value">{email}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Status</div>
                        <div class="detail-value" style="color: {status_color};">{status_badge}</div>
                    </div>
                </div>

                <div class="summary">
                    <div class="summary-row">
                        <span class="summary-label">Plan:</span>
                        <span class="summary-value">{plan_name}</span>
                    </div>
                    <div class="summary-row">
                        <span class="summary-label">Tax:</span>
                        <span class="summary-value">₦0.00</span>
                    </div>
                    <div class="summary-row">
                        <span class="summary-label">Discount:</span>
                        <span class="summary-value">₦0.00</span>
                    </div>
                    <div class="summary-row total-row">
                        <span class="summary-label">Total:</span>
                        <span class="summary-value">₦{amount:,.2f}</span>
                    </div>
                </div>

                <div style="text-align: center;">
                    <div class="status-badge">{status_badge}</div>
                </div>

                <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                    <p style="margin: 0; font-size: 14px; color: #166534;">
                        <strong>✓ Payment Confirmed</strong><br/>
                        Your access has been activated. You can now use all benefits of your plan.
                    </p>
                </div>

                <div class="print-button">
                    <button onclick="window.print()">🖨️ Print Receipt</button>
                </div>

                <div class="footer">
                    <p style="margin: 10px 0;">
                        Thank you for your business!<br/>
                        NerdPace Team | support@nerdpace.com
                    </p>
                </div>
            </div>
        </body>
        </html>
        """
        return html

    @staticmethod
    def generate_receipt_json(
        transaction_ref: str,
        email: str,
        amount: float,
        plan_name: str,
        status: str = "completed",
    ) -> dict:
        """Generate receipt as JSON for API response"""
        return {
            "receipt": {
                "reference": transaction_ref,
                "email": email,
                "amount": float(amount),
                "plan_name": plan_name,
                "status": status,
                "issued_at": datetime.now().isoformat(),
                "html": ReceiptService.generate_receipt_html(
                    transaction_ref=transaction_ref,
                    email=email,
                    amount=amount,
                    plan_name=plan_name,
                    status=status,
                ),
            }
        }


def generate_receipt_html(
    transaction_ref: str,
    email: str,
    amount: float,
    plan_name: str,
    status: str = "completed",
) -> str:
    """Generate receipt HTML"""
    return ReceiptService.generate_receipt_html(
        transaction_ref=transaction_ref,
        email=email,
        amount=amount,
        plan_name=plan_name,
        status=status,
    )


def generate_receipt_json(
    transaction_ref: str,
    email: str,
    amount: float,
    plan_name: str,
    status: str = "completed",
) -> dict:
    """Generate receipt JSON"""
    return ReceiptService.generate_receipt_json(
        transaction_ref=transaction_ref,
        email=email,
        amount=amount,
        plan_name=plan_name,
        status=status,
    )
