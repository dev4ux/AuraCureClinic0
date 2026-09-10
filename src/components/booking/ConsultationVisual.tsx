import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon } from "@/components/ui/icons";

/**
 * The left half of the booking section: a real photograph of the doctor
 * mid-consultation, with the clinic's promise set over it.
 *
 * The copy sits on the photograph rather than beside it, lifted by a wash that
 * follows the room's own light — warm, and falling from the left. A solid
 * scrim would read as a label stuck onto a picture and flatten the depth the
 * photograph has; a gradient keeps the room visible behind the words.
 *
 * The panel is full-bleed and takes its height from the section, so the image
 * fills its half exactly however tall the form beside it runs.
 */
export function ConsultationVisual() {
  return (
    <div className="relative h-[21rem] overflow-hidden sm:h-[26rem] lg:h-full">
      <Image
        src="/images/newdr.consult.webp"
        alt={`${siteConfig.doctor.name} speaking with a patient during an online video consultation`}
        fill
        sizes="(min-width: 1024px) 46vw, 100vw"
        quality={90}
        className="object-cover object-[26%_36%]"
        priority
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ivory/97 from-15% via-ivory/60 via-48% to-transparent lg:bg-gradient-to-r lg:from-ivory/96 lg:from-12% lg:via-ivory/45 lg:via-46% lg:to-transparent"
      />

      <div className="relative flex h-full flex-col justify-between p-7 sm:p-9 lg:p-10">
        <div>
          {/* Wordmark lockup — the clinic's name and what it practises, the
              two things a booking panel should be signed with. */}
          <p className="font-heading text-xl font-semibold tracking-tight text-forest-900 sm:text-2xl">
            {siteConfig.brand}
          </p>
          <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-faint">
            Skin · Hair · Homeopathy · Laser
          </p>

          {/* The page's h1. What it says on screen is the promise; the rest
              names the page for anything reading it out of context. */}
          <h1 className="mt-9 font-heading text-[2.5rem] leading-[1.02] text-forest-900 sm:mt-12 sm:text-[3.25rem]">
            <span className="font-normal">Consult</span>
            <span className="block font-semibold">Online</span>
            <span className="sr-only"> — book a consultation at {siteConfig.brand}, Sikar</span>
          </h1>

          <p className="mt-5 text-[11.5px] font-medium uppercase tracking-[0.18em] text-charcoal-soft">
            Same care.
            <span className="block">From anywhere.</span>
          </p>

          <span aria-hidden="true" className="mt-6 block h-[3px] w-12 rounded-full bg-forest-800" />

          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-charcoal-soft">
            In-clinic in Sikar or online across India. The clinic confirms every request personally before your
            consultation.
          </p>
        </div>

        {/* Credentials, sat on the photograph's lower edge. */}
        <div className="mt-10 w-fit rounded-xl bg-ivory/95 px-5 py-3.5 shadow-[var(--shadow-card)] backdrop-blur-sm">
          <p className="flex items-center gap-2 font-heading text-[15px] font-semibold text-forest-900">
            {siteConfig.doctor.name}
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-forest-800 text-ivory">
              <CheckIcon className="h-2.5 w-2.5" />
            </span>
          </p>
          <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-charcoal-faint">
            {siteConfig.doctor.yearsOfExperience} Years Experience
          </p>
        </div>
      </div>
    </div>
  );
}
