import Link from "next/link";
import { ArrowRight, BarChart3, Palette, Code, Megaphone, Smartphone, Zap } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

const services = [
  { title: "Digital Strategy", icon: BarChart3, desc: "Data-driven roadmaps for market dominance.", span: "md:col-span-2" },
  { title: "UI/UX Design", icon: Palette, desc: "Interfaces that delight and convert.", span: "md:col-span-1" },
  { title: "Web Development", icon: Code, desc: "Robust, scalable, and performant code.", span: "md:col-span-1" },
  { title: "Brand Identity", icon: Zap, desc: "Memorable brands that stand out.", span: "md:col-span-1" },
  { title: "Performance Marketing", icon: Megaphone, desc: "ROI-focused campaigns that scale.", span: "md:col-span-1 md:row-span-2" },
  { title: "Mobile Apps", icon: Smartphone, desc: "Native experiences for iOS & Android.", span: "md:col-span-1" },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-muted text-lg">We blend creativity with technology to deliver comprehensive digital solutions.</p>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className={cn(
                "group relative bg-surface border border-border rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-all duration-300",
                service.span
              )}
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </div>
              
              {/* Decorative background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium">
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}