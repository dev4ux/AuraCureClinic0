"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/**
 * A link that reports a conversion event. Exists so server components can
 * attach analytics to a link without becoming client components themselves.
 */
export function TrackedLink({
  href,
  children,
  className = "",
  event,
  location,
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  event: AnalyticsEvent;
  location: string;
  external?: boolean;
}) {
  const onClick = () => track(event, { location });

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
