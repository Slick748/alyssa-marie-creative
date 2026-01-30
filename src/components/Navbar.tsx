"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { navigation } from "@/content/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("mailto:")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isExternal = (href: string) => {
    return href.startsWith("mailto:") || href.startsWith("http");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-beige/95 backdrop-blur-sm border-b border-olive-sage/20">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="Alyssa Marie Creative Design"
              width={200}
              height={60}
              className="h-[60px] md:h-[72px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => 
              isExternal(item.href) ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-sans tracking-wide transition-colors text-dusty-teal hover:text-warm-tan"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-sm font-sans tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-olive-sage font-medium"
                      : "text-dusty-teal hover:text-warm-tan"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-dusty-teal hover:text-olive-sage transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-warm-beige border-t border-olive-sage/20 shadow-lg">
          <Container>
            <div className="py-4 space-y-1">
              {navigation.map((item) =>
                isExternal(item.href) ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-base font-sans tracking-wide transition-colors text-dusty-teal hover:text-warm-tan"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block py-3 text-base font-sans tracking-wide transition-colors ${
                      isActive(item.href)
                        ? "text-olive-sage font-medium"
                        : "text-dusty-teal hover:text-warm-tan"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
