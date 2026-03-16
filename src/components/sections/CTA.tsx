import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-[5%]">
      <div className="max-w-[1400px] mx-auto rounded-3xl bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Ready to Scale?</h2>
            <p className="text-blue-100 text-lg">
              Let&apos;s discuss how Apex Media Group can accelerate your growth.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl whitespace-nowrap flex items-center gap-2"
          >
            Get a Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}