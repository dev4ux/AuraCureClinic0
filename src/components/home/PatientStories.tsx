"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { patientStories } from "@/data/patient-stories";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon, CheckIcon, UserIcon } from "@/components/ui/icons";

/**
 * Homepage patient testimonial carousel: photograph on the left, the
 * patient's words on the right, one story at a time.
 *
 * Styling follows the site's existing vocabulary rather than inventing a new
 * one — `rounded-lg`, `border-border` hairlines and the shared --shadow-card
 * token, the same as every other card on the site. Depth comes from the
 * forest/ivory contrast and the quotation marks, not from gradients, blur or
 * oversized radii.
 *
 * Three things are deliberate and should survive future edits:
 *
 *  1. The photo slot is a plain image frame while `photo.src` is null, so the
 *     composition is final today and dropping in a real picture later is a
 *     one-line data change. `focalPoint` reframes the crop without touching
 *     any component.
 *
 *  2. Emphasis comes from `quote` segments rather than markup in the data, so
 *     it is always visible which of a patient's words are being accented.
 *
 *  3. A story flagged `isPlaceholder` shows a quiet sample-content line.
 *     Fabricated testimonials must not be able to pass as real, so that is
 *     driven by data rather than left to someone to remember to remove.
 */
export function PatientStories() {
  const [index, setIndex] = useState(0);

  if (patientStories.length === 0) return null;

  const story = patientStories[index];
  const total = patientStories.length;
  const hasGoogleProfile = !siteConfig.social.googleBusinessProfile.startsWith("[");
  const initial = story.patientName.replace(/[^A-Za-z]/g, "").charAt(0).toUpperCase() || "—";

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <section aria-labelledby="patient-stories-heading" className="bg-ivory py-14 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">Patient experience</p>
          <h2 id="patient-stories-heading" className="mt-3 text-balance text-3xl sm:text-4xl">
            What patients say
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
            We publish only reviews that patients have genuinely left — nothing written on their behalf.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-surface shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-[47fr_53fr]">
            {/* Photograph and quote arrive from opposite sides — the same
                assembly the rest of the page uses, not just a fade-in. */}
            <Reveal
              variant="left"
              className="relative aspect-[4/3] overflow-hidden bg-ivory-muted sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[27rem]"
            >
              {story.photo.src ? (
                <Image
                  src={story.photo.src}
                  alt={story.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 47vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: story.photo.focalPoint ?? "50% 50%" }}
                />
              ) : (
                <div
                  role="img"
                  aria-label={story.photo.alt}
                  className="absolute inset-0 flex items-center justify-center bg-ivory-muted"
                >
                  <UserIcon aria-hidden="true" className="h-20 w-20 text-charcoal-faint/25 sm:h-24 sm:w-24" />
                </div>
              )}
            </Reveal>

            {/* The patient's words. */}
            <Reveal
              variant="right"
              delay={90}
              as="figure"
              className="relative m-0 flex flex-col justify-between overflow-hidden bg-forest-900 px-7 py-9 text-ivory sm:px-10 sm:py-10 lg:h-full lg:px-12"
            >
              {/* Quotation marks sit low-contrast in the background: they add
                  depth without competing with the words in front of them. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-7 top-5 select-none font-heading text-[4.5rem] leading-none text-accent-500/20 sm:left-10 sm:text-[5.5rem] lg:left-12"
              >
                &ldquo;
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-5 bottom-16 select-none font-heading text-[10rem] leading-none text-ivory/[0.035] sm:text-[13rem] lg:-right-6"
              >
                &rdquo;
              </span>

              <blockquote className="relative pt-10 sm:pt-11" aria-live="polite">
                <p className="text-pretty text-[17px] leading-[1.7] text-ivory/85 sm:text-[18.5px] lg:text-[19.5px] lg:leading-[1.68]">
                  {story.quote.map((seg, i) =>
                    seg.highlight ? (
                      <span key={i} className="font-medium text-accent-500">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>
              </blockquote>

              <figcaption className="relative mt-9 flex items-end justify-between gap-5 border-t border-ivory/15 pt-6">
                <div className="flex min-w-0 items-center gap-3.5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20 font-heading text-[16px] font-semibold text-accent-500"
                  >
                    {initial}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-[15.5px] font-semibold text-ivory">{story.patientName}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-ivory/50">
                      <CheckIcon aria-hidden="true" className="h-3 w-3 shrink-0 text-accent-500" />
                      <span className="truncate">
                        Verified patient
                        {story.patientContext && ` · ${story.patientContext}`}
                      </span>
                    </p>
                  </div>
                </div>

                {total > 1 && (
                  <div className="flex shrink-0 items-center gap-2.5">
                    <CarouselButton label="Previous patient story" onClick={() => go(-1)} direction="prev" />
                    <CarouselButton label="Next patient story" onClick={() => go(1)} direction="next" />
                  </div>
                )}
              </figcaption>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120} className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-charcoal-faint" aria-live="polite">
            {story.isPlaceholder && <span>Sample content, awaiting verified patient reviews · </span>}
            {total > 1 && `Story ${index + 1} of ${total}`}
          </p>

          {hasGoogleProfile && (
            <Button href={siteConfig.social.googleBusinessProfile} external variant="secondary">
              See more patient reviews on Google
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  direction,
}: {
  label: string;
  onClick: () => void;
  direction: "prev" | "next";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-accent-500 hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
    >
      <ArrowRightIcon className={`h-4 w-4 ${direction === "prev" ? "rotate-180" : ""}`} />
    </button>
  );
}
