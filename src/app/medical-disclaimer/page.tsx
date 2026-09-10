import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important information about the limits of health content published on the Aura Cure Clinic website.",
  alternates: { canonical: "/medical-disclaimer" },
};

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      href="/medical-disclaimer"
      lastUpdated="2026-08-01"
      intro="Please read this before acting on anything you read on this website."
    >
      <h2>This website is not medical advice</h2>
      <p>
        Content published here — including condition pages and health library articles — is general information written
        for patient awareness. It is not a diagnosis, not a prescription, and not advice about your particular
        situation. Only a qualified healthcare professional who has assessed you personally can advise on your case.
      </p>

      <h2>In an emergency</h2>
      <p>
        Do not use this website in a medical emergency. If you experience chest pain, breathing difficulty, severe
        bleeding, sudden weakness, loss of consciousness, or any symptom you believe is serious, go to the nearest
        hospital or call emergency services immediately.
      </p>

      <h2>No guaranteed outcomes</h2>
      <p>
        Aura Cure Clinic does not claim guaranteed cures, permanent results, or fixed treatment timelines. Individual
        response to any treatment varies. Any description of a treatment approach on this website describes method, not
        promised outcome.
      </p>

      <h2>Do not stop prescribed treatment</h2>
      <p>
        Never discontinue or alter medication prescribed to you by another doctor based on something you read here.
        Discuss any proposed change with the doctor who prescribed it.
      </p>

      <h2>Patient experiences are individual</h2>
      <p>
        Any review or patient experience published on this website reflects that individual&rsquo;s personal
        experience. It is not evidence of what will happen for anyone else and is not presented as a clinical claim.
      </p>

      <h2>Accuracy and updates</h2>
      <p>
        Content is reviewed for accuracy and dated so you can see how current it is. Medical understanding changes over
        time; if you believe something here is inaccurate or out of date, please tell us so it can be corrected.
      </p>
    </LegalPage>
  );
}
