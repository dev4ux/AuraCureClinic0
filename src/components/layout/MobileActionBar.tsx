"use client";

import Link from "next/link";
import { siteConfig, mapsDirectionsUrl } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { CalendarIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

/**
 * Persistent thumb-reachable action bar on mobile. Four highest-intent
 * actions only; body padding is applied in layout so it never covers content.
 */
export function MobileActionBar() {
  const itemClass =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 backdrop-blur-md xl:hidden">
      <nav aria-label="Quick actions" className="flex items-stretch">
        <a
          href={siteConfig.contact.phoneHref}
          onClick={() => track("cta_call_click", { location: "mobile_bar" })}
          className={`${itemClass} text-charcoal-soft hover:text-forest-700`}
        >
          <PhoneIcon className="h-5 w-5" />
          Call
        </a>
        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_whatsapp_click", { location: "mobile_bar" })}
          className={`${itemClass} border-l border-border text-charcoal-soft hover:text-forest-700`}
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_directions_click", { location: "mobile_bar" })}
          className={`${itemClass} border-l border-border text-charcoal-soft hover:text-forest-700`}
        >
          <MapPinIcon className="h-5 w-5" />
          Directions
        </a>
        <Link
          href="/appointment"
          onClick={() => track("cta_appointment_click", { location: "mobile_bar" })}
          className={`${itemClass} bg-forest-800 text-ivory hover:bg-forest-700`}
        >
          <CalendarIcon className="h-5 w-5" />
          Book
        </Link>
      </nav>
    </div>
  );
}
