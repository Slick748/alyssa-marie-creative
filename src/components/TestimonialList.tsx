"use client";

import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  event: string;
}

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative px-4">
      {/* Testimonial Display */}
      <div className="max-w-3xl mx-auto text-center">
        {/* Quote Icon - Olive Sage */}
        <svg
          className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8 text-olive-sage/60"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Quote Text - Dusty Teal */}
        <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-dusty-teal leading-relaxed mb-6 md:mb-8 transition-opacity duration-300">
          &ldquo;{testimonials[activeIndex].quote}&rdquo;
        </blockquote>

        {/* Author - Dusty Teal */}
        <div className="font-sans">
          <p className="font-medium text-dusty-teal">
            {testimonials[activeIndex].author}
          </p>
          <p className="text-sm text-olive-sage mt-1">
            {testimonials[activeIndex].event}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
        <button
          onClick={goToPrevious}
          className="p-2 text-olive-sage hover:text-dusty-teal transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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

        {/* Dots - Olive Sage */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex
                  ? "bg-olive-sage"
                  : "bg-olive-sage/30 hover:bg-olive-sage/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 text-olive-sage hover:text-dusty-teal transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
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
      </div>
    </div>
  );
}
