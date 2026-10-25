"use client";

import { siteConfig, mapsDirectionsUrl } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { ExternalLinkIcon, MapPinIcon } from "@/components/ui/icons";

/**
 * The clinic's address as one tappable block that opens the clinic's own
 * pinned Google Maps listing — on a phone that hands straight off to the Maps
 * app for directions. The whole block is the link, not just a small "map"
 * word beside it, so it is an easy thumb target.
 */
export function ClinicLocationLink({ location, className = "" }: { location: string; className?: string }) {
  return (
    <a
      href={mapsDirectionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("cta_directions_click", { location })}
      className={`group flex items-start gap-3 rounded-xl border border-border-strong/60 bg-surface px-4 py-3.5 text-left transition-colors duration-200 hover:border-forest-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/50 focus-visible:ring-offset-2 ${className}`}
    >
      <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" />
      <span className="min-w-0 flex-1">
        <span className="block text-[14px] font-medium text-charcoal">{siteConfig.brand}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-charcoal-soft">{siteConfig.address.full}</span>
        <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-forest-700 group-hover:underline group-hover:underline-offset-4">
          Open in Google Maps
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </span>
      </span>
    </a>
  );
}
