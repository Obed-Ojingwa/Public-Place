import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Globe, Clock, Star, CheckCircle2, Menu, Search } from 'lucide-react';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'NerdPace Blog - SEO Insights, Tips & Industry News',
  description: 'Read the NerdPace blog for expert SEO insights, technical guides, industry news, and actionable tips to improve your website\'s search visibility and performance.',
  keywords: 'SEO blog, SEO tips, technical SEO, SEO guide, SEO news, search engine optimization',
  openGraph: {
    title: 'NerdPace Blog - SEO Insights & Tips',
    description: 'Read the NerdPace blog for expert SEO insights, technical guides, industry news, and actionable tips to improve your website\'s search visibility and performance.',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'technical-seo-checklist-2024',
      title: 'The Ultimate Technical SEO Checklist for 2024',
      excerpt: 'A comprehensive 50-point checklist covering everything from crawlability to Core Web Vitals to ensure your site is technically sound for search engines.',
      date: 'May 10, 2024',
      readTime: '8 min read',
      tags: ['Technical SEO', 'Audit', 'Core Web Vitals'],
      image: '/blog/technical-seo-checklist.jpg',
      author: {
        name: 'James Smith',
        avatar: '/authors/james.jpg',
        role: 'Founder & Lead SEO Strategist'
      }
    },
    {
      id: 'core-web-vitals-optimization-guide',
      title: 'Core Web Vitals Optimization: A Step-by-Step Guide',
      excerpt: 'Learn how to measure, diagnose, and fix Core Web Vitals issues to improve both user experience and search rankings.',
      date: 'May 5, 2024',
      readTime: '12 min read',
      tags: ['Core Web Vitals', 'Performance', 'Technical SEO'],
      image: '/blog/core-web-vitals-guide.jpg',
      author: {
        name: 'Sarah Rodriguez',
        avatar: '/authors/sarah.jpg',
        role: 'Senior Technical SEO Specialist'
      }
    },
    {
      id: 'local-seo-strategy-small-business',
      title: 'Local SEO Strategy for Small Businesses: Dominate Your Area',
      excerpt: 'Proven tactics to improve your local search visibility, optimize your Google Business Profile, and attract more local customers.',
      date: 'April 28, 2024',
      readTime: '10 min read',
      tags: ['Local SEO', 'Google Business Profile', 'Citations'],
      image: '/blog/local-seo-strategy.jpg',
      author: {
        name: 'Michael Chen',
        avatar: '/authors/michael.jpg',
        role: 'Content & Local SEO Specialist'
      }
    },
    {
      id: 'seo-audit-case-study-500-traffic',
      title: 'Case Study: How a Technical SEO Audit Drove 500% Traffic Growth',
      excerpt: 'Real example of how identifying and fixing technical SEO issues transformed a struggling website into a traffic powerhouse.',
      date: 'April 20, 2024',
      readTime: '15 min read',
      tags: ['Case Study', 'Technical SEO', 'Traffic Growth'],
      image: '/blog/seo-audit-case-study.jpg',
      author: {
        name: 'James Smith',
        avatar: '/authors/james.jpg',
        role: 'Founder & Lead SEO Strategist'
      }
    },
    {
      id: 'schema-markup-complete-guide',
      title: 'Schema Markup: The Complete Guide for SEO Benefits',
      excerpt: 'Everything you need to know about implementing structured data to enhance your search appearance and improve click-through rates.',
      date: 'April 15, 2024',
      readTime: '18 min read',
      tags: ['Schema Markup', 'Structured Data', 'Rich Snippets'],
      image: '/blog/schema-markup-guide.jpg',
      author: {
        name: 'Sarah Rodriguez',
        avatar: '/authors/sarah.jpg',
        role: 'Senior Technical SEO Specialist'
      }
    },
    {
      id: 'mobile-first-indexing-optimization',
      title: 'Mobile-First Indexing: Optimization Strategies for 2024',
      excerpt: 'Ensure your site is fully optimized for Google\'s mobile-first indexing with these technical and content-focused strategies.',
      date: 'April 10, 2024',
      readTime: '11 min read',
      tags: ['Mobile SEO', 'Technical SEO', 'Responsive Design'],
      image: '/blog/mobile-first-indexing.jpg',
      author: {
        name: 'Michael Chen',
        avatar: '/authors/michael.jpg',
        role: 'Content & Local SEO Specialist'
      }
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            >
              NerdPace Blog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2">
                SEO Insights & Tips
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              Expert SEO insights, technical guides, and actionable tips to improve your website\'s search visibility and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEARCH & FILTER SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <motion.input
                  type="text"
                  placeholder="Search blog posts..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </div>
              <div className="flex gap-3">
                <motion.select
                  className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <option value="">All Categories</option>
                  <option value="technical-seo">Technical SEO</option>
                  <option value="local-seo">Local SEO</option>
                  <option value="content-seo">Content SEO</option>
                  <option value="performance">Performance</option>
                  <option value="case-study">Case Studies</option>
                </motion.select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-slate-900 mb-4 text-center"
            >
              Latest Articles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 text-center mb-12"
            >
              Stay updated with the latest SEO strategies, technical guides, and industry insights.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: blogPosts.indexOf(post) * 0.05 }}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Post Image */}
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3">
                    <span className="text-xs text-white font-medium uppercase tracking-wider">
                      {post.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              Stay Updated with SEO Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-slate-600 max-w-2xl mx-auto"
            >
              Get our latest SEO tips, algorithm updates, and actionable strategies delivered straight to your inbox.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* POPULAR POSTS SECTION */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            >
              Popular Posts
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Popular Post 1 */}
            <motion.div
              key="popular1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 mb-2">How to Fix Core Web Vitals: A Complete Guide</h4>
              <p className="text-slate-600 mb-3">
                Step-by-step instructions for improving LCP, FID, and CLS scores to boost both rankings and user experience.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Eye className="w-4 h-4" />
                <span>12.4K views</span>
                <Dot className="w-1 h-1 rounded-full bg-slate-400 mx-1" />
                <Calendar className="w-4 h-4" />
                <span>2 weeks ago</span>
              </div>
            </div>

            {/* Popular Post 2 */}
            <motion.div
              key="popular2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 mb-2">Local SEO Checklist: Rank #1 in Your City</h4>
              <p className="text-slate-600 mb-3">
                Essential optimizations for your Google Business Profile, website, and citations to dominate local search.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Eye className="w-4 h-4" />
                <span>8.9K views</span>
                <Dot className="w-1 h-1 rounded-full bg-slate-400 mx-1" />
                <Calendar className="w-4 h-4" />
                <span>1 month ago</span>
              </div>
            </div>

            {/* Popular Post 3 */}
            <motion.div
              key="popular3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-6 border border-slate-200"
            >
              <h4 className="font-bold text-slate-900 mb-2">Technical SEO vs Content SEO: Where to Focus First</h4>
              <p className="text-slate-600 mb-3">
                Understanding when to prioritize technical fixes versus content creation for maximum SEO impact.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Eye className="w-4 h-4" />
                <span>15.2K views</span>
                <Dot className="w-1 h-1 rounded-full bg-slate-400 mx-1" />
                <Calendar className="w-4 h-4" />
                <span>3 weeks ago</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTA />
    </main>
  );
}
