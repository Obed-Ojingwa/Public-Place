export const metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'Free SEO Audit Nigeria | Free Website Analysis — NerdPace',
  },
  description: 'Get a free, comprehensive SEO audit covering technical health, on-page SEO, backlinks, and Core Web Vitals. PDF report + 30-min strategy call included. Based in Lagos.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/audit',
  },
};

import AuditClient from '@/app/(routes)/audit/client';

export default function AuditPage() {
  return <AuditClient />;
}