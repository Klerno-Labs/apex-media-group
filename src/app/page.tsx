import { Metadata } from "next";
import Hero from "@/components/home/hero";
import LogoMarquee from "@/components/home/marquee";
import ServicesBento from "@/components/home/bento-grid";
import ContactForm from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Home",
  description: "Apex Media Group helps brands grow through strategy, design, and performance marketing.",
};

export default function Home() {
  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Client Retention" },
    { value: "$50M+", label: "Revenue Generated" },
  ];

  const testimonials = [
    {
      quote: "Apex completely transformed our digital presence. The new site increased our lead conversion by 40% in just two months.",
      author: "Sarah Jenkins",
      role: "CMO, TechFlow",
      image: images["team-1"]
    },
    {
      quote: "Their team is strategic, creative, and incredibly responsive. They don't just build websites; they build businesses.",
      author: "Michael Ross",
      role: "Founder, Ross Logistics",
      image: images["team-1"]
    },
    {
      quote: "The ROI on our PPC campaigns has doubled since partnering with Apex. Highly recommended for any serious brand.",
      author: "David Chen",
      role: "Director, UrbanEats",
      image: images["team-1"]
    }
  ];

  return (
    <>
      <Hero />
      <LogoMarquee />

      {/* Stats Section */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {stats.map((stat, i) => (
              <div key={i} className="pt-8 md:pt-0">
                <div className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section id="work" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Selected Work</h2>
              <p className="text-zinc-400 max-w-lg">A glimpse into our portfolio of digital transformations.</p>
            </div>
            <Button variant="outline" className="mt-6 md:mt-0" asChild>
              <Link href="/contact">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[images["gallery-1"], images["gallery-2"], images["gallery-3"]].map((img, i) => (
              <div key={i} className={`group relative rounded-2xl overflow-hidden border border-zinc-800 ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-video'}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     View Case Study
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesBento />

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">Client Stories</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((t, i) => (
               <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
                 <div className="flex text-primary mb-4">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                 </div>
                 <p className="text-zinc-300 mb-6 italic">"{t.quote}"</p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden relative">
                      <Image src={t.image.src} alt={t.author} fill className="object-cover" />
                   </div>
                   <div>
                     <div className="text-white font-bold">{t.author}</div>
                     <div className="text-zinc-500 text-sm">{t.role}</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <div className="absolute inset-0">
              <Image src={images["cta"].src} alt="CTA Background" fill className="object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent" />
            </div>
            
            <div className="relative z-10 p-12 md:p-20 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to scale?</h2>
              <p className="text-xl text-zinc-400 mb-8">Let's build something extraordinary together. Schedule a free consultation with our strategy team.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                   <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                   <Link href="/#work">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}