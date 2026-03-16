import Image from "next/image"
import { ArrowUpRight, BarChart3, PenTool, Smartphone, Zap, Globe } from "lucide-react"
import { images } from "@/config/images"
import { motion } from "framer-motion"

const services = [
  {
    title: "Brand Strategy",
    description: "We define your voice, visual identity, and market positioning to cut through the noise.",
    icon: <PenTool className="w-6 h-6" />,
    image: images["service-1"],
    size: "lg", // Large card (2x2)
    color: "from-blue-500/20 to-blue-900/20"
  },
  {
    title: "Web Design & Dev",
    description: "High-performance websites built with Next.js and Tailwind that convert visitors into customers.",
    icon: <Code2 className="w-6 h-6" />, // Using Lucide Code2
    image: images["service-2"],
    size: "md", // Medium card
    color: "from-violet-500/20 to-violet-900/20"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns across SEO, PPC, and Social to maximize your ROI.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: images["service-3"],
    size: "md", // Medium card
    color: "from-lime-500/20 to-lime-900/20"
  },
  {
    title: "App Development",
    description: "Native iOS and Android applications designed for user retention and scalability.",
    icon: <Smartphone className="w-6 h-6" />,
    size: "sm", // Small card
    color: "from-pink-500/20 to-pink-900/20"
  },
  {
    title: "SEO Optimization",
    description: "Technical audits and content strategies to dominate search rankings.",
    icon: <Zap className="w-6 h-6" />,
    size: "sm", // Small card
    color: "from-orange-500/20 to-orange-900/20"
  },
  {
    title: "Global Expansion",
    description: "Localization and international market entry strategies for growing brands.",
    icon: <Globe className="w-6 h-6" />,
    size: "sm", // Small card
    color: "from-cyan-500/20 to-cyan-900/20"
  }
]

// Fix for Code2 import if needed, or just use Zap/Misc
function Code2(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg> }

export default function ServicesBento() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Capabilities</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">A comprehensive suite of digital services designed to elevate your brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {services.map((service, index) => {
            const isLarge = service.size === "lg"
            const isMedium = service.size === "md"
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 p-8 flex flex-col justify-between
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isMedium ? 'md:col-span-1 md:row-span-1' : ''}
                  hover:border-zinc-700 transition-all duration-300
                `}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Image Reveal on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Image
                      src={service.image.src}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-zinc-950/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    {service.icon}
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    {service.description && (
                      <p className="text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-200">{service.description}</p>
                    )}
                  </div>

                  <div className="mt-4 flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}