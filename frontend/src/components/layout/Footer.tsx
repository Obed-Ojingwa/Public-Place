'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

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
      href: '#',
    },
  ];

  const socialLinks = [
  //  { name: 'Twitter/X', icon: Twitter, href: 'https://twitter.com/nerdpace' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nerdpace' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/Obed-Ojingwa' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8">
          {/* Brand Column */}
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl">NerdPace</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-xl">
              Lagos-based technical SEO and website development agency helping Nigerian startups and global businesses rank higher and grow organically.
            </p>
            <div className="space-y-3 text-slate-400">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-3">
                  {info.icon && (
                    <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                      <info.icon />
                    </div>
                  )}
                  <div>
                    {info.label && (
                      <span className="font-medium text-slate-300">{info.label}:</span>
                    )}
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-slate-200 hover:text-white transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-slate-200">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Column */}
          <div className="flex items-start">
            <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm text-center">
            © {currentYear} NerdPace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}