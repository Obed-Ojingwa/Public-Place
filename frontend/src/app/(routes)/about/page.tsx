import { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'About NerdPace | Technical SEO Agency Founded in Lagos, Nigeria',
  },
  description: 'NerdPace is a Lagos-based technical SEO and website development agency founded by Obed Ojingwa, a full-stack engineer. We build what ranks. We fix what\'s broken.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}