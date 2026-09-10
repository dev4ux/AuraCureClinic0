"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "accent" | "outline-light" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-forest-800 text-ivory hover:bg-forest-700 active:bg-forest-900",
  secondary:
    "bg-transparent text-forest-900 border border-forest-800/30 hover:border-forest-800 hover:bg-forest-800/5",
  /** Muted gold. For primary actions sitting on the deep forest surfaces, where
   *  the forest-800 primary would not carry enough contrast. */
  accent: "bg-accent-500 text-forest-950 hover:bg-accent-100 active:bg-accent-600",
  "outline-light": "bg-transparent text-ivory border border-ivory/40 hover:bg-ivory/10",
  whatsapp: "bg-[#25863f] text-ivory hover:bg-[#1f7235]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Fires a GA4-compatible event on click. Safe to pass from server components. */
  analyticsEvent?: AnalyticsEvent;
  analyticsLocation?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  icon,
  external,
  type,
  disabled,
  analyticsEvent,
  analyticsLocation,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = analyticsEvent
    ? () => track(analyticsEvent, analyticsLocation ? { location: analyticsLocation } : {})
    : undefined;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={handleClick}>
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={handleClick} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
