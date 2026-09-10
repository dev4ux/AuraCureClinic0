import type { ServiceContent } from "@/lib/types";

/**
 * Skin services.
 *
 * Acne and Pigmentation are handled as medical concerns in conditions.ts —
 * this file covers the named procedures and the specific dermatological
 * conditions the clinic treats as distinct services.
 */
export const skinServices: ServiceContent[] = [
  {
    slug: "chemical-peel",
    name: "Chemical Peel",
    category: "skin",
    shortDescription: "A controlled exfoliating solution applied to the skin, at a strength chosen for your case.",
    metaDescription:
      "Chemical peel at Aura Cure Clinic, Sikar — how peels work, which concerns they are considered for, the procedure, aftercare and precautions.",
    alsoKnownAs: ["face peeling", "skin peel", "glycolic peel", "salicylic peel"],
    overview:
      "A chemical peel applies a solution to the skin that loosens and removes the outermost layers in a controlled way. Peels vary considerably in strength and composition; the one selected — if any — depends on your skin type, the concern being treated and how your skin has behaved previously.",
    howItWorks:
      "The solution breaks the bonds between cells in the superficial layers of the skin so they shed more readily than they would naturally. As those layers lift, newer skin beneath is exposed. Depth is determined by the agent, its concentration and how long it is left on — all of which the doctor controls. On Indian skin, choosing the wrong agent or depth risks post-inflammatory pigmentation, which is why the assessment before the peel matters more than the peel itself.",
    suitableFor: [
      "Active acne and post-acne marks, where the skin is suitable",
      "Uneven tone, dullness and superficial pigmentation",
      "Selected cases of superficial textural irregularity",
      "Patients able to follow strict sun protection afterwards",
    ],
    notSuitableFor: [
      "Active skin infection, cold sores, open lesions or eczema in the treatment area",
      "Recent isotretinoin use — usually deferred; tell the doctor if you have taken it",
      "A history of keloid scarring or post-inflammatory hyperpigmentation, unless approached very cautiously",
      "Pregnancy and breastfeeding, for certain agents",
      "Patients who cannot avoid sun exposure during the recovery period",
    ],
    benefits: [
      "Considered for acne, marks, tone and superficial textural concerns",
      "Strength and agent are selected for your skin rather than applied as a fixed protocol",
      "An in-clinic procedure with a defined, short recovery for superficial peels",
    ],
    procedure: [
      {
        title: "Skin assessment",
        body: "The doctor examines your skin type, the concern, any previous reactions and your current skincare — including anything you may need to stop beforehand.",
      },
      {
        title: "Preparation phase",
        body: "For some peels the skin is prepared for a period beforehand with specific products. This step reduces the risk of pigmentation afterwards and is not optional where advised.",
      },
      {
        title: "Cleansing and protection",
        body: "The skin is cleaned and sensitive areas — around the eyes, nostrils and lips — are protected.",
      },
      {
        title: "Application",
        body: "The solution is applied and left for a controlled time while the doctor monitors the skin's response. Tingling or a warm sensation is expected.",
      },
      {
        title: "Neutralisation and aftercare",
        body: "The peel is neutralised or removed, soothing agents and sunscreen applied, and detailed aftercare instructions given.",
      },
    ],
    precautions: [
      "Strict sun protection afterwards is essential — this is where most poor outcomes originate",
      "Do not pick or peel flaking skin; let it shed naturally",
      "Stop retinoids, exfoliating acids and scrubs for the period the doctor specifies before and after",
      "Tell the doctor about any history of cold sores, keloids or darkening after injury",
      "Temporary redness, tightness, flaking and darkening before improvement are common",
      "Report blistering, spreading redness or severe pain rather than waiting",
    ],
    consultationApproach:
      "Skin type and history come first. The doctor may prime the skin for a period before any peel is performed, and will decline a peel where the skin or circumstances make it unwise.",
    whatToExpect:
      "A short in-clinic procedure followed by several days of flaking or sensitivity, depending on the peel. Superficial peels are usually planned as a course with intervals between them.",
    clinicalNotes:
      "Usually planned as a course rather than a single session, with the interval set by the peel depth and how your skin responds.",
    faqs: [
      {
        question: "Will my skin peel visibly?",
        answer:
          "It depends on the peel. Superficial peels often cause light flaking rather than dramatic peeling. The doctor will tell you what to expect for the specific peel being used.",
      },
      {
        question: "Is a peel safe for Indian skin?",
        answer:
          "With the right agent, the right depth and proper preparation and sun protection, peels are used routinely on Indian skin. The risk — post-inflammatory pigmentation — comes from unsuitable choices and poor aftercare, which is why the assessment matters.",
      },
      {
        question: "How many sessions will I need?",
        answer: "That depends on the concern and your skin's response, and is discussed after assessment rather than quoted upfront.",
      },
      {
        question: "Can I have a peel before a wedding or event?",
        answer:
          "Tell the doctor your timeline. Peels need recovery time and are not something to do days before an event.",
      },
    ],
    searchTerms: ["chemical peel", "face peel", "skin peeling", "glycolic", "salicylic peel", "peeling treatment"],
    relatedSlugs: ["facial-extractions", "microneedling", "skin-resurfacing"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "face-prp",
    name: "Face PRP",
    category: "skin",
    shortDescription: "Platelet-rich plasma applied to facial skin, considered for texture and skin quality.",
    metaDescription:
      "Face PRP at Aura Cure Clinic, Sikar — how platelet-rich plasma is used on facial skin, who it suits, the procedure, precautions and FAQs.",
    alsoKnownAs: ["PRP facial", "vampire facial", "platelet rich plasma face"],
    overview:
      "Face PRP uses a concentrated portion of your own blood, prepared and reintroduced into facial skin. It is considered for skin quality and texture concerns as part of a wider plan, and is often combined with microneedling rather than used alone.",
    howItWorks:
      "A blood sample is separated so the platelet-rich plasma fraction can be drawn off. Platelets release proteins involved in the body's ordinary repair processes; placing that fraction into the skin is intended to work with those processes in the treated area. It is not a filler — it does not add volume — and it does not act on pigmentation the way a peel or topical treatment does.",
    suitableFor: [
      "Selected concerns about skin texture, dullness and fine surface irregularity",
      "Patients wanting an approach using their own blood rather than an introduced substance",
      "Patients able to attend a course of sessions and accept a gradual, variable response",
    ],
    notSuitableFor: [
      "Active facial infection, acne flare or inflamed skin in the treatment area",
      "Platelet, clotting or bleeding disorders, or anticoagulant use, unless cleared",
      "Pregnancy and breastfeeding — usually deferred",
      "Patients expecting volume restoration, which PRP does not provide",
    ],
    benefits: [
      "Uses a preparation derived entirely from your own blood",
      "Considered for skin texture and quality rather than a single isolated concern",
      "Can be combined with microneedling within one session where appropriate",
    ],
    procedure: [
      {
        title: "Skin assessment",
        body: "The doctor examines the skin, discusses what you want addressed and confirms whether PRP is a reasonable option — or whether something else fits better.",
      },
      {
        title: "Blood draw",
        body: "A small sample of blood is taken as for a routine test.",
      },
      {
        title: "Separation",
        body: "The sample is centrifuged in-clinic to isolate the platelet-rich plasma.",
      },
      {
        title: "Application",
        body: "The plasma is applied to the face, commonly in combination with microneedling so it reaches the treated layer. A topical numbing agent is usually used first.",
      },
      {
        title: "Aftercare and review",
        body: "Aftercare instructions are given and response reviewed across the planned course.",
      },
    ],
    precautions: [
      "Redness, mild swelling and a sunburn-like sensation for a day or two are common",
      "Strict sun protection afterwards; avoid direct sun for the period advised",
      "Do not apply active skincare — retinoids, acids, scrubs — until the doctor says the skin is ready",
      "Disclose all medication, particularly blood thinners and anti-inflammatories",
      "Report spreading redness, pus, fever or severe pain",
    ],
    consultationApproach:
      "The doctor establishes what is actually driving the concern before offering PRP. Where a peel, a topical plan or treating an underlying skin condition would serve better, that is what is recommended.",
    whatToExpect:
      "A short in-clinic procedure. Any change develops gradually across a course of sessions rather than appearing after one visit.",
    faqs: [
      {
        question: "Is this the 'vampire facial'?",
        answer:
          "That is the popular name for PRP combined with microneedling. The procedure is the same; the name is marketing rather than clinical.",
      },
      {
        question: "Will it fill hollows or wrinkles?",
        answer:
          "No. PRP does not add volume. If volume is the concern, that is a different conversation with different options and different risks.",
      },
      {
        question: "How much downtime is there?",
        answer:
          "Usually a day or two of redness and sensitivity, more if combined with microneedling. Plan around events rather than booking close to one.",
      },
    ],
    searchTerms: ["face prp", "prp facial", "vampire facial", "platelet rich plasma face", "prp for skin"],
    relatedSlugs: ["microneedling", "face-mesotherapy", "skin-resurfacing"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "face-mesotherapy",
    name: "Face Mesotherapy",
    category: "skin",
    shortDescription: "Micro-delivery of a selected solution into facial skin, chosen for the individual concern.",
    metaDescription:
      "Face mesotherapy at Aura Cure Clinic, Sikar — what it is, how it works, who it suits, the procedure, aftercare and precautions.",
    alsoKnownAs: ["meso facial", "skin booster", "facial mesotherapy"],
    overview:
      "Mesotherapy delivers a prepared solution into the superficial layers of facial skin using very fine needles. The composition is selected by the doctor for the specific concern. It is a supporting measure within a skin plan rather than a treatment for any single condition.",
    howItWorks:
      "Instead of relying on a product penetrating from the surface, small amounts are placed directly into the skin across the treatment area. What is used depends on what the assessment finds, and the doctor will decline where a different approach fits the concern better.",
    suitableFor: [
      "Selected concerns about skin hydration, dullness and texture",
      "Under-eye and localised concerns, where assessed as appropriate",
      "Patients comfortable with a short course of repeated sessions",
    ],
    notSuitableFor: [
      "Active facial infection, acne flare or inflamed skin at the site",
      "Known allergy to any component of the prepared solution",
      "Bleeding or clotting disorders, or anticoagulant use, unless cleared",
      "Pregnancy and breastfeeding — usually deferred",
    ],
    benefits: [
      "Delivers the selected preparation locally to the area being treated",
      "Composition chosen case by case rather than a fixed formula",
      "Short in-clinic sessions with limited downtime",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The doctor examines the skin, discusses the concern and checks for allergies or anything that makes the procedure unsuitable.",
      },
      {
        title: "Preparation",
        body: "The skin is cleaned and a topical numbing agent applied where needed.",
      },
      {
        title: "Application",
        body: "Very fine needles place small amounts of the solution across the treatment area.",
      },
      {
        title: "Aftercare",
        body: "Soothing agents and sunscreen are applied, with specific instructions for the following days.",
      },
    ],
    precautions: [
      "Tell the doctor about every allergy, including to medicines, vitamins and topical products",
      "Small marks, redness or minor bruising at injection points are common and settle",
      "Avoid makeup, swimming and heavy sweating for the period specified",
      "Sun protection afterwards is essential",
      "Report persistent swelling, spreading redness or discharge",
    ],
    consultationApproach:
      "Not offered as a default. The doctor assesses the skin first and will say plainly where another approach — or treating an underlying condition — should come first.",
    whatToExpect:
      "Short sessions repeated at intervals, with any change assessed across the course rather than after one visit.",
    faqs: [
      {
        question: "Is it painful?",
        answer:
          "The needles are very fine and superficial. Most patients find it uncomfortable rather than painful, and a numbing cream is usually used.",
      },
      {
        question: "Can it be done under the eyes?",
        answer:
          "The under-eye area is treated in selected cases, but it is delicate and the doctor will assess suitability specifically rather than assuming it.",
      },
      {
        question: "How is it different from PRP?",
        answer:
          "PRP uses a preparation made from your own blood; mesotherapy uses a solution the doctor selects. They suit different situations.",
      },
    ],
    searchTerms: ["mesotherapy", "face mesotherapy", "meso facial", "skin booster", "facial injection"],
    relatedSlugs: ["face-prp", "microneedling", "chemical-peel"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "vitiligo-treatment",
    name: "Vitiligo Treatment",
    category: "skin",
    shortDescription: "Assessment and long-term homeopathic management of vitiligo, alongside monitoring for spread.",
    metaDescription:
      "Vitiligo treatment in Sikar — assessment, homeopathic management and monitoring of white patches at Aura Cure Clinic. Consultation with Dr. Nitin Sharma.",
    alsoKnownAs: ["white patches", "leucoderma", "safed daag"],
    overview:
      "Vitiligo is a condition in which patches of skin lose their pigment, usually because the pigment-producing cells in those areas stop functioning. It is not contagious and it is not caused by diet myths commonly repeated about it. It behaves differently in different people — some cases remain stable for years, others progress — so assessment and monitoring matter as much as treatment.",
    howItWorks:
      "The clinic's approach is constitutional homeopathic treatment alongside regular monitoring of the patches. The doctor documents the extent and location of patches at the outset so that stability or spread can actually be measured rather than guessed at over time. Treatment is planned as a long-term course, because pigment change — where it occurs — is slow. The doctor will also discuss what is known and not known about the condition rather than promising repigmentation.",
    suitableFor: [
      "Newly noticed white patches that have not been assessed",
      "Established vitiligo where the patient wants long-term constitutional management",
      "Patients seeking monitoring alongside treatment, so spread is caught early",
      "Patients who understand the timeline involved and want an honest account of it",
    ],
    benefits: [
      "Documented baseline so change can be measured objectively over time",
      "Constitutional treatment considered alongside the emotional impact, which is often significant",
      "Honest discussion of what treatment can and cannot be expected to achieve",
    ],
    procedure: [
      {
        title: "History and examination",
        body: "When the patches appeared, how they have changed, family history, associated conditions — thyroid disease in particular — and any triggering event.",
      },
      {
        title: "Documenting the baseline",
        body: "The location and extent of patches are recorded so future visits can be compared against a real baseline.",
      },
      {
        title: "Investigation where indicated",
        body: "Thyroid function and other tests may be suggested, since vitiligo can occur alongside other autoimmune conditions.",
      },
      {
        title: "Constitutional treatment",
        body: "An individualised homeopathic plan, chosen on the full case rather than on the diagnosis alone.",
      },
      {
        title: "Long-term review",
        body: "Regular follow-up to track stability, spread or repigmentation and adjust the plan.",
      },
    ],
    precautions: [
      "Protect depigmented patches from sun — they burn easily without pigment",
      "Rapidly spreading patches should be reviewed promptly rather than at the next routine visit",
      "Tell the doctor about any thyroid symptoms or family history of autoimmune disease",
      "Be sceptical of any treatment promising complete repigmentation in a fixed period",
      "Do not stop or change other prescribed treatment without discussing it",
    ],
    consultationApproach:
      "An unhurried first consultation covering the physical picture and the impact the condition is having. The doctor will be direct about the variability of outcomes rather than offering reassurance that is not supported.",
    whatToExpect:
      "A long-term treatment relationship with regular review. Where repigmentation occurs it is gradual and partial more often than complete, and stabilising spread is itself a meaningful outcome.",
    clinicalNotes:
      "Vitiligo is associated with other autoimmune conditions, thyroid disease most commonly, which is why screening is sometimes suggested even when the skin is the only complaint.",
    faqs: [
      {
        question: "Is vitiligo contagious?",
        answer: "No. It cannot be passed to another person by any form of contact.",
      },
      {
        question: "Does eating certain foods together cause it?",
        answer:
          "No. The belief that fish and milk together, or similar combinations, cause vitiligo is a persistent myth with no basis. Unnecessary dietary restriction causes real harm without helping.",
      },
      {
        question: "Will the patches go away completely?",
        answer:
          "That cannot be promised. Response varies widely — some patients see repigmentation, some see stability without repigmentation, and some see progression. The doctor will explain what your particular pattern suggests.",
      },
      {
        question: "How long is treatment?",
        answer:
          "Long. This is managed over months and years rather than weeks, and anyone promising a quick resolution should be treated with caution.",
      },
    ],
    searchTerms: ["vitiligo", "white patches", "leucoderma", "safed daag", "skin depigmentation", "white spots skin"],
    relatedSlugs: ["seborrheic-dermatitis", "contact-dermatitis"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "seborrheic-dermatitis",
    name: "Seborrheic Dermatitis",
    category: "skin",
    shortDescription: "Treatment for the recurring scaly, flaky rash of the scalp, face and other oily areas.",
    metaDescription:
      "Seborrheic dermatitis treatment in Sikar — recurring dandruff, scaly patches on the scalp and face. Assessment and homeopathic care at Aura Cure Clinic.",
    alsoKnownAs: ["seborrhoeic eczema", "severe dandruff", "scalp eczema"],
    overview:
      "Seborrheic dermatitis produces flaking, scaling and redness in the areas of skin richest in oil glands — the scalp, eyebrows, the sides of the nose, behind the ears and sometimes the chest. On the scalp it is the cause of stubborn dandruff that does not settle with ordinary shampoo. It characteristically improves and relapses rather than resolving permanently.",
    howItWorks:
      "The condition involves an interaction between skin oil, a yeast that lives normally on skin, and an individual inflammatory response — which is why it recurs and why treating only the surface tends to give temporary relief. The clinic's approach combines constitutional homeopathic treatment with practical scalp and skin care, and identifies the triggers that drive individual relapses: stress, seasonal change, illness and certain products.",
    suitableFor: [
      "Persistent dandruff that returns whenever medicated shampoo is stopped",
      "Red, scaly patches around the nose, eyebrows or behind the ears",
      "Flaking with itching, particularly worse in winter or during stress",
      "Patients who want the relapsing pattern addressed rather than only the current flare",
    ],
    benefits: [
      "Addresses the relapsing pattern rather than only settling the current episode",
      "Identifies individual triggers so flares become more predictable and manageable",
      "Combines internal treatment with practical, sustainable skin and scalp care",
    ],
    procedure: [
      {
        title: "Examination and history",
        body: "The doctor examines the affected areas and establishes the pattern — how often it flares, what precedes a flare, what has been used and what happened when it stopped.",
      },
      {
        title: "Distinguishing from similar conditions",
        body: "Scalp psoriasis, fungal infection and contact reactions can look similar and are treated differently. The examination separates these.",
      },
      {
        title: "Constitutional treatment",
        body: "An individualised homeopathic plan chosen on the whole case, not on the rash alone.",
      },
      {
        title: "Practical care plan",
        body: "Specific guidance on washing frequency, products to avoid and how to manage a flare when it starts.",
      },
      {
        title: "Review",
        body: "Follow-up to track flare frequency and severity over time, which is the real measure in a relapsing condition.",
      },
    ],
    precautions: [
      "Do not scratch or pick at scales — it worsens inflammation and risks infection",
      "Avoid harsh shampoos, heavy oils and hair products the doctor identifies as triggers",
      "Tell the doctor everything you have already used, including over-the-counter shampoos",
      "Sudden severe flares, or spreading redness with oozing, should be reviewed promptly",
      "Expect management of a relapsing condition rather than a one-time cure",
    ],
    consultationApproach:
      "The doctor treats this as a recurring condition from the start. The plan covers both the current flare and what to do when the next one begins.",
    whatToExpect:
      "Improvement in the current flare, then ongoing work on frequency and severity. Success is usually measured as fewer, milder flares rather than complete permanent clearance.",
    faqs: [
      {
        question: "Is this just dandruff?",
        answer:
          "Ordinary dandruff is mild flaking. Seborrheic dermatitis involves inflammation, redness and scaling and often affects the face as well. It needs a different approach.",
      },
      {
        question: "Why does it come back every time I stop shampoo?",
        answer:
          "Medicated shampoos control the surface picture but do not change the underlying tendency. That is exactly what constitutional treatment is aimed at.",
      },
      {
        question: "Is it contagious?",
        answer: "No. It is not passed between people.",
      },
      {
        question: "Does it cause hair loss?",
        answer:
          "Severe, long-standing inflammation and persistent scratching can contribute to shedding. Treating the inflammation is part of protecting the hair.",
      },
    ],
    searchTerms: ["seborrheic dermatitis", "dandruff", "scalp eczema", "flaky scalp", "seborrhoeic", "rusi"],
    relatedSlugs: ["contact-dermatitis", "skin-infection-treatment"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "contact-dermatitis",
    name: "Contact Dermatitis",
    category: "skin",
    shortDescription: "Identifying what your skin is reacting to, and treating the reaction it causes.",
    metaDescription:
      "Contact dermatitis treatment in Sikar — identifying skin reactions to metals, cosmetics, chemicals and plants, at Aura Cure Clinic.",
    alsoKnownAs: ["skin allergy", "allergic rash", "irritant rash"],
    overview:
      "Contact dermatitis is a rash caused by something the skin has touched. It comes in two forms: an irritant reaction, where a substance directly damages the skin, and an allergic reaction, where the immune system responds to a specific substance it has become sensitised to. The distinction matters, because the second one recurs every time you meet that substance again.",
    howItWorks:
      "The most important part of treatment is identification. The pattern and location of the rash frequently point to the cause — a band around the wrist, a line where a necklace sits, the fingertips in someone handling chemicals, the face in someone using a new cosmetic. The doctor works through exposures systematically: cosmetics, hair dye, metals in jewellery, detergents, footwear, occupational contact, plants and topical medicines. Treatment then settles the current reaction while avoidance prevents the next.",
    suitableFor: [
      "A rash that appears in a defined area or pattern rather than all over",
      "Reactions after starting a new cosmetic, hair dye, detergent or medicine",
      "Recurring rashes where the trigger has never been identified",
      "Occupational skin problems in people handling chemicals, cement or water repeatedly",
    ],
    benefits: [
      "Focuses on identifying the trigger, which is what prevents recurrence",
      "Distinguishes an allergic reaction from an irritant one, since they are managed differently",
      "Treats the current reaction alongside a practical avoidance plan",
    ],
    procedure: [
      {
        title: "Examination and pattern reading",
        body: "The doctor examines where the rash is and what shape it takes — the distribution frequently identifies the cause on its own.",
      },
      {
        title: "Exposure history",
        body: "A systematic review of cosmetics, hair products, jewellery, clothing, detergents, occupational contact, footwear and topical medicines.",
      },
      {
        title: "Treatment of the reaction",
        body: "Individualised homeopathic treatment to settle the current episode, alongside skin care to restore the barrier.",
      },
      {
        title: "Avoidance plan",
        body: "Specific, practical guidance on what to avoid and what to substitute, which is what stops it recurring.",
      },
      {
        title: "Review",
        body: "Follow-up to confirm the rash is settling and that the identified trigger was correct.",
      },
    ],
    precautions: [
      "Bring the actual products you use — packaging and ingredient lists help identify the culprit",
      "Do not continue using a suspected product 'to see if it settles'",
      "Avoid scratching; broken skin invites secondary infection",
      "Widespread rash, facial swelling or any breathing difficulty needs urgent medical attention, not a routine appointment",
      "Tell the doctor about any topical medicine you have applied — these are themselves a common cause",
    ],
    consultationApproach:
      "The consultation is largely detective work. The doctor spends most of it on exposure history, because identifying the trigger is worth more than any treatment for the rash itself.",
    whatToExpect:
      "The current reaction settles with treatment and avoidance. Where an allergic sensitisation is confirmed, avoidance is lifelong for that substance.",
    faqs: [
      {
        question: "How do I know what caused it?",
        answer:
          "Often the pattern tells us — where the rash is and what shape it takes. Where it is not clear, a systematic review of exposures usually narrows it down, and patch testing can be discussed.",
      },
      {
        question: "Will it come back?",
        answer:
          "If it is an allergic reaction and you meet that substance again, yes. That is why identification matters more than the treatment of any single episode.",
      },
      {
        question: "Can I develop an allergy to something I have used for years?",
        answer:
          "Yes. Sensitisation can develop after long uneventful use, which is why a familiar product is never automatically ruled out.",
      },
    ],
    searchTerms: ["contact dermatitis", "skin allergy", "allergic rash", "hair dye allergy", "metal allergy", "rash"],
    relatedSlugs: ["seborrheic-dermatitis", "skin-infection-treatment"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "skin-infection-treatment",
    name: "Skin Infection Treatment",
    category: "skin",
    shortDescription: "Assessment and treatment of fungal, bacterial and other skin infections.",
    metaDescription:
      "Skin infection treatment in Sikar — fungal infections, ringworm, bacterial skin infections and recurrent infection, assessed at Aura Cure Clinic.",
    alsoKnownAs: ["fungal infection", "ringworm", "dad khaj", "bacterial skin infection", "skin infection"],
    overview:
      "Skin infections are common, and the type matters: fungal, bacterial and viral infections look different and are treated differently. Fungal infection in particular has become harder to treat in India in recent years, largely because of widespread use of combination creams containing steroids, which suppress the appearance while allowing the infection to spread.",
    howItWorks:
      "The first task is identifying what kind of infection is present, because treating the wrong one makes things worse. The doctor examines the pattern, spread and appearance, and asks specifically about what has already been applied — combination steroid creams are so widely sold over the counter that they are a routine part of the picture. Treatment then addresses the infection itself, alongside the practical measures that determine whether it recurs: hygiene, clothing, moisture and treating affected household contacts.",
    suitableFor: [
      "Itchy, ring-shaped or spreading patches suggestive of fungal infection",
      "Infections that have not settled with over-the-counter creams, or that worsened on them",
      "Recurrent infections that keep returning after apparent clearance",
      "Skin infections in the folds — groin, underarms, under the breast — where moisture sustains them",
    ],
    benefits: [
      "Identifies the type of infection before treating it",
      "Addresses the steroid-cream problem that makes many fungal infections resistant",
      "Covers recurrence — household contacts, clothing and moisture — not just the current patch",
    ],
    procedure: [
      {
        title: "Examination",
        body: "The doctor examines the affected areas, their pattern and spread, and looks for signs the picture has been altered by steroid creams.",
      },
      {
        title: "Treatment history",
        body: "A specific review of everything already applied. This is often the single most important question, since combination creams change both the appearance and the response.",
      },
      {
        title: "Treatment plan",
        body: "Treatment appropriate to the type of infection identified, with a course long enough to actually clear it rather than only to relieve symptoms.",
      },
      {
        title: "Recurrence prevention",
        body: "Practical measures — clothing, drying, sharing of towels, and screening household contacts, since untreated family members reinfect.",
      },
      {
        title: "Review",
        body: "Follow-up to confirm clearance rather than stopping when it merely looks better.",
      },
    ],
    precautions: [
      "Stop over-the-counter combination creams and bring the tube to the consultation",
      "Do not share towels, clothing or bedding while an infection is active",
      "Keep affected areas dry; wear loose cotton clothing",
      "Complete the full course — stopping early when it looks better is the main reason infections recur",
      "Spreading redness with fever, or an infection in a diabetic patient, needs prompt attention",
    ],
    consultationApproach:
      "The doctor will ask in detail about what has already been applied. This is not a criticism — over-the-counter combination creams are sold freely — but knowing about them changes the diagnosis and the plan.",
    whatToExpect:
      "Treatment over a defined course with follow-up to confirm clearance. Recurrence is addressed as part of the plan, because most patients who return have been reinfected rather than untreated.",
    clinicalNotes:
      "Fungal infection frequently affects several household members at once. Treating one person while others remain untreated is a common cause of apparently 'resistant' infection.",
    faqs: [
      {
        question: "Why did the cream from the chemist make it worse?",
        answer:
          "Many over-the-counter creams contain a steroid alongside an antifungal. The steroid reduces the itch and redness quickly, which feels like improvement, while the fungal infection continues to spread underneath. It is a very common reason infections become difficult to treat.",
      },
      {
        question: "Why does it keep coming back?",
        answer:
          "Usually one of three reasons: the course was stopped too early, household contacts were not treated, or moisture and clothing conditions were unchanged. All three are addressed in the plan.",
      },
      {
        question: "Is it contagious?",
        answer:
          "Fungal skin infections are, through direct contact and shared towels, clothing and bedding. That is why household measures form part of the treatment.",
      },
      {
        question: "How long does treatment take?",
        answer:
          "Longer than most people expect, and longer than the point at which the skin looks normal. Stopping at that point is why infections recur.",
      },
    ],
    searchTerms: [
      "fungal infection",
      "ringworm",
      "dad",
      "khaj",
      "skin infection",
      "itching",
      "jock itch",
      "tinea",
    ],
    relatedSlugs: ["contact-dermatitis", "seborrheic-dermatitis"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "skin-tag-removal",
    name: "Skin Tag Removal",
    category: "skin",
    shortDescription: "In-clinic removal of skin tags after the lesion is confirmed to be what it appears.",
    metaDescription:
      "Skin tag removal at Aura Cure Clinic, Sikar — assessment, the removal procedure, aftercare and precautions. Consultation with Dr. Nitin Sharma.",
    alsoKnownAs: ["acrochordon", "mole tag removal", "skin growth removal"],
    overview:
      "Skin tags are small, soft growths that hang from the skin, most often around the neck, underarms, eyelids and under the breasts. They are harmless in themselves and are usually removed because they catch on clothing and jewellery or for appearance. The important step is not the removal — it is confirming that what is being removed is actually a skin tag.",
    howItWorks:
      "Removal detaches the tag at its base, which is typically narrow. The clinic uses an in-clinic method appropriate to the size and site, under local anaesthesia where required. Before anything is removed, the doctor examines the lesion — pigmented, irregular, bleeding or rapidly changing growths are not skin tags and are not treated as such.",
    suitableFor: [
      "Confirmed skin tags catching on clothing, jewellery or during shaving",
      "Tags in areas of friction — neck, underarms, groin, under the breasts",
      "Removal for cosmetic reasons where the lesion is confirmed benign",
    ],
    notSuitableFor: [
      "Any pigmented, irregular, bleeding, itching or rapidly growing lesion — these need assessment, not removal",
      "Active infection at the site",
      "Patients with bleeding disorders or on anticoagulants, unless cleared",
      "Uncontrolled diabetes, where healing is impaired — usually deferred until controlled",
    ],
    benefits: [
      "The lesion is examined and confirmed before anything is removed",
      "A short in-clinic procedure, usually completed in one visit",
      "Removes the friction and catching that make tags a practical nuisance",
    ],
    procedure: [
      {
        title: "Examination",
        body: "The doctor examines the lesion and confirms it is a skin tag. Anything that does not fit that picture is assessed further or referred rather than removed.",
      },
      {
        title: "Preparation",
        body: "The area is cleaned and local anaesthetic applied or injected where the size or site requires it.",
      },
      {
        title: "Removal",
        body: "The tag is removed at its base using the method appropriate to its size and location.",
      },
      {
        title: "Wound care",
        body: "The site is dressed and you are given aftercare instructions.",
      },
      {
        title: "Healing check",
        body: "A review is arranged where multiple or larger tags have been removed.",
      },
    ],
    precautions: [
      "Never attempt removal at home with thread, nail clippers or over-the-counter acids — infection and scarring are the usual results",
      "Keep the site clean and dry for the period the doctor specifies",
      "Some darkening or a small mark at the site during healing is normal",
      "Tell the doctor about diabetes, bleeding disorders or anticoagulant medication",
      "Report increasing pain, spreading redness, pus or bleeding",
      "New tags can appear elsewhere; removal does not prevent that",
    ],
    consultationApproach:
      "The examination comes first and is not a formality. The doctor will decline to remove anything that does not clearly look like a skin tag, and will explain why.",
    whatToExpect:
      "A short procedure with a small healing period. Sites usually settle within days to a couple of weeks depending on size and location.",
    faqs: [
      {
        question: "Can I remove it myself at home?",
        answer:
          "No. Home removal with thread or clippers commonly causes infection, bleeding and scarring — and removes something that was never examined in the first place.",
      },
      {
        question: "Will it leave a scar?",
        answer:
          "Small tags usually heal with minimal or no visible mark. Larger ones can leave a small mark. The doctor will tell you what to expect for the specific lesion.",
      },
      {
        question: "Will they come back?",
        answer:
          "A properly removed tag does not regrow, but new ones can appear elsewhere, particularly in areas of friction.",
      },
      {
        question: "How do I know it is not something serious?",
        answer:
          "That is exactly what the examination is for. Pigmented, irregular, bleeding or changing lesions are not skin tags and are handled differently.",
      },
    ],
    searchTerms: ["skin tag", "acrochordon", "mole removal", "skin growth", "wart removal", "til hatana"],
    relatedSlugs: ["skin-cancer-screening", "facial-extractions"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "facial-extractions",
    name: "Facial Extractions",
    category: "skin",
    shortDescription: "Clinical clearing of comedones under sterile conditions, rather than at home.",
    metaDescription:
      "Facial extractions at Aura Cure Clinic, Sikar — professional comedone extraction for blackheads and whiteheads, aftercare and precautions.",
    alsoKnownAs: ["comedone extraction", "blackhead removal", "whitehead removal"],
    overview:
      "Extraction is the clearing of blocked pores — blackheads and whiteheads — using sterile instruments under clinical conditions. It addresses what is already blocked; it does not stop new comedones forming, which is why it is used alongside treatment for the acne itself rather than instead of it.",
    howItWorks:
      "The skin is prepared so the contents of blocked pores lift more easily, then a sterile comedone extractor applies controlled pressure to clear them. Doing this properly matters: squeezing at home applies uncontrolled force with unsterile hands, which drives material deeper, causes inflammation and leaves the marks that patients later ask to have treated.",
    suitableFor: [
      "Blackheads and whiteheads that are not clearing with topical treatment",
      "Congested skin on the nose, chin and forehead",
      "Patients being treated for acne, as an adjunct to the main treatment",
    ],
    notSuitableFor: [
      "Active inflamed, pustular or cystic acne — extraction of these worsens scarring",
      "Skin with active infection or open lesions in the area",
      "Recent isotretinoin use — tell the doctor if you have taken it",
      "Patients expecting it to prevent future breakouts",
    ],
    benefits: [
      "Clears existing blockages under sterile, controlled conditions",
      "Avoids the scarring and pigmentation that home squeezing causes",
      "Combined with treatment for the underlying acne rather than offered alone",
    ],
    procedure: [
      {
        title: "Skin assessment",
        body: "The doctor examines the skin and decides which lesions are appropriate to extract — inflamed lesions are left alone.",
      },
      {
        title: "Preparation",
        body: "The skin is cleaned and prepared so blockages loosen and can be cleared with less pressure.",
      },
      {
        title: "Extraction",
        body: "Sterile instruments are used to clear suitable comedones with controlled pressure.",
      },
      {
        title: "Soothing and protection",
        body: "Calming agents and sunscreen are applied and aftercare explained.",
      },
      {
        title: "Ongoing acne plan",
        body: "Extraction is paired with treatment for the acne itself, since it does nothing to prevent new lesions.",
      },
    ],
    precautions: [
      "Expect redness for some hours afterwards; it settles",
      "Do not apply makeup for the period the doctor specifies",
      "Sun protection afterwards, since freshly treated skin marks more easily",
      "Do not attempt extraction at home between sessions — this is the main cause of post-acne marks",
      "Report persistent swelling or a lesion that becomes painful",
    ],
    consultationApproach:
      "Extraction is offered as part of an acne plan, not as a standalone facial. The doctor will treat the acne itself alongside it.",
    whatToExpect:
      "A session of an hour or less with short-lived redness. Repeat sessions are spaced according to how quickly your skin congests.",
    faqs: [
      {
        question: "Why can't I just squeeze them myself?",
        answer:
          "Uncontrolled pressure with unsterile hands drives material deeper into the skin, causing inflammation, infection and the dark marks and scars that are much harder to treat than the original blackhead.",
      },
      {
        question: "Will blackheads come back?",
        answer:
          "Extraction clears what is there now. New comedones will form unless the underlying acne tendency is treated — which is why the two go together.",
      },
      {
        question: "Is it painful?",
        answer:
          "There is brief discomfort, more so on the nose. Properly prepared skin releases blockages with far less pressure than home squeezing requires.",
      },
    ],
    searchTerms: ["blackhead removal", "comedone extraction", "whitehead", "facial cleanup", "pore cleaning"],
    relatedSlugs: ["chemical-peel", "hydra-facial", "customized-facials"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "skin-cancer-screening",
    name: "Skin Examination & Referral",
    category: "skin",
    shortDescription: "Examination of a concerning mole or lesion, with prompt referral where anything is suspicious.",
    metaDescription:
      "Skin lesion examination in Sikar — assessment of moles and changing skin lesions with onward referral where needed, at Aura Cure Clinic.",
    alsoKnownAs: ["mole check", "skin cancer screening", "lesion examination", "mole assessment"],
    overview:
      "This is an examination of a mole or skin lesion you are concerned about, together with clear advice on what to do next. Where anything about a lesion is suspicious, the correct action is prompt referral to a dermatologist or oncologist for definitive assessment and biopsy — not treatment here. This service exists so that a worrying lesion gets looked at quickly rather than waited on.",
    howItWorks:
      "The doctor examines the lesion against the features that raise concern: asymmetry, irregular borders, colour variation, size, and — most importantly — change over time. Bleeding, itching, ulceration or a lesion that behaves differently from your others all matter. If any of these are present, you are referred onward without delay. A definitive diagnosis of skin cancer requires biopsy and histopathology, which is done by the specialist service, not here.",
    suitableFor: [
      "A mole that has changed in size, shape or colour",
      "A new lesion in an adult, particularly one that looks unlike your others",
      "A sore or lesion that bleeds, itches or does not heal",
      "Anyone who simply wants a worrying lesion looked at rather than ignored",
    ],
    notSuitableFor: [
      "Anyone with an already-diagnosed skin cancer — you should be under specialist care, not starting here",
      "Anyone seeking treatment of a diagnosed malignancy; this clinic does not provide oncological treatment",
    ],
    benefits: [
      "A concerning lesion gets examined promptly rather than watched indefinitely",
      "Clear advice on whether onward referral is needed and how urgently",
      "Removes the uncertainty that stops people acting on a lesion they are worried about",
    ],
    procedure: [
      {
        title: "History of the lesion",
        body: "When you noticed it, whether it has changed, and how it differs from your other moles. Change over time is the single most important feature.",
      },
      {
        title: "Examination",
        body: "The doctor examines the lesion's size, shape, border, colour and surface, and looks at surrounding skin.",
      },
      {
        title: "Decision",
        body: "One of three outcomes: clearly benign with reassurance, worth monitoring with a defined review point, or referral for specialist assessment.",
      },
      {
        title: "Referral where indicated",
        body: "Where anything is suspicious you are referred promptly to a dermatologist or oncologist for biopsy and definitive diagnosis.",
      },
    ],
    precautions: [
      "This examination does not diagnose or exclude skin cancer — only a biopsy can do that",
      "Do not delay a specialist appointment on the basis of reassurance from any single examination",
      "A lesion that bleeds, ulcerates or does not heal needs to be seen promptly, not at a routine visit",
      "Do not attempt to remove, burn or apply anything to a lesion you are worried about",
      "If you have been advised to see a specialist, go — this clinic does not provide cancer treatment",
    ],
    consultationApproach:
      "The doctor's role here is examination and triage. Where there is any doubt, the answer is referral rather than reassurance — and you will be told plainly which of those applies.",
    whatToExpect:
      "A focused examination and a clear recommendation. Where referral is indicated it is made promptly, and you should follow it.",
    clinicalNotes:
      "Definitive diagnosis of any skin malignancy requires biopsy and histopathological examination by a specialist service. This examination is a triage step, not a diagnostic one.",
    faqs: [
      {
        question: "Can you tell me whether it is cancer?",
        answer:
          "No examination can. Only a biopsy examined under a microscope gives a definitive answer. What this visit does is determine whether that biopsy needs to happen, and how urgently.",
      },
      {
        question: "What should make me come in?",
        answer:
          "A mole that has changed, a new lesion that looks unlike your others, or any sore that bleeds, itches or fails to heal. Change over time is the most important signal.",
      },
      {
        question: "Does the clinic treat skin cancer?",
        answer:
          "No. Suspected or confirmed malignancy is referred to a dermatologist or oncologist. This clinic does not provide oncological treatment.",
      },
      {
        question: "Is it worth coming if I am probably worrying over nothing?",
        answer:
          "Yes. Most lesions people worry about turn out to be benign, and having that confirmed is worthwhile. The ones that are not benign are the reason not to wait.",
      },
    ],
    searchTerms: ["mole check", "skin cancer", "changing mole", "skin lesion", "mole examination", "til"],
    relatedSlugs: ["skin-tag-removal"],
    lastUpdated: "2026-09-02",
  },
];
