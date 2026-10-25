"use client";

import { concernOptions, visitTypes, type ConcernOption, type VisitType } from "@/data/booking";
import { CheckIcon, ClinicIcon, VideoIcon } from "@/components/ui/icons";
import { ClinicLocationLink } from "./ClinicLocationLink";
import { ContinueButton, OptionCard, StepHeading, chipClass } from "./parts";

export interface VisitValue {
  visitType: VisitType | null;
  concern: ConcernOption | null;
  /** Free text, only collected when "Other" is the selected concern. */
  otherText: string;
}

export const emptyVisit: VisitValue = { visitType: null, concern: null, otherText: "" };

export function isVisitValid(v: VisitValue): v is VisitValue & { visitType: VisitType; concern: ConcernOption } {
  if (v.visitType === null || v.concern === null) return false;
  return v.concern !== "Other" || v.otherText.trim().length >= 3;
}

/** Resolves the concern to a single string for the summary and the API. */
export function concernLabel(v: VisitValue): string {
  if (v.concern === "Other") return v.otherText.trim() || "Other";
  return v.concern ?? "";
}

function hintFor(v: VisitValue): string | null {
  if (v.visitType === null) return "Choose in-clinic or online to continue";
  if (v.concern === null) return "Choose what you'd like help with";
  if (v.concern === "Other" && v.otherText.trim().length < 3) return "Tell us briefly what you'd like help with";
  return null;
}

const visitIcons: Record<VisitType, React.ReactNode> = {
  clinic: <ClinicIcon className="h-5 w-5" />,
  online: <VideoIcon className="h-5 w-5" />,
};

export function VisitStep({
  value,
  onChange,
  onContinue,
}: {
  value: VisitValue;
  onChange: (next: VisitValue) => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <fieldset className="border-0 p-0">
        <StepHeading as="legend">How would you like to consult?</StepHeading>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {visitTypes.map((v) => (
            <OptionCard
              key={v.id}
              name="booking-visit-type"
              checked={value.visitType === v.id}
              onSelect={() => onChange({ ...value, visitType: v.id })}
              icon={visitIcons[v.id]}
              tag={v.tag}
              title={v.title}
              description={v.description}
            />
          ))}
        </div>
      </fieldset>

      {/* What the choice means in practice, said once it is made. */}
      {value.visitType === "clinic" && (
        <ClinicLocationLink location="booking_visit_step" className="mt-3 animate-[fadeIn_240ms_ease-out]" />
      )}
      {value.visitType === "online" && (
        <p className="mt-3 animate-[fadeIn_240ms_ease-out] rounded-xl bg-ivory-muted/70 px-4 py-3 text-[13px] leading-relaxed text-charcoal-soft">
          The clinic will send the video call details to your mobile number before your slot. A phone with a camera
          and a steady connection is all you need.
        </p>
      )}

      <fieldset className="mt-7 border-0 p-0">
        <StepHeading as="legend">What would you like help with?</StepHeading>
        <div className="mt-3 flex flex-wrap gap-2">
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
                  className={`${chipClass(selected)} peer-focus-visible:ring-2 peer-focus-visible:ring-forest-600/50 peer-focus-visible:ring-offset-2`}
                >
                  {selected && <CheckIcon className="h-3 w-3 shrink-0" />}
                  {option}
                </span>
              </label>
            );
          })}
        </div>

        {value.concern === "Other" && (
          <div className="mt-3 animate-[fadeIn_240ms_ease-out]">
            <label htmlFor="booking-other" className="sr-only">
              Tell us what you would like help with
            </label>
            <input
              id="booking-other"
              type="text"
              placeholder="Tell us briefly what you'd like help with"
              value={value.otherText}
              onChange={(e) => onChange({ ...value, otherText: e.target.value })}
              className="min-h-12 w-full rounded-xl border border-border-strong/70 bg-surface px-4 text-[16px] text-charcoal placeholder:text-charcoal-faint/80 focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/30"
            />
          </div>
        )}
      </fieldset>

      <ContinueButton
        label={value.visitType === "clinic" ? "Choose visit date" : "Choose date & time"}
        enabled={isVisitValid(value)}
        hint={hintFor(value)}
        readyNote={
          value.visitType === "clinic"
            ? "Next: pick the day you'd like to visit."
            : "Next: pick a slot that suits you."
        }
        onClick={onContinue}
      />
    </div>
  );
}
