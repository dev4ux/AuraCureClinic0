import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reviews } from "@/components/home/Reviews";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Verified patient reviews for Aura Cure Clinic, Sikar. We publish only genuine reviews left by patients themselves.",
  alternates: { canonical: "/reviews" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Patient Stories", href: "/reviews" },
];

export default function ReviewsPage() {
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

      <Container className="pt-14 sm:pt-20">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl sm:text-[2.75rem]">Patient reviews</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            Reviews here come from patients themselves. The clinic does not write testimonials on patients&rsquo;
            behalf, does not publish reviews that were solicited in exchange for anything, and does not display ratings
            that were not actually given.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-faint">
            Individual experiences described in reviews are personal to that patient. They are not a prediction of
            results for anyone else, and should not be read as a medical claim.
          </p>
        </div>
      </Container>

      <Reviews />
      <FinalCta location="reviews_final" />
    </>
  );
}
