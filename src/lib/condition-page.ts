import { getConditionBySlug } from "@/data/conditions";
import { getConditionGuide, defaultConsultationSteps } from "@/data/condition-guides";
import { getConditionMedia } from "@/data/condition-media";
import type {
  ConditionContent,
  ConditionImage,
  ConditionType,
  ConsultationStep,
  ContributingFactor,
  ExperienceCard,
  SymptomExplanation,
} from "@/lib/types";

/**
 * A single, fully-resolved object describing everything a condition detail
 * page renders. Merges three sources — clinical content (conditions.ts),
 * page presentation (condition-guides.ts) and photography
 * (condition-media.ts) — and applies fallbacks so any condition renders a
 * complete page even with no guide or media entry of its own.
 */
export interface ConditionPageData {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  heroSummary: string;
  heroTags: string[];
  icon?: string;
  heroImage?: ConditionImage;
  experienceImage?: ConditionImage;
  experienceCards: ExperienceCard[];
  symptomExplanations: SymptomExplanation[];
  contributingFactors: ContributingFactor[];
  types: ConditionType[];
  consultationSteps: ConsultationStep[];
  overview: string;
  symptoms: string[];
  whenToSeekEvaluation: string[];
  consultationApproach: string;
  whatToExpect: string;
  faqs: ConditionContent["faqs"];
  relatedSlugs: string[];
  metaDescription: string;
  lastUpdated: string;
}

/**
 * Where a condition has no curated experience cards, derive scannable ones
 * from its clinical symptom list so the scan strip is never empty.
 */
function deriveExperienceCards(condition: ConditionContent): ExperienceCard[] {
  return condition.symptoms.slice(0, 4).map((symptom) => {
    const [head, ...rest] = symptom.split(/,|—|\(/);
    return {
      icon: "pain",
      label: head.trim(),
      detail: rest.join(" ").replace(/\)/g, "").trim() || symptom,
    };
  });
}

export function getConditionPageData(slug: string): ConditionPageData | undefined {
  const condition = getConditionBySlug(slug);
  if (!condition) return undefined;

  const guide = getConditionGuide(slug);
  const media = getConditionMedia(slug);

  return {
    slug: condition.slug,
    name: condition.name,
    eyebrow: guide.eyebrow ?? "Condition guide",
    shortDescription: condition.shortDescription,
    heroSummary: guide.heroSummary ?? condition.shortDescription,
    heroTags: guide.heroTags ?? [],
    icon: guide.icon,
    heroImage: media.hero,
    experienceImage: media.experience,
    experienceCards: guide.experienceCards ?? deriveExperienceCards(condition),
    symptomExplanations: guide.symptomExplanations ?? [],
    contributingFactors: guide.contributingFactors ?? [],
    types: guide.types ?? [],
    consultationSteps: guide.consultationSteps ?? defaultConsultationSteps,
    overview: condition.overview,
    symptoms: condition.symptoms,
    whenToSeekEvaluation: condition.whenToSeekEvaluation,
    consultationApproach: condition.consultationApproach,
    whatToExpect: condition.whatToExpect,
    faqs: condition.faqs,
    relatedSlugs: condition.relatedSlugs,
    metaDescription: condition.metaDescription,
    lastUpdated: condition.lastUpdated,
  };
}
