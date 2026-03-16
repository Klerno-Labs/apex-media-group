import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Apex Media Group, our team, and our process.",
};

export default function AboutPage() {
  const processSteps = [
    { step: "01", title: "Discovery", desc: "We deep-dive into your business, market, and goals to create a strategic roadmap." },
    { step: "02", title: "Strategy", desc: "We define the architecture, content, and design systems that will drive success." },
    { step: "03", title: "Execution", desc: "Our designers and developers build your solution with pixel-perfect precision." },
    { step: "04", title: "Growth", desc: "Launch is just the beginning. We optimize and iterate for continuous growth." }
  ];

  const team = [
    { name: "Alex Morgan", role: "CEO & Founder", img: images["team-1"] },
    { name: "Jordan Lee", role: "Creative Director", img: images["team-1"] },
    { name: "Casey Smith", role: "Lead Developer", img: images["team-1"] },
    { name: "Taylor Doe", role: "Marketing Strategist", img: images["team-1"] },
  ];

  return (
    <main className="pt-32 pb-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">We are Apex.</h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              Founded in Houston, TX, Apex Media Group is a collective of strategists, designers, and engineers obsessed with digital perfection. We believe that exceptional design isn't just about aesthetics—it's about solving problems and driving measurable business results.
            </p>
            <div className="flex gap-4">
               <Button asChild><Link href="/contact">Work With Us</Link></Button>
               <Button variant="outline" asChild><Link href="/#work">View Portfolio</Link></Button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-800">
            <Image src={images["about"].src} alt="Apex Team" fill className="object-cover" />
          </div>
        </div>

        {/* Process */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((p, i) => (
              <div key={i} className="relative">
                <div className="text-8xl font-display font-bold text-zinc-800 absolute -top-10 -left-4 select-none -z-10">
                  {p.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-zinc-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
           <h2 className="text-3xl font-bold text-white mb-16 text-center">The Team</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {team.map((member, i) => (
               <div key={i} className="text-center group">
                 <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border border-zinc-800">
                    <Image 
                      src={member.img.src} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                 </div>
                 <div className="text-white font-bold">{member.name}</div>
                 <div className="text-zinc-500 text-sm">{member.role}</div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </main>
  )
}