import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import { ClerkProvider } from '@clerk/nextjs';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nerdpace.com'),
  title: {
    template: '%s | NerdPace',
    default: 'NerdPace | Technical SEO & Website Development Agency in Lagos, Nigeria',
  },
  description: 'NerdPace is a Lagos-based technical SEO and website development agency. We help Nigerian startups and global businesses rank higher, load faster, and get discovered online. Book a free SEO audit.',
  keywords: [
    'technical SEO agency Lagos',
    'SEO in Lagos',
    'Types of SEO',
    'website development agency Nigeria',
    'SEO company in Lagos',
    'technical SEO consultant Nigeria',
    'website speed optimization',
    'NerdPace SEO agency',
  ],
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
  icons: [
    {
      url: '/nerdpace_logo.png',
    },
  ],
  category: 'technology',
  other: {
    'geo.region': 'NG-LA',
    'geo.placename': 'Lagos, Nigeria',
    'geo.position': '6.5244;3.3792',
    ICBM: '6.5244, 3.3792',
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
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string | undefined;
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API as string;
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  const whatsappHref = whatsappPhone
    ? `https://wa.me/${whatsappPhone.replace(/[^+\d]/g, '')}`
    : null;

  // If Clerk publishable key is missing, show an error message instead of crashing
  if (!clerkPublishableKey) {
    return (
      <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, "font-sans")}>
        <body className={`${GeistSans.className} min-h-screen flex flex-col bg-slate-950 text-slate-100`}>
          <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
            <p className="text-center">
              Clerk Publishable Key is missing. Please set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY in your environment variables.
            </p>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, "font-sans")}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col bg-slate-950 text-slate-100`}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':Not yet. Four things to fix before you push. Some are blocking, some will hurt you silently after launch. Let me go through them in order of severity.

🔴 Issue 1 — GTM strategy is wrong (Core Web Vitals killer)
tsx
// ❌ What you have
<Script id="google-tag-manager" strategy="beforeInteractive">

beforeInteractive runs before page hydration and blocks rendering. That directly tanks your LCP score — the most important Core Web Vitals metric, and a confirmed Google ranking factor.

tsx
// ✅ Change to this
<Script id="google-tag-manager" strategy="afterInteractive">

GTM is designed to be async. afterInteractive is the correct Next.js strategy for it. One word change, significant impact.

🔴 Issue 2 — JSON-LD schema is completely missing

Your entire Organization, LocalBusiness, FAQ, Person, and Review schema — none of it is in the layout. That's the structured data that tells Google who NerdPace is, where you are, and what you do. Without it, the Rich Results Test will return nothing.

Add this directly inside your <head> — in Next.js App Router, the cleanest way is a <Script> tag with type="application/ld+json". Add it right after your GTM script:

tsx
<Script
  id="schema-org"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NerdPace",
        "url": "https://nerdpace.com",
        "logo": "https://nerdpace.com/nerdpace_logo.png",
        "description": "Lagos-based technical SEO and website development agency helping Nigerian startups and global businesses rank higher and grow organically.",
        "foundingDate": "2025",
        "email": "hello@nerdpace.com",
        "telephone": "+2348102544186",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "NG"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2348102544186",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://www.linkedin.com/company/nerdpace/",
          "https://twitter.com/nerdpace",
          "https://github.com/Obed-Ojingwa"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "NerdPace",
        "image": "https://nerdpace.com/og-image.png",
        "url": "https://nerdpace.com",
        "telephone": "+2348102544186",
        "email": "hello@nerdpace.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressRegion": "Lagos State",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.5244,
          "longitude": 3.3792
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "areaServed": [
          { "@type": "City", "name": "Lagos" },
          { "@type": "Country", "name": "Nigeria" },
          { "@type": "Place", "name": "Worldwide" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Obed Ojingwa",
        "jobTitle": "Founder & SEO Strategist",
        "worksFor": {
          "@type": "Organization",
          "name": "NerdPace"
        },
        "url": "https://linkedin.com/in/obed-ojingwa-94a73422a/",
        "sameAs": [
          "https://linkedin.com/in/obed-ojingwa-94a73422a/",
          "https://github.com/Obed-Ojingwa"
        ]
      }
    ])
  }}
/>
🟡 Issue 3 — Geo meta tags are missing

You're targeting Lagos but your metadata object has no geo tags. Google and Bing both read these for local ranking. Add an other field to your existing metadata export:

tsx
export const metadata: Metadata = {
  // ...everything you already have, then add:
  other: {
    'geo.region': 'NG-LA',
    'geo.placename': 'Lagos, Nigeria',
    'geo.position': '6.5244;3.3792',
    'ICBM': '6.5244, 3.3792',
  },
};
🟡 Issue 4 — Three fonts loading simultaneously
tsx
// You are loading all three of these:
import { GeistSans } from 'geist/font/sans';   // font 1
import { GeistMono } from 'geist/font/mono';   // font 2
import { Inter } from "next/font/google";       // font 3 — fetched from Google Fonts

Inter is being loaded from Google Fonts on every page load but GeistSans is already your primary font. Inter is redundant. Remove it:

tsx
// Delete this line entirely:
import { Inter } from "next/font/google";

// Delete this:
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

// And remove inter.variable from your className:
// Before:
className={cn(GeistSans.variable, GeistMono.variable, "font-sans", inter.variable)}
// After:
className={cn(GeistSans.variable, GeistMono.variable, "font-sans")}

This removes an external font fetch on every page load and improves LCP.
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K8R5BZ9Q');
          `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'NerdPace',
                url: 'https://nerdpace.com',
                logo: 'https://nerdpace.com/nerdpace_logo.png',
                description:
                  'Lagos-based technical SEO and website development agency helping Nigerian startups and global businesses rank higher and grow organically.',
                foundingDate: '2025',
                email: 'hello@nerdpace.com',
                telephone: '+2348102544186',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lagos',
                  addressCountry: 'NG',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+2348102544186',
                  contactType: 'customer service',
                  availableLanguage: 'English',
                },
                sameAs: [
                  'https://www.linkedin.com/company/nerdpace/',
                  'https://twitter.com/nerdpace',
                  'https://github.com/Obed-Ojingwa',
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'NerdPace',
                image: 'https://nerdpace.com/og-image.png',
                url: 'https://nerdpace.com',
                telephone: '+2348102544186',
                email: 'hello@nerdpace.com',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Lagos',
                  addressRegion: 'Lagos State',
                  addressCountry: 'NG',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 6.5244,
                  longitude: 3.3792,
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                priceRange: '$$',
                areaServed: [
                  { '@type': 'City', name: 'Lagos' },
                  { '@type': 'Country', name: 'Nigeria' },
                  { '@type': 'Place', name: 'Worldwide' },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Obed Ojingwa',
                jobTitle: 'Founder & SEO Strategist',
                worksFor: {
                  '@type': 'Organization',
                  name: 'NerdPace',
                },
                url: 'https://linkedin.com/in/obed-ojingwa-94a73422a/',
                sameAs: [
                  'https://linkedin.com/in/obed-ojingwa-94a73422a/',
                  'https://github.com/Obed-Ojingwa',
                ],
              },
            ]),
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K8R5BZ9Q"
            height={0}
            width={0}
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
        </ClerkProvider>
      </body>
    </html>
  );
}