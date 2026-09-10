/**
 * The clinic's services, grouped the way the practice itself is categorised on
 * its Google Business Profile. Keeping this file as the single source means the
 * website, the GBP listing and anything printed stay in step — mismatched
 * service lists are a real local-SEO problem, not just an editorial one.
 *
 * `href` is optional on purpose. A service links out only when a page for it
 * actually exists on this site; everything else renders as plain text rather
 * than a link into a 404. As pages are added, add the href here — no component
 * change is needed.
 *
 * `image` is likewise empty until the clinic supplies its own photograph. The
 * layout already reserves the space, so dropping a real file in later is a
 * one-line change per category with no reflow.
 *
 * NEEDS CLINIC SIGN-OFF before launch — these are listed on the GBP but carry
 * more weight than the rest, and should be confirmed as services Dr. Sharma
 * personally provides in-clinic: Skin Cancer Screening, Hair Transplant
 * Surgery, Botox Injections, Dermal Fillers, Shingles Treatment.
 */

export interface CategoryService {
  name: string;
  href?: string;
}

export interface ServiceCategory {
  id: string;
  /** GBP category this block maps to — useful when auditing the listing. */
  listedAs: string;
  name: string;
  description: string;
  /**
   * One line for the mega-menu, under the heading. Says what kind of care is
   * in the column so a patient can rule it in or out without reading the list.
   * Deliberately shorter and plainer than `description`, which is page copy.
   */
  menuHint: string;
  /** Only where the clinic publishes a starting price. */
  priceFrom?: string;
  services: CategoryService[];
  /** Empty until a real clinic photograph is supplied. */
  image: string;
  imageAlt: string;
  /** Filename the slot asks for, so the handover is unambiguous. */
  imageSlot: string;
  /** Where the category's "see everything" link points. */
  href: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    listedAs: "Hair Treatment Clinic",
    name: "Hair Care",
    menuHint: "Hair fall, thinning and scalp treatments",
    description:
      "Root-cause hair care — constitutional homeopathy alongside regenerative scalp procedures for shedding, thinning and patchy loss.",
    priceFrom: "₹2,500",
    href: "/conditions/hair-fall",
    image: "/images/care/hair-care.webp",
    imageAlt: "Trichology consultation at Aura Cure Clinic",
    imageSlot: "care/hair-care.jpg",
    services: [
      { name: "Hair Fall Treatment", href: "/conditions/hair-fall" },
      { name: "Hair GFC", href: "/services/hair-gfc" },
      { name: "Hair PRP", href: "/services/hair-prp" },
      { name: "Hair Mesotherapy", href: "/services/hair-mesotherapy" },
      { name: "Scalp Microneedling", href: "/services/scalp-microneedling" },
      { name: "Hair Loss Consultation", href: "/conditions/hair-fall" },
      { name: "Female Hair Loss Treatment", href: "/services/female-hair-loss-treatment" },
      { name: "Hair Density Improvement", href: "/services/hair-density-improvement" },
      { name: "Low-Level Light Therapy (LLLT)", href: "/services/low-level-light-therapy" },
      { name: "Non-Surgical Hair Replacement", href: "/services/non-surgical-hair-replacement" },
    ],
  },
  {
    id: "skin",
    listedAs: "Skin Care Clinic · Dermatologist",
    name: "Skin Care",
    menuHint: "Acne, pigmentation and skin conditions",
    description:
      "Acne, pigmentation and long-standing skin conditions treated from the inside out, with medical-grade procedures where they add to the result.",
    priceFrom: "₹3,000",
    href: "/conditions/skin-problems",
    image: "/images/care/skin-care.webp",
    imageAlt: "Skin assessment during a dermatology consultation",
    imageSlot: "care/skin-care.jpg",
    services: [
      { name: "Acne Treatment", href: "/conditions/skin-problems" },
      { name: "Pigmentation & Sun Damage", href: "/conditions/skin-problems" },
      { name: "Chemical Peel", href: "/services/chemical-peel" },
      { name: "Face PRP", href: "/services/face-prp" },
      { name: "Face Mesotherapy", href: "/services/face-mesotherapy" },
      { name: "Vitiligo Treatment", href: "/services/vitiligo-treatment" },
      { name: "Seborrheic Dermatitis", href: "/services/seborrheic-dermatitis" },
      { name: "Contact Dermatitis", href: "/services/contact-dermatitis" },
      { name: "Skin Infection Treatment", href: "/services/skin-infection-treatment" },
      { name: "Skin Tag Removal", href: "/services/skin-tag-removal" },
      { name: "Facial Extractions", href: "/services/facial-extractions" },
      { name: "Skin Examination & Referral", href: "/services/skin-cancer-screening" },
    ],
  },
  {
    id: "laser-aesthetic",
    listedAs: "Aesthetic Clinic · Cosmetologist · Beauty Clinic",
    name: "Laser & Aesthetic",
    menuHint: "Laser, facials and cosmetic procedures",
    description:
      "Advanced in-clinic procedures for texture, tone and unwanted hair — performed under a qualified cosmetologist.",
    href: "/services",
    image: "/images/care/laser-aesthetic.webp",
    imageAlt: "Laser and aesthetic procedure room at the clinic",
    imageSlot: "care/laser-aesthetic.jpg",
    services: [
      { name: "Laser Hair Removal", href: "/services/laser-hair-removal" },
      { name: "Laser Treatment", href: "/services/laser-treatment" },
      { name: "Laser Tattoo Removal", href: "/services/laser-tattoo-removal" },
      { name: "HydraFacial", href: "/services/hydra-facial" },
      { name: "Hydrodermabrasion", href: "/services/hydrodermabrasion" },
      { name: "Microneedling", href: "/services/microneedling" },
      { name: "Skin Resurfacing & Rejuvenation", href: "/services/skin-resurfacing" },
      { name: "Customized Facials", href: "/services/customized-facials" },
      { name: "LED Light Therapy", href: "/services/led-light-therapy" },
      { name: "Exfoliation Treatments", href: "/services/exfoliation-treatments" },
      { name: "Botox Injections", href: "/services/botox-injections" },
      { name: "Dermal Fillers", href: "/services/dermal-fillers" },
    ],
  },
  {
    id: "homeopathy",
    listedAs: "Homeopathic Pharmacy · Homeopathic Consultation",
    name: "Homeopathy & General Health",
    menuHint: "Long-term care for everyday health concerns",
    description:
      "Classical homeopathic care for chronic, everyday complaints — in-clinic in Sikar or online from anywhere in India.",
    href: "/conditions",
    image: "/images/care/homeopathy.webp",
    imageAlt: "Homeopathic consultation and dispensing at the clinic",
    imageSlot: "care/homeopathy.jpg",
    services: [
      { name: "Homeopathic Consultation", href: "/treatments" },
      { name: "Online Consultation", href: "/appointment" },
      { name: "Migraine", href: "/conditions/migraine" },
      { name: "Allergy", href: "/conditions/allergy" },
      { name: "Asthma & Breathing", href: "/conditions/asthma-breathing" },
      { name: "Women's Health & PCOS", href: "/conditions/womens-health" },
      { name: "Joint & Arthritis", href: "/conditions/joint-arthritis" },
      { name: "Digestive Health", href: "/conditions/digestive-health" },
      { name: "Back Pain", href: "/conditions/back-pain" },
      { name: "Piles", href: "/conditions/piles" },
      { name: "Kidney Stones", href: "/conditions/kidney-stones" },
      { name: "Medicine Dispensing", href: "/services/homeopathic-medicine-dispensing" },
    ],
  },
];
