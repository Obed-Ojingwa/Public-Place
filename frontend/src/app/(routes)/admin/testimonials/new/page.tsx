// ============================================================================
// FILE 2: Create Testimonial Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\testimonials\new\page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  ArrowLeft,
  MessageSquare,
  Star,
  Image,
  Link as LinkIcon,
  Link,
  CheckCircle,
  ToggleLeft,
  ToggleRight,
  X
} from 'lucide-react';

export default function NewTestimonialPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
    photoUrl: '',
    companyName: '',
    linkedinUrl: '',
    companyLogoUrl: '',
    isFeatured: false,
    isApproved: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          photo_url: formData.photoUrl || null,
          company_name: formData.companyName || null,
          linkedin_url: formData.linkedinUrl || null,
          company_logo_url: formData.companyLogoUrl || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create testimonial');
      }

      const data = await response.json();
      setSuccess('Testimonial created successfully!');
      setFormData({
        name: '',
        role: '',
        content: '',
        rating: 5,
        photoUrl: '',
        companyName: '',
        linkedinUrl: '',
        companyLogoUrl: '',
        isFeatured: false,
        isApproved: false,
      });
    } catch (err) {
      setError('Failed to create testimonial. Please try again.');
      console.error('Error creating testimonial:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */ }
        <motion.div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Add New Testimonial</h1>
          <p className="text-slate-600">Add a new customer testimonial</p>
          <Link href="/admin/testimonials" className="inline-flex items-center mb-4 text-sm text-blue-600 hover:text-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Testimonials
          </Link>
        </motion.div>

        {error && (
          <motion.div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-red-700">{error}</p>
          </motion.div>
        )}

        {success && (
          <motion.div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green-700">{success}</p>
          </motion.div>
        )}

        {/* FORM */}
        <motion.div className="bg-white rounded-xl border border-slate-200 p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role/Position</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Testimonial Content *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Rating (1-5) *</label>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <label key={i} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={i + 1}
                        checked={formData.rating === i + 1}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-1 text-slate-700">{i + 1}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Photo URL</label>
                <input
                  type="text"
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn URL</label>
                <input
                  type="text"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company Logo URL</label>
                <input
                  type="text"
                  name="companyLogoUrl"
                  value={formData.companyLogoUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/logo.png"
                />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    checked={formData.isFeatured}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
                <span className="text-sm text-slate-700">Feature this testimonial (shows on homepage)</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isApproved"
                    checked={formData.isApproved}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600"
                  />
                </div>
                <span className="text-sm text-slate-700">Approve for display</span>
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Testimonial'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    name: '',
                    role: '',
                    content: '',
                    rating: 5,
                    photoUrl: '',
                    companyName: '',
                    linkedinUrl: '',
                    companyLogoUrl: '',
                    isFeatured: false,
                    isApproved: false,
                  });
                  setError(null);
                  setSuccess(null);
                }}
                className="px-6 py-3 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}