
// ============================================================================
// FILE 2: Blog Post Detail Page
// Path: C:\Users\[YourUsername]\Documents\nerdpace\frontend\src\app\(routes)\blog\[slug]\page.tsx
 
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Share2 } from 'lucide-react';
 
interface BlogPostDetailProps {
  params: { slug: string };
}
 
export async function generateMetadata({ params }: BlogPostDetailProps): Promise<Metadata> {
  // Fetch post data to generate metadata
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/posts/${params.slug}`
  );
  const post = await response.json();
 
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.featured_image_url }],
    },
  };
}
 
export default async function BlogPostPage({ params }: BlogPostDetailProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/posts/${params.slug}`
  );
  const post = await response.json();
 
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
              {post.category.replace('-', ' ').toUpperCase()}
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.read_time_minutes} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* FEATURED IMAGE */}
      {post.featured_image_url && (
        <section className="relative h-96 sm:h-[500px] overflow-hidden">
          <Image
            src={post.featured_image_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </section>
      )}
 
      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {/* Render markdown content */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
 
            {/* Share Buttons */}
            <div className="border-t border-b border-slate-200 py-6 mb-12">
              <p className="text-slate-600 font-semibold mb-4">Share this article:</p>
              <div className="flex gap-4">
                <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
 
            {/* Tags */}
            <div className="mb-12">
              <h3 className="font-bold text-slate-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?search=${tag}`}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
 
            {/* Author Bio */}
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 mb-12">
              <h3 className="font-bold text-slate-900 mb-2">About the Author</h3>
              <p className="text-slate-600">
                {post.author} is an SEO expert at NerdPace with years of experience helping businesses rank higher.
              </p>
            </div>
 
            {/* Related Posts CTA */}
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to improve your SEO?</h3>
              <p className="text-slate-600 mb-6">Get a free audit from our team of experts.</p>
              <Link
                href="/audit"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}