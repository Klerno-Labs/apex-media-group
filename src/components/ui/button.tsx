"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  magnetic?: boolean;
}

export function Button({ 
  children, 
  className, 
  variant = "primary", 
  magnetic = false,
  onMouseMove,
  onMouseLeave,
  ...props 
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const r = 20; // Magnetic radius
    
    x.set((mouseX - width / 2) * (r / width));
    y.set((mouseY - height / 2) * (r / height));

    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (onMouseLeave) onMouseLeave();
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]",
    secondary: "bg-transparent border border-zinc-600 text-white hover:bg-zinc-100 hover:text-black hover:border-white",
    ghost: "bg-transparent text-zinc-400 hover:text-white",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(
        "px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      style={magnetic ? { x, y } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}