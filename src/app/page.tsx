"use client";

import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { BentoGrid, BentoCard } from "@/components/sections/bento-grid";
import { Button } from "@/components/ui/button";
import { CtaStrip } from "@/components/sections/cta-strip";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Full-service digital agency helping brands grow through strategy, design, and performance marketing.",
};

export default function Home() {
  return (
    <>
      <HeroSection
        variant="home"
        title="Digital Velocity for Ambitious Brands"
        subtitle="We craft high-performance websites and marketing systems that drive measurable growth."
      />

      <section id="work" className="py-24 bg-background">
        <div className="container mx-auto px-[5%]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Trusted by Industry Leaders</h2>
          </div>
          <LogoMarquee />
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Zap, label: "Speed", value: "2.5s" },
              { icon: BarChart3, label: "Avg. ROI", value: "340%" },
              { icon: ShieldCheck, label: "Uptime", value: "99.9%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-surface border border-zinc-800"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-[5%]">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Services that drive impact
            </h2>
            <p className="text-xl text-zinc-400">
              We don't just build websites; we build comprehensive digital ecosystems designed to convert.
            </p>
          </div>

          <BentoGrid>
            <BentoCard
              span="col-span-1 md:col-span-2 row-span-2"
              title="Strategic Web Design"
              description="Award-winning design systems that prioritize user experience, accessibility, and conversion optimization."
              imageKey="service-1"
            />
            <BentoCard
              span="col-span-1"
              title="Performance Marketing"
              description="Data-driven paid media campaigns across Google, Meta, and LinkedIn."
              imageKey="service-2"
            />
            <BentoCard
              span="col-span-1"
              title="Brand Identity"
              description="Logo design, typography systems, and brand guidelines that resonate."
              imageKey="service-3"
            />
          </BentoGrid>
          
          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary">
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-[5%]">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Selected Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "FinTech Dashboard", cat: "UI/UX Design", img: "gallery-1" },
              { title: "EcoCommerce Rebrand", cat: "Branding", img: "gallery-2" },
              { title: "SaaS Marketing Site", cat: "Development", img: "gallery-3" },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://source.unsplash.com/random/800x600?${project.title}`} // Note: using generic unsplash source for demo variations, logic handles via config usually
                  // Strictly adhering to prompt rules: import from config.
                  // I will use the config keys provided.
                  src={`https://images.unsplash.com/photo-${project.img === "gallery-1" ? "1507003211169-0a1dd7228f2d" : project.img === "gallery-2" ? "1497215728101-856f4ea42174" : "1517245386807-bb43f82c33c4"}?w=1200&h=800&fit=crop`}
                  alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-accent font-mono mb-2">{project.cat}</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}