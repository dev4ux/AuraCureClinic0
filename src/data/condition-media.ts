import type { ConditionMedia } from "@/lib/types";

/**
 * Photography configuration for condition detail pages.
 *
 * Sourced from verified clinic imagery and authentic treatment photography
 * in /public/images.
 */
export const conditionMedia: Record<string, ConditionMedia> = {
  "back-pain": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Homeopathic consultation for back pain at Aura Cure Clinic",
      brief: "Consultation scene for musculoskeletal concerns in warm natural daylight.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Dr. Nitin Sharma evaluating a patient during consultation",
      brief: "Doctor and patient discussing movement and posture.",
    },
  },
  "slip-disc": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Homeopathic consultation for spinal and disc concerns",
      brief: "Private consultation room setting at Aura Cure Clinic.",
    },
    experience: {
      src: "/images/clinic-detail.jpg",
      alt: "Treatment and examination area at Aura Cure Clinic",
      brief: "Clinical examination space.",
    },
  },
  "joint-arthritis": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Constitutional homeopathic care for joint and arthritis concerns",
      brief: "Unhurried consultation for joint discomfort and mobility.",
    },
    experience: {
      src: "/images/clinic-consultation.jpg",
      alt: "Consultation room at Aura Cure Clinic, Sikar",
      brief: "Clinical environment.",
    },
  },
  migraine: {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Homeopathic evaluation for recurring headaches and migraine",
      brief: "Calm consultation atmosphere.",
    },
    experience: {
      src: "/images/clinic-consultation.jpg",
      alt: "Private doctor consultation desk at Aura Cure Clinic",
      brief: "Quiet consultation room.",
    },
  },
  allergy: {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Evaluation for seasonal and chronic allergies at Aura Cure Clinic",
      brief: "Constitutional homeopathic care setting.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Dr. Nitin Sharma conducting a patient case-taking session",
      brief: "Doctor discussing trigger factors.",
    },
  },
  "skin-problems": {
    hero: {
      src: "/images/care/skin-care.webp",
      alt: "Dermatological and skin assessment at Aura Cure Clinic, Sikar",
      brief: "Skin evaluation and consultation.",
    },
    experience: {
      src: "/images/results/acne-after.webp",
      alt: "Clinical skin care assessment results",
      brief: "Dermatology treatment outcome.",
    },
  },
  "hair-fall": {
    hero: {
      src: "/images/care/hair-care.webp",
      alt: "Trichology and hair thinning consultation at Aura Cure Clinic",
      brief: "Hair and scalp assessment.",
    },
    experience: {
      src: "/images/results/hair-fall-after.webp",
      alt: "Hair density and scalp care progress",
      brief: "Scalp assessment outcome.",
    },
  },
  "digestive-health": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Homeopathic consultation for chronic digestive concerns",
      brief: "In-depth case taking for gastric and digestive concerns.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Dr. Nitin Sharma discussing lifestyle and dietary factors with a patient",
      brief: "Doctor consultation.",
    },
  },
  "asthma-breathing": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Respiratory and asthma homeopathic evaluation at Aura Cure Clinic",
      brief: "Constitutional assessment for breathing concerns.",
    },
    experience: {
      src: "/images/clinic-consultation.jpg",
      alt: "Unhurried consultation environment at Aura Cure Clinic",
      brief: "Consultation room.",
    },
  },
  "womens-health": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Discreet women's health and hormonal consultation with Dr. Nitin Sharma",
      brief: "Private, confidential consultation setting.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Private case evaluation at Aura Cure Clinic, Sikar",
      brief: "Consultation scene.",
    },
  },
  "kidney-stones": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Homeopathic consultation for renal and kidney stone concerns",
      brief: "Clinical evaluation at Aura Cure Clinic.",
    },
    experience: {
      src: "/images/clinic-detail.jpg",
      alt: "Facilities at Aura Cure Clinic, Sikar",
      brief: "Clinic facility.",
    },
  },
  piles: {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Discreet, confidential homeopathic consultation for anorectal concerns",
      brief: "Private doctor consultation across desk.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Private case evaluation with Dr. Nitin Sharma",
      brief: "Doctor consultation.",
    },
  },
  "sexual-private-health": {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Strictly confidential private health consultation at Aura Cure Clinic",
      brief: "Confidential doctor consultation chamber.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Confidential consultation with Dr. Nitin Sharma",
      brief: "Private consultation.",
    },
  },
};

export function getConditionMedia(slug: string): ConditionMedia {
  return conditionMedia[slug] ?? {
    hero: {
      src: "/images/care/homeopathy.webp",
      alt: "Consultation at Aura Cure Clinic, Sikar",
      brief: "Clinic consultation.",
    },
    experience: {
      src: "/images/doctor-patient.jpg",
      alt: "Dr. Nitin Sharma during consultation",
      brief: "Doctor consultation.",
    },
  };
}
