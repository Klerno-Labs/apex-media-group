"use client"

import { motion } from "framer-motion"

const clients = [
  { name: "Stripe", id: 1 },
  { name: "Vercel", id: 2 },
  { name: "Linear", id: 3 },
  { name: "Acme Corp", id: 4 },
  { name: "Raycast", id: 5 },
  { name: "Notion", id: 6 },
  { name: "Figma", id: 7 },
  { name: "Spotify", id: 8 },
]

export default function LogoMarquee() {
  // Duplicate array for infinite scroll illusion
  const marqueeItems = [...clients, ...clients, ...clients]

  return (
    <section className="w-full overflow-hidden bg-zinc-900/50 border-y border-zinc-800 py-12 backdrop-blur-sm relative">
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
      <div className="absolute bottom-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      
      <motion.div 
        className="flex w-max gap-16"
        animate={{ x: [0, -1200] }} // Adjust based on content width roughly
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {marqueeItems.map((client, index) => (
          <div 
            key={`${client.id}-${index}`}
            className="text-2xl font-display font-bold text-zinc-600 hover:text-white transition-colors duration-500 cursor-default"
          >
            {client.name}
          </div>
        ))}
      </motion.div>
    </section>
  )
}