import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-white">APEX MEDIA</h3>
            <p className="text-zinc-400 leading-relaxed">
              Elevating brands through digital strategy, design, and performance marketing.
            </p>
            <div className="flex gap-4 pt-4">
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-zinc-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-zinc-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#work" className="text-zinc-400 hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-primary" />
                <span className="whitespace-pre-line">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="button"
                className="bg-white text-zinc-900 font-semibold rounded-lg px-4 py-3 hover:bg-zinc-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="bg-zinc-900 text-zinc-400 p-3 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}