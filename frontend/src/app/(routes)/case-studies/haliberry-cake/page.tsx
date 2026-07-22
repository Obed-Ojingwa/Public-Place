import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'Haliberry Cake Case Study | Website Build + SEO — NerdPace',
  },
  description: 'How NerdPace built and technically optimized Haliberry Cake\\'s website for London bakery searches. Full development + SEO implementation from a Lagos-based agency.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/case-studies/haliberry-cake',
  },
};

export default function HaliberryCakeCaseStudyPage() {
  return (
    <main>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center space-x-2 text-sm text-slate-400">
          <a href="/" className="hover:text-slate-200 transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/case-studies" className="hover:text-slate-200 transition-colors">
            Case Studies
          </a>
          <span className="mx-2">/</span>
          <span>Haliberry Cake</span>
        </nav>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">
                Haliberry Cake Case Study
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Website Build + SEO — NerdPace
              </p>
            </header>

            <div className="bg-slate-900 rounded-xl p-8 space-y-8">
              {/* Client Info */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Client: Haliberry Cake</h2>
                  <p className="text-slate-300">
                    Luxury Bespoke Cakes, Wedding Cakes & Baking Classes — London, United Kingdom<br />
                    <a href="https://www.haliberry.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">haliberry.co.uk</a>
                  </p>
                </div>
              </div>

              {/* The Challenge */}
              <div>
                <h3 className="text-xl font-bold mb-4">The Challenge:</h3>
                <p className="text-slate-300">
                  Haliberry Cake had no professional website. Customers had no way to browse their products, customise orders, or pay online. The business needed a digital presence that matched the quality of what they bake.
                </p>
              </div>

              {/* What NerdPace Did */}
              <div>
                <h3 className="text-xl font-bold mb-4">What NerdPace Did:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Designed and developed the website from scratch</li>
                  <li>Built a fast, responsive, mobile-first site</li>
                  <li>Implemented online ordering with cake customisation</li>
                  <li>Integrated secure online payment processing</li>
                  <li>
                    Implemented technical SEO from the ground up (meta tags, schema,
                    Core Web Vitals, heading structure, local SEO for London)
                  </li>
                  <li>Optimised for performance across desktop and mobile</li>
                </ul>
              </div>

              {/* The Outcome */}
              <div>
                <h3 className="text-xl font-bold mb-4">The Outcome:</h3>
                <p className="text-slate-300">
                  A professional online presence that reflects the Haliberry brand.
                  Customers can browse, customise, and order with confidence. The
                  ordering process is streamlined. The business is now positioned
                  for digital growth.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <a
                  href="https://www.haliberry.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Visit haliberry.co.uk →
                </a>
              </div>
            </div>

            {/* Back to Case Studies */}
            <div className="mt-12 text-center">
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                ← Back to All Case Studies
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
}