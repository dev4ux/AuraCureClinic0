"use client";

import { useEffect, useState } from "react";
import {
  MAX_WEEK_OFFSET,
  clinicHoursLabel,
  getAvailableSlots,
  getWeekDays,
  isClinicDayOpen,
  monthLabel,
  weekOffsetOf,
  type VisitType,
} from "@/data/booking";
import { siteConfig } from "@/lib/site-config";
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from "@/components/ui/icons";
import { ContinueButton, FOCUS_RING, StepHeading, chipClass } from "./parts";

export interface SlotSelection {
  dateIso: string | null;
  time: string | null;
}

export const emptySlotSelection: SlotSelection = { dateIso: null, time: null };

export function isSlotComplete(s: SlotSelection): s is { dateIso: string; time: string } {
  return s.dateIso !== null && s.time !== null;
}

/**
 * Online: a date and a fixed time slot. In-clinic: a date only — the patient
 * comes in any time during clinic hours, so instead of slots the step shows
 * those hours, and the "time" recorded is the clinic's hours.
 *
 * The strip shows one week at a time and pages with the chevrons; it can never
 * page back before today, so a date already gone is unreachable.
 */
export function SlotPicker({
  value,
  onChange,
  onContinue,
  visitType,
}: {
  value: SlotSelection;
  onChange: (next: SlotSelection) => void;
  onContinue: () => void;
  visitType: VisitType;
}) {
  const inClinic = visitType === "clinic";
  const isOpen = (iso: string) => (inClinic ? isClinicDayOpen(iso) : getAvailableSlots(iso).length > 0);
  // Choosing a date is the whole decision for an in-clinic visit.
  const selectDate = (iso: string) => onChange({ dateIso: iso, time: inClinic ? clinicHoursLabel : null });

  /* "Today" is a client-only fact: a server render and a hydration pass can
     land on different calendar days near midnight, and the mismatch would be
     a whole column of wrong dates. Both first renders agree on the skeleton. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    /* Open on the first day the clinic actually consults, so the panel arrives
       showing real times rather than an empty shelf. Only on first mount. */
    if (value.dateIso === null) {
      const firstOpen = getWeekDays(0).find((d) => isOpen(d.iso));
      if (firstOpen) selectDate(firstOpen.iso);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Coming back to this step reopens the week holding the chosen date. (This
  // step only ever renders after a click, never on the server, so reading
  // the clock here cannot cause a hydration mismatch.)
  const [weekOffset, setWeekOffset] = useState(() => (value.dateIso ? weekOffsetOf(value.dateIso) : 0));
  const days = mounted ? getWeekDays(weekOffset) : [];
  const slots = value.dateIso ? getAvailableSlots(value.dateIso) : [];

  const hint = !value.dateIso
    ? inClinic
      ? "Pick the day you'd like to visit"
      : "Pick a date to see available times"
    : !value.time
      ? slots.length > 0
        ? "Choose a time that suits you"
        : "No times on this date — try another"
      : null;

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <StepHeading>{inClinic ? "Select a visit date" : "Select a date"}</StepHeading>
        <div className="flex items-center gap-1.5">
          <span className="mr-1 text-[13px] font-medium tabular-nums text-charcoal-soft">
            {mounted ? monthLabel(days) : "—"}
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

      <div className="mt-3 grid grid-cols-7 gap-1.5 sm:gap-2">
        {mounted
          ? days.map((d) => {
              const selected = value.dateIso === d.iso;
              const unavailable = !isOpen(d.iso);
              return (
                <button
                  key={d.iso}
                  type="button"
                  aria-pressed={selected}
                  aria-label={`${d.weekday} ${d.day}${unavailable ? ", closed" : ""}`}
                  disabled={unavailable}
                  onClick={() => selectDate(d.iso)}
                  className={`flex min-h-[3.75rem] flex-col items-center justify-center rounded-xl border transition-colors duration-200 ${FOCUS_RING} ${
                    selected
                      ? "border-forest-900 bg-forest-900 text-ivory"
                      : unavailable
                        ? "cursor-not-allowed border-transparent bg-ivory-muted/60 text-charcoal-faint/50 line-through"
                        : "border-border-strong/70 bg-surface text-charcoal-soft hover:border-forest-600/60 hover:text-forest-900"
                  }`}
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.06em]">{d.weekday}</span>
                  <span className="mt-0.5 font-heading text-[17px] font-semibold tabular-nums">{d.day}</span>
                </button>
              );
            })
          : Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-[3.75rem] animate-pulse rounded-xl bg-charcoal/5" />
            ))}
      </div>

      {inClinic ? (
        /* No slot to pick — the clinic's hours, said plainly. */
        <div className="mt-7 flex items-start gap-3 rounded-xl border border-border-strong/60 bg-surface px-4 py-3.5">
          <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
          <div>
            <p className="text-[14px] font-medium text-charcoal">Clinic timings: {clinicHoursLabel}</p>
            <p className="mt-0.5 text-[13px] leading-snug text-charcoal-soft">
              Visit any time during these hours on your chosen day — no fixed slot needed.{" "}
              {siteConfig.hours.closedNote}.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-7">
          <StepHeading>Select a time</StepHeading>
          <div className="mt-3">
            {!value.dateIso ? (
              <p className="text-[13.5px] text-charcoal-faint">Pick a date first — times differ by day.</p>
            ) : slots.length > 0 ? (
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {slots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    aria-pressed={value.time === time}
                    onClick={() => onChange({ ...value, time })}
                    className={`${chipClass(value.time === time, "box")} ${FOCUS_RING} tabular-nums`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-[13.5px] text-charcoal-faint">
                The clinic isn&rsquo;t consulting on this date. Please choose another.
              </p>
            )}
          </div>
        </div>
      )}

      <ContinueButton
        label="Add your details"
        enabled={isSlotComplete(value)}
        hint={hint}
        readyNote="Last step: your name and number."
        onClick={onContinue}
      />
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
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border-strong/70 bg-surface text-charcoal-soft transition-colors duration-200 hover:border-forest-600/60 hover:text-forest-900 disabled:cursor-not-allowed disabled:border-transparent disabled:bg-ivory-muted/60 disabled:text-charcoal-faint/40 ${FOCUS_RING}`}
    >
      {children}
    </button>
  );
}
