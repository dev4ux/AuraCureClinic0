import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, serviceListSchema, toJsonLdScript } from "@/lib/schema";
import { serviceCategories } from "@/data/service-categories";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FinalCta } from "@/components/shared/FinalCta";
import { ServicesDirectory } from "@/components/services/ServicesDirectory";
import { CheckIcon, CalendarIcon } from "@/components/ui/icons";

const totalServices = serviceCategories.reduce((n, c) => n + c.services.length, 0);

export const metadata: Metadata = {
  title: "All Services in Sikar — Hair, Skin, Laser & Homeopathy",
  description:
    "Hair fall, skin, laser and homeopathy treatments in Sikar, Rajasthan. Every service offered at Aura Cure Clinic, with consultations by Dr. Nitin Sharma, BHMS. Book an appointment on Bajaj Road, Sikar.",
  keywords: [
    "hair treatment in Sikar",
    "skin treatment in Sikar",
    "skin specialist in Sikar",
    "laser treatment in Sikar",
    "homeopathy doctor in Sikar",
    "hair fall treatment Sikar",
    "skin clinic Sikar",
    "Sikar",
    "Rajasthan",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "All Services in Sikar — Hair, Skin, Laser & Homeopathy",
    description:
      "Every treatment offered at Aura Cure Clinic, Sikar — hair, skin, laser and aesthetic procedures, and classical homeopathy.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.brand,
    locale: "en_IN",
    type: "website",
  },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "All Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript([
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` }))),
            /* Lists every service page so the index describes its own
               contents rather than leaving crawlers to infer them. */
            serviceListSchema(
              serviceCategories.flatMap((c) =>
                c.services
                  .filter((i) => i.href)
                  .map((i) => ({ name: i.name, url: `${siteConfig.url}${i.href}` }))
              )
            ),
          ]),
        }}
      />
      <Breadcrumbs items={crumbs} />

      <Container className="py-12 sm:py-16">
        <header className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">
              Clinical Care Directory
            </p>
            <span className="text-charcoal-faint/50">•</span>
            <span className="rounded-full bg-forest-50 border border-forest-100 px-2.5 py-0.5 text-[11px] font-medium text-forest-800">
              4 Specialty Practice Areas
            </span>
          </div>
          <h1 className="mt-3 text-balance text-4xl sm:text-[2.75rem] font-bold tracking-tight text-forest-900">
            Hair, skin &amp; homeopathy treatments in Sikar
          </h1>
          <p className="mt-4 text-base leading-relaxed text-charcoal-soft">
            Explore {totalServices} doctor-led treatments across four areas of practice at Aura Cure Clinic, Bajaj
            Road, Sikar. Every course of care begins with an individualised consultation with {siteConfig.doctor.name},{" "}
            {siteConfig.doctor.credentials}.
          </p>

          {/* Key Practice Highlights */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 pt-2 text-xs text-charcoal-soft">
            <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-surface px-3 py-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span>Doctor Assessed</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-surface px-3 py-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                <CheckIcon className="h-3 w-3" />
              </span>
              <span>In-Clinic in Sikar</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 rounded-lg border border-border/80 bg-surface px-3 py-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700">
                <CalendarIcon className="h-3 w-3" />
              </span>
              <span>By Appointment</span>
            </div>
          </div>
        </header>

        {/* Dynamic Directory with Visual Cards, Banners, Search & Filters */}
        <ServicesDirectory categories={serviceCategories} />

        <aside className="mt-16 rounded-xl border-l-3 border-accent-500 bg-surface p-6 sm:p-7 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-700 font-semibold text-xs">
              i
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-forest-900">Clinical practice notice</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
                The information provided across these services is for patient education and general guidance, not a
                substitute for professional medical diagnosis. Treatment suitability, procedure courses, and outcomes
                are evaluated in person on a case-by-case basis during your consultation.
              </p>
            </div>
          </div>
        </aside>
      </Container>

      <FinalCta location="services_index_final" />
    </>
  );
}

