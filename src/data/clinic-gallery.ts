/**
 * Photographs used in the homepage clinic collage.
 *
 * TO ADD THE REAL PHOTOS: drop files with these exact names into
 * /public/images/ and rebuild. Nothing else needs to change — each slot
 * checks whether its file exists and switches from the fallback to the real
 * photograph automatically (see ClinicPhotoFrame).
 *
 * ── ABOUT THE POSITION CLASSES ───────────────────────────────────────────
 * The desktop composition is art-directed: each photo is absolutely placed
 * as a percentage of the collage box, which is what produces the scattered,
 * uneven arrangement rather than a grid. Below `lg` those absolute classes
 * simply don't apply and the `mobile` classes lay the photos out as a
 * compact two-column editorial grid instead.
 *
 * The class strings must stay written out in full here — Tailwind scans this
 * file for them, so building them dynamically would leave them ungenerated.
 *
 * To re-art-direct the desktop collage, edit `desktop` only. Order in this
 * array controls the mobile reading order.
 */
export interface ClinicPhoto {
  /** Path under /public. */
  src: string;
  /** Describes the photo for screen readers and search engines. */
  alt: string;
  /** Shown on the fallback so it is obvious which photo belongs here. */
  slotName: string;
  /** Nudges the crop so faces stay in frame, e.g. "50% 30%". */
  focalPoint?: string;
  /** Placement in the scattered desktop composition. */
  desktop: string;
  /** Span and ratio in the stacked mobile composition. */
  mobile: string;
  /** Rendered widths, for srcset selection. */
  sizes: string;
  /** The visual anchor loads eagerly; the rest lazily. */
  priority?: boolean;
}

export const clinicGallery: ClinicPhoto[] = [
  {
    src: "/images/clinic-exterior.jpg",
    alt: "The entrance to Aura Cure Clinic on Bajaj Road, Sikar",
    slotName: "Clinic exterior",
    focalPoint: "50% 45%",
    // Dominant anchor, centre of the composition.
    desktop: "lg:absolute lg:left-[37.9%] lg:top-0 lg:h-full lg:w-[24.7%] lg:aspect-auto",
    mobile: "col-span-2 aspect-[16/11] sm:aspect-[16/10]",
    sizes: "(min-width: 1024px) 26vw, 92vw",
    priority: true,
  },
  {
    src: "/images/clinic-reception.jpg",
    alt: "The reception and waiting area at Aura Cure Clinic",
    slotName: "Reception",
    focalPoint: "50% 45%",
    // Medium, sits left of the anchor and rides higher.
    desktop: "lg:absolute lg:left-[19.8%] lg:top-[11%] lg:h-[56%] lg:w-[16.2%] lg:aspect-auto",
    mobile: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 17vw, 46vw",
  },
  {
    src: "/images/clinic-consultation.jpg",
    alt: "A consultation room at Aura Cure Clinic",
    slotName: "Consultation room",
    focalPoint: "50% 45%",
    // Small, upper right.
    desktop: "lg:absolute lg:left-[66%] lg:top-[5%] lg:h-[39%] lg:w-[9.8%] lg:aspect-auto",
    mobile: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 11vw, 46vw",
  },
  {
    src: "/images/doctor-patient.jpg",
    alt: "Dr. Nitin Sharma speaking with a patient during a consultation",
    slotName: "Doctor with patient",
    focalPoint: "50% 35%",
    // Medium, lower right — drops well below the anchor's midline.
    desktop: "lg:absolute lg:left-[72.4%] lg:top-[51%] lg:h-[49%] lg:w-[12.1%] lg:aspect-auto",
    mobile: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 13vw, 46vw",
  },
  {
    src: "/images/clinic-detail.jpg",
    alt: "A detail of the treatment area at Aura Cure Clinic",
    slotName: "Clinic detail",
    focalPoint: "50% 50%",
    // Smallest, furthest right, floating clear of the group.
    desktop: "lg:absolute lg:left-[85.3%] lg:top-[18%] lg:h-[26%] lg:w-[7%] lg:aspect-auto",
    mobile: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 8vw, 46vw",
  },
  {
    src: "/images/waiting-area.jpg",
    alt: "Seating in the waiting area at Aura Cure Clinic",
    slotName: "Waiting area",
    focalPoint: "50% 45%",
    // Small, low left — anchors the bottom-left corner of the scatter.
    desktop: "lg:absolute lg:left-[9.8%] lg:top-[67%] lg:h-[28%] lg:w-[6.7%] lg:aspect-auto",
    mobile: "col-span-2 aspect-[16/9] sm:col-span-3 sm:aspect-[21/9]",
    sizes: "(min-width: 1024px) 8vw, 92vw",
  },
];
