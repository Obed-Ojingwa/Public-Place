// ============================================================================
// FIX 5: OPAY PAYMENT INTEGRATION
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\checkout\page.tsx
 
'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { Check, AlertCircle, DollarSign, Copy, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';
 
interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
}
 
const pricingPlans: PricingPlan[] = [
  {
    id: 'starter-audit',
    name: 'Starter Audit',
    price: 497,
    period: 'one-time',
    description: 'One-time SEO audit',
    features: [
      'Technical audit',
      'Lighthouse analysis',
      'Core Web Vitals',
      'PDF report',
      '30-min call',
    ],
  },
  {
    id: 'growth-seo',
    name: 'Growth SEO',
    price: 1500,
    period: 'month',
    description: 'Monthly optimization retainer',
    features: [
      'Everything in Audit',
      'Monthly optimization',
      'Keyword tracking',
      'Content strategy',
      'Monthly reports',
    ],
  },
  {
    id: 'premium-retainer',
    name: 'Premium Retainer',
    price: 3500,
    period: 'month',
    description: 'Full-service growth program',
    features: [
      'Everything in Growth',
      'Dedicated manager',
      'Priority support',
      'Custom content',
      'Quarterly reviews',
    ],
  },
];
 
// OPAY CONFIGURATION
const OPAY_CONFIG = {
  merchantId: 'YOUR_MERCHANT_ID', // Get from Opay
  apiKey: 'YOUR_API_KEY', // Get from Opay
  accountNumber: '0123456789', // Your Opay account number (from your Opay dashboard)
  accountName: 'NerdPace SEO Agency',
  apiBase: 'https://api.opayweb.com/api/v1', // Opay API endpoint
};
 
interface OpayTransactionResponse {
  status: number;
  message: string;
  data: {
    reference: string;
    paymentLink?: string;
  };
}

interface ReceiptData {
  receipt?: {
    reference: string;
    email: string;
    amount: number;
    plan_name: string;
    status: string;
    issued_at: string;
    html: string;
  };
}
 
export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get('plan') || 'growth-seo';
  const plan = pricingPlans.find((p) => p.id === planId) || pricingPlans[1];
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [email, setEmail] = useState('');
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');
  const [opayAccountCopied, setOpayAccountCopied] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string>('pending');
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
 
  // Create Opay Transaction
  const createOpayTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
 
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
 
    setLoading(true);
 
    try {
      // Call your backend to create Opay transaction
      const response = await fetch('/api/create-opay-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          email,
          amount: plan.price,
          planName: plan.name,
        }),
      });
 
      const data: OpayTransactionResponse = await response.json();
 
      if (data.status !== 200) {
        throw new Error(data.message || 'Failed to create transaction');
      }
 
      setTransactionRef(data.data.reference);
      setPaymentInitiated(true);

      toast.success('Transaction created! You can now pay via Opay');

      // Optional: If Opay provides a payment link, redirect after delay
      const paymentLink = data.data.paymentLink;
      if (paymentLink) {
        setTimeout(() => {
          window.location.href = paymentLink;
        }, 2000);
      }
    } catch (error) {
      console.error('Transaction Error:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to create transaction'
      );
    } finally {
      setLoading(false);
    }
  };

  // Verify Payment and Get Receipt
  const verifyPayment = async () => {
    if (!transactionRef) return;
    
    setVerifying(true);
    try {
      const response = await fetch('/api/verify-opay-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: transactionRef }),
      });

      const data = await response.json();
      
      if (data.status === 200 && data.data?.receipt) {
        setReceiptData(data.data);
        setPaymentStatus('completed');
        toast.success('Payment verified! Receipt generated.');
      } else {
        setPaymentStatus('pending');
        toast.info('Payment still pending. Please try again in a moment.');
      }
    } catch (error) {
      console.error('Verification Error:', error);
      toast.error('Failed to verify payment. Please try again.');
    } finally {
      setVerifying(false);
    }
  };

  // Download Receipt as HTML
  const downloadReceipt = () => {
    if (!receiptData?.receipt?.html) return;
    
    const element = document.createElement('a');
    element.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(receiptData.receipt.html);
    element.download = `Receipt-${transactionRef}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Receipt downloaded!');
  };
 
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setOpayAccountCopied(true);
    toast.success('Account number copied!');
    setTimeout(() => setOpayAccountCopied(false), 2000);
  };
 
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Complete Your Purchase</h1>
            <p className="text-xl text-slate-600">Secure payment via Opay for {plan.name}</p>
          </motion.div>
 
          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PAYMENT FORM */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-slate-200 p-8 h-fit"
            >
              {!paymentInitiated ? (
                <form onSubmit={createOpayTransaction} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
 
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-900">
                      <strong>ℹ️ Payment Method:</strong> You'll be able to pay via Opay after creating the transaction.
                    </p>
                  </div>
 
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    {loading ? 'Creating Transaction...' : 'Create Transaction'}
                  </button>
 
                  <p className="text-xs text-slate-600 text-center">
                    Your payment is secure. Transaction ID will be provided.
                  </p>
                </form>
              ) : receiptData?.receipt ? (
                // RECEIPT DISPLAY
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-green-900 mb-2">✓ Payment Verified!</h3>
                    <p className="text-green-700 mb-2">
                      Your payment has been successfully processed.
                    </p>
                    <p className="text-sm text-green-600">
                      Receipt ID: {receiptData.receipt.reference}
                    </p>
                  </div>

                  <div 
                    className="border border-slate-300 rounded-lg overflow-hidden h-96 bg-white"
                    dangerouslySetInnerHTML={{ __html: receiptData.receipt.html }}
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={downloadReceipt}
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      📥 Download Receipt
                    </button>
                    <button
                      onClick={() => router.push('/checkout/success')}
                      className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      ✓ Continue
                    </button>
                  </div>
                </div>
              ) : (
                // PAYMENT INSTRUCTIONS
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-green-900 mb-2">Transaction Created!</h3>
                    <p className="text-green-700 mb-4">
                      Use the information below to complete payment via Opay.
                    </p>
                  </div>
 
                  {/* OPAY PAYMENT DETAILS */}
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-4">📱 Pay via Opay</h4>
 
                    <div className="space-y-4">
                      {/* Account Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Account Number
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded text-sm font-mono text-slate-900">
                            {OPAY_CONFIG.accountNumber}
                          </div>
                          <button
                            onClick={() => copyToClipboard(OPAY_CONFIG.accountNumber)}
                            className="p-2 hover:bg-slate-200 rounded transition-colors"
                          >
                            {opayAccountCopied ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            ) : (
                              <Copy className="w-5 h-5 text-slate-600" />
                            )}
                          </button>
                        </div>
                      </div>
 
                      {/* Account Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Account Name
                        </label>
                        <div className="px-3 py-2 bg-white border border-slate-300 rounded text-sm text-slate-900">
                          {OPAY_CONFIG.accountName}
                        </div>
                      </div>
 
                      {/* Transaction Reference */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Transaction Reference
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded text-sm font-mono text-slate-900">
                            {transactionRef}
                          </div>
                          <button
                            onClick={() => copyToClipboard(transactionRef)}
                            className="p-2 hover:bg-slate-200 rounded transition-colors"
                          >
                            <Copy className="w-5 h-5 text-slate-600" />
                          </button>
                        </div>
                      </div>
 
                      {/* Amount */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Amount to Pay
                        </label>
                        <div className="text-2xl font-bold text-slate-900">
                          ₦{plan.price.toLocaleString()}
        }, 2000);
      }
    } catch (error) {
      console.error('Transaction Error:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to create transaction'
      );
    } finally {
      setLoading(false);
    }
  };

 
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setOpayAccountCopied(true);
    toast.success('Account number copied!');
    setTimeout(() => setOpayAccountCopied(false), 2000);
  };
 
  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Complete Your Purchase</h1>
            <p className="text-xl text-slate-600">Secure payment via Opay for {plan.name}</p>
          </motion.div>
 
          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PAYMENT FORM */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-slate-200 p-8 h-fit"
            >
              {!paymentInitiated ? (
                <form onSubmit={createOpayTransaction} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
 
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-900">
                      <strong>ℹ️ Payment Method:</strong> You'll be able to pay via Opay after creating the transaction.
                    </p>
                  </div>
 
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    {loading ? 'Creating Transaction...' : 'Create Transaction'}
                  </button>
 
                  <p className="text-xs text-slate-600 text-center">
                    Your payment is secure. Transaction ID will be provided.
                  </p>
                </form>
              ) : (
                // PAYMENT INSTRUCTIONS
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-green-900 mb-2">Transaction Created!</h3>
                    <p className="text-green-700 mb-4">
                      Use the information below to complete payment via Opay.
                    </p>
                  </div>
 
                  {/* OPAY PAYMENT DETAILS */}
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-4">📱 Pay via Opay</h4>
 
                    <div className="space-y-4">
                      {/* Account Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Account Number
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded text-sm font-mono text-slate-900">
                            {OPAY_CONFIG.accountNumber}
                          </div>
                          <button
                            onClick={() => copyToClipboard(OPAY_CONFIG.accountNumber)}
                            className="p-2 hover:bg-slate-200 rounded transition-colors"
                          >
                            {opayAccountCopied ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                            ) : (
                              <Copy className="w-5 h-5 text-slate-600" />
                            )}
                          </button>
                        </div>
                      </div>
 
                      {/* Account Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Account Name
                        </label>
                        <div className="px-3 py-2 bg-white border border-slate-300 rounded text-sm text-slate-900">
                          {OPAY_CONFIG.accountName}
                        </div>
                      </div>
 
                      {/* Transaction Reference */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Transaction Reference
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded text-sm font-mono text-slate-900">
                            {transactionRef}
                          </div>
                          <button
                            onClick={() => copyToClipboard(transactionRef)}
                            className="p-2 hover:bg-slate-200 rounded transition-colors"
                          >
                            <Copy className="w-5 h-5 text-slate-600" />
                          </button>
                        </div>
                      </div>
 
                      {/* Amount */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-2">
                          Amount to Pay
                        </label>
                        <div className="text-2xl font-bold text-slate-900">
                          ₦{plan.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
 
                  {/* INSTRUCTIONS */}
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-3">📝 How to Pay</h4>
                    <ol className="space-y-2 text-sm text-blue-900">
                      <li>1. Open your Opay mobile app or web portal</li>
                      <li>2. Select "Send Money" or "Transfer"</li>
                      <li>3. Enter the Account Number above</li>
                      <li>4. Enter the Amount: ₦{plan.price.toLocaleString()}</li>
                      <li>5. Add Reference: {transactionRef}</li>
                      <li>6. Complete the payment</li>
                    </ol>
                  </div>
 
                  {/* PAYMENT VERIFICATION */}
                  <div className="space-y-3">
                    <button
                      onClick={verifyPayment}
                      disabled={verifying}
                      className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {verifying ? 'Verifying Payment...' : '✓ Verify Payment & Get Receipt'}
                    </button>

                    <p className="text-xs text-slate-600 text-center">
                      After making payment, click verify to check status and download receipt.
                    </p>

                    <button
                      onClick={() => setPaymentInitiated(false)}
                      className="w-full px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg transition-colors"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
 
            {/* ORDER SUMMARY */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl border border-slate-200 p-8 h-fit"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
 
              {/* PLAN DETAILS */}
              <div className="mb-8 pb-8 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
 
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* PRICING */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-slate-600">Amount</span>
                  <span className="font-semibold text-slate-900">
                    ₦{plan.price.toLocaleString()}
                  </span>
                </div>
                {plan.period === 'month' && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Billing</span>
                    <span className="font-semibold text-slate-900">
                      ₦{plan.price.toLocaleString()}/month
                    </span>
                  </div>
                )}
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-bold text-slate-900">
                    ₦{plan.price.toLocaleString()}
                  </span>
                </div>
              </div>
 
              {/* GUARANTEE */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>30-day guarantee:</strong> Not satisfied? Get a full refund, no questions asked.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}


// // ============================================================================
// // PAYMENT & SUBSCRIPTION SYSTEM - COMPLETE FRONTEND + BACKEND IMPLEMENTATION
// // ============================================================================
 
// // FILE 1: Frontend Checkout Page
// // Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\checkout\page.tsx
 
// 'use client';
 
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { Check, Lock, AlertCircle } from 'lucide-react';
// import { loadStripe } from '@stripe/js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import toast from 'react-hot-toast';
 
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
 
// interface PricingPlan {
//   id: string;
//   name: string;
//   price: number;
//   period: string;
//   description: string;
//   features: string[];
// }
 
// const pricingPlans: PricingPlan[] = [
//   {
//     id: 'starter-audit',
//     name: 'Starter Audit',
//     price: 497,
//     period: 'one-time',
//     description: 'One-time SEO audit',
//     features: [
//       'Technical audit',
//       'Lighthouse analysis',
//       'Core Web Vitals',
//       'PDF report',
//       '30-min call',
//     ],
//   },
//   {
//     id: 'growth-seo',
//     name: 'Growth SEO',
//     price: 1500,
//     period: 'month',
//     description: 'Monthly optimization retainer',
//     features: [
//       'Everything in Audit',
//       'Monthly optimization',
//       'Keyword tracking',
//       'Content strategy',
//       'Monthly reports',
//     ],
//   },
//   {
//     id: 'premium-retainer',
//     name: 'Premium Retainer',
//     price: 3500,
//     period: 'month',
//     description: 'Full-service growth program',
//     features: [
//       'Everything in Growth',
//       'Dedicated manager',
//       'Priority support',
//       'Custom content',
//       'Quarterly reviews',
//     ],
//   },
// ];
 
// function CheckoutForm({ plan }: { plan: PricingPlan }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
 
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
 
//     if (!stripe || !elements) {
//       setError('Stripe not loaded');
//       return;
//     }
 
//     setLoading(true);
 
//     try {
//       // Create payment intent
//       const response = await fetch('/api/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           planId: plan.id,
//           email,
//           amount: plan.price * 100, // Convert to cents
//         }),
//       });
 
//       const { clientSecret } = await response.json();
 
//       // Confirm payment
//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement)!,
//           billing_details: { email },
//         },
//       });
 
//       if (stripeError) {
//         setError(stripeError.message || 'Payment failed');
//         setLoading(false);
//         return;
//       }
 
//       if (paymentIntent?.status === 'succeeded') {
//         toast.success('Payment successful! Setting up your account...');
//         // Redirect to success page
//         router.push(`/checkout/success?paymentId=${paymentIntent.id}`);
//       }
//     } catch (err: any) {
//       setError(err.message || 'An error occurred');
//       setLoading(false);
//     }
//   };
 
//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="you@example.com"
//         />
//       </div>
 
//       <div>
//         <label className="block text-sm font-semibold text-slate-900 mb-2">Card Details</label>
//         <div className="p-4 border border-slate-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
//           <CardElement
//             options={{
//               style: {
//                 base: {
//                   fontSize: '16px',
//                   color: '#374151',
//                   '::placeholder': {
//                     color: '#9CA3AF',
//                   },
//                 },
//                 invalid: {
//                   color: '#DC2626',
//                 },
//               },
//             }}
//           />
//         </div>
//       </div>
 
//       {error && (
//         <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
//           <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
//           <p className="text-sm text-red-700">{error}</p>
//         </div>
//       )}
 
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//       >
//         <Lock className="w-4 h-4" />
//         {loading ? 'Processing...' : `Pay $${plan.price.toLocaleString()}`}
//       </button>
 
//       <p className="text-xs text-slate-600 text-center">
//         Your payment is secure and encrypted with SSL
//       </p>
//     </form>
//   );
// }
 
// export default function CheckoutPage() {
//   const searchParams = useSearchParams();
//   const planId = searchParams.get('plan') || 'growth-seo';
//   const plan = pricingPlans.find((p) => p.id === planId) || pricingPlans[1];
 
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };
 
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };
 
//   return (
//     <main className="min-h-screen bg-slate-50 pt-20 pb-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="max-w-4xl mx-auto"
//         >
//           {/* HEADER */}
//           <motion.div variants={itemVariants} className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-slate-900 mb-2">Complete Your Purchase</h1>
//             <p className="text-xl text-slate-600">Secure payment for {plan.name}</p>
//           </motion.div>
 
//           {/* CONTENT */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* PAYMENT FORM */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-xl border border-slate-200 p-8 h-fit"
//             >
//               <Elements stripe={stripePromise}>
//                 <CheckoutForm plan={plan} />
//               </Elements>
//             </motion.div>
 
//             {/* ORDER SUMMARY */}
//             <motion.div
//               variants={itemVariants}
//               className="bg-white rounded-xl border border-slate-200 p-8 h-fit"
//             >
//               <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
 
//               {/* PLAN DETAILS */}
//               <div className="mb-8 pb-8 border-b border-slate-200">
//                 <h3 className="font-bold text-slate-900 mb-4">{plan.name}</h3>
//                 <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
 
//                 <div className="space-y-3 mb-6">
//                   {plan.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-start gap-3">
//                       <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-slate-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
 
//               {/* PRICING */}
//               <div className="space-y-3 mb-8">
//                 <div className="flex justify-between">
//                   <span className="text-slate-600">Subtotal</span>
//                   <span className="font-semibold text-slate-900">${plan.price.toLocaleString()}</span>
//                 </div>
//                 {plan.period === 'month' && (
//                   <div className="flex justify-between">
//                     <span className="text-slate-600">Billing</span>
//                     <span className="font-semibold text-slate-900">${plan.price.toLocaleString()}/month</span>
//                   </div>
//                 )}
//                 <div className="border-t border-slate-200 pt-3 flex justify-between">
//                   <span className="font-bold text-slate-900">Total</span>
//                   <span className="text-2xl font-bold text-slate-900">
//                     ${plan.price.toLocaleString()}
//                   </span>
//                 </div>
//               </div>
 
//               {/* GUARANTEE */}
//               <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
//                 <p className="text-sm text-blue-900">
//                   <strong>30-day guarantee:</strong> Not satisfied? Get a full refund, no questions asked.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }