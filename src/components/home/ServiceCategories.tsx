"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceCategories, type ServiceCategory } from "@/data/service-categories";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Services divided the way the practice is: one block per category, each with
 * its own photograph, price floor and service list.
 *
 * The image column is a reserved slot rather than a decorative filler — the
 * layout is already sized for a real photograph, so dropping one in later
 * changes nothing about the composition. Blocks alternate sides on desktop so
 * four full-width rows read as a rhythm rather than a repeated template.
 */

/**
 * Every typed word must appear, matching on a shortened prefix too, so
 * "homeopathy" still finds "Homeopathic Consultation" and "pigment" finds
 * "Pigmentation". Four characters is the floor — below that, prefixes match
 * almost anything.
 */
function matchesTokens(text: string, tokens: string[]) {
  const haystack = text.toLowerCase();
  return tokens.every((token) => {
    if (haystack.includes(token)) return true;
    for (let len = token.length - 1; len >= 4; len--) {
      if (haystack.includes(token.slice(0, len))) return true;
    }
    return false;
  });
}

function ImageSlot({ category }: { category: ServiceCategory }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ivory-muted lg:aspect-auto lg:h-full lg:min-h-[20rem]">
      {category.image ? (
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="object-cover"
        />
      ) : (
        /* Reserved space, not stock: names the file the clinic should supply. */
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-border-strong px-4 text-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-charcoal-faint/45" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          <p className="font-mono text-[11px] leading-tight text-charcoal-faint">{category.imageSlot}</p>
          <p className="text-[11px] leading-snug text-charcoal-faint/80">Clinic photo — to be supplied</p>
        </div>
      )}
    </div>
  );
}

function ServiceList({ services }: { services: ServiceCategory["services"] }) {
  return (
    <ul className="grid gap-x-6 gap-y-0 sm:grid-cols-2">
      {services.map((s) => (
        <li key={s.name} className="border-b border-border/70">
          {s.href ? (
            <Link
              href={s.href}
              className="group/svc flex items-center justify-between gap-3 py-2.5 text-[14px] text-charcoal-soft transition-colors duration-200 hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2"
            >
              <span>{s.name}</span>
              <ArrowRightIcon className="h-3 w-3 shrink-0 text-charcoal-faint/0 transition-all duration-200 group-hover/svc:translate-x-0.5 group-hover/svc:text-forest-700" />
            </Link>
          ) : (
            /* No page for this one yet — plain text beats a link to a 404. */
            <span className="flex py-2.5 text-[14px] text-charcoal-soft">{s.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function CategoryBlock({ category, flipped }: { category: ServiceCategory; flipped: boolean }) {
  return (
    <>
      {/* Flipping the row has to flip the column widths too — otherwise the
          text lands in the narrow column meant for the photograph. */}
      <div
        className={`grid items-stretch gap-6 lg:gap-12 ${
          flipped
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] lg:[&>*:first-child]:order-2"
            : "lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)]"
        }`}
      >
        {/* The photograph and the copy come in from opposite sides, so the row
            reads as assembling rather than two blocks fading in together. */}
        <Reveal variant={flipped ? "right" : "left"} className="h-full">
          <ImageSlot category={category} />
        </Reveal>

        <Reveal variant={flipped ? "left" : "right"} delay={90} className="flex flex-col">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-heading text-2xl font-semibold text-forest-900 sm:text-[1.7rem]">{category.name}</h3>
            {category.priceFrom && (
              <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium tabular-nums text-charcoal-soft">
                From {category.priceFrom}
              </span>
            )}
          </div>

          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-accent-600">
            {category.listedAs}
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal-soft">{category.description}</p>

          <div className="mt-6">
            <ServiceList services={category.services} />
          </div>

          <Link
            href={category.href}
            className="group/all mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-forest-700 underline-offset-4 hover:underline"
          >
            All {category.name.toLowerCase()}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </>
  );
}

export function ServiceCategories() {
  const [query, setQuery] = useState("");
  const isSearching = query.trim().length > 0;

  const matches = useMemo(() => {
    if (!isSearching) return [];
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

    // Tier 1: the named treatments themselves. Precise — "laser" returns the
    // three laser treatments, not every service in the Laser & Aesthetic
    // category just because its name happens to contain the word.
    const byService = serviceCategories
      .map((category) => ({
        category,
        services: category.services.filter((s) => matchesTokens(s.name, tokens)),
      }))
      .filter((group) => group.services.length > 0);

    if (byService.length > 0) return byService;

    // Tier 2: nothing matched by name, so fall back to the category itself —
    // "aesthetic" or "homeopathy" describe a whole area of practice rather
    // than any one treatment, and should still return something useful.
    return serviceCategories
      .filter((category) => matchesTokens(`${category.name} ${category.listedAs} ${category.description}`, tokens))
      .map((category) => ({ category, services: category.services }));
  }, [query, isSearching]);

  const matchCount = matches.reduce((n, g) => n + g.services.length, 0);

  return (
    <div>
      {/* Category names on the left, search on the right — one row that says
          what is here and lets someone jump straight to it. */}
      <div className="flex flex-col gap-5 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <nav aria-label="Service categories" className="min-w-0">
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600">
            {serviceCategories.length} categories
          </p>
          <RevealGroup as="ul" itemAs="li" step={60} className="flex flex-wrap gap-x-2 gap-y-2">
            {serviceCategories.map((c) => (
              <a
                key={c.id}
                href={`#category-${c.id}`}
                className="inline-flex rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium text-charcoal-soft transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-forest-600/45 hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2"
              >
                {c.name}
              </a>
            ))}
          </RevealGroup>
        </nav>

        <div className="w-full lg:w-[22rem] lg:shrink-0">
          <label htmlFor="service-search" className="sr-only">
            Search treatments
          </label>
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-faint"
            >
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a treatment"
              className="w-full rounded-full border border-border-strong bg-surface py-2.5 pl-11 pr-4 text-[14px] text-charcoal placeholder:text-charcoal-faint focus:border-forest-600 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {isSearching ? (
        <div className="mt-8">
          <p className="mb-5 text-xs text-charcoal-faint" aria-live="polite">
            {matchCount} {matchCount === 1 ? "treatment" : "treatments"} matching &ldquo;{query.trim()}&rdquo;
          </p>

          {matches.length > 0 ? (
            <div className="space-y-7">
              {matches.map(({ category, services }) => (
                <div key={category.id}>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-accent-600">
                    {category.name}
                  </p>
                  <ServiceList services={services} />
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl rounded-lg border border-border bg-surface p-8">
              <p className="text-[15px] font-medium text-charcoal">
                Nothing here matches &ldquo;{query.trim()}&rdquo; yet.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                That doesn&rsquo;t mean we can&rsquo;t help — call or message the clinic and we&rsquo;ll tell you
                honestly whether a consultation is appropriate for your concern.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 underline underline-offset-4"
              >
                Ask the clinic
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-12 space-y-14 lg:mt-14 lg:space-y-20">
          {serviceCategories.map((category, i) => (
            <div key={category.id} id={`category-${category.id}`} className="scroll-mt-28">
              <CategoryBlock category={category} flipped={i % 2 === 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
