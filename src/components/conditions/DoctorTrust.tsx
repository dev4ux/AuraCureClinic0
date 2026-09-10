import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * Who the patient will actually be speaking with. Trust is built from
 * verifiable transparency — name, qualification, registration, review date
 * and editorial policy — rather than superlatives.
 */
export function DoctorTrust({ conditionName, lastUpdated }: { conditionName: string; lastUpdated: string }) {
  const formatted = new Date(lastUpdated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section aria-labelledby="doctor-heading" className="bg-ivory py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ivory-muted">
            <Image
              src={siteConfig.doctor.photo}
              alt={`${siteConfig.doctor.name}, ${siteConfig.doctor.credentials}, homeopathic physician at ${siteConfig.brand}`}
              fill
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">Who you&rsquo;ll be seeing</p>

            <h2 id="doctor-heading" className="mt-3 text-balance text-2xl sm:text-3xl">
              {siteConfig.doctor.name}
            </h2>
            <p className="mt-2 text-[15px] text-charcoal-faint">
              {siteConfig.doctor.credentials} · {siteConfig.doctor.title}
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
              Consultations here are structured around listening first. A first visit covers your presenting concern in
              depth — alongside your general health, history and daily routine — before any treatment direction is
              considered. Two people with the same diagnosis can present very differently, and that difference is what
              shapes an individualised approach.
            </p>

            <dl className="mt-7 grid gap-x-8 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal-faint">
                  Qualification
                </dt>
                <dd className="mt-1 text-sm font-medium text-charcoal">{siteConfig.doctor.credentials}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal-faint">
                  Registration
                </dt>
                <dd className="mt-1 text-sm font-medium text-charcoal">{siteConfig.doctor.registration}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal-faint">
                  Page last reviewed
                </dt>
                <dd className="mt-1 text-sm font-medium text-charcoal">
                  <time dateTime={lastUpdated}>{formatted}</time>
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-[13px] leading-relaxed text-charcoal-faint">
              This {conditionName.toLowerCase()} page was written for patient awareness and reviewed for medical
              accuracy by {siteConfig.doctor.name}. See our{" "}
              <Link href="/editorial-policy" className="underline underline-offset-2 hover:text-forest-700">
                editorial and review policy
              </Link>
              .
            </p>

            <div className="mt-7">
              <Button href="/about-doctor" variant="secondary" size="lg" icon={<ArrowRightIcon className="h-4 w-4" />}>
                Read the full profile
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
