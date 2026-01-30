import Link from "next/link";
import { Container, Section, Navbar, Footer } from "@/components";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Section padding="lg" background="mint-cream">
          <Container>
            <div className="max-w-2xl mx-auto text-center py-20">
              <h1 className="font-serif text-6xl md:text-8xl text-sage/40">
                404
              </h1>
              <h2 className="font-serif text-2xl md:text-3xl text-olive-charcoal mt-6">
                Page Not Found
              </h2>
              <p className="mt-4 text-lg text-taupe-gray">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-olive-charcoal text-soft-sand font-sans font-medium tracking-wide transition-all duration-300 hover:bg-eucalyptus"
              >
                Return Home
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
