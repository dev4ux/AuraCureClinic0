import type { PatientStory } from "@/lib/types";

/**
 * Patient stories shown in the homepage testimonial carousel.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  READ BEFORE EDITING
 * ─────────────────────────────────────────────────────────────────────────
 * Everything below is PLACEHOLDER copy written to demonstrate the layout.
 * None of it came from a patient. While an entry has `isPlaceholder: true`
 * the section shows a small "sample content" line, so this cannot quietly
 * ship as a genuine review.
 *
 * TO GO LIVE WITH A REAL STORY:
 *   1. Get the patient's written consent to publish their words and photo.
 *   2. Paste their review verbatim into `quote`. Split it into segments only
 *      to accent a phrase they themselves stressed — never to manufacture
 *      emphasis or change what they meant.
 *   3. Set `patientName` to whatever they agreed to (a first name or an
 *      initial is fine and is often preferable).
 *   4. Drop the photo into /public/images and set `photo.src`. Use
 *      `photo.focalPoint` (e.g. "50% 25%") to keep faces in frame — the
 *      layout does not need to change.
 *   5. DELETE `isPlaceholder: true` from that entry.
 *
 * Never invent a review, a name, a condition or an outcome. Never add star
 * ratings a patient did not give. See /editorial-policy.
 */
export const patientStories: PatientStory[] = [
  {
    quote: [
      {
        text: "I had been dealing with a persistent problem for quite some time and had already tried different options before visiting the clinic. The consultation was very clear and reassuring, and I finally understood what was causing the problem. After following the treatment plan, I started seeing ",
      },
      { text: "steady improvement", highlight: true },
      { text: ", and today I feel " },
      { text: "much more confident and comfortable", highlight: true },
      { text: " than before." },
    ],
    patientName: "Rahul Sharma",
    patientContext: "Sikar",
    photo: {
      src: null,
      alt: "Rahul Sharma photographed with Dr. Nitin Sharma at Aura Cure Clinic",
      focalPoint: "50% 30%",
    },
    isPlaceholder: true,
  },
  {
    quote: [
      {
        text: "What stayed with me was how unhurried the first visit was. Every question I had was answered, and nothing was promised that could not be explained. Over the follow-up visits there was ",
      },
      { text: "clear, steady progress", highlight: true },
      { text: ", and I always knew what the next step would be." },
    ],
    patientName: "Meena K.",
    patientContext: "Sikar",
    photo: {
      src: null,
      alt: "Patient photographed with Dr. Nitin Sharma at Aura Cure Clinic",
      focalPoint: "50% 30%",
    },
    isPlaceholder: true,
  },
];
