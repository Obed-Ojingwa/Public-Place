import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'NerdPace | Technical SEO & Website Development Agency in Lagos, Nigeria',
  },
  description: 'NerdPace is a Lagos-based technical SEO and website development agency. We help Nigerian startups and global businesses rank higher, load faster, and get discovered online. Book a free SEO audit.',
  // Note: Next.js Metadata doesn't have a direct keywords field, we'll add it via a custom <Head> if needed
  // For now, we'll rely on the description and title
  authors: [{ name: 'NerdPace', url: 'https://nerdpace.com' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  robots: {
    index: true,
    follow: true,
    // Note: For advanced robots tags like max-snippet, max-image-preview, etc.
    // we would need to add them via a custom <Head> component in the page
    // Since we're using the Metadata object, we'll add the basics and supplement via Head in the page if needed
  },
  alternates: {
    canonical: 'https://nerdpace.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://nerdpace.com/',
    title: 'NerdPace | Technical SEO & Website Development — Lagos, Nigeria',
    description: 'Lagos-based technical SEO and website development. We build sites that rank and load fast. Book your free SEO audit today.',
    siteName: 'NerdPace',
    images: [
      {
        url: 'https://nerdpace.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NerdPace - Technical SEO Agency',
      },
    ],
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nerdpace',
    title: 'NerdPace | Technical SEO Agency — Lagos, Nigeria',
    description: 'Technical SEO, website development, and AI search optimization from Lagos. Book a free audit.',
    images: [
      {
        url: 'https://nerdpace.com/twitter-image.png',
      },
    ],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}