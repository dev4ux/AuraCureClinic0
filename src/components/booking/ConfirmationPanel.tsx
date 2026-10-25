import { siteConfig } from "@/lib/site-config";
import {
  clinicHoursLabel,
  formatDateLabel,
  paymentLabel,
  visitTypeLabel,
  type PaymentPreference,
  type VisitType,
} from "@/data/booking";
import { CheckIcon } from "@/components/ui/icons";
import { ClinicLocationLink } from "./ClinicLocationLink";
import { VisitTag } from "./BookingSummary";

export interface ConfirmedBooking {
  name: string;
  phone: string;
  visitType: VisitType;
  concern: string;
  dateIso: string;
  time: string;
  payment: PaymentPreference;
}

/**
 * Says honestly what has happened — a request the clinic will confirm by
 * phone — and, for an in-clinic visit, puts the way to get there one tap away.
 */
export function ConfirmationPanel({ booking }: { booking: ConfirmedBooking }) {
  const inClinic = booking.visitType === "clinic";
  return (
    <div>
      <div className="text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-accent-500">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-xl text-forest-900 sm:text-[1.4rem]">Appointment request received</h2>
        <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-charcoal-soft">
          The clinic will call you on <span className="font-medium text-charcoal">+91 {booking.phone}</span> to
          confirm your {inClinic ? "visit" : "slot"}.
        </p>
      </div>

      <dl className="mt-6 divide-y divide-border rounded-2xl border border-border-strong/60 bg-surface px-4">
        <Row label="Visit">
          <span className="flex items-center justify-end gap-2">
            <VisitTag visitType={booking.visitType} />
            {visitTypeLabel(booking.visitType)}
          </span>
        </Row>
        <Row label="Patient">{booking.name}</Row>
        <Row label="Doctor">{siteConfig.doctor.name}</Row>
        <Row label="For">{booking.concern}</Row>
        {inClinic ? (
          <>
            <Row label="Visit date">{formatDateLabel(booking.dateIso)}</Row>
            <Row label="Clinic timings">{clinicHoursLabel}</Row>
          </>
        ) : (
          <Row label="Date & time">
            {formatDateLabel(booking.dateIso)}, {booking.time}
          </Row>
        )}
        <Row label="Payment">{paymentLabel(booking.payment)}</Row>
      </dl>

      {inClinic ? (
        <ClinicLocationLink location="booking_confirmation" className="mt-4" />
      ) : (
        <p className="mt-4 rounded-xl bg-ivory-muted/70 px-4 py-3 text-[13px] leading-relaxed text-charcoal-soft">
          You&rsquo;ll receive the video call details on your mobile number before the consultation.
        </p>
      )}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 text-[14px]">
      <dt className="shrink-0 text-charcoal-faint">{label}</dt>
      <dd className="min-w-0 text-right font-medium text-charcoal">{children}</dd>
    </div>
  );
}
