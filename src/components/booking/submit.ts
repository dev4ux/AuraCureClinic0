"use client";

import { formatSelectedSlot, type PaymentPreference } from "@/data/booking";
import { track } from "@/lib/analytics";
import { concernLabel, type DetailsValue } from "./FillDetailsStep";

export interface SubmitResult {
  ok: boolean;
  /** Present only on failure — safe to show to the patient as-is. */
  message?: string;
}

/**
 * One place that turns a completed booking into an API request, shared by both
 * flows: /appointment collects details first and slot second, the homepage the
 * other way round, but the request they send is identical and should not drift
 * between them.
 */
export async function submitAppointment({
  details,
  dateIso,
  time,
  payment,
  location,
}: {
  details: DetailsValue;
  dateIso: string;
  time: string;
  payment: PaymentPreference;
  /** Analytics only — which form on the site sent this. */
  location: string;
}): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: details.name,
        phone: details.phone,
        preferredTime: formatSelectedSlot(dateIso, time),
        reason: `${concernLabel(details)} — payment preference: ${
          payment === "now" ? "Pay now" : "Pay before 30 minutes"
        }`,
        consent: details.consent,
      }),
    });
    const result = await response.json();

    if (response.ok && result.ok) {
      track("appointment_form_submit_success", { location });
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
