"""
Email service for sending transactional emails
"""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from app.core.config import settings


class EmailService:
    """Service for sending emails"""

    def __init__(self):
        self.smtp_server = settings.SMTP_SERVER or "smtp.gmail.com"
        self.smtp_port = settings.SMTP_PORT or 587
        self.sender_email = settings.SENDER_EMAIL or "noreply@nerdpace.com"
        self.sender_password = settings.SENDER_PASSWORD or ""

    def send_email(self, to_email: str, subject: str, html_content: str) -> bool:
        """Send email with HTML content"""
        try:
            message = MIMEMultipart("alternative")
            message["Subject"] = subject
            message["From"] = self.sender_email
            message["To"] = to_email

            # Attach HTML content
            part = MIMEText(html_content, "html")
            message.attach(part)

            # Send email
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.sender_email, self.sender_password)
                server.sendmail(self.sender_email, to_email, message.as_string())

            return True
        except Exception as e:
            print(f"Failed to send email to {to_email}: {str(e)}")
            return False

    def send_payment_confirmation(
        self,
        email: str,
        transaction_ref: str,
        amount: float,
        plan_name: str,
        payment_method: str = "Opay",
    ) -> bool:
        """Send payment confirmation email"""
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #1f2937;">Payment Initiated ✓</h2>
                    <p>Hello,</p>
                    <p>Thank you for choosing NerdPace! Your payment has been initiated successfully.</p>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3>Transaction Details</h3>
                        <table style="width: 100%;">
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Transaction Reference:</td>
                                <td style="padding: 8px;">{transaction_ref}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Plan:</td>
                                <td style="padding: 8px;">{plan_name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Amount:</td>
                                <td style="padding: 8px;">₦{amount:,.2f}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Payment Method:</td>
                                <td style="padding: 8px;">{payment_method}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Date:</td>
                                <td style="padding: 8px;">{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="background-color: #eff6ff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
                        <p><strong>Next Steps:</strong></p>
                        <p>Complete your payment using the reference number above. Once verified, you'll receive a receipt and your dashboard will be updated.</p>
                    </div>

                    <p>If you have any questions, please don't hesitate to contact us.</p>
                    <p>Best regards,<br/>NerdPace Team</p>
                </div>
            </body>
        </html>
        """

        return self.send_email(
            email,
            f"Payment Initiated - {transaction_ref}",
            html_content,
        )

    def send_payment_receipt(
        self,
        email: str,
        transaction_ref: str,
        amount: float,
        plan_name: str,
        status: str = "completed",
    ) -> bool:
        """Send payment receipt email"""
        status_badge = "✓ Completed" if status == "completed" else "⏳ Pending"
        status_color = "#10b981" if status == "completed" else "#f59e0b"

        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #1f2937;">Payment Receipt</h2>
                    <p>Hello,</p>
                    <p>Your payment has been processed successfully.</p>
                    
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3>Receipt Details</h3>
                        <table style="width: 100%;">
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Receipt Number:</td>
                                <td style="padding: 8px;">{transaction_ref}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Plan:</td>
                                <td style="padding: 8px;">{plan_name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Amount Paid:</td>
                                <td style="padding: 8px;">₦{amount:,.2f}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Date:</td>
                                <td style="padding: 8px;">{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold;">Status:</td>
                                <td style="padding: 8px; color: {status_color}; font-weight: bold;">{status_badge}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="background-color: #f0fdf4; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0;">
                        <p><strong>✓ Your Access is Active</strong></p>
                        <p>You can now access your plan benefits immediately. Log in to your dashboard to get started.</p>
                    </div>

                    <p>Thank you for your business!</p>
                    <p>Best regards,<br/>NerdPace Team</p>
                </div>
            </body>
        </html>
        """

        return self.send_email(
            email,
            f"Payment Receipt - {transaction_ref}",
            html_content,
        )


async def send_payment_confirmation_email(
    email: str,
    transaction_ref: str,
    amount: float,
    plan_name: str,
    payment_method: str = "Opay",
) -> bool:
    """Async wrapper for sending payment confirmation"""
    service = EmailService()
    return service.send_payment_confirmation(
        email=email,
        transaction_ref=transaction_ref,
        amount=amount,
        plan_name=plan_name,
        payment_method=payment_method,
    )


async def send_payment_receipt_email(
    email: str,
    transaction_ref: str,
    amount: float,
    plan_name: str,
    status: str = "completed",
) -> bool:
    """Async wrapper for sending payment receipt"""
    service = EmailService()
    return service.send_payment_receipt(
        email=email,
        transaction_ref=transaction_ref,
        amount=amount,
        plan_name=plan_name,
        status=status,
    )
