import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { articles } from "@/data/articles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { FinalCta } from "@/components/shared/FinalCta";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Health Library",
  description:
    "Plain-language health articles from Aura Cure Clinic, Sikar — written for patient awareness and reviewed for medical accuracy.",
  alternates: { canonical: "/health-library" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Health Library", href: "/health-library" },
];

export default function HealthLibraryPage() {
  const clusters = Array.from(new Set(articles.map((a) => a.cluster)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: toJsonLdScript(
            breadcrumbSchema(crumbs.map((c) => ({ name: c.name, url: `${siteConfig.url}${c.href}` })))
          ),
        }}
      />
      <Breadcrumbs items={crumbs} />

      <Container className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl sm:text-[2.75rem]">Health library</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            Articles written to answer the questions patients actually ask — in plain language, without exaggerated
            claims. Each is reviewed for medical accuracy and dated so you know how current it is.
          </p>
        </div>

        {clusters.map((cluster) => (
          <section key={cluster} className="mt-14">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-600">{cluster}</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter((a) => a.cluster === cluster)
                .map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/health-library/${a.slug}`}
                      className="group flex h-full flex-col justify-between gap-5 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-forest-600/50"
                    >
                      <div>
                        <h3 className="font-heading text-lg font-semibold leading-snug text-forest-900">{a.title}</h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-charcoal-soft">{a.excerpt}</p>
                      </div>
                      <span className="flex items-center justify-between gap-3 text-xs text-charcoal-faint">
                        {a.readingTimeMinutes} min read
                        <ArrowRightIcon className="h-3.5 w-3.5 text-forest-700 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </Container>

      <FinalCta location="health_library_final" />
    </>
  );
}
