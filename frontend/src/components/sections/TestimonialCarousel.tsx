'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Founder, Haliberry Cake',
    role: 'London, United Kingdom',
    content: 'Before working with NerdPace, Haliberry Cake didn\\'t have a professional website that truly represented our business. Customers had no simple way to browse our cakes, customise their orders, or place orders online. We needed a modern website that would showcase our brand and make the ordering process seamless.\n\nNerdPace designed and developed our website from the ground up. They built a fast, modern, and responsive website tailored to our business, implemented online ordering with cake customisation options, integrated secure online payments, optimised the site for search engines, and ensured it worked smoothly across desktop and mobile devices. They also paid close attention to performance, usability, and the overall customer experience.\n\nWe now have a professional online presence that reflects the quality of our brand. Customers can browse, customise, and order with confidence. The ordering process is streamlined. The business is now positioned for digital growth.\n\nWe are extremely pleased with the outcome and would confidently recommend NerdPace to anyone looking for a skilled and dependable web developer.',
    rating: 0, // We won't display rating
    photoUrl: '',
    companyName: 'Haliberry Cake',
    linkedinUrl: '',
    companyLogoUrl: '',
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="space-y-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-slate-50 rounded-lg p-8 border border-slate-200"
        >
          {/* Only show rating if rating > 0 */}
          {testimonial.rating > 0 && (
            <>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
            </>
          )}
          {/* If rating is 0, we still show the quote icon */}
          {testimonial.rating === 0 && (
            <Quote className="w-8 h-8 text-blue-200 mb-4" />
          )}
          <p className="text-slate-700 mb-6 leading-relaxed whitespace-pre-line">{testimonial.content}</p>
          <div className="flex items-start space-x-4">
            {testimonial.photoUrl ? (
              <img
                src={testimonial.photoUrl}
                alt={`${testimonial.name} headshot`}
                className="h-12 w-12 rounded-full object-cover border border-slate-200"
              />
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
                />
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}