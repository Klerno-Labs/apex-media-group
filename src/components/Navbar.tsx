"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/config/images";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={images["hero"].src} alt="Apex Media Group Logo" className="h-10" />
          <span className="ml-2 font-space-grotesk text-xl">Apex Media Group</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
        <button
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About</a>
          <a href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Services</a>
          <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}