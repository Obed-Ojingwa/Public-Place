import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'Website Development Agency Lagos Nigeria | NerdPace',
  },
  description: 'NerdPace is a website development agency in Lagos, Nigeria. We build fast, modern, and SEO-friendly websites for businesses. From simple landing pages to complex web applications, we deliver high-performance sites that rank well and convert visitors.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/services/website-development-lagos',
  },
};

export default function WebsiteDevelopmentLagosPage() {
  return (
    <main>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              Website Development Agency in Lagos Nigeria
            </h1>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
              NerdPace is a Lagos-based website development agency specializing in creating custom, responsive, and SEO-optimized websites for businesses in Nigeria and worldwide.
            </p>

            <div className="bg-slate-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Our Website Development Services</h2>
              <p className="mb-4">
                We create websites that are not only visually stunning but also technically sound, fast-loading, and optimized for search engines. Our development process ensures your website is built to perform and convert.
              </p>

              <h2 className="text-2xl font-bold mb-4">Why Choose Our Lagos-Based Web Development Team?</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Expertise in modern web technologies (React, Next.js, Node.js, etc.)</li>
                <li>Focus on performance, security, and scalability</li>
                <li>SEO-friendly development practices built into every project</li>
                <li>Transparent communication and agile project management</li>
                <li>Ongoing support and maintenance options available</li>
                <li>Understanding of the local Lagos market and business needs</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Types of Websites We Build</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Business Websites</h3>
                  <p className="text-sm">Professional sites that showcase your brand and services</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">E-commerce Stores</h3>
                  <p className="text-sm">Online shops with secure payment gateways and inventory management</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Web Applications</h3>
                  <p className="text-sm">Custom solutions for specific business processes and workflows</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Landing Pages</h3>
                  <p className="text-sm">High-converting pages for marketing campaigns and lead generation</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get a Free Website Consultation
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}