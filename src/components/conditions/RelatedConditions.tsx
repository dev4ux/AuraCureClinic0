import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { CareIcon } from "./icon-registry";

export interface RelatedConditionItem {
  slug: string;
  name: string;
  shortDescription: string;
  icon?: string;
}

/**
 * Replaces the old sidebar list. Swipeable on mobile, a card row on desktop —
 * and a genuine internal-linking surface between condition pages.
 */
export function RelatedConditions({ items }: { items: RelatedConditionItem[] }) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="related-heading" className="border-t border-border bg-ivory-muted py-14 sm:py-20">
      <Container>
        <h2 id="related-heading" className="text-balance text-2xl sm:text-3xl">
          You may also want to explore
        </h2>

        <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {items.map((item) => {
            return (
              <li key={item.slug} className="w-[17rem] shrink-0 snap-start sm:w-auto">
                <Link
                  href={`/conditions/${item.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:border-forest-600/40 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-800/[0.07] text-forest-700">
                    <CareIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-forest-900">{item.name}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft">{item.shortDescription}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700">
                    Explore concern
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
