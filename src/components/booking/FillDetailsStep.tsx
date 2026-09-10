"use client";

import { concernOptions, type ConcernOption } from "@/data/booking";
import { ArrowRightIcon, CheckIcon, PhoneIcon, UserIcon } from "@/components/ui/icons";

export interface DetailsValue {
  name: string;
  phone: string;
  concern: ConcernOption | null;
  /** Free text, only collected when "Other" is the selected concern. */
  otherText: string;
  consent: boolean;
}

const PHONE_RE = /^(\+?91[-\s]?)?[0]?[6-9]\d{9}$/;

export function isDetailsValid(v: DetailsValue): boolean {
  if (v.name.trim().length < 2) return false;
  if (!PHONE_RE.test(v.phone.replace(/[\s-]/g, ""))) return false;
  if (v.concern === null) return false;
  if (v.concern === "Other" && v.otherText.trim().length < 3) return false;
  return v.consent;
}

/** Resolves the concern to a single string for the confirmation and the API. */
export function concernLabel(v: DetailsValue): string {
  if (v.concern === "Other") return v.otherText.trim() || "Other";
  return v.concern ?? "";
}

/** Names the single next thing to do, so the disabled CTA is never a dead end. */
function nextActionHint(v: DetailsValue): string | null {
  if (v.name.trim().length < 2) return "Add your name to continue";
  if (!PHONE_RE.test(v.phone.replace(/[\s-]/g, ""))) return "Add a valid 10-digit mobile number";
  if (v.concern === null) return "Choose what you'd like help with";
  if (v.concern === "Other" && v.otherText.trim().length < 3) return "Tell us briefly what you'd like help with";
  if (!v.consent) return "Tick the consent box to continue";
  return null;
}

/**
 * One spacing scale, shared with SlotPicker's rhythm: a heading, its content
 * at `toContent` below, then `sectionGap` before the next heading. Step 1 and
 * Step 2 are drawn from the same system rather than two that happen to sit
 * next to each other, so the step boundary should not read as a seam.
 */
function scale(compact: boolean) {
  return {
    sectionGap: compact ? "mt-6" : "mt-8",
    toContent: compact ? "mt-3" : "mt-4",
    fieldGap: compact ? "space-y-4" : "space-y-5",
    inputPad: compact ? "py-3" : "py-3.5",
    inputText: compact ? "text-[14.5px]" : "text-[15px]",
    chipPad: compact ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-[14px]",
    ctaPad: compact ? "py-3.5 text-[14px]" : "py-4 text-[15px]",
  };
}

/** Matches SlotPicker's section headings exactly — same tag, weight and colour. */
const HEADING = "font-heading font-semibold text-forest-900";
const FIELD_LABEL = "block text-[13px] font-medium text-charcoal";

export function FillDetailsStep({
  value,
  onChange,
  onContinue,
  compact = false,
  ctaLabel,
  ctaLabelShort,
  submitting = false,
  hintWhenReady,
}: {
  value: DetailsValue;
  onChange: (next: DetailsValue) => void;
  onContinue: () => void;
  /** Tighter spacing for the homepage's single-viewport presentation. */
  compact?: boolean;
  /**
   * The step is the last one in the homepage flow and the first on
   * /appointment, so what its button promises differs. Both default to the
   * "next step" wording rather than assuming either flow.
   */
  ctaLabel?: string;
  /** Shown below `sm`, where the full label would wrap to two lines. */
  ctaLabelShort?: string;
  /** Blocks the button and says so while a request is in flight. */
  submitting?: boolean;
  /** Replaces the hint under the button once every field is filled in. */
  hintWhenReady?: string;
}) {
  const valid = isDetailsValid(value);
  const hint = nextActionHint(value);
  const s = scale(compact);
  const longLabel = ctaLabel ?? "Next: Choose an Appointment Slot";
  const shortLabel = ctaLabelShort ?? ctaLabel ?? "Next: Choose a Slot";
  const headingSize = compact ? "text-lg" : "text-xl";

  const shell =
    "flex w-full items-center gap-2 rounded-xl border border-border-strong/60 bg-surface transition-colors duration-150 hover:border-border-strong focus-within:border-forest-600 focus-within:ring-2 focus-within:ring-forest-600/30 focus-within:ring-offset-2 focus-within:ring-offset-ivory";
  const field = `w-full bg-transparent text-charcoal placeholder:text-charcoal-faint/70 focus:outline-none ${s.inputText}`;

  return (
    <div>
      <h3 className={`${HEADING} ${headingSize}`}>Tell us about your health journey</h3>

      <div className={`${s.toContent} ${s.fieldGap}`}>
        <div>
          <label htmlFor="booking-name" className={FIELD_LABEL}>
            Full Name
          </label>
          <div className={`mt-2 ${shell} px-4`}>
            <input
              id="booking-name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={value.name}
              onChange={(e) => onChange({ ...value, name: e.target.value })}
              className={`${field} ${s.inputPad}`}
            />
            <UserIcon className="h-4 w-4 shrink-0 text-charcoal-faint" />
          </div>
        </div>

        <div>
          <label htmlFor="booking-phone" className={FIELD_LABEL}>
            Mobile Number
          </label>
          <div className={`mt-2 ${shell} pr-4`}>
            <span
              className={`flex shrink-0 select-none items-center self-stretch border-r border-border-strong/60 px-3.5 text-charcoal-soft ${s.inputText}`}
            >
              +91
            </span>
            <input
              id="booking-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Enter your mobile number"
              value={value.phone}
              onChange={(e) => onChange({ ...value, phone: e.target.value })}
              className={`${field} ${s.inputPad}`}
            />
            <PhoneIcon className="h-4 w-4 shrink-0 text-charcoal-faint" />
          </div>
        </div>
      </div>

      <div className={s.sectionGap}>
        <fieldset className="border-0 p-0">
          <legend className={`${HEADING} ${headingSize}`}>What would you like help with?</legend>

          <div className={`flex flex-wrap gap-2 ${s.toContent}`}>
            {concernOptions.map((option) => {
              const selected = value.concern === option;
              return (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="booking-concern"
                    value={option}
                    checked={selected}
                    onChange={() => onChange({ ...value, concern: option })}
                    className="peer sr-only"
                  />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-forest-600/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ivory ${s.chipPad} ${
                      selected
                        ? "border-forest-800 bg-forest-800 text-ivory"
                        : "border-border-strong/60 bg-surface text-charcoal-soft hover:border-forest-600/50 hover:text-forest-800"
                    }`}
                  >
                    {selected && <CheckIcon className="h-3 w-3 shrink-0" />}
                    {option}
                  </span>
                </label>
              );
            })}
          </div>

          {/* Revealed only when it can actually be answered. */}
          {value.concern === "Other" && (
            <div className="mt-3 animate-[fadeIn_240ms_ease-out]">
              <label htmlFor="booking-other" className="sr-only">
                Tell us what you would like help with
              </label>
              <div className={`${shell} px-4`}>
                <input
                  id="booking-other"
                  type="text"
                  placeholder="Tell us briefly what you'd like help with"
                  value={value.otherText}
                  onChange={(e) => onChange({ ...value, otherText: e.target.value })}
                  className={`${field} ${s.inputPad}`}
                />
              </div>
            </div>
          )}
        </fieldset>
      </div>

      <label className={`flex cursor-pointer items-start gap-3 ${s.sectionGap}`}>
        <input
          type="checkbox"
          checked={value.consent}
          onChange={(e) => onChange({ ...value, consent: e.target.checked })}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={`mt-px flex h-[1.15rem] w-[1.15rem] shrink-0 items-center justify-center rounded-[5px] border transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-forest-600/50 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ivory ${
            value.consent ? "border-forest-800 bg-forest-800 text-ivory" : "border-border-strong/60 bg-surface"
          }`}
        >
          {value.consent && <CheckIcon className="h-2.5 w-2.5" />}
        </span>
        <span className="text-[12.5px] leading-relaxed text-charcoal-soft">
          I consent to the clinic contacting me on this number about my consultation.
        </span>
      </label>

      <button
        type="button"
        disabled={!valid || submitting}
        onClick={onContinue}
        className={`group flex w-full items-center justify-center gap-2.5 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${s.sectionGap} ${s.ctaPad} ${
          valid && !submitting
            ? "bg-forest-900 text-ivory hover:bg-forest-800"
            : "cursor-not-allowed border border-border-strong/60 bg-ivory-muted/50 text-charcoal-faint"
        }`}
      >
        {submitting ? (
          "Sending…"
        ) : (
          <>
            {/* Shortened on narrow cards so the label never wraps to two lines. */}
            <span className="sm:hidden">{shortLabel}</span>
            <span className="hidden sm:inline">{longLabel}</span>
            <ArrowRightIcon
              className={`h-4 w-4 transition-transform duration-200 ${valid ? "group-hover:translate-x-0.5" : ""}`}
            />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[12px] text-charcoal-faint" aria-live="polite">
        {hint ?? hintWhenReady ?? "Next: choose a date and time that suits you."}
      </p>
    </div>
  );
}
