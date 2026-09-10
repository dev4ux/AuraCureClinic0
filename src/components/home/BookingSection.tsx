import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Landing-page section, not the booking interface. It sells the consultation
 * and hands off to /appointment, where the real multi-step form lives — asking
 * for a name, phone number and payment preference before a visitor has decided
 * anything is friction in the wrong place.
 *
 * Composition: the photograph bleeds to the left viewport edge and dissolves
 * rightward into the forest ground, so there is no visible frame or seam where
 * it meets the copy. The grid sits on the section itself rather than inside a
 * Container — a contained image cannot reach the viewport edge.
 *
 * Entrance follows the same left/right assembly as the service blocks above:
 * photo and copy arrive from opposite sides, then the four steps count
 * themselves in below, one after another.
 */

const steps = [
  {
    number: "01",
    title: "Share Your Details",
    body: "Tell us a little about yourself and what you need help with.",
  },
  {
    number: "02",
    title: "Confirmation Call",
    body: "Our team will call you to confirm your consultation.",
  },
  {
    number: "03",
    title: "Payment Before Consultation",
    body: "Payment is collected around 30 minutes before your scheduled consultation.",
  },
  {
    number: "04",
    title: "Meet Your Doctor",
    body: `Consult with ${siteConfig.doctor.name} and receive personalised guidance and next steps.`,
  },
];

export function BookingSection() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-ivory">
      <div className="lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
        {/* Visual — bleeds to the viewport edge, no frame. */}
        <Reveal variant="left" className="relative h-[17rem] sm:h-[23rem] lg:h-auto lg:min-h-[34rem]">
          <Image
            src="/images/newdr.consult.webp"
            alt={`${siteConfig.doctor.name} consulting with a patient over a video call at Aura Cure Clinic`}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-[45%_45%]"
          />

          {/* Colour unifier: settles the photograph's cool whites into the
              section's warm forest ground before the fade is applied. */}
          <div aria-hidden="true" className="absolute inset-0 bg-forest-950/20 mix-blend-multiply" />

          {/* The blend itself — downward on mobile where the photo sits above
              the copy, rightward on desktop where it sits beside it. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-forest-900/15 via-forest-900/45 to-forest-900 lg:bg-gradient-to-r lg:from-forest-900/10 lg:via-forest-900/35 lg:to-forest-900"
          />

          {/* Softens the top and bottom edges so the photo never butts hard
              against the neighbouring sections. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-forest-900/70 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest-900/70 to-transparent lg:h-32"
          />
        </Reveal>

        {/* Message, journey, action. Right padding tracks the site's max-w-7xl
            gutter so the copy stays aligned with every other section. */}
        <Reveal
          variant="right"
          delay={90}
          className="relative px-5 pb-16 pt-16 sm:px-8 lg:py-14 lg:pl-14 xl:pl-16"
          style={{ paddingRight: "max(1.25rem, calc((100vw - 80rem) / 2 + 2.5rem))" }}
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-[38rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-100/70">
              Book your consultation
            </p>

            <h2 className="mt-2.5 text-balance text-2xl leading-[1.18] text-ivory sm:text-[1.95rem]">
              Talk to a Doctor, From <span className="text-accent-500">Wherever You Are.</span>
            </h2>

            <p className="mt-3.5 max-w-lg text-[14.5px] leading-relaxed text-ivory/60">
              Start with a simple consultation and get personalised guidance based on your health needs.
            </p>

            {/* Steps count themselves in one after another, rather than
                arriving as a block — the sequence is the point. RevealGroup
                supplies the <li> itself (itemAs="li"), so the mapped element
                below is a <div> — an <li> here would nest inside it. */}
            <RevealGroup as="ol" itemAs="li" step={90} className="mt-6 space-y-2.5">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative flex gap-4 rounded-xl border border-ivory/[0.09] bg-ivory/[0.04] p-4 transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-ivory/20 hover:bg-ivory/[0.06] sm:gap-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-950/60 font-heading text-[13px] font-semibold tabular-nums text-accent-500 ring-1 ring-inset ring-accent-500/25"
                  >
                    {step.number}
                  </span>

                  {/* Dotted connector into the next step. */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[2.125rem] top-full h-2.5 w-px border-l border-dashed border-accent-500/35"
                    />
                  )}

                  <div className="min-w-0">
                    <h3 className="font-heading text-[14.5px] font-semibold text-ivory">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-ivory/55">{step.body}</p>
                  </div>
                </div>
              ))}
            </RevealGroup>

            <div className="mt-6">
              <Button
                href="/appointment"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto"
                analyticsEvent="cta_appointment_click"
                analyticsLocation="home_booking_section"
              >
                {/* Arrow trails the label, so it is passed as a child rather
                    than via `icon` — Button renders the icon slot first. */}
                Book an Appointment
                <ArrowRightIcon className="h-4 w-4" />
              </Button>

              {/* Trust line, currently disabled. To restore, re-add:
                  import { PrivacyShieldIcon } from "@/components/conditions/care-icons";
              <p className="mt-3.5 flex items-center gap-2 text-[12.5px] text-ivory/50">
                <PrivacyShieldIcon className="h-4 w-4 shrink-0 text-accent-500/70" />
                Simple booking. Personalised care.
              </p> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
