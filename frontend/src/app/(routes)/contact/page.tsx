export const metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'Contact NerdPace | SEO Agency Lagos Nigeria',
  },
  description: 'Get in touch with NerdPace for SEO services, website development, and digital marketing. Phone, email, and WhatsApp available. Based in Lagos, Nigeria.',
  // Note: We're not adding keywords directly in Metadata as Next.js doesn't support it directly
  // We'll add it via a custom Head component in the client component if needed
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  alternates: {
    canonical: 'https://nerdpace.com/contact',
  },
};

import ClientContact from '@/app/(routes)/contact/client';

export default function ContactPage() {
  return <ClientContact />;
}