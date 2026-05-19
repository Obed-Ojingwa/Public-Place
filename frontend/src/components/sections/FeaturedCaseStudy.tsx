'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
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
          <h3 className="text-3xl font-bold text-white mb-4">TechFlow SaaS</h3>
          <p className="text-blue-100 mb-6">
            How we helped a B2B SaaS company increase organic traffic by 650% and reduce customer acquisition costs by 40%.
          </p>
          <Link
            href="/case-studies/techflow"
            className="inline-flex items-center text-white font-semibold hover:text-blue-200 transition-colors"
          >
            Read Full Case Study
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="p-8 lg:p-12 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">+650%</div>
              <div className="text-sm text-slate-600">Organic Traffic</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">6 months</div>
              <div className="text-sm text-slate-600">Time to Results</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">-40%</div>
              <div className="text-sm text-slate-600">CAC Reduction</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">Key Improvements</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                Technical SEO optimization
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                Core Web Vitals improvement
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                Content strategy implementation
              </li>
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                Link building campaign
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
