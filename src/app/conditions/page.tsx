import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, toJsonLdScript } from "@/lib/schema";
import { conditions } from "@/data/conditions";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ConditionFinder } from "@/components/conditions/ConditionFinder";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description:
    "Conditions commonly seen at Aura Cure Clinic, Sikar — migraine, allergies, skin problems, hair fall and digestive health. Learn what to expect from a consultation.",
  alternates: { canonical: "/conditions" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Conditions", href: "/conditions" },
];

export default function ConditionsPage() {
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
          <h1 className="text-balance text-4xl sm:text-[2.75rem]">Conditions we commonly see</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            These pages explain each condition plainly, describe when professional evaluation is needed, and set out
            what a homeopathic consultation at Aura Cure Clinic actually involves. They are for understanding — not
            self-diagnosis.
          </p>
        </div>

        <div className="mt-12">
          <ConditionFinder conditions={conditions} cardHeadingLevel="h2" />
        </div>
      </Container>

      <FinalCta
        heading="Not sure which applies to you?"
        body="You don't need a diagnosis before calling. Describe what you're experiencing and the clinic will tell you whether a consultation is appropriate."
        location="conditions_index_final"
      />
    </>
  );
}
