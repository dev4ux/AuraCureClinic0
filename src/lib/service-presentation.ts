import type { ServiceContent, HighlightIcon } from "@/lib/types";
import { siteConfig } from "@/lib/site-config";

/**
 * Presentation defaults for the service page template.
 *
 * The design calls for a hero badge strip and an at-a-glance details bar on
 * every service page. Thirty-one services cannot each be given hand-written
 * clinical specifics without inventing some of them — and a fabricated
 * "45–60 minutes" or "results in 2–3 months" is exactly the kind of detail a
 * patient plans around and judges the clinic by.
 *
 * So the fallbacks here state only what is true of every service at this
 * clinic: it is assessed in person, by a named BHMS doctor, at a known
 * address, by appointment. A service that has its own verified specifics
 * overrides them in its data file, and those win.
 */

export interface Highlight {
  label: string;
  sublabel?: string;
  icon: HighlightIcon;
}

/** True of every service here, so safe as a universal fallback. */
function defaultHighlights(): Highlight[] {
  return [
    { label: "Doctor-assessed", sublabel: "Before anything is advised", icon: "check" },
    { label: "Personalised care", sublabel: `by ${siteConfig.doctor.name}`, icon: "user" },
    { label: "In-clinic", sublabel: `${siteConfig.address.locality}, ${siteConfig.address.region}`, icon: "leaf" },
    { label: "By appointment", sublabel: "Unhurried consultation", icon: "clock" },
  ];
}

export function getHighlights(service: ServiceContent): Highlight[] {
  if (!service.highlights?.length) return defaultHighlights();

  // Service-specific badges first, topped up to four with universal ones so
  // the strip keeps its shape without repeating a label.
  const own: Highlight[] = service.highlights.map((h) => ({ label: h.label, icon: h.icon }));
  const seen = new Set(own.map((h) => h.label.toLowerCase()));
  const filler = defaultHighlights().filter((h) => !seen.has(h.label.toLowerCase()));
  return [...own, ...filler].slice(0, 4);
}

export interface DetailRow {
  label: string;
  value: string;
}

/**
 * The at-a-glance strip. Service-supplied rows lead; the rest is filled with
 * facts that hold for any treatment here, including the honest answer that
 * session counts are decided after assessment rather than quoted upfront.
 */
export function getDetails(service: ServiceContent): DetailRow[] {
  const own = service.details ?? [];
  const seen = new Set(own.map((d) => d.label.toLowerCase()));

  const universal: DetailRow[] = [
    { label: "Sessions", value: "Decided after assessment" },
    { label: "Consultation", value: "In person, by appointment" },
    { label: "Seen by", value: `${siteConfig.doctor.name}, ${siteConfig.doctor.credentials}` },
    { label: "Location", value: `Bajaj Road, ${siteConfig.address.locality}` },
    { label: "Online option", value: "Available for follow-ups" },
  ];

  return [...own, ...universal.filter((d) => !seen.has(d.label.toLowerCase()))].slice(0, 5);
}

/**
 * Falls back to the service's own one-liner rather than inventing a slogan —
 * better a plain true sentence under the H1 than marketing copy that promises
 * something the page then has to walk back.
 */
export function getTagline(service: ServiceContent): string {
  return service.tagline ?? service.shortDescription;
}
