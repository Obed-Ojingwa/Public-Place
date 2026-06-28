// ============================================================================
// FILE 2: Payment Success Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\checkout\success\page.tsx
 
'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Calendar, Download, ArrowRight } from 'lucide-react';
 
export const metadata: Metadata = {
  title: 'Payment Successful | NerdPace',
  description: 'Your payment has been processed successfully',
};
 
export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* SUCCESS ICON */}
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
 
          {/* MESSAGE */}
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Payment Successful!</h1>
          <p className="text-xl text-slate-600 mb-8">
            Thank you for your purchase. Your account is being set up now.
          </p>
 
          {/* NEXT STEPS */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-left">Next Steps</h2>
 
            <div className="space-y-6">
              {/* STEP 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Check Your Email</h3>
                  <p className="text-slate-600">
                    We've sent a confirmation email to your inbox with your receipt and login credentials.
                  </p>
                </div>
              </div>
 
              {/* STEP 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Access Your Account</h3>
                  <p className="text-slate-600">
                    Log in to your dashboard to view your audit report and manage your subscription.
                  </p>
                </div>
              </div>
 
              {/* STEP 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-slate-900 mb-1">Schedule Your Call</h3>
                  <p className="text-slate-600">
                    Our team will reach out within 24 hours to discuss your SEO strategy and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
 
          {/* INFORMATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Email Confirmation</h3>
              <p className="text-sm text-slate-600">Check your inbox for your receipt</p>
            </div>
 
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Team Follow-up</h3>
              <p className="text-sm text-slate-600">Within 24 hours of purchase</p>
            </div>
 
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <Download className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Download Report</h3>
              <p className="text-sm text-slate-600">Available in your dashboard</p>
            </div>
          </div>
 
          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              Back to Home
            </Link>
          </div>
 
          {/* SUPPORT NOTE */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Need help?</strong> Email us at{' '}
              <a href="mailto:support@nerdpace.com" className="font-semibold hover:underline">
                support@nerdpace.com
              </a>{' '}
              or call{' '}
              <a href="tel:+2348102544186" className="font-semibold hover:underline">
                +1 (555) SEO-FAST
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}