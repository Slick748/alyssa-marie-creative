"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Section, Navbar, Footer } from "@/components";
import { inquirePage } from "@/content/site";

export default function InquirePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xdagrgva", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setError(
        "There was an error submitting your inquiry. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <main className="pt-20">
          <Section padding="lg" background="mint-cream">
            <Container>
              <div className="max-w-2xl mx-auto text-center py-20">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg
                    className="w-8 h-8 text-eucalyptus"
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
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-olive-charcoal">
                  {inquirePage.success.heading}
                </h1>
                <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                  {inquirePage.success.message}
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-olive-charcoal text-soft-sand font-sans font-medium tracking-wide transition-all duration-300 hover:bg-eucalyptus"
                >
                  {inquirePage.success.backHome}
                </Link>
              </div>
            </Container>
          </Section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <Section padding="md" background="mint-cream">
          <Container>
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl md:text-5xl text-olive-charcoal">
                {inquirePage.hero.heading}
              </h1>
              <p className="mt-6 text-lg text-taupe-gray leading-relaxed">
                {inquirePage.hero.subheading}
              </p>
            </div>
          </Container>
        </Section>

        {/* Form */}
        <Section padding="lg" background="white">
          <Container>
            <div className="max-w-3xl mx-auto">
              {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* The Basics */}
                <div>
                  <h2 className="font-serif text-2xl text-olive-charcoal mb-8">
                    {inquirePage.form.sections.basics}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="md:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.name.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder={inquirePage.form.fields.name.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.email.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={inquirePage.form.fields.email.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.phone.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={inquirePage.form.fields.phone.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.company.label}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder={inquirePage.form.fields.company.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h2 className="font-serif text-2xl text-olive-charcoal mb-8">
                    {inquirePage.form.sections.eventDetails}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Event Type */}
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.eventType.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal focus:outline-none focus:border-sage transition-colors"
                      >
                        {inquirePage.form.fields.eventType.options.map(
                          (option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    {/* Event Date */}
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.eventDate.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <input
                        type="text"
                        id="eventDate"
                        name="eventDate"
                        required
                        placeholder={inquirePage.form.fields.eventDate.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.location.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        placeholder={inquirePage.form.fields.location.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label
                        htmlFor="guestCount"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.guestCount.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <input
                        type="text"
                        id="guestCount"
                        name="guestCount"
                        required
                        placeholder={inquirePage.form.fields.guestCount.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                      />
                    </div>

                    {/* Budget */}
                    <div className="md:col-span-2">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.budget.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal focus:outline-none focus:border-sage transition-colors"
                      >
                        {inquirePage.form.fields.budget.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Your Vision */}
                <div>
                  <h2 className="font-serif text-2xl text-olive-charcoal mb-8">
                    {inquirePage.form.sections.vision}
                  </h2>
                  <div className="space-y-6">
                    {/* Vision */}
                    <div>
                      <label
                        htmlFor="vision"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.vision.label}{" "}
                        <span className="text-eucalyptus">*</span>
                      </label>
                      <textarea
                        id="vision"
                        name="vision"
                        required
                        rows={4}
                        placeholder={inquirePage.form.fields.vision.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors resize-none"
                      />
                    </div>

                    {/* Guest Experience */}
                    <div>
                      <label
                        htmlFor="guestExperience"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.guestExperience.label}
                      </label>
                      <textarea
                        id="guestExperience"
                        name="guestExperience"
                        rows={3}
                        placeholder={
                          inquirePage.form.fields.guestExperience.placeholder
                        }
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors resize-none"
                      />
                    </div>

                    {/* Why Us */}
                    <div>
                      <label
                        htmlFor="whyUs"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.whyUs.label}
                      </label>
                      <textarea
                        id="whyUs"
                        name="whyUs"
                        rows={3}
                        placeholder={inquirePage.form.fields.whyUs.placeholder}
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors resize-none"
                      />
                    </div>

                    {/* Inspiration */}
                    <div>
                      <label
                        htmlFor="inspiration"
                        className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                      >
                        {inquirePage.form.fields.inspiration.label}
                      </label>
                      <textarea
                        id="inspiration"
                        name="inspiration"
                        rows={3}
                        placeholder={
                          inquirePage.form.fields.inspiration.placeholder
                        }
                        className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* How Did You Find Us */}
                <div>
                  <h2 className="font-serif text-2xl text-olive-charcoal mb-8">
                    {inquirePage.form.sections.referral}
                  </h2>
                  <div>
                    <label
                      htmlFor="referral"
                      className="block text-sm font-sans font-medium text-olive-charcoal mb-2"
                    >
                      {inquirePage.form.fields.referral.label}
                    </label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      placeholder={inquirePage.form.fields.referral.placeholder}
                      className="w-full px-4 py-3 border border-warm-stone bg-soft-sand/50 text-olive-charcoal placeholder:text-taupe-gray/60 focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                </div>

                {/* Investment Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="investmentAcknowledged"
                      required
                      className="mt-1 w-5 h-5 border-warm-stone text-sage focus:ring-sage"
                    />
                    <span className="text-sm text-taupe-gray leading-relaxed">
                      {inquirePage.form.investment.label}{" "}
                      <span className="text-eucalyptus">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-olive-charcoal text-soft-sand font-sans font-medium tracking-wide transition-all duration-300 hover:bg-eucalyptus disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? inquirePage.form.submitting
                      : inquirePage.form.submit}
                  </button>
                </div>
              </form>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
