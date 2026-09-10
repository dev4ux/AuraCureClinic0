export interface FaqItem {
  question: string;
  answer: string;
}

export interface ConditionContent {
  slug: string;
  name: string;
  shortDescription: string;
  metaDescription: string;
  overview: string;
  symptoms: string[];
  /**
   * Everyday words patients use for this condition, beyond the clinical name.
   * Feeds the condition finder so "acidity" or "pimples" find the right page.
   */
  searchTerms: string[];
  whenToSeekEvaluation: string[];
  consultationApproach: string;
  whatToExpect: string;
  faqs: FaqItem[];
  relatedSlugs: string[];
  medicallyReviewed: boolean;
  lastUpdated: string; // ISO date
}

/**
 * Named icon from the condition icon registry (components/conditions/
 * care-icons.tsx). Kept as a string key rather than a component reference so
 * condition data stays serialisable and free of JSX.
 */
export type CareIconName = string;

/** One card in the "Could this be what you're experiencing?" scan strip. */
export interface ExperienceCard {
  label: string;
  detail: string;
  icon: CareIconName;
}

/** One block in the "What can this feel like?" explanation column. */
export interface SymptomExplanation {
  title: string;
  body: string;
}

/** A common contributing factor — never presented as a definitive cause. */
export interface ContributingFactor {
  title: string;
  body: string;
  icon: CareIconName;
}

/** An optional pattern/type breakdown. Omitted where a condition has none. */
export interface ConditionType {
  name: string;
  body: string;
}

/** One step of the consultation journey timeline. */
export interface ConsultationStep {
  title: string;
  body: string;
}

/**
 * Presentation layer for a condition detail page, kept separate from the
 * clinical content in ConditionContent so the two can be edited independently.
 * Every field is optional — a condition without a guide still renders a valid
 * page from its ConditionContent alone.
 */
export interface ConditionGuide {
  eyebrow?: string;
  /** One concise sentence under the H1. Falls back to shortDescription. */
  heroSummary?: string;
  /** Short chips floated near the hero image, e.g. "Lower back • stiffness". */
  heroTags?: string[];
  experienceCards?: ExperienceCard[];
  symptomExplanations?: SymptomExplanation[];
  contributingFactors?: ContributingFactor[];
  types?: ConditionType[];
  /** Overrides the shared default consultation journey where useful. */
  consultationSteps?: ConsultationStep[];
  /** Fallback icon for figures that have no photograph configured yet. */
  icon?: CareIconName;
}

/**
 * One photographic slot on a condition page. `src` is null until a real
 * photograph has been licensed and added to /public/images — the figure
 * component then renders a branded placeholder instead of a broken image.
 * `brief` documents what the photograph should show so it can be sourced.
 */
export interface ConditionImage {
  src: string | null;
  alt: string;
  /** Art-direction note for whoever sources the photograph. */
  brief: string;
}

export interface ConditionMedia {
  hero?: ConditionImage;
  experience?: ConditionImage;
}

export interface TreatmentContent {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: "consultation" | "remedy" | "chronic" | "followup";
}

/** The four areas of practice the clinic is organised around. */
export type ServiceCategoryId = "hair" | "skin" | "laser-aesthetic" | "homeopathy";

/** One step of a procedure or course of treatment. */
export interface ProcedureStep {
  title: string;
  body: string;
}

/**
 * A named service the clinic offers — distinct from ConditionContent (a
 * medical concern) and TreatmentContent (the clinic's consultation
 * methodology). Each one gets its own page, so the shape carries everything
 * a patient researching that treatment needs: what it is, the mechanism,
 * who it suits, what it can and cannot do, the procedure itself, and the
 * precautions.
 *
 * Every field is written to be honest about uncertainty. `benefits` describes
 * what a treatment is *considered for*, never what it will achieve —
 * individual response varies and no outcome is promised anywhere in this data.
 */
export interface ServiceContent {
  slug: string;
  name: string;
  category: ServiceCategoryId;
  shortDescription: string;
  metaDescription: string;
  /** Other names patients search for — shown on the page and fed to search. */
  alsoKnownAs?: string[];
  /** What it is. */
  overview: string;
  /** The mechanism, in plain language. */
  howItWorks: string;
  /** Who a doctor may consider it for. */
  suitableFor: string[];
  /** Where the doctor would advise against it, or defer. */
  notSuitableFor?: string[];
  /** What it is used to address. Considerations, never guarantees. */
  benefits: string[];
  /** The visit or course of treatment, step by step. */
  procedure: ProcedureStep[];
  /** Aftercare, known risks and what to tell the doctor beforehand. */
  precautions: string[];
  consultationApproach: string;
  whatToExpect: string;
  /** Session counts or timelines, only where one can be stated honestly. */
  clinicalNotes?: string;
  faqs: FaqItem[];
  /** Everyday words/synonyms patients might search, e.g. "ipl" for laser. */
  searchTerms: string[];
  /** Other service slugs worth reading next. */
  relatedSlugs?: string[];

  // --- Presentation. All optional: the page template supplies honest,
  // category-level defaults so every service renders a complete layout
  // without a clinical specific ever being invented to fill a slot. ---

  /** One line under the H1. Positioning, not a clinical claim. */
  tagline?: string;
  /**
   * Four short hero badges. Only state what is verifiably true of this
   * service — "non-surgical" belongs on PRP, not on a hair system fitting.
   * Omit and the template falls back to facts true of every service here.
   */
  highlights?: { label: string; icon: HighlightIcon }[];
  /**
   * The at-a-glance strip: session counts, downtime, when results show.
   * Include a row ONLY where the clinic can state it honestly — a made-up
   * "45–60 mins" is the kind of detail patients plan their day around.
   */
  details?: { label: string; value: string }[];

  lastUpdated: string; // ISO date
}

/** Icon keys the hero badge strip understands. */
export type HighlightIcon =
  | "check"
  | "shield"
  | "clock"
  | "user"
  | "droplet"
  | "leaf";

export interface Testimonial {
  initial: string;
  text: string;
  source: "Google Reviews" | "In-Clinic Feedback";
  rating?: number;
  date?: string;
}

export interface ArticleContent {
  slug: string;
  title: string;
  metaDescription: string;
  cluster: string;
  publishedDate: string;
  updatedDate: string;
  readingTimeMinutes: number;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
  faqs: FaqItem[];
  relatedConditionSlugs: string[];
  relatedArticleSlugs: string[];
}

/**
 * A single patient story for the homepage testimonial carousel.
 *
 * `isPlaceholder` MUST stay true for any content the clinic has not actually
 * received from a patient. The UI renders a visible "sample content" notice
 * whenever a placeholder is on screen, so fabricated copy can never be
 * mistaken for — or quietly ship as — a real review.
 */
/**
 * One run of a patient quote. Splitting the quote into segments lets the
 * design accent a phrase without HTML in the data — and, importantly, makes
 * it explicit which words are being emphasised so a patient's meaning is
 * never distorted by highlighting.
 */
export interface QuoteSegment {
  text: string;
  highlight?: boolean;
}

export interface PatientStory {
  /** The patient's own words, verbatim, split only for visual emphasis. */
  quote: QuoteSegment[];
  patientName: string;
  /** Short context line, e.g. "Sikar". */
  patientContext?: string;
  photo: {
    /** null until a real photograph is added to /public/images. */
    src: string | null;
    alt: string;
    /**
     * CSS object-position for the crop, e.g. "50% 30%". Lets a photo be
     * reframed so faces stay in shot without touching the layout.
     */
    focalPoint?: string;
  };
  isPlaceholder?: boolean;
}
