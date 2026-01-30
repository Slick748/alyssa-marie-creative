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
        <div className="relative aspect-[4/3] overflow-hidden bg-light-sage rounded-sm mb-4">
          {/* Placeholder background - using Light Sage #BDD19E */}
          <div className="absolute inset-0 bg-light-sage" />
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
          {/* Hover Overlay - using Dusty Teal #6D8682 */}
          <div className="absolute inset-0 bg-dusty-teal/0 group-hover:bg-dusty-teal/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div>
          {/* Category - using Warm Tan #B89068 */}
          <span className="text-xs font-sans tracking-wider uppercase text-warm-tan font-medium">
            {item.category}
          </span>

          {/* Title - using Dusty Teal #6D8682 */}
          <h3 className="font-serif text-lg md:text-xl text-dusty-teal mt-2 group-hover:text-olive-sage transition-colors">
            {item.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-dusty-teal mt-2 line-clamp-2">
            {item.tagline}
          </p>

          {/* View Project Link - using Olive Sage #88996E */}
          <span className="inline-flex items-center gap-2 text-sm font-sans text-olive-sage mt-4 group-hover:text-warm-tan transition-colors">
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
