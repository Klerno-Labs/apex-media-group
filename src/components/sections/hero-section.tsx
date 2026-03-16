import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
  variant?: "home" | "minimal" | "about";
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function HeroSection({
  className,
  variant = "home",
  title,
  subtitle,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "/#work",
}: HeroSectionProps) {
  const isHome = variant === "home";
  const imageKey = isHome ? "hero" : "hero-alt";

  return (
    <section className={cn(
      "relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden",
      className
    )}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
        <Image
          src={images[imageKey].src}
          alt={images[imageKey].alt}
          fill
          priority={isHome}
          className="object-cover object-center"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-[5%] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1]">
            {title}
          </h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {isHome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button href={primaryHref} magnetic>
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {isHome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50"
        >
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </div>
        </motion.div>
      )}
    </section>
  );
}