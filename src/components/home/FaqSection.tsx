import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { generalFaqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Homepage FAQ: editorial column on the left, accordion on the right.
 *
 * The left column sticks while the accordion scrolls on large screens, so the
 * heading stays with the questions as they expand — the list changes height a
 * lot, and without it the intro would scroll away mid-read.
 *
 * Content comes entirely from data/faqs.ts; adding or removing a question
 * needs no change here.
 */
export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="bg-ivory-muted py-14 sm:py-16 lg:py-20">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">Common questions</p>

            <h2 id="faq-heading" className="mt-3 text-balance text-3xl sm:text-4xl">
              Before your first visit
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
              The questions patients ask us most often, answered plainly. If something isn&rsquo;t covered here, the
              clinic is happy to answer it directly.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 transition-colors hover:text-forest-800"
            >
              Ask the clinic a question
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
            </Link>
          </div>

          <FaqAccordion items={generalFaqs} />
        </Reveal>
      </Container>
    </section>
  );
}
