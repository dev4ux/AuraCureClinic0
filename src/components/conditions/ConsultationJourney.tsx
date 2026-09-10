import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CalendarIcon } from "@/components/ui/icons";
import type { ConsultationStep } from "@/lib/types";

/**
 * Horizontal timeline on desktop, vertical on mobile. Describes the process
 * a patient goes through — deliberately about the consultation, not about
 * promised treatment outcomes.
 */
export function ConsultationJourney({
  steps,
  conditionName,
  whatToExpect,
  slug,
}: {
  steps: ConsultationStep[];
  conditionName: string;
  whatToExpect: string;
  slug: string;
}) {
  if (steps.length === 0) return null;

  return (
    <section aria-labelledby="journey-heading" className="border-y border-border bg-ivory-muted py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 id="journey-heading" className="text-balance text-2xl sm:text-3xl">
            How your consultation may work
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
            What actually happens when you come in to discuss {conditionName.toLowerCase()} — from the first
            conversation through to follow-up.
          </p>
        </div>

        <ol className="mt-10 grid gap-8 sm:gap-6 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {/* Connector: vertical on mobile, horizontal from lg up. */}
              <span
                aria-hidden="true"
                className={`absolute left-[1.15rem] top-11 h-[calc(100%+1rem)] w-px bg-border-strong sm:top-10 lg:left-11 lg:top-[1.15rem] lg:h-px lg:w-[calc(100%-1rem)] ${
                  i === steps.length - 1 ? "hidden" : ""
                }`}
              />
              <div className="relative flex gap-4 lg:block">
                <span className="relative z-10 inline-flex h-[2.3rem] w-[2.3rem] shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface font-heading text-[13px] font-semibold text-forest-800">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-5">
                  <h3 className="font-heading text-base font-semibold text-forest-900">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <p className="text-[15px] leading-relaxed text-charcoal-soft">{whatToExpect}</p>
          <Button
            href="/appointment"
            size="lg"
            icon={<CalendarIcon className="h-4 w-4" />}
            analyticsEvent="cta_appointment_click"
            analyticsLocation={`condition_${slug}_journey`}
          >
            Talk to the Doctor
          </Button>
        </div>
      </Container>
    </section>
  );
}
