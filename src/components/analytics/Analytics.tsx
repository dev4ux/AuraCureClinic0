"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import { track } from "@/lib/analytics";

/**
 * GA4 loads only when a measurement ID is configured via NEXT_PUBLIC_GA4_ID.
 * Without it, no third-party script is requested at all — keeping the default
 * build free of external dependencies and privacy overhead.
 */
export function Analytics() {
  const gaId = siteConfig.analytics.ga4MeasurementId;

  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

export function ScrollDepthTracker() {
  const fired = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (fired.current) return;
      const scrolled =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrolled >= 0.75) {
        fired.current = true;
        track("scroll_depth_75", { path: window.location.pathname });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
