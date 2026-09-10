import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/data/testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StarIcon } from "@/components/ui/icons";

export function Reviews() {
  const hasReviews = testimonials.length > 0;
  const hasGoogleProfile = !siteConfig.social.googleBusinessProfile.startsWith("[");

  return (
    <Section>
      <SectionHeading
        eyebrow="Patient experience"
        title="What patients say"
        description="We publish only reviews that patients have genuinely left — nothing written on their behalf."
      />

      {hasReviews ? (
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i} className="flex flex-col rounded-lg border border-border bg-surface p-6">
              {typeof t.rating === "number" && (
                <div className="flex items-center gap-0.5 text-accent-500" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-3.5 w-3.5" filled={s < t.rating!} />
                  ))}
                </div>
              )}
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-charcoal-soft">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-border pt-4 text-xs text-charcoal-faint">
                <span className="font-medium text-charcoal">{t.initial}</span>
                {" · "}
                {t.source}
                {t.date && ` · ${t.date}`}
              </footer>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 max-w-2xl rounded-lg border border-dashed border-border-strong bg-surface p-8">
          <h3 className="text-base font-semibold text-charcoal">Verified reviews will appear here</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal-soft">
            This section is intentionally empty until genuine patient reviews are connected from the clinic&rsquo;s
            Google Business Profile. We do not publish written-for-us testimonials, and we do not display star ratings
            that patients did not actually give.
          </p>
        </div>
      )}

      {hasGoogleProfile && (
        <div className="mt-8">
          <Button href={siteConfig.social.googleBusinessProfile} external variant="secondary">
            See more patient reviews on Google
          </Button>
        </div>
      )}
    </Section>
  );
}
