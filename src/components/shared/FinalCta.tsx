import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

/**
 * Contextual closing CTA. The heading adapts to page intent so a reader
 * finishing a condition page sees a different, more relevant prompt than
 * someone finishing the homepage.
 */
export function FinalCta({
  heading = "Ready to talk to a doctor about it?",
  body = "Book a consultation at Aura Cure Clinic, or simply call and ask whether homeopathic treatment is appropriate for your concern.",
  location = "final_cta",
}: {
  heading?: string;
  body?: string;
  location?: string;
}) {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20">
      <Container>
        <Reveal variant="scale" className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-soft">{body}</p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/appointment"
              size="lg"
              icon={<CalendarIcon className="h-4 w-4" />}
              analyticsEvent="cta_appointment_click"
              analyticsLocation={location}
            >
              Book an Appointment
            </Button>
            <Button
              href={siteConfig.contact.whatsappHref}
              external
              size="lg"
              variant="secondary"
              icon={<WhatsAppIcon className="h-4 w-4" />}
              analyticsEvent="cta_whatsapp_click"
              analyticsLocation={location}
            >
              WhatsApp
            </Button>
            <Button
              href={siteConfig.contact.phoneHref}
              size="lg"
              variant="secondary"
              icon={<PhoneIcon className="h-4 w-4" />}
              analyticsEvent="cta_call_click"
              analyticsLocation={location}
            >
              {siteConfig.contact.phoneDisplay}
            </Button>
          </div>

          <p className="mt-6 text-xs text-charcoal-faint">
            {siteConfig.hours.display} · {siteConfig.address.locality}, {siteConfig.address.region}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
