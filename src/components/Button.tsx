import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide rounded-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-sage focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // All colors from the 6-color palette:
  // #6D8682 - Dusty Teal, #88996E - Olive Sage, #BDD19E - Light Sage
  // #B1C9CA - Dusty Blue, #E4D2C0 - Warm Beige, #B89068 - Warm Tan
  const variants = {
    primary:
      "bg-dusty-teal text-warm-beige hover:bg-olive-sage border border-dusty-teal hover:border-olive-sage",
    secondary:
      "bg-olive-sage text-warm-beige hover:bg-dusty-teal border border-olive-sage hover:border-dusty-teal",
    outline:
      "bg-transparent text-dusty-teal border-2 border-dusty-teal hover:bg-dusty-teal hover:text-warm-beige",
    accent:
      "bg-warm-tan text-warm-beige hover:bg-olive-sage border border-warm-tan hover:border-olive-sage",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Check if link is external (mailto, http, https)
  const isExternal = href && (href.startsWith("mailto:") || href.startsWith("http"));

  if (href) {
    // Use regular anchor for external links
    if (isExternal) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }
    // Use Next.js Link for internal links
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
