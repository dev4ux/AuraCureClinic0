import Image from "next/image";
import Link from "next/link";
import logoOnLight from "../../../public/images/logo/aura-cure-logo-on-light.png";
import logoOnDark from "../../../public/images/logo/aura-cure-logo-on-dark.png";

/**
 * The clinic's own logo artwork (green + gold wordmark with the stethoscope
 * profile). Two versions: dark ink for the ivory header, white ink for the
 * deep-green footer. Both are cropped, transparent-background renders of the
 * clinic-supplied files — regenerate with `node scripts/prepare-logos.mjs`.
 */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Aura Cure Clinic — home">
      <Image
        src={light ? logoOnDark : logoOnLight}
        alt="Aura Cure Clinic"
        // Header: 48px + the header's 2 x 10px padding = the 68px --header-h.
        // Footer: a little larger, since it has the room.
        className={light ? "h-16 w-auto" : "h-12 w-auto"}
        sizes={light ? "180px" : "140px"}
        loading={light ? "lazy" : "eager"}
      />
    </Link>
  );
}
