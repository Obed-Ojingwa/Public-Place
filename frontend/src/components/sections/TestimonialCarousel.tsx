'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow SaaS',
    content: 'NerdPace transformed our organic traffic. We went from 2,000 to 15,000 monthly visitors in just 6 months. Their technical SEO expertise is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, ShopLocal',
    content: 'The audit was eye-opening. We implemented their recommendations and saw a 40% increase in conversions within weeks. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Director, GrowthCo',
    content: 'Best investment we made this year. The team is responsive, knowledgeable, and truly cares about results. Our rankings have never been better.',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-slate-50 rounded-lg p-8 border border-slate-200"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-blue-200 mb-4" />
          <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.content}</p>
          <div>
            <p className="font-bold text-slate-900">{testimonial.name}</p>
            <p className="text-sm text-slate-600">{testimonial.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
