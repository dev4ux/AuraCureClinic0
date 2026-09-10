/**
 * SINGLE SOURCE OF TRUTH for clinic identity, NAP (Name/Address/Phone) and
 * doctor credentials. Every page reads from this file so business information
 * never drifts out of sync across the site (critical for local SEO).
 *
 * Contact details, address, opening hours and social links below are taken
 * from the clinic's own live site, auracureclinic.com (verified 2 Sept 2026).
 * The address wording matches that site exactly — "opposite Jain School and
 * Vardhman School" — rather than a paraphrase, because Google cross-checks
 * this string against the Business Profile and other listings.
 *
 * Anything still written as a bracketed [PLACEHOLDER] is NOT published on the
 * live site and must come from the clinic directly. Never invent a value here:
 * these fields feed schema.org markup and the Business Profile, where a wrong
 * value is worse than a missing one.
 */

export const siteConfig = {
  brand: "Aura Cure Clinic",
  tagline: "Homeopathic Medical Clinic",
  legalBusinessType: "Homeopathic Medical Clinic",

  // Replace with the live production domain once assigned.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.auracureclinic.in",

  address: {
    street: "Opposite Jain School & Vardhman School, Bajaj Road",
    locality: "Sikar",
    region: "Rajasthan",
    postalCode: "332001",
    country: "IN",
    countryName: "India",
    full: "Opposite Jain School & Vardhman School, Bajaj Road, Sikar, Rajasthan 332001, India",
    /** Landmark line for directions copy, as the clinic words it. */
    landmark: "Opposite Jain School and Vardhman School, Bajaj Road",
  },

  // Placeholder geo-coordinates for Subhash Chowk, Sikar (approximate town-centre
  // reference only). Replace with the clinic's exact pinned coordinates from
  // Google Business Profile before launch — do not rely on this approximation
  // for structured data or the embedded map in production.
  geo: {
    latitude: 27.6094,
    longitude: 75.1399,
    isApproximate: true,
  },

  // One number serves both calls and WhatsApp, exactly as published on the
  // clinic's live site. Keeping them as separate fields means that if the
  // clinic ever splits them, only this file changes.
  contact: {
    phoneDisplay: "96108 96996",
    phoneHref: "tel:+919610896996",
    /** E.164 form for schema.org — crawlers expect a dialable international number. */
    phoneE164: "+919610896996",
    whatsappDisplay: "96108 96996",
    whatsappHref: "https://wa.me/919610896996",
    email: "auracureclinic@gmail.com",
    emailHref: "mailto:auracureclinic@gmail.com",
  },

  // Must stay identical to the Google Business Profile listing — conflicting
  // opening hours across a site and its listing is a real local-ranking
  // problem, and sends patients to a closed door.
  hours: {
    display: "Monday to Saturday, 10:00 AM – 7:00 PM",
    /** schema.org OpeningHoursSpecification. Sunday is simply absent = closed. */
    structured: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ] as { days: string[]; opens: string; closes: string }[],
    closedNote: "Closed on Sunday",
    /** Shown wherever in-clinic hours are listed, since distance is no barrier. */
    onlineNote: "Online consultation available",
  },

  doctor: {
    // Name, qualification, title, years of experience and patients treated are
    // confirmed by the client. The registration number remains unverified —
    // see the Real Data Rule note above.
    name: "Dr. Nitin Sharma",
    credentials: "BHMS",
    title: "Homeopathic Doctor & Cosmetologist",
    registration: "[STATE_MEDICAL_REGISTRATION_NUMBER]",
    // Supplied by the clinic. Keep these two in sync with anything printed on
    // clinic material — they are claims patients will hold the practice to.
    yearsOfExperience: "14+",
    patientsTreated: "5000+",
    photo: "/images/dr-nitin-sharma.webp",
  },

  social: {
    // Short Maps link the clinic publishes itself — it resolves to their
    // pinned Business Profile, so it is the authoritative one to reference.
    googleBusinessProfile: "https://maps.app.goo.gl/f8csAVN4K1emdJjE6",
    instagram: "https://www.instagram.com/auracureclinic",
    // Not published on the clinic's live site. Leave bracketed until supplied
    // — an invented or guessed profile URL in sameAs is worse than none.
    facebook: "[FACEBOOK_URL]",
  },

  analytics: {
    // Leave unset until a real GA4 property exists — no script loads without it.
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  },

  /**
   * Primary navigation. "All Services" replaces the former separate
   * Treatments and Conditions tabs — both were browsing surfaces onto the
   * same catalogue, and splitting them made patients guess which one held
   * what they wanted. It opens a mega-menu rather than navigating directly,
   * flagged by `megaMenu` so the header knows to render the panel.
   */
  nav: [
    { label: "Home", href: "/" },
    { label: "About Doctor", href: "/about-doctor" },
    { label: "All Services", href: "/services" },
    { label: "Patient Stories", href: "/reviews" },
    { label: "Clinic", href: "/clinic" },
    { label: "Health Library", href: "/health-library" },
  ] as { label: string; href: string; megaMenu?: boolean }[],

  /**
   * Footer "Explore" list. Mirrors the header nav plus Contact — Contact was
   * removed from the navbar in favour of the Book Appointment button, but the
   * page holds the clinic's address, phone and hours, so it keeps a permanent
   * link here rather than being reachable only from deep contextual links.
   */
  get footerNav() {
    return [...this.nav, { label: "Contact", href: "/contact" }];
  },

  footerLegalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    { label: "Editorial & Review Policy", href: "/editorial-policy" },
  ],
} as const;

/**
 * Directions link. Prefers the clinic's own published Maps short link, which
 * resolves to their pinned Business Profile — a generated address search can
 * land on the wrong side of Bajaj Road. Falls back to an address query only
 * if that link is ever removed from config.
 */
export const mapsDirectionsUrl = siteConfig.social.googleBusinessProfile.startsWith("http")
  ? siteConfig.social.googleBusinessProfile
  : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${siteConfig.brand}, ${siteConfig.address.full}`
    )}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${siteConfig.brand}, ${siteConfig.address.full}`
)}&output=embed`;
