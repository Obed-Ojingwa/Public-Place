'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Organic Traffic?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover the opportunities waiting for your business. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg border border-blue-500 transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
