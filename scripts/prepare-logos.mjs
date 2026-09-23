#!/usr/bin/env node
/**
 * Turns the clinic-supplied logo artwork into header/footer-ready files.
 *
 * The source PNGs arrive as opaque rectangles — the light-background version on
 * white, the dark-background version on deep green — with generous empty
 * margins around the mark. Dropped onto the site as-is they would show as a
 * visible box on the ivory header and a mismatched green panel in the footer.
 *
 * So for each source we:
 *   1. "Colour-to-alpha" the background: every pixel's alpha becomes how far it
 *      sits from the background colour, and its colour is un-blended against
 *      that background. Anti-aliased edges stay smooth on any surface, instead
 *      of the jagged fringe a simple threshold would leave.
 *   2. Trim the empty margin so the mark fills its box.
 *   3. Resize to 900px wide — ample for a ~44px-tall header logo at 3x DPR.
 *
 * Usage: node scripts/prepare-logos.mjs
 */

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const imagesDir = path.join(root, "public", "images");

const jobs = [
  // Dark ink + gold — for light surfaces (header).
  { src: "clinilogoLight.png", dest: "logo/aura-cure-logo-on-light.png" },
  // White ink + gold — for dark surfaces (footer).
  { src: "cliniclogoDark.png", dest: "logo/aura-cure-logo-on-dark.png" },
];

/** Per-channel wobble in the source background, in 0–255 levels. */
const NOISE_LEVELS = 8;
/** Pixels fainter than this after un-blending are treated as background. */
const NOISE_FLOOR = 0.04;

async function prepare({ src, dest }) {
  const { data, info } = await sharp(path.join(imagesDir, src))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Background = the average of the four corners (the artwork has wide empty
  // margins, and the fill wobbles by a few levels).
  const { width: w, height: h } = info;
  const corners = [0, w - 1, (h - 1) * w, h * w - 1].map((p) => p * 4);
  const bg = [0, 1, 2].map((c) =>
    Math.round(corners.reduce((sum, i) => sum + data[i + c], 0) / corners.length)
  );

  for (let i = 0; i < data.length; i += 4) {
    let alpha = 0;
    for (let c = 0; c < 3; c++) {
      const v = data[i + c];
      const b = bg[c];
      // Distance from the background as a fraction of the room this channel
      // has to move in that direction. A few levels of scanner/compression
      // noise are ignored, and a channel pinned near 0 or 255 (e.g. the red
      // channel of the green background) cannot vote — one step of noise there
      // would otherwise read as fully opaque.
      const room = v >= b ? 255 - b : b;
      if (room < 32) continue;
      const a = Math.max(0, Math.abs(v - b) - NOISE_LEVELS) / (room - NOISE_LEVELS);
      if (a > alpha) alpha = Math.min(1, a);
    }
    if (alpha < NOISE_FLOOR) {
      data[i + 3] = 0;
      continue;
    }
    for (let c = 0; c < 3; c++) {
      const b = bg[c];
      data[i + c] = Math.round(Math.min(255, Math.max(0, b + (data[i + c] - b) / alpha)));
    }
    data[i + 3] = Math.round(alpha * 255);
  }

  // Crop to the bounding box of clearly-visible pixels (sharp's trim() trips
  // over the faint compression speckle scattered across the margins).
  const { width, height } = info;
  let left = width, top = height, right = -1, bottom = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] < 128) continue;
      if (x < left) left = x;
      if (x > right) right = x;
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }
  const pad = 4;
  left = Math.max(0, left - pad);
  top = Math.max(0, top - pad);
  right = Math.min(width - 1, right + pad);
  bottom = Math.min(height - 1, bottom + pad);

  const out = path.join(imagesDir, dest);
  await sharp(data, { raw: info })
    .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
    .resize({ width: 900, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: false })
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(`${src} -> ${dest} (${meta.width}x${meta.height})`);
}

await mkdir(path.join(imagesDir, "logo"), { recursive: true });
for (const job of jobs) await prepare(job);
