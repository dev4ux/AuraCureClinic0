import Link from "next/link";
import { siteConfig, mapsDirectionsUrl } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon, ArrowRightIcon } from "@/components/ui/icons";

/**
 * The "where to get this, locally" block that closes every service page.
 *
 * Two jobs. For a patient, it answers the question they actually have after
 * reading about a treatment — where do I get it, and how do I get there. For
 * search, it puts the service name next to the clinic's real name, address and
 * city in body copy, which is what connects a "[service] in Sikar" query to
 * this page. The address is read from site-config so it can never drift out of
 * step with the NAP data used in schema and on the contact page — mismatched
 * NAP across a site is a genuine local-ranking problem.
 */
export function LocalRelevance({
  serviceName,
  /** Sibling services to cross-link. Internal links spread topical relevance. */
  related = [],
}: {
  serviceName: string;
  related?: { name: string; href: string }[];
}) {
  const { locality, region, street, postalCode } = siteConfig.address;
  const hoursUnverified = siteConfig.hours.display.startsWith("[");

  return (
    <section
      aria-labelledby="local-heading"
      className="mt-14 scroll-mt-28 rounded-lg border border-border bg-ivory-muted/70 p-6 sm:p-8"
      id="in-sikar"
    >
      <h2 id="local-heading" className="font-heading text-xl font-semibold text-forest-900 sm:text-2xl">
        {serviceName} in {locality}
      </h2>

      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-charcoal-soft">
        {serviceName} is available at Aura Cure Clinic on Bajaj Road, opposite Jain School and Vardhman School in{" "}
        {locality}. Consultations
        are with {siteConfig.doctor.name}, {siteConfig.doctor.credentials}, and run by appointment so each case gets
        proper time. Patients travel from across {region} for in-clinic visits, and online consultations are available
        for anyone further away.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="flex gap-3">
          <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
          <div>
            <p className="text-[13px] font-semibold text-charcoal">Clinic address</p>
            <p className="mt-1 text-[13px] leading-relaxed text-charcoal-soft">
              {street}, {locality}, {region} {postalCode}
            </p>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-medium text-forest-700 underline-offset-4 hover:underline"
            >
              Get directions
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" />
          <div>
            <p className="text-[13px] font-semibold text-charcoal">Ask before you book</p>
            <p className="mt-1 text-[13px] leading-relaxed text-charcoal-soft">
              Call to ask whether {serviceName} is appropriate for your case.
            </p>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-1.5 inline-flex items-center gap-1 text-[13px] font-medium text-forest-700 underline-offset-4 hover:underline"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            {/* Hours print only once verified — a wrong opening time on a
                clinic page sends someone to a closed door. */}
            {!hoursUnverified && (
              <p className="mt-1.5 text-[12px] leading-relaxed text-charcoal-faint">
                {siteConfig.hours.display}
                <span className="block">{siteConfig.hours.closedNote}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-charcoal-faint">
            Also offered in {locality}
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-x-1.5 gap-y-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="inline-flex rounded-full border border-border bg-surface px-3 py-1.5 text-[12.5px] text-charcoal-soft transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:border-forest-600/45 hover:text-forest-800"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
