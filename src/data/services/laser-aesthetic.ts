import type { ServiceContent } from "@/lib/types";

/** Laser and aesthetic procedures performed in-clinic. */
export const laserAestheticServices: ServiceContent[] = [
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "laser-aesthetic",
    shortDescription: "Laser-based hair reduction for selected areas, planned as a course of sessions.",
    metaDescription:
      "Laser hair removal at Aura Cure Clinic, Sikar — how it works, which areas are treated, session planning, aftercare and precautions.",
    alsoKnownAs: ["laser hair reduction", "permanent hair removal", "LHR", "diode laser"],
    overview:
      "Laser hair removal directs light energy at hair follicles to reduce hair growth in a treated area. It is more accurately called hair reduction than removal — the realistic outcome is significantly less hair, finer and slower-growing, rather than total permanent clearance.",
    howItWorks:
      "The laser emits light at a wavelength absorbed by pigment in the hair. That energy converts to heat at the follicle, damaging its ability to produce hair. Because only hairs in the active growth phase respond, and at any moment only a proportion of hairs are in that phase, multiple sessions spaced weeks apart are necessary — a single session treats only the hairs that happen to be growing that day.",
    suitableFor: [
      "Unwanted hair on the face, underarms, arms, legs, chin, upper lip, eyebrows or bikini area",
      "Patients tired of repeated waxing, threading or shaving",
      "Patients with recurrent folliculitis or ingrown hairs from other removal methods",
      "Patients able to commit to a course of sessions and avoid sun between them",
    ],
    notSuitableFor: [
      "Very light, grey or white hair, which contains too little pigment for the laser to target",
      "Active infection, sunburn or recent tanning in the treatment area",
      "Recent isotretinoin use — usually deferred; tell the doctor if you have taken it",
      "Pregnancy — normally deferred",
      "Patients with an untreated hormonal cause of excess hair, which should be investigated first",
    ],
    benefits: [
      "Considered for lasting reduction in hair density and thickness in the treated area",
      "Often reduces the ingrown hairs and folliculitis caused by waxing and shaving",
      "Treats defined areas precisely rather than the whole surface indiscriminately",
    ],
    procedure: [
      {
        title: "Assessment and patch test",
        body: "The doctor assesses skin type, hair colour and the area, and asks about hormonal symptoms. A patch test is usually done before a full session.",
      },
      {
        title: "Preparation",
        body: "The area is shaved and cleaned. Do not wax, thread or pluck beforehand — the follicle needs to be present for the laser to act on it.",
      },
      {
        title: "Session",
        body: "Eye protection is worn and the laser applied across the area. Most patients describe a snapping or hot sensation; cooling is used alongside.",
      },
      {
        title: "Immediate aftercare",
        body: "Soothing agents and sunscreen are applied. Redness and small bumps around follicles for a day are expected.",
      },
      {
        title: "Course of sessions",
        body: "Sessions are repeated at intervals so hairs are caught in their growth phase. Maintenance sessions are usually needed afterwards.",
      },
    ],
    precautions: [
      "Do not wax, thread or pluck between sessions — shave only",
      "Avoid sun exposure and tanning before and after; sunscreen daily on exposed areas",
      "Tell the doctor about isotretinoin, photosensitising medication and any history of pigmentation after injury",
      "Avoid hot baths, saunas, swimming and heavy exercise for the period specified after a session",
      "Report blistering, prolonged pain or unusual pigment change",
      "If you have irregular periods, acne and excess body hair together, ask about hormonal assessment — treating the hair alone misses the cause",
    ],
    consultationApproach:
      "Skin type, hair colour and any hormonal picture are assessed first. Where excess hair points to an underlying hormonal cause, the doctor will address that alongside rather than treating appearance alone.",
    whatToExpect:
      "A course of sessions spaced weeks apart, then occasional maintenance. Realistic expectation is substantial reduction, not guaranteed permanent removal.",
    clinicalNotes:
      "Response depends on hair colour and thickness. Dark, coarse hair responds best; light, fine, grey and white hair respond poorly or not at all.",
    faqs: [
      {
        question: "Is it permanent?",
        answer:
          "It is permanent reduction rather than permanent removal. Most patients see a substantial, lasting decrease in density and thickness, with occasional maintenance sessions afterwards.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Multiple, spaced weeks apart, because only hairs in the active growth phase respond to any one session. The number depends on the area, your hair and your hormonal picture.",
      },
      {
        question: "Does it work on white or grey hair?",
        answer:
          "Poorly or not at all. The laser targets pigment, and hair without pigment gives it nothing to act on.",
      },
      {
        question: "Can I wax between sessions?",
        answer:
          "No. Waxing, threading and plucking remove the follicle contents the laser needs to target. Shave instead.",
      },
      {
        question: "Is it safe on Indian skin?",
        answer:
          "Yes, with the appropriate device settings for your skin type. Sun exposure and recent tanning are the main risk factors for pigmentation afterwards, which is why sun avoidance matters.",
      },
    ],
    searchTerms: ["laser hair removal", "lhr", "permanent hair removal", "laser hair reduction", "unwanted hair"],
    relatedSlugs: ["laser-treatment", "laser-tattoo-removal"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "laser-treatment",
    name: "Laser Treatment",
    category: "laser-aesthetic",
    shortDescription: "Laser procedures for selected skin concerns, with the device chosen for the indication.",
    metaDescription:
      "Laser skin treatment at Aura Cure Clinic, Sikar — laser procedures for pigmentation, texture and selected lesions, with assessment and aftercare.",
    alsoKnownAs: ["laser therapy", "skin laser", "laser toning"],
    overview:
      "'Laser treatment' is not one procedure — different lasers do different things, and the right one depends entirely on what is being treated. This service covers laser procedures for selected skin concerns, where the doctor selects the device, wavelength and settings after assessing the skin.",
    howItWorks:
      "A laser emits light at a specific wavelength that is preferentially absorbed by a particular target in the skin — pigment, blood vessels or water in the tissue, depending on the indication. That selective absorption is what allows a laser to affect the intended target while limiting effect on surrounding skin. Matching wavelength and settings to the skin type is what determines whether the result is good or harmful, particularly on Indian skin where excessive energy risks pigmentation.",
    suitableFor: [
      "Selected pigmentation concerns, after the type of pigmentation is identified",
      "Certain textural and surface irregularities",
      "Selected benign lesions confirmed on examination",
      "Patients able to follow strict sun protection through the course",
    ],
    notSuitableFor: [
      "Active infection, sunburn or recent tanning in the treatment area",
      "Recent isotretinoin use — usually deferred",
      "Melasma treated without regard to its tendency to rebound — this needs specific caution, not routine lasering",
      "Pregnancy — usually deferred",
      "Patients unable to avoid sun exposure during the course",
    ],
    benefits: [
      "Device and settings selected for the specific concern rather than one laser used for everything",
      "Targets a defined layer or structure rather than treating the whole surface",
      "Performed in-clinic without admission",
    ],
    procedure: [
      {
        title: "Diagnosis first",
        body: "The doctor identifies what the concern actually is. Different kinds of pigmentation look similar and respond very differently to laser — some worsen with it.",
      },
      {
        title: "Patch test",
        body: "A test area is treated and reviewed before a full session, particularly where pigmentation risk exists.",
      },
      {
        title: "Session",
        body: "Eye protection is worn. The laser is applied at the settings selected for your skin and concern.",
      },
      {
        title: "Immediate aftercare",
        body: "Cooling, soothing agents and sunscreen are applied, with specific instructions for the following days.",
      },
      {
        title: "Course and review",
        body: "Sessions are spaced and the response reviewed, with settings adjusted based on how your skin actually behaved.",
      },
    ],
    precautions: [
      "Strict sun protection before and after — this is the main determinant of outcome on Indian skin",
      "Disclose all medication, particularly isotretinoin and anything causing light sensitivity",
      "Tell the doctor about any history of darkening after injury, burns or previous procedures",
      "Do not use retinoids, acids or scrubs around the session unless instructed",
      "Report blistering, unusual pigment change or prolonged pain",
    ],
    consultationApproach:
      "The doctor identifies the concern before selecting a device. Where a laser is not the right answer — and for some pigmentation it is not — that will be said plainly.",
    whatToExpect:
      "A patch test, then a course of sessions with review between them. Response varies with the concern, your skin and adherence to sun protection.",
    faqs: [
      {
        question: "Which laser do you use?",
        answer:
          "It depends on what is being treated. The doctor will explain the device and settings chosen for your concern and why.",
      },
      {
        question: "Is laser safe for my skin tone?",
        answer:
          "With appropriate settings, yes. The risk on darker skin is pigmentation from excessive energy or sun exposure around the session, which is what the patch test and sun-protection instructions are for.",
      },
      {
        question: "Will one session be enough?",
        answer: "Almost never. Most laser work is planned as a course with review between sessions.",
      },
      {
        question: "Can laser treat melasma?",
        answer:
          "Melasma needs particular caution — it can rebound or worsen after inappropriate laser treatment. The doctor will discuss whether laser has any role in your case, and often it does not.",
      },
    ],
    searchTerms: ["laser treatment", "skin laser", "laser toning", "pigmentation laser", "laser therapy skin"],
    relatedSlugs: ["laser-hair-removal", "laser-tattoo-removal", "skin-resurfacing"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "laser-tattoo-removal",
    name: "Laser Tattoo Removal",
    category: "laser-aesthetic",
    shortDescription: "Progressive fading of tattoo ink over a course of sessions.",
    metaDescription:
      "Laser tattoo removal at Aura Cure Clinic, Sikar — how ink is broken down, realistic expectations by colour, session planning and aftercare.",
    alsoKnownAs: ["tattoo removal", "tattoo fading", "laser tattoo"],
    overview:
      "Laser tattoo removal breaks tattoo ink into fragments small enough for the body to clear gradually. It is a slow process measured in months and multiple sessions, and complete removal without any trace is not guaranteed for every tattoo.",
    howItWorks:
      "The laser delivers very short pulses of energy absorbed by the tattoo pigment, shattering ink particles into smaller fragments. The immune system then clears those fragments over the weeks that follow — which is why sessions are spaced widely and why the fading continues between visits rather than appearing immediately. Different ink colours absorb different wavelengths, so a multicoloured tattoo may need more than one approach and some colours respond poorly.",
    suitableFor: [
      "Unwanted tattoos where the patient accepts a long, staged process",
      "Fading a tattoo in preparation for a cover-up",
      "Patients able to protect the area from sun throughout the course",
    ],
    notSuitableFor: [
      "Active infection, sunburn or unhealed skin over the tattoo",
      "A tendency to keloid scarring — discuss this specifically before starting",
      "Recent isotretinoin use — usually deferred",
      "Pregnancy — usually deferred",
      "Patients needing it gone quickly, or expecting guaranteed complete clearance",
    ],
    benefits: [
      "Progressive fading without cutting or excising the skin",
      "Can be used to fade a tattoo enough for a cover-up rather than removing it entirely",
      "Treats the tattoo area specifically",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The doctor examines the tattoo — age, colours, ink density, depth, location and whether it is amateur or professional — all of which affect how it will respond.",
      },
      {
        title: "Realistic expectation setting",
        body: "You are told, before starting, roughly how many sessions are likely and which colours may not clear fully.",
      },
      {
        title: "Patch test",
        body: "A small area is treated and reviewed before committing to full sessions.",
      },
      {
        title: "Sessions",
        body: "Eye protection is worn. The area is treated, then dressed. Immediate whitening of the skin is an expected effect.",
      },
      {
        title: "Interval and clearance",
        body: "Sessions are spaced widely — the fading happens between visits as the body clears fragmented ink.",
      },
    ],
    precautions: [
      "Sessions must be spaced widely; rushing them increases risk without speeding clearance",
      "Keep the area covered from sun throughout the course and afterwards",
      "Blistering, crusting and temporary lightening or darkening of the treated skin can occur",
      "Do not pick scabs — this is where scarring comes from",
      "Tell the doctor about any keloid tendency, and about the ink used if you know it",
      "Some colours — particularly greens, light blues and certain whites — respond poorly",
    ],
    consultationApproach:
      "The doctor will give an honest assessment of how your specific tattoo is likely to respond, including where full clearance is unlikely, before any session is booked.",
    whatToExpect:
      "A long course over many months. Fading is progressive and continues between sessions. Residual shadowing is possible even after a full course.",
    clinicalNotes:
      "Amateur tattoos often clear more readily than professional ones. Older tattoos generally respond better than recent ones.",
    faqs: [
      {
        question: "How many sessions will it take?",
        answer:
          "Many — commonly a long course spread over months. The exact number depends on ink density, colours, depth and how your body clears the fragments.",
      },
      {
        question: "Will it disappear completely?",
        answer:
          "Not always. Some tattoos clear fully, others leave faint shadowing. Certain colours resist removal. The doctor will tell you which applies to yours before you start.",
      },
      {
        question: "Does it hurt more than getting the tattoo?",
        answer:
          "Most patients describe it as comparable or somewhat sharper, but each session is much shorter. Cooling and topical numbing are used.",
      },
      {
        question: "Will it scar?",
        answer:
          "Properly performed and with scabs left alone, scarring is uncommon. Picking at healing skin and having sessions too close together are the main risks.",
      },
    ],
    searchTerms: ["tattoo removal", "laser tattoo removal", "remove tattoo", "tattoo fading"],
    relatedSlugs: ["laser-treatment", "laser-hair-removal"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "hydra-facial",
    name: "HydraFacial",
    category: "laser-aesthetic",
    shortDescription: "A multi-step cleansing, exfoliating and hydrating facial treatment performed in-clinic.",
    metaDescription:
      "HydraFacial at Aura Cure Clinic, Sikar — the steps involved, what it addresses, who it suits, aftercare and honest expectations.",
    alsoKnownAs: ["hydra facial", "hydrafacial treatment", "aqua facial"],
    overview:
      "A HydraFacial is a multi-step in-clinic facial that cleanses, exfoliates, extracts and hydrates using a device that applies solutions and suction rather than manual scrubbing. It addresses surface congestion and skin condition; it is not a treatment for active acne, pigmentation disorders or any medical skin condition.",
    howItWorks:
      "The device works in stages. It first loosens the outer layer of dead cells with a gentle exfoliating solution, then uses controlled suction to lift debris from pores while simultaneously delivering a hydrating serum. Because the exfoliation and extraction are device-controlled rather than manual, it is generally gentler than a traditional scrub-and-squeeze facial.",
    suitableFor: [
      "Dull, congested or dehydrated-looking skin",
      "Patients wanting a low-downtime treatment before an event",
      "Maintenance of skin condition alongside other treatment",
      "Most skin types, including sensitive skin, with the protocol adjusted",
    ],
    notSuitableFor: [
      "Active inflamed or cystic acne, sunburn or open lesions in the area",
      "Active skin infection or cold sores",
      "Recent isotretinoin use or a recent peel — spacing is needed",
      "Patients expecting it to treat pigmentation, scarring or a medical skin condition",
    ],
    benefits: [
      "Cleanses, exfoliates and hydrates in a single session",
      "Minimal downtime, so it suits patients with events coming up",
      "Gentler than manual scrubbing and squeezing for congested skin",
    ],
    procedure: [
      {
        title: "Skin assessment",
        body: "The doctor checks the skin's condition and confirms nothing rules out treatment today.",
      },
      {
        title: "Cleanse and exfoliate",
        body: "The surface is cleaned and the outer layer of dead cells loosened.",
      },
      {
        title: "Extraction",
        body: "Controlled suction lifts debris from pores, without the pressure of manual squeezing.",
      },
      {
        title: "Hydration and protection",
        body: "A hydrating serum is applied, followed by sunscreen.",
      },
    ],
    precautions: [
      "Tell the doctor about recent peels, lasers, retinoid use or isotretinoin",
      "Mild redness for a few hours afterwards is normal",
      "Avoid retinoids, acids and scrubs for a couple of days afterwards",
      "Use sunscreen; freshly exfoliated skin is more sun-sensitive",
      "This maintains skin condition — it does not treat acne, pigmentation or scarring",
    ],
    consultationApproach:
      "The doctor will say plainly whether a facial is the right thing for your concern, or whether what you are describing needs actual treatment instead.",
    whatToExpect:
      "An immediate improvement in how skin looks and feels, lasting a limited time. Repeated at intervals if used for maintenance.",
    faqs: [
      {
        question: "Will it clear my acne?",
        answer:
          "No. It can help with congestion and how skin looks, but active acne is a medical condition needing actual treatment. The doctor will address that separately.",
      },
      {
        question: "How long do results last?",
        answer:
          "Days to a few weeks, which is why it is used as maintenance rather than a one-time fix.",
      },
      {
        question: "Can I have it before a wedding or event?",
        answer:
          "Yes — the low downtime is the main reason people choose it. Do not have it the same day as the event; leave a few days.",
      },
      {
        question: "Is it suitable for sensitive skin?",
        answer: "Usually, with the protocol adjusted. Tell the doctor about any sensitivity or reactions you have had.",
      },
    ],
    searchTerms: ["hydrafacial", "hydra facial", "aqua facial", "facial treatment", "skin cleanup"],
    relatedSlugs: ["hydrodermabrasion", "customized-facials", "facial-extractions"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "hydrodermabrasion",
    name: "Hydrodermabrasion",
    category: "laser-aesthetic",
    shortDescription: "Water-based exfoliation that resurfaces the skin surface without abrasive crystals.",
    metaDescription:
      "Hydrodermabrasion at Aura Cure Clinic, Sikar — water-based exfoliation for dull and congested skin, the procedure, aftercare and precautions.",
    alsoKnownAs: ["water dermabrasion", "aqua peel", "wet microdermabrasion"],
    overview:
      "Hydrodermabrasion exfoliates the skin's surface using a stream of water and solution combined with gentle suction, rather than the abrasive crystals used in traditional microdermabrasion. It is a surface treatment for skin condition and texture.",
    howItWorks:
      "A handpiece delivers a pressurised stream of water-based solution across the skin while suction lifts away loosened dead cells and debris. Because water does the exfoliating rather than crystals or a rough tip, it is gentler and produces less irritation — which makes it usable on skin that finds traditional dermabrasion too harsh.",
    suitableFor: [
      "Dull, rough or congested skin",
      "Patients who find abrasive exfoliation too harsh",
      "Skin needing gentle exfoliation and simultaneous hydration",
      "Maintenance between other treatments",
    ],
    notSuitableFor: [
      "Active inflamed acne, open lesions, sunburn or infection in the area",
      "Recent isotretinoin use, chemical peel or laser without adequate spacing",
      "Patients expecting it to address deep scarring or pigmentation disorders",
    ],
    benefits: [
      "Exfoliates and hydrates at once, without abrasive particles",
      "Gentler than crystal microdermabrasion for sensitive skin",
      "Minimal downtime",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "Skin condition is checked and any recent treatments reviewed for spacing.",
      },
      {
        title: "Cleanse",
        body: "The skin is cleaned before the handpiece is used.",
      },
      {
        title: "Hydro-exfoliation",
        body: "The water-based stream and suction are passed across the treatment area.",
      },
      {
        title: "Serum and protection",
        body: "A serum suited to your skin is applied, followed by sunscreen.",
      },
    ],
    precautions: [
      "Mild redness for a few hours is normal",
      "Avoid actives — retinoids, acids, scrubs — for a couple of days",
      "Sunscreen is essential afterwards",
      "Tell the doctor about recent peels, lasers or isotretinoin",
      "This is surface exfoliation; it does not treat deep scarring or medical skin conditions",
    ],
    consultationApproach:
      "The doctor will confirm whether surface exfoliation addresses your concern, or whether something with more depth is needed.",
    whatToExpect: "Immediately smoother, brighter-feeling skin with minimal downtime. Repeated at intervals for maintenance.",
    faqs: [
      {
        question: "How is it different from a HydraFacial?",
        answer:
          "They overlap considerably — both use water-based exfoliation with suction. The doctor will explain what the specific protocol here involves.",
      },
      {
        question: "Is it better than microdermabrasion?",
        answer:
          "Gentler, rather than better. Water-based exfoliation causes less irritation than crystals, which matters for sensitive skin.",
      },
      {
        question: "Will it remove acne scars?",
        answer:
          "No. This is surface exfoliation. Scarring sits deeper and needs a different approach — the doctor will discuss what actually applies.",
      },
    ],
    searchTerms: ["hydrodermabrasion", "microdermabrasion", "aqua peel", "water peel", "skin exfoliation"],
    relatedSlugs: ["hydra-facial", "exfoliation-treatments", "customized-facials"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "microneedling",
    name: "Microneedling",
    category: "laser-aesthetic",
    shortDescription: "Controlled micro-punctures to prompt the skin's own repair response, for texture and scarring.",
    metaDescription:
      "Microneedling at Aura Cure Clinic, Sikar — collagen induction therapy for acne scars and texture, the procedure, downtime and precautions.",
    alsoKnownAs: ["collagen induction therapy", "derma pen", "skin needling", "CIT"],
    overview:
      "Microneedling creates controlled micro-punctures in the skin using very fine needles at a set depth. It is used primarily for textural concerns and acne scarring, where the aim is to prompt the skin's own remodelling response rather than to remove tissue.",
    howItWorks:
      "The controlled micro-injuries trigger the skin's normal wound-healing cascade, which includes new collagen formation in the treated area. Over the weeks following each session, that remodelling gradually alters the texture of scarred or uneven skin. Because it works through the body's own repair process, change is progressive across a course rather than immediate — and it needs several sessions to accumulate.",
    suitableFor: [
      "Atrophic acne scarring — the depressed, pitted type",
      "Uneven skin texture and enlarged-looking pores",
      "Selected cases of skin laxity and fine surface lines",
      "Patients able to accept a few days of downtime per session",
    ],
    notSuitableFor: [
      "Active acne, infection, cold sores or open lesions in the treatment area",
      "A tendency to keloid or hypertrophic scarring",
      "Recent isotretinoin use — usually deferred",
      "Bleeding or clotting disorders, or anticoagulant use, unless cleared",
      "Pregnancy — usually deferred",
    ],
    benefits: [
      "Considered for acne scarring and textural irregularity, which surface treatments do not reach",
      "Works through the skin's own repair process rather than introducing a substance",
      "Can be combined with PRP within the same session where appropriate",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The doctor examines the skin, identifies the type of scarring — since not all scars respond to needling — and checks for anything that rules it out.",
      },
      {
        title: "Numbing",
        body: "A topical anaesthetic is applied and given time to work. This step is not skipped.",
      },
      {
        title: "Needling",
        body: "The device is passed across the treatment area at a depth set for the concern and the region of the face.",
      },
      {
        title: "Optional PRP",
        body: "Where planned, PRP is applied during or immediately after the needling pass.",
      },
      {
        title: "Aftercare and course",
        body: "Soothing agents and sunscreen are applied. Sessions are repeated at intervals, with change accumulating across the course.",
      },
    ],
    precautions: [
      "Expect redness resembling sunburn for one to three days, sometimes with light flaking",
      "Strict sun protection afterwards — freshly needled skin pigments easily",
      "No makeup for the period the doctor specifies",
      "Avoid retinoids, acids, scrubs, swimming and heavy sweating until cleared",
      "Do not use a home derma roller between sessions — depth and sterility are where home use causes damage",
      "Tell the doctor about cold sores, keloid tendency or isotretinoin use",
    ],
    consultationApproach:
      "The doctor identifies the scar type first. Different acne scars respond to different things, and some do not respond to needling at all — that will be said before a course is started.",
    whatToExpect:
      "A course of sessions spaced weeks apart, with a few days of redness after each. Change is gradual and assessed over months.",
    clinicalNotes:
      "Atrophic rolling and boxcar scars generally respond better than deep ice-pick scars, which often need a different approach.",
    faqs: [
      {
        question: "Will it remove my acne scars completely?",
        answer:
          "Complete removal is not a realistic expectation. Meaningful improvement in texture is, for the scar types that respond. The doctor will tell you which type you have.",
      },
      {
        question: "How much downtime?",
        answer:
          "Usually one to three days of redness, sometimes with light flaking. Plan sessions away from events.",
      },
      {
        question: "Is it painful?",
        answer: "A topical anaesthetic is applied first, which makes it tolerable. Some areas are more sensitive than others.",
      },
      {
        question: "Can I do this at home with a derma roller?",
        answer:
          "Home rollers cannot reach or control the depth used clinically, and sterility is a real problem. Poor home needling causes scarring and infection.",
      },
    ],
    searchTerms: ["microneedling", "derma pen", "collagen induction", "acne scar treatment", "skin needling"],
    relatedSlugs: ["face-prp", "skin-resurfacing", "chemical-peel"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "skin-resurfacing",
    name: "Skin Resurfacing & Rejuvenation",
    category: "laser-aesthetic",
    shortDescription: "A planned combination of resurfacing methods, selected for the concern and skin type.",
    metaDescription:
      "Skin resurfacing and rejuvenation at Aura Cure Clinic, Sikar — combined approaches for texture, tone and scarring, with assessment and aftercare.",
    alsoKnownAs: ["skin rejuvenation", "facial resurfacing", "skin renewal"],
    overview:
      "Resurfacing means removing or remodelling the outer layers of skin in a controlled way so that smoother skin replaces them. It is not a single procedure but a category — peels, microneedling and laser all resurface, at different depths and with different risks. This service is the assessment that decides which is appropriate, and the plan that follows.",
    howItWorks:
      "Different methods reach different depths and act on different things. A superficial peel affects the outermost layers; microneedling prompts remodelling deeper in the dermis; laser can do either depending on the device and settings. Choosing correctly depends on what is being treated, the skin type and how much downtime is acceptable — and on Indian skin, on the risk of post-inflammatory pigmentation, which rises with depth.",
    suitableFor: [
      "Uneven texture, dullness and superficial irregularity",
      "Acne scarring, where the scar type is identified first",
      "Patients wanting a planned combination rather than a single procedure",
      "Patients able to commit to sun protection through the course",
    ],
    notSuitableFor: [
      "Active infection, inflamed acne or open lesions",
      "Recent isotretinoin use — usually deferred",
      "A history of keloid scarring or marked post-inflammatory pigmentation, without particular caution",
      "Patients unable to avoid sun during the course",
    ],
    benefits: [
      "Method chosen for the concern rather than one procedure applied to everything",
      "Depth and intensity matched to your skin type and downtime tolerance",
      "Staged, with response reviewed before escalating",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The doctor identifies the concern, the skin type and the realistic target, and discusses how much downtime you can accommodate.",
      },
      {
        title: "Method selection",
        body: "Peel, microneedling, laser or a combination is chosen — and the reasoning explained.",
      },
      {
        title: "Preparation phase",
        body: "The skin is often primed for a period beforehand, which reduces the risk of pigmentation afterwards.",
      },
      {
        title: "Staged sessions",
        body: "Treatment is delivered in stages, starting conservatively and adjusting based on how the skin responds.",
      },
      {
        title: "Review",
        body: "Response is assessed between sessions rather than running a predetermined package to completion.",
      },
    ],
    precautions: [
      "Sun protection is not optional — it is the main determinant of outcome",
      "Expect downtime proportional to the depth used; discuss this before booking around events",
      "Tell the doctor about isotretinoin, keloid tendency, cold sores and any past pigmentation after procedures",
      "Do not layer home actives during a resurfacing course without clearance",
      "Report blistering, prolonged redness or unusual pigment change",
    ],
    consultationApproach:
      "The doctor starts conservatively, particularly on darker skin. Escalating depth is a decision made after seeing how your skin responded, not planned upfront.",
    whatToExpect:
      "A staged course over months. Improvement is progressive; the goal is meaningful change without triggering pigmentation.",
    faqs: [
      {
        question: "Which method is best?",
        answer:
          "There is no single best — it depends on the concern, the skin type and acceptable downtime. That decision is what the assessment is for.",
      },
      {
        question: "Is deeper always better?",
        answer:
          "No. Deeper means more downtime and, on Indian skin, more risk of pigmentation. Conservative and staged usually gives a better final result.",
      },
      {
        question: "How long until I see a difference?",
        answer:
          "Resurfacing is progressive across a course over months. Judging it after one session is premature.",
      },
    ],
    searchTerms: ["skin resurfacing", "skin rejuvenation", "facial resurfacing", "skin renewal", "acne scar"],
    relatedSlugs: ["microneedling", "chemical-peel", "laser-treatment"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "customized-facials",
    name: "Customized Facials",
    category: "laser-aesthetic",
    shortDescription: "A facial protocol assembled for your skin rather than a fixed menu treatment.",
    metaDescription:
      "Customized facials at Aura Cure Clinic, Sikar — a facial protocol built around your skin type and concern, assessed by a doctor.",
    alsoKnownAs: ["medi facial", "medical facial", "clinical facial"],
    overview:
      "Rather than a fixed facial applied to everyone, the steps and products are selected after the doctor assesses your skin. It addresses skin condition and appearance — it is not treatment for a medical skin condition, and the doctor will say so where that is what you actually need.",
    howItWorks:
      "Skin differs in oiliness, sensitivity, hydration and how it reacts. A protocol chosen for oily congested skin will irritate dry sensitive skin, and one designed for sensitivity will do nothing for congestion. The assessment identifies which applies, and the cleansing, exfoliating, extraction and finishing steps are then selected accordingly.",
    suitableFor: [
      "Patients unsure which facial suits their skin",
      "Sensitive or reactive skin that has reacted badly to standard salon facials",
      "Maintenance of skin condition alongside ongoing treatment",
      "Patients wanting a doctor's assessment rather than a menu choice",
    ],
    notSuitableFor: [
      "Active inflamed or cystic acne, infection or open lesions",
      "Patients expecting it to treat pigmentation disorders, scarring or a medical condition",
      "Recent peel, laser or isotretinoin use without adequate spacing",
    ],
    benefits: [
      "Steps and products selected for your skin rather than a standard protocol",
      "Assessed by a doctor, so a medical condition is identified rather than treated as a cosmetic one",
      "Adjusted over time as your skin changes",
    ],
    procedure: [
      {
        title: "Skin assessment",
        body: "The doctor establishes skin type, sensitivity, current condition and any reactions you have had to previous facials.",
      },
      {
        title: "Protocol selection",
        body: "Cleansing, exfoliation, extraction and finishing steps are chosen for your skin.",
      },
      {
        title: "The facial",
        body: "The selected steps are performed, adjusted in the moment if your skin responds unexpectedly.",
      },
      {
        title: "Finishing and advice",
        body: "Sunscreen is applied and home care advice given, including what to avoid for the next few days.",
      },
    ],
    precautions: [
      "Tell the doctor about every product you use and every reaction you have had",
      "Mild redness afterwards is normal and settles",
      "Avoid actives and sun for the period advised",
      "If you have active acne, ask about treatment rather than only a facial",
      "Space facials away from peels and lasers as the doctor instructs",
    ],
    consultationApproach:
      "The doctor will tell you plainly if what you are describing needs treatment rather than a facial. A facial is offered for skin condition, not as a substitute for care.",
    whatToExpect:
      "Immediately improved skin condition and appearance, lasting a limited period. Repeated at intervals if used as maintenance.",
    faqs: [
      {
        question: "How is this different from a salon facial?",
        answer:
          "It is assessed and performed under a doctor, so a medical skin condition is recognised instead of being treated cosmetically, and the protocol is selected rather than standard.",
      },
      {
        question: "How often should I have one?",
        answer:
          "That depends on your skin and what it is for. The doctor will suggest an interval rather than selling a fixed package.",
      },
      {
        question: "Will it help my acne?",
        answer:
          "It can help congestion and appearance. Active acne needs actual treatment, which the doctor will address separately.",
      },
    ],
    searchTerms: ["facial", "medi facial", "medical facial", "clinical facial", "customized facial", "clean up"],
    relatedSlugs: ["hydra-facial", "facial-extractions", "exfoliation-treatments"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "led-light-therapy",
    name: "LED Light Therapy",
    category: "laser-aesthetic",
    shortDescription: "Low-intensity light in specific wavelengths, used as a supporting step in a skin plan.",
    metaDescription:
      "LED light therapy at Aura Cure Clinic, Sikar — how light wavelengths are used for skin, who it suits, the session and honest expectations.",
    alsoKnownAs: ["led facial", "blue light therapy", "red light therapy", "photobiomodulation"],
    overview:
      "LED therapy exposes the skin to low-intensity light in selected wavelengths. It is painless, has no downtime, and is used as a supporting step alongside other treatment rather than as a treatment in its own right.",
    howItWorks:
      "Different wavelengths are used for different purposes — blue light is used in the context of acne, red light in the context of inflammation and skin condition. The intensity is far below that of any surgical or hair-removal laser; nothing is cut, heated or removed. Because the effect is subtle and cumulative, it is used repeatedly and in combination, not as a standalone session expecting visible change.",
    suitableFor: [
      "Use alongside acne treatment or after another procedure",
      "Patients who cannot tolerate needle-based or downtime-heavy treatments",
      "As a finishing step within a broader skin plan",
    ],
    notSuitableFor: [
      "Patients on medication causing light sensitivity — disclose what you take",
      "Certain eye conditions, without proper protection and clearance",
      "Patients expecting it to replace treatment for acne, pigmentation or scarring",
    ],
    benefits: [
      "Completely non-invasive, painless and with no downtime",
      "Combines easily with other treatments in the same visit",
      "Suitable for skin too sensitive for more aggressive options",
    ],
    procedure: [
      {
        title: "Assessment",
        body: "The doctor confirms the wavelength intended and checks your medication for light sensitivity.",
      },
      {
        title: "Preparation",
        body: "The skin is cleaned and eye protection provided.",
      },
      {
        title: "Exposure",
        body: "The panel is positioned and the skin exposed for a set time. The session is painless.",
      },
      {
        title: "Finishing",
        body: "Sunscreen is applied and the session integrated into the wider plan.",
      },
    ],
    precautions: [
      "Disclose photosensitising medication — several common medicines qualify",
      "Wear the eye protection provided",
      "Do not rely on this alone for acne or any medical skin condition",
      "Home LED devices vary widely in output; discuss any you own rather than trusting the marketing",
    ],
    consultationApproach:
      "Offered as an adjunct. The doctor will be clear about what it is expected to contribute in your case, which is usually modest.",
    whatToExpect: "Short, painless sessions with no downtime, repeated as part of a course alongside other treatment.",
    faqs: [
      {
        question: "Does LED therapy actually do anything?",
        answer:
          "It is used as a supporting measure, and expectations should be modest. It is not a substitute for treating acne, pigmentation or scarring.",
      },
      {
        question: "Is it safe for the eyes?",
        answer: "Eye protection is provided and should be worn throughout.",
      },
      {
        question: "Can I use a home LED mask instead?",
        answer:
          "Home devices vary greatly in output. If you have one, bring the details to the consultation.",
      },
    ],
    searchTerms: ["led therapy", "led facial", "blue light acne", "red light therapy", "light therapy skin"],
    relatedSlugs: ["customized-facials", "hydra-facial"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "exfoliation-treatments",
    name: "Exfoliation Treatments",
    category: "laser-aesthetic",
    shortDescription: "Professional exfoliation at a depth and frequency chosen for your skin.",
    metaDescription:
      "Professional exfoliation treatments at Aura Cure Clinic, Sikar — chemical and mechanical exfoliation, chosen by skin type, with aftercare.",
    alsoKnownAs: ["skin exfoliation", "professional exfoliation", "dead skin removal"],
    overview:
      "Exfoliation removes the outermost layer of dead skin cells. Done at the right depth and frequency it improves how skin looks and feels; done too often or too aggressively — which is common with home scrubs — it damages the skin barrier and causes the sensitivity and irritation people then seek help for.",
    howItWorks:
      "There are two routes. Mechanical exfoliation physically lifts dead cells from the surface. Chemical exfoliation uses acids to break the bonds holding those cells together so they shed naturally. Which suits you depends on skin type and sensitivity — and the frequency matters as much as the method, since over-exfoliation is a more common problem than under-exfoliation.",
    suitableFor: [
      "Dull, rough or flaky-looking skin",
      "Congestion and blocked-looking pores",
      "Patients who have been over-scrubbing at home and need a sustainable routine",
      "Preparation before other treatments where advised",
    ],
    notSuitableFor: [
      "Already compromised, irritated or over-exfoliated skin, until it recovers",
      "Active inflamed acne, infection, sunburn or open lesions",
      "Recent isotretinoin use, peel or laser without adequate spacing",
      "Patients with a barrier-damage picture, who need repair rather than more exfoliation",
    ],
    benefits: [
      "Method and depth selected for your skin instead of a generic scrub",
      "Frequency set deliberately, which is what prevents barrier damage",
      "Paired with home-care advice so the routine is sustainable",
    ],
    procedure: [
      {
        title: "Skin assessment",
        body: "The doctor checks the skin's current state and whether it is already over-exfoliated — in which case the answer is to stop, not to add another session.",
      },
      {
        title: "Method selection",
        body: "Mechanical or chemical exfoliation is chosen at a depth appropriate to your skin.",
      },
      {
        title: "Treatment",
        body: "The selected exfoliation is performed, monitored as it goes.",
      },
      {
        title: "Barrier support and protection",
        body: "Soothing agents and sunscreen are applied.",
      },
      {
        title: "Home routine",
        body: "You are given a frequency and a set of products to use — and, often, things to stop using.",
      },
    ],
    precautions: [
      "More is not better — over-exfoliation causes the sensitivity and redness people mistake for a need to exfoliate more",
      "Stop home scrubs and acids for the period the doctor specifies",
      "Sunscreen daily; exfoliated skin burns and pigments more easily",
      "Tell the doctor everything in your current routine, including cleansers and toners",
      "Report persistent stinging, redness or a burning sensation",
    ],
    consultationApproach:
      "The doctor frequently finds patients are exfoliating too much rather than too little. Where that is the case, the advice will be to stop, which is not what people expect to hear.",
    whatToExpect:
      "Smoother, brighter skin with minimal downtime, plus a routine designed to keep it that way without damage.",
    faqs: [
      {
        question: "How often should I exfoliate?",
        answer:
          "Less often than most people do. The right frequency depends on your skin, and the doctor will set one rather than leaving it to guesswork.",
      },
      {
        question: "Is a face scrub bad for skin?",
        answer:
          "Harsh scrubs used frequently damage the barrier. Occasional appropriate exfoliation is fine. The problem is almost always frequency and aggressiveness.",
      },
      {
        question: "My skin is sensitive and red — should I exfoliate more?",
        answer:
          "Probably the opposite. Sensitivity and redness often indicate a damaged barrier, which needs repair and rest, not more exfoliation.",
      },
    ],
    searchTerms: ["exfoliation", "skin scrub", "dead skin", "face scrub", "chemical exfoliation", "aha bha"],
    relatedSlugs: ["chemical-peel", "hydrodermabrasion", "customized-facials"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "botox-injections",
    name: "Botox Injections",
    category: "laser-aesthetic",
    shortDescription: "Prescription injectable treatment for dynamic expression lines, by consultation only.",
    metaDescription:
      "Botox injections at Aura Cure Clinic, Sikar — how botulinum toxin works on expression lines, who it suits, the procedure, risks and precautions.",
    alsoKnownAs: ["botulinum toxin", "anti-wrinkle injection", "wrinkle treatment"],
    overview:
      "Botulinum toxin is a prescription injectable used to soften lines caused by repeated muscle movement — frown lines, forehead lines and lines at the outer corners of the eyes. It is a medical procedure with real risks, temporary by design, and it is only offered after consultation and assessment.",
    howItWorks:
      "The preparation temporarily reduces the signal from nerve to muscle in the specific small muscles injected. Those muscles relax, and the lines they create when contracting soften. It only works on lines caused by movement — static lines present at rest, from sun damage or volume loss, are a different problem and do not respond. The effect wears off over months as nerve signalling returns, which is why treatment is repeated.",
    suitableFor: [
      "Dynamic expression lines that appear on movement — frowning, raising the eyebrows, smiling",
      "Patients who understand the effect is temporary and requires repetition",
      "Patients who have discussed realistic expectations at consultation",
    ],
    notSuitableFor: [
      "Pregnancy and breastfeeding",
      "Neuromuscular disorders such as myasthenia gravis",
      "Active infection or inflamed skin at the injection site",
      "Known hypersensitivity to any component of the preparation",
      "Static lines present at rest, which do not respond",
      "Patients on aminoglycoside antibiotics or certain other medications — disclose everything you take",
    ],
    benefits: [
      "Softens lines caused by repeated muscle movement",
      "A short in-clinic procedure with limited downtime",
      "Temporary and reversible over time — the effect wears off rather than being permanent",
    ],
    procedure: [
      {
        title: "Consultation and assessment",
        body: "The doctor examines your facial movement, identifies which lines are dynamic and which are static, and reviews your full medical history and medication.",
      },
      {
        title: "Expectation setting",
        body: "What can and cannot be achieved is discussed explicitly, including that static lines will not respond.",
      },
      {
        title: "Marking and preparation",
        body: "Injection points are marked while you make specific expressions, and the skin is cleaned.",
      },
      {
        title: "Injection",
        body: "Small amounts are injected into the marked muscles using a fine needle. The procedure itself is brief.",
      },
      {
        title: "Review",
        body: "The effect develops over days, not immediately. A review is arranged to assess the result and discuss any adjustment.",
      },
    ],
    precautions: [
      "Do not lie down, exercise or massage the treated area for the period the doctor specifies",
      "Bruising, headache and mild swelling at injection sites can occur",
      "Eyelid or eyebrow drooping is a recognised risk — it is temporary but can last weeks",
      "Disclose all medication and any neuromuscular condition before treatment",
      "The effect is temporary; repeat treatment is required to maintain it",
      "Report difficulty swallowing, breathing or speaking urgently — these are rare but require immediate attention",
      "Never accept this treatment from an unqualified provider or in a non-clinical setting",
    ],
    consultationApproach:
      "This is a prescription medical procedure and is treated as one. The doctor assesses suitability, discusses risks explicitly, and will decline where it is not appropriate.",
    whatToExpect:
      "The effect appears over several days rather than immediately, and lasts a limited number of months before gradually wearing off.",
    clinicalNotes:
      "Only dynamic lines respond. Where the concern is volume loss or sun-damaged static lines, botulinum toxin is not the answer and the doctor will say so.",
    faqs: [
      {
        question: "How long does it last?",
        answer:
          "A limited number of months, varying between individuals and by the area treated. The effect wears off gradually as nerve signalling returns.",
      },
      {
        question: "Will my face look frozen?",
        answer:
          "That comes from over-treatment. Appropriate dosing softens movement rather than eliminating it. Discuss the look you want at consultation.",
      },
      {
        question: "Is it safe?",
        answer:
          "It is a prescription medical procedure with real risks, which is why assessment, correct technique and a proper clinical setting matter. The risks are discussed with you before treatment.",
      },
      {
        question: "What if I do not like the result?",
        answer:
          "It is temporary and wears off. That is one genuine advantage over permanent interventions.",
      },
    ],
    searchTerms: ["botox", "botulinum toxin", "anti wrinkle injection", "frown lines", "forehead lines"],
    relatedSlugs: ["dermal-fillers", "skin-resurfacing"],
    lastUpdated: "2026-09-02",
  },

  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "laser-aesthetic",
    shortDescription: "Injectable gel used to restore volume in selected areas, by consultation only.",
    metaDescription:
      "Dermal fillers at Aura Cure Clinic, Sikar — how fillers restore volume, who they suit, the procedure, risks and precautions. Consultation required.",
    alsoKnownAs: ["fillers", "hyaluronic acid filler", "volume restoration", "lip filler"],
    overview:
      "Dermal fillers are injectable gels placed under the skin to restore or add volume in a specific area. This is a medical procedure with significant risks when performed incorrectly, and it is offered only after consultation and assessment — never as a walk-in service.",
    howItWorks:
      "The gel is placed at a specific depth in a specific plane to add volume where tissue has been lost or where more projection is wanted. It works on volume, not on movement — which is the opposite of botulinum toxin, and the reason the two address different concerns. The critical safety issue is anatomy: facial blood vessels run in known locations, and injecting filler into or around a vessel can obstruct blood supply. That is why who performs it and where matters far more than which product is used.",
    suitableFor: [
      "Volume loss in specific areas, assessed in person",
      "Static lines that persist at rest and do not respond to muscle relaxation",
      "Patients who understand the risks and the temporary nature of the result",
    ],
    notSuitableFor: [
      "Pregnancy and breastfeeding",
      "Active infection, inflammation or skin lesions at or near the injection site",
      "Known hypersensitivity to the filler material",
      "Bleeding or clotting disorders, or anticoagulant use, unless cleared",
      "Patients with unrealistic expectations, or who have had permanent fillers previously",
      "Autoimmune conditions or a history of severe allergy, without careful assessment",
    ],
    benefits: [
      "Restores volume in a defined area, which muscle-relaxing treatment cannot do",
      "Results are visible immediately rather than developing over days",
      "Hyaluronic acid fillers are temporary and, importantly, can be dissolved if needed",
    ],
    procedure: [
      {
        title: "Consultation and assessment",
        body: "The doctor assesses facial structure and volume, reviews your full medical history and medication, and discusses what is realistic.",
      },
      {
        title: "Risk discussion",
        body: "Vascular complications, though uncommon, are serious. These are explained explicitly before consent, along with what to watch for afterwards.",
      },
      {
        title: "Marking and preparation",
        body: "Injection points are marked and the skin thoroughly cleaned. Topical anaesthetic is applied where appropriate.",
      },
      {
        title: "Injection",
        body: "Filler is placed in the planned plane, with careful technique to avoid vessels. Small amounts are placed and assessed as the doctor proceeds.",
      },
      {
        title: "Review",
        body: "Immediate assessment, then a follow-up once swelling has settled to evaluate the final result.",
      },
    ],
    precautions: [
      "Swelling and bruising for several days is common; plan away from events",
      "Do not massage the area unless specifically instructed",
      "Avoid strenuous exercise, alcohol and heat exposure for the period specified",
      "Severe or increasing pain, skin blanching, mottling or vision change after treatment requires IMMEDIATE medical attention — do not wait",
      "Disclose all medication and any history of cold sores, which can be triggered by lip treatment",
      "Never have filler from an unqualified provider, at a salon, or from a home-visit service — this is where the serious complications happen",
      "Ask which product is being used and keep a record of it",
    ],
    consultationApproach:
      "This is a medical procedure and is treated as one. The doctor assesses anatomy and suitability, explains the risks explicitly, and will decline where expectations are unrealistic or the anatomy is unfavourable.",
    whatToExpect:
      "An immediate visible change, with swelling settling over days. The result is temporary and gradually diminishes over months as the material is absorbed.",
    clinicalNotes:
      "Hyaluronic acid fillers can be dissolved with an enzyme if a complication occurs or the result is unsatisfactory — a genuine safety advantage, and a reason to know which product was used.",
    faqs: [
      {
        question: "How long do fillers last?",
        answer:
          "Months, varying by product, area and individual metabolism. The material is gradually absorbed and the effect diminishes.",
      },
      {
        question: "Can they be reversed?",
        answer:
          "Hyaluronic acid fillers can be dissolved with an enzyme. This is one reason they are preferred over permanent fillers, which cannot be removed easily.",
      },
      {
        question: "What is the most serious risk?",
        answer:
          "Vascular occlusion — filler obstructing a blood vessel. It is uncommon but serious and requires immediate treatment. Severe pain, skin colour change or any vision change after treatment must be reported at once.",
      },
      {
        question: "Why do some cheap filler offers exist?",
        answer:
          "Because product quality, provider qualification and setting vary enormously. This is not a procedure to choose on price — the complications are anatomical and serious.",
      },
    ],
    searchTerms: ["dermal filler", "fillers", "lip filler", "hyaluronic acid", "volume restoration", "face filler"],
    relatedSlugs: ["botox-injections", "face-prp"],
    lastUpdated: "2026-09-02",
  },
];
