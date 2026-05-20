// File: frontend/src/app/(routes)/services/page.tsx
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\services\page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Globe, TrendingUp, Rocket, Code, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Services | NerdPace - Technical SEO, Local SEO & Audits',
  description: 'Our comprehensive SEO services including technical optimization, local SEO, content strategy, and performance optimization for businesses of all sizes.',
  keywords: 'SEO services, technical SEO services, local SEO, content optimization, website performance',
  openGraph: {
    title: 'SEO Services | NerdPace',
    description: 'Comprehensive SEO services tailored to your business goals',
    type: 'website',
  },
};

const services = [
  {
    id: 'technical-seo',
    icon: <Code className="w-12 h-12" />,
    title: 'Technical SEO',
    shortDescription: 'Optimize your site\'s technical foundation for better rankings',
    description: 'We audit and optimize your website\'s technical health including site speed, mobile friendliness, indexability, and Core Web Vitals.',
    benefits: [
      'Core Web Vitals optimization',
      'Site speed improvements',
      'Mobile optimization',
      'Structured data implementation',
      'XML sitemap & robots.txt setup',
      'Crawl budget optimization',
      'SSL/HTTPS configuration',
      'Site architecture optimization'
    ],
    price: '$1,500/month',
    timeline: '4-12 weeks',
    caseStudy: 'See how we improved a SaaS site from 42 to 95 Lighthouse score',
  },
  {
    id: 'local-seo',
    icon: <Globe className="w-12 h-12" />,
    title: 'Local SEO',
    shortDescription: 'Get discovered by customers in your area',
    description: 'Dominate local search results with optimized Google Business Profile, local citations, and location-specific content strategy.',
    benefits: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management strategy',
      'Location page optimization',
      'Local schema markup',
      'Service area expansion',
      'Local link building',
      'NAP consistency audit'
    ],
    price: '$1,200/month',
    timeline: '2-8 weeks',
    caseStudy: 'Helped a dental practice rank #1 for 8 local keywords',
  },
  {
    id: 'content-seo',
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'Content SEO',
    shortDescription: 'Create and optimize content that ranks and converts',
    description: 'Strategic content creation and optimization targeting high-intent keywords that drive qualified traffic and conversions.',
    benefits: [
      'Keyword research & strategy',
      'Content creation (500-3000 words)',
      'On-page optimization',
      'Internal linking strategy',
      'Content calendar planning',
      'Competitor analysis',
      'Topic clustering',
      'CTA optimization'
    ],
    price: '$2,000/month',
    timeline: 'Ongoing',
    caseStudy: 'Generated 150K organic traffic with 12 optimized posts',
  },
  {
    id: 'performance-optimization',
    icon: <Zap className="w-12 h-12" />,
    title: 'Performance Optimization',
    shortDescription: 'Improve Core Web Vitals and page speed',
    description: 'Comprehensive performance audit and optimization to improve user experience and search rankings through faster loading times.',
    benefits: [
      'Page speed audit',
      'Image optimization',
      'Code splitting & lazy loading',
      'Caching strategy',
      'CDN configuration',
      'Database optimization',
      'Server response time reduction',
      'Comprehensive speed report'
    ],
    price: '$1,500/month',
    timeline: '2-6 weeks',
    caseStudy: 'Reduced load time from 4.2s to 1.1s, improving conversions 23%',
  },
  {
    id: 'seo-audits',
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'SEO Audits',
    shortDescription: 'Comprehensive analysis of your SEO health',
    description: 'In-depth audit identifying all technical, on-page, and off-page SEO issues with actionable recommendations prioritized by impact.',
    benefits: [
      'Technical SEO audit',
      'On-page SEO analysis',
      'Competitive analysis',
      'Backlink audit',
      'Core Web Vitals assessment',
      'Mobile usability review',
      'Indexation analysis',
      'Priority action plan'
    ],
    price: '$497',
    timeline: '2-3 days',
    caseStudy: 'Identified $50K+ opportunity with single audit',
  },
  {
    id: 'consulting',
    icon: <Rocket className="w-12 h-12" />,
    title: 'SEO Consulting',
    shortDescription: 'Strategic guidance for enterprise teams',
    description: 'High-level consulting for teams wanting to implement SEO in-house with our strategic guidance and training.',
    benefits: [
      'SEO strategy development',
      'Team training & workshops',
      'Implementation roadmap',
      'Monthly strategy calls',
      'Process documentation',
      'Tool recommendations',
      'Performance monitoring',
      'Quarterly reviews'
    ],
    price: 'Custom',
    timeline: 'Flexible',
    caseStudy: 'Helped enterprise scale SEO team from 0 to 5 people',
  },
];

export default function ServicesPage() {
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
              SEO Services Built for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              From technical optimization to content strategy, we offer comprehensive SEO solutions tailored to your business goals and budget.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
              >
                Get Free Audit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.shortDescription}</p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-8">
                  {service.benefits.slice(0, 4).map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                  {service.benefits.length > 4 && (
                    <p className="text-sm text-slate-500 ml-7">+ {service.benefits.length - 4} more benefits</p>
                  )}
                </div>

                {/* Pricing & Timeline */}
                <div className="mb-6 pb-6 border-t border-slate-200">
                  <div className="flex justify-between items-start mt-6">
                    <div>
                      <p className="text-sm text-slate-500">Starting at</p>
                      <p className="text-2xl font-bold text-slate-900">{service.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">Timeline</p>
                      <p className="text-lg font-semibold text-slate-900">{service.timeline}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full text-center px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors group-hover:bg-blue-600 group-hover:text-white"
                >
                  Learn More
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 sm:py-24 bg-slate-50">
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
              Service Comparison
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 text-center mb-12"
            >
              Find the right service for your needs
            </motion.p>

            <motion.div variants={itemVariants} className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-900">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900">Audits</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900">Technical SEO</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-900">Growth SEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Technical Audit', audits: true, technical: true, growth: true },
                    { feature: 'Monthly Optimization', audits: false, technical: true, growth: true },
                    { feature: 'Keyword Research', audits: false, technical: false, growth: true },
                    { feature: 'Content Creation', audits: false, technical: false, growth: true },
                    { feature: 'Rank Tracking', audits: false, technical: true, growth: true },
                    { feature: 'Link Building', audits: false, technical: false, growth: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 hover:bg-white/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-900">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.audits ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.technical ? (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
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
              className="text-4xl font-bold text-slate-900 mb-4 text-center"
            >
              Common Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 text-center mb-12"
            >
              Everything you need to know about our services
            </motion.p>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does it take to see results?',
                  a: 'Most clients see measurable improvements within 4-8 weeks, with significant traffic increases by 3-6 months. Results depend on current site status and keyword competition.',
                },
                {
                  q: 'Do you guarantee ranking improvements?',
                  a: 'We guarantee improvements in Core Web Vitals, on-page optimization, and technical health. While we cannot guarantee rankings (Google controls that), our strategies typically result in 40-60% traffic increases.',
                },
                {
                  q: 'What if I\'m not satisfied?',
                  a: 'We offer a 30-day money-back guarantee on audit services. For retainers, we include a 30-day trial period before any commitment.',
                },
                {
                  q: 'Can you work with my current developer?',
                  a: 'Absolutely! Many clients work with their own teams. We can provide recommendations and guidance while your team implements.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h3>
                  <p className="text-slate-600">{item.a}</p>
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
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
              Ready to Grow Your Organic Traffic?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8">
              Start with a free SEO audit. No credit card required.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg border border-white/40 transition-all duration-300"
              >
                Schedule Call
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


// // File: frontend/src/app/(routes)/services/page.tsx
// // Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\services\page.tsx

// import { Metadata } from 'next';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Check, ArrowRight, Zap, Globe, TrendingUp, Rocket, Code, BarChart3 } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'SEO Services | NerdPace - Technical SEO, Local SEO & Audits',
//   description: 'Our comprehensive SEO services including technical optimization, local SEO, content strategy, and performance optimization for businesses of all sizes.',
//   keywords: 'SEO services, technical SEO services, local SEO, content optimization, website performance',
//   openGraph: {
//     title: 'SEO Services | NerdPace',
//     description: 'Comprehensive SEO services tailored to your business goals',
//     type: 'website',
//   },
// };

// const services = [
//   {
//     id: 'technical-seo',
//     icon: <Code className="w-12 h-12" />,
//     title: 'Technical SEO',
//     shortDescription: 'Optimize your site\'s technical foundation for better rankings',
//     description: 'We audit and optimize your website\'s technical health including site speed, mobile friendliness, indexability, and Core Web Vitals.',
//     benefits: [
//       'Core Web Vitals optimization',
//       'Site speed improvements',
//       'Mobile optimization',
//       'Structured data implementation',
//       'XML sitemap & robots.txt setup',
//       'Crawl budget optimization',
//       'SSL/HTTPS configuration',
//       'Site architecture optimization'
//     ],
//     price: '$1,500/month',
//     timeline: '4-12 weeks',
//     caseStudy: 'See how we improved a SaaS site from 42 to 95 Lighthouse score',
//   },
//   {
//     id: 'local-seo',
//     icon: <Globe className="w-12 h-12" />,
//     title: 'Local SEO',
//     shortDescription: 'Get discovered by customers in your area',
//     description: 'Dominate local search results with optimized Google Business Profile, local citations, and location-specific content strategy.',
//     benefits: [
//       'Google Business Profile optimization',
//       'Local citation building',
//       'Review management strategy',
//       'Location page optimization',
//       'Local schema markup',
//       'Service area expansion',
//       'Local link building',
//       'NAP consistency audit'
//     ],
//     price: '$1,200/month',
//     timeline: '2-8 weeks',
//     caseStudy: 'Helped a dental practice rank #1 for 8 local keywords',
//   },
//   {
//     id: 'content-seo',
//     icon: <TrendingUp className="w-12 h-12" />,
//     title: 'Content SEO',
//     shortDescription: 'Create and optimize content that ranks and converts',
//     description: 'Strategic content creation and optimization targeting high-intent keywords that drive qualified traffic and conversions.',
//     benefits: [
//       'Keyword research & strategy',
//       'Content creation (500-3000 words)',
//       'On-page optimization',
//       'Internal linking strategy',
//       'Content calendar planning',
//       'Competitor analysis',
//       'Topic clustering',
//       'CTA optimization'
//     ],
//     price: '$2,000/month',
//     timeline: 'Ongoing',
//     caseStudy: 'Generated 150K organic traffic with 12 optimized posts',
//   },
//   {
//     id: 'performance-optimization',
//     icon: <Zap className="w-12 h-12" />,
//     title: 'Performance Optimization',
//     shortDescription: 'Improve Core Web Vitals and page speed',
//     description: 'Comprehensive performance audit and optimization to improve user experience and search rankings through faster loading times.',
//     benefits: [
//       'Page speed audit',
//       'Image optimization',
//       'Code splitting & lazy loading',
//       'Caching strategy',
//       'CDN configuration',
//       'Database optimization',
//       'Server response time reduction',
//       'Comprehensive speed report'
//     ],
//     price: '$1,500/month',
//     timeline: '2-6 weeks',
//     caseStudy: 'Reduced load time from 4.2s to 1.1s, improving conversions 23%',
//   },
//   {
//     id: 'seo-audits',
//     icon: <BarChart3 className="w-12 h-12" />,
//     title: 'SEO Audits',
//     shortDescription: 'Comprehensive analysis of your SEO health',
//     description: 'In-depth audit identifying all technical, on-page, and off-page SEO issues with actionable recommendations prioritized by impact.',
//     benefits: [
//       'Technical SEO audit',
//       'On-page SEO analysis',
//       'Competitive analysis',
//       'Backlink audit',
//       'Core Web Vitals assessment',
//       'Mobile usability review',
//       'Indexation analysis',
//       'Priority action plan'
//     ],
//     price: '$497',
//     timeline: '2-3 days',
//     caseStudy: 'Identified $50K+ opportunity with single audit',
//   },
//   {
//     id: 'consulting',
//     icon: <Rocket className="w-12 h-12" />,
//     title: 'SEO Consulting',
//     shortDescription: 'Strategic guidance for enterprise teams',
//     description: 'High-level consulting for teams wanting to implement SEO in-house with our strategic guidance and training.',
//     benefits: [
//       'SEO strategy development',
//       'Team training & workshops',
//       'Implementation roadmap',
//       'Monthly strategy calls',
//       'Process documentation',
//       'Tool recommendations',
//       'Performance monitoring',
//       'Quarterly reviews'
//     ],
//     price: 'Custom',
//     timeline: 'Flexible',
//     caseStudy: 'Helped enterprise scale SEO team from 0 to 5 people',
//   },
// ];

// export default function ServicesPage() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 },
//     },
//   };

//   return (
//     <main className="overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.1 }}
//             transition={{ duration: 1 }}
//             className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
//           />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="max-w-3xl mx-auto text-center"
//           >
//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
//             >
//               SEO Services Built for
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
//                 Modern Businesses
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
//             >
//               From technical optimization to content strategy, we offer comprehensive SEO solutions tailored to your business goals and budget.
//             </motion.p>

//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Schedule Consultation
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Link>
//               <Link
//                 href="/audit"
//                 className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
//               >
//                 Get Free Audit
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* SERVICES GRID */}
//       <section className="py-20 sm:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service) => (
//               <motion.div
//                 key={service.id}
//                 variants={itemVariants}
//                 className="group relative bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 {/* Icon */}
//                 <div className="mb-6 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>

//                 {/* Title & Description */}
//                 <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
//                 <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.shortDescription}</p>

//                 {/* Key Benefits */}
//                 <div className="space-y-2 mb-8">
//                   {service.benefits.slice(0, 4).map((benefit, idx) => (
//                     <div key={idx} className="flex items-start">
//                       <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                       <span className="text-sm text-slate-700">{benefit}</span>
//                     </div>
//                   ))}
//                   {service.benefits.length > 4 && (
//                     <p className="text-sm text-slate-500 ml-7">+ {service.benefits.length - 4} more benefits</p>
//                   )}
//                 </div>

//                 {/* Pricing & Timeline */}
//                 <div className="mb-6 pb-6 border-t border-slate-200">
//                   <div className="flex justify-between items-start mt-6">
//                     <div>
//                       <p className="text-sm text-slate-500">Starting at</p>
//                       <p className="text-2xl font-bold text-slate-900">{service.price}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm text-slate-500">Timeline</p>
//                       <p className="text-lg font-semibold text-slate-900">{service.timeline}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <Link
//                   href={`/services/${service.id}`}
//                   className="block w-full text-center px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition-colors group-hover:bg-blue-600 group-hover:text-white"
//                 >
//                   Learn More
//                   <ArrowRight className="inline ml-2 w-4 h-4" />
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* COMPARISON TABLE */}
//       <section className="py-20 sm:py-24 bg-slate-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="max-w-5xl mx-auto"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl font-bold text-slate-900 mb-4 text-center"
//             >
//               Service Comparison
//             </motion.h2>
//             <motion.p
//               variants={itemVariants}
//               className="text-xl text-slate-600 text-center mb-12"
//             >
//               Find the right service for your needs
//             </motion.p>

//             <motion.div variants={itemVariants} className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b-2 border-slate-900">
//                     <th className="text-left py-4 px-4 font-bold text-slate-900">Feature</th>
//                     <th className="text-center py-4 px-4 font-bold text-slate-900">Audits</th>
//                     <th className="text-center py-4 px-4 font-bold text-slate-900">Technical SEO</th>
//                     <th className="text-center py-4 px-4 font-bold text-slate-900">Growth SEO</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[
//                     { feature: 'Technical Audit', audits: true, technical: true, growth: true },
//                     { feature: 'Monthly Optimization', audits: false, technical: true, growth: true },
//                     { feature: 'Keyword Research', audits: false, technical: false, growth: true },
//                     { feature: 'Content Creation', audits: false, technical: false, growth: true },
//                     { feature: 'Rank Tracking', audits: false, technical: true, growth: true },
//                     { feature: 'Link Building', audits: false, technical: false, growth: true },
//                   ].map((row, idx) => (
//                     <tr key={idx} className="border-b border-slate-200 hover:bg-white/50 transition-colors">
//                       <td className="py-4 px-4 font-semibold text-slate-900">{row.feature}</td>
//                       <td className="py-4 px-4 text-center">
//                         {row.audits ? (
//                           <Check className="w-5 h-5 text-green-500 mx-auto" />
//                         ) : (
//                           <span className="text-slate-300">—</span>
//                         )}
//                       </td>
//                       <td className="py-4 px-4 text-center">
//                         {row.technical ? (
//                           <Check className="w-5 h-5 text-green-500 mx-auto" />
//                         ) : (
//                           <span className="text-slate-300">—</span>
//                         )}
//                       </td>
//                       <td className="py-4 px-4 text-center">
//                         {row.growth ? (
//                           <Check className="w-5 h-5 text-green-500 mx-auto" />
//                         ) : (
//                           <span className="text-slate-300">—</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ SECTION */}
//       <section className="py-20 sm:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto"
//           >
//             <motion.h2
//               variants={itemVariants}
//               className="text-4xl font-bold text-slate-900 mb-4 text-center"
//             >
//               Common Questions
//             </motion.h2>
//             <motion.p
//               variants={itemVariants}
//               className="text-xl text-slate-600 text-center mb-12"
//             >
//               Everything you need to know about our services
//             </motion.p>

//             <div className="space-y-4">
//               {[
//                 {
//                   q: 'How long does it take to see results?',
//                   a: 'Most clients see measurable improvements within 4-8 weeks, with significant traffic increases by 3-6 months. Results depend on current site status and keyword competition.',
//                 },
//                 {
//                   q: 'Do you guarantee ranking improvements?',
//                   a: 'We guarantee improvements in Core Web Vitals, on-page optimization, and technical health. While we cannot guarantee rankings (Google controls that), our strategies typically result in 40-60% traffic increases.',
//                 },
//                 {
//                   q: 'What if I\'m not satisfied?',
//                   a: 'We offer a 30-day money-back guarantee on audit services. For retainers, we include a 30-day trial period before any commitment.',
//                 },
//                 {
//                   q: 'Can you work with my current developer?',
//                   a: 'Absolutely! Many clients work with their own teams. We can provide recommendations and guidance while your team implements.',
//                 },
//               ].map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   variants={itemVariants}
//                   className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-blue-300 transition-colors"
//                 >
//                   <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h3>
//                   <p className="text-slate-600">{item.a}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto text-center"
//           >
//             <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-6">
//               Ready to Grow Your Organic Traffic?
//             </motion.h2>
//             <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8">
//               Start with a free SEO audit. No credit card required.
//             </motion.p>
//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/audit"
//                 className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Book Free Audit
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg border border-white/40 transition-all duration-300"
//               >
//                 Schedule Call
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }