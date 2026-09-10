import { Container } from "@/components/ui/Container";
import { AlertIcon } from "./care-icons";

/**
 * Medical safety section. Styled calm and authoritative rather than alarming —
 * a warm neutral panel with a gold rule, not a red alert box. Builds trust by
 * being explicit about the limits of what this page and the clinic can do.
 */
export function MedicalAttention({ points }: { points: string[] }) {
  if (points.length === 0) return null;

  return (
    <section aria-labelledby="attention-heading" className="bg-ivory py-14 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
          <div className="border-l-[3px] border-accent-500 p-6 sm:p-9">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <AlertIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h2 id="attention-heading" className="text-balance text-2xl sm:text-[1.75rem]">
                  When should you seek medical attention?
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-charcoal-soft">
                  Most symptoms are appropriate for a routine consultation. Some, however, need prompt medical
                  assessment rather than a scheduled appointment — including:
                </p>
              </div>
            </div>

            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-charcoal-soft">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-border pt-5 text-[13px] leading-relaxed text-charcoal-faint">
              This information is for awareness and does not replace an in-person medical assessment. If symptoms feel
              severe or are worsening quickly, seek immediate medical care rather than waiting for an appointment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
