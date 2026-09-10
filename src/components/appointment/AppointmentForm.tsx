"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  phone?: string;
  preferredTime?: string;
  reason?: string;
  consent?: string;
}

const inputClass =
  "w-full rounded-md border border-border-strong bg-surface px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal-faint focus:border-forest-600 focus:outline-none";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formMessage, setFormMessage] = useState("");
  const [showDirectContact, setShowDirectContact] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      preferredTime: String(data.get("preferredTime") ?? ""),
      reason: String(data.get("reason") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
    };

    setStatus("submitting");
    setErrors({});
    setFormMessage("");
    setShowDirectContact(false);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus("success");
        track("appointment_form_submit_success");
        form.reset();
        return;
      }

      if (result.errors) {
        setErrors(result.errors as FieldErrors);
        setStatus("error");
        setFormMessage("Please check the highlighted fields.");
      } else {
        setStatus("error");
        setFormMessage(result.message ?? "Something went wrong. Please call or WhatsApp the clinic instead.");
        setShowDirectContact(true);
      }
      track("appointment_form_submit_error");
    } catch {
      setStatus("error");
      setFormMessage("We couldn't send that. Please call or WhatsApp the clinic instead.");
      setShowDirectContact(true);
      track("appointment_form_submit_error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-forest-600/30 bg-surface p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-800 text-ivory">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
          The clinic will call you back to confirm a time. If your concern is urgent, please call directly rather than
          waiting for a callback.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={siteConfig.contact.phoneHref} variant="secondary" icon={<PhoneIcon className="h-4 w-4" />}>
            {siteConfig.contact.phoneDisplay}
          </Button>
          <Button
            href={siteConfig.contact.whatsappHref}
            external
            variant="secondary"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border bg-surface p-6 sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal">
            Your name <span className="text-error">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`mt-2 ${inputClass} ${errors.name ? "border-error" : ""}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-error">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
            Mobile number <span className="text-error">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="10-digit mobile number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
            className={`mt-2 ${inputClass} ${errors.phone ? "border-error" : ""}`}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-sm text-error">
              {errors.phone}
            </p>
          ) : (
            <p id="phone-hint" className="mt-1.5 text-xs text-charcoal-faint">
              The clinic calls back on this number to confirm your slot.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-charcoal">
            Preferred day or time <span className="font-normal text-charcoal-faint">(optional)</span>
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="text"
            placeholder="e.g. Tuesday morning"
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-charcoal">
            What would you like to consult about?{" "}
            <span className="font-normal text-charcoal-faint">(optional)</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={3}
            maxLength={600}
            placeholder="A sentence is enough — the doctor will ask the details during your consultation."
            className={`mt-2 resize-y ${inputClass}`}
          />
        </div>

        {/* Honeypot field — hidden from users and assistive tech, catches bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex items-start gap-3 rounded-md bg-ivory-muted p-4">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-forest-800)]"
          />
          <div>
            <label htmlFor="consent" className="text-sm leading-relaxed text-charcoal-soft">
              I consent to Aura Cure Clinic contacting me on this number about my appointment. I understand this form is
              not for medical emergencies.
            </label>
            {errors.consent && (
              <p id="consent-error" className="mt-1.5 text-sm text-error">
                {errors.consent}
              </p>
            )}
          </div>
        </div>
      </div>

      {status === "error" && formMessage && (
        <div role="alert" className="mt-5 rounded-md bg-error-bg px-4 py-3">
          <p className="text-sm text-error">{formMessage}</p>
          {showDirectContact && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Button
                href={siteConfig.contact.phoneHref}
                variant="secondary"
                icon={<PhoneIcon className="h-4 w-4" />}
                analyticsEvent="cta_call_click"
                analyticsLocation="form_error_fallback"
              >
                {siteConfig.contact.phoneDisplay}
              </Button>
              <Button
                href={siteConfig.contact.whatsappHref}
                external
                variant="secondary"
                icon={<WhatsAppIcon className="h-4 w-4" />}
                analyticsEvent="cta_whatsapp_click"
                analyticsLocation="form_error_fallback"
              >
                WhatsApp
              </Button>
            </div>
          )}
        </div>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Appointment"}
        </Button>
        <p className="mt-3 text-center text-xs leading-relaxed text-charcoal-faint">
          We use your details only to contact you about this appointment. See our{" "}
          <a href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
