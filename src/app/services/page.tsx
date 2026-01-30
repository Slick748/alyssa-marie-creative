import type { Metadata } from "next";
import { Container, Section, Button, Navbar, Footer } from "@/components";
import { servicesPage } from "@/content/site";

export const metadata: Metadata = {
  title: servicesPage.seo.title,
  description: servicesPage.seo.description,
  openGraph: {
    title: servicesPage.seo.title,
    description: servicesPage.seo.description,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl md:text-5xl text-olive-charcoal leading-tight">
                {servicesPage.hero.heading}
              </h1>
              <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                {servicesPage.hero.subheading}
              </p>
            </div>
          </Container>
        </Section>

        {/* Services */}
        {servicesPage.services.map((service, index) => (
          <Section
            key={service.id}
            id={service.id}
            padding="lg"
            background={index % 2 === 0 ? "white" : "mint-light"}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Content */}
                <div>
                  <span className="text-xs font-sans tracking-wider uppercase text-eucalyptus">
                    {service.tagline}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-olive-charcoal mt-4">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Includes List */}
                <div className="lg:pt-12">
                  <h3 className="font-sans text-sm font-medium tracking-wider uppercase text-olive-charcoal mb-6">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {service.includes.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </Section>
        ))}

        {/* Investment */}
        <Section padding="lg" background="sage">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-soft-sand">
                {servicesPage.investment.heading}
              </h2>
              <p className="mt-6 text-lg text-warm-stone leading-relaxed">
                {servicesPage.investment.text}
              </p>
              <Button
                href={servicesPage.investment.ctaLink}
                variant="secondary"
                size="lg"
                className="mt-8"
              >
                {servicesPage.investment.cta}
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
