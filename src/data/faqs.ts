import type { FaqItem } from "@/lib/types";

/**
 * General pre-visit questions, shown on the homepage and emitted as FAQPage
 * structured data. Keep answers factual and free of guarantees — these are
 * indexed by search engines and read as statements by the clinic.
 *
 * To change the FAQ, edit this array. Nothing in the UI is hard-coded, so
 * questions can be added, reordered or removed here alone.
 */
export const generalFaqs: FaqItem[] = [
  {
    question: "What happens in the first consultation?",
    answer:
      "The doctor takes time to understand your main concern, its history, your current health, and any relevant lifestyle factors. The consultation is focused on understanding your situation properly before discussing the next steps.",
  },
  {
    question: "How should I prepare for my consultation?",
    answer:
      "Bring any previous reports, prescriptions, or relevant medical information you have. It is also helpful to note your main symptoms, concerns, and questions beforehand.",
  },
  {
    question: "Can I continue my current medication?",
    answer:
      "Medication decisions should be discussed with the doctor based on your individual situation. Do not stop or change prescribed medication without appropriate medical advice.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Choose your preferred consultation option, select an available time slot, and complete the booking details. You will receive confirmation after the appointment is scheduled.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, online consultations can be booked where available. The consultation format and availability will be shown during the booking process.",
  },
];
