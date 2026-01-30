interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "warm-beige" | "dusty-blue" | "light-sage" | "olive-sage" | "dusty-teal" | "white" | "mint-cream" | "mint-light" | "mint" | "sage" | "forest" | "cream";
  padding?: "none" | "sm" | "md" | "lg";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "warm-beige",
  padding = "lg",
  id,
}: SectionProps) {
  // All backgrounds map to our 6 colors:
  // #6D8682 - Dusty Teal, #88996E - Olive Sage, #BDD19E - Light Sage
  // #B1C9CA - Dusty Blue, #E4D2C0 - Warm Beige, #B89068 - Warm Tan
  const backgrounds: Record<string, string> = {
    // New color names (preferred)
    "warm-beige": "bg-warm-beige text-dusty-teal",
    "dusty-blue": "bg-dusty-blue text-dusty-teal",
    "light-sage": "bg-light-sage text-dusty-teal",
    "olive-sage": "bg-olive-sage text-warm-beige",
    "dusty-teal": "bg-dusty-teal text-warm-beige",
    // Legacy names (mapped to new colors)
    "mint-cream": "bg-warm-beige text-dusty-teal",
    "mint-light": "bg-dusty-blue text-dusty-teal",
    "mint": "bg-light-sage text-dusty-teal",
    "white": "bg-warm-beige text-dusty-teal",
    "cream": "bg-warm-beige text-dusty-teal",
    "sage": "bg-olive-sage text-warm-beige",
    "forest": "bg-dusty-teal text-warm-beige",
  };

  const paddings = {
    none: "",
    sm: "py-8 md:py-12 lg:py-16",
    md: "py-12 md:py-16 lg:py-20",
    lg: "py-16 md:py-20 lg:py-28",
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
