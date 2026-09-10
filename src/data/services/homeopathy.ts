import type { ServiceContent } from "@/lib/types";

/**
 * Homeopathy services.
 *
 * The clinical conditions treated homeopathically — migraine, allergy, PCOS,
 * joint pain and the rest — live in conditions.ts, since they are concerns
 * rather than services. This file covers what the practice itself offers as
 * a named service.
 */
export const homeopathyServices: ServiceContent[] = [
  {
    slug: "homeopathic-medicine-dispensing",
    name: "Homeopathic Medicine Dispensing",
    category: "homeopathy",
    shortDescription: "In-house dispensing of prescribed homeopathic medicines, with clear instructions for use.",
    metaDescription:
      "Homeopathic medicine dispensing at Aura Cure Clinic, Sikar — in-house pharmacy, how medicines are prescribed and dispensed, storage and usage guidance.",
    alsoKnownAs: ["homeopathic pharmacy", "homeopathy medicine", "dawai"],
    overview:
      "The clinic dispenses the homeopathic medicines it prescribes from its own in-house pharmacy. Medicines are prescribed individually after consultation — they are not sold over the counter for self-diagnosis, and the dispensing is part of the consultation rather than a separate retail service.",
    howItWorks:
      "After the case is taken, the doctor selects a medicine and potency for the individual patient. That is then dispensed in the clinic with written instructions covering dose, timing and duration. Because homeopathic prescribing is individualised, two patients with the same diagnosis may be given entirely different medicines — which is why the same prescription should not be shared or repeated for someone else.",
    suitableFor: [
      "Patients under consultation at the clinic who have been prescribed a medicine",
      "Patients continuing a course prescribed at a previous visit",
      "Patients who want dispensing instructions explained rather than only handed over",
    ],
    notSuitableFor: [
      "Requests for medicine without a consultation — homeopathic prescribing depends on the individual case, not the diagnosis label",
      "Requests to repeat someone else's prescription",
    ],
    benefits: [
      "Medicines dispensed in-house immediately after the consultation",
      "Dose, timing and duration explained rather than left to interpretation",
      "Storage and handling guidance given, which affects how medicines keep",
    ],
    procedure: [
      {
        title: "Consultation and case taking",
        body: "The prescription follows from the full case, not from the diagnosis alone. This is why the consultation comes first.",
      },
      {
        title: "Selection",
        body: "The doctor selects the medicine and potency for your individual case.",
      },
      {
        title: "Dispensing",
        body: "The medicine is prepared and dispensed at the clinic.",
      },
      {
        title: "Instructions",
        body: "You are given written instructions for dose, timing, duration and what to avoid alongside.",
      },
      {
        title: "Review",
        body: "A follow-up point is set so response can be assessed and the prescription adjusted.",
      },
    ],
    precautions: [
      "Take the medicine exactly as instructed — timing relative to food and other substances is part of the instruction",
      "Store away from direct sunlight, heat and strong-smelling substances",
      "Do not share your prescription; homeopathic medicines are selected for the individual, not the diagnosis",
      "Tell the doctor about all other medication you take, including allopathic prescriptions and supplements",
      "Do not stop prescribed allopathic medication without discussing it with the doctor who prescribed it",
      "Return for review rather than continuing a course indefinitely on your own",
    ],
    consultationApproach:
      "Dispensing follows prescribing, and prescribing follows the case. The clinic does not dispense on request without an assessment.",
    whatToExpect:
      "Medicine dispensed at the end of your consultation with written instructions, and a review point set to assess how you have responded.",
    faqs: [
      {
        question: "Can I buy medicine without a consultation?",
        answer:
          "No. Homeopathic prescribing is individualised — the medicine depends on the whole case, not on the name of the condition. Dispensing without assessment would not be prescribing at all.",
      },
      {
        question: "Can I take homeopathic medicine alongside my allopathic prescription?",
        answer:
          "Tell the doctor everything you take and they will advise. Do not stop any prescribed allopathic medication on your own — that decision belongs with the doctor who prescribed it.",
      },
      {
        question: "How should I store the medicines?",
        answer:
          "Away from direct sunlight, heat and strong-smelling substances such as camphor and perfumes. Specific guidance is given when the medicine is dispensed.",
      },
      {
        question: "My relative has the same problem — can they take my medicine?",
        answer:
          "No. Two people with the same diagnosis are frequently given different medicines, because the prescription follows the individual case. They need their own consultation.",
      },
    ],
    searchTerms: [
      "homeopathic medicine",
      "homeopathy pharmacy",
      "homeopathic dispensing",
      "homeopathy dawai",
      "homeopathic medicine sikar",
    ],
    lastUpdated: "2026-09-02",
  },
];
