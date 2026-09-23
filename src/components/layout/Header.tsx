"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { serviceCategories } from "@/data/service-categories";
import { Button } from "@/components/ui/Button";
import { CalendarIcon, ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/90 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-2.5 sm:px-8 lg:px-10">
        <Logo />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-x-5 xl:gap-x-7">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (item.megaMenu) {
                return (
                  <li key={item.href}>
                    <ServicesMegaMenu isActive={isActive} />
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative whitespace-nowrap text-[13.5px] font-medium transition-colors duration-[var(--dur-fast)] ease-[var(--ease-soft)] hover:text-forest-700 ${
                      isActive ? "text-forest-800" : "text-charcoal-soft"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-accent-500"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={siteConfig.contact.phoneHref}
            onClick={() => track("cta_call_click", { location: "header" })}
            className="hidden items-center gap-1.5 whitespace-nowrap text-[13.5px] font-medium text-charcoal-soft transition-colors hover:text-forest-700 2xl:flex"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <Button
            href="/appointment"
            icon={<CalendarIcon className="h-4 w-4" />}
            analyticsEvent="cta_appointment_click"
            analyticsLocation="header"
          >
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-md border border-border-strong px-3 py-2 text-sm font-medium text-charcoal xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-ivory xl:hidden">
          <nav aria-label="Mobile" className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                /* On mobile the mega-menu becomes a native <details> group —
                   nothing to position, and it works before hydration. */
                if (item.megaMenu) {
                  return (
                    <li key={item.href} className="border-b border-border/60 last:border-0">
                      <details className="group/svc">
                        <summary
                          className={`flex cursor-pointer list-none items-center justify-between py-3.5 text-[15px] font-medium [&::-webkit-details-marker]:hidden ${
                            isActive ? "text-forest-800" : "text-charcoal-soft"
                          }`}
                        >
                          {item.label}
                          <ChevronDownIcon className="h-4 w-4 transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-open/svc:rotate-180" />
                        </summary>

                        <div className="pb-4">
                          {serviceCategories.map((category) => (
                            <details key={category.id} className="group/cat mt-1 border-t border-border/50 pt-1">
                              <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 [&::-webkit-details-marker]:hidden">
                                <span>
                                  <span className="block text-[13.5px] font-semibold text-forest-900">
                                    {category.name}
                                  </span>
                                  <span className="mt-0.5 block text-[11.5px] leading-snug text-charcoal-faint">
                                    {category.menuHint}
                                  </span>
                                </span>
                                <ChevronDownIcon className="ml-3 h-3.5 w-3.5 shrink-0 text-charcoal-faint transition-transform duration-[var(--dur-fast)] ease-[var(--ease-soft)] group-open/cat:rotate-180" />
                              </summary>
                              <ul className="pb-2 pl-1">
                                {category.services.map((service) =>
                                  service.href ? (
                                    <li key={service.name}>
                                      <Link
                                        href={service.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-2 pl-1 text-[13.5px] text-charcoal-soft"
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ) : (
                                    <li key={service.name} className="block py-2 text-[14px] text-charcoal-faint">
                                      {service.name}
                                    </li>
                                  )
                                )}
                              </ul>
                            </details>
                          ))}

                          <div className="mt-4 flex flex-col gap-2.5 border-t border-border/50 pt-4">
                            <Link
                              href="/services"
                              onClick={() => setMobileOpen(false)}
                              className="text-[14px] font-medium text-forest-700 underline underline-offset-4"
                            >
                              Browse all services
                            </Link>
                            <Link
                              href="/appointment"
                              onClick={() => setMobileOpen(false)}
                              className="inline-flex w-full items-center justify-center rounded-md bg-forest-800 px-4 py-2.5 text-[14px] font-medium text-ivory"
                            >
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </details>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="border-b border-border/60 last:border-0">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3.5 text-[15px] font-medium ${
                        isActive ? "text-forest-800" : "text-charcoal-soft"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button
              href="/appointment"
              size="lg"
              className="mt-5 w-full"
              icon={<CalendarIcon className="h-4 w-4" />}
              analyticsEvent="cta_appointment_click"
              analyticsLocation="mobile_menu"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
