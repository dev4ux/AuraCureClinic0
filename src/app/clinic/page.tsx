import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LocationBlock } from "@/components/shared/LocationBlock";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "The Clinic — Location, Timings & Directions",
  description:
    "Aura Cure Clinic is on Bajaj Road, opposite Jain School and Vardhman School, Sikar 332001. Open Monday to Saturday, 10 AM to 7 PM. Timings, directions, map and contact details.",
  alternates: { canonical: "/clinic" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Clinic", href: "/clinic" },
];

const gallery = [
  { label: "[CLINIC_EXTERIOR_PHOTO]", hint: "Street-facing entrance on Bajaj Road" },
  { label: "[RECEPTION_PHOTO]", hint: "Reception and waiting area" },
  { label: "[CONSULTATION_ROOM_PHOTO]", hint: "Consultation room" },
  { label: "[DISPENSARY_PHOTO]", hint: "Dispensary / pharmacy area" },
];

export default function ClinicPage() {
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
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl sm:text-[2.75rem]">Visiting Aura Cure Clinic</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            The clinic is on Bajaj Road, directly opposite Jain School and Vardhman School — one of the most recognisable
            junctions in Sikar. Consultations run by appointment so waiting time stays short.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <ImagePlaceholder
              key={g.label}
              label={g.label}
              hint={g.hint}
              aspect="aspect-[4/3]"
              className="rounded-lg bg-surface"
            />
          ))}
        </div>

        <div className="mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl">First visit</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-charcoal-soft">
              <li>Bring any existing prescriptions and test reports.</li>
              <li>Allow extra time — first consultations are detailed.</li>
              <li>Call ahead to confirm a slot, especially on busy days.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl">Getting here</h2>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-charcoal-soft">
              <li>Landmark: directly opposite Jain School, Bajaj Road.</li>
              <li>Landmark: opposite Jain School and Vardhman School, Bajaj Road.</li>
              <li>Use the directions link below for turn-by-turn navigation.</li>
            </ul>
          </div>
        </div>
      </Container>

      <LocationBlock />
      <FinalCta
        heading="Planning a visit?"
        body="Book ahead so the doctor can allot proper consultation time for your case."
        location="clinic_final"
      />
    </>
  );
}
