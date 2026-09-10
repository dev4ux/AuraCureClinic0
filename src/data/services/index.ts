import type { ServiceContent, ServiceCategoryId } from "@/lib/types";
import { hairServices } from "./hair";
import { skinServices } from "./skin";
import { laserAestheticServices } from "./laser-aesthetic";
import { homeopathyServices } from "./homeopathy";

/**
 * Every service with its own page, in one array.
 *
 * Split across four files by category so each stays editable — a single file
 * holding all of them would be unmanageable — but consumed from here so
 * importers never need to know which file a service lives in.
 */
export const allServices: ServiceContent[] = [
  ...hairServices,
  ...skinServices,
  ...laserAestheticServices,
  ...homeopathyServices,
];

export { hairServices, skinServices, laserAestheticServices, homeopathyServices };

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return allServices.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategoryId): ServiceContent[] {
  return allServices.filter((s) => s.category === category);
}

/**
 * Fails the build if two services ever share a slug — a duplicate would make
 * one page silently unreachable, which is the kind of thing nobody notices
 * until a patient does.
 */
const seen = new Set<string>();
for (const service of allServices) {
  if (seen.has(service.slug)) {
    throw new Error(`services: duplicate slug "${service.slug}"`);
  }
  seen.add(service.slug);
}
