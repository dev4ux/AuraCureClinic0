import Image from "next/image";
import type { ConditionImage } from "@/lib/types";
import { CareIcon } from "./icon-registry";

/**
 * Renders a condition photograph, or — while no licensed photograph exists
 * for that slot — a branded placeholder panel in the site's own palette.
 *
 * The placeholder is a deliberate design element rather than a broken-image
 * state: a soft botanical wash carrying the condition's own line icon. That
 * keeps every page shippable today, and swapping in a real photograph is a
 * one-line change in data/condition-media.ts with no component edits.
 */
export function ConditionFigure({
  image,
  icon,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  image?: ConditionImage;
  icon?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (image?.src) {
    return (
      <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-ivory-muted ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-[var(--ease-soft)] motion-safe:hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={image?.alt ?? ""}
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-border bg-ivory-muted ${className}`}
    >
      {/* Botanical wash in the brand green, kept very low contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 12%, rgba(23,117,80,0.13) 0%, transparent 58%), radial-gradient(90% 80% at 12% 92%, rgba(247,183,2,0.12) 0%, transparent 60%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <CareIcon name={icon} className="h-20 w-20 text-forest-800/[0.16] sm:h-24 sm:w-24" />
      </div>
    </div>
  );
}
