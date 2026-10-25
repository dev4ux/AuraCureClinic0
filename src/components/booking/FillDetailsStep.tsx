"use client";

import { paymentOptionsFor, type PaymentPreference, type VisitType } from "@/data/booking";
import { CardIcon, CheckIcon, ClinicIcon, ClockIcon, LockIcon } from "@/components/ui/icons";
import { ContinueButton, OptionCard, StepHeading } from "./parts";

export interface DetailsValue {
  name: string;
  phone: string;
  payment: PaymentPreference | null;
  consent: boolean;
}

export const emptyDetails: DetailsValue = { name: "", phone: "", payment: null, consent: false };

const PHONE_RE = /^(\+?91[-\s]?)?[0]?[6-9]\d{9}$/;

const nameOk = (v: DetailsValue) => v.name.trim().length >= 2;
const phoneOk = (v: DetailsValue) => PHONE_RE.test(v.phone.replace(/[\s-]/g, ""));

export function isDetailsValid(v: DetailsValue): v is DetailsValue & { payment: PaymentPreference } {
  return nameOk(v) && phoneOk(v) && v.payment !== null && v.consent;
}

/** Names the single next thing to do, so the disabled button is never a dead end. */
function hintFor(v: DetailsValue): string | null {
  if (!nameOk(v)) return "Add your name to continue";
  if (!phoneOk(v)) return "Add a valid 10-digit mobile number";
  if (v.payment === null) return "Choose how you'd like to pay";
  if (!v.consent) return "Tick the consent box to continue";
  return null;
}

const paymentIcons: Record<PaymentPreference, React.ReactNode> = {
  atClinic: <ClinicIcon className="h-5 w-5" />,
  now: <CardIcon className="h-5 w-5" />,
  before30: <ClockIcon className="h-5 w-5" />,
};

const FIELD_LABEL = "block text-[13.5px] font-medium text-charcoal";
// 16px text: anything smaller makes iOS Safari zoom the page on focus.
const INPUT =
  "min-h-12 w-full rounded-xl border border-border-strong/70 bg-surface px-4 text-[16px] text-charcoal placeholder:text-charcoal-faint/80 transition-colors focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/30";

export function FillDetailsStep({
  value,
  onChange,
  visitType,
  onSubmit,
  submitting,
}: {
  value: DetailsValue;
  onChange: (next: DetailsValue) => void;
  visitType: VisitType;
  onSubmit: () => void;
  submitting: boolean;
}) {
  const options = paymentOptionsFor(visitType);

  return (
    <div>
      <StepHeading>Your details</StepHeading>

      <div className="mt-3 space-y-4">
        <div>
          <label htmlFor="booking-name" className={FIELD_LABEL}>
            Full name
          </label>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Patient's full name"
            value={value.name}
            onChange={(e) => onChange({ ...value, name: e.target.value })}
            className={`mt-1.5 ${INPUT}`}
          />
        </div>

        <div>
          <label htmlFor="booking-phone" className={FIELD_LABEL}>
            Mobile number
          </label>
          <div className="mt-1.5 flex min-h-12 items-stretch overflow-hidden rounded-xl border border-border-strong/70 bg-surface transition-colors focus-within:border-forest-600 focus-within:ring-2 focus-within:ring-forest-600/30">
            <span className="flex shrink-0 select-none items-center whitespace-nowrap border-r border-border-strong/60 bg-ivory-muted/50 px-3.5 text-[16px] text-charcoal-soft">
              +91
            </span>
            <input
              id="booking-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              // Room for "+91 98290-12345" and similar ways people write a number.
              maxLength={18}
              placeholder="10-digit mobile number"
              value={value.phone}
              onChange={(e) => onChange({ ...value, phone: e.target.value })}
              className="w-full min-w-0 bg-transparent px-4 text-[16px] text-charcoal placeholder:text-charcoal-faint/80 focus:outline-none"
            />
          </div>
          <p className="mt-1.5 text-[12px] text-charcoal-faint">The clinic will call this number to confirm.</p>
        </div>
      </div>

      <fieldset className="mt-7 border-0 p-0">
        <StepHeading as="legend">Payment</StepHeading>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {options.map((option) => (
            <OptionCard
              key={option.id}
              name="booking-payment"
              checked={value.payment === option.id}
              onSelect={() => onChange({ ...value, payment: option.id })}
              icon={paymentIcons[option.id]}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </fieldset>

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={value.consent}
          onChange={(e) => onChange({ ...value, consent: e.target.checked })}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={`mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-forest-600/50 peer-focus-visible:ring-offset-2 ${
            value.consent ? "border-forest-900 bg-forest-900 text-ivory" : "border-border-strong bg-surface"
          }`}
        >
          {value.consent && <CheckIcon className="h-3 w-3" />}
        </span>
        <span className="text-[13px] leading-relaxed text-charcoal-soft">
          I agree to the clinic contacting me on this number about my consultation.
        </span>
      </label>

      <ContinueButton
        label={value.payment === "now" ? "Pay & book appointment" : "Book appointment"}
        enabled={isDetailsValid(value)}
        busy={submitting}
        hint={hintFor(value)}
        readyNote={
          <>
            <LockIcon className="h-3.5 w-3.5" />
            Your details are only used for your consultation.
          </>
        }
        onClick={onSubmit}
      />
    </div>
  );
}
