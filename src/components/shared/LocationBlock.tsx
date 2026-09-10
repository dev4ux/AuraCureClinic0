import { siteConfig, mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/site-config";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export function LocationBlock() {
  return (
    <Section id="find-us">
      <SectionHeading
        eyebrow="Find us"
        title="Bajaj Road, opposite Jain School"
        description="On Bajaj Road, opposite Jain School and Vardhman School — a central Sikar landmark, easy to reach from most parts of the city."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal variant="left" className="space-y-7">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Address</h3>
            <address className="mt-2 text-[15px] not-italic leading-relaxed text-charcoal-soft">
              {siteConfig.brand}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.locality}, {siteConfig.address.region} {siteConfig.address.postalCode}
              <br />
              {siteConfig.address.countryName}
            </address>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Timings</h3>
            <p className="mt-2 text-[15px] text-charcoal-soft">{siteConfig.hours.display}</p>
            <p className="mt-1 text-sm text-charcoal-faint">{siteConfig.hours.closedNote}</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <TrackedLink
              href={mapsDirectionsUrl}
              external
              event="cta_directions_click"
              location="location_block"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-forest-700 underline underline-offset-4 hover:text-forest-800"
            >
              <MapPinIcon className="h-4 w-4" />
              Get directions in Google Maps
            </TrackedLink>
            <TrackedLink
              href={siteConfig.contact.phoneHref}
              event="cta_call_click"
              location="location_block"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-forest-700 underline underline-offset-4 hover:text-forest-800"
            >
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.contact.phoneDisplay}
            </TrackedLink>
            <TrackedLink
              href={siteConfig.contact.whatsappHref}
              external
              event="cta_whatsapp_click"
              location="location_block"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-forest-700 underline underline-offset-4 hover:text-forest-800"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message on WhatsApp
            </TrackedLink>
          </div>
        </Reveal>

        <Reveal variant="right" delay={90} className="overflow-hidden rounded-lg border border-border bg-ivory-muted">
          <iframe
            src={mapsEmbedUrl}
            title={`Map showing the location of ${siteConfig.brand} in Sikar`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full border-0 sm:h-[420px]"
          />
        </Reveal>
      </div>
    </Section>
  );
}
