// File: frontend/src/app/(routes)/pricing/page.tsx
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\pricing\page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Pricing | NerdPace - Transparent, Scalable Plans',
  description: 'Choose the right SEO plan for your business. From $497 audits to $3,500/month premium retainers. All plans include measurable results.',
  keywords: 'SEO pricing, SEO costs, SEO packages, affordable SEO',
  openGraph: {
    title: 'SEO Pricing | NerdPace',
    description: 'Transparent SEO pricing for all business sizes',
    type: 'website',
  },
};

const pricingPlans = [
  {
    name: 'Starter Audit',
    description: 'Perfect for trying out our service',
    price: 497,
    period: 'one-time',
    badge: null,
    cta: 'Get Started',
    ctaHref: '/audit',
    popular: false,
    features: [
      { name: 'Comprehensive technical audit', included: true },
      { name: 'Lighthouse performance analysis', included: true },
      { name: 'Core Web Vitals assessment', included: true },
      { name: 'On-page SEO review', included: true },
      { name: 'Detailed PDF report', included: true },
      { name: 'Actionable recommendations', included: true },
      { name: '30-minute strategy call', included: true },
      { name: 'Monthly optimization', included: false },
      { name: 'Rank tracking', included: false },
      { name: 'Content creation', included: false },
    ],
  },
  {
    name: 'Growth SEO',
    description: 'Our most recommended plan',
    price: 1500,
    period: 'month',
    badge: 'Most Popular',
    cta: 'Schedule Call',
    ctaHref: '/contact',
    popular: true,
    features: [
      { name: 'Everything in Starter', included: true },
      { name: 'Monthly optimization', included: true },
      { name: 'Keyword research & strategy', included: true },
      { name: 'Rank tracking & reporting', included: true },
      { name: 'Content optimization', included: true },
      { name: 'Technical improvements', included: true },
      { name: 'Link analysis', included: true },
      { name: 'Competitor analysis', included: true },
      { name: 'Monthly strategy call', included: true },
      { name: '6-month minimum commitment', included: true },
    ],
  },
  {
    name: 'Premium Retainer',
    description: 'For serious growth and scale',
    price: 3500,
    period: 'month',
    badge: null,
    cta: 'Get in Touch',
    ctaHref: '/contact',
    popular: false,
    features: [
      { name: 'Everything in Growth SEO', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Priority 24/7 support', included: true },
      { name: 'Custom content creation', included: true },
      { name: 'Advanced link building', included: true },
      { name: 'Competitor intelligence', included: true },
      { name: 'Quarterly business reviews', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Ongoing strategy optimization', included: true },
      { name: 'Flexible contract terms', included: true },
    ],
  },
];

const addOns = [
  {
    name: 'Content Creation',
    description: '2-4 blog posts per month',
    price: 800,
  },
  {
    name: 'Link Building',
    description: 'High-quality backlink acquisition',
    price: 1200,
  },
  {
    name: 'Technical Implementation',
    description: 'Hands-on technical SEO work',
    price: 150,
    period: '/hour',
  },
  {
    name: 'Local SEO Expansion',
    description: 'Additional location optimization',
    price: 600,
    period: '/location/month',
  },
];

const faqs = [
  {
    q: 'What if I\'m not satisfied?',
    a: 'We offer a 30-day risk-free trial on all retainer plans. If you\'re not seeing improvements, we\'ll work with you to optimize our approach or offer a full refund.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Absolutely! You can upgrade anytime. Downgrades are available with 30 days notice. We want to find the right fit for your business.',
  },
  {
    q: 'What\'s included in the monthly reporting?',
    a: 'Each month includes a detailed report showing keyword rankings, organic traffic, Core Web Vitals, on-page improvements, and next month\'s action items.',
  },
  {
    q: 'Do you offer custom packages?',
    a: 'Yes! We work with larger enterprises to create custom packages. Contact us to discuss your specific needs.',
  },
  {
    q: 'What\'s your minimum contract length?',
    a: 'Audits are one-time. Growth SEO requires a 6-month minimum. Premium Retainer is month-to-month after the first 3 months.',
  },
  {
    q: 'Do you work with agencies?',
    a: 'Yes! We offer white-label services and partner pricing for agencies. Contact our partnership team for details.',
  },
];

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Simple, Transparent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                Pricing
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 mb-8"
            >
              Choose the plan that fits your business and budget
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'ring-2 ring-blue-500 transform md:scale-105 shadow-2xl'
                    : 'border border-slate-200 shadow-sm hover:shadow-lg'
                } bg-white`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8">
                  {/* Header */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{plan.description}</p>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-slate-900">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-slate-600">
                        {plan.period === 'month' ? '/month' : 'one-time'}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.ctaHref}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center mb-8 ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="inline ml-2 w-4 h-4" />
                  </Link>

                  {/* Features */}
                  <div className="space-y-4 border-t border-slate-200 pt-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-slate-700' : 'text-slate-400'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-slate-900 mb-4 text-center"
            >
              Add-Ons & Extras
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 text-center mb-12"
            >
              Customize your plan with additional services
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              {addOns.map((addon, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <h4 className="font-bold text-slate-900 mb-1">{addon.name}</h4>
                  <p className="text-slate-600 text-sm mb-4">{addon.description}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${addon.price}
                    {addon.period && <span className="text-lg font-normal">{addon.period}</span>}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-slate-900 mb-4 text-center"
            >
              Detailed Comparison
            </motion.h2>

            <motion.div variants={itemVariants} className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-900">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900">Audit</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900">Growth</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'SEO Audit', audit: true, growth: true, premium: true },
                    { feature: 'Monthly Optimization', audit: false, growth: true, premium: true },
                    { feature: 'Keyword Research', audit: false, growth: true, premium: true },
                    { feature: 'Content Strategy', audit: false, growth: true, premium: true },
                    { feature: 'Monthly Reports', audit: false, growth: true, premium: true },
                    { feature: 'Rank Tracking', audit: false, growth: true, premium: true },
                    { feature: 'Custom Content', audit: false, growth: false, premium: true },
                    { feature: 'Dedicated Manager', audit: false, growth: false, premium: true },
                    { feature: 'Priority Support', audit: false, growth: false, premium: true },
                    { feature: 'Quarterly Reviews', audit: false, growth: false, premium: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-4 px-4 font-semibold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.audit ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.growth ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.premium ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-slate-900 mb-4 text-center"
            >
              Pricing FAQ
            </motion.h2>

            <div className="space-y-4 mt-12">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 border border-slate-200"
                >
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-white mb-6"
            >
              Start Your SEO Journey Today
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8"
            >
              No contracts. No surprises. Just results.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 w-5 h-5" />
                Free Audit ($497 Value)
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg border border-white/40 transition-all duration-300"
              >
                Schedule Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}