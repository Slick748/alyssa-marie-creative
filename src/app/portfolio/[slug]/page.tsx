import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Button, Navbar, Footer, GalleryGrid, ClientImage } from "@/components";
import { inquireLink } from "@/content/site";
import {
  getPortfolioBySlug,
  getAllPortfolioSlugs,
  portfolioItems,
} from "@/content/portfolio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${item.title} | Portfolio`,
    description: item.tagline,
    openGraph: {
      title: `${item.title} | Alyssa Marie Creative Design`,
      description: item.tagline,
      images: [item.heroImage],
    },
  };
}

export default async function PortfolioCaseStudy({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    notFound();
  }

  // Get next/prev projects for navigation
  const currentIndex = portfolioItems.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? portfolioItems[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioItems.length - 1
      ? portfolioItems[currentIndex + 1]
      : null;

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section padding="none" background="mint-cream">
          <div className="relative h-[60vh] md:h-[70vh]">
            <div className="absolute inset-0 bg-warm-stone" />
            <ClientImage
              src={item.heroImage}
              alt={item.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-olive-charcoal/60 to-transparent" />
            {/* Content */}
            <Container className="relative h-full flex items-end pb-12">
              <div className="text-soft-sand">
                <span className="text-sm font-sans tracking-wider uppercase text-champagne">
                  {item.category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl text-warm-stone mt-4 max-w-2xl">
                  {item.tagline}
                </p>
              </div>
            </Container>
          </div>
        </Section>

        {/* Quick Facts */}
        <Section padding="md" background="white">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <span className="text-xs font-sans tracking-wider uppercase text-eucalyptus">
                  Date
                </span>
                <p className="mt-2 text-olive-charcoal">{item.date}</p>
              </div>
              <div>
                <span className="text-xs font-sans tracking-wider uppercase text-eucalyptus">
                  Location
                </span>
                <p className="mt-2 text-olive-charcoal">{item.location}</p>
              </div>
              <div>
                <span className="text-xs font-sans tracking-wider uppercase text-eucalyptus">
                  Guests
                </span>
                <p className="mt-2 text-olive-charcoal">{item.guestCount}</p>
              </div>
              <div>
                <span className="text-xs font-sans tracking-wider uppercase text-eucalyptus">
                  Category
                </span>
                <p className="mt-2 text-olive-charcoal">{item.category}</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Overview */}
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl text-olive-charcoal">
                The Event
              </h2>
              <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                {item.overview}
              </p>
            </div>
          </Container>
        </Section>

        {/* Design Intent */}
        <Section padding="lg" background="white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl text-olive-charcoal">
                  Design Intent
                </h2>
                <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                  {item.designIntent}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-olive-charcoal">
                  Signature Details
                </h3>
                <ul className="mt-6 space-y-4">
                  {item.signatureDetails.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-taupe-gray"
                    >
                      <svg
                        className="w-5 h-5 text-sage mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Gallery */}
        <Section padding="lg" background="mint-light">
          <Container>
            <h2 className="font-serif text-3xl text-olive-charcoal mb-8">
              Gallery
            </h2>
            <GalleryGrid images={item.gallery} columns={3} />
          </Container>
        </Section>

        {/* Vendor Credits */}
        <Section padding="lg" background="white">
          <Container>
            <h2 className="font-serif text-3xl text-olive-charcoal mb-8">
              Creative Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {item.vendors.map((vendor, index) => (
                <div key={index}>
                  <span className="text-xs font-sans tracking-wider uppercase text-eucalyptus">
                    {vendor.role}
                  </span>
                  <p className="mt-1 text-olive-charcoal">
                    {vendor.link ? (
                      <a
                        href={vendor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-eucalyptus transition-colors"
                      >
                        {vendor.name}
                      </a>
                    ) : (
                      vendor.name
                    )}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Project Navigation */}
        <Section padding="md" background="mint-cream">
          <Container>
            <div className="flex items-center justify-between">
              {prevProject ? (
                <Link
                  href={`/portfolio/${prevProject.slug}`}
                  className="group flex items-center gap-3 text-olive-charcoal hover:text-eucalyptus transition-colors"
                >
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  <span className="font-sans text-sm">Previous Project</span>
                </Link>
              ) : (
                <div />
              )}
              <Link
                href="/portfolio"
                className="font-sans text-sm text-olive-charcoal hover:text-eucalyptus transition-colors"
              >
                All Projects
              </Link>
              {nextProject ? (
                <Link
                  href={`/portfolio/${nextProject.slug}`}
                  className="group flex items-center gap-3 text-olive-charcoal hover:text-eucalyptus transition-colors"
                >
                  <span className="font-sans text-sm">Next Project</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section padding="lg" background="sage">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-soft-sand">
                Ready to create your own unforgettable event?
              </h2>
              <p className="mt-6 text-lg text-warm-stone leading-relaxed">
                Let&apos;s bring your vision to life with the same care and
                attention to detail.
              </p>
              <Button
                href={inquireLink}
                variant="secondary"
                size="lg"
                className="mt-8"
              >
                Start Your Inquiry
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
