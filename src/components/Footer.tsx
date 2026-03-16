"use client";

import { cn } from "@/lib/utils";
import { images } from "@/config/images";
import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className={cn("bg-zinc-950 text-white pt-20 pb-10")}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 className="font-space-grotesk text-xl font-bold mb-6">Apex Media Group</h2>
          <p>Your partner in digital growth.</p>
        </div>
        <div>
          <h3 className="font-space-grotesk text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" className="block text-zinc-500 hover:text-blue-400 transition-colors mb-4">Home</a></li>
            <li><a href="/about" className="block text-zinc-500 hover:text-blue-400 transition-colors mb-4">About</a></li>
            <li><a href="/services" className="block text-zinc-500 hover:text-blue-400 transition-colors mb-4">Services</a></li>
            <li><a href="/contact" className="block text-zinc-500 hover:text-blue-400 transition-colors mb-4">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-space-grotesk text-lg font-bold mb-4">Contact Info</h3>
          <p className="flex items-center mb-2"><Phone className="mr-2" /> (512) 555-0199</p>
          <p>4521 Westheimer Rd, Suite 200, Houston, TX 77027</p>
          <p className="mt-4">info@apexmediagroup.com</p>
        </div>
        <div>
          <h3 className="font-space-grotesk text-lg font-bold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-400">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>© {new Date().getFullYear()} Apex Media Group. All rights reserved.</p>
      </div>
    </footer>
  );
}