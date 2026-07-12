// ============================================================================
// FILE 3: Edit Blog Post Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\admin\blog\[id]\edit\page.tsx

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Image,
  Tag,
  ClipboardList,
  Calendar,
  CheckCircle,
  Link,
  X,
  RefreshCw,
  Trash2
} from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  featured_image_url: string | null;
  author: string;
  category: string | null;
  tags: string[] | null;
  seo_keyword: string | null;
  internal_links: string[] | null;
  read_time_minutes: number;
  views_count: number;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string | null;
}

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    content: '',
    featured_image_url: '',
    author: '',
    category: '',
    tags: '',
    seo_keyword: '',
    internal_links: '',
    read_time_minutes: 5,
    views_count: 0,
    published: false,
    published_at: '',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/posts/${params.id}`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const data = await response.json();
        setPost(data);
        setFormData({
          slug: data.slug,
          title: data.title,
          description: data.description || '',
          content: data.content,
          featured_image_url: data.featured_image_url || '',
          author: data.author,
          category: data.category || '',
          tags: Array.isArray(data.tags) ? data.tags.join(', ') : '',
          seo_keyword: data.seo_keyword || '',
          internal_links: Array.isArray(data.internal_links) ? data.internal_links.join(', ') : '',
          read_time_minutes: data.read_time_minutes,
          views_count: data.views_count,
          published: data.published,
          published_at: data.published_at ? new Date(data.published_at).toISOString().slice(0, 16) : '',
        });
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/posts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: Array.isArray(formData.tags) ? formData.tags : formData.tags.split(',').map(t => t.trim()).filter(t => t.length > 0),
          internal_links: Array.isArray(formData.internal_links) ? formData.internal_links : formData.internal_links.split(',').map(l => l.trim()).filter(l => l.length > 0),
          published_at: formData.published_at || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog post');
      }

      setSuccess('Blog post updated successfully!');
      setPost(prev => {
        if (!prev) return prev;
        return {
          ...prev,
          ...formData,
          tags: Array.isArray(formData.tags) ? formData.tags : formData.tags.split(',').map(t => t.trim()).filter(t => t.length > 0),
          internal_links: Array.isArray(formData.internal_links) ? formData.internal_links : formData.internal_links.split(',').map(l => l.trim()).filter(l => l.length > 0),
          published_at: formData.published_at || null,
          updated_at: new Date().toISOString(),
        };
      });
    } catch (err) {
      setError('Failed to update blog post. Please try again.');
      console.error('Error updating blog post:', err);
    } finally {
      setSaving(false);
    }
  };

  if (loading || !post) {
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
              <a href="/admin/blog" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Edit Blog Post</h1>
          <p className="text-slate-600">Edit blog post: {post.title}</p>
          <div className="flex mt-4 space-x-3">
            <Link href="/admin/blog" className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300 transition-colors">
              ← Back to List
            </Link>
            <a
              href="/admin/blog"
              onClick={() => {
                if (window.confirm('Delete this blog post?')) {
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Slug *</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Content * (Markdown)</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="10"
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
                value={formData.tags}
                onChange={handleTagsChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                value={formData.internal_links}
                onChange={e => {
                  setFormData(prev => ({
                    ...prev,
                    internal_links: e.target.value.split(',').map(l => l.trim()).filter(l => l.length > 0)
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
              disabled={saving}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Update Blog Post'}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  slug: post.slug,
                  title: post.title,
                  description: post.description || '',
                  content: post.content,
                  featured_image_url: post.featured_image_url || '',
                  author: post.author,
                  category: post.category || '',
                  tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
                  seo_keyword: post.seo_keyword || '',
                  internal_links: Array.isArray(post.internal_links) ? post.internal_links.join(', ') : '',
                  read_time_minutes: post.read_time_minutes,
                  views_count: post.views_count,
                  published: post.published,
                  published_at: post.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : '',
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
  </div>
</main>
);
}