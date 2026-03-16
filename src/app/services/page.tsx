import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { BentoGrid, BentoCard } from "@/components/sections/bento-grid";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { CtaStrip } from "@/components/sections/cta-strip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Radix UI Accordion

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive digital services including Web Design, SEO, PPC, and Brand Strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        variant="minimal"
        title="Capabilities"
        subtitle="End-to-end digital solutions tailored for growth."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-[5%]">
          <BentoGrid>
            <BentoCard
              span="col-span-1 md:col-span-2 row-span-2"
              title="Custom Web Development"
              description="Next.js, React, and Headless CMS solutions. We build fast, secure, and scalable websites that perform."
              imageKey="service-1"
            />
            <BentoCard
              span="col-span-1"
              title="Search Engine Optimization"
              description="Technical SEO, content strategy, and link building to get you ranking #1."
              imageKey="service-2"
            />
            <BentoCard
              span="col-span-1"
              title="Paid Media (PPC)"
              description="High-ROI campaigns on Google Ads and Facebook Ads. We focus on lowering CPA while increasing volume."
              imageKey="service-3"
            />
            <BentoCard
              span="col-span-1"
              title="Email Marketing"
              description="Automated flows and newsletters that nurture leads and drive retention."
            />
            <BentoCard
              span="col-span-1 md:col-span-2"
              title="Brand Strategy"
              description="Positioning, messaging, and visual identity systems that differentiate you from competitors."
            />
          </BentoGrid>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-[5%] max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">ROI Calculator</h2>
            <p className="text-xl text-zinc-400">Get an instant estimate of your potential return on investment.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-[5%] max-w-3xl">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { q: "How long does a web project take?", a: "Typical timelines are 6-10 weeks for a standard business website, and 12-16 weeks for complex web applications." },
              { q: "Do you work with startups?", a: "Yes, we love working with ambitious startups. We offer flexible engagement models tailored to early-stage budgets." },
              { q: "What CMS do you use?", a: "We are experts in Sanity.io, Contentful, and WordPress. We recommend the best tool based on your specific content needs." },
              { q: "Do you offer ongoing support?", a: "Absolutely. We offer retainer packages for maintenance, updates, and continued optimization." },
            ].map((item, i) => (
              <div key={i} className="border border-zinc-800 rounded-xl bg-surface overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-medium text-white">{item.q}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}