import type { VisitType } from "@/data/booking";

const bookingSteps = ["Visit", "Date & time", "Your details"] as const;

/**
 * "Step 2 of 3 · Date & time" over a three-segment bar. Compact enough to sit
 * above the form on a phone without pushing the first field below the fold,
 * and it says plainly how much is left.
 */
export function ProgressIndicator({ step, visitType }: { step: 1 | 2 | 3; visitType: VisitType | null }) {
  // An in-clinic visit has no time to choose — only the day.
  const labels = visitType === "clinic" ? (["Visit", "Visit date", "Your details"] as const) : bookingSteps;
  return (
    <div>
      <p className="flex items-baseline justify-between gap-3 text-[12.5px]">
        <span className="font-semibold text-forest-900">
          Step {step} of {labels.length}
          <span className="font-normal text-charcoal-faint"> · {labels[step - 1]}</span>
        </span>
      </p>
      <ol aria-label="Booking progress" className="mt-2 grid grid-cols-3 gap-1.5">
        {labels.map((label, i) => (
          <li key={label} aria-current={i + 1 === step ? "step" : undefined}>
            <span className="sr-only">
              {label}
              {i + 1 < step ? " (done)" : ""}
            </span>
            <span
              aria-hidden="true"
              className={`block h-1 rounded-full transition-colors duration-500 ${
                i + 1 <= step ? "bg-forest-900" : "bg-charcoal/10"
              }`}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
