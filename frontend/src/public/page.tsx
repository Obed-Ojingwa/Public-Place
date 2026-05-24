import { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'NerdPace: Technical SEO Services for Growth-Driven Businesses',
  description: 'Rank higher, load faster, get discovered. Premium technical SEO services for startups and ambitious businesses. Free SEO audit included.',
  keywords: 'SEO services, technical SEO, local SEO, SEO audits, SEO agency, growth marketing',
  authors: [{ name: 'NerdPace', url: 'https://nerdpace.com' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  robots: 'index, follow',
  alternates: { canonical: 'https://nerdpace.com' },
  openGraph: {
    type: 'website',
    url: 'https://nerdpace.com',
    title: 'NerdPace: Technical SEO Services for Growth-Driven Businesses',
    description: 'Rank higher, load faster, get discovered. Premium technical SEO services for startups and ambitious businesses.',
    siteName: 'NerdPace',
    images: [{ url: 'https://nerdpace.com/og-image.png', width: 1200, height: 630, alt: 'NerdPace - Technical SEO Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NerdPace: Technical SEO Services',
    description: 'Get your business discovered online with premium SEO optimization',
    images: ['https://nerdpace.com/twitter-image.png'],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
