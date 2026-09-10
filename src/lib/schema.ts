import { siteConfig } from "@/lib/site-config";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.brand,
    description:
      "Homeopathic medical clinic offering individualised consultations in Sikar, Rajasthan.",
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    medicalSpecialty: "Homeopathic",
    areaServed: [
      { "@type": "City", name: "Sikar" },
      { "@type": "State", name: "Rajasthan" },
    ],
    availableService: [
      { "@type": "MedicalTherapy", name: "Homeopathic Consultation" },
      { "@type": "MedicalTherapy", name: "Hair Loss Treatment" },
      { "@type": "MedicalTherapy", name: "Skin Treatment" },
      { "@type": "MedicalTherapy", name: "Laser & Aesthetic Procedures" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.social.googleBusinessProfile.startsWith("http")
      ? siteConfig.social.googleBusinessProfile
      : undefined,
    openingHoursSpecification: siteConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [siteConfig.social.googleBusinessProfile, siteConfig.social.instagram, siteConfig.social.facebook].filter(
      (v) => v && !v.startsWith("[")
    ),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.brand,
    publisher: { "@id": `${siteConfig.url}/#clinic` },
  };
}

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about-doctor#person`,
    name: siteConfig.doctor.name,
    honorificSuffix: siteConfig.doctor.credentials,
    jobTitle: "Homeopathic Physician",
    worksFor: { "@id": `${siteConfig.url}/#clinic` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLd | null {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function medicalWebPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  lastReviewed: string;
  aboutConditionName: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: opts.url,
    name: opts.name,
    description: opts.description,
    lastReviewed: opts.lastReviewed,
    reviewedBy: siteConfig.doctor.name.startsWith("[")
      ? undefined
      : { "@type": "Person", name: siteConfig.doctor.name },
    about: {
      "@type": "MedicalCondition",
      name: opts.aboutConditionName,
    },
    publisher: { "@id": `${siteConfig.url}/#clinic` },
  };
}

/**
 * Schema for one service page.
 *
 * Emitted as MedicalWebPage wrapping a MedicalProcedure so the page is
 * described both as a document (reviewed, dated, published by the clinic) and
 * as the procedure it is about. `areaServed` carries the local signal — this
 * procedure is offered in Sikar, by this clinic — which is what connects a
 * "[service] in Sikar" query to this page.
 */
export function servicePageSchema(opts: {
  url: string;
  name: string;
  description: string;
  lastReviewed: string;
  /** Synonyms patients search for, e.g. "PRP" for platelet-rich plasma. */
  alternateNames?: string[];
  category: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    lastReviewed: opts.lastReviewed,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#clinic` },
    reviewedBy: siteConfig.doctor.name.startsWith("[")
      ? undefined
      : {
          "@type": "Person",
          name: siteConfig.doctor.name,
          honorificSuffix: siteConfig.doctor.credentials,
        },
    about: {
      "@type": "MedicalProcedure",
      name: opts.name,
      alternateName: opts.alternateNames,
      category: opts.category,
      howPerformed: opts.description,
      provider: { "@id": `${siteConfig.url}/#clinic` },
      areaServed: [
        { "@type": "City", name: siteConfig.address.locality },
        { "@type": "State", name: siteConfig.address.region },
      ],
    },
  };
}

/** Lists a category's services so the index page describes its own contents. */
export function serviceListSchema(items: { name: string; url: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function toJsonLdScript(schema: JsonLd | JsonLd[]) {
  return JSON.stringify(schema);
}
