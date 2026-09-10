/**
 * Minimal monochrome line icons for the "What We Help With" card grid.
 * Same visual language as components/ui/icons.tsx (24x24 viewBox, stroke
 * currentColor, rounded joins) — decorative only, never conveying meaning
 * on their own, so all carry aria-hidden.
 */

type IconProps = { className?: string };

export function SkinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.5 4.5c-2.5 1-4 3.6-4 6.3 0 1.4.4 2.4 1 3.4.7 1.1 1 1.7 1 3.1a2.7 2.7 0 0 0 2.7 2.7c1 0 1.5-.4 2.1-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 4.3c3 .7 5.5 3.4 5.5 6.9 0 3.8-2.7 6-4 7.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="11" r="1.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HairIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 21c-.3-3 .5-4.4.5-6.5C6.5 10 8.8 4 12 4s5.5 6 5.5 10.5c0 2.1.8 3.5.5 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 21c-.2-2.4.3-3.6.3-5.3 0-3 .8-6.7 2.2-6.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 21c.2-2.4-.3-3.6-.3-5.3 0-3-.8-6.7-2.2-6.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LungsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 10c-.5-2-1.8-2.5-3-2.5-2.2 0-3.5 2-3.5 5 0 3.3 1.2 6.5 2.8 6.5 1 0 1.6-.7 1.9-1.6l1.8-6.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10c.5-2 1.8-2.5 3-2.5 2.2 0 3.5 2 3.5 5 0 3.3-1.2 6.5-2.8 6.5-1 0-1.6-.7-1.9-1.6L12 10.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function JointIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 13.5c-1.4 1.4-2 2.6-1.2 3.7 1 1.3 2.4.9 3.8-.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 10.5c1.4-1.4 2-2.6 1.2-3.7-1-1.3-2.4-.9-3.8.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M9.6 16.6 14.4 7.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function WellnessIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8.7c-.9-1.1-2.5-1.1-3.2-.1-.7 1-.4 2.1.6 3.1L12 14.3l2.6-2.6c1-1 1.3-2.1.6-3.1-.7-1-2.3-1-3.2.1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KidneyIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 4.5c-2.8 0-4.5 2.5-4.5 6s1.7 9 4.5 9c2 0 2.2-1.8 1.9-3.4-.3-1.5-1.2-2.2-.2-3.3.9-1 2.8-.9 3.8-.1 1.5 1.2 1 3.5 1 4.8 0 1.3 1 2 2 2 2 0 3-3 3-6.5S18.5 4.5 15.5 4.5c-2 0-2.4 1.6-3.5 1.6S11 4.5 9 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12.3" cy="12.3" r="1.1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function SpineIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 3.5c-2 1-2 2-1 3.3 1 1.3 1 2-.2 3.2-1.2 1.2-1.2 2 0 3.2 1.2 1.2 1.2 2 .2 3.3-1 1.3-1 2.3 1 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 6h2M8 9.5h2.2M8.5 13h2M8 16.5h2.2M8.5 20h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BackPainIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="5.2" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.5v4.3c0 1-.4 1.5-1.4 2.2l-2 1.4c-.8.6-1 1.1-1 2v3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.5l2.4 1.8c.7.5.9.9 1.1 1.8l.9 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 21.5h2M13.5 21.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Deliberately a plain medical cross-in-circle — discreet, not literal. */
export function DiscreetCareIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PrivacyShieldIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 5.5 6v5.5c0 4.4 2.8 7.5 6.5 9 3.7-1.5 6.5-4.6 6.5-9V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m9.3 12.1 1.9 1.9 3.5-3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DropletIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.8c2.6 3.4 5.5 7 5.5 10.2a5.5 5.5 0 1 1-11 0c0-3.2 2.9-6.8 5.5-10.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FollicleIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6.5c1.6-1.4 3-1.4 3.6-.4M12 10c1.9-1.1 3.4-.7 3.9.5M12 9c-1.6-1.4-3-1.4-3.6-.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="17.5" r="3.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function LaserIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12h11.5M17 8.5l3-3M17 15.5l3 3M20.5 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WaterDropIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.8c2.6 3.4 5.5 7 5.5 10.2a5.5 5.5 0 1 1-11 0c0-3.2 2.9-6.8 5.5-10.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.7 15.3a2.5 2.5 0 0 0 2.5 2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function PeelIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4c4.5 1 7 4.3 7 8 0 4.4-3.1 8-7 8s-7-3.6-7-8c0-3.7 2.5-7 7-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 7.5v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function MesotherapyIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 18 17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m14.5 4.5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="18" r="1.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9.5 13.5h.01M12 11h.01M14.5 8.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LaserHairRemovalIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 12h9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 12h6M17.3 9l2.7 3-2.7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 7c1.8 1.6 1.8 3.4 0 5M4.5 17c1.8-1.6 1.8-3.4 0-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Generic health icons — shared across condition guide pages for
 * symptom cards and contributing factors.
 * ------------------------------------------------------------------ */

export function PainPulseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 12h3.5l2-5 3.5 10 2.5-6 1.5 3H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StiffnessIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4.5" y="9" width="15" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9V6.5M16 9V6.5M8 15v2.5M16 15v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MovementIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="13.5" cy="4.8" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 8.2 9.6 11l2.2 2.6-1 3.4M11.8 13.6 15 16l1 4M9.6 11 6 10M15.5 9.6l3 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RadiatingIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6.2V4M12 20v-2.2M6.2 12H4M20 12h-2.2M8 8l-1.6-1.6M17.6 17.6 16 16M16 8l1.6-1.6M6.4 17.6 8 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.8V12l2.8 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SittingIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8.2v4.4h5.2M14.2 12.6V18M6 12.6V18M6 18h3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 8v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PostureIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="4.8" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8c-2 1.6-2.6 4-2 6.2l1.4 5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.6 14.2h4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17.5 4.5v15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 2.4" />
    </svg>
  );
}

export function StrainIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12c2.2 0 2.2-3 4.4-3s2.2 6 4.4 6 2.2-3 4.4-3 2.2 1.5 2.8 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RepetitiveIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 9.5A7 7 0 0 1 18.6 8M19 14.5A7 7 0 0 1 5.4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18.8 4.6v3.6h-3.6M5.2 19.4v-3.6h3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InjuryIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="8.5" width="16" height="7" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 8.5v7M14.5 8.5v7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11.4 11.2h1.2M11.4 13h1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function StressIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 19.5c-3.6-2.4-6.5-5-6.5-8.5a4 4 0 0 1 6.5-3.1A4 4 0 0 1 18.5 11c0 3.5-2.9 6.1-6.5 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m9.4 11.4 1.8 1.4-1 1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DietIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6.5 3.5v7a2 2 0 0 0 4 0v-7M8.5 3.5v7M8.5 12.5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 3.5c-1.4 1.2-2 3-2 5s.8 3 2 3 2-1 2-3-.6-3.8-2-5Zm0 8v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WeatherIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7.5 15.5a3.5 3.5 0 0 1 .3-7 5 5 0 0 1 9.5 1.4 3.1 3.1 0 0 1-.8 6.1H7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 19l-.6 1.6M13 19l-.6 1.6M17 19l-.6 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function HormoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.4 10.4 13.6 13.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SleepIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M19.5 14.2A8 8 0 0 1 9.8 4.5a8 8 0 1 0 9.7 9.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function AlertIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4.8 3.8 19h16.4L12 4.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 10v3.6M12 16.2h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BreathIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 9.5h8.5a2.75 2.75 0 1 0-2.75-2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 14h11a2.75 2.75 0 1 1-2.75 2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SwellingIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="13" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 5.2V3M6.4 6.8 5 5.4M17.6 6.8 19 5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ItchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 19c1.4-1 2-2.4 2-4.2V9a1.4 1.4 0 0 1 2.8 0v3.4M9.8 12V7a1.4 1.4 0 0 1 2.8 0v5M12.6 12.4V8.4a1.4 1.4 0 0 1 2.8 0v5.2c0 3-1.6 5.4-4.4 5.4H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FatigueIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.4 10.2h2.2M13.4 10.2h2.2M9.4 15c1.4-1 3.8-1 5.2 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function StomachIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 4v4.5c0 3 2 4 4 4.5 2.4.6 4 1.8 4 4a4 4 0 0 1-7.6 1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.6 4h4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeadIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15.5 20v-2.6c0-1 .4-1.5 1.1-2.2 1.3-1.2 2-2.8 2-4.6a6.8 6.8 0 1 0-11.4 5c.6.6.8 1 .8 1.8V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.2 9.6c.8-1 2.4-1 3.2 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ListenIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M20 12.4c0 3.9-3.6 7-8 7-1 0-2-.16-2.9-.46L4.5 20.5l1.2-3.5A6.6 6.6 0 0 1 4 12.4c0-3.9 3.6-7 8-7s8 3.1 8 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ChartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 19.5h15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 16.5v-4M12 16.5v-8M16.5 16.5v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
