import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessStep } from "@/components/sections/process-step";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Apex Media Group's mission, our transparent process, and the team behind the magic.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        variant="about"
        title="We are Apex."
        subtitle="A collective of strategists, designers, and engineers obsessed with digital excellence."
        primaryLabel="Join the Team"
        primaryHref="/contact"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-[5%]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src={images["about"].src}
                  alt={images["about"].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Our mission is simple: <span className="text-primary">Growth.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Founded in Houston, TX, Apex Media Group was born out of a frustration with the status quo. Too many agencies were focused on awards, not results. We flipped the script.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Today, we are a team of 25+ diverse talents working with brands across the globe to build digital products that people actually use and love.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5+ Years</div>
                  <div className="text-sm text-zinc-500">Of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-sm text-zinc-500">Projects Launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-[5%]">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How we work</h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              A transparent, collaborative process designed to eliminate surprises and maximize output.
            </p>
          </div>

          <div className="relative max-w-4xl">
            <ProcessStep 
              step={1} 
              title="Discovery" 
              description="We dive deep into your business model, audience, and goals to build a foundation for success."
              isActive
            />
            <ProcessStep 
              step={2} 
              title="Strategy & Design" 
              description="We map out the user journey and create high-fidelity designs that align with your brand."
            />
            <ProcessStep 
              step={3} 
              title="Development" 
              description="Our engineers bring designs to life using modern tech stacks optimized for performance."
            />
            <ProcessStep 
              step={4} 
              title="Growth & Scale" 
              description="Launch isn't the end. We iterate, optimize, and scale your digital presence."
            />
          </div>
        </div>
      </section>
      
      {/* Simple Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-[5%]">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Sarah Jenkins", role: "CEO & Founder", bio: "Former VP of Marketing at TechCorp. 15 years in digital." },
              { name: "David Chen", role: "CTO", bio: "Full-stack architect passionate about scalable systems." },
              { name: "Marcus Johnson", role: "Creative Director", bio: "Award-winning designer with a focus on brutalist aesthetics." },
            ].map((member, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-surface border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-24 h-24 mx-auto bg-zinc-700 rounded-full mb-4 overflow-hidden">
                   {/* Placeholder avatar using solid color or pattern since specific avatar images were limited in prompt */}
                   <Image 
                     src={`https://i.pravatar.cc/300?img=${i + 10}`} 
                     alt={member.name}
                     width={100}
                     height={100}
                     className="w-full h-full object-cover"
                   />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-zinc-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}