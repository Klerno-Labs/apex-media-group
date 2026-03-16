"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  imageKey?: keyof typeof images;
  className?: string;
  span?: "col-span-1" | "col-span-2" | "row-span-2";
}

export function BentoCard({ title, description, imageKey, className, span = "col-span-1" }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative bg-surface border border-zinc-800 rounded-3xl p-8 overflow-hidden group hover:border-zinc-700 transition-colors",
        span,
        className
      )}
    >
      {imageKey && (
        <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <Image
            src={images[imageKey].src}
            alt={images[imageKey].alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}