// ============================================================================
// FILE 3: Edit Testimonial Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\testimonials\[id]\edit\page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MessageSquare,
  Star,
  Image,
  Link as LinkIcon,
  Link,
  CheckCircle,
  ToggleLeft,
  ToggleRight,
  X,
  RefreshCw,
  Trash2
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
  updated_at: string;
}

export default function EditTestimonialPage({ params }: { params: { id: string } }) {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
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

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials/${params.id}`);
        if (!response.ok) {
          throw new Error('Testimonial not found');
        }
        const data = await response.json();
        setTestimonial(data);
        setFormData({
          name: data.name,
          role: data.role || '',
          content: data.content,
          rating: data.rating,
          photoUrl: data.photo_url || '',
          companyName: data.company_name || '',
          linkedinUrl: data.linkedin_url || '',
          companyLogoUrl: data.company_logo_url || '',
          isFeatured: data.is_featured,
          isApproved: data.is_approved,
        });
      } catch (err) {
        setError('Failed to load testimonial');
        console.error('Error fetching testimonial:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/testimonials/${params.id}`, {
        method: 'PUT',
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
        throw new Error('Failed to update testimonial');
      }

      setSuccess('Testimonial updated successfully!');
      setTestimonial(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          ...formData,
          photo_url: formData.photoUrl || null,
          company_name: formData.companyName || null,
          linkedin_url: formData.linkedinUrl || null,
          company_logo_url: formData.companyLogoUrl || null,
          updated_at: new Date().toISOString(),
        };
      });
    } catch (err) {
      setError('Failed to update testimonial. Please try again.');
      console.error('Error updating testimonial:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading || !testimonial) {
    return (
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-140px)]">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-slate-200 rounded mb-2"></div>
            <div className="h-8 w-48 bg-slate-200 rounded mb-2"></div>
            <div className="h-8 w-64 bg-slate-200 rounded mb-2"></div>
            <div className="h-8 w-full bg-slate-200 rounded"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[calc(100vh-140px)] items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
              <p className="text-slate-600">{error}</p>
              <a href="/admin/testimonials" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Go Back
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */ }
        <motion.div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Edit Testimonial</h1>
          <p className="text-slate-600">Edit testimonial for {testimonial.name}</p>
          <div className="flex mt-4 space-x-3">
            <Link href="/admin/testimonials" className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors">
              ← Back to List
            </Link>
            <a
              href="/admin/testimonials"
              onClick={() => {
                if (window.confirm('Delete this testimonial?')) {
                  // Delete logic would go here
                }
              }}
              className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors"
            >
              Delete
            </a>
          </div>
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
                  rows="5"
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
                disabled={saving}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Update Testimonial'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    name: testimonial.name,
                    role: testimonial.role || '',
                    content: testimonial.content,
                    rating: testimonial.rating,
                    photoUrl: testimonial.photo_url || '',
                    companyName: testimonial.company_name || '',
                    linkedinUrl: testimonial.linkedin_url || '',
                    companyLogoUrl: testimonial.company_logo_url || '',
                    isFeatured: testimonial.is_featured,
                    isApproved: testimonial.is_approved,
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