import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { LocationBlock } from "@/components/shared/LocationBlock";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aura Cure Clinic, Sikar — phone, WhatsApp, address, timings and appointment requests.",
  alternates: { canonical: "/contact" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
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

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h1 className="text-balance text-4xl sm:text-[2.75rem]">Contact the clinic</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-soft">
              Call or message for appointments and general queries. For anything urgent, please call rather than
              sending a form.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Phone</dt>
                <dd className="mt-1.5">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-[15px] font-medium text-forest-700 underline underline-offset-4"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">WhatsApp</dt>
                <dd className="mt-1.5">
                  <a
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-forest-700 underline underline-offset-4"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Email</dt>
                <dd className="mt-1.5 text-[15px]">
                  <a
                    href={siteConfig.contact.emailHref}
                    className="text-forest-700 underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Address</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-charcoal-soft">{siteConfig.address.full}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Timings</dt>
                <dd className="mt-1.5 text-[15px] text-charcoal-soft">{siteConfig.hours.display}</dd>
                <dd className="mt-0.5 text-[13px] text-charcoal-faint">{siteConfig.hours.closedNote}</dd>
                <dd className="mt-1.5 text-[13px] text-charcoal-soft">{siteConfig.hours.onlineNote}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xl">Send an appointment request</h2>
            <div className="mt-5">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </Container>

      <LocationBlock />
    </>
  );
}
