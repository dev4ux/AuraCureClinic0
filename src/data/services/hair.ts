import type { ServiceContent } from "@/lib/types";

/**
 * Hair and scalp services.
 *
 * Hair Fall Treatment and Hair Loss Consultation are deliberately NOT here —
 * they are medical concerns, and live in conditions.ts with the rest of the
 * clinical content. This file is procedures only.
 */
export const hairServices: ServiceContent[] = [
  {
    slug: "hair-gfc",
    name: "Hair GFC",
    category: "hair",
    shortDescription: "Growth factor concentrate therapy for the scalp, considered for selected cases of thinning.",
    metaDescription:
      "Hair GFC (Growth Factor Concentrate) at Aura Cure Clinic, Sikar — what it is, how it works, who it suits, the procedure and precautions. Consultation with Dr. Nitin Sharma.",
    alsoKnownAs: ["Growth Factor Concentrate", "GFC therapy"],
    overview:
      "GFC — Growth Factor Concentrate — is a preparation made from a small sample of your own blood, processed to concentrate the growth factors that platelets release. It is introduced into the scalp in the areas being treated. It is one of several options a doctor may consider for hair thinning, and is not a replacement for identifying why hair is being lost in the first place.",
    howItWorks:
      "Platelets carry proteins that the body uses in normal tissue repair and signalling. GFC preparation releases and concentrates those growth factors into a plasma fraction, which is then placed into the scalp at the level of the follicles. The intention is to support the follicular environment in areas where hair has thinned but follicles are still present. Where follicles are no longer viable, no injectable preparation will restore them — which is why the scalp assessment before treatment matters more than the procedure itself.",
    suitableFor: [
      "Early to moderate thinning where follicles are still present, confirmed on scalp examination",
      "Patients whose underlying cause — nutritional, hormonal, thyroid, post-illness — is being investigated or addressed alongside",
      "Patients able to attend a course of sessions rather than expecting a single visit to be sufficient",
    ],
    notSuitableFor: [
      "Areas of long-standing complete baldness where follicles are no longer present",
      "Active scalp infection or inflammation at the treatment site, until it settles",
      "Known platelet, clotting or bleeding disorders, or current blood-thinning medication, unless cleared",
      "Pregnancy and breastfeeding — deferred rather than refused",
    ],
    benefits: [
      "Used to support hair density in areas of active thinning, alongside treating the underlying cause",
      "Uses a preparation derived from your own blood, so there is no donor or synthetic material introduced",
      "Sessions are short and do not require hospital admission or general anaesthesia",
    ],
    procedure: [
      {
        title: "Scalp assessment",
        body: "The doctor examines the scalp and hair pattern, reviews your history and any blood work, and confirms whether GFC is a reasonable option for your case — or whether something else should be addressed first.",
      },
      {
        title: "Blood sample",
        body: "A small sample of blood is drawn, as it would be for a routine test.",
      },
      {
        title: "Preparation",
        body: "The sample is processed in-clinic to separate and concentrate the growth factor fraction. This takes a short time while you wait.",
      },
      {
        title: "Scalp application",
        body: "The preparation is introduced into the treatment areas of the scalp using fine needles. A topical numbing agent may be applied beforehand.",
      },
      {
        title: "Review and next session",
        body: "You are reviewed between sessions so response can be assessed and the plan adjusted rather than run to a fixed script.",
      },
    ],
    precautions: [
      "Tell the doctor about all medication, particularly blood thinners, aspirin and anti-inflammatories",
      "Mild tenderness, redness or swelling of the scalp for a day or two afterwards is common",
      "Avoid hair colouring, chemical treatments and vigorous scalp massage for a few days after a session",
      "Do not expect a visible change after one session — response, where it occurs, is gradual",
      "Any procedure involving needles carries a small risk of infection or bruising; report unusual pain or discharge",
    ],
    consultationApproach:
      "The doctor reviews the pattern of loss, how long it has been going on, family history, diet, thyroid and iron status where relevant, and any recent illness or medication. GFC is only offered where the assessment supports it.",
    whatToExpect:
      "A short in-clinic visit. Any change develops gradually and is assessed over a course of sessions rather than after one, and the doctor will give you a realistic expectation for your specific case before you start.",
    clinicalNotes:
      "Typically discussed as a course of sessions spaced several weeks apart, with the exact number decided after assessment. Response varies between individuals and is not guaranteed.",
    faqs: [
      {
        question: "How is GFC different from PRP?",
        answer:
          "Both start from your own blood. PRP uses the platelet-rich plasma fraction directly; GFC is processed further to release and concentrate the growth factors from those platelets. The doctor will explain which is being suggested for your case and why.",
      },
      {
        question: "Is it painful?",
        answer:
          "Most patients describe it as uncomfortable rather than painful. A topical numbing agent can be applied to the scalp beforehand.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "That depends on the extent of thinning and how you respond. It is discussed after the initial scalp assessment, not quoted in advance.",
      },
      {
        question: "Will my hair definitely grow back?",
        answer:
          "No procedure can promise that. Where follicles are no longer viable, hair will not return from any injectable treatment. The doctor will tell you honestly what is realistic for your scalp.",
      },
    ],
    searchTerms: ["gfc", "growth factor concentrate", "hair gfc", "gfc treatment", "hair growth injection"],
    relatedSlugs: ["hair-prp", "hair-mesotherapy", "scalp-microneedling"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "hair-prp",
    name: "Hair PRP",
    category: "hair",
    shortDescription: "Platelet-rich plasma introduced into the scalp, considered for selected cases of thinning.",
    metaDescription:
      "Hair PRP therapy at Aura Cure Clinic, Sikar — how platelet-rich plasma works for hair thinning, who it suits, the procedure, precautions and FAQs.",
    alsoKnownAs: ["Platelet-Rich Plasma", "PRP for hair", "hair PRP injection"],
    overview:
      "PRP uses a concentrated portion of your own blood — the plasma fraction richest in platelets — reintroduced into the scalp. It is considered for certain patterns of hair thinning as part of a wider plan, not as a standalone answer to hair loss.",
    howItWorks:
      "A blood sample is spun so its components separate by density. The platelet-rich layer is drawn off and placed into the scalp around the follicles. Platelets release signalling proteins involved in normal tissue repair; the intention is to support follicles that have thinned but are still active. It does not create new follicles where none remain.",
    suitableFor: [
      "Diffuse or patterned thinning where the scalp examination shows viable follicles",
      "Patients whose contributing factors — iron, thyroid, hormonal, stress, post-illness — are being addressed in parallel",
      "Patients who understand this is a course of sessions with a gradual, variable response",
    ],
    notSuitableFor: [
      "Areas of established, long-standing baldness with no remaining follicles",
      "Active scalp infection, inflammation or unhealed injury at the site",
      "Platelet or clotting disorders, or ongoing anticoagulant medication, unless specifically cleared",
      "Pregnancy and breastfeeding — usually deferred",
    ],
    benefits: [
      "Used to support existing follicles in areas of active thinning",
      "Derived entirely from your own blood, with no synthetic filler or donor material",
      "An outpatient procedure with no admission and a short in-clinic visit",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The doctor examines the scalp, reviews history and relevant blood work, and confirms whether PRP is appropriate for your pattern of loss.",
      },
      {
        title: "Blood draw",
        body: "A small sample of blood is taken, as for a routine test.",
      },
      {
        title: "Separation",
        body: "The sample is centrifuged in-clinic to separate the platelet-rich plasma from the other blood components.",
      },
      {
        title: "Scalp application",
        body: "The plasma is introduced into the treatment area with fine needles, usually after a topical numbing agent.",
      },
      {
        title: "Follow-up",
        body: "Response is reviewed between sessions and the plan adjusted where needed.",
      },
    ],
    precautions: [
      "Disclose all medication, especially blood thinners, aspirin and anti-inflammatories",
      "Scalp tenderness, mild swelling or redness for a day or two afterwards is common",
      "Avoid chemical hair treatments and harsh scalp handling for a few days after each session",
      "Small risk of bruising or infection at needle sites — report unusual pain, swelling or discharge",
      "Sessions are usually spaced several weeks apart; the schedule is set at consultation",
    ],
    consultationApproach:
      "The doctor first establishes why hair is being lost. PRP is offered only where the underlying picture and the scalp examination support it, and alongside — not instead of — addressing any correctable cause.",
    whatToExpect:
      "A short in-clinic procedure involving a blood draw, preparation and localised application. Where response occurs it develops gradually and is assessed across a course of sessions.",
    clinicalNotes:
      "Usually planned as a course, with intervals and total number decided after assessment. Individual response varies and no specific outcome is guaranteed.",
    faqs: [
      {
        question: "Is PRP guaranteed to work?",
        answer:
          "No. No aesthetic or trichological procedure can guarantee a specific outcome. Response varies between individuals, and the doctor will set a realistic expectation for your case at consultation.",
      },
      {
        question: "Can I go back to work the same day?",
        answer:
          "Usually yes. The scalp may be tender for a day or so. The doctor will tell you what to avoid immediately afterwards.",
      },
      {
        question: "Do I need to stop any medicines before the session?",
        answer:
          "Possibly — blood thinners and anti-inflammatories are the usual concern. Bring a full list of what you take to the consultation and the doctor will advise.",
      },
    ],
    searchTerms: ["prp", "platelet rich plasma", "hair prp", "prp for hair fall", "prp injection hair"],
    relatedSlugs: ["hair-gfc", "hair-mesotherapy", "low-level-light-therapy"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "hair-mesotherapy",
    name: "Hair Mesotherapy",
    category: "hair",
    shortDescription: "Micro-delivery of a prepared solution into the scalp, considered alongside other hair care.",
    metaDescription:
      "Hair mesotherapy at Aura Cure Clinic, Sikar — what it is, how it works, who it suits, the procedure, precautions and answers to common questions.",
    alsoKnownAs: ["scalp mesotherapy", "meso for hair"],
    overview:
      "Mesotherapy delivers a prepared solution into the superficial layers of the scalp using very fine needles. The composition is selected by the doctor for the individual case. It is used as a supporting measure within a hair care plan rather than as a primary treatment for hair loss.",
    howItWorks:
      "Rather than relying on a product applied to the surface, mesotherapy places small amounts of the solution directly into the scalp tissue near the follicles. The intent is local delivery to the area being treated. What is used, and whether it is appropriate at all, depends entirely on what the assessment finds.",
    suitableFor: [
      "Selected cases of thinning or poor scalp condition, decided after examination",
      "Patients already being assessed or treated for an identified underlying cause",
      "Patients comfortable with a course of short, repeated sessions",
    ],
    notSuitableFor: [
      "Active scalp infection, open lesions or inflamed skin at the site",
      "Known allergy to any component of the prepared solution",
      "Bleeding or clotting disorders, or anticoagulant use, unless cleared",
      "Pregnancy and breastfeeding — usually deferred",
    ],
    benefits: [
      "Delivers the selected preparation locally to the scalp area being treated",
      "Sessions are brief and performed in the clinic without admission",
      "Composition is chosen case by case rather than applied as a fixed formula",
    ],
    procedure: [
      {
        title: "Scalp and history review",
        body: "The doctor examines the scalp, discusses the pattern and duration of the problem, and checks for anything that would make the procedure unsuitable — including allergies.",
      },
      {
        title: "Preparation selection",
        body: "The solution is selected for your case and the treatment area is cleaned.",
      },
      {
        title: "Application",
        body: "Very fine needles are used to place small amounts across the treatment area. Most patients describe brief, tolerable discomfort.",
      },
      {
        title: "Aftercare and review",
        body: "You are given specific aftercare instructions and a review point to assess whether to continue.",
      },
    ],
    precautions: [
      "Tell the doctor about any allergy, including to medicines, vitamins and topical products",
      "Temporary redness, tenderness or small marks at the injection points are common and settle",
      "Avoid washing the hair, swimming and heavy sweating for the period the doctor specifies",
      "Avoid chemical hair treatments for several days afterwards",
      "Report persistent pain, spreading redness or discharge",
    ],
    consultationApproach:
      "Mesotherapy is not offered as a default. The doctor assesses the scalp and the wider picture first, and will say plainly if the problem is better addressed another way.",
    whatToExpect:
      "A short in-clinic session repeated at intervals. Any change is gradual and assessed over the course, not judged after one visit.",
    faqs: [
      {
        question: "Does mesotherapy hurt?",
        answer:
          "The needles are very fine and go only into the superficial scalp. Most patients find it uncomfortable rather than painful, and a numbing agent can be used.",
      },
      {
        question: "How is it different from PRP or GFC?",
        answer:
          "PRP and GFC use preparations made from your own blood. Mesotherapy uses a solution the doctor selects. They address different situations, and the doctor will explain which — if either — suits your case.",
      },
      {
        question: "How soon will I see a difference?",
        answer:
          "Not immediately. Any response develops over a course of sessions and varies between individuals. No timeline can be promised.",
      },
    ],
    searchTerms: ["mesotherapy", "hair mesotherapy", "scalp mesotherapy", "meso hair treatment"],
    relatedSlugs: ["hair-prp", "hair-gfc", "scalp-microneedling"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "scalp-microneedling",
    name: "Scalp Microneedling",
    category: "hair",
    shortDescription: "Controlled micro-punctures of the scalp, used to support other hair treatments.",
    metaDescription:
      "Scalp microneedling at Aura Cure Clinic, Sikar — how it works, who it is considered for, the procedure, aftercare and precautions.",
    alsoKnownAs: ["derma roller for hair", "scalp needling", "collagen induction for scalp"],
    overview:
      "Scalp microneedling uses a device with very fine needles to create controlled micro-punctures in the scalp. It is generally used to support other treatments rather than on its own, and is always preceded by an assessment of why hair is thinning.",
    howItWorks:
      "The controlled micro-injuries trigger the skin's ordinary wound-healing response in the treated area. In practice it is most often used alongside a topical or injected preparation, on the basis that the micro-channels aid local delivery. It does not address a nutritional, hormonal or thyroid cause of hair loss — those have to be treated separately.",
    suitableFor: [
      "Selected cases of thinning where the scalp is otherwise healthy",
      "Patients combining it with another treatment as part of a planned course",
      "Patients whose underlying cause is being investigated or managed in parallel",
    ],
    notSuitableFor: [
      "Active scalp infection, inflammation, psoriasis or eczema in the treatment area",
      "A tendency to keloid or hypertrophic scarring",
      "Bleeding or clotting disorders, or anticoagulant use, unless cleared",
      "Recent isotretinoin use — usually deferred; tell the doctor if you have taken it",
    ],
    benefits: [
      "Used as a supporting step within a wider hair treatment plan",
      "Short in-clinic session with no admission required",
      "Depth and area are set by the doctor for the individual scalp rather than fixed",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The scalp is examined for infection, inflammation and follicle viability, and your history is reviewed for anything that makes needling unsuitable.",
      },
      {
        title: "Preparation",
        body: "The scalp is cleaned and a topical numbing agent is usually applied and given time to work.",
      },
      {
        title: "Needling pass",
        body: "The device is passed over the treatment area at a depth the doctor sets. Any accompanying preparation is applied as planned.",
      },
      {
        title: "Aftercare",
        body: "The scalp is cleaned and you are given specific instructions for the next few days.",
      },
    ],
    precautions: [
      "Redness and mild sensitivity for a day or two is expected",
      "Do not wash the hair, swim, or sweat heavily for the period the doctor specifies",
      "Avoid direct sun on the scalp and use a hat if you must be outdoors",
      "Do not use a home derma roller between sessions unless the doctor has specifically instructed it — depth and hygiene are where home use goes wrong",
      "Report spreading redness, pus or fever",
    ],
    consultationApproach:
      "The doctor establishes the cause of thinning first. Microneedling is offered only where the scalp is suitable and it adds something to the overall plan.",
    whatToExpect:
      "A short session with brief downtime. It is normally repeated at intervals as part of a course, with response assessed across that course.",
    faqs: [
      {
        question: "Can I use a derma roller at home instead?",
        answer:
          "Home rollers are where most problems arise — wrong depth, poor sterilisation and over-frequent use can damage the scalp or introduce infection. If you already use one, tell the doctor.",
      },
      {
        question: "Will it work by itself?",
        answer:
          "It is generally used to support other treatment, not as a standalone answer to hair loss. Whatever is causing the loss still needs to be addressed.",
      },
      {
        question: "Is there any downtime?",
        answer: "The scalp is usually red and sensitive for a day or two. Most people return to normal routine the same day.",
      },
    ],
    searchTerms: ["microneedling", "scalp microneedling", "derma roller", "dermaroller hair", "scalp needling"],
    relatedSlugs: ["hair-mesotherapy", "hair-prp", "microneedling"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "female-hair-loss-treatment",
    name: "Female Hair Loss Treatment",
    category: "hair",
    shortDescription: "Assessment and treatment of hair loss in women, where the cause often differs from men.",
    metaDescription:
      "Female hair loss treatment in Sikar — assessment of thinning in women including hormonal, thyroid, iron and post-partum causes, at Aura Cure Clinic.",
    alsoKnownAs: ["female pattern hair loss", "hair thinning in women", "women's hair fall"],
    overview:
      "Hair loss in women frequently has a different pattern and a different set of causes than in men — diffuse thinning over the crown with a preserved hairline is common, and hormonal, thyroid, iron and post-partum factors are frequently involved. This service is the assessment and treatment of that picture specifically.",
    howItWorks:
      "The work is diagnostic before it is procedural. The doctor establishes the pattern of loss and looks for the causes that are common and correctable in women — iron deficiency, thyroid dysfunction, PCOS and other hormonal factors, post-partum shedding, crash dieting, recent illness, and the effect of chronic stress. Treatment then follows what is found: a correctable deficiency is corrected, a hormonal picture is addressed, and procedural options are considered only where they add something.",
    suitableFor: [
      "Women noticing increased shedding, a widening parting or reduced ponytail thickness",
      "Post-partum hair shedding that is not settling as expected",
      "Thinning alongside PCOS, thyroid disease, anaemia or a recent illness",
      "Women who have tried products without an assessment of the underlying cause",
    ],
    benefits: [
      "Starts with identifying why hair is being lost, rather than treating the symptom",
      "Investigates the causes that are common and correctable in women specifically",
      "Combines constitutional homeopathic treatment with procedural options where appropriate",
    ],
    procedure: [
      {
        title: "Detailed history",
        body: "Menstrual and hormonal history, pregnancy and post-partum timeline, diet, recent illness, medication, family history and stress — all of which change what the likely cause is.",
      },
      {
        title: "Scalp and hair examination",
        body: "The doctor examines the pattern of thinning, the hairline, the parting and the scalp itself.",
      },
      {
        title: "Investigations where indicated",
        body: "Blood work may be suggested — commonly iron studies, thyroid function and hormonal markers — where the history points that way.",
      },
      {
        title: "Individualised plan",
        body: "Treatment is built around what the assessment finds, and may combine correcting a deficiency, constitutional homeopathic treatment, and a procedural option where it is appropriate.",
      },
      {
        title: "Review",
        body: "Hair responds slowly. Follow-up is scheduled to track change and adjust the plan.",
      },
    ],
    precautions: [
      "Bring any recent blood reports and a list of all medication and supplements to the first visit",
      "Tell the doctor if you are pregnant, breastfeeding or planning pregnancy — this changes what is appropriate",
      "Hair cycles are slow; a meaningful assessment of response takes months, not weeks",
      "Sudden, patchy or rapid loss should be seen promptly rather than waited out",
    ],
    consultationApproach:
      "An unhurried first consultation. Hair loss in women is usually multi-factorial, and the history is where most of the answer comes from — which is why the first visit is a conversation rather than a procedure.",
    whatToExpect:
      "A detailed first consultation, possible investigations, and a plan reviewed over months. Where a correctable cause is found and addressed, that is usually the most important part of the outcome.",
    clinicalNotes:
      "Post-partum shedding often settles on its own over several months; the value of assessment is confirming that and ruling out a coexisting deficiency, not necessarily treating it aggressively.",
    faqs: [
      {
        question: "My hair started falling after delivery. Is that normal?",
        answer:
          "Increased shedding a few months after delivery is a recognised pattern and often settles on its own. It is still worth an assessment — post-partum shedding and iron deficiency frequently occur together, and one is correctable.",
      },
      {
        question: "Do I need blood tests?",
        answer:
          "Often, yes. Iron studies and thyroid function are common, with hormonal tests where the history suggests it. The doctor will only suggest what is relevant to your case.",
      },
      {
        question: "How long before I see improvement?",
        answer:
          "Hair grows slowly, and any treatment is assessed over months rather than weeks. The doctor will give you a realistic timeline for your specific situation.",
      },
      {
        question: "Is this different from treatment for men?",
        answer:
          "Often, yes — the pattern of loss and the likely causes differ, so the assessment and the plan differ too.",
      },
    ],
    searchTerms: [
      "female hair loss",
      "women hair fall",
      "hair thinning women",
      "postpartum hair loss",
      "hair fall after delivery",
      "female pattern baldness",
    ],
    relatedSlugs: ["hair-density-improvement", "hair-prp", "hair-gfc"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "hair-density-improvement",
    name: "Hair Density Improvement",
    category: "hair",
    shortDescription: "A combined plan for thinning density, built around what the scalp assessment finds.",
    metaDescription:
      "Hair density improvement at Aura Cure Clinic, Sikar — assessment of thinning density and a combined treatment plan. Consultation with Dr. Nitin Sharma.",
    alsoKnownAs: ["hair thickening", "hair volume treatment", "thinning hair treatment"],
    overview:
      "This is not a single procedure but a planned combination — the clinic's approach where the concern is reduced density rather than a defined patch or a specific scalp disease. What goes into the plan depends entirely on what the assessment finds.",
    howItWorks:
      "Density falls for different reasons: follicles miniaturising under hormonal influence, a nutritional or thyroid cause pushing more hairs into the shedding phase, scalp inflammation, or a combination. The assessment separates these, because they respond to different things. The plan then combines what is appropriate — correcting a deficiency, constitutional homeopathic treatment, scalp care, and a procedural option such as PRP or GFC where the follicles justify it.",
    suitableFor: [
      "Gradual thinning across the scalp rather than a defined bald patch",
      "Patients who want the cause investigated rather than a single procedure sold to them",
      "Patients able to commit to a plan reviewed over months",
    ],
    notSuitableFor: [
      "Areas of complete, long-standing baldness — no plan restores follicles that are gone",
      "Patients seeking a guaranteed result or a fixed timeline",
    ],
    benefits: [
      "Addresses the cause of reduced density rather than only the appearance",
      "Combines medical and procedural options rather than defaulting to one",
      "Reviewed and adjusted over time rather than sold as a fixed package",
    ],
    procedure: [
      {
        title: "Scalp assessment",
        body: "The doctor examines the scalp and the pattern of thinning to establish how much follicular activity remains and where.",
      },
      {
        title: "Cause investigation",
        body: "History and, where indicated, blood work to identify nutritional, thyroid, hormonal or illness-related contributors.",
      },
      {
        title: "Plan construction",
        body: "The combination is decided for your case — which may include internal treatment, scalp care and a procedural option, or may deliberately include no procedure at all.",
      },
      {
        title: "Staged review",
        body: "Progress is assessed at intervals and the plan changed based on response rather than run to a script.",
      },
    ],
    precautions: [
      "Bring previous reports, prescriptions and details of any treatment already tried",
      "Density changes slowly — judging a plan before a few months have passed is premature",
      "Be cautious of anything promising guaranteed regrowth in a fixed number of sittings",
      "Tell the doctor about pregnancy, breastfeeding or planned pregnancy",
    ],
    consultationApproach:
      "The first visit is diagnostic. The doctor will say plainly which parts of the scalp are likely to respond and which are not, before any plan is agreed.",
    whatToExpect:
      "A detailed assessment, an individualised plan, and review over months. Where follicles are still viable there is something to work with; where they are not, the doctor will tell you.",
    faqs: [
      {
        question: "Is this one treatment or several?",
        answer:
          "It is a plan, not a single procedure. What it contains depends on the assessment — sometimes it includes a procedure, sometimes correcting a deficiency and constitutional treatment is the whole of it.",
      },
      {
        question: "Can lost density come back completely?",
        answer:
          "Where follicles are miniaturised but present, there is something to work with. Where they are gone, no treatment restores them. The doctor will tell you which applies to your scalp.",
      },
      {
        question: "How long does it take?",
        answer:
          "Hair cycles are measured in months. Any honest assessment of a plan needs that long, and the doctor will set the review points at the start.",
      },
    ],
    searchTerms: ["hair density", "hair thickening", "hair volume", "thin hair treatment", "increase hair density"],
    relatedSlugs: ["hair-prp", "hair-gfc", "female-hair-loss-treatment"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "low-level-light-therapy",
    name: "Low-Level Light Therapy (LLLT)",
    category: "hair",
    shortDescription: "Low-intensity light applied to the scalp, used as a supporting measure in a hair plan.",
    metaDescription:
      "Low-level light therapy (LLLT) for hair at Aura Cure Clinic, Sikar — what it is, how it works, who it suits, the procedure and precautions.",
    alsoKnownAs: ["LLLT", "red light therapy for hair", "laser comb", "photobiomodulation"],
    overview:
      "LLLT applies low-intensity light to the scalp. It does not cut, heat or remove tissue — the intensity is far below that of a surgical or hair-removal laser. It is used as a supporting measure within a hair care plan rather than as a primary treatment.",
    howItWorks:
      "Low-intensity light in specific wavelengths is applied to the scalp over a set exposure time. The proposed mechanism is an effect on cellular activity in the treated tissue rather than any physical alteration of the follicle. Because the effect is subtle and cumulative, it is used repeatedly over a course and alongside other measures, not as a one-off.",
    suitableFor: [
      "Early to moderate thinning with follicles still present",
      "Patients looking for a non-invasive addition to an existing plan",
      "Patients who cannot or prefer not to undergo needle-based procedures",
    ],
    notSuitableFor: [
      "Active scalp disease, infection or unexplained scalp lesions until assessed",
      "Patients taking medication that causes light sensitivity — tell the doctor what you take",
      "Areas of established baldness with no remaining follicles",
    ],
    benefits: [
      "Non-invasive, with no needles, no bleeding and no downtime",
      "Can be combined with other treatments in the same plan",
      "Sessions are short and painless",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The scalp is examined and your medication reviewed for anything causing light sensitivity.",
      },
      {
        title: "Session setup",
        body: "The device is positioned over the treatment area and eye protection provided where required.",
      },
      {
        title: "Exposure",
        body: "The scalp is exposed for a set time. The session is painless and you can sit through it comfortably.",
      },
      {
        title: "Course and review",
        body: "Sessions are repeated at the interval the doctor sets, with response reviewed across the course.",
      },
    ],
    precautions: [
      "Tell the doctor about any medication or condition that causes light sensitivity",
      "Use eye protection where the doctor provides it",
      "Do not substitute LLLT for investigating the cause of hair loss",
      "Be sceptical of home devices promising rapid regrowth — discuss any you own with the doctor",
    ],
    consultationApproach:
      "LLLT is offered as part of a plan, not as a standalone answer. The doctor will be clear about what it is expected to contribute in your case.",
    whatToExpect:
      "Short, painless, repeated sessions. Any effect is gradual and assessed over the course alongside the rest of the plan.",
    faqs: [
      {
        question: "Is this the same as laser hair removal?",
        answer:
          "No — the opposite intent and a very different intensity. Hair-removal lasers deliver enough energy to damage the follicle; LLLT is low-intensity and does not.",
      },
      {
        question: "Does it hurt?",
        answer: "No. There is no heat sensation of note and no downtime.",
      },
      {
        question: "Can I just buy a laser comb online?",
        answer:
          "Home devices vary enormously in output and quality. If you have one or are considering one, bring the details to the consultation rather than relying on the marketing.",
      },
    ],
    searchTerms: ["lllt", "low level light therapy", "red light therapy hair", "laser comb", "light therapy hair"],
    relatedSlugs: ["hair-prp", "hair-density-improvement", "hair-gfc"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "non-surgical-hair-replacement",
    name: "Non-Surgical Hair Replacement",
    category: "hair",
    shortDescription: "A custom hair system fitted to the scalp — a cosmetic option, not a medical treatment.",
    metaDescription:
      "Non-surgical hair replacement at Aura Cure Clinic, Sikar — how a hair system works, who it suits, fitting, maintenance and honest limitations.",
    alsoKnownAs: ["hair system", "hair patch", "hair bonding", "hair wig fitting", "hair weaving"],
    overview:
      "A hair system is a custom-made hair unit fitted to the scalp to cover an area of loss. It is a cosmetic solution, not a medical treatment — it does not affect the follicles underneath or change why hair was lost. It is usually considered where the loss is established and regrowth is not realistic.",
    howItWorks:
      "A unit is made to match your hair colour, texture, density and the shape of the area being covered. It is attached to the scalp using an adhesive or clip method and blended with your existing hair. The result is immediate, which is the main reason patients choose it — but it requires ongoing maintenance and periodic refitting, and the underlying scalp still needs care.",
    suitableFor: [
      "Established loss where regrowth is not a realistic expectation",
      "Patients who want an immediate cosmetic result rather than a months-long treatment course",
      "Patients who understand and accept the maintenance commitment",
    ],
    notSuitableFor: [
      "Active scalp infection, inflammation or unhealed skin in the fitting area",
      "Known allergy to the adhesives used — patch testing should be discussed",
      "Patients who have not yet had the cause of their hair loss assessed, where it may be treatable",
    ],
    benefits: [
      "An immediate change in appearance, without surgery or a treatment course",
      "Made to match your own hair colour, texture and density",
      "Reversible — it can be removed, unlike a surgical option",
    ],
    procedure: [
      {
        title: "Assessment and expectations",
        body: "The doctor first checks whether the loss is genuinely established, and whether medical treatment should be tried before a cosmetic solution.",
      },
      {
        title: "Matching and measurement",
        body: "The area is measured and hair colour, texture, density and pattern are matched so the unit blends with existing hair.",
      },
      {
        title: "Fitting",
        body: "The scalp is prepared and the unit attached by the agreed method, then cut and styled to blend.",
      },
      {
        title: "Care instructions",
        body: "You are shown how to wash, handle and maintain the system, and told when it needs servicing.",
      },
      {
        title: "Maintenance visits",
        body: "Systems require periodic re-attachment and eventual replacement. The schedule is set at fitting.",
      },
    ],
    precautions: [
      "The scalp underneath still needs cleaning and inspection — poor hygiene under a system causes problems",
      "Adhesive reactions can occur; report itching, redness or soreness rather than continuing",
      "This is cosmetic and does nothing for the follicles — if your loss is treatable, treat it first",
      "Maintenance is ongoing and has a recurring cost; ask about this before committing",
      "Tell the doctor if you have a scalp condition such as psoriasis or seborrheic dermatitis",
    ],
    consultationApproach:
      "The doctor will first establish whether medical treatment has been given a fair trial. A hair system is offered where loss is established, not as a shortcut past assessment.",
    whatToExpect:
      "An immediate visible change, followed by a maintenance routine. The doctor will be direct about what a system can and cannot do before anything is fitted.",
    faqs: [
      {
        question: "Will it damage the hair I still have?",
        answer:
          "It should not if it is properly fitted and maintained, and if the scalp underneath is kept clean. Poorly maintained systems and inappropriate attachment methods can cause problems — which is why the maintenance schedule matters.",
      },
      {
        question: "Can people tell?",
        answer:
          "A well-matched and well-maintained system is difficult to detect in normal circumstances. Matching and upkeep are what determine that.",
      },
      {
        question: "Should I try treatment first?",
        answer:
          "If your loss is recent, patchy, or has a cause that has not been investigated, yes. A system covers the appearance; it does not treat the reason.",
      },
      {
        question: "How often does it need servicing?",
        answer:
          "Systems need periodic re-attachment and eventual replacement. The exact interval depends on the attachment method and is explained at fitting.",
      },
    ],
    searchTerms: [
      "hair patch",
      "hair system",
      "non surgical hair replacement",
      "hair wig",
      "hair bonding",
      "hair weaving",
    ],
    relatedSlugs: ["hair-density-improvement", "hair-prp"],
    lastUpdated: "2026-09-02",
  },
];
