import { Metadata } from 'next';
import PricingPageClient from '@/components/pages/PricingPageClient';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'SEO Pricing Plans | NerdPace Lagos Nigeria',
  },
  description: 'Transparent SEO pricing for businesses in Nigeria and beyond. Choose from our Starter Audit, Growth SEO, or Premium Retainer plans. All plans include measurable results and are based in Lagos.',
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
    description: 'Transparent SEO pricing for businesses in Nigeria and beyond. Choose from our Starter Audit, Growth SEO, or Premium Retainer plans. All plans include measurable results and are based in Lagos.',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}