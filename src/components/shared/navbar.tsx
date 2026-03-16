"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-8">
          <div
            className={cn(
              "rounded-full border transition-all duration-300 flex items-center justify-between px-6 h-16 backdrop-blur-md",
              isScrolled
                ? "bg-zinc-950/80 border-zinc-800 shadow-lg"
                : "bg-zinc-950/50 border-transparent"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50 group">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold font-display">
                A
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                Apex Media
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative"
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300",
                    pathname === link.href && "w-full"
                  )} />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-4">
               <a 
                 href="tel:+17135550198" 
                 className="text-sm text-zinc-500 hover:text-white flex items-center gap-2 transition-colors"
               >
                 <Phone className="w-4 h-4" />
                 <span className="font-mono">(713) 555-0198</span>
               </a>
              <Button asChild variant="default" size="sm">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden z-50 p-2 text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-zinc-950 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-4xl font-display font-bold text-white hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-zinc-800 flex flex-col gap-4">
            <Button asChild variant="default" className="w-full" size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <a 
              href="tel:+17135550198" 
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-lg"
            >
              <Phone className="w-5 h-5 text-primary" />
              (713) 555-0198
            </a>
            <a 
              href="mailto:hello@apexmediagroup.com" 
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-lg"
            >
              <Mail className="w-5 h-5 text-primary" />
              hello@apexmediagroup.com
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}