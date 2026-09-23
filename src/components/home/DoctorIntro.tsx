import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ResultsStrip } from "@/components/home/ResultsStrip";
import { ArrowRightIcon } from "@/components/ui/icons";

const stats = [
  { value: `${siteConfig.doctor.yearsOfExperience} Years`, label: "Clinical experience" },
  { value: `${siteConfig.doctor.patientsTreated} Patients`, label: "Treated to date" },
];

/**
 * Doctor intro and treatment results share one screen-height frame, but are
 * split into two colour bands — ivory for the intro, deep forest for the
 * results — so the two read as distinct blocks instead of blurring into one
 * another. The markup deliberately does not use <Section>, whose fixed
 * lg:py-28 is far too tall for a single-frame layout.
 */
export function DoctorIntro() {
  return (
    <section id="doctor" className="flex flex-col lg:min-h-[calc(100svh-var(--header-h))]">
      {/* ---- Band 1: the doctor ---- */}
      <div className="flex flex-1 flex-col justify-center bg-ivory-muted py-12 sm:py-14 lg:py-9">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:items-center lg:gap-14">
            <Reveal className="mx-auto w-full max-w-[15rem] lg:mx-0 lg:max-w-[16rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface">
                <Image
                  src={siteConfig.doctor.photo}
                  alt={`${siteConfig.doctor.name}, homeopathic physician at ${siteConfig.brand}`}
                  fill
                  sizes="16rem"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <SectionHeading
                eyebrow="Meet the doctor"
                title={siteConfig.doctor.name}
                description={`${siteConfig.doctor.credentials} · Homeopathic Physician · Sikar`}
              />

              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
                Two people with the same diagnosis rarely need the same prescription. Consultations here begin with
                listening — your concern, your history, your routine — so treatment is chosen for you rather than for a
                label.
              </p>

              {/* Experience and caseload, kept as a quiet inline rule rather
                  than cards — the numbers, not a box around them. */}
              <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-4">
                <dl className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-10">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="sr-only">{s.label}</dt>
                      <dd>
                        <span className="block font-heading text-xl font-semibold leading-tight text-forest-900">
                          {s.value}
                        </span>
                        <span className="mt-0.5 block text-xs text-charcoal-faint">{s.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="sm:ml-auto">
                  <Button href="/about-doctor" variant="secondary" icon={<ArrowRightIcon className="h-4 w-4" />}>
                    Read the full profile
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* ---- Band 2: the results, on its own forest ground ---- */}
      <div className="relative overflow-hidden bg-forest-900 py-11 sm:py-12 lg:py-9">
        {/* Abstract ground: a deep vertical wash, one broad diagonal light
            sweep across it, and a fine dot grid that fades out toward the
            bottom. Layered CSS gradients only — no image request, no motion. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, var(--color-forest-800) 0%, var(--color-forest-900) 45%, var(--color-forest-950) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            background:
              "linear-gradient(104deg, transparent 26%, rgba(42,144,102,0.55) 47%, rgba(42,144,102,0.12) 58%, transparent 74%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-ivory) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, #000 0%, transparent 78%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 78%)",
          }}
        />

        <Container className="relative">
          <Reveal>
            <div className="mb-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-100">
                Treatment results
              </p>
              <h3 className="text-balance text-xl text-ivory sm:text-2xl">Before &amp; after, from our own patients</h3>
            </div>
          </Reveal>
        </Container>

        {/* The strip itself runs edge to edge — outside Container, so no left
            or right gutter interrupts the drift. */}
        <Reveal className="relative">
          <ResultsStrip />
        </Reveal>
      </div>
    </section>
  );
}
