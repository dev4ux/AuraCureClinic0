import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * E-E-A-T attribution block: who wrote it, who reviewed it, when it was last
 * updated. Appears on every clinical page so authorship is never ambiguous.
 */
export function MedicalReviewNotice({
  lastUpdated,
  className = "",
}: {
  lastUpdated: string;
  className?: string;
}) {
  const formatted = new Date(lastUpdated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={`rounded-lg border border-border bg-surface px-5 py-4 ${className}`}>
      <dl className="flex flex-wrap gap-x-8 gap-y-3 text-xs">
        <div>
          <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal-faint">Medically reviewed by</dt>
          <dd className="mt-1 font-medium text-charcoal">
            <Link href="/about-doctor" className="underline underline-offset-4 hover:text-forest-700">
              {siteConfig.doctor.name}
            </Link>
            , {siteConfig.doctor.credentials}
          </dd>
        </div>
        <div>
          <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal-faint">Last reviewed</dt>
          <dd className="mt-1 font-medium text-charcoal">
            <time dateTime={lastUpdated}>{formatted}</time>
          </dd>
        </div>
      </dl>
      <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-charcoal-faint">
        Written for patient awareness and reviewed for medical accuracy. See our{" "}
        <Link href="/editorial-policy" className="underline underline-offset-2 hover:text-forest-700">
          editorial and review policy
        </Link>
        .
      </p>
    </div>
  );
}
