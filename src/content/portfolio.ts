// Portfolio content - edit this file to add/update portfolio items
// Images should be placed in /public/images/portfolio/[slug]/

export interface PortfolioItem {
  slug: string;
  title: string;
  category: "Corporate" | "Social" | "Showers";
  tagline: string;
  date: string;
  location: string;
  guestCount: string;
  thumbnail: string;
  heroImage: string;
  overview: string;
  designIntent: string;
  signatureDetails: string[];
  gallery: {
    src: string;
    alt: string;
  }[];
  vendors: {
    role: string;
    name: string;
    link?: string;
  }[];
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "tech-innovation-gala",
    title: "Tech Innovation Gala",
    category: "Corporate",
    tagline: "A sleek celebration of innovation and forward-thinking design",
    date: "October 2024",
    location: "San Diego, CA",
    guestCount: "200 guests",
    thumbnail: "/images/portfolio/tech-innovation-gala/thumbnail.jpg",
    heroImage: "/images/portfolio/tech-innovation-gala/hero.jpg",
    overview:
      "An annual corporate gala for a leading tech company, designed to celebrate their culture of innovation while providing an unforgettable evening for employees and partners. The design balanced technological edge with warm hospitality.",
    designIntent:
      "We wanted to create an environment that felt both cutting-edge and inviting—reflecting the company's innovative spirit while ensuring guests felt welcomed and celebrated. Clean lines, subtle technological elements, and warm ambient lighting created a sophisticated atmosphere that encouraged connection and celebration.",
    signatureDetails: [
      "Custom LED installation mimicking circuit patterns",
      "Personalized place cards with each guest's contribution to the company",
      "Interactive dessert stations with projection mapping",
      "Bespoke cocktail menu inspired by company milestones",
    ],
    gallery: [
      { src: "/images/portfolio/tech-innovation-gala/gallery-1.jpg", alt: "Grand entrance with LED installation" },
      { src: "/images/portfolio/tech-innovation-gala/gallery-2.jpg", alt: "Tablescape with modern centerpieces" },
      { src: "/images/portfolio/tech-innovation-gala/gallery-3.jpg", alt: "Custom bar design" },
      { src: "/images/portfolio/tech-innovation-gala/gallery-4.jpg", alt: "Dessert station detail" },
      { src: "/images/portfolio/tech-innovation-gala/gallery-5.jpg", alt: "Lounge seating area" },
      { src: "/images/portfolio/tech-innovation-gala/gallery-6.jpg", alt: "Evening ambiance" },
    ],
    vendors: [
      { role: "Venue", name: "The Alexandria Ballroom" },
      { role: "Catering", name: "Farm & Table Catering" },
      { role: "Florals", name: "Bloom San Diego" },
      { role: "Lighting", name: "Illuminate Events" },
      { role: "Photography", name: "Candid Captures" },
      { role: "Rentals", name: "Signature Party Rentals" },
    ],
    featured: true,
  },
  {
    slug: "garden-milestone-birthday",
    title: "Garden Milestone Birthday",
    category: "Social",
    tagline: "An intimate garden celebration for a 50th birthday",
    date: "September 2024",
    location: "La Jolla, CA",
    guestCount: "75 guests",
    thumbnail: "/images/portfolio/garden-milestone-birthday/thumbnail.jpg",
    heroImage: "/images/portfolio/garden-milestone-birthday/hero.jpg",
    overview:
      "A sophisticated 50th birthday celebration held in the client's private garden, designed to honor a lifetime of memories while creating new ones. The design blended natural beauty with elegant touches.",
    designIntent:
      "The client wanted an event that felt like a warm embrace from her closest friends and family. We designed an intimate garden party that celebrated her love of nature while incorporating personal touches that told her story. Every element was chosen to create moments of connection and joy.",
    signatureDetails: [
      "Custom invitations featuring hand-illustrated garden elements unique to each guest's relationship with the honoree",
      "A memory installation with photos from five decades",
      "Personalized favor gardens for each guest to take home",
      "A twilight toast under string lights with a custom speech book",
    ],
    gallery: [
      { src: "/images/portfolio/garden-milestone-birthday/gallery-1.jpg", alt: "Garden ceremony setup" },
      { src: "/images/portfolio/garden-milestone-birthday/gallery-2.jpg", alt: "Tablescaping with garden florals" },
      { src: "/images/portfolio/garden-milestone-birthday/gallery-3.jpg", alt: "Custom invitation suite" },
      { src: "/images/portfolio/garden-milestone-birthday/gallery-4.jpg", alt: "Memory installation detail" },
      { src: "/images/portfolio/garden-milestone-birthday/gallery-5.jpg", alt: "Evening string lights" },
      { src: "/images/portfolio/garden-milestone-birthday/gallery-6.jpg", alt: "Dessert display" },
    ],
    vendors: [
      { role: "Florals", name: "Petals & Poetry" },
      { role: "Catering", name: "Coast Catering Co." },
      { role: "Calligraphy", name: "Script & Sage" },
      { role: "Photography", name: "Golden Hour Studio" },
      { role: "Rentals", name: "Archive Rentals" },
    ],
    featured: true,
  },
  {
    slug: "coastal-baby-shower",
    title: "Coastal Baby Shower",
    category: "Showers",
    tagline: "A serene celebration welcoming baby with coastal elegance",
    date: "August 2024",
    location: "Del Mar, CA",
    guestCount: "40 guests",
    thumbnail: "/images/portfolio/coastal-baby-shower/thumbnail.jpg",
    heroImage: "/images/portfolio/coastal-baby-shower/hero.jpg",
    overview:
      "A refined baby shower celebrating the arrival of a baby girl, inspired by the family's love of the California coast. Soft palettes and organic textures created a serene atmosphere.",
    designIntent:
      "The parents-to-be wanted something that felt calm, refined, and connected to their coastal lifestyle. We created an environment that was sophisticated yet approachable, with soft colors and natural textures that evoked the tranquility of the ocean.",
    signatureDetails: [
      "Custom watercolor invitations depicting their favorite beach",
      "A 'wishes for baby' installation using hand-made paper boats",
      "Ocean-inspired grazing display with locally sourced ingredients",
      "Personalized gift tags with each guest's special message",
    ],
    gallery: [
      { src: "/images/portfolio/coastal-baby-shower/gallery-1.jpg", alt: "Welcome display with coastal elements" },
      { src: "/images/portfolio/coastal-baby-shower/gallery-2.jpg", alt: "Seating arrangement" },
      { src: "/images/portfolio/coastal-baby-shower/gallery-3.jpg", alt: "Paper boat wishes installation" },
      { src: "/images/portfolio/coastal-baby-shower/gallery-4.jpg", alt: "Grazing table detail" },
      { src: "/images/portfolio/coastal-baby-shower/gallery-5.jpg", alt: "Gift table styling" },
      { src: "/images/portfolio/coastal-baby-shower/gallery-6.jpg", alt: "Dessert display" },
    ],
    vendors: [
      { role: "Venue", name: "Private Residence" },
      { role: "Florals", name: "Wild Coast Flowers" },
      { role: "Catering", name: "Graze San Diego" },
      { role: "Calligraphy", name: "Ink & Oak" },
      { role: "Photography", name: "Light & Airy Co." },
    ],
    featured: true,
  },
  {
    slug: "executive-retreat",
    title: "Executive Retreat",
    category: "Corporate",
    tagline: "A multi-day leadership experience designed for connection",
    date: "June 2024",
    location: "Rancho Santa Fe, CA",
    guestCount: "30 executives",
    thumbnail: "/images/portfolio/executive-retreat/thumbnail.jpg",
    heroImage: "/images/portfolio/executive-retreat/hero.jpg",
    overview:
      "A three-day executive retreat for a global company's leadership team, designed to foster strategic thinking and team connection in a refined, distraction-free environment.",
    designIntent:
      "The goal was to create an environment that removed executives from their daily routines and inspired fresh thinking. We balanced productive work sessions with meaningful social experiences, all within a cohesive design language that felt elevated yet comfortable.",
    signatureDetails: [
      "Custom welcome packages with personalized agendas and local treats",
      "Themed evening dinners, each with unique design concepts",
      "Interactive workshop spaces with flexible configurations",
      "Closing ceremony with handwritten notes from team members",
    ],
    gallery: [
      { src: "/images/portfolio/executive-retreat/gallery-1.jpg", alt: "Welcome lounge setup" },
      { src: "/images/portfolio/executive-retreat/gallery-2.jpg", alt: "Workshop space configuration" },
      { src: "/images/portfolio/executive-retreat/gallery-3.jpg", alt: "Evening dinner tablescape" },
      { src: "/images/portfolio/executive-retreat/gallery-4.jpg", alt: "Welcome package detail" },
      { src: "/images/portfolio/executive-retreat/gallery-5.jpg", alt: "Outdoor session area" },
      { src: "/images/portfolio/executive-retreat/gallery-6.jpg", alt: "Closing ceremony" },
    ],
    vendors: [
      { role: "Venue", name: "Rancho Valencia Resort" },
      { role: "Catering", name: "Venue In-House" },
      { role: "Florals", name: "Bloom San Diego" },
      { role: "AV", name: "ProAV Solutions" },
      { role: "Photography", name: "Corporate Images" },
    ],
    featured: false,
  },
  {
    slug: "modern-bridal-shower",
    title: "Modern Bridal Shower",
    category: "Showers",
    tagline: "A contemporary celebration of love and friendship",
    date: "May 2024",
    location: "San Diego, CA",
    guestCount: "25 guests",
    thumbnail: "/images/portfolio/modern-bridal-shower/thumbnail.jpg",
    heroImage: "/images/portfolio/modern-bridal-shower/hero.jpg",
    overview:
      "A modern bridal shower for a design-forward bride, celebrating her upcoming wedding with her closest friends. The aesthetic was clean, contemporary, and full of meaningful personal touches.",
    designIntent:
      "The bride has impeccable taste and a love for modern design. We created an experience that reflected her aesthetic while incorporating deeply personal elements that celebrated her relationships with the guests in attendance.",
    signatureDetails: [
      "Acrylic invitation suite with modern calligraphy",
      "Photo installation featuring the bride with each guest",
      "Custom cocktail menu with drinks named after meaningful moments",
      "Personalized place cards doubling as keepsake bookmarks",
    ],
    gallery: [
      { src: "/images/portfolio/modern-bridal-shower/gallery-1.jpg", alt: "Welcome area with acrylic signage" },
      { src: "/images/portfolio/modern-bridal-shower/gallery-2.jpg", alt: "Table setting with modern florals" },
      { src: "/images/portfolio/modern-bridal-shower/gallery-3.jpg", alt: "Photo installation" },
      { src: "/images/portfolio/modern-bridal-shower/gallery-4.jpg", alt: "Cocktail station" },
      { src: "/images/portfolio/modern-bridal-shower/gallery-5.jpg", alt: "Gift display" },
      { src: "/images/portfolio/modern-bridal-shower/gallery-6.jpg", alt: "Detail shots" },
    ],
    vendors: [
      { role: "Venue", name: "The Luce Loft" },
      { role: "Florals", name: "Native Poppy" },
      { role: "Catering", name: "Toast Catering" },
      { role: "Calligraphy", name: "Modern Letters Co." },
      { role: "Photography", name: "Bright & Bold" },
    ],
    featured: false,
  },
];

// Helper functions
export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured);
}

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioItems.map((item) => item.slug);
}
