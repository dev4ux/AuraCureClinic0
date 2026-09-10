import type { TreatmentContent } from "@/lib/types";

/**
 * These describe the clinic's consultation methodology, not named "products"
 * or guaranteed protocols — homeopathic treatment is individualised, so we
 * describe the approach rather than promising specific outcomes.
 */
export const treatments: TreatmentContent[] = [
  {
    slug: "case-consultation",
    name: "Detailed Case Consultation",
    shortDescription: "An unhurried first visit to understand your complete health picture.",
    description:
      "Every treatment plan begins with a thorough conversation — your current concern, its history, your general health, lifestyle and any past treatment. This case-taking is the foundation of individualised homeopathic care.",
    icon: "consultation",
  },
  {
    slug: "individualised-treatment",
    name: "Individualised Treatment Planning",
    shortDescription: "An approach considered for your specific case, not a fixed protocol.",
    description:
      "Homeopathy treats the individual, not just a diagnosis label. Two patients with the same condition may be considered differently based on their overall constitution and how the condition presents in them.",
    icon: "remedy",
  },
  {
    slug: "chronic-condition-management",
    name: "Chronic Condition Management",
    shortDescription: "Ongoing, monitored care for long-standing or recurring conditions.",
    description:
      "For chronic concerns, treatment is usually approached as a monitored process over time rather than a single visit — with the doctor tracking response and adjusting the plan at each follow-up.",
    icon: "chronic",
  },
  {
    slug: "follow-up-monitoring",
    name: "Follow-up & Monitoring",
    shortDescription: "Structured follow-up visits to track progress and adjust care.",
    description:
      "Follow-up consultations are used to review how you are responding, address any new developments, and adjust the treatment approach as needed — an essential part of responsible homeopathic care.",
    icon: "followup",
  },
];
