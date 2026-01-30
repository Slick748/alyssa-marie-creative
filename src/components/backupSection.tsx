interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "mint-cream" | "mint-light" | "mint" | "white" | "sage" | "forest" | "cream";
  padding?: "none" | "sm" | "md" | "lg";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "mint-cream",
  padding = "lg",
  id,
}: SectionProps) {
  const backgrounds = {
    "mint-cream": "bg-mint-cream",
    "mint-light": "bg-mint-light",
    "mint": "bg-mint",
    "white": "bg-white",
    "cream": "bg-cream",
    "sage": "bg-sage text-cream",
    "forest": "bg-forest text-cream",
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
