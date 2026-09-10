import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

/**
 * Unverified values in site-config are still bracketed [PLACEHOLDER] tokens.
 * They must never reach the page — a raw token reads as a broken site to a
 * patient. Anything still bracketed is simply omitted until the clinic
 * supplies the real value (Real Data Rule: never invent one).
 */
const isPlaceholder = (value: string) => /\[[A-Z0-9_]+\]/.test(value);

const signals = [
  {
    label: "Qualified practitioner",
    value: siteConfig.doctor.credentials,
    note: `Reg. ${siteConfig.doctor.registration}`,
  },
  {
    label: "In practice",
    value: siteConfig.doctor.yearsOfExperience,
    note: "Years of clinical experience",
  },
  {
    label: "Clinic location",
    value: "Bajaj Road, Sikar",
    note: "Opposite Jain School & Vardhman School",
  },
  {
    label: "Patients treated",
    value: `${siteConfig.doctor.patientsTreated} Patients`,
    note: "Treated to date",
  },
]
  .filter((s) => !isPlaceholder(s.value))
  .map((s) => ({ ...s, note: isPlaceholder(s.note) ? "Homeopathic doctor & cosmetologist" : s.note }));

/** Keeps the row evenly divided however many signals survive the filter. */
const columns: Record<number, string> = {
  1: "sm:grid-cols-1 lg:grid-cols-1",
  2: "sm:grid-cols-2 lg:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function TrustBar() {
  if (signals.length === 0) return null;

  return (
    <section aria-label="Clinic credentials at a glance" className="border-b border-border bg-surface">
      <Container>
        {/* On desktop the row is pinned to --trustbar-h — the exact slice the
            hero reserved for it — so it always lands whole inside the fold. */}
        <dl
          className={`grid grid-cols-1 gap-px bg-border lg:h-[var(--trustbar-h)] ${
            columns[signals.length] ?? columns[4]
          }`}
        >
          {signals.map((s, i) => (
            <div
              key={s.label}
              /* Above the fold — arrives with the page, one after another,
                 continuing the hero's cadence rather than restarting it. */
              className="animate-rise flex flex-col justify-center bg-surface py-7 sm:px-6 lg:py-0"
              style={{ animationDelay: `${360 + i * 60}ms` }}
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600">{s.label}</dt>
              <dd className="mt-2 font-heading text-lg font-semibold leading-snug text-forest-900 sm:text-xl">
                {s.value}
              </dd>
              <dd className="mt-1.5 text-xs leading-snug text-charcoal-faint">{s.note}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
