import { images } from "@/config/images";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    image: "service-2",
  },
  {
    title: "E-Commerce Scale",
    category: "Web Development",
    image: "gallery-1",
  },
  {
    title: "Brand Refresh",
    category: "Branding",
    image: "about",
  },
];

export default function SelectedWork({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="mb-16 text-center md:text-left">
          <span className="text-accent font-mono text-sm uppercase tracking-widest">Selected Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-2">Crafted with Precision</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={images[project.image as keyof typeof images].src}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-mono text-sm mb-2">{project.category}</span>
                <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}