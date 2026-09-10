"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { serviceCategories } from "@/data/service-categories";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/ui/icons";

/**
 * The "All Services" mega-menu.
 *
 * Replaces the former Treatments and Conditions tabs, which were two doors
 * onto the same catalogue. Four columns — one per area of practice — with
 * every service listed and directly clickable, so a patient reaches the page
 * they want in one click rather than landing on an index and searching again.
 *
 * Interaction follows the WAI-ARIA disclosure pattern rather than a menu
 * pattern: these are links to pages, not commands, so ordinary Tab order
 * through them is what a screen-reader user expects. Pointer users get
 * hover-to-open with a close delay; keyboard users get click/Enter, Escape to
 * dismiss, and focus returning to the trigger.
 */
export function ServicesMegaMenu({ isActive }: { isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  /** Hover-out close is delayed so the pointer can cross the gap to the panel. */
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => cancelClose, []);

  /**
   * Hover-to-open is for mice only. On a touch device a tap fires
   * pointerenter *and* click, so an unguarded hover handler would open the
   * panel and the click would immediately toggle it shut again — the menu
   * would never open at all. Resolved after mount so SSR and client agree.
   */
  const [hoverCapable, setHoverCapable] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHoverCapable(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    /* Focus leaving the whole disclosure closes it — tabbing past the last
       link should not leave an open panel behind. */
    const onFocusIn = (e: FocusEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="static"
      onMouseEnter={
        hoverCapable
          ? () => {
              cancelClose();
              setOpen(true);
            }
          : undefined
      }
      onMouseLeave={hoverCapable ? scheduleClose : undefined}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`relative flex items-center gap-1 whitespace-nowrap text-[13.5px] font-medium transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:text-forest-700 ${
          isActive ? "text-forest-800" : "text-charcoal-soft"
        }`}
      >
        All Services
        <ChevronDownIcon
          className={`h-3 w-3 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] ${
            open ? "rotate-180" : ""
          }`}
        />
        {isActive && <span aria-hidden="true" className="absolute -bottom-1.5 left-0 h-px w-full bg-accent-500" />}
      </button>

      {/* Full-width panel anchored to the header, not the trigger — four
          columns need the whole measure, and a trigger-anchored dropdown
          would overflow the viewport on the right. */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-ivory shadow-[0_16px_40px_-24px_rgba(34,34,29,0.35)]"
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-x-8 gap-y-9 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div key={category.id} className="min-w-0">
                <div className="border-b border-border pb-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-heading text-[15px] font-semibold text-forest-900">{category.name}</h3>
                    {category.priceFrom && (
                      <span className="shrink-0 text-[11px] tabular-nums text-charcoal-faint">
                        From {category.priceFrom}
                      </span>
                    )}
                  </div>
                  {/* Lets a reader rule the column in or out before scanning
                      twelve service names to find out what is in it. */}
                  <p className="mt-1 text-[11.5px] leading-snug text-charcoal-faint">{category.menuHint}</p>
                </div>

                <ul className="mt-2.5 space-y-0.5">
                  {category.services.map((service) =>
                    service.href ? (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-2 py-[0.4rem] text-[13px] leading-snug text-charcoal-soft transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-ivory-muted hover:text-forest-800"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={service.name}
                        className="block px-2 py-[0.4rem] text-[13px] leading-snug text-charcoal-faint"
                      >
                        {service.name}
                      </li>
                    )
                  )}
                </ul>

                <Link
                  href={category.href}
                  onClick={() => setOpen(false)}
                  className="group mt-3 inline-flex items-center gap-1.5 px-2 text-[12.5px] font-medium text-forest-700 underline-offset-4 hover:underline"
                >
                  All {category.name.toLowerCase()}
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-charcoal-faint">
              Not sure which applies to you? Every service is assessed in person at{" "}
              <span className="text-charcoal-soft">Aura Cure Clinic, Sikar</span> before anything is recommended.
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-forest-700 underline-offset-4 hover:underline"
              >
                Browse all services
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/appointment"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md bg-forest-800 px-4 py-2 text-[13px] font-medium text-ivory transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:bg-forest-700"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
