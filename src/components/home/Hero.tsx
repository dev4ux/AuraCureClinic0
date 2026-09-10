import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { CalendarIcon, PhoneIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    /* One-screen fold: on large viewports the hero takes only the space left
       after the sticky header AND the credentials bar below it, so header +
       hero + credentials add up to a single screen — the credentials row is
       fully visible instead of being cut off at the bottom edge. */
    <section className="relative flex flex-col overflow-hidden border-b border-border bg-ivory lg:h-[calc(100svh-var(--header-h)-var(--trustbar-h)-2px)] lg:min-h-[29rem]">
      {/* Soft aura wash — a single static radial gradient, no animation cost */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, var(--color-forest-600) 0%, transparent 65%)",
        }}
      />

      {/* Grid breaks out of the standard Container so the photo can bleed to
          the browser's right edge; the text column keeps the site's usual
          left inset (matches Container's max-w-7xl + lg:px-10 gutter). */}
      <div className="relative grid min-h-0 flex-1 gap-8 pb-8 pt-8 sm:pb-10 sm:pt-10 lg:grid-cols-[47fr_53fr] lg:items-stretch lg:gap-0 lg:pb-0 lg:pt-0">
        <div
          className="px-5 sm:px-8 lg:flex lg:flex-col lg:justify-center lg:py-6 lg:pr-10"
          style={{ paddingLeft: "max(1.25rem, calc((100vw - 1280px) / 2 + 2.5rem))" }}
        >
          <p className="animate-rise flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600 sm:text-xs">
            <span>{siteConfig.brand}</span>
            <span aria-hidden="true" className="text-charcoal-faint">
              ·
            </span>
            <span className="text-charcoal-faint">Homeopathy • Skin • Hair • Laser</span>
          </p>

          {/* Fluid type: the headline shrinks with the viewport instead of
              pushing the photo or the CTAs past the bottom edge. */}
          <h1 className="animate-rise-opaque mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl lg:mt-4 lg:text-[clamp(2.25rem,3.05vw,3rem)]">
            Sikar&rsquo;s Trusted Homeopathy Doctor
          </h1>

          <div className="animate-rise mt-4 lg:mt-4" style={{ animationDelay: "120ms" }}>
            <p className="font-heading text-lg font-semibold text-forest-900 sm:text-xl">
              {siteConfig.doctor.name}
            </p>
            <p className="mt-1 text-sm text-charcoal-faint">
              {siteConfig.doctor.credentials} · {siteConfig.doctor.title}
            </p>
          </div>

          <p className="animate-rise mt-4 max-w-xl text-base leading-relaxed text-charcoal-soft lg:mt-4 lg:text-[1.0625rem]" style={{ animationDelay: "200ms" }}>
            Safe, side-effect-free homeopathic care for skin, hair &amp; health concerns.{" "}
            <strong className="font-semibold text-charcoal">
              At Aura Cure Clinic in Sikar, Rajasthan — online consultations across India.
            </strong>
          </p>

          <div className="animate-rise mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-7" style={{ animationDelay: "280ms" }}>
            <Button
              href="/appointment"
              size="lg"
              icon={<CalendarIcon className="h-4 w-4" />}
              analyticsEvent="cta_appointment_click"
              analyticsLocation="hero"
            >
              Book Your Appointment
            </Button>
            <Button
              href={siteConfig.contact.phoneHref}
              size="lg"
              variant="secondary"
              icon={<PhoneIcon className="h-4 w-4" />}
              analyticsEvent="cta_call_click"
              analyticsLocation="hero"
            >
              Call Now
            </Button>
          </div>
        </div>

        {/* Visual: the family photo bleeds to the viewport's right edge,
            rounded only on the left. On desktop it fits the height the hero
            has left over — capped so it never blows up on tall screens — and
            shrinks on short ones instead of pushing the fold down. */}
        <div className="animate-rise relative min-h-0 lg:flex lg:h-full lg:items-end" style={{ animationDelay: "80ms", animationDuration: "var(--dur-slow)" }}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-16 -bottom-6 h-16 rounded-full opacity-35 blur-2xl sm:-bottom-8 sm:h-20 lg:inset-x-20 lg:-bottom-10 lg:h-24"
            style={{ background: "radial-gradient(ellipse at center, var(--color-forest-700) 0%, transparent 72%)" }}
          />
          <div className="relative h-[17rem] w-full overflow-hidden rounded-l-[1.75rem] sm:h-[21rem] lg:h-[min(100%,27rem)] xl:h-[min(100%,31rem)]">
            <Image
              src="/images/family.webp"
              alt={`${siteConfig.doctor.name} and team at ${siteConfig.brand}`}
              fill
              sizes="(min-width: 1024px) 53vw, 100vw"
              className="object-cover object-[center_top]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
