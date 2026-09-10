import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { conditions } from "@/data/conditions";

/**
 * The route already returns HTTP 404, which is the authoritative signal to
 * search engines; noindex here removes any ambiguity from the inherited
 * canonical tag.
 */
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">Page not found</p>
        <h1 className="mt-3 text-balance text-4xl sm:text-[2.5rem]">That page doesn&rsquo;t exist</h1>
        <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
          The link may be outdated or mistyped. If you were looking for information about a condition, these pages may
          help — or simply call the clinic and ask.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {conditions.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/conditions/${c.slug}`}
                className="inline-flex rounded-md border border-border-strong bg-surface px-3.5 py-2 text-sm text-charcoal-soft transition-colors hover:border-forest-600/50 hover:text-forest-700"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Contact the clinic
          </Button>
        </div>
      </div>
    </Container>
  );
}
