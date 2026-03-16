import { images } from "@/config/images";

// Mock logos with text for simplicity (in real production, use SVGs)
const logos = [
  { name: "Acme Corp", color: "text-gray-400" },
  { name: "Global Tech", color: "text-gray-400" },
  { name: "Nebula", color: "text-gray-400" },
  { name: "Vertex", color: "text-gray-400" },
  { name: "FocalPoint", color: "text-gray-400" },
  { name: "EchoStream", color: "text-gray-400" },
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-surface/30 border-y border-border py-12 backdrop-blur-sm">
      <div className="flex w-max animate-marquee gap-16 items-center">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className={`font-heading text-xl font-bold tracking-tight ${logo.color} hover:text-white transition-colors cursor-default grayscale hover:grayscale-0`}>
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}