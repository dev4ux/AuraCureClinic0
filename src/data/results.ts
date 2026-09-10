/**
 * Before / after treatment results shown in the moving strip on the home page.
 *
 * Photos are the clinic's own, resized and converted to WebP by
 * scripts/optimize-images.mjs (source files kept the originals' faces
 * blurred/cropped as supplied — nothing further was done to them here).
 *
 * Every case below has a supplied photo pair. Should a new case be added
 * before its photos arrive, leave `before`/`after` as empty strings — that
 * renders a labelled placeholder slot instead of a broken image or, worse,
 * a stand-in photo. Never substitute stock or borrowed imagery for a missing
 * case: these are presented to patients as this clinic's own work.
 *
 * Consent: publish a patient photograph only with that patient's written
 * consent on file.
 */

export interface ResultCase {
  /** Stable key, also used for the expected filename. */
  id: string;
  /** The concern treated, in the patient's language. */
  concern: string;
  /** Treatment or approach used. */
  treatment: string;
  /** How long the change took, e.g. "12 weeks". */
  duration: string;
  before: string;
  after: string;
}

export const resultCases: ResultCase[] = [
  { id: "acne", concern: "Acne & Acne Marks", treatment: "Homeopathy + Chemical Peel", duration: "12 weeks", before: "/images/results/acne-before.webp", after: "/images/results/acne-after.webp" },
  { id: "melasma", concern: "Melasma & Pigmentation", treatment: "Chemical Peel", duration: "16 weeks", before: "/images/results/melasma-before.webp", after: "/images/results/melasma-after.webp" },
  { id: "hair-fall", concern: "Hair Fall", treatment: "Hair GFC", duration: "10 weeks", before: "/images/results/hair-fall-before.webp", after: "/images/results/hair-fall-after.webp" },
  { id: "hair-thinning", concern: "Hair Thinning", treatment: "Hair PRP", duration: "6 sessions", before: "/images/results/hair-thinning-before.webp", after: "/images/results/hair-thinning-after.webp" },
  { id: "alopecia", concern: "Patchy Hair Loss", treatment: "Classical Homeopathy", duration: "5 months", before: "/images/results/alopecia-before.webp", after: "/images/results/alopecia-after.webp" },
  { id: "facial-hair", concern: "Unwanted Facial Hair", treatment: "Laser Hair Removal", duration: "6 sessions", before: "/images/results/facial-hair-before.webp", after: "/images/results/facial-hair-after.webp" },
  { id: "dull-skin", concern: "Dull, Uneven Skin", treatment: "Hydra Facial", duration: "4 sessions", before: "/images/results/dull-skin-before.webp", after: "/images/results/dull-skin-after.webp" },
  { id: "dark-circles", concern: "Under-Eye Dark Circles", treatment: "Face Mesotherapy", duration: "8 weeks", before: "/images/results/dark-circles-before.webp", after: "/images/results/dark-circles-after.webp" },
  { id: "warts", concern: "Warts & Skin Tags", treatment: "Laser Treatment", duration: "2 sessions", before: "/images/results/warts-before.webp", after: "/images/results/warts-after.webp" },
  { id: "eczema", concern: "Eczema & Dermatitis", treatment: "Classical Homeopathy", duration: "14 weeks", before: "/images/results/eczema-before.webp", after: "/images/results/eczema-after.webp" },
];
