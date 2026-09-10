import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Aura Cure Clinic website, including how appointment requests are handled and the limits of information published here.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      href="/terms"
      lastUpdated="2026-08-01"
      intro={`These terms apply to your use of the ${siteConfig.brand} website.`}
    >
      <h2>Purpose of this website</h2>
      <p>
        This website provides information about {siteConfig.brand}, its location and services, and general health
        information for patient awareness. It is not a platform for diagnosis, prescription or emergency care.
      </p>

      <h2>Appointment requests</h2>
      <p>
        Submitting the appointment form is a request, not a confirmed booking. An appointment is confirmed only when
        clinic staff contact you and agree a time. The clinic may be unable to accommodate every requested slot.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        Information is published in good faith and reviewed for accuracy, but no website can account for every
        individual situation. Content may be updated or corrected at any time.
      </p>

      <h2>External links</h2>
      <p>
        Where this website links to external services such as Google Maps or WhatsApp, those services are governed by
        their own terms and privacy practices, over which this clinic has no control.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Text, design and photographs on this website belong to {siteConfig.brand} unless otherwise stated, and may not
        be reproduced without permission.
      </p>

      <h2>Limitation</h2>
      <p>
        To the extent permitted by applicable law, {siteConfig.brand} is not liable for decisions taken solely on the
        basis of general information published on this website without professional consultation.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with jurisdiction in Sikar, Rajasthan.</p>
    </LegalPage>
  );
}
