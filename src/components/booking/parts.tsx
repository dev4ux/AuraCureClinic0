"use client";

import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Shared pieces for the three booking steps, so Visit, Date & time and Details
 * are drawn from one system: same heading, same selectable card, same
 * continue button. Every tap target is at least 44px tall on a phone.
 */

export const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2";

export function StepHeading({ children, as: Tag = "h2" }: { children: ReactNode; as?: "h2" | "legend" }) {
  return <Tag className="font-heading text-[1.05rem] font-semibold text-forest-900 sm:text-lg">{children}</Tag>;
}

/** Pill for concerns; squarer "box" for time slots laid out in a grid. */
export function chipClass(selected: boolean, shape: "pill" | "box" = "pill") {
  return `inline-flex min-h-11 items-center justify-center gap-1.5 border px-4 ${
    shape === "pill" ? "rounded-full" : "rounded-xl"
  } text-[14px] font-medium transition-colors duration-200 ${
    selected
      ? "border-forest-900 bg-forest-900 text-ivory"
      : "border-border-strong/70 bg-surface text-charcoal-soft hover:border-forest-600/60 hover:text-forest-900"
  }`;
}

/**
 * A large radio card: the visit type and the payment choice. Rendered as a
 * native radio inside a label, so arrow keys move between options and screen
 * readers announce "1 of 2, selected".
 */
export function OptionCard({
  name,
  checked,
  onSelect,
  icon,
  title,
  description,
  tag,
}: {
  name: string;
  checked: boolean;
  onSelect: () => void;
  icon: ReactNode;
  title: string;
  description?: string;
  tag?: string;
}) {
  return (
    <label className="block cursor-pointer">
      <input type="radio" name={name} checked={checked} onChange={onSelect} className="peer sr-only" />
      <span
        className={`flex h-full items-start gap-3 rounded-2xl border p-4 transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-forest-600/50 peer-focus-visible:ring-offset-2 ${
          checked
            ? "border-forest-900 bg-forest-50 shadow-[inset_0_0_0_1px_var(--color-forest-900)]"
            : "border-border-strong/70 bg-surface hover:border-forest-600/60"
        }`}
      >
        <span
          aria-hidden="true"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            checked ? "bg-forest-900 text-accent-500" : "bg-ivory-muted text-forest-700"
          }`}
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          {tag && (
            <span
              className={`mb-1 inline-block rounded-full px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] ${
                checked ? "bg-accent-500 text-forest-950" : "bg-ivory-muted text-charcoal-soft"
              }`}
            >
              {tag}
            </span>
          )}
          <span className="block text-[15px] font-semibold leading-snug text-forest-900">{title}</span>
          {description && (
            <span className="mt-0.5 block text-[13px] leading-snug text-charcoal-soft">{description}</span>
          )}
        </span>
        {/* Drawn radio — a native one cannot carry the filled-ring look. */}
        <span
          aria-hidden="true"
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${
            checked ? "border-forest-900" : "border-border-strong"
          }`}
        >
          {checked && <span className="h-2.5 w-2.5 rounded-full bg-forest-900" />}
        </span>
      </span>
    </label>
  );
}

/**
 * The one primary action per step. When it cannot be pressed yet, the line
 * under it names the single next thing to do, so a disabled button is never
 * a dead end.
 */
export function ContinueButton({
  label,
  enabled,
  busy = false,
  busyLabel = "Sending…",
  hint,
  readyNote,
  onClick,
}: {
  label: string;
  enabled: boolean;
  busy?: boolean;
  busyLabel?: string;
  hint: string | null;
  readyNote?: ReactNode;
  onClick: () => void;
}) {
  const active = enabled && !busy;
  return (
    <div className="mt-7">
      <button
        type="button"
        disabled={!active}
        onClick={onClick}
        className={`group flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-xl px-5 text-[15px] font-semibold transition-colors duration-200 ${FOCUS_RING} ${
          active
            ? "bg-forest-900 text-ivory hover:bg-forest-800"
            : "cursor-not-allowed border border-border-strong/60 bg-ivory-muted/60 text-charcoal-faint"
        }`}
      >
        {busy ? busyLabel : label}
        {!busy && (
          <ArrowRightIcon
            className={`h-4 w-4 transition-transform duration-200 ${active ? "group-hover:translate-x-0.5" : ""}`}
          />
        )}
      </button>
      <p
        className="mt-3 flex items-center justify-center gap-1.5 text-center text-[12.5px] text-charcoal-faint"
        aria-live="polite"
      >
        {hint ?? readyNote}
      </p>
    </div>
  );
}
