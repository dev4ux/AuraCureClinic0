import type { Metadata } from "next";
import { generalFaqs } from "@/data/faqs";
import { faqSchema, toJsonLdScript } from "@/lib/schema";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { DoctorIntro } from "@/components/home/DoctorIntro";
import { BookingSection } from "@/components/home/BookingSection";
import { PatientStories } from "@/components/home/PatientStories";
import { ClinicShowcase } from "@/components/home/ClinicShowcase";
import { LocationBlock } from "@/components/shared/LocationBlock";
import { FinalCta } from "@/components/shared/FinalCta";
import { FaqSection } from "@/components/home/FaqSection";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqLd = faqSchema(generalFaqs);

  return (
    <>
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdScript(faqLd) }} />
      )}

      <Hero />
      <TrustBar />
      <DoctorIntro />

      {/* One full-width block per area of practice — photograph on one side,
          the category's complete treatment list on the other, sides alternating
          down the page. Muted ground because the doctor intro above ends on a
          deep forest band. */}
      <Section id="services" tone="muted">
        <SectionHeading
          eyebrow="What we treat"
          title="Care, by category"
          description="Hair, skin, laser & aesthetic procedures and classical homeopathy — the four areas this clinic practises in, and every treatment offered under each."
        />
        <div className="mt-10">
          <ServiceCategories />
        </div>
      </Section>

      {/* Patient stories sit here rather than after the booking block: the
          doctor intro ends on a deep forest band and the booking section is
          forest too, so without an ivory section between them the two dark
          grounds merge into one undifferentiated block. */}
      <PatientStories />

      <BookingSection />
      <ClinicShowcase />

      <FaqSection />

      <LocationBlock />
      <FinalCta location="home_final" />
    </>
  );
}
