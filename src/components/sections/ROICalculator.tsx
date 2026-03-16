"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [budget, setBudget] = useState(5000);
  const [leads, setLeads] = useState(0);

  // Simple logic for demo purposes: Leads = Budget / Estimated CPL (assumed $50)
  const estimatedLeads = Math.floor(budget / 50);
  const estimatedRevenue = estimatedLeads * 500; // Avg customer value $500

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-[5%]">
        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="font-heading text-3xl font-bold text-white mb-2 text-center md:text-left">Estimate Your ROI</h2>
          <p className="text-muted mb-8 text-center md:text-left">See how much impact our services could have on your revenue.</p>

          <div className="space-y-12">
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-medium text-white">Monthly Marketing Budget</label>
                <span className="font-mono text-primary">${budget.toLocaleString()}</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border">
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-sm text-muted mb-2 font-mono uppercase">Est. Leads/Mo</div>
                <div className="font-heading text-4xl font-bold text-white">{estimatedLeads}</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-sm text-muted mb-2 font-mono uppercase">Est. Revenue/Mo</div>
                <div className="font-heading text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  ${estimatedRevenue.toLocaleString()}
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-muted/60">
              *Figures are estimates based on industry averages. Actual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}