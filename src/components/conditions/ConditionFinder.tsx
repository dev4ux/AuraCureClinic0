"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ConditionContent } from "@/lib/types";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CareIcon } from "./icon-registry";

const slugToIcon: Record<string, string> = {
  "hair-fall": "hair",
  "skin-problems": "skin",
  migraine: "head",
  allergy: "breath",
  "joint-arthritis": "joint",
  "back-pain": "back",
  "slip-disc": "spine",
  "digestive-health": "stomach",
  "asthma-breathing": "lungs",
  "womens-health": "wellness",
  "kidney-stones": "kidney",
  piles: "discreet",
  "sexual-private-health": "privacy",
};

/**
 * Enhanced ConditionFinder with search, category tags, and care icons.
 */
export function ConditionFinder({
  conditions,
  cardHeadingLevel = "h3",
}: {
  conditions: ConditionContent[];
  cardHeadingLevel?: "h2" | "h3";
}) {
  const [query, setQuery] = useState("");
  const CardHeading = cardHeadingLevel;

  const results = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return conditions;

    return conditions.filter((c) => {
      const haystack = [c.name, c.shortDescription, ...c.symptoms, ...c.searchTerms]
        .join(" ")
        .toLowerCase();

      return tokens.every((token) => {
        if (haystack.includes(token)) return true;
        for (let len = token.length - 1; len >= 4; len--) {
          if (haystack.includes(token.slice(0, len))) return true;
        }
        return false;
      });
    });
  }, [conditions, query]);

  return (
    <div>
      <div className="mx-auto max-w-xl text-center">
        <label htmlFor="condition-search" className="block text-sm font-semibold uppercase tracking-[0.14em] text-accent-600">
          Search by symptom or concern
        </label>
        <div className="relative mt-3">
          <input
            id="condition-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. hair fall, acne, migraine, allergy, joint pain"
            className="w-full rounded-xl border border-border-strong bg-surface px-5 py-3.5 text-[15px] text-charcoal shadow-sm placeholder:text-charcoal-faint focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20"
          />
        </div>
        <p className="mt-2.5 text-xs text-charcoal-faint" aria-live="polite">
          {query.trim()
            ? `${results.length} ${results.length === 1 ? "match" : "matches"} found`
            : "Or explore all commonly evaluated clinical concerns below."}
        </p>
      </div>

      {results.length > 0 ? (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => {
            const iconName = (slugToIcon[c.slug] || "wellness") as import("@/lib/types").CareIconName;
            return (
              <li key={c.slug}>
                <Link
                  href={`/conditions/${c.slug}`}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-forest-600/40 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 border border-forest-100 text-forest-800 transition-colors group-hover:bg-forest-800 group-hover:text-accent-100 shadow-xs">
                        <CareIcon name={iconName} className="h-5 w-5" />
                      </span>
                      <span className="rounded-full bg-ivory-muted px-2.5 py-0.5 text-[11px] font-medium text-charcoal-faint">
                        In-Clinic Care
                      </span>
                    </div>

                    <CardHeading className="mt-4 font-heading text-lg font-bold text-forest-900 group-hover:text-forest-700 transition-colors">
                      {c.name}
                    </CardHeading>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal-soft line-clamp-3">
                      {c.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="text-xs font-semibold text-forest-700 group-hover:text-forest-900 transition-colors">
                      Read Condition Guide
                    </span>
                    <ArrowRightIcon className="h-4 w-4 text-forest-700 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-surface p-8 text-center shadow-xs">
          <p className="text-[15px] font-bold text-forest-900">
            No direct page found for &ldquo;{query.trim()}&rdquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
            We treat many conditions beyond what is listed online. Reach out directly and we will advise you honestly.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 underline underline-offset-4"
          >
            Contact Clinic Desk
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
