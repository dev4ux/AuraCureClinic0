import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ServiceContent, HighlightIcon } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";
import { getHighlights, getDetails, getTagline } from "@/lib/service-presentation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon, PhoneIcon, ArrowRightIcon, CalendarIcon, UserIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ClockIcon, DropletIcon, PrivacyShieldIcon } from "@/components/conditions/care-icons";

/**
 * Enhanced Service Page Design System for Aura Cure Clinic.
 *
 * Designed with a visual-first philosophy:
 * - Replaces text/button cards in the hero with a high-impact clinical photography showcase.
 * - Integrates floating doctor credentials, procedure badges, and consultation assurance.
 * - Structured for effortless patient scanning and high clinical credibility.
 */

const highlightIcons: Record<HighlightIcon, (p: { className?: string }) => ReactNode> = {
  check: CheckIcon,
  shield: PrivacyShieldIcon,
  clock: ClockIcon,
  user: UserIcon,
  droplet: DropletIcon,
  leaf: CheckIcon,
};

/** Resolves appropriate high-resolution image for the service */
function resolveServiceImage(service: ServiceContent, categoryImage?: string): string {
  if (categoryImage) return categoryImage;
  if (service.category === "hair") return "/images/care/hair-care.webp";
  if (service.category === "skin") return "/images/care/skin-care.webp";
  if (service.category === "laser-aesthetic") return "/images/care/laser-aesthetic.webp";
  return "/images/care/homeopathy.webp";
}

/* ------------------------------------------------------------------ hero */

export function ServiceHero({
  service,
  categoryName,
  categoryImage,
  crumbs,
}: {
  service: ServiceContent;
  categoryName?: string;
  categoryImage?: string;
  crumbs: { name: string; href: string }[];
}) {
  const highlights = getHighlights(service);
  const heroImage = resolveServiceImage(service, categoryImage);

  return (
    <section className="relative overflow-hidden bg-forest-950 text-ivory">
      {/* Dynamic Background Gradients & Soft Botanical Texture */}
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-ivory) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 85%)",
        }}
      />

      <Container className="relative py-10 sm:py-14 lg:py-18">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-ivory/60">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-ivory/30">/</span>}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-ivory/95 font-medium">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="underline-offset-4 transition-colors hover:text-ivory hover:underline">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          {/* Left Column: Clinical Title, Tagline, Overview & Actions */}
          <div className="min-w-0">
            {categoryName && (
              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-forest-800/90 border border-forest-600/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-100 shadow-sm">
                  {categoryName}
                </span>
                <span className="text-xs text-ivory/40">•</span>
                <span className="text-xs font-medium text-ivory/70">Aura Cure Clinic, Sikar</span>
              </div>
            )}

            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] text-ivory sm:text-5xl lg:text-[3.15rem]">
              {service.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-accent-500 sm:text-xl leading-snug">
              {getTagline(service)}
            </p>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ivory/80 sm:text-base">
              {service.overview}
            </p>

            {/* Trust Highlights Grid */}
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 border-t border-ivory/10 pt-6">
              {highlights.map((h) => {
                const Icon = highlightIcons[h.icon] ?? CheckIcon;
                return (
                  <li key={h.label} className="flex flex-col">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-forest-800/90 border border-forest-600/40 text-accent-100 shadow-inner">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-2.5 text-[13px] font-semibold leading-snug text-ivory">{h.label}</p>
                    {h.sublabel && (
                      <p className="mt-0.5 text-[11.5px] leading-snug text-ivory/60">{h.sublabel}</p>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Primary Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-base font-semibold text-forest-950 transition-all duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-accent-100 shadow-md hover:shadow-lg"
              >
                <CalendarIcon className="h-4 w-4" />
                Book Consultation
              </Link>
              <a
                href={siteConfig.contact.phoneHref}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-ivory/20 bg-forest-900/40 px-5 py-3.5 text-base font-medium text-ivory transition-all hover:bg-ivory/10 hover:border-ivory/40"
              >
                <PhoneIcon className="h-4 w-4 text-accent-500" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-forest-600/50 bg-forest-900/60 px-4 py-3.5 text-sm font-medium text-accent-100 transition-colors hover:bg-forest-800/80"
                aria-label="Message on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4 text-accent-500" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Hero Spotlight Card (Replacing plain button card) */}
          <Reveal variant="scale">
            <ServiceHeroVisual service={service} heroImage={heroImage} categoryName={categoryName} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/**
 * Premium Visual Hero Spotlight Card with authentic imagery,
 * embedded doctor endorsement badge, and clinical care tags.
 */
function ServiceHeroVisual({
  service,
  heroImage,
  categoryName,
}: {
  service: ServiceContent;
  heroImage: string;
  categoryName?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Ambient background glow behind image */}
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-500/20 via-forest-500/20 to-transparent blur-xl opacity-70"
      />

      {/* Main Image Frame */}
      <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.6] w-full overflow-hidden rounded-2xl border border-ivory/20 bg-forest-900 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]">
        <Image
          src={heroImage}
          alt={`${service.name} at Aura Cure Clinic, Sikar`}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-100 backdrop-blur-md border border-ivory/15 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            In-Clinic Care
          </span>

          <span className="rounded-full bg-surface/90 px-2.5 py-0.5 text-[11px] font-semibold text-forest-950 backdrop-blur-md shadow-xs">
            {categoryName || "Specialist"}
          </span>
        </div>

        {/* Bottom Floating Doctor Endorsement & Assurance */}
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-ivory/15 bg-forest-950/85 p-3.5 sm:p-4 backdrop-blur-md shadow-lg">
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
              <div className="flex items-center gap-1.5">
                <p className="font-heading text-[14.5px] font-bold text-ivory leading-tight truncate">
                  {siteConfig.doctor.name}
                </p>
                <span className="text-accent-500 text-xs">✓</span>
              </div>
              <p className="text-[11.5px] font-medium text-accent-100/90 truncate">
                {siteConfig.doctor.credentials} · {siteConfig.doctor.yearsOfExperience} Yrs Clinical Practice
              </p>
              <p className="text-[10.5px] text-ivory/60 truncate">
                Aura Cure Clinic, Bajaj Road, Sikar
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-ivory/10 pt-2.5 text-[11px] text-ivory/70">
            <span className="flex items-center gap-1">
              <CheckIcon className="h-3 w-3 text-accent-500" />
              Doctor Evaluated
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckIcon className="h-3 w-3 text-accent-500" />
              Individualised Plan
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckIcon className="h-3 w-3 text-accent-500" />
              No Forced Course
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- sections */

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-600">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-heading text-[1.75rem] font-semibold text-forest-900 sm:text-[2.1rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft sm:text-base">{intro}</p>}
    </div>
  );
}

/** The horizontal procedure strip: numbered steps with clean clinical badges */
export function ProcessStrip({ steps }: { steps: { title: string; body: string }[] }) {
  const oneRow = steps.length <= 5;
  const cols = steps.length === 4 ? "xl:grid-cols-4" : "xl:grid-cols-5";

  return (
    <ol className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${cols}`}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-xs transition-all duration-200 hover:border-forest-600/40 hover:shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-forest-50 border border-forest-100 font-heading text-[13px] font-bold tabular-nums text-forest-800">
              {i + 1}
            </span>
            {oneRow && i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute -right-2.5 top-9 hidden h-px w-5 bg-border xl:block" />
            )}
          </div>
          <h3 className="mt-3.5 font-heading text-[15px] font-semibold leading-snug text-forest-900">{step.title}</h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Benefit cards. High-clarity medical bullet points */
export function BenefitGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex h-full gap-3.5 rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-forest-600/40 hover:shadow-[var(--shadow-card)]"
        >
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-forest-50 border border-forest-100 text-forest-700">
            <CheckIcon className="h-4 w-4" />
          </span>
          <p className="text-[14px] leading-relaxed text-charcoal-soft">{item}</p>
        </li>
      ))}
    </ul>
  );
}

/** The at-a-glance strip beneath the process */
export function DetailsBar({ service }: { service: ServiceContent }) {
  const details = getDetails(service);
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5 shadow-xs">
      {details.map((d) => (
        <div key={d.label} className="bg-surface px-5 py-4">
          <dt className="text-[10.5px] font-semibold uppercase tracking-[0.13em] text-accent-600">{d.label}</dt>
          <dd className="mt-1.5 text-[13.5px] font-medium leading-snug text-forest-900">{d.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Checklist panel — used for "Ideal for" and exclusions */
export function ChecklistPanel({
  title,
  note,
  items,
  tone = "default",
}: {
  title: string;
  note?: string;
  items: string[];
  tone?: "default" | "caution";
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-xs">
      <h3 className="font-heading text-lg font-semibold text-forest-900">{title}</h3>
      {note && <p className="mt-1.5 text-[13px] leading-relaxed text-charcoal-faint">{note}</p>}
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-charcoal-soft">
            {tone === "caution" ? (
              <span aria-hidden="true" className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-error/70" />
            ) : (
              <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-forest-600" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Doctor panel with photo & verified credentials */
export function DoctorPanel({ serviceName }: { serviceName: string }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-accent-500 bg-forest-900">
          <Image
            src="/images/dr-nitin-sharma.webp"
            alt={siteConfig.doctor.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600">Consulting Doctor</p>
          <h3 className="font-heading text-base font-bold text-forest-900">{siteConfig.doctor.name}</h3>
          <p className="text-[12px] text-charcoal-faint">{siteConfig.doctor.credentials}</p>
        </div>
      </div>

      <p className="mt-4 text-[13.5px] leading-relaxed text-charcoal-soft">
        {siteConfig.doctor.yearsOfExperience} years of dedicated practice in {siteConfig.address.locality}. Whether{" "}
        {serviceName} is appropriate for your case is assessed thoroughly in person.
      </p>

      <Link
        href="/about-doctor"
        className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[13px] font-semibold text-forest-700 underline-offset-4 hover:underline"
      >
        View Dr. Sharma&rsquo;s profile
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

/** Visual Clinic Environment Showcase */
export function ClinicEnvironmentShowcase({ serviceName }: { serviceName: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-600">
              Clinical Setting &amp; Facilities
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold text-forest-900 sm:text-[1.75rem]">
              Unhurried, Private Care in Sikar
            </h3>
            <p className="mt-3.5 text-[14.5px] leading-relaxed text-charcoal-soft">
              Every procedure and consultation — including {serviceName} — at Aura Cure Clinic is conducted in a hygienic, private environment
              equipped with modern medical instruments and authentic homeopathic dispensing.
            </p>
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-charcoal-soft">
                <CheckIcon className="h-3.5 w-3.5 text-forest-700" />
                <span>Private examination and consultation chambers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-soft">
                <CheckIcon className="h-3.5 w-3.5 text-forest-700" />
                <span>Strict sterilisation and clinical hygiene standards</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-soft">
                <CheckIcon className="h-3.5 w-3.5 text-forest-700" />
                <span>Centrally located on Bajaj Road, opposite Jain &amp; Vardhman School</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-border text-xs text-charcoal-faint">
            <Link
              href="/clinic"
              className="inline-flex items-center gap-1.5 font-semibold text-forest-700 hover:text-forest-900 underline underline-offset-4"
            >
              Take virtual clinic tour
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[16rem] sm:min-h-[18rem] lg:min-h-full w-full bg-ivory-muted border-t lg:border-t-0 lg:border-l border-border overflow-hidden">
          <Image
            src="/images/doctor-patient.jpg"
            alt="Doctor consultation at Aura Cure Clinic"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

/** "Still have questions?" panel beside FAQ */
export function QuestionsPanel({ serviceName }: { serviceName: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 lg:sticky lg:top-24 shadow-xs">
      <h3 className="font-heading text-lg font-semibold text-forest-900">Have specific questions?</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal-soft">
        Call or WhatsApp our clinic desk directly to ask whether {serviceName} is appropriate for your concern.
      </p>
      <a
        href={siteConfig.contact.phoneHref}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-forest-800 px-5 py-3 text-sm font-semibold text-ivory transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-forest-700 shadow-sm"
      >
        <PhoneIcon className="h-4 w-4" />
        {siteConfig.contact.phoneDisplay}
      </a>
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-ivory px-5 py-2.5 text-sm font-medium text-forest-900 transition-colors hover:bg-ivory-muted"
      >
        <WhatsAppIcon className="h-4 w-4 text-forest-700" />
        Message on WhatsApp
      </a>
      <p className="mt-4 border-t border-border pt-4 text-[11.5px] leading-relaxed text-charcoal-faint">
        {siteConfig.hours.display}
        <span className="block">{siteConfig.hours.closedNote}</span>
      </p>
    </div>
  );
}
