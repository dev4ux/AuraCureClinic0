import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CheckIcon } from "@/components/ui/icons";

/**
 * The left half of the booking section on desktop: a real photograph of the
 * doctor mid-consultation, with the clinic's promise set over it. Hidden
 * below `lg` — on a phone the form itself is the first thing a patient
 * should see, not a photograph they must scroll past.
 *
 * The copy sits on the photograph, lifted by a wash that falls from the left,
 * so the room stays visible behind the words.
 */
export function ConsultationVisual() {
  return (
    <div className="relative hidden overflow-hidden lg:block">
      <Image
        src="/images/newdr.consult.webp"
        alt={`${siteConfig.doctor.name} speaking with a patient during a consultation`}
        fill
        sizes="50vw"
        quality={90}
        className="object-cover object-[26%_36%]"
        priority
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ivory/96 from-12% via-ivory/45 via-46% to-transparent"
      />

      <div className="relative flex h-full flex-col justify-between p-10">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-accent-600">
            Skin · Hair · Homeopathy · Laser
          </p>
          <p className="mt-10 font-heading text-[2.75rem] leading-[1.05] text-forest-900">
            <span className="font-normal">Same care.</span>
            <span className="block font-semibold">In clinic</span>
            <span className="block font-semibold">or online.</span>
          </p>
          <span aria-hidden="true" className="mt-6 block h-[3px] w-12 rounded-full bg-accent-500" />
          <p className="mt-5 max-w-[16rem] text-[13.5px] leading-relaxed text-charcoal-soft">
            Visit us on Bajaj Road, Sikar, or consult by video from anywhere in India. The clinic confirms every
            request personally.
          </p>
        </div>

        <div className="mt-10 w-fit rounded-xl bg-ivory/95 px-5 py-3.5 shadow-[var(--shadow-card)] backdrop-blur-sm">
          <p className="flex items-center gap-2 font-heading text-[15px] font-semibold text-forest-900">
            {siteConfig.doctor.name}
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-forest-900 text-accent-500">
              <CheckIcon className="h-2.5 w-2.5" />
            </span>
          </p>
          <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-charcoal-faint">
            {siteConfig.doctor.credentials} · {siteConfig.doctor.yearsOfExperience} Years Experience
          </p>
        </div>
      </div>
    </div>
  );
}
