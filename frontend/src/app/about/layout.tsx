import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NerdPace - Technical SEO Agency | Our Story & Team',
  description: 'Learn about NerdPace, our mission to help businesses grow through technical SEO, and meet our team of experts dedicated to improving your online visibility.',
  keywords: 'SEO agency, technical SEO company, SEO experts, SEO team, SEO consultants',
  openGraph: {
    title: 'About NerdPace - Technical SEO Agency',
    description: 'Learn about NerdPace, our mission to help businesses grow through technical SEO, and meet our team of experts dedicated to improving your online visibility.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
