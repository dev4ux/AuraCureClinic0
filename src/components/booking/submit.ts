"use client";

import { formatSelectedSlot, paymentLabel, visitTypeLabel } from "@/data/booking";
import { track } from "@/lib/analytics";
import type { ConfirmedBooking } from "./ConfirmationPanel";

export interface SubmitResult {
  ok: boolean;
  /** Present only on failure — safe to show to the patient as-is. */
  message?: string;
}

/** The last 10 digits, whatever prefix (+91, 0, spaces) the patient typed. */
export function normalisePhone(raw: string): string {
  return raw.replace(/\D/g, "").slice(-10);
}

/** Turns a completed booking into the API request. */
export async function submitAppointment(booking: ConfirmedBooking, location: string): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: booking.name,
        phone: booking.phone,
        visitType: booking.visitType,
        // In-clinic has no slot: the patient may come any time in clinic hours.
        preferredTime:
          booking.visitType === "clinic"
            ? `${formatSelectedSlot(booking.dateIso, booking.time)} (clinic hours)`
            : formatSelectedSlot(booking.dateIso, booking.time),
        reason: `${visitTypeLabel(booking.visitType)} — ${booking.concern} — payment: ${paymentLabel(booking.payment)}`,
        consent: true,
      }),
    });
    const result = await response.json();

    if (response.ok && result.ok) {
      track("appointment_form_submit_success", { location, visit_type: booking.visitType });
      return { ok: true };
    }

    track("appointment_form_submit_error", { location });
    return {
      ok: false,
      message: result.message ?? "Something went wrong. Please call or WhatsApp the clinic instead.",
    };
  } catch {
    track("appointment_form_submit_error", { location });
    return { ok: false, message: "We couldn't send that. Please call or WhatsApp the clinic instead." };
  }
}
