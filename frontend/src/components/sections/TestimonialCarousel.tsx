'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechFlow SaaS',
    content: 'NerdPace transformed our organic traffic. We went from 2,000 to 15,000 monthly visitors in just 6 months. Their technical SEO expertise is unmatched.',
    rating: 5,
    // TODO: Add real photo URL - upload to CDN or use cloud storage
    photoUrl: '', // Needs real headshot photo URL
    // TODO: Add real LinkedIn URL - confirm with testimonial provider
    linkedinUrl: '', // Needs real LinkedIn profile URL (e.g., https://linkedin.com/in/sarah-chen)
    // TODO: Add company logo URL - request logo from TechFlow SaaS or find from company site
    companyLogoUrl: '', // Needs real company logo URL
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, ShopLocal',
    content: 'The audit was eye-opening. We implemented their recommendations and saw a 40% increase in conversions within weeks. Highly recommend!',
    rating: 5,
    // TODO: Add real photo URL - upload to CDN or use cloud storage
    photoUrl: '', // Needs real headshot photo URL
    // TODO: Add real LinkedIn URL - confirm with testimonial provider
    linkedinUrl: '', // Needs real LinkedIn profile URL (e.g., https://linkedin.com/in/michael-rodriguez)
    // TODO: Add company logo URL - request logo from ShopLocal or find from company site
    companyLogoUrl: '', // Needs real company logo URL
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Director, GrowthCo',
    content: 'Best investment we made this year. The team is responsive, knowledgeable, and truly cares about results. Our rankings have never been better.',
    rating: 5,
    // TODO: Add real photo URL - upload to CDN or use cloud storage
    photoUrl: '', // Needs real headshot photo URL
    // TODO: Add real LinkedIn URL - confirm with testimonial provider
    linkedinUrl: '', // Needs real LinkedIn profile URL (e.g., https://linkedin.com/in/emily-watson)
    // TODO: Add company logo URL - request logo from GrowthCo or find from company site
    companyLogoUrl: '', // Needs real company logo URL
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
          <div className="flex items-start space-x-4">
            {testimonial.photoUrl ? (
              <img
                src={testimonial.photoUrl}
                alt={`${testimonial.name} headshot`}
                className="h-12 w-12 rounded-full object-cover border border-slate-200"
              >
              </img>
            ) : (
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
                <span className="text-slate-500">No Photo</span>
              </div>
            )}
            <div className="space-y-1">
              <p className="font-bold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-600">{testimonial.role}</p>
              {testimonial.linkedinUrl && (
                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-xs"
                >
                  LinkedIn
                </a>
              )}
              {testimonial.companyLogoUrl && (
                <img
                  src={testimonial.companyLogoUrl}
                  alt={`${testimonial.name}'s company logo`}
                  className="h-8 w-auto mt-1 opacity-80"
                >
                </img>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
