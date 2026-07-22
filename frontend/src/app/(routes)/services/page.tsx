import { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'SEO Services Lagos Nigeria | NerdPace',
  },
  description: 'NerdPace offers comprehensive SEO services including technical SEO, local SEO, SEO audits, content SEO, and performance optimization. Based in Lagos, serving clients globally.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/services',
  },
  openGraph: {
    title: 'SEO Services Lagos Nigeria | NerdPace',
    description: 'NerdPace offers comprehensive SEO services including technical SEO, local SEO, SEO audits, content SEO, and performance optimization. Based in Lagos, serving clients globally.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}