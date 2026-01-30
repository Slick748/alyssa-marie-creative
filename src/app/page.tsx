import Link from "next/link";
import {
  Container,
  Section,
  Button,
  Navbar,
  Footer,
  TestimonialList,
  PortfolioCard,
  ClientImage,
} from "@/components";
import { homePage } from "@/content/site";
import { getFeaturedPortfolio } from "@/content/portfolio";

export default function HomePage() {
  const featuredWork = getFeaturedPortfolio();

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]">
              {/* Content */}
              <div className="animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
                  {homePage.hero.heading}
                </h1>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-text-body leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {homePage.hero.subheading}
                </p>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                  <Button href={homePage.hero.cta1Link} variant="primary" size="lg">
                    {homePage.hero.cta1}
                  </Button>
                  <Button href={homePage.hero.cta2Link} variant="outline" size="lg">
                    {homePage.hero.cta2}
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] animate-fade-in animation-delay-200 order-1 lg:order-2">
                <div className="absolute inset-0 bg-mint rounded-sm overflow-hidden">
                  <ClientImage
                    src="/images/hero.jpg"
                    alt="Elegant event design by Alyssa Marie Creative Design"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Brand Statement */}
        <Section padding="lg" background="white">
          <Container>
            <div className="max-w-3xl mx-auto text-center px-4">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
                {homePage.brandStatement.heading}
              </h2>
              <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                {homePage.brandStatement.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-text-body leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* About Preview - Moved here after Brand Statement */}
        <Section padding="lg" background="mint-light">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-[4/5] order-2 lg:order-1">
                <div className="absolute inset-0 bg-mint rounded-sm overflow-hidden">
                  <ClientImage
                    src="/images/about.jpg"
                    alt="Alyssa Marie - Event Designer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
                  {homePage.aboutPreview.heading}
                </h2>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-text-body leading-relaxed">
                  {homePage.aboutPreview.text}
                </p>
                <Button
                  href={homePage.aboutPreview.link}
                  variant="outline"
                  className="mt-6 md:mt-8"
                >
                  {homePage.aboutPreview.linkText}
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Services Preview */}
        <Section padding="lg" background="white">
          <Container>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal text-center mb-8 md:mb-12">
              {homePage.servicesPreview.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {homePage.servicesPreview.services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="group bg-mint-light p-6 md:p-8 transition-all duration-300 hover:shadow-lg border border-sage/10 hover:border-sage/30 rounded-sm"
                >
                  <h3 className="font-serif text-lg md:text-xl text-charcoal group-hover:text-sage-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 md:mt-4 text-text-body leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 md:mt-6 text-sm font-sans text-sage-dark group-hover:text-terracotta transition-colors">
                    Learn More
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
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Featured Work */}
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
                {homePage.featuredWork.heading}
              </h2>
              <Link
                href={homePage.featuredWork.viewAllLink}
                className="hidden sm:inline-flex items-center gap-2 text-sm font-sans text-sage-dark hover:text-terracotta transition-colors"
              >
                {homePage.featuredWork.viewAll}
                <svg
                  className="w-4 h-4"
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
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredWork.map((item) => (
                <PortfolioCard key={item.slug} item={item} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button href={homePage.featuredWork.viewAllLink} variant="outline">
                {homePage.featuredWork.viewAll}
              </Button>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section padding="lg" background="white">
          <Container>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal text-center mb-8 md:mb-12">
              {homePage.testimonials.heading}
            </h2>
            <TestimonialList testimonials={homePage.testimonials.items} />
          </Container>
        </Section>

        {/* Final CTA */}
        <Section padding="lg" background="sage">
          <Container>
            <div className="max-w-2xl mx-auto text-center px-4">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream">
                {homePage.finalCta.heading}
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-mint-light leading-relaxed">
                {homePage.finalCta.subheading}
              </p>
              <Button
                href={homePage.finalCta.buttonLink}
                variant="accent"
                size="lg"
                className="mt-6 md:mt-8"
              >
                {homePage.finalCta.buttonText}
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
