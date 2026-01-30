import type { Metadata } from "next";
import { Container, Section, Button, Navbar, Footer, ClientImage } from "@/components";
import { aboutPage } from "@/content/site";

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
  openGraph: {
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl text-olive-charcoal leading-tight">
                  {aboutPage.hero.heading}
                </h1>
                <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                  {aboutPage.content.intro}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5]">
                <div className="absolute inset-0 bg-warm-stone" />
                <ClientImage
                  src="/images/about-hero.jpg"
                  alt="Alyssa Marie - Event Designer in San Diego"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Story */}
        <Section padding="lg" background="white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {aboutPage.content.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-taupe-gray leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Philosophy */}
        <Section padding="lg" background="mint-light">
          <Container>
            <h2 className="font-serif text-3xl md:text-4xl text-olive-charcoal text-center mb-12">
              {aboutPage.content.philosophy.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutPage.content.philosophy.items.map((item, index) => (
                <div key={index} className="bg-soft-sand p-8">
                  <h3 className="font-serif text-xl text-olive-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-taupe-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Closing */}
        <Section padding="lg" background="white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-taupe-gray leading-relaxed">
                {aboutPage.content.closing}
              </p>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section padding="lg" background="sage">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-soft-sand">
                {aboutPage.cta.heading}
              </h2>
              <Button
                href={aboutPage.cta.buttonLink}
                variant="secondary"
                size="lg"
                className="mt-8"
              >
                {aboutPage.cta.buttonText}
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
