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
    "inline-flex items-center justify-center font-sans font-medium tracking-wide rounded-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Original earth-tone color palette
  const variants = {
    primary:
      "bg-forest text-cream hover:bg-forest-light border border-forest hover:border-forest-light",
    secondary:
      "bg-sage text-cream hover:bg-sage-dark border border-sage hover:border-sage-dark",
    outline:
      "bg-transparent text-forest border-2 border-forest hover:bg-forest hover:text-cream",
    accent:
      "bg-cream text-forest hover:bg-champagne border border-cream hover:border-champagne",
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
