import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ConditionFigure } from "./ConditionFigure";
import type { ConditionPageData } from "@/lib/condition-page";

/**
 * "What can this feel like?" — the long overview paragraph broken into short
 * labelled blocks the reader can scan, paired with a supporting photograph.
 */
export function ConditionExperience({ condition }: { condition: ConditionPageData }) {
  const blocks = condition.symptomExplanations;

  return (
    <section aria-labelledby="experience-heading" className="bg-ivory py-14 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <ConditionFigure
              image={condition.experienceImage}
              icon={condition.icon}
              aspect="aspect-[5/4]"
              sizes="(min-width: 1024px) 46vw, 92vw"
            />
          </div>

          <div>
            <h2 id="experience-heading" className="text-balance text-2xl sm:text-3xl">
              What can {condition.name.toLowerCase()} feel like?
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft sm:text-base">{condition.overview}</p>

            {blocks.length > 0 && (
              <dl className="mt-8 space-y-6">
                {blocks.map((block) => (
                  <div key={block.title} className="border-l-2 border-accent-500/40 pl-5">
                    <dt className="font-heading text-base font-semibold text-forest-900">{block.title}</dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-charcoal-soft">{block.body}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-9">
              <Button
                href="/appointment"
                variant="secondary"
                size="lg"
                icon={<ArrowRightIcon className="h-4 w-4" />}
                analyticsEvent="cta_appointment_click"
                analyticsLocation={`condition_${condition.slug}_symptoms`}
              >
                Discuss Your Symptoms
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
