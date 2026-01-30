import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alyssamariecreative.com"),
  title: {
    default: "Alyssa Marie Creative Design | Chic Event Design in San Diego",
    template: "%s | Alyssa Marie Creative Design",
  },
  description:
    "Chic, modern, highly personalized event design studio based in San Diego specializing in elevated corporate and social celebrations.",
  keywords: [
    "event design San Diego",
    "corporate event design San Diego",
    "luxury event planner San Diego",
    "birthday event design San Diego",
    "shower event design San Diego",
    "experiential event design",
    "boutique event design",
    "San Diego event designer",
  ],
  authors: [{ name: "Alyssa Marie Creative Design" }],
  creator: "Alyssa Marie Creative Design",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alyssamariecreative.com",
    siteName: "Alyssa Marie Creative Design",
    title: "Alyssa Marie Creative Design | Chic Event Design in San Diego",
    description:
      "Chic, modern, highly personalized event design studio based in San Diego specializing in elevated corporate and social celebrations.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alyssa Marie Creative Design - Chic Event Design in San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alyssa Marie Creative Design | Chic Event Design in San Diego",
    description:
      "Chic, modern, highly personalized event design studio based in San Diego specializing in elevated corporate and social celebrations.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://alyssamariecreative.com/#business",
      name: "Alyssa Marie Creative Design",
      description:
        "Boutique event design studio specializing in chic, modern, highly personalized corporate and social celebrations in San Diego.",
      url: "https://alyssamariecreative.com",
      telephone: "",
      email: "hello@alyssamariecreative.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.7157,
        longitude: -117.1611,
      },
      areaServed: {
        "@type": "City",
        name: "San Diego",
      },
      priceRange: "$$$",
      image: "https://alyssamariecreative.com/images/og-image.jpg",
    },
    {
      "@type": "Service",
      "@id": "https://alyssamariecreative.com/#corporate-events",
      name: "Corporate Event Design",
      description:
        "Elevated corporate event design including concept development, spatial design, custom builds, and vendor collaboration.",
      provider: {
        "@id": "https://alyssamariecreative.com/#business",
      },
      areaServed: {
        "@type": "City",
        name: "San Diego",
      },
    },
    {
      "@type": "Service",
      "@id": "https://alyssamariecreative.com/#social-events",
      name: "Social Event Design",
      description:
        "Upscale social event design for birthdays, showers, and celebrations with personalized guest experiences.",
      provider: {
        "@id": "https://alyssamariecreative.com/#business",
      },
      areaServed: {
        "@type": "City",
        name: "San Diego",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts - Playfair Display (logo), Cormorant Garamond (headings), Inter (body) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-soft-sand text-olive-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
