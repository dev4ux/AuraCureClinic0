"use client";

import Image from "next/image";
import { resultCases, type ResultCase } from "@/data/results";

/**
 * A continuously drifting strip of before/after cases.
 *
 * The track renders the cases twice and animates to exactly -50%, so the
 * second copy is in the first copy's position when the loop restarts — the
 * motion never visibly jumps. Hovering or tab-focusing the strip pauses it so
 * a case can actually be read; prefers-reduced-motion turns the drift off
 * entirely and leaves a normal horizontal scroller.
 */

function Pane({ src, alt, label, slot }: { src: string; alt: string; label: string; slot: string }) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-ivory-muted">
      {src ? (
        <Image src={src} alt={alt} fill sizes="180px" className="object-cover" />
      ) : (
        /* Slot, not stock: names the exact file the clinic should drop in. */
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 border border-dashed border-border-strong px-2 text-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-charcoal-faint/50" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          <p className="font-mono text-[9.5px] leading-tight text-charcoal-faint">{slot}</p>
        </div>
      )}
      <span className="absolute left-2 top-2 rounded-sm bg-forest-900/85 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ivory">
        {label}
      </span>
    </div>
  );
}

function Card({ item }: { item: ResultCase }) {
  return (
    <figure className="w-[15rem] shrink-0 rounded-lg border border-border bg-surface p-2.5 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:w-[16.5rem]">
      <div className="grid grid-cols-2 gap-2">
        <Pane
          src={item.before}
          alt={`${item.concern} before treatment`}
          label="Before"
          slot={`results/${item.id}-before.jpg`}
        />
        <Pane
          src={item.after}
          alt={`${item.concern} after treatment`}
          label="After"
          slot={`results/${item.id}-after.jpg`}
        />
      </div>
      <figcaption className="mt-2.5 px-0.5">
        <p className="font-heading text-sm font-semibold leading-snug text-forest-900">{item.concern}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-charcoal-faint">
          {item.treatment} · {item.duration}
        </p>
      </figcaption>
    </figure>
  );
}

export function ResultsStrip() {
  return (
    <div className="marquee-pause relative">
      {/* Edges dissolve into the section instead of ending on a hard cut. */}
      <div
        className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] motion-safe:overflow-hidden [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 4.5rem, #000 calc(100% - 4.5rem), transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 4.5rem, #000 calc(100% - 4.5rem), transparent)",
        }}
      >
        <ul
          className="animate-marquee flex w-max gap-4 py-1"
          style={{ "--marquee-duration": "80s" } as React.CSSProperties}
        >
          {resultCases.map((item) => (
            <li key={item.id}>
              <Card item={item} />
            </li>
          ))}
          {/* Second pass: the seamless half of the loop, hidden from AT so the
              cases are not announced twice. */}
          {resultCases.map((item) => (
            <li key={`${item.id}-loop`} aria-hidden="true">
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
