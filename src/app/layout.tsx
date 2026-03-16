"use client";

import { Metadata } from "next";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Apex Media Group | Digital Strategy & Design",
  description: "Apex Media Group is a full-service digital agency helping brands grow through strategy, design, and performance marketing.",
  openGraph: {
    title: "Apex Media Group | Digital Strategy & Design",
    description: "Apex Media Group is a full-service digital agency helping brands grow through strategy, design, and performance marketing.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("antialiased selection:bg-primary selection:text-white")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}