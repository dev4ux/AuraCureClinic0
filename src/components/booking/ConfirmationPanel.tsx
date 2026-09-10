import { siteConfig } from "@/lib/site-config";
import { paymentOptions, type PaymentPreference } from "@/data/booking";
import { CheckIcon } from "@/components/ui/icons";
import { concernLabel, type DetailsValue } from "./FillDetailsStep";

export function ConfirmationPanel({
  details,
  dateLabel,
  time,
  paymentPreference,
  compact = false,
}: {
  details: DetailsValue;
  dateLabel: string;
  time: string;
  paymentPreference: PaymentPreference;
  compact?: boolean;
}) {
  const paymentLabel = paymentOptions.find((p) => p.id === paymentPreference)?.title ?? "";

  return (
    <div className="text-center">
      <span
        className={`mx-auto flex items-center justify-center rounded-full bg-forest-800 text-ivory ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <CheckIcon className={compact ? "h-5 w-5" : "h-6 w-6"} />
      </span>
      <h2 className={`text-forest-900 ${compact ? "mt-3 text-lg" : "mt-5 text-xl sm:text-[1.4rem]"}`}>
        Consultation Confirmed
      </h2>
      {!compact && (
        <p className="mx-auto mt-2 max-w-xs text-[14.5px] leading-relaxed text-charcoal-soft">
          Your consultation has been successfully scheduled.
        </p>
      )}

      <dl
        className={`mx-auto max-w-xs rounded-lg border border-border-strong/70 bg-ivory-muted/60 text-left ${
          compact ? "mt-4 space-y-2 p-4" : "mt-6 space-y-3 p-5"
        }`}
      >
        <Row label="Doctor" value={siteConfig.doctor.name} />
        <Row label="Consultation For" value={concernLabel(details)} />
        <Row label="Date" value={dateLabel} />
        <Row label="Time" value={time} />
        <Row label="Payment" value={paymentLabel} />
      </dl>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-[13.5px]">
      <dt className="text-charcoal-faint">{label}</dt>
      <dd className="font-medium text-charcoal">{value}</dd>
    </div>
  );
}
