import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NerdPace Blog - SEO Insights, Tips & Industry News',
  description: 'Read the NerdPace blog for expert SEO insights, technical guides, industry news, and actionable tips to improve your website\'s search visibility and performance.',
  keywords: 'SEO blog, SEO tips, technical SEO, SEO guide, SEO news, search engine optimization',
  openGraph: {
    title: 'NerdPace Blog - SEO Insights & Tips',
    description: 'Read the NerdPace blog for expert SEO insights, technical guides, industry news, and actionable tips to improve your website\'s search visibility and performance.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
