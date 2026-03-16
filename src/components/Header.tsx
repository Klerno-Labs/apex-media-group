"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import siteConfig from "@/config/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300",
        "mx-auto max-w-[95%] lg:max-w-[1400px]"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
          "backdrop-blur-md border border-white/10 shadow-lg",
          isScrolled ? "bg-background/90" : "bg-background/70"
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <span className="font-heading text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            APEX
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-primary px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:bg-blue-600 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Start Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open menu"
          className="relative z-50 p-2 md:hidden text-white hover:bg-surface/50 rounded-full"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden animate-in fade-in slide-in-from-top-10">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-heading font-bold text-white hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}