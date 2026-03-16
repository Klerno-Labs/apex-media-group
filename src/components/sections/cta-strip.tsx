import Image from "next/image";
import { Button } from "./button";
import { images } from "@/config/images";

export function CtaStrip() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Ready to scale your business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join the forward-thinking brands that trust Apex Media Group to deliver results that matter.
        </p>
        <Button 
          href="/contact" 
          className="bg-white text-primary hover:bg-zinc-100 border-none shadow-2xl"
        >
          Start Your Project
        </Button>
      </div>
    </section>
  );
}