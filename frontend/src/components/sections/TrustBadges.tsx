'use client';

import { motion } from 'framer-motion';

const trustBadges = [
  // TODO: confirm and link Google Partner - needs verification URL
  // { name: 'Google Partner', icon: '🏆', href: 'https://partners.google.com/' },

  // TODO: confirm and link Clutch Top SEO - needs Clutch profile URL
  // { name: 'Clutch Top SEO', icon: '⭐', href: 'https://clutch.co/profile/[your-clutch-id]' },

  // TODO: confirm and link Inc. 5000 - needs Inc. profile URL if applicable
  // { name: 'Inc. 5000', icon: '🚀', href: 'https://www.inc.com/inc5000/list/[year]' },

  // TODO: confirm and link G2 Leader - needs G2 profile URL
  // { name: 'G2 Leader', icon: '🎯', href: 'https://www.g2.com/products/[your-product]/reviews' },

  // TODO: confirm and link HubSpot Certified - needs HubSpot partner URL
  // { name: 'HubSpot Certified', icon: '📊', href: 'https://www.hubspotpartners.com/partners/[your-id]' },

  // TODO: confirm and link SEMrush Partner - needs SEMrush partner URL
  // { name: 'SEMrush Partner', icon: '🔍', href: 'https://www.semrush.com/partners/' },
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
