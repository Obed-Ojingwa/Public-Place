'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedCaseStudy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-lg"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4 w-fit">
            Featured Case Study
          </span>
          <h3 className="text-3xl font-bold text-white mb-4">
            Haliberry Cake
          </h3>
          <p className="text-blue-100 mb-6">
            We designed and developed a custom website with online ordering and implemented technical SEO from the ground up. The new site allows customers to browse products, customize orders, and make secure payments online.
          </p>
          <Link
            href="/case-studies/haliberry-cake"
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300"
          >
            Read Case Study
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="p-8 lg:p-12 bg-slate-50">
          <h4 className="font-bold text-slate-900 mb-4">What We Did:</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              Custom website design and development
            </li>
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              Online ordering system with cake customisation
            </li>
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              Secure payment processing
            </li>
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              Technical SEO implementation (meta tags, schema, Core Web Vitals)
            </li>
            <li className="flex items-center text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
              Performance optimization for fast loading
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}