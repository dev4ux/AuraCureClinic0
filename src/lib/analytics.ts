"use client";

/**
 * Minimal, privacy-conscious analytics layer. Pushes GA4-compatible events to
 * window.dataLayer when analytics is loaded (see GoogleAnalytics.tsx); no-ops
 * otherwise so the site works identically with or without a configured
 * measurement ID. No personal form data is ever sent as an event payload.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsEvent =
  | "cta_call_click"
  | "cta_whatsapp_click"
  | "cta_directions_click"
  | "cta_appointment_click"
  | "appointment_form_submit_success"
  | "appointment_form_submit_error"
  | "scroll_depth_75";

export function track(event: AnalyticsEvent, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
