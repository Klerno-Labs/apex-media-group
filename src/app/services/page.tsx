import { Metadata } from "next";
import { Zap, PenTool, BarChart3, Globe, Smartphone, Code2, Palette, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive digital services including web design, branding, and marketing.",
};

const services = [
  {
    icon: PenTool,
    title: "Brand Identity",
    description: "Logo design, visual systems, and brand guidelines that create a lasting impression.",
    price: "$5k - $15k"
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with Next.js, React, and headless CMS.",
    price: "$10k - $50k+"
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "PPC, Social Media, and Email campaigns designed to drive qualified leads.",
    price: "$3k/mo retainer"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Technical SEO audits, content strategy, and link building to improve rankings.",
    price: "$2k/mo retainer"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "iOS and Android mobile apps with a focus on UX and performance.",
    price: "$25k+"
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Shopify and WooCommerce stores optimized for conversion and scalability.",
    price: "$8k - $30k"
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">What we do.</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We offer a full spectrum of digital services. From the initial spark of an idea to the final pixel, we are your partners in digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-4">{service.description}</p>
              <div className="text-sm font-mono text-accent">{service.price}</div>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-zinc-900 rounded-3xl p-8 md:p-16 border border-zinc-800 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Project ROI Calculator</h2>
              <p className="text-zinc-400 mb-8">
                Get an instant estimate of potential leads based on your industry and investment.
              </p>
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-4">Monthly Marketing Budget</label>
                  <input type="range" min="1000" max="50000" step="1000" className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary" />
                  <div className="flex justify-between text-sm text-zinc-500 mt-2">
                    <span>$1k</span>
                    <span>$50k+</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-4">Industry Conversion Rate</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-white focus:border-primary focus:outline-none">
                    <option>SaaS (High)</option>
                    <option>E-Commerce (Medium)</option>
                    <option>Professional Services (Low)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-950 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-zinc-800">
               <div className="text-zinc-500 font-mono uppercase tracking-widest text-sm mb-2">Estimated Leads / Mo</div>
               <div className="text-6xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                 450
               </div>
               <div className="text-accent text-sm font-medium flex items-center gap-2">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                 </span>
                 Based on avg. $50 CPA
               </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long does a typical web project take?", a: "Most standard websites take 6-8 weeks from kickoff to launch. Complex web applications can take 3-6 months depending on scope." },
              { q: "Do you work with startups?", a: "Absolutely. We have a dedicated package for early-stage startups that focuses on MVP development and brand foundation." },
              { q: "What is your payment structure?", a: "We typically require a 50% deposit to begin work, with the remaining 50% due upon launch and completion." }
            ].map((item, i) => (
              <div key={i} className="border-b border-zinc-800 pb-6">
                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                <p className="text-zinc-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}