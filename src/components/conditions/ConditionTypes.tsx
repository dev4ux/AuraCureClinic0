import { Container } from "@/components/ui/Container";
import type { ConditionType } from "@/lib/types";

/**
 * Optional — rendered only for conditions whose data defines meaningful
 * patterns. Conditions without types simply omit the section entirely.
 */
export function ConditionTypes({ types, conditionName }: { types: ConditionType[]; conditionName: string }) {
  if (types.length === 0) return null;

  return (
    <section aria-labelledby="types-heading" className="border-t border-border bg-ivory py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 id="types-heading" className="text-balance text-2xl sm:text-3xl">
            Patterns of {conditionName.toLowerCase()}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
            Recognising which pattern fits your experience helps shape the consultation. The doctor confirms this
            through your history rather than from a description alone.
          </p>
        </div>

        <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((type, i) => (
            <li key={type.name} className="rounded-2xl border border-border bg-surface p-6">
              <span aria-hidden="true" className="font-heading text-sm font-semibold text-accent-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 font-heading text-lg font-semibold text-forest-900">{type.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft">{type.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
