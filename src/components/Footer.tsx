"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import siteConfig from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 text-muted">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white">APEX</h3>
            <p className="text-sm leading-relaxed">
              Apex Media Group is a full-service digital agency helping brands grow through strategy, design, and performance marketing.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Sitemap</h4>
            <ul className="space-y-4">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary" />
                <span className="text-sm">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-4">
              {[{ icon: Twitter, href: siteConfig.links.twitter }, { icon: Instagram, href: siteConfig.links.instagram }, { icon: Linkedin, href: siteConfig.links.linkedin }, { icon: Facebook, href: "#" }].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.icon.name} page`}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}