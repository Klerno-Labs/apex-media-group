import { Metadata } from "next";
import { images } from "@/config/images";
import ROICalculator from "@/components/sections/ROICalculator";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our full suite of digital services including strategy, design, development, and marketing.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="pt-16 pb-24 bg-background px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">What we do.</h1>
          <p className="text-xl text-muted max-w-3xl">
            End-to-end digital solutions designed to grow your revenue and brand authority.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface/30">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Digital Strategy", img: "service-1", desc: "We analyze market trends and competitor data to build a roadmap that ensures your digital investment yields maximum returns." },
              { title: "Web Development", img: "service-2", desc: "From custom React applications to headless CMS solutions, our code is clean, fast, and secure." },
              { title: "Brand Identity", img: "service-3", desc: "Logo design, visual systems, and brand guidelines that tell your story consistently across all channels." },
              { title: "SEO & Analytics", img: "gallery-1", desc: "Technical SEO audits and content strategies that improve your organic visibility and drive qualified traffic." },
              { title: "Paid Media", img: "gallery-2", desc: "PPC and social ad campaigns managed with precision to lower CPA and increase ROAS." },
              { title: "App Development", img: "gallery-3", desc: "Native and cross-platform mobile applications that extend your reach to customers on the go." },
            ].map((service, i) => (
              <div key={i} className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary transition-all">
                <div className="aspect-video overflow-hidden">
                   <img src={images[service.img as keyof typeof images].src} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-muted leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />
    </main>
  );
}