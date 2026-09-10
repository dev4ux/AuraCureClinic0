import { Container } from "@/components/ui/Container";
import { CareIcon } from "./icon-registry";
import type { ContributingFactor } from "@/lib/types";

/**
 * Deliberately framed as "may contribute" rather than "causes" — these are
 * patterns discussed at consultation, never a diagnosis for an individual.
 */
export function ContributingFactors({
  factors,
  conditionName,
}: {
  factors: ContributingFactor[];
  conditionName: string;
}) {
  if (factors.length === 0) return null;

  return (
    <section aria-labelledby="factors-heading" className="border-y border-border bg-ivory-muted py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 id="factors-heading" className="text-balance text-2xl sm:text-3xl">
            What may contribute to it?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
            Common contributing factors may include the following. Which of these are relevant — if any — differs from
            person to person, and is something the doctor works through with you during consultation.
          </p>
        </div>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => {
            return (
              <li
                key={factor.title}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-forest-600/35 sm:p-6"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800/[0.07] text-forest-700">
                  <CareIcon name={factor.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-[15px] font-semibold text-forest-900">{factor.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-charcoal-soft">{factor.body}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-[13px] leading-relaxed text-charcoal-faint">
          These are general patterns associated with {conditionName.toLowerCase()} and do not establish a cause in any
          individual case.
        </p>
      </Container>
    </section>
  );
}
