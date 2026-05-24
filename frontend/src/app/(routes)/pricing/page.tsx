import { Metadata } from 'next';
import PricingPageClient from '@/components/pages/PricingPageClient';

export const metadata: Metadata = {
  title: 'SEO Pricing | NerdPace - Transparent, Scalable Plans',
  description: 'Choose the right SEO plan for your business. From $497 audits to $3,500/month premium retainers. All plans include measurable results.',
  keywords: 'SEO pricing, SEO costs, SEO packages, affordable SEO',
  openGraph: {
    title: 'SEO Pricing | NerdPace',
    description: 'Transparent SEO pricing for all business sizes',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
