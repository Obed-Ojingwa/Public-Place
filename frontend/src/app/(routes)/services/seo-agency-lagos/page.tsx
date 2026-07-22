import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'SEO Agency in Lagos Nigeria | NerdPace',
  },
  description: 'NerdPace is a leading SEO agency in Lagos, Nigeria. We provide expert SEO services to help businesses rank higher, get more traffic, and grow online. Based in Lagos, serving clients globally.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/services/seo-agency-lagos',
  },
};

export default function SeocityAgencyLagosPage() {
  return (
    <main>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8">
              SEO Agency in Lagos Nigeria
            </h1>
            <p className="text-xl text-slate-300 text-center mb-16 max-w-2xl mx-auto">
              NerdPace is a Lagos-based technical SEO and website development agency helping Nigerian startups and global businesses rank higher and grow organically.
            </p>

            {/* We'll add some content here - for now, a simple placeholder */}
            <div className="bg-slate-900 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Our SEO Services in Lagos</h2>
              <p className="mb-4">
                As a leading SEO agency in Lagos, we specialize in helping businesses improve their online visibility, attract more customers, and increase revenue through data-driven SEO strategies.
              </p>
              <p className="mb-4">
                Our services include technical SEO, local SEO, SEO audits, content SEO, and performance optimization - all tailored to the unique needs of businesses in Nigeria and beyond.
              </p>

              <h2 className="text-2xl font-bold mb-4">Why Choose a Lagos-Based SEO Agency?</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Deep understanding of the Nigerian market and search behavior</li>
                <li>Ability to provide localized strategies that resonate with your target audience</li>
                <li>Convenient timezone alignment for real-time communication and collaboration</li>
                <li>Cost-effective solutions without compromising on quality</li>
                <li>Commitment to supporting the growth of Nigerian businesses</li>
              </ul>

              <div className="mt-8 text-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get Started with Our SEO Services
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}