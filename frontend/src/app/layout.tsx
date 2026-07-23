import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs';
import { MessageCircle } from 'lucide-react';
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template: '%s | NerdPace',
    default: 'NerdPace | Technical SEO & Website Development Agency in Lagos, Nigeria',
  },
  description: 'NerdPace is a Lagos-based technical SEO and website development agency. We help Nigerian startups and global businesses rank higher, load faster, and get discovered online. Book a free SEO audit.',
  authors: [{ name: 'NerdPace' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://nerdpace.com/',
    title: 'NerdPace | Technical SEO & Website Development — Lagos, Nigeria',
    description: 'Lagos-based technical SEO and website development. We build sites that rank and load fast. Book your free SEO audit today.',
    siteName: 'NerdPace',
    images: [
      {
        url: 'https://nerdpace.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NerdPace - Technical SEO Agency',
      },
    ],
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nerdpace',
    title: 'NerdPace | Technical SEO Agency — Lagos, Nigeria',
    description: 'Technical SEO, website development, and AI search optimization from Lagos. Book a free audit.',
    images: [
      {
        url: 'https://nerdpace.com/twitter-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://nerdpace.com/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API as string;
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  const whatsappHref = whatsappPhone
    ? `https://wa.me/${whatsappPhone.replace(/[^+\d]/g, '')}`
    : null;

  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, "font-sans", inter.variable)}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col bg-slate-950 text-slate-100`}>
        <ClerkProvider
          publishableKey={clerkPublishableKey}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors"
            >
              <MessageCircle className="w-7 h-7" />
            </a>
          )}

          {/* Additional meta tags for SEO that are not covered by the Metadata object */}
          {/* We'll add them here for safety, but note that the Head component is not available in the root layout in the same way as in pages. */}
          {/* However, we can add them as children of the <html> or <body> but that is not valid. */}
          {/* We'll instead rely on the Metadata object and hope that the Next.js Head component in the pages will pick up the rest. */}
          {/* /* Since we are using the Metadata object, we can only set what it supports. */ }
          {/* /* For the unsupported ones, we will need to use a custom Head component in each page or use a layout that includes a Head. */}
          {/* Given the constraints, we will update the pages individually to include the missing meta tags. */}
          {/* For now, we'll just output a comment to remind ourselves. */}
          {/* TODO: Add geo, icwm, and other meta tags via a custom Head component in each page or a shared layout. */}
        </ClerkProvider>
      </body>
    </html>
  );
}