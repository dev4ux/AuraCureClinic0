import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Editorial & Medical Review Policy",
  description:
    "How health content on the Aura Cure Clinic website is written, medically reviewed, dated and corrected.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <LegalPage
      title="Editorial & Medical Review Policy"
      href="/editorial-policy"
      lastUpdated="2026-08-01"
      intro="Health information affects decisions people make about their bodies. This policy sets out how content here is produced and held accountable."
    >
      <h2>Who writes this content</h2>
      <p>
        Clinical content on this website is prepared for patient awareness and reviewed by {siteConfig.doctor.name},{" "}
        {siteConfig.doctor.credentials}, the practising homeopathic physician at {siteConfig.brand}. Every condition
        page and health library article displays who reviewed it and when.
      </p>

      <h2>How content is reviewed</h2>
      <p>
        Before publication, each clinical page is checked for factual accuracy, for responsible framing of what
        treatment can and cannot do, and for clear guidance on when a reader should seek professional evaluation rather
        than self-manage.
      </p>

      <h2>What we will not publish</h2>
      <ul>
        <li>Guaranteed cure claims, or language such as &ldquo;100% cure&rdquo; or &ldquo;permanent results&rdquo;</li>
        <li>Success-rate statistics, patient counts or awards that cannot be substantiated</li>
        <li>Testimonials written on a patient&rsquo;s behalf, or reviews given in exchange for anything</li>
        <li>Content created purely because a keyword has search volume, with no clinical relevance to this practice</li>
        <li>Comparative superlatives positioning this clinic as &ldquo;the best&rdquo; against named competitors</li>
      </ul>

      <h2>Dating and updates</h2>
      <p>
        Every clinical page carries a last-reviewed date. Pages are revisited periodically, and the date is updated only
        when the content itself has actually been re-checked — not to make old content appear fresh.
      </p>

      <h2>Corrections policy</h2>
      <p>
        If you find something inaccurate, tell us at {siteConfig.contact.phoneDisplay} or {siteConfig.contact.email}.
        Substantive factual errors are corrected promptly, and where a correction materially changes the meaning of a
        page, the change is noted rather than made silently.
      </p>

      <h2>Advertising and independence</h2>
      <p>
        This website carries no third-party advertising and no sponsored content. Nothing published here is influenced
        by a commercial relationship with any product or manufacturer.
      </p>
    </LegalPage>
  );
}
