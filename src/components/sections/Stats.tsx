import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Delivered", value: "250+" },
  { label: "Awards Won", value: "45" },
  { label: "Team Members", value: "24" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-[5%]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-mono text-primary uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}