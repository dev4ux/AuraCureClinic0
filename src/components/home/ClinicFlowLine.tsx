/**
 * The organic line threading behind the clinic collage.
 *
 * A single continuous stroke that enters at the right, sweeps down and left
 * across the composition, doubles back into one loop below centre, then runs
 * off the left edge — the movement carries the eye across the photographs
 * rather than decorating a corner.
 *
 * `preserveAspectRatio="none"` lets it stretch to whatever box it is given,
 * so the curve keeps spanning the full section at any width. It is drawn in
 * the site's warm accent at very low opacity and sits behind the photos.
 */
export function ClinicFlowLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 620"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <path
        d="M1520 40
           C 1380 130, 1440 250, 1300 292
           C 1170 330, 1080 250, 980 316
           C 872 388, 946 500, 1058 470
           C 1178 438, 1160 288, 1000 268
           C 792 242, 700 470, 470 486
           C 300 498, 150 430, -60 470"
        stroke="var(--color-accent-500)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.22"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
