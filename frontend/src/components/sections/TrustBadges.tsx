'use client';

import { motion } from 'framer-motion';

// Trust badges configuration
// STATUS: All badges need verification URLs to be enabled
// To enable a badge: uncomment it and provide the real href URL to its verification/profile page
// TODO: Before production, provide verification URLs for each badge

const trustBadges = [
  // TODO: Add Google Partner verification URL
  // { name: 'Google Partner', icon: '🏆', href: 'https://partners.google.com/YOUR_PARTNER_ID' },

  // TODO: Add Clutch Top SEO verification URL (e.g., https://clutch.co/profile/nerdpace)
  // { name: 'Clutch Top SEO', icon: '⭐', href: '' },

  // TODO: Add Inc. 5000 verification URL if NerdPace is listed
  // { name: 'Inc. 5000', icon: '🚀', href: '' },

  // TODO: Add G2 Leader verification URL (e.g., https://www.g2.com/products/nerdpace/reviews)
  // { name: 'G2 Leader', icon: '🎯', href: '' },

  // TODO: Add HubSpot Certified Partner verification URL if applicable
  // { name: 'HubSpot Certified', icon: '📊', href: '' },

  // TODO: Add SEMrush Partner verification URL if applicable
  // { name: 'SEMrush Partner', icon: '🔍', href: '' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
      {trustBadges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
        >
          {badge.href ? (
            <a href={badge.href} target="_blank" rel="noopener noreferrer">
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold">{badge.name}</span>
            </a>
          ) : (
            <>
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold">{badge.name}</span>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
}
