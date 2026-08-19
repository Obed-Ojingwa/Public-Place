import { Metadata } from 'next';
import PricingPageClient from '@/components/pages/PricingCataloguePageClient';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'SEO Pricing Plans | NerdPace Lagos Nigeria',
  },
  description: 'Transparent SEO pricing for businesses in Nigeria and beyond. Explore Foundation, Growth, and Authority packages across SEO audits, monthly SEO, local SEO, technical SEO, content SEO, performance SEO, and consulting.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/pricing',
  },
  openGraph: {
    title: 'SEO Pricing Plans | NerdPace Lagos Nigeria',
    description: 'Transparent SEO pricing for technical SEO, local SEO, content SEO, performance SEO, audits, and consulting from NerdPace in Lagos, Nigeria.',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}