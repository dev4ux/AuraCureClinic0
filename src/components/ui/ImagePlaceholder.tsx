/**
 * Explicit, self-documenting slot for client-supplied photography. Renders a
 * visible reminder of exactly which real photo belongs here rather than
 * shipping stock imagery. Replace each usage with next/image once the clinic
 * provides original photographs.
 */
export function ImagePlaceholder({
  label,
  hint,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  hint?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border border-dashed border-border-strong bg-ivory-muted p-6 text-center ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-charcoal-faint/60" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      <p className="font-mono text-[11px] font-medium tracking-tight text-charcoal-soft">{label}</p>
      {hint && <p className="max-w-[22ch] text-[11px] leading-snug text-charcoal-faint">{hint}</p>}
    </div>
  );
}
