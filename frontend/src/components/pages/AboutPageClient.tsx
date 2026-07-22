'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Zap, Linkedin, Github } from 'lucide-react';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      {/* JSON-LD Person Schema for Founder */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Obed Ojingwa",
            jobTitle: "Founder & SEO Strategist",
            worksFor: {
              "@type": "Organization",
              name: "NerdPace",
            },
            url: "https://linkedin.com/in/obed-ojingwa-94a73422a/",
            sameAs: [
              "https://linkedin.com/in/obed-ojingwa-94a73422a/",
              "https://github.com/Obed-Ojingwa",
            ],
          }),
        }}
      />

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
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
              >
                About NerdPace
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                NerdPace was founded in Lagos, Nigeria by Obed Ojingwa — a full-stack engineer
                with deep expertise in Python, FastAPI, React, and TypeScript.

                Most SEO agencies treat websites like black boxes. NerdPace treats them like
                engineering systems — because that is what they are. When we audit a site,
                we go where most agencies won't: into the code, the server config, the render
                pipeline, and the crawl budget.

                That engineering-first mindset is what makes our SEO work differently.
                We don't just recommend fixes. We implement them.

                Our first client was Haliberry Cake, a luxury London bakery referred to us
                through our Lagos network. We built their website from the ground up and
                optimised it for search. They called the result "wow." That's the standard
                we hold every engagement to.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-20 bg-white">
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
                className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-center"
              >
                Founder: Obed Ojingwa
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600 text-center mb-4"
              >
                Full-stack Engineer | SEO Strategist | Lagos, Nigeria
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link
                  href="https://linkedin.com/in/obed-ojingwa-94a73422a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300"
                >
                  Connect on LinkedIn
                  <Linkedin className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300"
                >
                  See Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="py-20 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-xl text-slate-600">
                  To empower businesses with technical excellence and strategic SEO that drives real, measurable growth.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent</h3>
                  <p className="text-slate-600">Clear communication and honest reporting every step of the way.</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Expert</h3>
                  <p className="text-slate-600">Years of experience in technical SEO and digital marketing.</p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="text-center"
                >
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Results-Driven</h3>
                  <p className="text-slate-600">We measure success by your growth and rankings.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALUES SECTION */}
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
                className="text-4xl font-bold text-slate-900 mb-12 text-center"
              >
                Why Choose NerdPace?
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Technical Excellence',
                    description: 'Deep expertise in Core Web Vitals, page speed, and technical SEO implementation.',
                  },
                  {
                    title: 'Data-Driven Strategy',
                    description: 'Every recommendation backed by analytics, research, and proven methodologies.',
                  },
                  {
                    title: 'Quick Results',
                    description: 'See improvements in 4-8 weeks, with significant growth by 3-6 months.',
                  },
                  {
                    title: 'Dedicated Support',
                    description: 'Your success is our success. Premium plans include dedicated account management.',
                  },
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-white rounded-lg p-6 border border-slate-200"
                  >
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your SEO?
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8">
                Get started with a free SEO audit today.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="/audit"
                  className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Book Free Audit
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}