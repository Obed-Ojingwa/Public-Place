export const metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'Haliberry Cake Case Study | Website Build + SEO — NerdPace',
  },
  description: "How NerdPace built and technically optimized Haliberry Cake's website for London bakery searches. Full development + SEO implementation from a Lagos-based agency.",
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/case-studies/haliberry-cake',
  },
};

import ClientCaseStudy from './client';

export default function HaliberryCakeCaseStudyPage() {
  return <ClientCaseStudy />;
}