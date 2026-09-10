import Link from "next/link";

/**
 * Custom wordmark: an "aura" ring drawn as concentric arcs around a still
 * centre — calm, non-clinical, no medical cross. Rendered as inline SVG so it
 * costs no extra request and stays crisp at any size.
 */
export function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "text-ivory" : "text-forest-900";
  const accent = light ? "text-accent-100" : "text-accent-600";

  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`Aura Cure Clinic — home`}>
      <svg viewBox="0 0 32 32" className={`h-8 w-8 ${accent}`} aria-hidden="true">
        <circle cx="16" cy="16" r="3.25" fill="currentColor" />
        <circle
          cx="16"
          cy="16"
          r="7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="33 14"
          className="origin-center transition-transform duration-500 ease-[var(--ease-soft)] group-hover:rotate-45"
        />
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="20 25"
          opacity="0.6"
          className="origin-center transition-transform duration-700 ease-[var(--ease-soft)] group-hover:-rotate-45"
        />
      </svg>
      <span className={`flex flex-col leading-none whitespace-nowrap ${ink}`}>
        <span className="font-heading text-lg font-semibold tracking-tight">Aura Cure</span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] ${
            light ? "text-ivory/60" : "text-charcoal-faint"
          }`}
        >
          Clinic
        </span>
      </span>
    </Link>
  );
}
