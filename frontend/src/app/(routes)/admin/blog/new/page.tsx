// ============================================================================
// FILE 2: Create Blog Post Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\blog\new\page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowLeft,
  Image,
  Tag,
  ClipboardList,
  Calendar,
  CheckCircle,
  Link,
  X
} from 'lucide-react';

export default function NewBlogPostPage() {
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    content: '',
    featured_image_url: '',
    author: 'NerdPace Team',
    category: '',
    tags: [] as string[],
    seo_keyword: '',
    internal_links: [] as string[],
    read_time_minutes: 5,
    views_count: 0,
    published: false,
    published_at: '',
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

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    setFormData(prev => ({
      ...prev,
      tags: tagsArray
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags,
          internal_links: formData.internal_links,
          published_at: formData.published_at || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      const data = await response.json();
      setSuccess('Blog post created successfully!');
      setFormData({
        slug: '',
        title: '',
        description: '',
        content: '',
        featured_image_url: '',
        author: 'NerdPace Team',
        category: '',
        tags: [] as string[],
        seo_keyword: '',
        internal_links: [] as string[],
        read_time_minutes: 5,
        views_count: 0,
        published: false,
        published_at: '',
      });
    } catch (err) {
      setError('Failed to create blog post. Please try again.');
      console.error('Error creating blog post:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */ }
        <motion.div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Add New Blog Post</h1>
          <p className="text-slate-600">Create a new blog post</p>
          <Link href="/admin/blog" className="inline-flex items-center mb-4 text-sm text-blue-600 hover:text-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Posts
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="my-blog-post"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Content * (Markdown)</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Featured Image URL</label>
                <input
                  type="text"
                  name="featured_image_url"
                  value={formData.featured_image_url}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Technical SEO"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={Array.isArray(formData.tags) ? formData.tags.join(', ') : formData.tags}
                  onChange={handleTagsChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg rounded-lg focus:ring-blue-500 focus:border-transparent"
                  placeholder="SEO, Marketing, Tutorial"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">SEO Keyword</label>
                <input
                  type="text"
                  name="seo_keyword"
                  value={formData.seo_keyword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Internal Links (comma-separated)</label>
                <input
                  type="text"
                  name="internal_links"
                  value={Array.isArray(formData.internal_links) ? formData.internal_links.join(', ') : formData.internal_links}
                  onChange={e => {
                    const internalLinksArray = e.target.value.split(',').map(link => link.trim()).filter(link => link.length > 0);
                    setFormData(prev => ({
                      ...prev,
                      internal_links: internalLinksArray
                    }));
                  }}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="/services/technical-seo, /about"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Read Time (minutes)</label>
                <input
                  type="number"
                  name="read_time_minutes"
                  value={formData.read_time_minutes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Views Count</label>
                <input
                  type="number"
                  name="views_count"
                  value={formData.views_count}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
                <span className="text-sm text-slate-700">Publish this post</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <input
                    type="datetime-local"
                    name="published_at"
                    value={formData.published_at}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
                <span className="text-sm text-slate-700">Published at (optional)</span>
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Blog Post'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    slug: '',
                    title: '',
                    description: '',
                    content: '',
                    featured_image_url: '',
                    author: 'NerdPace Team',
                    category: '',
                    tags: [] as string[],
                    seo_keyword: '',
                    internal_links: [] as string[],
                    read_time_minutes: 5,
                    views_count: 0,
                    published: false,
                    published_at: '',
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