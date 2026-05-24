import { Metadata } from 'next';
import Link from 'next/link';

const services = [
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    subtitle: 'Optimize your website’s technical foundation for search performance.',
    description:
      'Technical SEO ensures search engines can crawl, index, and rank your website reliably. We focus on speed, mobile friendliness, architecture, schema, and crawl efficiency so your site performs at its best.',
    details: [
      'Comprehensive site health audit',
      'Core Web Vitals and page speed improvement',
      'Mobile and responsive optimization',
      'Structured data and schema markup',
      'XML sitemap, robots.txt and crawl budget tuning',
      'Canonicalization and indexation strategy',
    ],
    outcomes:
      'The result is fewer technical bottlenecks, stronger crawlability, and faster ranking improvements for priority keywords.',
    heroColor: 'from-slate-900 to-slate-700',
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    subtitle: 'Get found by nearby customers when they search for your services.',
    description:
      'Local SEO makes your business visible across Google Maps, local search results, and neighborhood-based queries. We optimize your presence for location intent, reviews, citations, and local content.',
    details: [
      'Google Business Profile optimization',
      'Local citation and directory cleanup',
      'Location landing page strategy',
      'Review acquisition and response plan',
      'Local schema and NAP consistency',
      'Multi-location visibility support',
    ],
    outcomes:
      'This service helps you rank in the map pack and local search results, driving foot traffic and nearby lead volume.',
    heroColor: 'from-slate-900 to-slate-700',
  },
  {
    id: 'content-seo',
    title: 'Content SEO',
    subtitle: 'Create content that ranks, engages, and converts your ideal audience.',
    description:
      'Content SEO blends keyword strategy, editorial quality, and searcher intent to build pages that attract traffic and turn visitors into customers. We develop content systems that scale consistently.',
    details: [
      'Keyword research and topical mapping',
      'Conversion-focused page copy',
      'On-page optimization and internal linking',
      'SEO-friendly content briefs and workflows',
      'Topic cluster and pillar page strategy',
      'Editorial performance reviews',
    ],
    outcomes:
      'You get content that drives qualified organic traffic, improves search visibility, and supports your growth funnel.',
    heroColor: 'from-slate-900 to-slate-700',
  },
  {
    id: 'performance-optimization',
    aliases: ['performance'],
    title: 'Performance Optimization',
    subtitle: 'Speed up your site and delight users with faster experiences.',
    description:
      'Performance Optimization removes friction from your website by improving loading speed, Core Web Vitals, and overall user experience. Faster sites rank better and convert more visitors.',
    details: [
      'Page speed and Web Vitals audit',
      'Image optimization and asset compression',
      'Critical CSS and lazy-loading strategy',
      'Caching, CDN and server response tuning',
      'JavaScript bundle optimization',
      'Performance monitoring and reporting',
    ],
    outcomes:
      'Expect higher engagement, lower bounce rates, and stronger SEO rankings thanks to a faster, more efficient website.',
    heroColor: 'from-slate-900 to-slate-700',
  },
  {
    id: 'seo-audits',
    title: 'SEO Audits',
    subtitle: 'Discover the exact fixes that move rankings, traffic, and revenue.',
    description:
      'Our SEO audit identifies technical, content, and backlink gaps with a prioritized roadmap. You receive clear recommendations that make it easy to act and see measurable improvement.',
    details: [
      'Technical site audit',
      'On-page SEO analysis',
      'Content and keyword gap review',
      'Backlink profile evaluation',
      'UX and conversion friction checks',
      'Priority action plan with timelines',
    ],
    outcomes:
      'This audit is ideal for teams who need a reliable playbook and fast wins without guesswork.',
    heroColor: 'from-slate-900 to-slate-700',
  },
  {
    id: 'consulting',
    title: 'SEO Consulting',
    subtitle: 'Strategic guidance and training for growing SEO teams.',
    description:
      'SEO Consulting helps your team build long-term capability with expert strategy, systems, and measurement frameworks. We work alongside leaders to turn SEO into a growth engine.',
    details: [
      'SEO strategy development',
      'Team coaching and workshops',
      'Implementation playbooks',
      'Performance measurement frameworks',
      'Technology and tooling recommendations',
      'Quarterly planning and reviews',
    ],
    outcomes:
      'You’ll gain scalable SEO processes, stronger execution, and a plan that aligns with business goals.',
    heroColor: 'from-slate-900 to-slate-700',
  },
];

interface ServicePageProps {
  params: { slug: string };
}

function findService(slug: string) {
  return services.find((service) => {
    if (service.id === slug) {
      return true;
    }
    return Array.isArray(service.aliases) && service.aliases.includes(slug);
  });
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = findService(params.slug);

  if (!service) {
    return {
      title: 'Service not found | NerdPace',
      description: 'This service does not exist.',
    };
  }

  return {
    title: `${service.title} | NerdPace`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} | NerdPace`,
      description: service.subtitle,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = findService(params.slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <p className="text-slate-300 mb-6">The service you requested doesn’t exist yet. Please return to our services overview.</p>
          <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-slate-950 text-slate-100">
      <section className={`relative min-h-[60vh] flex items-center ${service.heroColor} bg-gradient-to-br px-4 py-20`}> 
        <div className="container mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 mb-6">
              {service.title}
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">{service.title}</h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">{service.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 font-semibold rounded-xl hover:bg-slate-100 transition">
                Book a Strategy Call
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
              <h2 className="text-3xl font-semibold text-white mb-4">What this service includes</h2>
              <p className="text-slate-300 leading-relaxed mb-8">{service.description}</p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.details.map((detail) => (
                  <li key={detail} className="rounded-2xl bg-slate-900 p-5 border border-white/10">
                    <p className="text-slate-200 font-medium">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-slate-950/20">
              <h2 className="text-3xl font-semibold text-white mb-4">What you can expect</h2>
              <p className="text-slate-300 leading-relaxed">{service.outcomes}</p>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-blue-950/70 p-8 shadow-xl shadow-blue-950/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Ready to grow?</h3>
              <p className="text-slate-300 mb-6">Let’s design the exact SEO plan that fits your business and converts visitors into customers.</p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-100 transition">
                Contact NerdPace
              </Link>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Trusted by growth teams</h3>
              <p className="text-slate-400">Our clients choose NerdPace for fast, measurable SEO work that supports both traffic and conversions.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
