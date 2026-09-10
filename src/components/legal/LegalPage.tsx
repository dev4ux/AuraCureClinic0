import { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function LegalPage({
  title,
  intro,
  lastUpdated,
  href,
  children,
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  href: string;
  children: ReactNode;
}) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: title, href },
  ];

  const formatted = new Date(lastUpdated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl sm:text-[2.5rem]">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">{intro}</p>
          <p className="mt-4 text-sm text-charcoal-faint">
            Last updated: <time dateTime={lastUpdated}>{formatted}</time>
          </p>

          <div className="prose-medical mt-10">{children}</div>

          <div className="mt-12 rounded-lg border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold text-charcoal">Questions about this policy?</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
              Contact {siteConfig.brand} at {siteConfig.contact.phoneDisplay} or {siteConfig.contact.email}.
              <br />
              {siteConfig.address.full}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
