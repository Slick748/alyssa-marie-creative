import type { Metadata } from "next";
import { Container, Section, Button, Navbar, Footer, PortfolioCard } from "@/components";
import { portfolioPage, inquireLink } from "@/content/site";
import { portfolioItems } from "@/content/portfolio";

export const metadata: Metadata = {
  title: portfolioPage.seo.title,
  description: portfolioPage.seo.description,
  openGraph: {
    title: portfolioPage.seo.title,
    description: portfolioPage.seo.description,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl text-olive-charcoal">
                {portfolioPage.hero.heading}
              </h1>
              <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                {portfolioPage.hero.subheading}
              </p>
            </div>
          </Container>
        </Section>

        {/* Portfolio Grid */}
        <Section padding="lg" background="white">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {portfolioItems.map((item) => (
                <PortfolioCard key={item.slug} item={item} />
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section padding="lg" background="sage">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-soft-sand">
                Ready to design your event?
              </h2>
              <p className="mt-6 text-lg text-warm-stone leading-relaxed">
                Let&apos;s create something unforgettable together.
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
