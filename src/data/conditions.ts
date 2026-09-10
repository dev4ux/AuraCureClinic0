import type { ConditionContent } from "@/lib/types";

/**
 * Only conditions the clinic genuinely treats should appear here. These five
 * are common presenting concerns at general homeopathy practices in India —
 * replace or extend this list to match Aura Cure Clinic's actual scope of
 * practice before launch.
 */
export const conditions: ConditionContent[] = [
  {
    slug: "migraine",
    name: "Migraine",
    shortDescription: "Recurring headaches with sensitivity to light, sound or movement.",
    metaDescription:
      "Understand migraine symptoms, common triggers and how a homeopathic consultation for migraine works at Aura Cure Clinic, Sikar.",
    overview:
      "Migraine is a recurring headache disorder that often presents with throbbing, one-sided pain, and can be accompanied by nausea, light sensitivity or visual disturbances. Episodes vary widely between individuals in frequency, intensity and triggers, which is why a detailed case history is central to any consultation.",
    symptoms: [
      "Throbbing or pulsating head pain, often on one side",
      "Sensitivity to light, sound or strong smells",
      "Nausea or vomiting during an episode",
      "Visual disturbances (aura) before or during pain",
      "Episodes lasting from several hours to a few days",
    ],
    searchTerms: ["headache", "head pain", "sar dard", "half headache", "aura", "nausea"],
    whenToSeekEvaluation: [
      "Sudden, severe headache unlike any experienced before",
      "Headache accompanied by fever, stiff neck, confusion or vision loss",
      "Headache following a head injury",
      "Progressively worsening frequency or intensity",
    ],
    consultationApproach:
      "The consultation begins with a detailed understanding of your headache pattern — frequency, triggers, associated symptoms and how episodes affect daily life — alongside your general health history. This case-taking approach is standard homeopathic practice and helps the doctor consider an individualised treatment direction rather than a one-size-fits-all remedy.",
    whatToExpect:
      "Expect an unhurried first consultation focused on listening. Follow-up visits are used to monitor response and adjust the approach as needed. Homeopathic treatment is typically considered alongside, not as an automatic replacement for, any existing emergency or specialist care a physician has advised.",
    faqs: [
      {
        question: "Can homeopathy help with migraine?",
        answer:
          "Many patients consult homeopathic physicians for recurring migraine as part of their overall care approach. Response varies by individual, and the doctor will discuss a realistic outlook during your consultation based on your specific case — we do not promise guaranteed or permanent results for any patient.",
      },
      {
        question: "How long before I notice any change?",
        answer:
          "This differs from person to person depending on the chronicity and nature of the condition. The doctor will explain a general monitoring timeline for your specific case during the consultation and follow-up visits.",
      },
      {
        question: "Do I need to stop my current medication?",
        answer:
          "Never stop or alter prescribed medication without consulting the doctor who prescribed it. Please bring your current medical history and any reports to your consultation so it can be considered alongside your homeopathic treatment plan.",
      },
    ],
    relatedSlugs: ["digestive-health"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-01",
  },
  {
    slug: "allergy",
    name: "Allergy",
    shortDescription: "Seasonal or recurring allergic reactions affecting skin, nose or airways.",
    metaDescription:
      "Learn about allergy symptoms, common triggers and the homeopathic consultation approach for allergies at Aura Cure Clinic, Sikar.",
    overview:
      "Allergies occur when the body's immune system reacts to substances such as dust, pollen, certain foods or seasonal changes. They can affect the skin, nasal passages, eyes or airways, and severity ranges from mild irritation to more disruptive, recurring episodes.",
    symptoms: [
      "Sneezing, nasal congestion or a runny nose",
      "Itchy, watery eyes",
      "Skin rashes, hives or itching",
      "Recurring symptoms tied to seasons, dust or specific foods",
      "Mild respiratory discomfort in some cases",
    ],
    searchTerms: [
      "allergy",
      "sneezing",
      "runny nose",
      "blocked nose",
      "dust allergy",
      "hives",
      "itchy eyes",
      "seasonal",
    ],
    whenToSeekEvaluation: [
      "Difficulty breathing, swelling of the face, lips or throat — seek emergency care immediately",
      "Symptoms that interfere significantly with sleep or daily activity",
      "Recurring reactions without a clear identified trigger",
    ],
    consultationApproach:
      "The doctor takes a detailed history of when symptoms occur, suspected triggers, past reactions and your general constitution. This helps in considering an individualised homeopathic approach alongside sensible trigger-avoidance guidance.",
    whatToExpect:
      "Initial consultation focuses on identifying patterns and understanding your case in full. Follow-up visits help track how your body responds over subsequent seasons or exposures, with adjustments made as needed.",
    faqs: [
      {
        question: "Can homeopathy treat allergies permanently?",
        answer:
          "We do not promise permanent or guaranteed outcomes for any condition. Many patients consult us for ongoing management of recurring allergic symptoms as part of a broader care plan discussed individually with the doctor.",
      },
      {
        question: "Is homeopathic treatment safe alongside antihistamines?",
        answer:
          "Please inform the doctor of all medication you are currently taking. Do not discontinue any prescribed treatment without consulting the prescribing physician.",
      },
    ],
    relatedSlugs: ["skin-problems"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-01",
  },
  {
    slug: "skin-problems",
    name: "Skin Problems",
    shortDescription: "Chronic or recurring skin concerns including eczema, acne and rashes.",
    metaDescription:
      "Explore common skin conditions, symptoms to watch for, and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "Skin concerns such as eczema, acne, psoriasis-like patches and recurring rashes can have varied underlying patterns and triggers, including stress, diet, weather and constitutional factors. A careful history often helps in understanding the individual picture.",
    symptoms: [
      "Persistent dryness, redness or itching",
      "Recurring breakouts or rashes",
      "Patches of scaling or thickened skin",
      "Symptoms that flare with stress, weather or specific foods",
    ],
    searchTerms: [
      "itchy skin",
      "itching",
      "rash",
      "eczema",
      "acne",
      "pimples",
      "psoriasis",
      "dry skin",
      "khujli",
      "dark spots",
    ],
    whenToSeekEvaluation: [
      "Signs of skin infection — spreading redness, warmth, pus or fever",
      "Rapidly spreading or severe rash",
      "Sudden changes in a mole or skin lesion",
    ],
    consultationApproach:
      "The doctor examines the affected area and discusses the history, pattern of flare-ups, and any related health factors. Skin conditions in homeopathic practice are usually approached as part of a fuller picture of your general health rather than in isolation.",
    whatToExpect:
      "Improvement in chronic skin conditions, where it occurs, is typically gradual and monitored over multiple follow-up visits rather than an overnight change.",
    faqs: [
      {
        question: "How many sittings will I need?",
        answer:
          "This depends entirely on the nature, duration and severity of your specific skin condition. The doctor will discuss a realistic follow-up plan after your first consultation.",
      },
      {
        question: "Will I need to change my diet?",
        answer:
          "The doctor may discuss general lifestyle and dietary observations relevant to your specific case during consultation, based on the patterns discussed in your history.",
      },
    ],
    relatedSlugs: ["allergy", "hair-fall"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-01",
  },
  {
    slug: "hair-fall",
    name: "Hair Fall",
    shortDescription: "Excessive or patterned hair thinning and loss.",
    metaDescription:
      "Understand common causes of hair fall and how a homeopathic consultation for hair fall works at Aura Cure Clinic, Sikar.",
    overview:
      "Hair fall can result from several factors including stress, nutritional patterns, hormonal changes, scalp conditions or general health status. Distinguishing ordinary seasonal shedding from a more significant pattern is part of the initial evaluation.",
    symptoms: [
      "Increased hair strands on pillow, comb or in the shower",
      "Visible thinning at the crown or hairline",
      "Patchy hair loss in localised areas",
      "Accompanying scalp itching, flaking or tenderness",
    ],
    searchTerms: [
      "hair fall",
      "hair loss",
      "baldness",
      "thinning hair",
      "dandruff",
      "bal jhadna",
      "receding hairline",
    ],
    whenToSeekEvaluation: [
      "Sudden, patchy hair loss",
      "Hair fall accompanied by other new symptoms (fatigue, weight change, skin changes)",
      "Signs of scalp infection",
    ],
    consultationApproach:
      "The consultation covers the pattern and duration of hair fall, general health, stress levels, diet and family history, helping the doctor consider likely contributing factors alongside a homeopathic treatment direction.",
    whatToExpect:
      "Hair growth cycles are naturally slow, so any response to treatment — where it occurs — is generally assessed over several months of consistent follow-up rather than in the first few weeks.",
    faqs: [
      {
        question: "Can homeopathy regrow hair?",
        answer:
          "We do not make guaranteed claims about hair regrowth. The doctor will discuss what is realistic for your specific case, which depends on the underlying cause and pattern of hair loss.",
      },
      {
        question: "Should I get any tests done first?",
        answer:
          "The doctor may recommend relevant tests if an underlying nutritional, thyroid or other systemic cause is suspected, based on your case history.",
      },
    ],
    relatedSlugs: ["skin-problems"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-01",
  },
  {
    slug: "digestive-health",
    name: "Digestive Health",
    shortDescription: "Recurring acidity, bloating, irregular bowel patterns and related discomfort.",
    metaDescription:
      "Learn about common digestive health concerns and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "Digestive complaints such as acidity, bloating, irregular bowel habits and general discomfort after eating are common and can be influenced by diet, stress, routine and individual constitution. A thorough history helps distinguish everyday patterns from concerns needing closer evaluation.",
    symptoms: [
      "Recurring acidity or a burning sensation",
      "Bloating or a feeling of heaviness after meals",
      "Irregular bowel movements",
      "Discomfort linked to specific foods or stress",
    ],
    searchTerms: [
      "acidity",
      "gas",
      "bloating",
      "constipation",
      "loose motion",
      "indigestion",
      "heartburn",
      "stomach pain",
      "pet dard",
      "ibs",
    ],
    whenToSeekEvaluation: [
      "Unintentional weight loss",
      "Blood in stool or vomit",
      "Persistent severe abdominal pain",
      "Difficulty swallowing",
    ],
    consultationApproach:
      "The doctor discusses your eating patterns, symptom triggers, stress levels and general health in detail. This helps in considering an individualised approach to your digestive concerns.",
    whatToExpect:
      "Many digestive patterns are closely tied to routine and lifestyle, so the doctor may discuss practical daily-life observations alongside your treatment plan, monitored over follow-up visits.",
    faqs: [
      {
        question: "Is homeopathic treatment safe for long-term digestive issues?",
        answer:
          "Please discuss your complete medical history, including any existing diagnoses, with the doctor so an appropriate approach can be considered for your specific situation.",
      },
      {
        question: "Do I need to change my diet during treatment?",
        answer:
          "The doctor may suggest general dietary observations relevant to your specific case, discussed individually during your consultation.",
      },
    ],
    relatedSlugs: ["migraine"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-01",
  },
  {
    slug: "asthma-breathing",
    name: "Asthma & Breathing",
    shortDescription: "Recurring breathing symptoms, wheezing and respiratory concerns.",
    metaDescription:
      "Understand asthma and recurring breathing symptoms, and how a homeopathic consultation approaches respiratory concerns at Aura Cure Clinic, Sikar.",
    overview:
      "Asthma and related respiratory concerns involve recurring breathlessness, wheezing or tightness in the chest, often triggered by allergens, weather changes, exertion or infections. Severity and triggers vary widely between individuals, so understanding your specific pattern is an important first step.",
    symptoms: [
      "Wheezing or a whistling sound while breathing",
      "Recurring breathlessness or chest tightness",
      "Persistent cough, especially at night or early morning",
      "Symptoms that worsen with dust, cold air, exertion or infections",
    ],
    searchTerms: ["asthma", "breathing problem", "saans", "wheezing", "shortness of breath", "dama", "respiratory"],
    whenToSeekEvaluation: [
      "Severe difficulty breathing or bluish lips or fingertips — seek emergency care immediately",
      "Breathlessness that does not improve with a prescribed inhaler or medication",
      "Chest pain accompanying breathlessness",
      "Rapidly worsening symptoms",
    ],
    consultationApproach:
      "The doctor takes a detailed history of your breathing pattern, known triggers, frequency of episodes and any existing diagnosis or medication, alongside your general health. This helps in considering an individualised approach alongside any care already prescribed by a treating physician.",
    whatToExpect:
      "Respiratory concerns are usually monitored over multiple follow-up visits, tracking the frequency and severity of episodes over time rather than expecting an immediate change.",
    faqs: [
      {
        question: "Can homeopathy replace my inhaler or asthma medication?",
        answer:
          "Never stop or reduce prescribed asthma medication without consulting the doctor who prescribed it. Please bring your current diagnosis and medication details to your consultation so they can be considered alongside any homeopathic approach.",
      },
      {
        question: "Can homeopathy help with recurring breathing symptoms?",
        answer:
          "Many patients consult us for ongoing management of recurring respiratory symptoms as part of a broader care plan. We do not promise guaranteed or permanent results — the doctor will discuss a realistic outlook based on your specific case.",
      },
    ],
    relatedSlugs: ["allergy"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "joint-arthritis",
    name: "Joint & Arthritis",
    shortDescription: "Joint pain, stiffness and arthritis-related concerns.",
    metaDescription:
      "Learn about joint pain, stiffness and arthritis-related concerns, and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "Joint pain and stiffness can arise from a range of causes, including age-related wear, inflammatory arthritis, injury or overuse. The pattern of pain — which joints, time of day, effect of movement or rest — helps build a clearer picture during consultation.",
    symptoms: [
      "Pain, swelling or stiffness in one or more joints",
      "Stiffness that is worse in the morning or after rest",
      "Reduced range of movement in affected joints",
      "Symptoms that worsen with weather changes or activity",
    ],
    searchTerms: ["joint pain", "arthritis", "stiffness", "knee pain", "jodo ka dard", "gathiya", "swelling"],
    whenToSeekEvaluation: [
      "Sudden, severe joint swelling with redness and warmth",
      "Joint pain following an injury with inability to bear weight",
      "Fever accompanying joint pain",
      "Rapidly progressing deformity or loss of function",
    ],
    consultationApproach:
      "The doctor discusses which joints are affected, how long symptoms have been present, what makes them better or worse, and your general health and activity levels. Existing X-rays or diagnostic reports, if available, help build a fuller picture.",
    whatToExpect:
      "Chronic joint concerns are usually approached as a monitored process over several follow-up visits, alongside sensible movement and lifestyle observations discussed with the doctor.",
    faqs: [
      {
        question: "Can homeopathy help with arthritis?",
        answer:
          "Many patients consult us for ongoing management of joint pain and stiffness as part of their overall care. Response varies by individual and by the type of arthritis involved — the doctor will discuss a realistic outlook for your specific case.",
      },
      {
        question: "Do I need to stop my current pain medication?",
        answer:
          "Please do not stop or alter any prescribed medication without consulting the prescribing doctor. Bring your current reports and medication list to your consultation.",
      },
    ],
    relatedSlugs: ["back-pain"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    shortDescription: "Common and recurring women's health concerns.",
    metaDescription:
      "Understand common women's health concerns and how a confidential homeopathic consultation approaches them at Aura Cure Clinic, Sikar.",
    overview:
      "Women's health concerns seen in general practice range from menstrual irregularities and cyclical discomfort to hormonal and other recurring concerns. A detailed history of cycle pattern, duration and associated symptoms helps the doctor understand your specific situation.",
    symptoms: [
      "Irregular, painful or heavy menstrual cycles",
      "Cyclical mood or physical discomfort",
      "Recurring hormonal-pattern symptoms",
      "Other recurring concerns specific to women's health",
    ],
    searchTerms: [
      "women's health",
      "periods",
      "menstrual problem",
      "irregular periods",
      "pcod",
      "pcos",
      "mahila swasthya",
      "hormonal",
    ],
    whenToSeekEvaluation: [
      "Very heavy bleeding or bleeding between periods",
      "Severe pelvic pain",
      "Sudden changes in a longstanding cycle pattern",
      "Any concern that feels urgent to you",
    ],
    consultationApproach:
      "The doctor takes a detailed and confidential history of your cycle, symptoms and general health. This conversation is private, and you are welcome to share only what you're comfortable discussing at first.",
    whatToExpect:
      "Hormonal and cyclical patterns are usually assessed over a few cycles of follow-up, since a single month rarely gives a complete picture.",
    faqs: [
      {
        question: "Is the consultation private?",
        answer: "Yes. Your consultation is confidential, and you can discuss your concerns directly with the doctor at your own pace.",
      },
      {
        question: "Can homeopathy help with irregular periods?",
        answer:
          "Many patients consult us for ongoing management of cyclical and hormonal concerns. We do not guarantee outcomes — the doctor will discuss what is realistic for your specific case after understanding your full history.",
      },
    ],
    relatedSlugs: ["sexual-private-health"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "kidney-stones",
    name: "Kidney Stones",
    shortDescription: "Consultation for kidney stone-related concerns.",
    metaDescription:
      "Learn about kidney stone symptoms and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "Kidney stones can cause significant discomfort and are often identified through symptoms like flank pain, or through imaging done for another reason. Stone size, location and your symptom pattern all matter in deciding an appropriate approach.",
    symptoms: [
      "Sharp pain in the back or side, below the ribs",
      "Pain that radiates to the lower abdomen or groin",
      "Blood in urine",
      "Nausea, or discomfort with urination",
    ],
    searchTerms: ["kidney stone", "pathri", "stone pain", "kidney pain", "renal stone", "urine problem"],
    whenToSeekEvaluation: [
      "Severe pain that is not manageable",
      "Fever with kidney pain — this can indicate infection and needs urgent care",
      "Inability to pass urine",
      "Persistent vomiting",
    ],
    consultationApproach:
      "The doctor reviews your symptoms, any imaging or reports you already have, and your general health history. Stone size and location, where known, help inform whether a homeopathic approach alongside monitoring is appropriate, or whether specialist referral is needed.",
    whatToExpect:
      "Where relevant, the doctor may recommend periodic imaging to monitor stone size and position alongside any approach discussed.",
    faqs: [
      {
        question: "Can homeopathy dissolve kidney stones?",
        answer:
          "We do not make guaranteed claims about dissolving or removing stones. The doctor will review your specific case, including stone size and symptoms, and discuss a realistic and safe approach — including referral for specialist or surgical care where that is appropriate.",
      },
      {
        question: "Should I get a scan before my visit?",
        answer: "If you already have a recent ultrasound or scan report, please bring it. If not, the doctor may recommend one based on your symptoms.",
      },
    ],
    relatedSlugs: ["back-pain"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "slip-disc",
    name: "Slip Disc",
    shortDescription: "Back and spine-related discomfort associated with slipped disc.",
    metaDescription: "Understand slip disc symptoms and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "A slipped (herniated) disc occurs when the soft cushioning between spinal vertebrae shifts or bulges, which can press on nearby nerves and cause pain, numbness or weakness — most often in the lower back and legs.",
    symptoms: [
      "Lower back pain, sometimes radiating down one leg",
      "Numbness or tingling in the leg or foot",
      "Muscle weakness in the affected limb",
      "Pain that worsens with sitting, bending or coughing",
    ],
    searchTerms: ["slip disc", "disc problem", "sciatica", "back pain leg", "spine problem", "kamar dard"],
    whenToSeekEvaluation: [
      "Loss of bladder or bowel control — seek emergency care immediately",
      "Progressive weakness or numbness in the leg",
      "Severe pain that does not ease with rest",
      "Pain following a significant injury",
    ],
    consultationApproach:
      "The doctor discusses your pain pattern, any radiating symptoms, existing reports such as an MRI if available, and daily activities that affect your symptoms. This helps in considering an appropriate approach alongside any physiotherapy or specialist care already advised.",
    whatToExpect:
      "Spine-related concerns are typically monitored over multiple visits, with attention to any symptoms that would need prompt specialist referral.",
    faqs: [
      {
        question: "Can homeopathy avoid the need for surgery?",
        answer:
          "This depends entirely on your specific case, including disc severity and any neurological symptoms. The doctor will give you an honest assessment and refer you for specialist or surgical evaluation where that is medically appropriate.",
      },
      {
        question: "Is it safe to exercise with a slip disc?",
        answer: "Please discuss any exercise or physiotherapy with the doctor before starting, based on your specific case and reports.",
      },
    ],
    relatedSlugs: ["back-pain"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "back-pain",
    name: "Back Pain",
    shortDescription: "Recurring lower back and musculoskeletal discomfort.",
    metaDescription: "Learn about common causes of back pain and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "Back pain is common and can stem from posture, muscular strain, prolonged sitting, injury or underlying spinal conditions. Understanding the pattern — where the pain is, what worsens or eases it, and how long it has persisted — is central to the consultation.",
    symptoms: [
      "Dull ache or sharp pain in the lower or upper back",
      "Stiffness, especially after sitting or on waking",
      "Pain that worsens with certain movements or postures",
      "Occasional radiating discomfort to the hip or leg",
    ],
    searchTerms: ["back pain", "kamar dard", "lower back pain", "spine pain", "backache"],
    whenToSeekEvaluation: [
      "Numbness, tingling or weakness in the legs",
      "Loss of bladder or bowel control — seek emergency care immediately",
      "Pain following a fall or injury",
      "Pain accompanied by unexplained weight loss or fever",
    ],
    consultationApproach:
      "The doctor takes a detailed history of your pain pattern, daily posture and activity, and any prior injury or diagnosis. This helps distinguish straightforward muscular strain from concerns needing closer evaluation.",
    whatToExpect: "Many cases of recurring back pain are approached alongside practical posture and activity observations, monitored over follow-up visits.",
    faqs: [
      {
        question: "Is homeopathy effective for chronic back pain?",
        answer:
          "Many patients consult us for ongoing management of recurring back pain. Response varies by individual and underlying cause — the doctor will discuss a realistic approach after reviewing your case.",
      },
      {
        question: "Should I rest completely or stay active?",
        answer: "This depends on the cause and severity of your pain. The doctor will give specific guidance for your situation during consultation.",
      },
    ],
    relatedSlugs: ["slip-disc", "joint-arthritis"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "piles",
    name: "Piles",
    shortDescription: "Consultation for piles and related anorectal concerns.",
    metaDescription: "Understand piles (haemorrhoids) symptoms and the homeopathic consultation approach at Aura Cure Clinic, Sikar.",
    overview:
      "Piles (haemorrhoids) are swollen blood vessels in the lower rectum or anus, often linked to constipation, prolonged sitting, straining or pregnancy. Symptoms range from mild discomfort to more noticeable bleeding or swelling.",
    symptoms: [
      "Discomfort, itching or swelling around the anus",
      "Bleeding during bowel movements",
      "A feeling of a lump near the anus",
      "Symptoms that worsen with constipation or prolonged sitting",
    ],
    searchTerms: ["piles", "bawasir", "hemorrhoids", "haemorrhoids", "anal bleeding", "constipation"],
    whenToSeekEvaluation: [
      "Significant or persistent bleeding",
      "Severe pain or a hard, painful lump",
      "Unexplained weight loss or a change in bowel habit",
      "Symptoms that don't fit the usual pattern of piles",
    ],
    consultationApproach:
      "The doctor takes a private, detailed history of your symptoms, bowel habits and diet. This is a common and treatable concern, and the consultation is handled discreetly and without judgement.",
    whatToExpect:
      "Alongside any approach discussed, the doctor may cover dietary and lifestyle observations relevant to constipation and straining, monitored over follow-up visits.",
    faqs: [
      {
        question: "Is this an embarrassing thing to discuss?",
        answer: "Not at all — piles are a common and routine concern in general practice, and the consultation is handled with complete discretion and respect.",
      },
      {
        question: "Will I need a procedure?",
        answer: "This depends on the severity and grade of piles. The doctor will assess your specific case and refer you for a surgical opinion if that becomes appropriate.",
      },
    ],
    relatedSlugs: ["digestive-health"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
  {
    slug: "sexual-private-health",
    name: "Sexual & Private Health",
    shortDescription: "Confidential consultation for sensitive and private health concerns.",
    metaDescription: "Confidential homeopathic consultation for sexual and private health concerns at Aura Cure Clinic, Sikar.",
    overview:
      "Sexual and other private health concerns are a routine part of general practice, though often the most difficult to bring up. These consultations are handled with complete confidentiality and respect, at a pace you're comfortable with.",
    symptoms: [
      "Concerns affecting sexual health or function",
      "Other private or sensitive health matters",
      "Concerns you may feel hesitant discussing elsewhere",
    ],
    searchTerms: ["sexual health", "private health", "confidential", "yaun swasthya", "men's health", "intimate health"],
    whenToSeekEvaluation: [
      "Any symptom accompanied by significant pain, bleeding or fever",
      "Sudden or severe new symptoms",
      "Anything that feels urgent to you, regardless of how it may seem to describe",
    ],
    consultationApproach:
      "You will always speak with the doctor privately and in confidence. There is no pressure to share more than you're ready to at first — the consultation proceeds at your pace.",
    whatToExpect: "As with any concern, the doctor takes a full history before discussing an approach, and follow-up visits are used to review progress privately.",
    faqs: [
      {
        question: "Will my visit be kept confidential?",
        answer: "Yes. All consultations, and particularly those involving private or sensitive concerns, are treated with strict confidentiality.",
      },
      {
        question: "Do I need to explain everything on the phone before booking?",
        answer: "No — you can simply book a consultation and discuss the details privately with the doctor in person.",
      },
    ],
    relatedSlugs: ["womens-health"],
    medicallyReviewed: true,
    lastUpdated: "2026-08-25",
  },
];

export function getConditionBySlug(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
