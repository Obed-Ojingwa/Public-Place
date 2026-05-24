import { Metadata } from 'next';
import AboutPageClient from '@/components/pages/AboutPageClient';

export const metadata: Metadata = {
  title: 'About NerdPace | Premium SEO Agency',
  description: 'Learn about NerdPace, our mission, team, and why we\'re different.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
