// ============================================================================
// FIX 4: Fix Free Audit Button & Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\audit\page.tsx
 
'use client';
 
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Zap, TrendingUp, ArrowRight, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
 
interface AuditFormData {
  website: string;
  name: string;
  email: string;
  company: string;
  industry: string;
}
 
export default function AuditPage() {
  const { register, handleSubmit, reset } = useForm<AuditFormData>();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
 
  const onSubmit = async (data: AuditFormData) => {
    setSubmitting(true);
    try {
      // Make sure backend is running
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/audits`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            website_url: data.website,
            audit_type: 'basic',
            company_name: data.company,
            contact_email: data.email,
          }),
        }
      ).catch((error) => {
        console.error('API Error:', error);
        throw new Error('Failed to connect to server. Ensure backend is running.');
      });
 
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
 
      const result = await response.json();
      
      setSubmitted(true);
      reset();
      toast.success('Audit request submitted! Check your email for results.');
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      toast.error(
        error instanceof Error
          ? error.message
          : 'Failed to submit audit. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };
 
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
 
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-white mb-6"
            >
              Free SEO Audit
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 mb-8"
            >
              Get a comprehensive analysis of your website's SEO health in just 2-3 days.
            </motion.p>
          </motion.div>
        </div>
      </section>
 
      {/* CONTENT */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* FORM */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 mb-8">
                {!submitted ? 'Request Your Audit' : 'Thank You!'}
              </motion.h2>
 
              {!submitted ? (
                <motion.form
                  variants={itemVariants}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <input
                    {...register('website', { required: true })}
                    type="url"
                    placeholder="Your Website URL"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
 
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
 
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Company Name (optional)"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
 
                  <select
                    {...register('industry')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Industry</option>
                    <option value="saas">SaaS</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="services">Services</option>
                    <option value="agency">Agency</option>
                    <option value="other">Other</option>
                  </select>
 
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Requesting Audit...' : 'Request Free Audit'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Audit Requested!</h3>
                  <p className="text-green-700 mb-6">
                    We've received your request. Our team will analyze your website and send detailed results to your email within 2-3 business days.
                  </p>
                  <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Back to Home
                  </Link>
                </motion.div>
              )}
            </motion.div>
 
            {/* BENEFITS */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-900 mb-8">
                What's Included
              </motion.h3>
 
              <div className="space-y-4">
                {[
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: 'Technical Analysis',
                    description: 'Core Web Vitals, site speed, mobile optimization review',
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Lighthouse Scores',
                    description: 'Performance, accessibility, best practices breakdown',
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: 'Actionable Recommendations',
                    description: 'Prioritized list of fixes to improve your rankings',
                  },
                  {
                    icon: <ArrowRight className="w-6 h-6" />,
                    title: 'Next Steps',
                    description: '30-minute consultation call to discuss strategy',
                  },
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-slate-50 rounded-lg p-6 border border-slate-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
          >
            FAQ
          </motion.h2>
 
          <div className="space-y-4">
            {[
              {
                q: 'How long does the audit take?',
                a: '2-3 business days to complete the full analysis.',
              },
              {
                q: 'Do I have to buy anything?',
                a: 'No! The audit is completely free with no obligation.',
              },
              {
                q: 'What if I want help implementing?',
                a: 'Great! We offer implementation services. Discuss during your consultation call.',
              },
              {
                q: 'Is there a catch?',
                a: 'No catch. We want to help you understand your SEO potential.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-slate-200"
              >
                <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
                <p className="text-slate-600">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}