// ============================================================================
// BLOG SYSTEM - COMPLETE FRONTEND + BACKEND IMPLEMENTATION
// ============================================================================
 
// FILE 1: Frontend Blog Index Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\blog\page.tsx
 
'use client';
 
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, Calendar, User } from 'lucide-react';
 
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  featured_image_url: string;
  author: string;
  category: string;
  tags: string[];
  read_time_minutes: number;
  published_at: string;
  views_count: number;
}
 
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
 
  const categories = ['all', 'technical-seo', 'local-seo', 'content-seo', 'performance', 'business'];
 
  useEffect(() => {
    // Fetch blog posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/posts`
        );
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchPosts();
  }, []);
 
  useEffect(() => {
    // Filter posts
    let filtered = posts;
 
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }
 
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
 
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
 
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
 
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl font-bold text-white mb-6"
            >
              SEO Insights & Tips
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-300 mb-8"
            >
              Expert articles on technical SEO, rankings, and organic growth
            </motion.p>
 
            {/* Search */}
            <motion.div variants={itemVariants} className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
 
      {/* CATEGORIES */}
      <section className="py-12 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
              >
                {category === 'all' ? 'All Posts' : category.replace('-', ' ').toUpperCase()}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
 
      {/* FEATURED POST */}
      {filteredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured</h2>
              <motion.div
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 p-8 sm:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
                      Featured Article
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-blue-100 mb-6 text-lg">{filteredPosts[0].description}</p>
                    <Link
                      href={`/blog/${filteredPosts[0].slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  {filteredPosts[0].featured_image_url && (
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <Image
                        src={filteredPosts[0].featured_image_url}
                        alt={filteredPosts[0].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
 
      {/* POSTS GRID */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredPosts.length > 1 && (
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Recent Articles</h2>
            )}
 
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-200"
                  >
                    {/* Featured Image */}
                    {post.featured_image_url && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.featured_image_url}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
 
                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold mb-3">
                        {post.category.replace('-', ' ').toUpperCase()}
                      </span>
 
                      <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
 
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.description}</p>
 
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-200">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.published_at).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div>{post.read_time_minutes} min read</div>
                      </div>
 
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
 
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                      >
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-slate-600">No articles found. Try adjusting your search.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
 
      {/* NEWSLETTER CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
              Get SEO Tips in Your Inbox
            </motion.h2>
            <motion.p variants={itemVariants} className="text-blue-100 mb-8">
              Subscribe to our weekly newsletter for expert SEO insights and actionable tips.
            </motion.p>
            <motion.form variants={itemVariants} className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}