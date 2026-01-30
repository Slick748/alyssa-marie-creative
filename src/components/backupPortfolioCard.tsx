"use client";

import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/content/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block"
    >
      <article>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-mint rounded-sm mb-4">
          {/* Placeholder background */}
          <div className="absolute inset-0 bg-mint" />
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div>
          {/* Category */}
          <span className="text-xs font-sans tracking-wider uppercase text-terracotta font-medium">
            {item.category}
          </span>

          {/* Title */}
          <h3 className="font-serif text-lg md:text-xl text-charcoal mt-2 group-hover:text-sage-dark transition-colors">
            {item.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-text-body mt-2 line-clamp-2">
            {item.tagline}
          </p>

          {/* View Project Link */}
          <span className="inline-flex items-center gap-2 text-sm font-sans text-sage-dark mt-4 group-hover:text-terracotta transition-colors">
            View Project
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
