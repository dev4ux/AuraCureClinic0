import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
import { clinicGallery } from "@/data/clinic-gallery";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ClinicPhotoFrame } from "@/components/ui/ClinicPhotoFrame";
import { ClinicFlowLine } from "./ClinicFlowLine";
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";

/**
 * Clinic introduction, built as an editorial collage rather than a
 * text-beside-image section.
 *
 * Structure follows the reference: a wide heading across the top, the CTA and
 * supporting paragraph sharing a row beneath it, then a scattered photo
 * composition occupying the lower band, with an organic line threading behind
 * everything.
 *
 * The scatter is absolute percentage placement inside a fixed-ratio box, so
 * it holds its exact proportions at any desktop width. Below `lg` those
 * classes stop applying and the same photos fall into a compact two-column
 * grid — a recomposition, not a shrunk desktop layout. All placement lives in
 * data/clinic-gallery.ts.
 */
export function ClinicShowcase() {
  return (
    <section aria-labelledby="clinic-heading" className="relative overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24">
      {/* Behind everything, spanning the whole section. */}
      <ClinicFlowLine className="hidden sm:block" />

      <Container className="relative">
        {/* Two columns, not two stacked rows: the heading and its buttons on
            the left, the supporting copy beside them rather than beneath. Two
            equal tracks also mean the band fills the container at any width —
            nothing is capped short and left with dead space next to it. */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">The clinic</p>
            <h2
              id="clinic-heading"
              className="mt-4 text-balance text-4xl leading-[1.14] sm:text-5xl lg:text-[3.4rem]"
            >
              A calm, unhurried place to be seen
            </h2>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={siteConfig.contact.phoneHref}
                size="lg"
                icon={<PhoneIcon className="h-4 w-4" />}
                analyticsEvent="cta_call_click"
                analyticsLocation="home_clinic_showcase"
              >
                Call Now
              </Button>
              <Button
                href={siteConfig.contact.whatsappHref}
                external
                size="lg"
                variant="secondary"
                icon={<WhatsAppIcon className="h-4 w-4" />}
                analyticsEvent="cta_whatsapp_click"
                analyticsLocation="home_clinic_showcase"
              >
                WhatsApp
              </Button>
            </div>
          </Reveal>

          {/* Offset on desktop so the paragraph's first line sits level with
              the heading's rather than with the small label above it. */}
          <Reveal delay={60} className="lg:mt-9">
            <p className="text-[15px] leading-relaxed text-charcoal-soft sm:text-base">
              Aura Cure Clinic sits on Bajaj Road, opposite Jain School and Vardhman School. Consultations run by
              appointment, so waiting time stays short and each patient gets the time their case actually needs — in a
              private room, without being rushed.
            </p>
            <Link
              href="/clinic"
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 transition-colors hover:text-forest-800"
            >
              Directions, timings &amp; map
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        {/* Collage. Fixed ratio at lg so the scatter keeps its proportions —
            taller than the original 194/56 so every photo in the scatter,
            not just the anchor, reads at a real size rather than a thumbnail. */}
        <Reveal variant="scale" delay={80} className="relative mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-16 lg:block lg:aspect-[194/80] lg:gap-0">
          {clinicGallery.map((photo) => (
            <ClinicPhotoFrame
              key={photo.src}
              photo={photo}
              className={`${photo.mobile} ${photo.desktop}`}
              sizes={photo.sizes}
              priority={photo.priority}
            />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
