# NerdPace — Master SEO Implementation Prompt
## For use with: Claude Code, Cursor, GitHub Copilot Chat, ChatGPT-4o, or any AI coding agent

---

## ROLE

You are a senior full-stack SEO engineer and technical SEO specialist.
Your job is to audit and rebuild the NerdPace website (React/TypeScript/Vite frontend, FastAPI backend, deployed on Vercel) so that it:

1. Passes a full technical SEO audit with zero critical errors
2. Earns genuine trust signals that satisfy Google's Search Quality Evaluator Guidelines (E-E-A-T)
3. Is structured to rank for: "Technical SEO agency Lagos", "SEO agency Nigeria", "AI Search Optimization", "website development and SEO Lagos", "SEO audit services Nigeria"
4. Uses ONLY verified, real data — never placeholder, fabricated, or unverifiable claims
5. Loads in under 2 seconds on mobile (Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms)

---

## BUSINESS CONTEXT (DO NOT FABRICATE BEYOND THIS)

- **Business Name:** NerdPace
- **Type:** Technical SEO, Website Development & AI Search Optimization Agency
- **Founder:** Obed Ojingwa (Full-stack engineer, SEO specialist)
- **Founded:** 2025
- **Location:** Lagos, Nigeria
- **Operations:** Lagos-based. Serving Nigerian businesses and global clients remotely.
- **Phone/WhatsApp:** +234 810 254 4186
- **Email:** hello@nerdpace.com
- **Website:** https://nerdpace.com
- **LinkedIn:** https://www.linkedin.com/company/nerdpace/
- **GitHub:** https://github.com/Obed-Ojingwa
- **Twitter/X:** https://twitter.com/nerdpace

### Real Client Work (the ONLY case study to reference):
- **Client:** Haliberry Cake — Luxury Bespoke Cakes & Baking Classes, London, UK
- **Website Built:** https://www.haliberry.co.uk/
- **Work Done:** Full website design + development + technical SEO implementation
- **Referral origin:** Client was referred through Lagos network
- **Industry:** Food & Hospitality (London-based luxury bakery)

### Real Testimonial (use verbatim, replacing "Obed" with "NerdPace"):

> "Before working with NerdPace, Haliberry Cake didn't have a professional website that truly represented our business. Customers had no simple way to browse our cakes, customise their orders, or place orders online. We needed a modern website that would showcase our brand and make the ordering process seamless.
>
> NerdPace designed and developed our website from the ground up. They built a fast, modern, and responsive website tailored to our business, implemented online ordering with cake customisation options, integrated secure online payments, optimised the site for search engines, and ensured it worked smoothly across desktop and mobile devices. They also paid close attention to performance, usability, and the overall customer experience.
>
> We now have a professional online presence that reflects the quality of our brand. Customers can easily browse our products, customise their cakes, and place orders with confidence. The website has streamlined our ordering process, strengthened our credibility, and positioned Haliberry Cake for future growth. We are extremely pleased with the outcome and would confidently recommend NerdPace to anyone looking for a skilled and dependable web developer."
>
> — Founder, Haliberry Cake | London, United Kingdom

### What NerdPace MUST NOT claim (no exceptions):
- ❌ "50+ clients served" — Remove. Replace with honest framing or leave blank.
- ❌ "+287% average organic traffic uplift" — Remove. No verified data backs this.
- ❌ "4.2s → 1.1s page load reduction" — Remove. No verified data backs this.
- ❌ Google Partner badge — Remove. Not a verified credential.
- ❌ Clutch Top SEO badge — Remove. Not a verified credential.
- ❌ Inc. 5000 badge — Remove. Impossible for a new agency; fraudulent if displayed.
- ❌ G2 Leader badge — Remove. Not a verified credential.
- ❌ HubSpot Certified badge — Remove. Not held.
- ❌ SEMrush Partner badge — Remove. Not a verified credential.
- ❌ "+1 (555) SEO-FAST" phone number — Replace with +234 810 254 4186
- ❌ "San Francisco, CA" — Replace with "Lagos, Nigeria"
- ❌ All three fake testimonials (Sarah Chen, Michael Rodriguez, Emily Watson) — Remove entirely.
- ❌ TechFlow SaaS case study (+650% traffic) — Remove entirely.

---

## PART 1 — TECHNICAL SEO FIXES

### 1.1 Meta Tags — Homepage

```html
<!-- Primary Meta -->
<title>NerdPace | Technical SEO & Website Development Agency in Lagos, Nigeria</title>
<meta name="description" content="NerdPace is a Lagos-based technical SEO and website development agency. We help Nigerian startups and global businesses rank higher, load faster, and get discovered online. Book a free SEO audit." />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<link rel="canonical" href="https://nerdpace.com/" />

<!-- Geo Tags for Lagos -->
<meta name="geo.region" content="NG-LA" />
<meta name="geo.placename" content="Lagos, Nigeria" />
<meta name="geo.position" content="6.5244;3.3792" />
<meta name="ICBM" content="6.5244, 3.3792" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://nerdpace.com/" />
<meta property="og:title" content="NerdPace | Technical SEO & Website Development — Lagos, Nigeria" />
<meta property="og:description" content="Lagos-based technical SEO and website development. We build sites that rank and load fast. Book your free SEO audit today." />
<meta property="og:image" content="https://nerdpace.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="NerdPace" />
<meta property="og:locale" content="en_NG" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@nerdpace" />
<meta name="twitter:title" content="NerdPace | Technical SEO Agency — Lagos, Nigeria" />
<meta name="twitter:description" content="Technical SEO, website development, and AI search optimization from Lagos. Book a free audit." />
<meta name="twitter:image" content="https://nerdpace.com/twitter-image.png" />
```

---

### 1.2 Structured Data — JSON-LD

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NerdPace",
  "url": "https://nerdpace.com",
  "logo": "https://nerdpace.com/logo.png",
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
}
```

#### LocalBusiness Schema (critical for Lagos local ranking)
```json
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
  "description": "Technical SEO and website development agency based in Lagos, Nigeria.",
  "areaServed": [
    { "@type": "City", "name": "Lagos" },
    { "@type": "Country", "name": "Nigeria" },
    { "@type": "Place", "name": "Worldwide" }
  ]
}
```

#### ProfessionalService Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NerdPace",
  "url": "https://nerdpace.com",
  "description": "Technical SEO, website development, and AI Search Optimization from Lagos, Nigeria.",
  "serviceType": [
    "Technical SEO",
    "AI Search Optimization",
    "SEO Audit",
    "Local SEO",
    "Website Development",
    "Content Strategy",
    "Core Web Vitals Optimization",
    "Keyword Research"
  ],
  "areaServed": [
    { "@type": "City", "name": "Lagos" },
    { "@type": "Country", "name": "Nigeria" },
    { "@type": "Place", "name": "Worldwide" }
  ],
  "priceRange": "$$"
}
```

#### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to see SEO results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical SEO fixes like crawlability and Core Web Vitals can show results in 4–8 weeks. Significant ranking improvements for competitive keywords typically take 3–6 months. We set realistic timelines from day one — no false promises."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee ranking improvements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No ethical SEO agency can guarantee specific rankings — Google's algorithm is not something any agency controls. What we guarantee is rigorous technical execution, full transparency, and measurable improvement in crawlability, indexation, and organic visibility."
      }
    },
    {
      "@type": "Question",
      "name": "What is AI Search Optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Search Optimization prepares your content and site structure to be discovered and cited by AI-powered search experiences like Google AI Overviews, Perplexity, and ChatGPT search. It goes beyond traditional SEO to ensure your brand appears in the new generation of search results."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the free SEO audit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our free audit covers technical crawl health, Core Web Vitals scores, indexation issues, on-page SEO structure, backlink profile overview, and a prioritised list of fixes. You receive a detailed PDF report and a 30-minute strategy call."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with businesses outside Nigeria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. NerdPace is based in Lagos but works with clients globally. Our first client, Haliberry Cake, is a luxury bakery based in London, UK."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Starter Audit is designed for small businesses and solo founders who want a professional SEO assessment without a long-term commitment."
      }
    }
  ]
}
```

#### Review Schema (Haliberry Cake testimonial)
```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "NerdPace"
  },
  "reviewBody": "NerdPace designed and developed our website from the ground up. They built a fast, modern, and responsive website tailored to our business, implemented online ordering with cake customisation options, integrated secure online payments, optimised the site for search engines, and ensured it worked smoothly across desktop and mobile devices. We are extremely pleased with the outcome and would confidently recommend NerdPace to anyone looking for a skilled and dependable web developer.",
  "author": {
    "@type": "Person",
    "name": "Founder, Haliberry Cake"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  }
}
```

#### BreadcrumbList Schema (all inner pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nerdpace.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[PAGE NAME]",
      "item": "https://nerdpace.com/[page-slug]"
    }
  ]
}
```

---

### 1.3 robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://nerdpace.com/sitemap.xml

Disallow: /api/
Disallow: /_next/
Disallow: /admin/
```

---

### 1.4 XML Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://nerdpace.com/</loc><lastmod>2026-07-12</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://nerdpace.com/services</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://nerdpace.com/services/technical-seo</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://nerdpace.com/services/seo-audits</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://nerdpace.com/services/local-seo</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nerdpace.com/services/content-seo</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nerdpace.com/services/performance</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nerdpace.com/services/consulting</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nerdpace.com/case-studies</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nerdpace.com/case-studies/haliberry-cake</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://nerdpace.com/blog</loc><lastmod>2026-07-12</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://nerdpace.com/about</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://nerdpace.com/pricing</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://nerdpace.com/audit</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://nerdpace.com/contact</loc><lastmod>2026-07-12</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>
```

---

## PART 2 — CONTENT FIXES

### 2.1 Hero Section — Replace entirely

Remove all of the following:
- "+287% Average organic traffic uplift" (unverified)
- "4.2s → 1.1s Page load reduction" (unverified)  
- "50+ Growth-focused clients served" (false)
- All 6 trust badges (Google Partner, Clutch, Inc. 5000, G2, HubSpot, SEMrush) — all unverified

Replace with:

```
Headline:
Rank Higher, Load Faster, Get Discovered Online

Subheadline:
NerdPace is a Lagos-based technical SEO and website development agency.
We build fast, modern websites and optimise them to rank on Google —
for Nigerian businesses and ambitious brands worldwide.

CTA Primary:   [Book Your Free SEO Audit]
CTA Secondary: [See Our Work]

Trust bar (HONEST — no badges, just real signals):
✓ Based in Lagos, Nigeria
✓ Serving clients in Nigeria and internationally
✓ Built with developer-level technical depth
✓ WhatsApp us directly: +234 810 254 4186
```

---

### 2.2 Case Studies Section — Replace entirely

Remove: TechFlow SaaS, ShopLocal, GrowthCo (all fabricated)

Add the following Haliberry Cake case study block:

```
CLIENT: Haliberry Cake
Luxury Bespoke Cakes, Wedding Cakes & Baking Classes — London, United Kingdom
Website: haliberry.co.uk

The Challenge:
Haliberry Cake had no professional website. Customers had no way to browse
their products, customise orders, or pay online. The business needed a
digital presence that matched the quality of what they bake.

What NerdPace Did:
• Designed and developed the website from scratch
• Built a fast, responsive, mobile-first site
• Implemented online ordering with cake customisation
• Integrated secure online payment processing
• Implemented technical SEO from the ground up (meta tags, schema,
  Core Web Vitals, heading structure, local SEO for London)
• Optimised for performance across desktop and mobile

The Outcome:
A professional online presence that reflects the Haliberry brand.
Customers can browse, customise, and order with confidence.
The ordering process is streamlined. The business is now positioned
for digital growth.

[Visit haliberry.co.uk →]
```

---

### 2.3 Testimonials Section — Replace entirely

Remove: Sarah Chen, Michael Rodriguez, Emily Watson (all fabricated)

Add the real Haliberry testimonial:

```
"Before working with NerdPace, Haliberry Cake didn't have a professional
website that truly represented our business. Customers had no simple way
to browse our cakes, customise their orders, or place orders online.

NerdPace designed and developed our website from the ground up. They built
a fast, modern, and responsive website tailored to our business, implemented
online ordering with cake customisation options, integrated secure online
payments, optimised the site for search engines, and ensured it worked
smoothly across desktop and mobile devices.

We now have a professional online presence that reflects the quality of our
brand. The website has streamlined our ordering process, strengthened our
credibility, and positioned Haliberry Cake for future growth. We are
extremely pleased with the outcome and would confidently recommend NerdPace
to anyone looking for a skilled and dependable web developer."

— Founder, Haliberry Cake | London, United Kingdom
[haliberry.co.uk]
```

---

### 2.4 Footer — Update all contact information

```
Phone/WhatsApp: +234 810 254 4186
Email:          hello@nerdpace.com
Location:       Lagos, Nigeria
LinkedIn:       https://www.linkedin.com/company/nerdpace/
Twitter/X:      https://twitter.com/nerdpace
GitHub:         https://github.com/Obed-Ojingwa

WhatsApp link:  https://wa.me/2348102544186
Phone link:     tel:+2348102544186
```

Remove: "+1 (555) SEO-FAST" and "San Francisco, CA"

---

### 2.5 About Page — Build the real founder story

Content to include:
```
Headline: About NerdPace

NerdPace was founded in Lagos, Nigeria by Obed Ojingwa — a full-stack engineer
with deep expertise in Python, FastAPI, React, and TypeScript.

Most SEO agencies treat websites like black boxes. NerdPace treats them like
engineering systems — because that is what they are. When we audit a site,
we go where most agencies won't: into the code, the server config, the render
pipeline, and the crawl budget.

That engineering-first mindset is what makes our SEO work differently.
We don't just recommend fixes. We implement them.

Our first client was Haliberry Cake, a luxury London bakery referred to us
through our Lagos network. We built their website from the ground up and
optimised it for search. They called the result "wow." That's the standard
we hold every engagement to.

[Photo of Obed — add real professional photo]

Founder: Obed Ojingwa
Full-stack Engineer | SEO Strategist | Lagos, Nigeria

[Connect on LinkedIn →]
[See Our Work →]
```

Add Person schema:
```json
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
```

---

## PART 3 — PAGE-LEVEL META TAGS

### /services/technical-seo
```
Title:       Technical SEO Services in Lagos Nigeria | NerdPace
Description: NerdPace audits and rebuilds your site's technical foundation — 
             crawlability, indexation, Core Web Vitals, schema markup. 
             Lagos-based. Serving clients globally. Book a free audit.
H1:          Technical SEO Services for Startups and Growing Businesses
```

### /services/seo-audits
```
Title:       SEO Audit Services Nigeria | Full Site Health Analysis — NerdPace
Description: A comprehensive SEO audit covering technical health, on-page 
             structure, backlinks, and Core Web Vitals. PDF report + 30-min 
             strategy call included. Based in Lagos.
H1:          Professional SEO Audit Services
```

### /services/local-seo
```
Title:       Local SEO Services Lagos Nigeria | Rank in Your City — NerdPace
Description: Get your Lagos business found on Google. NerdPace handles Google 
             Business Profile, local citations, map pack rankings, and 
             location-optimised content.
H1:          Local SEO Services — Get Discovered in Lagos and Beyond
```

### /services/performance
```
Title:       Core Web Vitals & Website Performance Optimisation — NerdPace
Description: Fix LCP, CLS, and INP scores. NerdPace improves page speed, 
             image optimisation, and rendering performance to boost rankings 
             and conversions for Nigerian and global businesses.
H1:          Website Performance & Core Web Vitals Optimisation
```

### /services/consulting
```
Title:       SEO Consulting Nigeria | Strategy for Growing Teams — NerdPace
Description: Strategic SEO guidance for in-house teams and growing businesses 
             in Nigeria and beyond. Roadmaps, audits, and expert oversight — 
             not just reports.
H1:          SEO Consulting — Strategy for Serious Growth
```

### /case-studies/haliberry-cake
```
Title:       Haliberry Cake Case Study | Website Build + SEO — NerdPace
Description: How NerdPace built and technically optimised Haliberry Cake's 
             website for London bakery searches. Full development + SEO 
             implementation from a Lagos-based agency.
H1:          Haliberry Cake — Website Development & Technical SEO Case Study
```

### /about
```
Title:       About NerdPace | Technical SEO Agency Founded in Lagos, Nigeria
Description: NerdPace is a Lagos-based technical SEO and website development 
             agency founded by Obed Ojingwa, a full-stack engineer. 
             We build what ranks. We fix what's broken.
H1:          About NerdPace
```

### /blog
```
Title:       SEO & AI Search Optimization Blog | NerdPace Nigeria
Description: Technical SEO guides, AI search insights, and original research 
             from NerdPace. Written for founders, developers, and marketers 
             who want substance over noise.
H1:          The NerdPace Blog — SEO Insights from Lagos
```

---

## PART 4 — CORE WEB VITALS CHECKLIST

### 4.1 Images
- [ ] Convert all images to WebP
- [ ] Add explicit `width` and `height` on all `<img>` tags (prevents CLS)
- [ ] Add descriptive `alt` text to every image
- [ ] Use `loading="lazy"` on all below-fold images
- [ ] Use `fetchpriority="high"` on the hero/LCP image
- [ ] Serve via Vercel CDN (automatic on Vercel deployment)

### 4.2 Fonts
- [ ] Add `font-display: swap` to all @font-face rules
- [ ] Preload critical font files:
```html
<link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin />
```

### 4.3 JavaScript
- [ ] Implement route-based code splitting with React.lazy + Suspense
- [ ] Defer all non-critical third-party scripts
- [ ] Remove unused JS dependencies

### 4.4 Vercel Config — create/update `vercel.json`
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## PART 5 — LOCAL SEO STRATEGY (Lagos-specific)

This is a critical section. Lagos is an underserved market for premium technical SEO. 
These moves compound faster here than they would in London or New York.

### 5.1 Google Business Profile (do this manually — outside codebase)
- Create a Google Business Profile for NerdPace
- Category: "Internet marketing service" + "SEO agency"
- Business name: NerdPace
- Location: Lagos, Nigeria
- Phone: +234 810 254 4186
- Website: https://nerdpace.com
- Description: "Lagos-based technical SEO and website development agency. We help businesses rank higher on Google and build fast, modern websites."
- Add the Haliberry Cake case study images as photos
- Request a review from the Haliberry client (share GBP review link)

### 5.2 Lagos-Targeted Pages to Create

Create these landing pages (stub content is fine to start, expand over time):

**Page: /services/seo-agency-lagos**
```
Title: SEO Agency in Lagos Nigeria | NerdPace
H1:   Technical SEO Agency in Lagos, Nigeria
Target keywords: "SEO agency Lagos", "SEO company Nigeria", 
                 "digital marketing Lagos", "technical SEO Nigeria"
```

**Page: /services/website-development-lagos**
```
Title: Website Development Agency Lagos Nigeria | NerdPace
H1:   Website Development Agency in Lagos, Nigeria
Target keywords: "website development Lagos", "web developer Nigeria",
                 "website design Lagos", "web design company Nigeria"
```

### 5.3 NAP Consistency (Name, Address, Phone)
Every mention of NerdPace across the web must use IDENTICAL formatting:
```
Name:    NerdPace
City:    Lagos
Country: Nigeria
Phone:   +234 810 254 4186
Email:   hello@nerdpace.com
URL:     https://nerdpace.com
```
Register on: Google Business Profile, Bing Places, Apple Maps, LinkedIn Company Page

---

## PART 6 — AI SEARCH OPTIMIZATION (AIO) SIGNALS

### 6.1 Content Structure for AI Visibility
Every service page must answer these questions explicitly:
- What is [service]?
- Who needs [service]?
- How does NerdPace do [service]?
- What results can be expected?
- How much does [service] cost?
- Why choose a Lagos-based agency?

Use H1 → H2 → H3 hierarchy strictly. No skipping levels.
Use short, declarative sentences in opening paragraphs — LLMs prefer these for citation extraction.

### 6.2 E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trust)
Every page that gives SEO advice MUST include:
- Author name: Obed Ojingwa
- Author credentials: Full-stack engineer + SEO specialist, Lagos
- Date published and last reviewed
- Link to author's LinkedIn: https://linkedin.com/in/obed-ojingwa-94a73422a/
- Real evidence of work (Haliberry Cake link)

### 6.3 Speakable Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-description", ".service-summary", ".about-intro"]
  }
}
```

---

## PART 7 — INTERNAL LINKING MAP

| From Page | Link To | Anchor Text |
|-----------|---------|-------------|
| Homepage hero | /audit | "Book Free SEO Audit" |
| Homepage services grid | /services/technical-seo | "Technical SEO" |
| Technical SEO page | /services/seo-audits | "Start with an SEO Audit" |
| Any service page | /case-studies/haliberry-cake | "See Real Results" |
| Blog posts | Relevant service pages | Contextual service name |
| About page | /audit | "Work With NerdPace" |
| Pricing page | /contact | "Schedule a Call" |
| Case study page | /services/technical-seo | "Technical SEO services" |
| Any page | /services/seo-agency-lagos | "Lagos SEO agency" |

---

## PART 8 — GOOGLE SEARCH CONSOLE & ANALYTICS SETUP

After all code changes are deployed:

1. Submit sitemap to Google Search Console: `https://nerdpace.com/sitemap.xml`
2. Request indexing for these URLs first (in this order):
   - https://nerdpace.com/
   - https://nerdpace.com/services/technical-seo
   - https://nerdpace.com/audit
   - https://nerdpace.com/case-studies/haliberry-cake
   - https://nerdpace.com/about
3. Set up GA4 with these conversion goals:
   - Free Audit form completion
   - Contact form submission
   - WhatsApp click (track `https://wa.me/` link clicks as events)
   - Phone click (`tel:` link clicks)
   - Pricing page > 60 seconds dwell
4. Connect GSC to GA4 for organic keyword data
5. Set up Core Web Vitals monitoring via GSC Page Experience report

---

## PART 9 — WHAT NOT TO BUILD YET

Do NOT build or invest time in:
- ❌ Any new trust badges until earned and verifiable with a URL
- ❌ A blog before the homepage trust issues are fully resolved
- ❌ Paid Google Ads before organic conversion rate is baselined
- ❌ More than one case study page until more clients are served
- ❌ A chatbot (adds JS weight without adding trust at this stage)
- ❌ Social proof counters ("50+ clients") until the real number is worth showing

---

## PART 10 — VALIDATION CHECKLIST

Run after every deployment:

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — all schema passes
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) — score > 80 mobile, > 90 desktop  
- [ ] [Google Search Console](https://search.google.com/search-console/) — 0 coverage errors
- [ ] All links in footer are real and functional
- [ ] Phone number is clickable (`tel:+2348102544186`) and correct
- [ ] WhatsApp link works: `https://wa.me/2348102544186`
- [ ] LinkedIn company page resolves: https://www.linkedin.com/company/nerdpace/
- [ ] Canonical tags are correct on every page
- [ ] No duplicate H1 tags anywhere
- [ ] No broken internal links (404s)
- [ ] All images have descriptive alt text
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Geo meta tags present on homepage
- [ ] LocalBusiness schema validates in Rich Results Test
- [ ] Haliberry testimonial and case study are present and accurate
- [ ] ZERO fake claims on any page

---

## PRIORITY ORDER (Implement in this exact sequence)

**Day 1 (Today):**
- [ ] Remove ALL fake data (badges, testimonials, stats, phone, location, case studies)
- [ ] Replace phone with +234 810 254 4186 (clickable `tel:` link + WhatsApp link)
- [ ] Replace location with Lagos, Nigeria
- [ ] Add real Haliberry testimonial

**Day 2–3:**
- [ ] Add Haliberry case study page (/case-studies/haliberry-cake)
- [ ] Fix all homepage meta tags
- [ ] Add geo meta tags

**Day 3–4:**
- [ ] Implement all JSON-LD schema (Organization, LocalBusiness, FAQ, Person, Review)
- [ ] Fix robots.txt + sitemap.xml

**Day 5–6:**
- [ ] Core Web Vitals fixes (images to WebP, font-display, code splitting)
- [ ] Update About page with founder story

**Day 7:**
- [ ] Update Vercel headers (vercel.json)
- [ ] Create Lagos-targeted landing pages (stub content)
- [ ] Submit to Google Search Console

**Day 8:**
- [ ] Request indexing for all priority pages via GSC
- [ ] Set up GA4 + goals
- [ ] Create Google Business Profile

---

*Prompt authored for NerdPace executive team.*  
*Real data only. No fabrications. No shortcuts.*  
*Last updated: July 2026.*  
*References: https://developers.google.com/search/docs | https://schema.org*