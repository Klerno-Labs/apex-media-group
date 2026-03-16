"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isActive?: boolean;
}

export function ProcessStep({ step, title, description, isActive }: ProcessStepProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex gap-8 md:gap-16 mb-16 last:mb-0 group"
    >
      <div className="relative flex flex-col items-center">
        <div className={cn(
          "w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-display font-bold transition-colors duration-300",
          isActive ? "border-primary bg-primary text-black" : "border-zinc-700 text-zinc-500"
        )}>
          {step < 10 ? `0${step}` : step}
        </div>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[2px] h-full bg-zinc-800 -z-10" />
      </div>
      
      <div className="pb-12">
        <h3 className={cn(
          "text-2xl font-display font-bold mb-4 transition-colors",
          isActive ? "text-white" : "text-zinc-400"
        )}>
          {title}
        </h3>
        <p className="text-zinc-500 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}