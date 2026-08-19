'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+2348102544186';
  const contactPhoneHref = contactPhone.replace(/[^+\d]/g, '');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@nerdpace.com',
      href: 'mailto:hello@nerdpace.com',
    },
    {
      icon: Phone,
      label: 'Phone/WhatsApp',
      value: '+234 810 254 4186',
      href: `https://wa.me/${contactPhoneHref}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: 'https://maps.google.com/?q=Lagos,Nigeria',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/nerdpace/' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Obed-Ojingwa' },
  ];

  const serviceLinks = [
    { name: 'SEO Audit', href: '/services/seo-audits' },
    { name: 'Monthly SEO', href: '/pricing' },
    { name: 'Technical SEO', href: '/services/technical-seo' },
    { name: 'Local SEO', href: '/services/local-seo' },
    { name: 'Content SEO', href: '/services/content-seo' },
  ];

  const companyLinks = [
    { name: 'About NerdPace', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights & Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_8%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(245,158,11,0.08),transparent_28%)]" />
      <div className="relative container mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-16 grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">NerdPace / Next move</p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Your next organic growth opportunity is probably closer than it looks.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">Bring us the context. We will help you find the clearest path from technical friction to meaningful search visibility.</p>
          </div>
          <Link href="/audit" className="group inline-flex w-fit items-center gap-3 border border-cyan-300/60 bg-cyan-300 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">
            Start with a free audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:gap-8">
          <div>
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <Image src="/nerdpace_logo.png" alt="NerdPace Logo" width={42} height={42} className="h-10 w-auto" />
              <span className="text-xl font-semibold tracking-tight">NerdPace</span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-slate-400">Technical SEO and website development for Nigerian startups and global businesses that want to be found, trusted and remembered.</p>
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="grid h-10 w-10 place-items-center border border-white/10 text-slate-400 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-300"><social.icon className="h-4 w-4" /></a>)}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Services</h3>
            <nav className="space-y-3" aria-label="Footer services">{serviceLinks.map((link) => <Link key={link.name} href={link.href} className="group flex w-fit items-center gap-2 text-sm text-slate-300 transition hover:text-white"><span>{link.name}</span><ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition group-hover:text-cyan-300" /></Link>)}</nav>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Explore</h3>
            <nav className="space-y-3" aria-label="Footer company links">{companyLinks.map((link) => <Link key={link.name} href={link.href} className="group flex w-fit items-center gap-2 text-sm text-slate-300 transition hover:text-white"><span>{link.name}</span><ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition group-hover:text-cyan-300" /></Link>)}</nav>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Talk to us</h3>
            <div className="space-y-3">{contactInfo.map((info) => { const Icon = info.icon; return <a key={info.label} href={info.href} className="group flex items-start gap-3 text-sm text-slate-300 transition hover:text-white"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center border border-white/10 text-cyan-300"><Icon className="h-3.5 w-3.5" /></span><span><span className="block text-xs text-slate-500">{info.label}</span><span className="mt-0.5 block leading-6">{info.value}</span></span></a>; })}</div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {currentYear} NerdPace. All rights reserved.</p><span>Lagos, Nigeria</span></div>
      </div>
    </footer>
  );
}