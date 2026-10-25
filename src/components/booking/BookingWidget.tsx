"use client";

import { useRef, useState } from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import { VisitStep, emptyVisit, isVisitValid, concernLabel, type VisitValue } from "./VisitStep";
import { SlotPicker, emptySlotSelection, isSlotComplete, type SlotSelection } from "./SlotPicker";
import { FillDetailsStep, emptyDetails, isDetailsValid, type DetailsValue } from "./FillDetailsStep";
import { BookingSummary } from "./BookingSummary";
import { ConfirmationPanel, type ConfirmedBooking } from "./ConfirmationPanel";
import { SubmitError } from "./SubmitError";
import { normalisePhone, submitAppointment } from "./submit";

type Step = 1 | 2 | 3;

/**
 * The booking flow, in the order patients decide it: how they will consult
 * (in-clinic or online) and what for, then when, then who they are. Each
 * step is one short screen on a phone; nothing is sent until the last one.
 */
export function BookingWidget() {
  const [step, setStep] = useState<Step>(1);
  const [visit, setVisit] = useState<VisitValue>(emptyVisit);
  const [slot, setSlot] = useState<SlotSelection>(emptySlotSelection);
  const [details, setDetails] = useState<DetailsValue>(emptyDetails);
  const [confirmed, setConfirmed] = useState<ConfirmedBooking | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  /* On a phone the button that moves you on sits at the bottom of the step;
     the next step must start from its own top, not mid-way down. */
  function goTo(next: Step | "done") {
    if (next === "done") setStep(3);
    else setStep(next);
    setErrorMessage("");
    const el = topRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Switching in-clinic ↔ online invalidates what was chosen for the other:
  // online has fixed slots, in-clinic has clinic hours, and the two offer
  // different ways to pay. Start those choices afresh.
  function changeVisit(next: VisitValue) {
    if (next.visitType !== visit.visitType) {
      setSlot(emptySlotSelection);
      setDetails((d) => ({ ...d, payment: null }));
    }
    setVisit(next);
  }

  async function submit() {
    if (!isVisitValid(visit) || !isSlotComplete(slot) || !isDetailsValid(details)) return;
    const booking: ConfirmedBooking = {
      name: details.name.trim(),
      phone: normalisePhone(details.phone),
      visitType: visit.visitType,
      concern: concernLabel(visit),
      dateIso: slot.dateIso,
      time: slot.time,
      payment: details.payment,
    };

    setSubmitting(true);
    setErrorMessage("");
    const result = await submitAppointment(booking, "appointment_page");
    setSubmitting(false);

    if (result.ok) {
      setConfirmed(booking);
      goTo("done");
      return;
    }
    setErrorMessage(result.message ?? "");
  }

  return (
    <div ref={topRef} className="scroll-mt-[calc(var(--header-h)+1rem)]">
      {confirmed ? (
        <ConfirmationPanel booking={confirmed} />
      ) : (
        <>
          <div className="mb-6">
            <ProgressIndicator step={step} visitType={visit.visitType} />
          </div>

          {step > 1 && visit.visitType && (
            <BookingSummary
              visitType={visit.visitType}
              concern={concernLabel(visit)}
              dateIso={step === 3 ? (slot.dateIso ?? undefined) : undefined}
              time={step === 3 ? (slot.time ?? undefined) : undefined}
              onBack={() => goTo(step === 3 ? 2 : 1)}
            />
          )}

          {step === 1 && <VisitStep value={visit} onChange={changeVisit} onContinue={() => goTo(2)} />}

          {step === 2 && visit.visitType && (
            <SlotPicker value={slot} onChange={setSlot} onContinue={() => goTo(3)} visitType={visit.visitType} />
          )}

          {step === 3 && visit.visitType && (
            <>
              <FillDetailsStep
                value={details}
                onChange={setDetails}
                visitType={visit.visitType}
                onSubmit={submit}
                submitting={submitting}
              />
              {errorMessage && <SubmitError message={errorMessage} location="booking_widget_error" />}
            </>
          )}
        </>
      )}
    </div>
  );
}
