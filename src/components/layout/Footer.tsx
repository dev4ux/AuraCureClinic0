import Link from "next/link";
import { siteConfig, mapsDirectionsUrl } from "@/lib/site-config";
import { conditions } from "@/data/conditions";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-forest-800/40 bg-forest-950 text-ivory/80">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              A homeopathic medical clinic in Sikar offering unhurried, individualised consultations.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory">Explore</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Conditions">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory">Conditions</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {conditions.map((c) => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`} className="transition-colors hover:text-ivory">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory">Visit Us</h2>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
              <p className="text-ivory/70">{siteConfig.address.full}</p>
              <p>
                <a href={siteConfig.contact.phoneHref} className="transition-colors hover:text-ivory">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="text-ivory/70">{siteConfig.hours.display}</p>
              <p>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-ivory"
                >
                  Get directions
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/10 pt-8">
          <p className="text-xs leading-relaxed text-ivory/50">
            <strong className="font-semibold text-ivory/70">Medical disclaimer:</strong> Information on this website is
            for general awareness only and is not a substitute for professional medical advice, diagnosis or treatment.
            Always consult a qualified healthcare professional about your specific condition. In an emergency, seek
            immediate medical care.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ivory/50">
              © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {siteConfig.footerLegalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
