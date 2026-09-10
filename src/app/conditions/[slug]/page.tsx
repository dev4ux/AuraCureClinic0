import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { conditions, getConditionBySlug } from "@/data/conditions";
import { getConditionGuide } from "@/data/condition-guides";
import { getConditionPageData } from "@/lib/condition-page";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FinalCta } from "@/components/shared/FinalCta";
import { ConditionHero } from "@/components/conditions/ConditionHero";
import { SymptomStrip } from "@/components/conditions/SymptomStrip";
import { ConditionExperience } from "@/components/conditions/ConditionExperience";
import { ContributingFactors } from "@/components/conditions/ContributingFactors";
import { MedicalAttention } from "@/components/conditions/MedicalAttention";
import { ConditionTypes } from "@/components/conditions/ConditionTypes";
import { ConsultationJourney } from "@/components/conditions/ConsultationJourney";
import { DoctorTrust } from "@/components/conditions/DoctorTrust";
import { RelatedConditions } from "@/components/conditions/RelatedConditions";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  if (!condition) return {};

  return {
    title: `${condition.name} — Homeopathic Consultation in Sikar`,
    description: condition.metaDescription,
    alternates: { canonical: `/conditions/${condition.slug}` },
    openGraph: {
      title: `${condition.name} — Aura Cure Clinic, Sikar`,
      description: condition.metaDescription,
      url: `${siteConfig.url}/conditions/${condition.slug}`,
    },
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getConditionPageData(slug);
  if (!condition) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Conditions", href: "/conditions" },
    { name: condition.name, href: `/conditions/${condition.slug}` },
  ];

  const related = condition.relatedSlugs
    .map((s) => getConditionBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      shortDescription: c.shortDescription,
      icon: getConditionGuide(c.slug).icon,
    }));

  const faqLd = faqSchema(condition.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript([
            medicalWebPageSchema({
              url: `${siteConfig.url}/conditions/${condition.slug}`,
              name: condition.name,
              description: condition.metaDescription,
              lastReviewed: condition.lastUpdated,
              aboutConditionName: condition.name,
            }),
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` }))),
            ...(faqLd ? [faqLd] : []),
          ]),
        }}
      />
      <Breadcrumbs items={crumbs} />

      {/* 1 — What is this page about? */}
      <ConditionHero condition={condition} />

      {/* 2 — Could this match what I'm experiencing? */}
      <SymptomStrip cards={condition.experienceCards} conditionName={condition.name} />

      {/* 3 — What does it actually feel like? */}
      <ConditionExperience condition={condition} />

      {/* 4 — What might be involved? */}
      <ContributingFactors factors={condition.contributingFactors} conditionName={condition.name} />

      {/* 5 — Which pattern fits me? (omitted where a condition has no types) */}
      <ConditionTypes types={condition.types} conditionName={condition.name} />

      {/* 6 — When should I get medical attention? */}
      <MedicalAttention points={condition.whenToSeekEvaluation} />

      {/* 7 — What will the doctor actually do? */}
      <ConsultationJourney
        steps={condition.consultationSteps}
        conditionName={condition.name}
        whatToExpect={condition.whatToExpect}
        slug={condition.slug}
      />

      {/* 8 — Who will I be speaking with? */}
      <DoctorTrust conditionName={condition.name} lastUpdated={condition.lastUpdated} />

      {/* 9 — What else do I need to know? */}
      <section aria-labelledby="faq-heading" className="border-t border-border bg-ivory-muted py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 id="faq-heading" className="text-balance text-2xl sm:text-3xl">
              Questions patients ask
            </h2>
            <div className="mt-8">
              <FaqAccordion items={condition.faqs} />
            </div>

            <aside className="mt-10 rounded-lg border-l-2 border-charcoal-faint/40 bg-ivory px-6 py-5">
              <h3 className="text-sm font-semibold text-charcoal">Medical disclaimer</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                This page is general information for patient awareness, not medical advice for your specific situation.
                It cannot replace an in-person consultation. Individual response to any treatment varies, and no outcome
                is guaranteed. Do not stop prescribed medication without consulting the prescribing doctor.
              </p>
            </aside>
          </div>
        </Container>
      </section>

      {/* 10 — Where else can I look? */}
      <RelatedConditions items={related} />

      {/* 11 — What should I do next? */}
      <FinalCta
        heading="Not sure what's causing your symptoms?"
        body={`Start with a consultation and discuss what you're experiencing with the doctor. You don't need a diagnosis before booking.`}
        location={`condition_${condition.slug}_final`}
      />
    </>
  );
}
