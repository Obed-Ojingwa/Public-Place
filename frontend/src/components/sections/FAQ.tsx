'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. We focus on making technical improvements that help search engines understand and rank your site better. The timeline for seeing results varies based on your website's current state, industry, and competition, but we prioritize actions that can improve crawlability and indexation quickly.',
  },
  {
    question: 'Do you guarantee ranking improvements?',
    answer: 'We cannot guarantee specific rankings because search engine algorithms are complex and constantly changing. What we guarantee is our commitment to technical excellence, transparent communication, and delivering measurable improvements in your website\'s technical health and search visibility.',
  },
  {
    question: 'What\'s included in the free audit?',
    answer: 'Our free audit includes a technical site health check, Core Web Vitals assessment, on-page SEO review, and a prioritized action plan with recommendations to improve your site\'s search performance.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track improvements in technical SEO health (like crawl errors, site speed), keyword rankings, and organic traffic. We provide regular reports showing progress and areas for further optimization.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes, we work with businesses of all sizes. Our services are scalable, and we offer tailored solutions to fit different budgets and goals.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'Our technical SEO approach is effective across industries. We have experience working with various types of businesses, including local services, e-commerce, and content-driven sites, adapting our strategies to each unique context.',
  },
];

// NOTE: FAQ answers are present in the initial server-rendered HTML (not hidden/removed).
// They are visually hidden (max-height: 0, opacity: 0) until the accordion button is clicked.
// This ensures:
// 1. Search engines can crawl the FAQ text in the initial HTML
// 2. FAQ schema markup is properly structured for rich snippets
// 3. Users get a smooth animation UX when expanding/collapsing

// Generate FAQ schema markup for Google rich snippets
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          <motion.div
            initial={false}
            animate={{ maxHeight: openIndex === index ? 500 : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
      </div>
    </>
  );
}