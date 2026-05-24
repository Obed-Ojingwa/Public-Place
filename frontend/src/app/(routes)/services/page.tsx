import { Metadata } from 'next';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export const metadata: Metadata = {
  title: 'SEO Services | NerdPace - Technical SEO, Local SEO & Audits',
  description: 'Our comprehensive SEO services including technical optimization, local SEO, content strategy, and performance optimization for businesses of all sizes.',
  keywords: 'SEO services, technical SEO services, local SEO, content optimization, website performance',
  openGraph: {
    title: 'SEO Services | NerdPace',
    description: 'Comprehensive SEO services tailored to your business goals',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
