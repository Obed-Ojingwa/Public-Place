'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'Most clients see measurable improvements within 4-8 weeks, with significant traffic increases by 3-6 months. Results depend on current site status and competitiveness of your keywords.',
  },
  {
    question: 'Do you guarantee ranking improvements?',
    answer: 'We guarantee an improvement in your Core Web Vitals, on-page SEO optimization, and technical health. We cannot guarantee rankings, as Google controls that, but our strategies typically result in 40-60% traffic increases.',
  },
  {
    question: 'What\'s included in the free audit?',
    answer: 'Our free audit includes a comprehensive technical analysis, Core Web Vitals assessment, on-page SEO review, and a prioritized action plan with specific recommendations.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track organic traffic growth, keyword rankings, Core Web Vitals scores, conversion rates, and ROI. You\'ll receive monthly reports with detailed metrics and insights.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We work with businesses of all sizes. Our starter audit is perfect for small businesses looking to improve their SEO foundation.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have deep experience with SaaS, e-commerce, local businesses, and B2B services. Our technical SEO approach works across all industries.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
          >
            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
