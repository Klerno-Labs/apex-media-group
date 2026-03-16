import Image from "next/image";
import { cn } from "@/lib/utils";

// Using generic logo placeholders for demo since no real client URLs provided
const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
];

export function LogoMarquee() {
  return (
    <div className="w-full bg-zinc-950/50 border-y border-zinc-900 py-12 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex gap-16 w-max animate-marquee">
        {logos.map((logo, i) => (
          <div key={i} className="flex items-center gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             {/* Using simple text representation for robustness if SVGs fail, but img tag is standard */}
             <img src={logo} alt={`Client logo ${i+1}`} className="h-8 w-auto object-contain" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {logos.map((logo, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             <img src={logo} alt={`Client logo ${i+1}`} className="h-8 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}