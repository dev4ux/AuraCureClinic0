"use client";

import { useEffect, useState } from "react";
import {
  MAX_WEEK_OFFSET,
  getAvailableSlots,
  getWeekDays,
  monthLabel,
  paymentOptions,
  type PaymentPreference,
} from "@/data/booking";
import {
  ArrowRightIcon,
  CalendarIcon,
  CardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  LockIcon,
} from "@/components/ui/icons";

export interface SlotSelection {
  dateIso: string | null;
  time: string | null;
  payment: PaymentPreference | null;
}

export const emptySlotSelection: SlotSelection = { dateIso: null, time: null, payment: null };

export function isSlotComplete(s: SlotSelection): s is { dateIso: string; time: string; payment: PaymentPreference } {
  return s.dateIso !== null && s.time !== null && s.payment !== null;
}

const paymentIcons: Record<PaymentPreference, (props: { className?: string }) => React.ReactElement> = {
  now: CardIcon,
  before30: ClockIcon,
};

/**
 * Date, time and payment preference in one panel — the whole slot decision on
 * a single screen rather than three disclosed one after another.
 *
 * The strip shows one week at a time and pages with the chevrons. It can never
 * page back before today, so a date already gone is unreachable rather than
 * merely discouraged.
 *
 * Nothing here submits. The picker reports a selection upward and renders
 * whatever commit action its parent asks for, so the same panel serves the
 * homepage (slot first, details after) and /appointment (details first, slot
 * after) without either flow being special-cased in here.
 */
export function SlotPicker({
  value,
  onChange,
  onConfirm,
  confirmLabel = "Confirm Consultation",
  submitting = false,
  compact = false,
}: {
  value: SlotSelection;
  onChange: (next: SlotSelection) => void;
  onConfirm: () => void;
  confirmLabel?: string;
  submitting?: boolean;
  /** Tighter spacing where the panel shares a viewport with other content. */
  compact?: boolean;
}) {
  /* "Today" is a client-only fact: a server render and a hydration pass can
     land on different calendar days near midnight, and the mismatch would be
     a whole column of wrong dates. Both first renders agree on the skeleton. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    /* Open on the first day the clinic actually consults, so the panel arrives
       showing real times rather than an empty "pick a date first" shelf. Only
       ever on first mount — after that the choice is the visitor's. */
    if (value.dateIso === null) {
      const firstOpen = getWeekDays(0).find((d) => getAvailableSlots(d.iso).length > 0);
      if (firstOpen) onChange({ ...value, dateIso: firstOpen.iso });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [weekOffset, setWeekOffset] = useState(0);

  const days = mounted ? getWeekDays(weekOffset) : [];
  const slots = value.dateIso ? getAvailableSlots(value.dateIso) : [];
  const complete = isSlotComplete(value);

  function pickDate(iso: string) {
    // A time only means something on the date it was offered for.
    onChange({ ...value, dateIso: iso, time: null });
  }

  const hint = !value.dateIso
    ? "Pick a date to see available times"
    : !value.time
      ? slots.length > 0
        ? "Choose a time that suits you"
        : "No times on this date — try another"
      : !value.payment
        ? "Choose when you'd like to pay"
        : null;

  return (
    <div>
      {/* ---- Date ---- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className={`font-heading font-semibold text-forest-900 ${compact ? "text-lg" : "text-xl"}`}>
          Select a date
        </h3>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-[13px] font-medium text-charcoal-soft">
            <CalendarIcon className="h-4 w-4 text-charcoal-faint" />
            <span className="tabular-nums">{mounted ? monthLabel(days) : "—"}</span>
          </span>
          <WeekNavButton
            label="Previous week"
            onClick={() => setWeekOffset((w) => Math.max(0, w - 1))}
            disabled={!mounted || weekOffset === 0}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </WeekNavButton>
          <WeekNavButton
            label="Next week"
            onClick={() => setWeekOffset((w) => Math.min(MAX_WEEK_OFFSET, w + 1))}
            disabled={!mounted || weekOffset === MAX_WEEK_OFFSET}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </WeekNavButton>
        </div>
      </div>

      <div className={`grid grid-cols-7 gap-1 sm:gap-2 ${compact ? "mt-3" : "mt-4"}`}>
        {mounted
          ? days.map((d) => {
              const selected = value.dateIso === d.iso;
              const unavailable = getAvailableSlots(d.iso).length === 0;
              return (
                <button
                  key={d.iso}
                  type="button"
                  aria-pressed={selected}
                  disabled={unavailable}
                  onClick={() => pickDate(d.iso)}
                  className={`flex flex-col items-center justify-center rounded-xl border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${
                    compact ? "py-2.5" : "py-3.5"
                  } ${
                    selected
                      ? "border-forest-800 bg-forest-800 text-ivory"
                      : unavailable
                        ? "cursor-not-allowed border-transparent bg-ivory-muted/50 text-charcoal-faint/45"
                        : "border-border-strong/60 bg-surface text-charcoal-soft hover:border-forest-600/50 hover:text-forest-800"
                  }`}
                >
                  <span className="text-[9px] font-medium uppercase tracking-[0.06em] sm:text-[10px] sm:tracking-[0.08em]">{d.weekday}</span>
                  <span className={`mt-0.5 font-heading font-semibold tabular-nums ${compact ? "text-base" : "text-lg"}`}>
                    {d.day}
                  </span>
                </button>
              );
            })
          : Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className={`animate-pulse rounded-xl bg-charcoal/5 ${compact ? "h-[52px]" : "h-[64px]"}`} />
            ))}
      </div>

      {/* ---- Time ---- */}
      <div className={compact ? "mt-6" : "mt-8"}>
        <h3 className={`font-heading font-semibold text-forest-900 ${compact ? "text-lg" : "text-xl"}`}>
          Select a time
        </h3>

        <div className={compact ? "mt-3" : "mt-4"}>
          {!value.dateIso ? (
            <p className="text-[13.5px] text-charcoal-faint">Pick a date first — times differ by day.</p>
          ) : slots.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {slots.map((time) => {
                const selected = value.time === time;
                return (
                  <button
                    key={time}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onChange({ ...value, time })}
                    className={`rounded-full border font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${
                      compact ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-[14px]"
                    } ${
                      selected
                        ? "border-forest-800 bg-forest-800 text-ivory"
                        : "border-border-strong/60 bg-surface text-charcoal-soft hover:border-forest-600/50 hover:text-forest-800"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-[13.5px] text-charcoal-faint">
              The clinic isn&rsquo;t consulting on this date. Please choose another.
            </p>
          )}
        </div>
      </div>

      {/* ---- Payment preference ---- */}
      <div className={compact ? "mt-6" : "mt-8"}>
        <h3 className={`font-heading font-semibold text-forest-900 ${compact ? "text-lg" : "text-xl"}`}>
          Choose payment option
        </h3>

        <div className={`grid gap-3 sm:grid-cols-2 ${compact ? "mt-3" : "mt-4"}`}>
          {paymentOptions.map((option) => {
            const selected = value.payment === option.id;
            const Icon = paymentIcons[option.id];
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange({ ...value, payment: option.id })}
                className={`flex items-center gap-3 rounded-xl border text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${
                  compact ? "px-3.5 py-3" : "px-4 py-4"
                } ${
                  selected
                    ? "border-forest-700 bg-forest-800/[0.07]"
                    : "border-border-strong/60 bg-surface hover:border-forest-600/50"
                }`}
              >
                <Icon className={`h-5 w-5 shrink-0 ${selected ? "text-forest-700" : "text-charcoal-faint"}`} />
                <span className={`min-w-0 flex-1 font-medium text-charcoal ${compact ? "text-[13.5px]" : "text-[14.5px]"}`}>
                  {option.title}
                </span>
                {/* Radio drawn rather than native: a native input cannot carry
                    the filled-ring treatment without being restyled anyway. */}
                <span
                  aria-hidden="true"
                  className={`flex h-[1.15rem] w-[1.15rem] shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                    selected ? "border-forest-700 bg-forest-800" : "border-border-strong"
                  }`}
                >
                  {selected && <span className="h-[0.4rem] w-[0.4rem] rounded-full bg-ivory" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---- Commit ---- */}
      <button
        type="button"
        disabled={!complete || submitting}
        onClick={onConfirm}
        className={`group flex w-full items-center justify-center gap-2.5 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${
          compact ? "mt-6 py-3.5 text-[14px]" : "mt-8 py-4 text-[15px]"
        } ${
          complete && !submitting
            ? "bg-forest-900 text-ivory hover:bg-forest-800"
            : "cursor-not-allowed border border-border-strong/60 bg-ivory-muted/50 text-charcoal-faint"
        }`}
      >
        {submitting ? "Sending…" : confirmLabel}
        {!submitting && (
          <ArrowRightIcon
            className={`h-4 w-4 transition-transform duration-200 ${complete ? "group-hover:translate-x-0.5" : ""}`}
          />
        )}
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-charcoal-faint" aria-live="polite">
        {hint ?? (
          <>
            <LockIcon className="h-3.5 w-3.5" />
            Your information is secure
          </>
        )}
      </p>
    </div>
  );
}

function WeekNavButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-border-strong/60 bg-surface text-charcoal-soft transition-colors duration-200 hover:border-forest-600/50 hover:text-forest-800 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-ivory-muted/50 disabled:text-charcoal-faint/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
    >
      {children}
    </button>
  );
}
