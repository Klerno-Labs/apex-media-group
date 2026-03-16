export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern office workspace with natural light",
    width: 1200,
    height: 800,
  },
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional team collaborating in bright office",
    width: 1200,
    height: 800,
  },
  about: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Business professionals in modern meeting room",
    width: 1200,
    height: 800,
  },
  "service-1": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Creative professionals working together",
    width: 1200,
    height: 800,
  },
  "service-2": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Data analytics dashboard on screen",
    width: 1200,
    height: 800,
  },
  "service-3": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Team workshop and brainstorming session",
    width: 1200,
    height: 800,
  },
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional handshake in business setting",
    width: 1200,
    height: 800,
  },
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Modern conference room with city view",
    width: 1200,
    height: 800,
  },
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Technology workspace with multiple screens",
    width: 1200,
    height: 800,
  },
  cta: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Innovation and technology concept",
    width: 1200,
    height: 800,
  },
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    alt: "Professional business environment",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;