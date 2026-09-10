import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ConsultationVisual } from "@/components/booking/ConsultationVisual";
import { BookingWidget } from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a consultation at Aura Cure Clinic, Bajaj Road, opposite Jain School and Vardhman School, Sikar. Open Monday to Saturday, 10 AM to 7 PM. Call or WhatsApp 96108 96996, or send an appointment request online.",
  alternates: { canonical: "/appointment" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Book an Appointment", href: "/appointment" },
];

export default function AppointmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript(
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` })))
          ),
        }}
      />
      <Breadcrumbs items={crumbs} />

      {/* Full-bleed split, not a card on a page: photograph left, form right,
          each exactly half the screen. The height is fixed on desktop so the
          two halves stay square with each other and the panel does not resize
          under the visitor as the form moves between its two steps — the form
          column scrolls within that height instead. Below `lg` the halves
          stack, photograph first, and both take their natural height. */}
      <section className="border-b border-border bg-surface lg:grid lg:h-[46rem] lg:grid-cols-2 lg:items-stretch">
        <ConsultationVisual />

        {/* Lighter ground than the page below, so the form half reads as the
            panel it is rather than running on into the section after it. */}
        <div className="flex bg-surface px-5 py-10 sm:px-10 sm:py-12 lg:overflow-y-auto lg:px-12 lg:py-10 xl:px-16">
          <div className="m-auto w-full max-w-[32rem]">
            <BookingWidget compact />
          </div>
        </div>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TrackedLink
            href={siteConfig.contact.phoneHref}
            event="cta_call_click"
            location="appointment_page"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-forest-600/50"
          >
            <PhoneIcon className="h-5 w-5 text-forest-700" />
            <span>
              <span className="block text-sm font-medium text-charcoal">Call the clinic</span>
              <span className="block text-sm text-charcoal-faint">{siteConfig.contact.phoneDisplay}</span>
            </span>
          </TrackedLink>

          <TrackedLink
            href={siteConfig.contact.whatsappHref}
            external
            event="cta_whatsapp_click"
            location="appointment_page"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-forest-600/50"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25863f]" />
            <span>
              <span className="block text-sm font-medium text-charcoal">Message on WhatsApp</span>
              <span className="block text-sm text-charcoal-faint">{siteConfig.contact.whatsappDisplay}</span>
            </span>
          </TrackedLink>

          <dl className="flex flex-col justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-4 text-sm">
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-charcoal-faint">Timings:</dt>
              <dd className="text-charcoal-soft">
                {siteConfig.hours.display}
                <span className="block text-charcoal-faint">{siteConfig.hours.closedNote}</span>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-charcoal-faint">Address:</dt>
              <dd className="text-charcoal-soft">{siteConfig.address.full}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 rounded-lg border-l-2 border-error bg-error-bg/60 px-5 py-4">
          <h2 className="text-sm font-semibold text-error">This form is not for emergencies</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
            For chest pain, breathing difficulty, severe bleeding, sudden weakness or any medical emergency, go to the
            nearest hospital or call emergency services immediately.
          </p>
        </div>
      </Container>
    </>
  );
}
