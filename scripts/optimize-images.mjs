#!/usr/bin/env node
/**
 * Resizes and re-encodes source photographs to WebP.
 *
 * Clinic-supplied photos routinely arrive as multi-megabyte, several-thousand-
 * pixel-wide JPEGs/PNGs straight off a phone or DSLR — far larger than any
 * <Image> in this site ever renders them. next/image will resize and
 * transcode on request regardless, but making it do that work against a 5MB
 * source on every cache miss is wasteful, and the giant originals otherwise
 * just sit in the repo and the deploy bundle. This script does that resize
 * once, ahead of time, at a width sized to the image's actual largest usage
 * in the app (see the `sizes` prop at each call site) plus headroom for
 * high-DPI screens — not to the theoretical print resolution the source
 * happens to have.
 *
 * Quality 84 with mozjpeg-derived WebP encoding is visually indistinguishable
 * from the source at these dimensions; effort 6 is libwebp's slowest/best
 * compression pass, worth paying for since this runs once, not per-request.
 *
 * Usage: node scripts/optimize-images.mjs
 * Add new jobs to the `jobs` array below as new source photos arrive.
 */

import sharp from "sharp";
import { existsSync, statSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const publicDir = path.join(root, "public", "images");

/** @type {{ src: string; dest: string; width: number; quality?: number }[]} */
const jobs = [
  // Before/after result pairs — displayed at a small card width but resized
  // with headroom (900px) for a future full-size/lightbox view.
  ...[
    "acne",
    "dark-circles",
    "dull-skin",
    "eczema",
    "facial-hair",
    "hair-fall",
    "hair-thinning",
    "melasma",
    "warts",
  ].flatMap((id) => [
    { src: `${id}-before.jpg.jpg`, dest: `results/${id}-before.webp`, width: 900 },
    { src: `${id}-after.jpg.jpg`, dest: `results/${id}-after.webp`, width: 900 },
  ]),
  // Landed directly in results/ rather than the top-level drop folder — same
  // treatment, different source path.
  { src: "results/alopecia-before.jpg.jpg", dest: "results/alopecia-before.webp", width: 900 },
  { src: "results/alopecia-after.jpg.jpg", dest: "results/alopecia-after.webp", width: 900 },

  // The four service-category photos (Hair Care, Skin Care, Laser & Aesthetic,
  // Homeopathy) — already processed; recorded here for reference and in case
  // the clinic supplies replacements at these same slots later. Sources
  // landed directly in public/ rather than public/images/, hence "../".
  { src: "../Hair Care Hair Treatment Clinic.png", dest: "care/hair-care.webp", width: 1400 },
  { src: "../Skin Care Clinic · Dermatologist.png", dest: "care/skin-care.webp", width: 1400 },
  { src: "../Laser & Aesthetic.png", dest: "care/laser-aesthetic.webp", width: 1400 },
  { src: "../Homeopathy & General Health.png", dest: "care/homeopathy.webp", width: 1400 },

  // Existing site photography — already in use, but shipped oversized.
  // family.png is the Hero's LCP image at up to 53vw; 2400px covers large
  // high-DPI screens without carrying the source's full resolution.
  { src: "family.png", dest: "family.webp", width: 2400 },
  // Doctor portrait: used up to 35vw on the About page.
  { src: "dr-nitin-sharma.png", dest: "dr-nitin-sharma.webp", width: 1400 },
  // Consultation visual: source is already close to its largest render size
  // (52vw fill / 34rem fixed) — recompress and convert without upscaling.
  { src: "newdr.consult.png", dest: "newdr.consult.webp", width: 1536 },
];

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for (const job of jobs) {
    const srcPath = path.join(publicDir, job.src);
    const destPath = path.join(publicDir, job.dest);

    if (!existsSync(srcPath)) {
      rows.push([job.src, "MISSING SOURCE", "-", "-"]);
      continue;
    }

    await mkdir(path.dirname(destPath), { recursive: true });

    const before = statSync(srcPath).size;
    await sharp(srcPath)
      .rotate() // apply EXIF orientation, then drop the tag — avoids sideways thumbnails
      .resize({ width: job.width, withoutEnlargement: true })
      .webp({ quality: job.quality ?? 84, effort: 6 })
      .toFile(destPath);
    const after = statSync(destPath).size;

    totalBefore += before;
    totalAfter += after;
    rows.push([
      job.src,
      `${(before / 1024 / 1024).toFixed(1)}MB`,
      `${(after / 1024).toFixed(0)}KB`,
      `-${(100 - (after / before) * 100).toFixed(0)}%`,
    ]);
  }

  const widths = [0, 1, 2, 3].map((i) => Math.max(...rows.map((r) => r[i].length)));
  for (const r of rows) console.log(r.map((c, i) => c.padEnd(widths[i])).join("  "));

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`
  );
}

run();
