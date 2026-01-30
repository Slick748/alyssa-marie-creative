"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3;
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] overflow-hidden bg-warm-stone group cursor-pointer"
          >
            {/* Placeholder while image loads */}
            <div className="absolute inset-0 bg-warm-stone animate-pulse" />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={(e) => {
                // Show placeholder on error
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-olive-charcoal/0 group-hover:bg-olive-charcoal/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-olive-charcoal/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-soft-sand hover:text-champagne transition-colors"
            aria-label="Close lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 text-soft-sand hover:text-champagne transition-colors"
            aria-label="Previous image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full max-w-5xl h-[80vh] mx-16">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 text-soft-sand hover:text-champagne transition-colors"
            aria-label="Next image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-soft-sand text-sm font-sans">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
