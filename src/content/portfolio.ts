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
    slug: "royal-holiday-party",
    title: "Royal Holiday Party",
    category: "Corporate",
    tagline: "An elegant corporate holiday celebration with festive sophistication",
    date: "December 2024",
    location: "San Diego, CA",
    guestCount: "100+ guests",
    thumbnail: "/images/portfolio/royal-holiday-party/thumbnail.jpg",
    heroImage: "/images/portfolio/royal-holiday-party/hero.jpg",
    overview:
      "A festive corporate holiday party designed for Royal Property Management Group, blending classic holiday elegance with thoughtful personal touches. From custom welcome signage to curated raffle experiences, every detail was crafted to make team members feel celebrated and appreciated.",
    designIntent:
      "The vision was to create a warm, sophisticated holiday atmosphere that felt elevated yet genuinely festive. Rich reds, golds, and deep greens set the tone, while personalized elements like custom drink tickets, welcome cards, and themed raffle baskets added layers of thoughtfulness that turned a company party into an unforgettable experience.",
    signatureDetails: [
      "Custom ornament centerpieces on gold charger plates at every table",
      "Personalized welcome cards with event timeline and raffle tickets in emerald envelopes",
      "Curated themed raffle baskets including 'Taste of Italy' and 'Paint & Sip' experiences",
      "Hand-designed welcome signage with festive ornament and gold star accents",
      "Holiday floral centerpieces with red roses, greenery, and ornament details",
      "Branded custom cookies at each place setting",
    ],
    gallery: [
      { src: "/images/portfolio/royal-holiday-party/gallery-1.jpg", alt: "Decorated Christmas tree in venue entrance with garland and warm lighting" },
      { src: "/images/portfolio/royal-holiday-party/gallery-2.jpg", alt: "Gold and red ornament centerpiece on charger plate" },
      { src: "/images/portfolio/royal-holiday-party/gallery-3.jpg", alt: "Royal Holiday Party welcome sign with ornament accents" },
      { src: "/images/portfolio/royal-holiday-party/gallery-4.jpg", alt: "Welcome card, drink tickets, and personalized raffle tickets in emerald envelope" },
      { src: "/images/portfolio/royal-holiday-party/gallery-5.jpg", alt: "Taste of Italy themed raffle basket with pasta maker and cookbook" },
      { src: "/images/portfolio/royal-holiday-party/gallery-6.jpg", alt: "Paint and Sip raffle display with art supplies and gift card" },
    ],
    vendors: [
      { role: "Event Design", name: "Alyssa Marie Creative Design" },
      { role: "Client", name: "Royal Property Management Group" },
    ],
    featured: true,
  },
  {
    slug: "blush-pumpkin-shower",
    title: "Blush Pumpkin Shower",
    category: "Showers",
    tagline: "A romantic fall baby shower with soft blush tones and elegant details",
    date: "October 2024",
    location: "San Diego, CA",
    guestCount: "30 guests",
    thumbnail: "/images/portfolio/blush-pumpkin-shower/thumbnail.jpg",
    heroImage: "/images/portfolio/blush-pumpkin-shower/hero.jpg",
    overview:
      "A beautifully styled fall baby shower celebrating a mom-to-be with soft blush tones, white pumpkin centerpieces, and romantic floral arrangements. The design married autumn warmth with feminine elegance for an intimate celebration that felt both seasonal and timeless.",
    designIntent:
      "We wanted to capture the magic of fall without leaning into the typical rustic aesthetic. Instead, we paired white pumpkins with blush roses, soft pink cheesecloth runners, and ornate gold-rimmed place settings to create something that felt romantic, refined, and perfectly in season. Every table element was carefully layered to feel abundant yet cohesive.",
    signatureDetails: [
      "White pumpkin vases overflowing with blush and mauve roses",
      "Soft pink cheesecloth table runners for texture and warmth",
      "Ornate gold-rimmed blush plates with vintage-inspired detailing",
      "Gold flatware sets on embossed napkins at each setting",
      "Mini white pumpkins scattered along the tablescape",
      "Gold-rimmed glassware and votive candles for ambient warmth",
    ],
    gallery: [
      { src: "/images/portfolio/blush-pumpkin-shower/gallery-1.jpg", alt: "Full tablescape with blush runner, pumpkin centerpieces, and elegant place settings" },
      { src: "/images/portfolio/blush-pumpkin-shower/gallery-2.jpg", alt: "White pumpkin centerpiece with blush and mauve rose arrangement" },
    ],
    vendors: [
      { role: "Event Design", name: "Alyssa Marie Creative Design" },
    ],
    featured: true,
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
