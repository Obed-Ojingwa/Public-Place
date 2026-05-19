'use client';

import { motion } from 'framer-motion';

const trustBadges = [
  { name: 'Google Partner', icon: '🏆' },
  { name: 'Clutch Top SEO', icon: '⭐' },
  { name: 'Inc. 5000', icon: '🚀' },
  { name: 'G2 Leader', icon: '🎯' },
  { name: 'HubSpot Certified', icon: '📊' },
  { name: 'SEMrush Partner', icon: '🔍' },
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
          <span className="text-2xl">{badge.icon}</span>
          <span className="font-semibold">{badge.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
