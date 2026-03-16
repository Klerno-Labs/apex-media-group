// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern open office workspace with natural lighting",
    width: 2070,
    height: 1380,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional team collaborating in a bright modern office",
    width: 2070,
    height: 1380,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    alt: "Diverse team of professionals meeting in a conference room",
    width: 2070,
    height: 1380,
  },

  // First service card image — Strategy
  "service-1": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    alt: "Business strategy planning with charts and digital tablet",
    width: 2070,
    height: 1380,
  },

  // Second service card image — Design
  "service-2": {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
    alt: "Creative design workspace with color swatches and computer",
    width: 2070,
    height: 1380,
  },

  // Third service card image — Marketing
  "service-3": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2069&auto=format&fit=crop",
    alt: "Digital marketing analytics displayed on multiple screens",
    width: 2069,
    height: 1380,
  },

  // Gallery image 1 — Project A
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    alt: "Data analysis dashboard showing growth metrics",
    width: 2070,
    height: 1380,
  },

  // Gallery image 2 — Project B
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern technology office interior with city view",
    width: 2070,
    height: 1380,
  },

  // Team member photo — CEO
  "team-1": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    alt: "Portrait of a senior business executive",
    width: 1974,
    height: 1974,
  },

  // Gallery image 3 — Project C
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    alt: "Collaborative brainstorming session with sticky notes",
    width: 2070,
    height: 1380,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    alt: "Innovation concept with abstract glowing lights",
    width: 2070,
    height: 1380,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional business environment with laptop and coffee",
    width: 2070,
    height: 1380,
  },
} as const;

export type ImageSlot = keyof typeof images;