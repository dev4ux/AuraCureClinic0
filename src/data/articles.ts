import type { ArticleContent } from "@/lib/types";

/**
 * Topic-cluster architecture: each article links to related articles in the
 * same cluster plus the relevant /conditions/ page, building topical depth
 * instead of scattered, disconnected posts.
 */
export const articles: ArticleContent[] = [
  {
    slug: "what-is-migraine",
    title: "What Is Migraine? Understanding the Basics",
    metaDescription:
      "A plain-language guide to what migraine is, how it differs from an ordinary headache, and why patterns matter.",
    cluster: "Migraine",
    publishedDate: "2026-06-01",
    updatedDate: "2026-08-01",
    readingTimeMinutes: 4,
    excerpt:
      "Migraine is more than \"a bad headache.\" Here's what distinguishes it, and why understanding your pattern matters before seeking treatment.",
    body: [
      {
        heading: "A recurring, patterned headache disorder",
        paragraphs: [
          "Migraine is a neurological condition characterised by recurring headache episodes, often — though not always — on one side of the head, and frequently described as throbbing or pulsating.",
          "What sets migraine apart from an occasional tension headache is the pattern: recurring episodes, accompanying symptoms like nausea or light sensitivity, and a tendency to disrupt daily activity.",
        ],
      },
      {
        heading: "Why patterns matter more than a single episode",
        paragraphs: [
          "A single bad headache rarely tells the full story. What matters clinically is the pattern over time — frequency, duration, triggers and how episodes evolve. This is why a doctor will usually ask about your headache history in detail rather than focusing only on today's symptom.",
          "Keeping a simple headache diary — noting date, duration, possible triggers and severity — can be genuinely useful information to bring to a consultation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is migraine the same as a regular headache?",
        answer:
          "No. While both involve head pain, migraine typically involves a distinct pattern of recurring episodes with associated symptoms such as nausea or light sensitivity, which ordinary tension headaches usually do not share.",
      },
    ],
    relatedConditionSlugs: ["migraine"],
    relatedArticleSlugs: ["migraine-triggers-and-patterns", "when-to-see-a-doctor-for-migraine"],
  },
  {
    slug: "migraine-triggers-and-patterns",
    title: "Common Migraine Triggers and How to Track Them",
    metaDescription:
      "Explore commonly reported migraine triggers and a simple approach to tracking your own patterns before your consultation.",
    cluster: "Migraine",
    publishedDate: "2026-06-08",
    updatedDate: "2026-08-01",
    readingTimeMinutes: 5,
    excerpt:
      "Triggers vary widely between individuals. Learning to recognise your own pattern is one of the most useful things you can do before a consultation.",
    body: [
      {
        heading: "Commonly reported triggers",
        paragraphs: [
          "Patients commonly report triggers such as disrupted sleep, skipped meals, dehydration, certain foods, strong smells, bright or flickering light, hormonal changes and stress. Not every trigger applies to every person.",
        ],
      },
      {
        heading: "A simple way to track your pattern",
        paragraphs: [
          "Note the date and time of each episode, what you ate or did in the hours before, sleep quality the night before, and any stressors. Over a few weeks, patterns often become clearer — and this record is genuinely useful to bring to your consultation.",
        ],
      },
    ],
    faqs: [],
    relatedConditionSlugs: ["migraine"],
    relatedArticleSlugs: ["what-is-migraine", "homeopathy-consultation-for-migraine"],
  },
  {
    slug: "when-to-see-a-doctor-for-migraine",
    title: "Migraine: When Professional Evaluation Is Needed",
    metaDescription:
      "Warning signs with headaches that warrant prompt medical evaluation, and when a routine consultation is appropriate.",
    cluster: "Migraine",
    publishedDate: "2026-06-15",
    updatedDate: "2026-08-01",
    readingTimeMinutes: 3,
    excerpt:
      "Most recurring headaches are not an emergency, but certain warning signs should prompt immediate medical attention.",
    body: [
      {
        heading: "Seek prompt medical evaluation if you experience",
        paragraphs: [
          "A sudden, severe headache unlike any you've had before; a headache with fever, stiff neck or confusion; a headache following a head injury; or new neurological symptoms such as weakness or vision loss. These warrant prompt medical evaluation, not a routine appointment.",
        ],
      },
      {
        heading: "When a routine consultation is appropriate",
        paragraphs: [
          "If you have a known, recurring headache pattern without the warning signs above and are looking to explore a homeopathic approach to managing it, a routine consultation is the appropriate next step.",
        ],
      },
    ],
    faqs: [],
    relatedConditionSlugs: ["migraine"],
    relatedArticleSlugs: ["what-is-migraine", "homeopathy-consultation-for-migraine"],
  },
  {
    slug: "homeopathy-consultation-for-migraine",
    title: "What to Expect From a Homeopathic Migraine Consultation",
    metaDescription:
      "A walkthrough of what happens during and after a homeopathic consultation for recurring migraine at Aura Cure Clinic.",
    cluster: "Migraine",
    publishedDate: "2026-06-22",
    updatedDate: "2026-08-01",
    readingTimeMinutes: 4,
    excerpt:
      "Considering a homeopathic consultation for migraine? Here is a realistic, step-by-step look at the process.",
    body: [
      {
        heading: "Before your visit",
        paragraphs: [
          "Bring any headache diary notes, existing prescriptions and past test reports. This helps the doctor build a complete picture from the first visit.",
        ],
      },
      {
        heading: "During the consultation",
        paragraphs: [
          "Expect detailed questions about your headache pattern, general health, sleep, stress and lifestyle. This is standard homeopathic case-taking, not a quick symptom checklist.",
        ],
      },
      {
        heading: "After the consultation",
        paragraphs: [
          "The doctor will discuss a realistic follow-up plan for monitoring your response over subsequent visits. We do not promise guaranteed outcomes — response varies by individual and is reviewed and adjusted over time.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will I need multiple visits?",
        answer:
          "Chronic, recurring conditions like migraine are typically monitored over multiple follow-up visits rather than resolved in a single appointment.",
      },
    ],
    relatedConditionSlugs: ["migraine"],
    relatedArticleSlugs: ["when-to-see-a-doctor-for-migraine", "migraine-triggers-and-patterns"],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
