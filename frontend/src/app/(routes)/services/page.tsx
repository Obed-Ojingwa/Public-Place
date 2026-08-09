// FILE 1 OF 2
// Path: src/app/(routes)/services/page.tsx
// This is a SERVER component — it exports metadata and renders the client component.
// Replace your current page.tsx entirely with this file.

import { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';


export const metadata: Metadata = {
  title: 'SEO Services in Lagos Nigeria | Technical SEO, Local SEO & Audits — NerdPace',
  description:
    'NerdPace offers technical SEO, local SEO, content SEO, performance optimisation, and SEO audits for businesses in Lagos, Nigeria and worldwide. Book a free audit today.',
  keywords: [
    'SEO services Lagos',
    'technical SEO Nigeria',
    'local SEO Lagos',
    'SEO audit Nigeria',
    'website performance optimisation Lagos',
    'content SEO services',
    'SEO consultant Lagos',
  ],
  alternates: {
    canonical: 'https://nerdpace.com/services',
  },
  openGraph: {
    title: 'SEO Services — NerdPace Lagos, Nigeria',
    description:
      'Technical SEO, local SEO, and performance optimisation for Nigerian businesses and global brands. Book a free audit.',
    url: 'https://nerdpace.com/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}