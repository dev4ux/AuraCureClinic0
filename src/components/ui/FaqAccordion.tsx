"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import type { FaqItem } from "@/lib/types";

/**
 * Shared FAQ accordion. Used on the homepage and on every condition, service
 * and article page, so it stays layout-agnostic — it fills whatever width its
 * container gives it.
 *
 * The open/close animation transitions grid-template-rows from 0fr to 1fr
 * rather than max-height. That animates to the answer's real height, so long
 * answers never clip and short ones never leave dead space — no JS
 * measurement, and the global prefers-reduced-motion rule disables it.
 *
 * Answers stay in the DOM when collapsed so the text remains crawlable;
 * aria-hidden keeps them out of the accessibility tree.
 */
export function FaqAccordion({
  items,
  /** Index open on first render. Pass null to start fully collapsed. */
  defaultOpenIndex = 0,
}: {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-ivory-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest-600/50 sm:gap-6 sm:px-6 sm:py-6"
              >
                <span
                  className={`text-[15px] font-medium leading-snug transition-colors duration-200 sm:text-base ${
                    isOpen ? "text-forest-900" : "text-charcoal"
                  }`}
                >
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] ${
                    isOpen ? "border-forest-800 bg-forest-800 text-ivory" : "border-border-strong text-charcoal-faint"
                  }`}
                >
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-300 ease-[var(--ease-soft)] ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-soft)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pr-14 text-[14.5px] leading-relaxed text-charcoal-soft sm:px-6 sm:pb-7 sm:pr-20 sm:text-[15px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
