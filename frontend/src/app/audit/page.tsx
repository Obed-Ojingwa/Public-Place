'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Clock, Users } from 'lucide-react';
import CTA from '@/components/sections/CTA';

export default function AuditPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Get Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                Free SEO Audit
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              Discover the hidden opportunities and technical issues holding your website back from ranking higher and getting more traffic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#audit-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
              >
                Request Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY AN AUDIT SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              Why You Need an SEO Audit
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              Most websites have technical SEO issues that are invisible to the naked eye but severely impact rankings and traffic.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Technical Issues */}
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Issues Found</h3>
              <p className="text-slate-600">
                We identify crawl errors, indexation problems, site speed issues, mobile usability problems, and structured data errors that prevent search engines from properly understanding and ranking your site.
              </p>
            </div>

            {/* Performance Issues */}
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
            >
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Performance Analysis</h3>
              <p className="text-slate-600">
                Our audit includes a comprehensive Core Web Vitals assessment, page speed analysis, and recommendations to improve loading times - which directly impact both user experience and search rankings.
              </p>
            </div>

            {/* Opportunity Analysis */}
            <motion.div
              key="opportunity"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Opportunity Identification</h3>
              <p className="text-slate-600">
                Beyond fixing issues, we uncover untapped opportunities including keyword gaps, content opportunities, and link building prospects that can drive significant traffic growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED SECTION */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              What's Included in Your Free Audit
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              Our comprehensive audit covers all critical areas of your website's SEO health.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Technical Audit */}
            <motion.div
              key="technical-audit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Technical SEO Audit</h4>
                  <p className="text-slate-600 text-sm">
                    Site crawlability, indexability, XML sitemap, robots.txt, site architecture, URL structure, and technical foundation analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Core Web Vitals</h4>
                  <p className="text-slate-600 text-sm">
                    LCP, FID, and CLS measurements with specific improvement recommendations for each metric.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Mobile Usability</h4>
                  <p className="text-slate-600 text-sm">
                    Mobile-friendly test, viewport configuration, tap target sizing, and font legibility analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* On-Page Analysis */}
            <motion.div
              key="onpage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">On-Page SEO</h4>
                  <p className="text-slate-600 text-sm">
                    Title tags, meta descriptions, header structure, keyword optimization, content quality, and internal linking analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Content Analysis</h4>
                  <p className="text-slate-600 text-sm">
                    Thin content detection, duplicate content issues, content gaps, and optimization opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Schema Markup</h4>
                  <p className="text-slate-600 text-sm">
                    Structured data implementation review, missing schema opportunities, and validation errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Competitive Analysis */}
            <motion.div
              key="competitive"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Competitive Analysis</h4>
                  <p className="text-slate-600 text-sm">
                    Competitor keyword gaps, backlink profile comparison, content strategy analysis, and technical SEO benchmarking.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Security & HTTPS</h4>
                  <p className="text-slate-600 text-sm">
                    SSL certificate validation, mixed content issues, security headers, and site security assessment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Local SEO (if applicable)</h4>
                  <p className="text-slate-600 text-sm">
                    Google Business Profile analysis, local citation consistency, review management, and location page optimization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              Simple, transparent process - no sales pitch, just valuable insights.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Submit Your Website</h4>
              <p className="text-slate-600">
                Enter your website URL and contact information. We'll analyze your site's technical health, performance, and SEO fundamentals.
              </p>
            </div>

            {/* Step 2 */}
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">We Audit Your Site</h4>
              <p className="text-slate-600">
                Our team performs a comprehensive analysis using industry-leading tools and manual review to identify issues and opportunities.
              </p>
            </div>

            {/* Step 3 */}
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 flex-items-center justify-center text-blue-600 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Get Your Report</h4>
              <p className="text-slate-600">
                Receive a detailed PDF report with prioritized recommendations, plus a Optional consultation to discuss findings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUDIT FORM */}
      <section className="py-20 sm:py-24 bg-slate-50" id="audit-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              Request Your Free SEO Audit
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              No credit card required. No obligation. Just valuable insights to improve your website's performance.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            {/* Form would connect to backend API - placeholder for now */}
            <form className="space-y-6 bg-white p-8 rounded-lg border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Website URL
              </label>
              <input
                type="url"
                placeholder="https://yourwebsite.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <label className="block text-sm font-medium text-slate-700 mb-2">
                Primary Goal
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="" disabled selected>Select your primary goal</option>
                <option value="increase-traffic">Increase Organic Traffic</option>
                <option value="improve-conversions">Improve Conversion Rates</option>
                <option value="fix-technical">Fix Technical Issues</option>
                <option value="outrank-competitors">Outrank Competitors</option>
                <option value="local-seo">Improve Local Visibility</option>
                <option value="other">Other</option>
              </select>

              <p className="text-sm text-slate-500 mt-4">
                We'll send your audit report to the email address provided. Analysis typically takes 2-3 business days.
              </p>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 mr-2" />
                Request Free Audit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              See What Others Discovered
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              Real insights from real website audits
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Testimonial 1 */}
            <motion.div
              key="test1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 mb-2">SaaS Company - 500% Traffic Increase</h4>
              <p className="text-slate-600">
                "The audit revealed critical indexation issues blocking 80% of our content. After fixing these and implementing the recommendations, we saw a 500% increase in organic traffic within 4 months."
              </p>
              <p className="text-sm text-slate-500 mt-3">- David R., CEO of TechSaaS Inc.</p>
            </div>

            {/* Testimonial 2 */}
            <motion.div
              key="test2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 mb-2">E-commerce Store - 40% Conversion Boost</h4>
              <p className="text-slate-600">
                "Technical SEO improvements from the audit reduced our page load time from 5.2s to 1.8s, which directly contributed to a 40% increase in conversion rate and lower bounce rates."
              </p>
              <p className="text-sm text-slate-500 mt-3">- Maria L., Director of eCommerce at ShopFast</p>
            </div>

            {/* Testimonial 3 */}
            <motion.div
              key="test3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 rounded-lg p-6 border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 mb-2">Local Business - #1 Rankings</h4>
              <p className="text-slate-600">
                "Local SEO audit revealed inconsistent NAP data and missing schema. After cleanup and optimization, we went from page 3 to #1 for our primary service keywords in our city."
              </p>
              <p className="text-sm text-slate-500 mt-3">- James K., Owner of LocalService Pro</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTA />
    </main>
  );
}
