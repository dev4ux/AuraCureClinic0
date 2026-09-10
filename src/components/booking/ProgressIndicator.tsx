import type { ReactNode } from "react";
import { CheckIcon, UserIcon, CardIcon } from "@/components/ui/icons";

/**
 * Deliberately only two steps, ever. Payment is a decision made inline
 * inside "Pay & Confirm", not a third stage here — surfacing it separately
 * would make the flow look longer than it actually is.
 *
 * The rail carries the numbers at each end and fills as you advance, so the
 * indicator reads as distance travelled rather than as decoration. Labels sit
 * beneath their own endpoint, hard-aligned left and right so the two never
 * drift out of relation to the numbers above them.
 */
const steps: [{ label: string; icon: ReactNode }, { label: string; icon: ReactNode }] = [
  { label: "Information", icon: <UserIcon className="h-4 w-4" /> },
  { label: "Pay & Confirm", icon: <CardIcon className="h-4 w-4" /> },
];

export function ProgressIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div>
      <ol aria-label="Booking progress" className="flex items-center gap-3">
        <StepNode number="1" state={step === 1 ? "active" : "done"} label={steps[0].label} />
        <span aria-hidden="true" className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-charcoal/10">
          <span
            className={`absolute inset-y-0 left-0 rounded-full bg-forest-800 transition-[width] duration-500 ease-[var(--ease-soft)] ${
              step === 2 ? "w-full" : "w-1/2"
            }`}
          />
        </span>
        <StepNode number="2" state={step === 2 ? "active" : "upcoming"} label={steps[1].label} />
      </ol>

      <div className="mt-3 flex items-center justify-between gap-4">
        <StepLabel icon={steps[0].icon} label={steps[0].label} active={step === 1} />
        <StepLabel icon={steps[1].icon} label={steps[1].label} active={step === 2} align="right" />
      </div>
    </div>
  );
}

function StepNode({
  number,
  state,
  label,
}: {
  number: string;
  state: "active" | "done" | "upcoming";
  label: string;
}) {
  return (
    <li aria-current={state === "active" ? "step" : undefined} className="shrink-0">
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold tabular-nums transition-colors duration-300 ${
          state === "upcoming" ? "bg-charcoal/10 text-charcoal-faint" : "bg-forest-800 text-ivory"
        }`}
      >
        {state === "done" ? <CheckIcon className="h-3.5 w-3.5" /> : number}
      </span>
    </li>
  );
}

function StepLabel({
  icon,
  label,
  active,
  align = "left",
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  align?: "left" | "right";
}) {
  return (
    <span
      className={`flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
        active ? "text-forest-900" : "text-charcoal-faint"
      } ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <span aria-hidden="true" className={active ? "text-forest-700" : "text-charcoal-faint"}>
        {icon}
      </span>
      {label}
    </span>
  );
}
