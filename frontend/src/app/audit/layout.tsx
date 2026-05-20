import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free SEO Audit | NerdPace - Get Your Website Analysis',
  description: 'Get a free comprehensive SEO audit from NerdPace. Discover technical issues, Core Web Vitals problems, and ranking opportunities with our detailed analysis.',
  keywords: 'SEO audit, free SEO audit, website audit, technical SEO audit, SEO analysis',
  openGraph: {
    title: 'Free SEO Audit | NerdPace',
    description: 'Get a free comprehensive SEO audit from NerdPace. Discover technical issues, Core Web Vitals problems, and ranking opportunities with our detailed analysis.',
    type: 'website',
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
