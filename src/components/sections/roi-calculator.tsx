"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider"; // Assuming a standard slider or creating inline if complex, will use native for simplicity and robustness

export function ROICalculator() {
  const [budget, setBudget] = useState(5000);
  const [industry, setIndustry] = useState("ecommerce");
  
  const calculateROI = () => {
    // Simplified logic for demo
    const multiplier = industry === "ecommerce" ? 4.5 : industry === "saas" ? 3.2 : 3.8;
    return Math.round(budget * multiplier);
  };

  const estimatedLeads = Math.round(budget * 0.8); // Fake logic
  const estimatedRevenue = calculateROI();

  return (
    <div className="bg-surface border border-zinc-800 rounded-3xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h3 className="text-3xl font-display font-bold text-white">
            Estimate Your Growth
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-zinc-400 font-medium">Monthly Ad Budget</label>
                <span className="text-white font-mono">${budget.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="block text-zinc-400 font-medium mb-4">Industry</label>
              <div className="grid grid-cols-3 gap-3">
                {["ecommerce", "saas", "b2b"].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustry(ind)}
                    className={cn(
                      "py-3 px-4 rounded-lg border text-sm font-medium transition-all",
                      industry === ind 
                        ? "bg-primary text-black border-primary" 
                        : "border-zinc-700 text-zinc-400 hover:border-zinc-600"
                    )}
                  >
                    {ind.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800/50 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
          
          <p className="text-zinc-400 mb-2">Estimated Revenue (30d)</p>
          <motion.div 
            key={estimatedRevenue}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-6xl font-mono font-bold text-accent mb-6"
          >
            ${estimatedRevenue.toLocaleString()}
          </motion.div>
          
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span className="block text-zinc-500">Est. Leads</span>
              <span className="text-white font-medium">{estimatedLeads}</span>
            </div>
            <div>
              <span className="block text-zinc-500">ROI</span>
              <span className="text-white font-medium">{Math.round((estimatedRevenue - budget) / budget * 100)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}