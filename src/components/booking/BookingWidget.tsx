"use client";

import { useState } from "react";
import { formatDateLabel, type PaymentPreference } from "@/data/booking";
import { ProgressIndicator } from "./ProgressIndicator";
import { SlotPicker, emptySlotSelection, isSlotComplete, type SlotSelection } from "./SlotPicker";
import { FillDetailsStep, type DetailsValue } from "./FillDetailsStep";
import { ConfirmationPanel } from "./ConfirmationPanel";
import { SubmitError } from "./SubmitError";
import { submitAppointment } from "./submit";
import { ChevronLeftIcon } from "@/components/ui/icons";

type Phase = "details" | "slot" | "confirmed";

const emptyDetails: DetailsValue = { name: "", phone: "", concern: null, otherText: "", consent: false };

/**
 * The booking flow: who you are, then when — and the request is sent at the
 * end of the second step, so nothing is submitted until the slot is chosen.
 *
 * The widget carries no card of its own. It sits in the right half of the
 * booking panel, which supplies the ground it is drawn on; a card inside that
 * would read as a seam.
 */
export function BookingWidget({ compact = false }: { compact?: boolean }) {
  const [phase, setPhase] = useState<Phase>("details");
  const [details, setDetails] = useState<DetailsValue>(emptyDetails);
  const [selection, setSelection] = useState<SlotSelection>(emptySlotSelection);
  const [confirmed, setConfirmed] = useState<{ dateIso: string; time: string; payment: PaymentPreference } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function submit() {
    if (!isSlotComplete(selection)) return;
    setSubmitting(true);
    setErrorMessage("");

    const result = await submitAppointment({
      details,
      dateIso: selection.dateIso,
      time: selection.time,
      payment: selection.payment,
      location: "appointment_page",
    });

    setSubmitting(false);
    if (result.ok) {
      setConfirmed({ dateIso: selection.dateIso, time: selection.time, payment: selection.payment });
      setPhase("confirmed");
      return;
    }
    setErrorMessage(result.message ?? "");
  }

  return (
    <div>
      {phase !== "confirmed" && (
        <div className={`border-b border-border ${compact ? "mb-6 pb-5" : "mb-8 pb-6"}`}>
          <ProgressIndicator step={phase === "details" ? 1 : 2} />
        </div>
      )}

      {phase === "details" && (
        <FillDetailsStep
          value={details}
          onChange={setDetails}
          onContinue={() => setPhase("slot")}
          compact={compact}
        />
      )}

      {phase === "slot" && (
        <div>
          {/* Who this booking is for stays on screen, with the way back to
              correct it — a mistyped number is worth catching here. */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-strong/60 bg-ivory-muted/60 px-4 py-3">
            <p className="min-w-0 truncate text-[13.5px] text-charcoal">
              <span className="text-charcoal-faint">Booking for: </span>
              {details.name}
            </p>
            <button
              type="button"
              onClick={() => setPhase("details")}
              className="flex shrink-0 items-center gap-1 text-[13px] font-medium text-forest-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2"
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
              Edit
            </button>
          </div>

          <SlotPicker
            value={selection}
            onChange={setSelection}
            onConfirm={submit}
            confirmLabel={selection.payment === "now" ? "Pay & Confirm Consultation" : "Confirm Consultation"}
            submitting={submitting}
            compact={compact}
          />

          {errorMessage && <SubmitError message={errorMessage} location="booking_widget_error" />}
        </div>
      )}

      {phase === "confirmed" && confirmed && (
        <ConfirmationPanel
          details={details}
          dateLabel={formatDateLabel(confirmed.dateIso)}
          time={confirmed.time}
          paymentPreference={confirmed.payment}
          compact={compact}
        />
      )}
    </div>
  );
}
