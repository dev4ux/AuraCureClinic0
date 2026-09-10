import Image from "next/image";
import { publicImageExists } from "@/lib/public-image";
import type { ClinicPhoto } from "@/data/clinic-gallery";

/**
 * One photograph in the clinic composition.
 *
 * Renders the real photo when the file exists under /public, and a quiet
 * labelled fallback until it does — so the composition holds its shape today
 * and needs no code change once the photographs are supplied.
 *
 * Server Component only: the existence check reads the filesystem.
 */
export function ClinicPhotoFrame({
  photo,
  className = "",
  sizes,
  priority = false,
}: {
  photo: ClinicPhoto;
  /** Positioning and aspect come from the parent composition. */
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const hasPhoto = publicImageExists(photo.src);

  return (
    <div className={`relative overflow-hidden rounded-lg bg-surface ${className}`}>
      {hasPhoto ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: photo.focalPoint ?? "50% 50%" }}
        />
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-border bg-surface p-4 text-center"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-charcoal-faint/45" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
          <p className="text-[11px] font-medium leading-snug text-charcoal-faint">{photo.slotName}</p>
        </div>
      )}
    </div>
  );
}
