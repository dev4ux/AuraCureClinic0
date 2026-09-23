import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { CalendarIcon, PhoneIcon, CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { ConditionPageData } from "@/lib/condition-page";

export function ConditionHero({ condition }: { condition: ConditionPageData }) {
  const heroImageSrc = condition.heroImage?.src || "/images/care/homeopathy.webp";

  return (
    <section className="relative overflow-hidden bg-forest-950 text-ivory">
      {/* Dynamic Botanical Background Gradients */}
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
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          {/* Left Column: Condition Info & Actions */}
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-forest-800/90 border border-forest-600/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-100 shadow-sm">
                {condition.eyebrow || "Clinical Concern"}
              </span>
              <span className="text-xs text-ivory/40">•</span>
              <span className="text-xs font-medium text-ivory/70">Aura Cure Clinic, Sikar</span>
            </div>

            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.1] text-ivory sm:text-5xl lg:text-[3.15rem]">
              {condition.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-ivory/85 sm:text-lg">
              {condition.heroSummary}
            </p>

            {/* Medically Reviewed Strip */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-xl border border-ivory/15 bg-forest-900/60 px-4 py-2.5 text-[13px] text-ivory/80 backdrop-blur-md">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-500">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span>
                Medically reviewed by{" "}
                <Link href="/about-doctor" className="font-semibold text-ivory underline underline-offset-4 hover:text-accent-500">
                  {siteConfig.doctor.name}
                </Link>
                , {siteConfig.doctor.credentials}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
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

          {/* Right Column: Visual Hero Spotlight Card */}
          <Reveal variant="scale">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Ambient Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-500/20 via-forest-500/20 to-transparent blur-xl opacity-70"
              />

              {/* Image Frame */}
              <div className="group relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.6] w-full overflow-hidden rounded-2xl border border-ivory/20 bg-forest-900 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]">
                <Image
                  src={heroImageSrc}
                  alt={condition.heroImage?.alt || condition.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/30 to-transparent" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-100 backdrop-blur-md border border-ivory/15 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                    Doctor Consultation
                  </span>

                  <span className="rounded-full bg-surface/90 px-2.5 py-0.5 text-[11px] font-semibold text-forest-950 backdrop-blur-md shadow-xs">
                    In-Clinic in Sikar
                  </span>
                </div>

                {/* Bottom Floating Doctor Endorsement */}
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

                  {condition.heroTags.length > 0 && (
                    <div className="mt-3 border-t border-ivory/10 pt-2.5">
                      <p className="text-[11px] font-medium text-accent-100/90 truncate">
                        Focus: {condition.heroTags.join(" · ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
