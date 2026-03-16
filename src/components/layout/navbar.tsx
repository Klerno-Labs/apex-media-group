"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-full",
          scrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        <div className="flex items-center justify-between px-6">
          <Link href="/" className="text-xl font-display font-bold text-white hover:text-primary transition-colors">
            APEX MEDIA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group",
                  pathname === link.href && "text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="primary" magnetic>Let&apos;s Talk</Button>
            </Link>
            
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
        
        <Link href="/contact">
          <Button variant="primary" className="text-lg px-12 py-4 mt-4">
            Start Project
          </Button>
        </Link>
      </div>
    </>
  );
}