'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Globe, Clock, Star, CheckCircle2 } from 'lucide-react';

import CTA from '@/components/sections/CTA';

export default function AboutPage() {
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
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                NerdPace
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              We're a technical SEO agency obsessed with helping businesses rank higher, load faster, and get discovered online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
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
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              To empower businesses with technical SEO excellence that drives measurable growth in organic traffic, conversions, and revenue.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Mission Text */}
            <motion.div
              key="mission-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">We Believe in Technical Excellence</h3>
              <p className="text-slate-600 mb-6">
                While many agencies focus solely on keywords and content, we know that true, sustainable SEO success starts with a rock-solid technical foundation. We specialize in the often-overlooked technical elements that search engines actually use to rank websites.
              </p>
              <p className="text-slate-600 mb-6">
                Our approach combines deep technical expertise with data-driven strategies to create SEO campaigns that not only improve rankings but also enhance user experience, site performance, and conversion potential.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/audit"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
                >
                  Get Free Audit
                </Link>
              </div>
            </div>

            {/* Mission Icons */}
            <motion.div
              key="mission-icons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Technical Precision</h4>
                  <p className="text-slate-600 text-sm">
                    We audit every technical aspect of your site to ensure search engines can crawl, index, and understand your content effectively.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Measurable Results</h4>
                  <p className="text-slate-600 text-sm">
                    We focus on metrics that matter: organic traffic growth, keyword rankings, Core Web Vitals improvements, and conversion rate increases.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Client Partnership</h4>
                  <p className="text-slate-600 text-sm">
                    We work as an extension of your team, providing transparent communication, regular reporting, and strategic guidance throughout our engagement.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Long-Term Focus</h4>
                  <p className="text-slate-600 text-sm">
                    We build strategies for sustainable growth, not quick fixes. Our goal is to create lasting improvements that continue to deliver value long after our engagement ends.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
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
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              Our team of SEO specialists brings diverse expertise in technical SEO, content strategy, and performance optimization.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Team Member 1 */}
            <motion.div
              key="team1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-0">
                  <span className="text-2xl font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">James Smith</h4>
                  <p className="text-sm text-slate-500">Founder & Lead SEO Strategist</p>
                </div>
              </div>
              <p className="text-slate-600">
                James has 8+ years of experience in technical SEO, specializing in site architecture, Core Web Vitals optimization, and enterprise SEO implementations. He's helped over 100 businesses improve their search visibility.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Technical SEO</span>
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Site Audits</span>
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Performance Opt.</span>
                </span>
              </div>
            </div>

            {/* Team Member 2 */}
            <motion.div
              key="team2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center text-white mb-0">
                  <span className="text-2xl font-bold">SR</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Sarah Rodriguez</h4>
                  <p className="text-sm text-slate-500">Senior Technical SEO Specialist</p>
                </div>
              </div>
              <p className="text-slate-600">
                Sarah specializes in technical SEO audits, schema markup implementation, and international SEO. She has a background in web development and brings deep technical knowledge to every audit and optimization project.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Technical Audits</span>
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Schema Markup</span>
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>International SEO</span>
                </span>
              </div>
            </div>

            {/* Team Member 3 */}
            <motion.div
              key="team3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center text-white mb-0">
                  <span className="text-2xl font-bold">MC</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Michael Chen</h4>
                  <p className="text-sm text-slate-500">Content & Local SEO Specialist</p>
                </div>
              </div>
              <p className="text-slate-600">
                Michael focuses on content SEO strategies, local SEO optimization, and helping businesses create content that ranks and converts. He's particularly skilled at creating content strategies for SaaS and e-commerce businesses.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Content Strategy</span>
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Local SEO</span>
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 text-sm">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Keyword Research</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
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
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600"
            >
              The principles that guide everything we do for our clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Transparency */}
            <motion.div
              key="transparency"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Transparency</h3>
              <p className="text-slate-600">
                We believe in open communication, clear reporting, and honest assessments. You'll always know what we're doing, why we're doing it, and what results to expect.
              </p>
            </div>

            {/* Expertise */}
            <motion.div
              key="expertise"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Expertise</h3>
              <p className="text-slate-600">
                Our team stays at the forefront of SEO developments through continuous learning, testing, and implementation of cutting-edge techniques that deliver real results.
              </p>
            </div>

            {/* Results */}
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Results</h3>
              <p className="text-slate-600">
                We measure success by your success. Our strategies are designed to drive measurable improvements in traffic, rankings, and ultimately, your bottom line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTAs SECTION */}
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
              Ready to Improve Your SEO?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Let's discuss how we can help your business achieve better search visibility and more organic traffic.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
            >
              Free SEO Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTA />
    </main>
  );
}
