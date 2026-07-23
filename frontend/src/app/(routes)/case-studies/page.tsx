import { Metadata } from 'next';
import CaseStudiesPageClient from './client';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'Case Studies | NerdPace',
  },
  description: 'See how we\'ve helped businesses like yours achieve explosive growth through our SEO and website development services.',
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
