import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: 'NerdPace - Technical SEO Services',
    template: '%s | NerdPace',
  },
  description: 'Premium technical SEO services for startups and ambitious businesses. Improve your Core Web Vitals, rankings, and organic traffic.',
  keywords: ['SEO services', 'technical SEO', 'local SEO', 'SEO audits', 'SEO agency', 'growth marketing'],
  authors: [{ name: 'NerdPace' }],
  creator: 'NerdPace',
  publisher: 'NerdPace',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'NerdPace',
    title: 'NerdPace - Technical SEO Services',
    description: 'Premium technical SEO services for startups and ambitious businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NerdPace - Technical SEO Services',
    description: 'Premium technical SEO services for startups and ambitious businesses.',
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
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable, "font-sans", inter.variable)}>
      <body className={`${GeistSans.className} min-h-screen flex flex-col bg-slate-950 text-slate-100`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

// import type { Metadata } from 'next';
// // import { Inter, Geist } from 'next/font/google';
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
// import '@/styles/globals.css';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import { cn } from "@/lib/utils";

// const geist = GeistSans({subsets:['latin'],variable:'--font-sans'});

// const inter = GeistMono({ subsets: ['latin'], variable: '--font-inter' });

// export const metadata: Metadata = {
//   title: {
//     default: 'NerdPace - Technical SEO Services',
//     template: '%s | NerdPace',
//   },
//   description: 'Premium technical SEO services for startups and ambitious businesses. Improve your Core Web Vitals, rankings, and organic traffic.',
//   keywords: ['SEO services', 'technical SEO', 'local SEO', 'SEO audits', 'SEO agency', 'growth marketing'],
//   authors: [{ name: 'NerdPace' }],
//   creator: 'NerdPace',
//   publisher: 'NerdPace',
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   openGraph: {
//     type: 'website',
//     siteName: 'NerdPace',
//     title: 'NerdPace - Technical SEO Services',
//     description: 'Premium technical SEO services for startups and ambitious businesses.',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'NerdPace - Technical SEO Services',
//     description: 'Premium technical SEO services for startups and ambitious businesses.',
//   },
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 5,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
//       <body className="min-h-screen flex flex-col">
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
