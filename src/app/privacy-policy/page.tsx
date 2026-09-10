import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aura Cure Clinic collects, uses and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      href="/privacy-policy"
      lastUpdated="2026-08-01"
      intro="This policy explains what information this website collects, why, and what happens to it."
    >
      <h2>What we collect</h2>
      <p>
        When you submit an appointment request through this website, we collect only the information you enter: your
        name, mobile number, and optionally a preferred time and a short description of your reason for visiting. We do
        not ask for detailed medical history, identification documents or payment details through this website.
      </p>

      <h2>Why we collect it</h2>
      <p>
        The information is used for one purpose: to contact you about the appointment you requested. We do not use it
        for marketing, do not sell it, and do not share it with third parties for advertising.
      </p>

      <h2>How it is stored</h2>
      <p>
        Appointment requests are transmitted over an encrypted connection and handled by clinic staff for scheduling
        purposes. Once your appointment is dealt with, request data is retained only as long as reasonably needed for
        clinic record-keeping.
      </p>

      <h2>Medical records</h2>
      <p>
        Clinical records created during an in-person consultation are separate from this website and are handled under
        the confidentiality obligations that apply to medical practice. Nothing you discuss in consultation is
        published on this website.
      </p>

      <h2>Analytics</h2>
      <p>
        If website analytics is enabled, we measure aggregate usage — which pages are visited and which buttons are
        clicked — with IP anonymisation. We do not send the contents of form fields to analytics, and we do not use
        analytics to identify individual patients.
      </p>

      <h2>Your choices</h2>
      <p>
        You can contact the clinic at any time to ask what appointment-request information is held about you, or to
        request its deletion. Reach us at {siteConfig.contact.phoneDisplay} or {siteConfig.contact.email}.
      </p>

      <h2>Third-party services</h2>
      <p>
        This website embeds a Google Maps frame on location pages so you can find the clinic. Interacting with that map
        is subject to Google&rsquo;s own privacy terms. Clicking a WhatsApp link opens WhatsApp, which is likewise
        governed by its own terms.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the revised version will be posted here with an updated date. Material changes will be
        described rather than made silently.
      </p>
    </LegalPage>
  );
}
