import { Container } from "@/components/ui/Container";
import { CareIcon } from "./icon-registry";
import type { ExperienceCard } from "@/lib/types";

/**
 * The 5–10 second scan: can the reader recognise their own experience here?
 * Horizontally scrollable on mobile so the row never becomes a tall stack,
 * a plain grid from `sm` upward.
 */
export function SymptomStrip({ cards, conditionName }: { cards: ExperienceCard[]; conditionName: string }) {
  if (cards.length === 0) return null;

  return (
    <section aria-labelledby="recognise-heading" className="border-b border-border bg-ivory-muted py-14 sm:py-16">
      <Container>
        <h2 id="recognise-heading" className="text-balance text-2xl sm:text-3xl">
          Could this be what you&rsquo;re experiencing?
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-charcoal-soft">
          Symptoms commonly discussed by patients consulting about {conditionName.toLowerCase()}. Everyone presents
          differently, so this is a starting point for conversation rather than a checklist.
        </p>

        {/* Negative margin + padding lets cards bleed to the screen edge while scrolling on mobile. */}
        <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((card) => {
            return (
              <li
                key={card.label}
                className="w-[15rem] shrink-0 snap-start rounded-2xl border border-border bg-surface p-5 sm:w-auto"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-800/[0.07] text-forest-700">
                  <CareIcon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-[15px] font-semibold leading-snug text-forest-900">
                  {card.label}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-charcoal-soft">{card.detail}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
