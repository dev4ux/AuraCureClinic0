import { NextResponse } from "next/server";

/**
 * Appointment intake endpoint.
 *
 * Validation runs server-side regardless of what the client sends. Nothing is
 * persisted or forwarded yet — wire this to the clinic's chosen destination
 * (email inbox, CRM or sheet) via environment variables before launch. Never
 * put credentials in client-side code.
 */

const MAX_LENGTHS = { name: 80, phone: 20, reason: 600, preferredTime: 60 };

interface AppointmentPayload {
  name: string;
  phone: string;
  preferredTime: string;
  reason: string;
  consent: boolean;
  /** Honeypot — must stay empty; bots typically fill every field. */
  website?: string;
}

function validate(body: Partial<AppointmentPayload>) {
  const errors: Record<string, string> = {};

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const preferredTime = (body.preferredTime ?? "").trim();
  const reason = (body.reason ?? "").trim();

  if (name.length < 2 || name.length > MAX_LENGTHS.name) {
    errors.name = "Please enter your name.";
  }
  // Indian mobile numbers, optionally with +91 / 0 prefix and separators.
  if (!/^(\+?91[-\s]?)?[0]?[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ""))) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }
  if (preferredTime.length > MAX_LENGTHS.preferredTime) {
    errors.preferredTime = "Preferred time is too long.";
  }
  if (reason.length > MAX_LENGTHS.reason) {
    errors.reason = "Please keep this under 600 characters.";
  }
  if (body.consent !== true) {
    errors.consent = "Please confirm consent so we can contact you.";
  }

  return { errors, clean: { name, phone, preferredTime, reason } };
}

export async function POST(request: Request) {
  let body: Partial<AppointmentPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: respond as success so bots don't learn they were filtered.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const { errors } = validate(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO before launch: forward `clean` to the clinic's chosen destination.
  // Read any credentials from process.env — never hardcode them here.
  if (!process.env.APPOINTMENT_WEBHOOK_URL) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Online booking isn't connected yet. Please call or WhatsApp the clinic to book — we'll respond right away.",
        notConfigured: true,
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
