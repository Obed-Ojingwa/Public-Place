'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// TODO: Confirm if this is a real client case study or if it should be anonymized
// Set isAnonymized to false if this is a real, named client with permission to use their name/logo
const caseStudyData = {
  clientName: 'TechFlow SaaS',
  clientLogo: '', // TODO: Add real client logo URL
  clientWebsite: '', // TODO: Add real client website URL
  isAnonymized: true, // Set to false if this is a real, named client
  results: 'How we helped a B2B SaaS company increase organic traffic by 650% and reduce customer acquisition costs by 40%.',
  metrics: [
    { label: 'Organic Traffic', value: '+650%', icon: <TrendingUp className="w-6 h-6" />, bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { label: 'Time to Results', value: '6 months', icon: <Clock className="w-6 h-6" />, bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { label: 'CAC Reduction', value: '-40%', icon: <Users className="w-6 h-6" />, bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
  ],
  keyImprovements: [
    'Technical SEO optimization',
    'Core Web Vitals improvement',
    'Content strategy implementation',
    'Link building campaign',
  ],
};

export default function FeaturedCaseStudy() {
  const displayName = caseStudyData.isAnonymized ? 'Anonymized SaaS Client' : caseStudyData.clientName;
  const clientNameDisplay = caseStudyData.isAnonymized
    ? `${caseStudyData.clientName} (results verifiable on request)`
    : caseStudyData.clientName;

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
          <h3 className="text-3xl font-bold text-white mb-4">{displayName}</h3>
          <p className="text-blue-100 mb-6">
            {caseStudyData.results}
          </p>
          {caseStudyData.clientWebsite && (
            <Link
              href={caseStudyData.clientWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Visit {clientNameDisplay}'s Website
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
          {!caseStudyData.clientWebsite && (
            <Link
              href="/case-studies/techflow"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
        </div>
        <div className="p-8 lg:p-12 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudyData.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center ${metric.textColor} mx-auto mb-3`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h4 className="font-bold text-slate-900 mb-4">Key Improvements</h4>
            <ul className="space-y-2">
              {caseStudyData.keyImprovements.map((improvement, index) => (
                <li key={index} className="flex items-center text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
