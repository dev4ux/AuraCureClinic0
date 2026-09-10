import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, personSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FinalCta } from "@/components/shared/FinalCta";
import { conditions } from "@/data/conditions";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Doctor",
  description:
    "Meet the homeopathic physician at Aura Cure Clinic, Sikar — qualifications, areas of practice and consultation approach.",
  alternates: { canonical: "/about-doctor" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About Doctor", href: "/about-doctor" },
];

export default function AboutDoctorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript([
            personSchema(),
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` }))),
          ]),
        }}
      />
      <Breadcrumbs items={crumbs} />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
            <Image
              src={siteConfig.doctor.photo}
              alt={`${siteConfig.doctor.name}, homeopathic physician at ${siteConfig.brand}`}
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover object-top"
              priority
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">
              Homeopathic Physician
            </p>
            <h1 className="mt-3 text-balance text-4xl sm:text-[2.75rem]">{siteConfig.doctor.name}</h1>
            <p className="mt-3 text-lg text-charcoal-soft">
              {siteConfig.doctor.credentials} · {siteConfig.address.locality}, {siteConfig.address.region}
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-5 border-y border-border py-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-faint">
                  Qualification
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-charcoal">{siteConfig.doctor.credentials}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-faint">
                  Registration
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-charcoal">{siteConfig.doctor.registration}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-faint">Experience</dt>
                <dd className="mt-1.5 text-sm font-medium text-charcoal">{siteConfig.doctor.yearsOfExperience}</dd>
              </div>
            </dl>

            <div className="prose-medical mt-8">
              <h2>Approach to consultation</h2>
              <p>
                Homeopathic prescribing depends on the specifics of a case. Two patients presenting with the same
                complaint may need entirely different consideration depending on how the complaint began, what makes it
                better or worse, and how it fits into their wider health picture.
              </p>
              <p>
                Consultations at Aura Cure Clinic are therefore built around detailed case-taking. A first visit
                explores your presenting concern thoroughly, along with your medical history, sleep, appetite, stress
                and daily routine. This takes time, which is why the clinic works by appointment.
              </p>

              <h2>What patients are told — and not told</h2>
              <p>
                No treatment approach works identically for everyone. You will be given a realistic view of what to
                monitor and over what period, rather than a promise of a specific outcome. Where a condition needs
                investigation or specialist referral, that will be said plainly.
              </p>
              <p>
                Patients are asked never to stop prescribed medication without speaking to the doctor who prescribed
                it. Bringing existing prescriptions and reports to your first visit helps the doctor consider your care
                as a whole.
              </p>

              <h2>Areas of practice</h2>
              <p>The clinic commonly sees patients for:</p>
              <ul>
                {conditions.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/conditions/${c.slug}`} className="text-forest-700 underline underline-offset-4">
                      {c.name}
                    </Link>
                    {" — "}
                    {c.shortDescription}
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                This list is not exhaustive. If your concern is not listed, call the clinic and you will be told
                honestly whether a consultation is appropriate.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Verification"
          title="Credentials and how to verify them"
          description="Qualification and registration details are published here so patients can verify them independently."
        />
        <div className="prose-medical mt-8">
          <p>
            Registration number {siteConfig.doctor.registration} is issued under the applicable state homeopathy
            board. Patients are welcome to verify a practitioner&rsquo;s registration through the relevant state or
            national council register.
          </p>
          <p className="text-sm">
            Clinical content on this website is written for patient awareness and reviewed by{" "}
            {siteConfig.doctor.name}, {siteConfig.doctor.credentials}. See our{" "}
            <Link href="/editorial-policy" className="text-forest-700 underline underline-offset-4">
              editorial and medical review policy
            </Link>
            .
          </p>
        </div>
      </Section>

      <FinalCta
        heading="Consult with the doctor"
        body="Book a consultation at the clinic in Sikar, or call to ask whether homeopathic treatment suits your concern."
        location="about_doctor_final"
      />
    </>
  );
}
