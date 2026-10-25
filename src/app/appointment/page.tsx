import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ClockIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ClinicLocationLink } from "@/components/booking/ClinicLocationLink";
import { ConsultationVisual } from "@/components/booking/ConsultationVisual";
import { BookingWidget } from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book an in-clinic visit at Aura Cure Clinic, Bajaj Road, opposite Jain School and Vardhman School, Sikar, or an online video consultation from anywhere in India. Open Monday to Saturday, 10 AM to 7 PM. Call or WhatsApp 96108 96996.",
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

      {/* Desktop: photograph left, form right, each half the screen, with a
          minimum height tall enough for the longest step so the panel does
          not resize as the patient moves through it. Phone: the photograph
          is dropped and the form starts right under the page title, so the
          first choice is on the first screen. */}
      <section className="border-b border-border bg-surface lg:grid lg:min-h-[46rem] lg:grid-cols-2">
        <ConsultationVisual />

        <div className="px-4 pb-10 pt-6 sm:px-10 sm:py-12 lg:px-12 lg:py-12 xl:px-16">
          <div className="mx-auto w-full max-w-[32rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-600">
              {siteConfig.doctor.name} · {siteConfig.doctor.credentials}
            </p>
            <h1 className="mt-1.5 text-[1.65rem] leading-tight text-forest-900 sm:text-[2rem]">
              Book an appointment
            </h1>
            <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal-soft">
              In-clinic in Sikar, or online from anywhere in India.
            </p>

            <div className="mt-6 border-t border-border pt-6">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      <Container className="py-12 sm:py-16">
        <h2 className="text-lg text-forest-900 sm:text-xl">Prefer to talk to us?</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <TrackedLink
            href={siteConfig.contact.phoneHref}
            event="cta_call_click"
            location="appointment_page"
            className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-border-strong/60 bg-surface px-4 py-3.5 transition-colors hover:border-forest-600/50"
          >
            <PhoneIcon className="h-5 w-5 shrink-0 text-forest-700" />
            <span>
              <span className="block text-[14px] font-medium text-charcoal">Call the clinic</span>
              <span className="block text-[13px] text-charcoal-soft">{siteConfig.contact.phoneDisplay}</span>
            </span>
          </TrackedLink>

          <TrackedLink
            href={siteConfig.contact.whatsappHref}
            external
            event="cta_whatsapp_click"
            location="appointment_page"
            className="flex min-h-[4.5rem] items-center gap-3 rounded-xl border border-border-strong/60 bg-surface px-4 py-3.5 transition-colors hover:border-forest-600/50"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25863f]" />
            <span>
              <span className="block text-[14px] font-medium text-charcoal">Message on WhatsApp</span>
              <span className="block text-[13px] text-charcoal-soft">{siteConfig.contact.whatsappDisplay}</span>
            </span>
          </TrackedLink>

          <ClinicLocationLink location="appointment_page" />

          <div className="flex items-start gap-3 rounded-xl border border-border-strong/60 bg-surface px-4 py-3.5">
            <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
            <span>
              <span className="block text-[14px] font-medium text-charcoal">Clinic timings</span>
              <span className="mt-0.5 block text-[13px] leading-snug text-charcoal-soft">
                {siteConfig.hours.display}
              </span>
              <span className="block text-[13px] text-charcoal-faint">{siteConfig.hours.closedNote}</span>
            </span>
          </div>
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
