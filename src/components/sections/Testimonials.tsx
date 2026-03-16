import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Apex Media Group transformed our online presence. Their strategic approach to design helped us increase conversions by 150% in just three months.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow Inc.",
  },
  {
    quote: "The team's attention to detail is unmatched. They didn't just build a website; they built a digital asset that drives our business forward daily.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Real Estate",
  },
  {
    quote: "Professional, timely, and incredibly creative. The ROI calculator on our new site has become a major lead generation tool for our sales team.",
    author: "Elena Rodriguez",
    role: "Director of Operations, Nexus Logistics",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-[5%] relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white text-center mb-16">Client Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-surface border border-border p-8 rounded-2xl">
              <Quote className="w-8 h-8 text-primary mb-6 opacity-50" />
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{item.quote}"</p>
              <div>
                <div className="font-bold text-white">{item.author}</div>
                <div className="text-sm text-muted">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}