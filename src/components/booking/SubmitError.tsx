import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

/**
 * A failed request must never be a dead end: the clinic takes bookings by
 * phone and WhatsApp regardless, so the fallback is offered right where the
 * failure happened rather than left for the patient to go and find.
 */
export function SubmitError({ message, location }: { message: string; location: string }) {
  return (
    <div role="alert" className="mt-4 rounded-lg border border-error/30 bg-error-bg px-4 py-3">
      <p className="text-[13.5px] text-error">{message}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <Button
          href={siteConfig.contact.phoneHref}
          variant="secondary"
          size="md"
          icon={<PhoneIcon className="h-4 w-4" />}
          analyticsEvent="cta_call_click"
          analyticsLocation={location}
        >
          {siteConfig.contact.phoneDisplay}
        </Button>
        <Button
          href={siteConfig.contact.whatsappHref}
          external
          variant="secondary"
          size="md"
          icon={<WhatsAppIcon className="h-4 w-4" />}
          analyticsEvent="cta_whatsapp_click"
          analyticsLocation={location}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
