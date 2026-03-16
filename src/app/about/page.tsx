import { Metadata } from "next";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Apex Media Group's journey, our team, and our commitment to digital excellence.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-16 pb-24 bg-background text-center px-[5%]">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">We are Apex.</h1>
        <p className="max-w-2xl mx-auto text-xl text-muted">
          A collective of strategists, designers, and developers obsessed with creating digital products that define the future.
        </p>
      </section>

      {/* Intro Split */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-[1400px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <img
              src={images["about"].src}
              alt={images["about"].alt}
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-3xl z-0" />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Driven by Impact</h2>
            <p className="text-muted text-lg leading-relaxed">
              Founded in 2014 in Houston, TX, Apex Media Group started with a simple mission: to bridge the gap between creative design and technical performance. We believe that a website shouldn't just look beautiful—it should be a powerful business tool.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              We reject the "one-size-fits-all" agency model. Every project we undertake is bespoke, tailored to the unique challenges and goals of our partners. From ambitious startups to Fortune 500s, we bring the same level of precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-16 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your brand, market, and goals." },
              { step: "02", title: "Strategy", desc: "Data-driven planning and creative direction." },
              { step: "03", title: "Build", desc: "Agile development and pixel-perfect design." },
              { step: "04", title: "Launch", desc: "Deployment, testing, and performance monitoring." },
            ].map((phase) => (
              <div key={phase.step} className="relative p-8 rounded-3xl bg-surface border border-border hover:border-primary transition-colors group">
                <div className="font-mono text-6xl font-bold text-white/5 group-hover:text-primary/10 absolute top-4 right-6">
                  {phase.step}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-muted">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-16 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Mercer", role: "CEO & Founder", bio: "Visionary leader with 15+ years in digital strategy." },
              { name: "Jordan Lee", role: "Creative Director", bio: "Award-winning designer obsessed with typography." },
              { name: "Casey Smith", role: "Head of Tech", bio: "Full-stack architect and performance enthusiast." },
            ].map((member) => (
              <div key={member.name} className="bg-background border border-border rounded-2xl p-8 text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-radial from-surface to-background mb-6 flex items-center justify-center border border-border">
                   <span className="font-heading text-2xl font-bold text-muted">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{member.name}</h3>
                <div className="text-primary text-sm font-mono mb-4">{member.role}</div>
                <p className="text-muted text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}