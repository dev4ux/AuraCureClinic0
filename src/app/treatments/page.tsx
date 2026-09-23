import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { treatments } from "@/data/treatments";
import { conditions } from "@/data/conditions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FinalCta } from "@/components/shared/FinalCta";
import { ArrowRightIcon, CalendarIcon, CheckIcon, PhoneIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Treatments & Consultation Approach",
  description:
    "How homeopathic treatment works at Aura Cure Clinic, Sikar — detailed case consultation, individualised treatment planning, chronic condition management and structured follow-up.",
  alternates: { canonical: "/treatments" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/treatments" },
];

export default function TreatmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript(
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` })))
          ),
        }}
      />
      <Breadcrumbs items={crumbs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-forest-950 text-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, var(--color-forest-800) 0%, var(--color-forest-900) 45%, var(--color-forest-950) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(104deg, transparent 24%, rgba(42,144,102,0.5) 47%, rgba(42,144,102,0.1) 60%, transparent 75%)",
          }}
        />

        <Container className="relative py-12 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
            <div>
              <span className="rounded-full bg-forest-800/90 border border-forest-600/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-100 shadow-sm">
                Clinical Methodology
              </span>
              <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] text-ivory sm:text-5xl lg:text-[3.15rem]">
                How homeopathic treatment works at Aura Cure Clinic
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ivory/85 sm:text-lg">
                Homeopathy is inherently individualised. We do not offer fixed package plans or one-size-fits-all remedies.
                Every course of care begins with thorough case-taking by {siteConfig.doctor.name}, {siteConfig.doctor.credentials}.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-base font-semibold text-forest-950 transition-all duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-accent-100 shadow-md"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book Case Consultation
                </Link>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-ivory/20 bg-forest-900/40 px-5 py-3.5 text-base font-medium text-ivory transition-all hover:bg-ivory/10 hover:border-ivory/40"
                >
                  <PhoneIcon className="h-4 w-4 text-accent-500" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Visual Spotlight Frame */}
            <Reveal variant="scale">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.6] w-full overflow-hidden rounded-2xl border border-ivory/20 bg-forest-900 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]">
                  <Image
                    src="/images/clinic-consultation.jpg"
                    alt="Doctor consultation at Aura Cure Clinic, Sikar"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />

                  {/* Bottom Endorsement */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-ivory/15 bg-forest-950/85 p-4 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent-500 shadow-sm bg-forest-900">
                        <Image
                          src="/images/dr-nitin-sharma.webp"
                          alt={siteConfig.doctor.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-heading text-[14.5px] font-bold text-ivory leading-tight truncate">
                          {siteConfig.doctor.name}
                        </p>
                        <p className="text-[11.5px] font-medium text-accent-100/90 truncate">
                          {siteConfig.doctor.credentials} · {siteConfig.doctor.yearsOfExperience} Yrs Practice
                        </p>
                        <p className="text-[10.5px] text-ivory/60 truncate">
                          Aura Cure Clinic, Bajaj Road, Sikar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
      <Container className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
            Four Steps of Care
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-forest-900 sm:text-4xl">
            Our Consultation &amp; Treatment Process
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
            Structured around attentive listening, honest assessment, and continuous monitoring.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2">
          {treatments.map((t, i) => (
            <li
              key={t.slug}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 shadow-xs transition-all duration-200 hover:border-forest-600/40 hover:shadow-md"
            >
              <div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest-50 border border-forest-100 font-heading text-base font-bold text-forest-800">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-forest-900">{t.name}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-charcoal-soft">{t.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 text-xs font-medium text-forest-700">
                <CheckIcon className="h-3.5 w-3.5" />
                <span>Doctor Monitored</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-xl border-l-3 border-accent-500 bg-surface p-6 sm:p-7 shadow-xs">
          <h3 className="text-sm font-semibold text-forest-900">Important Medical Transparency</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
            The clinic does not promise guaranteed cures, instant relief, or permanent outcomes for any patient. Response
            to homeopathic treatment varies by individual constitution. Where investigation, specialist care, or emergency
            intervention is advised, you will be informed directly.
          </p>
        </div>
      </Container>

      {/* Conditions Section */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Where it applies"
          title="Conditions commonly treated"
          description="Each guide explains the clinical condition, when evaluation is needed, and what a consultation involves."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conditions/${c.slug}`}
                className="group flex h-full flex-col justify-between gap-5 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest-600/50 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-900 group-hover:text-forest-700 transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-soft line-clamp-2">{c.shortDescription}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                  Read clinical guide
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta location="treatments_final" />
    </>
  );
}
