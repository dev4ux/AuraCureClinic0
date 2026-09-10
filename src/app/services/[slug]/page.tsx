import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { allServices, getServiceBySlug } from "@/data/services";
import { serviceCategories } from "@/data/service-categories";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, faqSchema, servicePageSchema, toJsonLdScript } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { MedicalReviewNotice } from "@/components/shared/MedicalReviewNotice";
import { LocalRelevance } from "@/components/shared/LocalRelevance";
import { ArrowRightIcon, CalendarIcon } from "@/components/ui/icons";
import {
  ServiceHero,
  SectionHeader,
  ProcessStrip,
  BenefitGrid,
  DetailsBar,
  ChecklistPanel,
  DoctorPanel,
  ClinicEnvironmentShowcase,
  QuestionsPanel,
} from "@/components/services/ServicePageParts";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  /* Local-first title. The brand is appended by the root layout's title
     template, so it must not be repeated here. Leading with the service name
     and city keeps both inside the ~60 characters a search result shows. */
  const locality = siteConfig.address.locality;
  const title = `${service.name} in ${locality}`;

  const keywords = [
    ...service.searchTerms,
    ...(service.alsoKnownAs ?? []),
    `${service.name} in ${locality}`,
    `${service.name} clinic in ${locality}`,
    `best ${service.name} in ${locality}`,
    locality,
    siteConfig.address.region,
  ];

  return {
    title,
    description: service.metaDescription,
    keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.brand,
      locale: "en_IN",
      type: "article",
    },
  };
}

/**
 * Service page.
 *
 * One template for all thirty-one services. Content comes entirely from
 * ServiceContent, so a new service is a data entry rather than a new page —
 * and every section here degrades on its own when the data for it is absent.
 *
 * The order follows how a patient actually reads: what it is and how it works
 * before whether it suits them, the procedure before the precautions, and the
 * local block last, once they have decided they want it.
 */
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const category = serviceCategories.find((c) => c.id === service.category);
  const related = (service.relatedSlugs ?? [])
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const locality = siteConfig.address.locality;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "All Services", href: "/services" },
    ...(category ? [{ name: category.name, href: `/services#category-${category.id}` }] : []),
    { name: service.name, href: `/services/${service.slug}` },
  ];

  /* A local-intent FAQ is appended rather than written into all 31 service
     files — it says the same thing on every page, so duplicating it into the
     data would be 31 copies to keep in step. Generated once, here. */
  const faqs = [
    ...service.faqs,
    {
      question: `Where can I get ${service.name} in ${locality}?`,
      answer: `At Aura Cure Clinic on Bajaj Road, opposite Jain School and Vardhman School in ${locality}, ${siteConfig.address.region}. Consultations are with ${siteConfig.doctor.name}, ${siteConfig.doctor.credentials}, by appointment — ${siteConfig.hours.display.toLowerCase()}. Call ${siteConfig.contact.phoneDisplay} to ask whether it is appropriate for your case before booking.`,
    },
  ];

  const faqLd = faqSchema(faqs);
  const serviceLd = servicePageSchema({
    url: `${siteConfig.url}/services/${service.slug}`,
    name: `${service.name} in ${locality}`,
    description: service.overview,
    lastReviewed: service.lastUpdated,
    alternateNames: service.alsoKnownAs,
    category: category?.name ?? "Medical Service",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript([
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` }))),
            serviceLd,
            ...(faqLd ? [faqLd] : []),
          ]),
        }}
      />

      <ServiceHero
        service={service}
        categoryName={category?.name}
        categoryImage={category?.image}
        crumbs={crumbs}
      />

      {/* ---- What it is + how it works + the procedure ---- */}
      <section className="bg-ivory py-14 sm:py-18 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={`About ${service.name}`}
              title={`What is ${service.name}?`}
              intro={service.howItWorks}
            />
          </Reveal>

          <Reveal delay={80} className="mt-10 lg:mt-12">
            <ProcessStrip steps={service.procedure} />
          </Reveal>

          {service.clinicalNotes && (
            <Reveal delay={120}>
              <div className="mx-auto mt-8 max-w-3xl rounded-lg border-l-2 border-accent-500 bg-ivory-muted px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-accent-600">Clinical note</p>
                <p className="mt-2 text-[15px] leading-relaxed text-charcoal-soft">{service.clinicalNotes}</p>
              </div>
            </Reveal>
          )}

          <Reveal delay={140} className="mt-10 lg:mt-12">
            <DetailsBar service={service} />
          </Reveal>
        </Container>
      </section>

      {/* ---- What it addresses ---- */}
      <section className="bg-ivory-muted py-14 sm:py-18 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="What it addresses"
              title={`Why patients consider ${service.name}`}
              intro="These describe what the treatment is used for, not what it will achieve. Individual response varies and no specific outcome is promised."
            />
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <BenefitGrid items={service.benefits} />
          </Reveal>
        </Container>
      </section>

      {/* ---- Suitability + doctor ---- */}
      <section className="bg-ivory py-14 sm:py-18 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Suitability"
              title="Who it's for — and who it isn't"
              intro={service.consultationApproach}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Reveal>
              <ChecklistPanel
                title="Ideal for"
                note="Confirmed at consultation, not from this list."
                items={service.suitableFor}
              />
            </Reveal>

            {service.notSuitableFor && service.notSuitableFor.length > 0 ? (
              <Reveal delay={70}>
                <ChecklistPanel
                  title="Not suitable, or deferred"
                  note="Several are reasons to wait rather than permanent barriers — tell the doctor if any apply."
                  items={service.notSuitableFor}
                  tone="caution"
                />
              </Reveal>
            ) : null}

            <Reveal delay={140}>
              <DoctorPanel serviceName={service.name} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---- Visual Clinic Environment Showcase ---- */}
      <section className="bg-ivory-muted py-14 sm:py-18 lg:py-20">
        <Container>
          <Reveal>
            <ClinicEnvironmentShowcase serviceName={service.name} />
          </Reveal>
        </Container>
      </section>

      {/* ---- What to expect + precautions ---- */}
      <section className="bg-ivory py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-600">What to expect</p>
              <h2 className="mt-3 font-heading text-[1.6rem] font-semibold text-forest-900 sm:text-3xl">
                Your visit, start to finish
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
                {service.whatToExpect}
              </p>
              <div className="mt-7">
                <MedicalReviewNotice lastUpdated={service.lastUpdated} />
              </div>
            </Reveal>

            <Reveal variant="right" delay={80}>
              <ChecklistPanel
                title="Precautions & aftercare"
                note="Read these before booking — some affect what you should stop beforehand."
                items={service.precautions}
                tone="caution"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---- FAQs ---- */}
      <section className="bg-ivory py-14 sm:py-18 lg:py-20">
        <Container>
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Frequently asked questions"
              title={`${service.name} — your questions answered`}
            />
          </Reveal>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">
            <Reveal>
              <FaqAccordion items={faqs} />
            </Reveal>
            <Reveal delay={80}>
              <QuestionsPanel serviceName={service.name} />
            </Reveal>
          </div>

          <Reveal>
            <LocalRelevance
              serviceName={service.name}
              related={related.map((r) => ({ name: r.name, href: `/services/${r.slug}` }))}
            />
          </Reveal>

          {related.length > 0 && (
            <Reveal>
              <section aria-labelledby="related-services" className="mt-14 border-t border-border pt-10">
                <h2 id="related-services" className="font-heading text-xl font-semibold text-forest-900">
                  Related {category ? category.name.toLowerCase() : "services"}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex h-full items-start justify-between gap-4 rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-forest-600/45 hover:shadow-[var(--shadow-card)]"
                      >
                        <span>
                          <span className="block font-heading text-[15px] font-semibold text-forest-900">{r.name}</span>
                          <span className="mt-1 block text-[13px] leading-snug text-charcoal-soft">
                            {r.shortDescription}
                          </span>
                        </span>
                        <ArrowRightIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-charcoal-faint transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}

          <aside className="mt-12 rounded-lg border-l-2 border-charcoal-faint/40 bg-ivory-muted px-6 py-5">
            <h2 className="text-sm font-semibold text-charcoal">Before you book</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
              This page is general information, not a booking for the procedure itself and not a substitute for medical
              advice. Suitability is assessed by the doctor at an in-person consultation, and no specific outcome is
              guaranteed. Individual response varies.
            </p>
          </aside>
        </Container>
      </section>

      {/* ---- Closing CTA band ---- */}
      <section className="relative overflow-hidden bg-forest-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(104deg, transparent 24%, rgba(63,132,96,0.5) 46%, rgba(63,132,96,0.1) 58%, transparent 76%)",
          }}
        />
        <Container className="relative py-12 sm:py-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-balance font-heading text-2xl font-semibold text-ivory sm:text-[1.75rem]">
                Take the first step — book your consultation
              </h2>
              <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ivory/70">
                Talk to {siteConfig.doctor.name} at Aura Cure Clinic, Bajaj Road, {locality}. Call{" "}
                {siteConfig.contact.phoneDisplay} or request a slot online.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-[15px] font-medium text-forest-950 transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-accent-100"
              >
                <CalendarIcon className="h-4 w-4" />
                Book an Appointment
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-ivory/30 px-6 py-3.5 text-[15px] font-medium text-ivory transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-ivory/10"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
