"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { images } from "@/config/images";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={images["hero"].src} 
          alt={images["hero"].alt} 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-background to-background" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-[5%] text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="space-y-8"
        >
          <motion.div variants={variants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            AVAILABLE FOR NEW PROJECTS
          </motion.div>

          <motion.h1 variants={variants} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
            Digital Evolution
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Starts Here.
            </span>
          </motion.h1>

          <motion.p variants={variants} className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            We build bespoke digital experiences for brands ready to scale. Strategy, design, and performance—engineered for growth.
          </motion.p>

          <motion.div variants={variants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 border border-border bg-surface/50 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group">
              <Play className="w-4 h-4 fill-white group-hover:fill-black transition-colors" />
              Showreel
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}