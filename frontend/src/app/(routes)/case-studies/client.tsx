'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Globe, Rocket } from 'lucide-react';

export default function CaseStudiesPageClient() {
  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Case Studies
          </h1>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
            See the work we do for our dear clients
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Haliberry Cake Case Study Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-600 transition-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-1">
                    Haliberry Cake
                  </h3>
                  <p className="text-sm text-slate-400">
                    Luxury Bakery • London, UK
                  </p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                We built a custom website with online ordering and implemented technical SEO from the ground up.
              </p>
              <Link
                href="/case-studies/haliberry-cake"
                className="inline-flex items-center text-slate-200 hover:text-white font-medium"
              >
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
