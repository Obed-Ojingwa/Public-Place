"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import CTA from '@/components/sections/CTA';
import ServiceCard from '@/components/sections/ServiceCard';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import FAQ from '@/components/sections/FAQ';
import FeaturedCaseStudy from '@/components/sections/FeaturedCaseStudy';
import TrustBadges from '@/components/sections/TrustBadges';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NerdPace',
  url: 'https://nerdpace.com',
  logo: 'https://nerdpace.com/logo.png',
  description: 'Technical SEO and growth agency specializing in ranking, speed, and visibility',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'hello@nerdpace.com',
    telephone: '+1-555-SEO-FAST',
  },
  sameAs: [
    'https://twitter.com/nerdpace',
    'https://linkedin.com/company/nerdpace',
    'https://instagram.com/nerdpace',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Technical SEO Optimization',
  description: 'Comprehensive SEO audit and optimization for better rankings and faster loading',
  provider: {
    '@type': 'Organization',
    name: 'NerdPace',
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://nerdpace.com/services',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to see SEO results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see measurable improvements within 4-8 weeks, with significant traffic increases by 3-6 months. Results depend on current site status and competitiveness of your keywords.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee ranking improvements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We guarantee an improvement in your Core Web Vitals, on-page SEO optimization, and technical health. We cannot guarantee rankings, as Google controls that, but our strategies typically result in 40-60% traffic increases.',
      },
    },
  ],
};

export default function HomePageClient() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="overflow-hidden">
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1 }}
              className="absolute top-8 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl opacity-70"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-60"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/85 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
            >
              <motion.div variants={itemVariants} className="mb-8 text-center">
                <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-sm font-medium tracking-wide">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Trusted by 50+ SaaS & E-commerce businesses
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                Rank Higher, Load Faster,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                  Get Discovered Online
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Premium technical SEO services for startups and ambitious businesses. Improve your Core Web Vitals, rankings, and organic traffic.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center px-9 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-2xl shadow-sky-500/20"
                >
                  Book Free SEO Audit
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-9 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-200 font-semibold rounded-full border border-slate-700 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center"
              >
                <div className="bg-slate-900/90 rounded-3xl p-5 border border-slate-700 shadow-lg shadow-slate-950/40">
                  <div className="text-3xl sm:text-4xl font-semibold text-sky-400">+287%</div>
                  <div className="text-sm text-slate-400 mt-2">Average organic traffic uplift</div>
                </div>
                <div className="bg-slate-900/90 rounded-3xl p-5 border border-slate-700 shadow-lg shadow-slate-950/40">
                  <div className="text-3xl sm:text-4xl font-semibold text-cyan-300">4.2s → 1.1s</div>
                  <div className="text-sm text-slate-400 mt-2">Page load reduction for higher conversions</div>
                </div>
                <div className="bg-slate-900/90 rounded-3xl p-5 border border-slate-700 shadow-lg shadow-slate-950/40">
                  <div className="text-3xl sm:text-4xl font-semibold text-violet-300">50+</div>
                  <div className="text-sm text-slate-400 mt-2">Growth-focused clients served</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TrustBadges />
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white" id="services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              >
                Our Services
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600"
              >
                Comprehensive SEO solutions tailored to your business goals
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="Technical SEO"
                description="Optimize your site's technical foundation for better rankings and user experience."
                href="/services/technical-seo"
              />
              <ServiceCard
                icon={<Globe className="w-8 h-8" />}
                title="Local SEO"
                description="Get discovered by customers in your area with local search optimization."
                href="/services/local-seo"
              />
              <ServiceCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="SEO Audits"
                description="Comprehensive analysis of your site's SEO health with actionable recommendations."
                href="/services/seo-audits"
              />
              <ServiceCard
                icon={<Rocket className="w-8 h-8" />}
                title="Content SEO"
                description="Create and optimize content that ranks and converts your audience."
                href="/services/content-seo"
              />
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="Performance Optimization"
                description="Improve Core Web Vitals and page speed for better user experience and rankings."
                href="/services/performance"
              />
              <ServiceCard
                icon={<CheckCircle2 className="w-8 h-8" />}
                title="SEO Consulting"
                description="Strategic guidance for enterprise teams looking to scale organic visibility."
                href="/services/consulting"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              >
                Real Results, Real Businesses
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600"
              >
                See how we helped businesses like yours achieve explosive growth
              </motion.p>
            </motion.div>

            <FeaturedCaseStudy />

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                View More Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600"
              >
                Don't just take our word for it—hear from businesses we've helped
              </motion.p>
            </motion.div>

            <TestimonialCarousel />
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-slate-50" id="pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
              >
                Simple, Transparent Pricing
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600"
              >
                Choose the plan that fits your business
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <motion.div
                variants={itemVariants}
                className="relative bg-white rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter Audit</h3>
                <p className="text-slate-600 mb-6">Perfect for trying out our service</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">$497</span>
                  <span className="text-slate-600 ml-2">one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Comprehensive technical audit</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Detailed PDF report</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">30-min strategy call</span>
                  </li>
                </ul>
                <Link
                  href="/audit"
                  className="block w-full text-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative bg-blue-600 rounded-lg p-8 shadow-lg border-2 border-blue-600 transform md:scale-105"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth SEO</h3>
                <p className="text-blue-100 mb-6">Our most recommended plan</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$1,500</span>
                  <span className="text-blue-100 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-white">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>Monthly optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>Rank tracking & reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span>6-month commitment</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-colors"
                >
                  Schedule Call
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative bg-white rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Retainer</h3>
                <p className="text-slate-600 mb-6">For enterprise & serious growth</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">$3,500</span>
                  <span className="text-slate-600 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Everything in Growth</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Priority 24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">Quarterly strategy reviews</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white">
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
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-center"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600 text-center mb-12"
              >
                Everything you need to know about our services
              </motion.p>

              <FAQ />
            </motion.div>
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
}
