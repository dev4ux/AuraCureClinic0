import type { ConditionGuide, ConsultationStep } from "@/lib/types";

/**
 * Presentation layer for condition detail pages — the scannable cards, visual
 * groupings and hero copy that sit on top of the clinical content in
 * conditions.ts. Kept separate so medical content and page presentation can be
 * edited independently, and so a condition without a guide entry still renders
 * a valid page from its ConditionContent alone.
 *
 * Language rule: contributing factors are always framed as "may" / "commonly
 * associated with" — never as a definitive cause for an individual patient.
 */

/** Shared journey. A condition can override this via its own guide entry. */
export const defaultConsultationSteps: ConsultationStep[] = [
  {
    title: "Understand your symptoms",
    body: "The doctor discusses what you're experiencing, how long it has been going on, and what makes it better or worse.",
  },
  {
    title: "Understand your individual pattern",
    body: "Your general health, medical history, daily routine and any previous treatment are considered alongside the presenting concern.",
  },
  {
    title: "Discuss an appropriate care plan",
    body: "The doctor explains what the next steps could look like for your specific case, including any tests or referral where appropriate.",
  },
  {
    title: "Follow-up and adjustment",
    body: "Progress is reviewed at follow-up visits, and the approach is adjusted when that is clinically appropriate.",
  },
];

export const conditionGuides: Record<string, ConditionGuide> = {
  "back-pain": {
    heroSummary:
      "Understand the symptoms commonly associated with back pain, what may contribute to it, and how your consultation may be approached.",
    heroTags: ["Lower back", "Stiffness", "Movement-related discomfort"],
    icon: "back",
    experienceCards: [
      { icon: "pain", label: "Lower back discomfort", detail: "A dull ache or sharper pain across the lower back." },
      { icon: "clock", label: "Morning stiffness", detail: "Noticeable on waking, often easing as you move." },
      { icon: "sitting", label: "Pain after sitting", detail: "Builds up during long periods at a desk or in a vehicle." },
      { icon: "movement", label: "Movement-related pain", detail: "Bending, lifting or twisting makes it more noticeable." },
      { icon: "radiating", label: "Discomfort toward the leg", detail: "Some people notice it extending to the hip or leg." },
    ],
    symptomExplanations: [
      { title: "Pain", body: "Dull, aching or sharper discomfort in the lower or upper back, varying through the day." },
      { title: "Stiffness", body: "Often most noticeable after sitting for long periods, or in the first hour after waking." },
      { title: "Movement-related discomfort", body: "Certain positions or movements can make symptoms more pronounced." },
      { title: "Radiating discomfort", body: "Some people notice discomfort extending toward the hip or down the leg." },
    ],
    contributingFactors: [
      { icon: "posture", title: "Posture", body: "Sustained positions that load the spine unevenly." },
      { icon: "sitting", title: "Prolonged sitting", body: "Long desk hours or travel without regular movement breaks." },
      { icon: "strain", title: "Muscle strain", body: "Lifting, sudden movement or unaccustomed physical effort." },
      { icon: "repetitive", title: "Repetitive movement", body: "Work or activity that repeats the same loading pattern." },
      { icon: "injury", title: "Previous injury", body: "An earlier fall or strain that has not fully settled." },
      { icon: "spine", title: "Spinal or joint changes", body: "Underlying structural changes identified on assessment." },
    ],
    types: [
      { name: "Acute", body: "Recent onset, often following a specific strain or movement." },
      { name: "Recurrent", body: "Settles between episodes but returns periodically." },
      { name: "Chronic", body: "Persisting over a longer period and needing sustained review." },
      { name: "Movement-related", body: "Closely tied to particular postures, positions or activities." },
    ],
  },

  "slip-disc": {
    heroSummary:
      "Understand what a slipped disc can feel like, what may contribute to it, and when it needs prompt medical assessment.",
    heroTags: ["Lower back", "Radiating leg pain", "Numbness"],
    icon: "spine",
    experienceCards: [
      { icon: "pain", label: "Lower back pain", detail: "Often centred low in the back, sometimes to one side." },
      { icon: "radiating", label: "Pain down the leg", detail: "Discomfort travelling from the back into the leg or foot." },
      { icon: "movement", label: "Worse on sitting or bending", detail: "Sitting, bending or coughing can intensify it." },
      { icon: "fatigue", label: "Numbness or tingling", detail: "Pins and needles in the leg, calf or foot." },
    ],
    symptomExplanations: [
      { title: "Back pain", body: "Discomfort in the lower back, which may be constant or come in episodes." },
      { title: "Radiating pain", body: "Pain following a path from the back into the buttock, thigh or lower leg." },
      { title: "Numbness or tingling", body: "Altered sensation in the leg or foot, sometimes in a defined band." },
      { title: "Weakness", body: "Reduced strength in the affected limb, which should always be assessed." },
    ],
    contributingFactors: [
      { icon: "strain", title: "Lifting strain", body: "Heavy or awkward lifting that loads the spine suddenly." },
      { icon: "sitting", title: "Prolonged sitting", body: "Extended sitting increases pressure through the lower spine." },
      { icon: "injury", title: "Previous injury", body: "An earlier back injury or fall." },
      { icon: "repetitive", title: "Repetitive bending", body: "Work involving frequent bending or twisting." },
      { icon: "spine", title: "Age-related disc changes", body: "Natural changes in disc structure over time." },
    ],
  },

  "joint-arthritis": {
    heroSummary:
      "Understand joint pain and stiffness, what may contribute to it, and how the doctor approaches an individual assessment.",
    heroTags: ["Joint pain", "Morning stiffness", "Swelling"],
    icon: "joint",
    experienceCards: [
      { icon: "pain", label: "Joint pain", detail: "Aching or sharper pain in one or more joints." },
      { icon: "stiffness", label: "Morning stiffness", detail: "Joints feel tight on waking or after resting." },
      { icon: "swelling", label: "Swelling", detail: "Visible puffiness or warmth around a joint." },
      { icon: "movement", label: "Reduced movement", detail: "Difficulty with a full, comfortable range of motion." },
      { icon: "weather", label: "Weather sensitivity", detail: "Some people notice changes with cold or damp weather." },
    ],
    symptomExplanations: [
      { title: "Pain", body: "Discomfort in one or several joints, which may vary with activity and rest." },
      { title: "Stiffness", body: "Commonly worse in the morning or after a period of inactivity." },
      { title: "Swelling", body: "Some joints may appear swollen, warm or tender to touch." },
      { title: "Reduced function", body: "Everyday tasks such as gripping, walking or climbing stairs feel harder." },
    ],
    contributingFactors: [
      { icon: "clock", title: "Age-related change", body: "Cumulative wear affecting joint surfaces over time." },
      { icon: "repetitive", title: "Repetitive loading", body: "Work or activity that repeatedly stresses the same joints." },
      { icon: "injury", title: "Previous joint injury", body: "An earlier injury to the affected joint." },
      { icon: "hormone", title: "Inflammatory patterns", body: "Some arthritis types involve an inflammatory process." },
      { icon: "weather", title: "Weather sensitivity", body: "Reported by many patients, though it varies individually." },
    ],
    types: [
      { name: "Wear-related", body: "Associated with gradual change in joint surfaces over time." },
      { name: "Inflammatory", body: "Involving an inflammatory process, often with swelling and morning stiffness." },
      { name: "Post-injury", body: "Following an earlier injury to the joint." },
    ],
  },

  migraine: {
    heroSummary:
      "Understand what migraine episodes can involve, common triggers, and how a consultation approaches your individual pattern.",
    heroTags: ["One-sided pain", "Light sensitivity", "Nausea"],
    icon: "head",
    experienceCards: [
      { icon: "head", label: "Throbbing head pain", detail: "Often one-sided and pulsating in character." },
      { icon: "radiating", label: "Light and sound sensitivity", detail: "Bright light or noise makes an episode worse." },
      { icon: "stomach", label: "Nausea", detail: "Feeling sick, sometimes with vomiting, during an episode." },
      { icon: "clock", label: "Episodes lasting hours to days", detail: "Duration varies widely between individuals." },
    ],
    symptomExplanations: [
      { title: "Head pain", body: "Throbbing or pulsating pain, commonly on one side, that can build over hours." },
      { title: "Sensory sensitivity", body: "Light, sound or strong smells often feel harder to tolerate during an episode." },
      { title: "Nausea", body: "Many people experience nausea, and some vomiting, alongside the pain." },
      { title: "Visual disturbance", body: "Some people notice visual changes, or aura, before or during an episode." },
    ],
    contributingFactors: [
      { icon: "stress", title: "Stress", body: "Periods of pressure, or the let-down afterwards." },
      { icon: "sleep", title: "Sleep changes", body: "Too little sleep, or a disrupted routine." },
      { icon: "diet", title: "Dietary triggers", body: "Certain foods, caffeine changes or missed meals." },
      { icon: "hormone", title: "Hormonal cycles", body: "Some people notice a link to their monthly cycle." },
      { icon: "radiating", title: "Sensory triggers", body: "Bright light, screen glare or strong smells." },
    ],
    types: [
      { name: "With aura", body: "Preceded by visual or sensory changes before the pain begins." },
      { name: "Without aura", body: "Pain begins without any preceding sensory warning." },
      { name: "Frequent or chronic", body: "Episodes occurring often enough to disrupt routine regularly." },
    ],
  },

  allergy: {
    heroSummary:
      "Understand allergic symptoms affecting the skin, nose and airways, common triggers, and how your case is assessed.",
    heroTags: ["Sneezing", "Itchy eyes", "Skin reactions"],
    icon: "wellness",
    experienceCards: [
      { icon: "breath", label: "Sneezing and congestion", detail: "A runny or blocked nose that keeps returning." },
      { icon: "itch", label: "Itchy, watery eyes", detail: "Irritation often alongside nasal symptoms." },
      { icon: "skin", label: "Skin reactions", detail: "Rashes, hives or itching after exposure." },
      { icon: "weather", label: "Seasonal pattern", detail: "Symptoms tied to a season, dust or a specific place." },
    ],
    symptomExplanations: [
      { title: "Nasal symptoms", body: "Sneezing, congestion or a runny nose, often worse at certain times of day." },
      { title: "Eye irritation", body: "Itching, watering or redness, commonly alongside nasal symptoms." },
      { title: "Skin reactions", body: "Hives, rashes or itching that can follow contact with a trigger." },
      { title: "Airway discomfort", body: "Mild breathing discomfort in some cases, which should be assessed." },
    ],
    contributingFactors: [
      { icon: "weather", title: "Seasonal change", body: "Pollen or weather transitions at particular times of year." },
      { icon: "wellness", title: "Dust and environment", body: "House dust, pets or workplace exposure." },
      { icon: "diet", title: "Certain foods", body: "Specific foods that appear linked to reactions." },
      { icon: "stress", title: "General health status", body: "Symptoms can feel worse during periods of run-down health." },
    ],
    types: [
      { name: "Seasonal", body: "Appearing at a predictable time of year." },
      { name: "Year-round", body: "Persisting across seasons, often linked to indoor triggers." },
      { name: "Contact-related", body: "Following direct contact with a specific substance." },
    ],
  },

  "skin-problems": {
    heroSummary:
      "Understand recurring skin concerns, what may make them flare, and how the doctor approaches an individual assessment.",
    heroTags: ["Itching", "Rashes", "Recurring breakouts"],
    icon: "skin",
    experienceCards: [
      { icon: "itch", label: "Persistent itching", detail: "Ongoing irritation that disturbs sleep or focus." },
      { icon: "skin", label: "Recurring breakouts", detail: "Spots or rashes that clear and return." },
      { icon: "peel", label: "Dryness or scaling", detail: "Rough, flaking or thickened patches of skin." },
      { icon: "weather", label: "Flares with weather or stress", detail: "Noticeably worse at certain times." },
    ],
    symptomExplanations: [
      { title: "Itching", body: "Persistent irritation, which can be the most disruptive part of a skin condition." },
      { title: "Redness and rash", body: "Areas of inflammation that may come and go in cycles." },
      { title: "Dryness or scaling", body: "Patches of rough, flaking or thickened skin." },
      { title: "Flare pattern", body: "Many people notice symptoms worsen with stress, weather or specific foods." },
    ],
    contributingFactors: [
      { icon: "weather", title: "Weather and season", body: "Heat, cold or humidity affecting the skin barrier." },
      { icon: "stress", title: "Stress", body: "Periods of pressure commonly coincide with flares." },
      { icon: "diet", title: "Dietary patterns", body: "Foods that appear linked to flares in your own history." },
      { icon: "wellness", title: "Contact irritants", body: "Soaps, cosmetics or occupational exposure." },
      { icon: "hormone", title: "Hormonal change", body: "Cyclical or life-stage hormonal shifts." },
    ],
  },

  "hair-fall": {
    heroSummary:
      "Understand patterns of hair thinning and loss, what may contribute, and how the doctor assesses your individual case.",
    heroTags: ["Thinning", "Shedding", "Scalp concerns"],
    icon: "hair",
    experienceCards: [
      { icon: "hair", label: "Increased shedding", detail: "More strands on the pillow, comb or in the shower." },
      { icon: "follicle", label: "Visible thinning", detail: "Reduced density at the crown or hairline." },
      { icon: "swelling", label: "Patchy loss", detail: "Defined areas of loss rather than general thinning." },
      { icon: "itch", label: "Scalp symptoms", detail: "Itching, flaking or tenderness alongside hair fall." },
    ],
    symptomExplanations: [
      { title: "Shedding", body: "Noticeably more hair coming away during washing or combing than usual." },
      { title: "Thinning", body: "Gradual reduction in density, often first noticed at the crown or parting." },
      { title: "Patchy loss", body: "Localised areas of loss, which warrant a closer look at consultation." },
      { title: "Scalp condition", body: "Itching, flaking or soreness that may accompany the hair fall." },
    ],
    contributingFactors: [
      { icon: "stress", title: "Stress", body: "Periods of significant stress or illness." },
      { icon: "diet", title: "Nutritional patterns", body: "Dietary gaps that may affect hair growth cycles." },
      { icon: "hormone", title: "Hormonal change", body: "Thyroid, post-pregnancy or other hormonal shifts." },
      { icon: "skin", title: "Scalp conditions", body: "Underlying scalp inflammation or flaking." },
      { icon: "wellness", title: "Family pattern", body: "An inherited tendency toward patterned thinning." },
    ],
    types: [
      { name: "Patterned", body: "Gradual thinning following a recognisable distribution." },
      { name: "Diffuse", body: "General shedding across the scalp, often after a trigger." },
      { name: "Patchy", body: "Well-defined areas of loss requiring closer assessment." },
    ],
  },

  "digestive-health": {
    heroSummary:
      "Understand recurring digestive symptoms, what may contribute to them, and how your consultation may be approached.",
    heroTags: ["Acidity", "Bloating", "Irregular bowels"],
    icon: "stomach",
    experienceCards: [
      { icon: "stomach", label: "Acidity or burning", detail: "A burning sensation after meals or at night." },
      { icon: "swelling", label: "Bloating", detail: "Heaviness or fullness following meals." },
      { icon: "repetitive", label: "Irregular bowels", detail: "A pattern that keeps shifting week to week." },
      { icon: "diet", label: "Food-linked discomfort", detail: "Symptoms that follow particular foods." },
    ],
    symptomExplanations: [
      { title: "Acidity", body: "Burning discomfort in the upper abdomen or chest, often linked to meals." },
      { title: "Bloating", body: "A sense of fullness, distension or heaviness after eating." },
      { title: "Bowel changes", body: "Irregular patterns, which the doctor will review against your usual baseline." },
      { title: "Meal-related discomfort", body: "Symptoms following specific foods, meal timing or portion size." },
    ],
    contributingFactors: [
      { icon: "diet", title: "Diet and meal timing", body: "Irregular meals, or specific trigger foods." },
      { icon: "stress", title: "Stress", body: "The gut is closely tied to periods of pressure." },
      { icon: "sleep", title: "Routine and sleep", body: "Disrupted daily rhythm affecting digestion." },
      { icon: "clock", title: "Eating patterns", body: "Eating late, quickly or in large single portions." },
    ],
  },

  "asthma-breathing": {
    heroSummary:
      "Understand recurring breathing symptoms, common triggers, and when symptoms need prompt medical assessment.",
    heroTags: ["Wheezing", "Breathlessness", "Night cough"],
    icon: "lungs",
    experienceCards: [
      { icon: "breath", label: "Breathlessness", detail: "Feeling short of breath with activity or at rest." },
      { icon: "lungs", label: "Wheezing", detail: "A whistling sound, particularly on breathing out." },
      { icon: "clock", label: "Night or early-morning cough", detail: "A cough that reliably worsens at night." },
      { icon: "weather", label: "Trigger-linked episodes", detail: "Dust, cold air or exertion set symptoms off." },
    ],
    symptomExplanations: [
      { title: "Breathlessness", body: "Difficulty getting a full breath, which may come and go in episodes." },
      { title: "Wheezing", body: "A whistling sound while breathing, commonly more noticeable on exhaling." },
      { title: "Chest tightness", body: "A banded or constricted feeling across the chest." },
      { title: "Persistent cough", body: "Often dry, and characteristically worse at night or on waking." },
    ],
    contributingFactors: [
      { icon: "wellness", title: "Dust and allergens", body: "House dust, pollen or pet exposure." },
      { icon: "weather", title: "Cold air and weather", body: "Seasonal transitions or cold exposure." },
      { icon: "movement", title: "Exertion", body: "Physical activity triggering symptoms in some people." },
      { icon: "breath", title: "Respiratory infections", body: "Symptoms flaring during or after an infection." },
      { icon: "stress", title: "Stress", body: "Periods of pressure can make episodes feel harder." },
    ],
  },

  "womens-health": {
    heroSummary:
      "Understand common and recurring women's health concerns, and how a private, unhurried consultation is approached.",
    heroTags: ["Cycle changes", "Cyclical discomfort", "Confidential"],
    icon: "wellness",
    experienceCards: [
      { icon: "repetitive", label: "Irregular cycles", detail: "Timing that varies noticeably month to month." },
      { icon: "pain", label: "Painful periods", detail: "Cramping that interferes with daily routine." },
      { icon: "hormone", label: "Cyclical symptoms", detail: "Physical or mood changes tied to your cycle." },
      { icon: "fatigue", label: "Persistent tiredness", detail: "Low energy alongside other cyclical symptoms." },
    ],
    symptomExplanations: [
      { title: "Cycle irregularity", body: "Changes in timing, duration or flow compared with your usual pattern." },
      { title: "Cyclical discomfort", body: "Pain or physical symptoms that follow a recognisable monthly rhythm." },
      { title: "Hormonal-pattern symptoms", body: "Changes in skin, hair, weight or mood that track with your cycle." },
      { title: "General wellbeing", body: "Fatigue or low energy that often accompanies other cyclical concerns." },
    ],
    contributingFactors: [
      { icon: "hormone", title: "Hormonal patterns", body: "Natural cyclical and life-stage hormonal change." },
      { icon: "stress", title: "Stress", body: "Sustained pressure can affect cycle regularity." },
      { icon: "sleep", title: "Sleep and routine", body: "Irregular sleep or a disrupted daily rhythm." },
      { icon: "diet", title: "Nutrition", body: "Dietary patterns discussed as part of your overall picture." },
    ],
  },

  "kidney-stones": {
    heroSummary:
      "Understand symptoms associated with kidney stones, what may contribute, and when to seek prompt medical assessment.",
    heroTags: ["Flank pain", "Radiating pain", "Urinary symptoms"],
    icon: "kidney",
    experienceCards: [
      { icon: "pain", label: "Pain in the back or side", detail: "Often sharp, below the ribs on one side." },
      { icon: "radiating", label: "Radiating pain", detail: "Travelling toward the lower abdomen or groin." },
      { icon: "droplet", label: "Changes in urine", detail: "Including blood, or discomfort passing urine." },
      { icon: "stomach", label: "Nausea", detail: "Feeling sick alongside episodes of pain." },
    ],
    symptomExplanations: [
      { title: "Flank pain", body: "Sharp pain in the back or side, which can come in intense waves." },
      { title: "Radiating pain", body: "Discomfort moving toward the lower abdomen or groin as a stone shifts." },
      { title: "Urinary changes", body: "Blood in urine, or discomfort and urgency when passing urine." },
      { title: "Nausea", body: "Commonly accompanies more severe episodes of pain." },
    ],
    contributingFactors: [
      { icon: "droplet", title: "Low fluid intake", body: "Reduced hydration concentrating the urine." },
      { icon: "diet", title: "Dietary patterns", body: "Certain dietary factors discussed at consultation." },
      { icon: "weather", title: "Climate and sweating", body: "Hot conditions increasing fluid loss." },
      { icon: "repetitive", title: "Previous stones", body: "A history of stones raises the chance of recurrence." },
      { icon: "wellness", title: "Family history", body: "A family tendency toward stone formation." },
    ],
  },

  piles: {
    heroSummary:
      "Understand symptoms associated with piles, what may contribute, and how a discreet consultation is handled.",
    heroTags: ["Discomfort", "Bleeding", "Discreet care"],
    icon: "discreet",
    experienceCards: [
      { icon: "pain", label: "Discomfort or itching", detail: "Irritation around the anus, often after passing stool." },
      { icon: "droplet", label: "Bleeding", detail: "Bright red bleeding during bowel movements." },
      { icon: "swelling", label: "A lump or swelling", detail: "A palpable swelling near the anus." },
      { icon: "sitting", label: "Worse with sitting", detail: "Prolonged sitting or straining aggravates it." },
    ],
    symptomExplanations: [
      { title: "Discomfort", body: "Irritation, itching or soreness, commonly most noticeable after a bowel movement." },
      { title: "Bleeding", body: "Bright red blood, which should always be assessed rather than assumed to be piles." },
      { title: "Swelling", body: "A lump near the anus that may be tender, particularly when inflamed." },
      { title: "Aggravating patterns", body: "Constipation, straining and prolonged sitting typically make symptoms worse." },
    ],
    contributingFactors: [
      { icon: "stomach", title: "Constipation", body: "Hard stools and straining during bowel movements." },
      { icon: "sitting", title: "Prolonged sitting", body: "Extended periods seated, including long journeys." },
      { icon: "diet", title: "Low-fibre diet", body: "Dietary patterns that contribute to harder stools." },
      { icon: "droplet", title: "Low fluid intake", body: "Insufficient hydration affecting stool consistency." },
      { icon: "hormone", title: "Pregnancy", body: "A commonly reported period for symptoms to appear." },
    ],
  },

  "sexual-private-health": {
    heroSummary:
      "A private, unhurried consultation for sensitive health concerns — discussed confidentially and at your own pace.",
    heroTags: ["Confidential", "Unhurried", "Judgement-free"],
    icon: "privacy",
    experienceCards: [
      { icon: "privacy", label: "Complete confidentiality", detail: "Your consultation stays strictly private." },
      { icon: "listen", label: "At your own pace", detail: "Share only what you're comfortable with, when ready." },
      { icon: "discreet", label: "A routine consultation", detail: "These concerns are common in general practice." },
      { icon: "clock", label: "Unhurried time", detail: "Enough time to discuss things properly." },
    ],
    symptomExplanations: [
      { title: "Private concerns", body: "Matters affecting sexual health or function that you would like assessed." },
      { title: "Sensitive symptoms", body: "Any concern you may feel hesitant raising elsewhere." },
      { title: "General wellbeing", body: "Related concerns such as sleep, stress or energy that often connect." },
    ],
    contributingFactors: [
      { icon: "stress", title: "Stress", body: "Sustained pressure commonly plays a part." },
      { icon: "sleep", title: "Sleep and fatigue", body: "Poor rest affecting general wellbeing." },
      { icon: "wellness", title: "General health", body: "Existing health conditions or medication." },
      { icon: "hormone", title: "Hormonal factors", body: "Considered where relevant to your case." },
    ],
  },
};

export function getConditionGuide(slug: string): ConditionGuide {
  return conditionGuides[slug] ?? {};
}
