// ============================================================================
// FILE 1: Admin Testimonials Management Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\testimonials\page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Edit2,
  Trash2,
  User,
  CheckCircle,
  Star,
  Image,
  Link as LinkIcon,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  content: string;
  rating: number;
  photo_url: string | null;
  company_name: string | null;
  linkedin_url: string | null;
  company_logo_url: string | null;
  is_featured: boolean;
  is_approved: boolean;
  created_at: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'approved' | 'featured'>( 'all');

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials?limit=100`);
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'approved') return testimonial.is_approved;
    if (filter === 'featured') return testimonial.is_featured;
    return true;
  });

  const toggleApproval = async (id: string, currentStatus: boolean) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials/${id}/${currentStatus ? 'unapprove' : 'approve'`, {
        method: 'PATCH',
      });
      setTestimonials(testimonials.map(t =>
        t.id === id ? { ...t, is_approved: !currentStatus } : t
      ));
    } catch (error) {
      console.error('Failed to update testimonial approval:', error);
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials/${id}/feature`, {
        method: 'PATCH',
      });
      setTestimonials(testimonials.map(t =>
        t.id === id ? { ...t, is_featured: !currentStatus } : t
      ));
    } catch (error) {
      console.error('Failed to update testimonial featured status:', error);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials/${id}`, {
        method: 'DELETE',
      });
      setTestimonials(testimonials.filter(t => t.id !== id));
    } catch (error) {
      console.error('Failed to delete testimonial:', error);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */ }
        <motion.div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Testimonials</h1>
          <p className="text-slate-600">Manage customer testimonials</p>
          <Link href="/admin/testimonials/new" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Add New Testimonial
          </Link>
        </motion.div>

        {/* FILTERS */ }
        <motion.div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            {['all', 'approved', 'featured'].map((filterValue) => (
              <button
                key={filterValue}
                onClick={() => setFilter(filterValue as any)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  filter === filterValue
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filterValue === 'all' ? 'All Testimonials' :
                 filterValue === 'approved' ? 'Approved' : 'Featured'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* TESTIMONIALS TABLE */ }
        <motion.div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Customer</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Content Preview</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Rating</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Featured</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Approved</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTestimonials.length === 0 ? (
                  <tr>
                    <td colspan="6" className="py-8 text-center text-slate-500">
                      No testimonials found. <a href="/admin/testimonials/new" className="text-blue-600 hover:underline">Add one</a>.
                    </td>
                  </tr>
                ) : (
                  filteredTestimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-4 px-6">
                        <div className="flex items-start space-x-3">
                          {testimonial.photo_url ? (
                            <img
                              src={testimonial.photo_url}
                              alt={`${testimonial.name} photo`}
                              className="h-10 w-10 rounded-full object-cover border border-slate-200"
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                              <User className="w-5 h-5 text-slate-500" />
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-slate-900">{testimonial.name}</p>
                            {testimonial.role && <p className="text-sm text-slate-600">{testimonial.role}</p>}
                            {testimonial.company_name && <p className="text-xs text-slate-500">{testimonial.company_name}</p>}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-slate-700 max-w-[200px] truncate">{testimonial.content}</p>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center">
                          {testimonial.is_featured ? (
                            <ToggleLeft className="w-5 h-5 text-green-500" onClick={() => toggleFeatured(testimonial.id, true)} />
                          ) : (
                            <ToggleRight className="w-5 h-5 text-slate-400" onClick={() => toggleFeatured(testimonial.id, false)} />
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center">
                          {testimonial.is_approved ? (
                            <CheckCircle className="w-5 h-5 text-green-500" onClick={() => toggleApproval(testimonial.id, true)} />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-slate-400" onClick={() => toggleApproval(testimonial.id, false)} />
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2 justify-center">
                          <Link
                            href={`/admin/testimonials/${testimonial.id}/edit`}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <Edit2 className="w-4 h-4 text-slate-600" />
                          </Link>
                          <button
                            onClick={() => deleteTestimonial(testimonial.id)}
                            className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </main>
  );
}