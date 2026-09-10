"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import type { ServiceCategory } from "@/data/service-categories";
import { allServices } from "@/data/services";
import { conditions } from "@/data/conditions";
import { siteConfig } from "@/lib/site-config";
import { ArrowRightIcon, CalendarIcon, CheckIcon } from "@/components/ui/icons";
import {
  HairIcon,
  SkinIcon,
  LaserIcon,
  LaserHairRemovalIcon,
  WaterDropIcon,
  PeelIcon,
  MesotherapyIcon,
  FollicleIcon,
  DropletIcon,
  WellnessIcon,
  DiscreetCareIcon,
  HeadIcon,
  JointIcon,
  StomachIcon,
  BreathIcon,
  BackPainIcon,
  KidneyIcon,
  SwellingIcon,
} from "@/components/conditions/care-icons";

interface ServicesDirectoryProps {
  categories: ServiceCategory[];
}

/** Token search matcher (min 3-4 chars) */
function matchesTokens(text: string, tokens: string[]) {
  const haystack = text.toLowerCase();
  return tokens.every((token) => {
    if (haystack.includes(token)) return true;
    for (let len = token.length - 1; len >= 3; len--) {
      if (haystack.includes(token.slice(0, len))) return true;
    }
    return false;
  });
}

/** Resolves the best icon component for a given service name or slug */
function getServiceIcon(name: string, href?: string, categoryId?: string) {
  const lower = (name + " " + (href ?? "")).toLowerCase();

  if (lower.includes("laser hair removal")) return LaserHairRemovalIcon;
  if (lower.includes("laser") || lower.includes("resurfacing")) return LaserIcon;
  if (lower.includes("hydra") || lower.includes("hydro") || lower.includes("facial") || lower.includes("extractions"))
    return WaterDropIcon;
  if (lower.includes("peel") || lower.includes("exfoliation")) return PeelIcon;
  if (lower.includes("mesotherapy")) return MesotherapyIcon;
  if (lower.includes("gfc") || lower.includes("prp")) return DropletIcon;
  if (lower.includes("follicle") || lower.includes("density") || lower.includes("microneedling")) return FollicleIcon;
  if (lower.includes("hair") || lower.includes("trichology")) return HairIcon;
  if (lower.includes("acne") || lower.includes("pigmentation") || lower.includes("vitiligo") || lower.includes("dermatitis") || lower.includes("skin tag") || lower.includes("skin"))
    return SkinIcon;
  if (lower.includes("migraine") || lower.includes("headache")) return HeadIcon;
  if (lower.includes("joint") || lower.includes("arthritis")) return JointIcon;
  if (lower.includes("back pain") || lower.includes("spine") || lower.includes("slip disc")) return BackPainIcon;
  if (lower.includes("digestive") || lower.includes("stomach") || lower.includes("acidity")) return StomachIcon;
  if (lower.includes("asthma") || lower.includes("breathing") || lower.includes("lungs")) return BreathIcon;
  if (lower.includes("kidney")) return KidneyIcon;
  if (lower.includes("piles") || lower.includes("fissure")) return SwellingIcon;
  if (lower.includes("consultation") || lower.includes("dispensing") || lower.includes("homeopathy")) return WellnessIcon;

  if (categoryId === "hair") return HairIcon;
  if (categoryId === "skin") return SkinIcon;
  if (categoryId === "laser-aesthetic") return LaserIcon;
  return DiscreetCareIcon;
}

/** Resolves concise description from data records */
function getServiceDescription(name: string, href?: string, categoryDesc?: string): string {
  if (href?.startsWith("/services/")) {
    const slug = href.replace("/services/", "");
    const found = allServices.find((s) => s.slug === slug);
    if (found?.shortDescription) return found.shortDescription;
  }
  if (href?.startsWith("/conditions/")) {
    const slug = href.replace("/conditions/", "");
    const found = conditions.find((c) => c.slug === slug);
    if (found?.shortDescription) return found.shortDescription;
  }
  if (name.includes("Consultation")) {
    return "Detailed clinical case-taking and evaluation with Dr. Nitin Sharma, BHMS.";
  }
  if (name.includes("Online")) {
    return "Secure remote audio/video homeopathic consultation for patients across India.";
  }
  if (name.includes("Dispensing")) {
    return "Genuine, high-quality homeopathic medicines dispensed directly at the in-clinic pharmacy.";
  }
  return categoryDesc || "Assessed in person by appointment at Aura Cure Clinic, Sikar.";
}

/** Resolves a short contextual badge for the card */
function getServiceTag(name: string, categoryId: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("prp") || lower.includes("gfc") || lower.includes("mesotherapy")) return "Regenerative Care";
  if (lower.includes("laser")) return "Laser Procedure";
  if (lower.includes("peel") || lower.includes("facial") || lower.includes("hydra")) return "Aesthetic Treatment";
  if (lower.includes("consultation") || lower.includes("loss")) return "Doctor Evaluation";
  if (lower.includes("dispensing")) return "Pharmacy";
  if (categoryId === "hair") return "Scalp & Follicle";
  if (categoryId === "skin") return "Dermatology Care";
  if (categoryId === "laser-aesthetic") return "Advanced Aesthetic";
  return "Homeopathic Care";
}

export function ServicesDirectory({ categories }: ServicesDirectoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchInputId = useId();

  const isSearching = searchQuery.trim().length > 0;
  const totalServiceCount = useMemo(
    () => categories.reduce((sum, c) => sum + c.services.length, 0),
    [categories]
  );

  // Filtered dataset calculation
  const displayedCategories = useMemo(() => {
    let result = categories;
    if (activeCategory !== "all") {
      result = result.filter((c) => c.id === activeCategory);
    }

    if (!isSearching) return result;

    const tokens = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);

    return result
      .map((category) => {
        const filteredServices = category.services.filter((s) => {
          const desc = getServiceDescription(s.name, s.href, category.description);
          const tag = getServiceTag(s.name, category.id);
          const searchContent = `${s.name} ${desc} ${tag} ${category.name} ${category.listedAs}`;
          return matchesTokens(searchContent, tokens);
        });

        return {
          ...category,
          services: filteredServices,
        };
      })
      .filter((category) => category.services.length > 0);
  }, [categories, activeCategory, searchQuery, isSearching]);

  const totalResultsCount = useMemo(() => {
    return displayedCategories.reduce((sum, c) => sum + c.services.length, 0);
  }, [displayedCategories]);

  return (
    <div className="mt-10">
      {/* ----------------- Filter Controls & Search Bar ----------------- */}
      <div className="sticky top-[4.5rem] z-30 -mx-4 rounded-2xl border border-border/80 bg-ivory/95 px-4 py-4 backdrop-blur-md shadow-sm sm:mx-0 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-[var(--dur-fast)] ease-[var(--ease-soft)] cursor-pointer ${
                activeCategory === "all"
                  ? "bg-forest-900 text-ivory shadow-sm"
                  : "border border-border bg-surface text-charcoal-soft hover:border-forest-600/40 hover:text-forest-800"
              }`}
            >
              All Services
              <span
                className={`rounded-full px-1.5 py-0.2 text-[11px] tabular-nums ${
                  activeCategory === "all" ? "bg-forest-800 text-ivory/90" : "bg-ivory-muted text-charcoal-faint"
                }`}
              >
                {totalServiceCount}
              </span>
            </button>

            {categories.map((c) => {
              const isCurrent = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-[var(--dur-fast)] ease-[var(--ease-soft)] cursor-pointer ${
                    isCurrent
                      ? "bg-forest-900 text-ivory shadow-sm"
                      : "border border-border bg-surface text-charcoal-soft hover:border-forest-600/40 hover:text-forest-800"
                  }`}
                >
                  {c.name}
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[11px] tabular-nums ${
                      isCurrent ? "bg-forest-800 text-ivory/90" : "bg-ivory-muted text-charcoal-faint"
                    }`}
                  >
                    {c.services.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <label htmlFor={searchInputId} className="sr-only">
              Search treatments or services
            </label>
            <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-faint">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <input
              id={searchInputId}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. PRP, Facial, Acne..."
              className="w-full rounded-full border border-border-strong bg-surface py-2 pl-9 pr-8 text-[13.5px] text-charcoal placeholder:text-charcoal-faint focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
            />
            {isSearching && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-faint hover:text-forest-800 cursor-pointer"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ----------------- Active Search Count Bar ----------------- */}
      {isSearching && (
        <div className="mt-6 flex items-center justify-between rounded-lg bg-surface border border-border px-4 py-2.5 text-xs text-charcoal-soft">
          <p>
            Found <strong className="text-forest-900 font-semibold">{totalResultsCount}</strong> treatment
            {totalResultsCount === 1 ? "" : "s"} matching &ldquo;{searchQuery.trim()}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="font-medium text-forest-700 underline hover:text-forest-900 cursor-pointer"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* ----------------- Zero-Match State ----------------- */}
      {displayedCategories.length === 0 && (
        <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ivory-muted text-forest-800">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="mt-4 font-heading text-lg font-semibold text-forest-900">
            No treatments found for &ldquo;{searchQuery.trim()}&rdquo;
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-charcoal-soft">
            We provide individualised consultations for many health and aesthetic concerns. Contact our clinic in Sikar
            to speak with our doctor directly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="inline-flex rounded-md bg-forest-800 px-4 py-2 text-sm font-medium text-ivory hover:bg-forest-700 cursor-pointer"
            >
              View All Services
            </button>
            <Link
              href="/appointment"
              className="inline-flex rounded-md border border-border px-4 py-2 text-sm font-medium text-charcoal hover:bg-ivory-muted"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}

      {/* ----------------- Categories & Visual Service Cards ----------------- */}
      <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-20">
        {displayedCategories.map((category) => (
          <section
            key={category.id}
            id={`category-${category.id}`}
            aria-labelledby={`heading-${category.id}`}
            className="scroll-mt-36"
          >
            {/* Visual Category Showcase Header */}
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-stretch">
                {/* Left: Category Editorial Info */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="rounded-full bg-forest-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600 border border-forest-100">
                        {category.listedAs}
                      </span>
                      {category.priceFrom && (
                        <span className="rounded-full border border-border bg-ivory-muted px-2.5 py-0.5 text-[11.5px] font-medium tabular-nums text-forest-800">
                          Starting from {category.priceFrom}
                        </span>
                      )}
                    </div>

                    <h2
                      id={`heading-${category.id}`}
                      className="mt-4 font-heading text-2xl font-bold tracking-tight text-forest-900 sm:text-3xl"
                    >
                      {category.name} in {siteConfig.address.locality}
                    </h2>

                    <p className="mt-3.5 max-w-xl text-[14.5px] leading-relaxed text-charcoal-soft">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-border/60 text-xs text-charcoal-faint">
                    <span className="inline-flex items-center gap-1 text-forest-700 font-medium">
                      <CheckIcon className="h-3.5 w-3.5" />
                      Doctor-assessed in-clinic
                    </span>
                    <span>•</span>
                    <span>{category.services.length} Specialized Procedures</span>
                  </div>
                </div>

                {/* Right: Rich Category Visual */}
                <div className="relative min-h-[14rem] sm:min-h-[16rem] lg:min-h-full w-full bg-ivory-muted border-t lg:border-t-0 lg:border-l border-border overflow-hidden">
                  {category.image ? (
                    <>
                      <Image
                        src={category.image}
                        alt={category.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 35vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 rounded-lg bg-surface/90 px-3 py-1.5 backdrop-blur-sm border border-border/80 shadow-sm hidden sm:block">
                        <p className="text-[11.5px] font-medium text-forest-900 truncate">
                          {category.imageAlt}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs text-charcoal-faint">
                      <span>Clinical Treatment Area</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Visual Service Cards Grid */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-faint">
                  {category.name} Treatments ({category.services.length})
                </p>
                {category.href && (
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-forest-700 hover:text-forest-900 hover:underline"
                  >
                    View area guide
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((item) => {
                  const Icon = getServiceIcon(item.name, item.href, category.id);
                  const description = getServiceDescription(item.name, item.href, category.description);
                  const tag = getServiceTag(item.name, category.id);
                  const hasDetailPage = Boolean(item.href);

                  const cardContent = (
                    <div className="flex h-full flex-col justify-between p-5">
                      <div>
                        {/* Card Header: Icon & Category Tag */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-forest-100 bg-forest-50/80 text-forest-700 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-ivory group-hover:border-forest-800">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="rounded-full border border-border/80 bg-ivory px-2.5 py-0.5 text-[11px] font-medium text-charcoal-soft">
                            {tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 font-heading text-[16px] font-semibold leading-snug text-forest-900 transition-colors duration-200 group-hover:text-forest-700">
                          {item.name}
                        </h3>

                        {/* Concise Description */}
                        <p className="mt-2 text-[13px] leading-relaxed text-charcoal-soft line-clamp-2">
                          {description}
                        </p>
                      </div>

                      {/* Card Footer: Clinical Attribute & Action */}
                      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3.5">
                        <span className="inline-flex items-center gap-1 text-[11.5px] font-medium text-charcoal-faint">
                          <span className="h-1.5 w-1.5 rounded-full bg-forest-600/70" />
                          In-clinic visit
                        </span>

                        {hasDetailPage ? (
                          <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-forest-700 transition-colors duration-200 group-hover:text-forest-900">
                            Explore
                            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                          </span>
                        ) : (
                          <span className="text-[12px] text-charcoal-faint">Consultation</span>
                        )}
                      </div>
                    </div>
                  );

                  return (
                    <div key={item.name} className="h-full">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="group relative flex h-full flex-col rounded-xl border border-border bg-surface transition-all duration-300 ease-[var(--ease-soft)] hover:-translate-y-1 hover:border-forest-600/40 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2"
                        >
                          {cardContent}
                        </Link>
                      ) : (
                        <div className="relative flex h-full flex-col rounded-xl border border-border/70 bg-surface/80">
                          {cardContent}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ----------------- Consultation Support Banner ----------------- */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-forest-950 to-forest-900 p-8 text-ivory sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-500">
              Personalised Guidance
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold text-ivory sm:text-3xl">
              Not sure which treatment suits your concern?
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ivory/75">
              At Aura Cure Clinic, Dr. Nitin Sharma ({siteConfig.doctor.credentials}) conducts an unhurried,
              comprehensive case evaluation before recommending any clinical or homeopathic procedure.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-forest-950 transition-all duration-200 hover:bg-accent-100 shadow-sm"
            >
              <CalendarIcon className="h-4 w-4" />
              Book Appointment
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-ivory/20 px-5 py-3 text-sm font-medium text-ivory hover:bg-ivory/10 transition-colors"
            >
              Call {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
