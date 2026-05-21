// ============================================================================
// FIX 2: Fix Blog Page Route Conflict
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\routes\blog\page.tsx
// IMPORTANT: Move blog to (routes)/blog, NOT at root level
 
// The error says you have BOTH /blog/page and /(routes)/blog/page
// SOLUTION: Delete the one at /blog/page.tsx if it exists
// Keep ONLY: /src/app/(routes)/blog/page.tsx
 
// Use the blog implementation from 05_BLOG_SYSTEM_FRONTEND_BACKEND.tsx
// but place it correctly in the (routes) group
 
// ============================================================================
// FIX 3: Fix Service Card Links (404 Error)
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\components\sections\ServiceCard.tsx
 
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
 
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  benefits?: string[];
}
 
export default function ServiceCard({
  icon,
  title,
  description,
  href,
  benefits = [],
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Icon */}
      <div className="mb-6 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
 
      {/* Title & Description */}
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{description}</p>
 
      {/* Benefits */}
      {benefits.length > 0 && (
        <div className="space-y-2 mb-8">
          {benefits.slice(0, 3).map((benefit, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-sm text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>
      )}
 
      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
}


// 'use client';

// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface ServiceCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   href: string;
// }

// export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       className="group bg-white rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
//     >
//       <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
//       <p className="text-slate-600 mb-6">{description}</p>
//       <Link
//         href={href}
//         className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
//       >
//         Learn More
//         <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//       </Link>
//     </motion.div>
//   );
// }
