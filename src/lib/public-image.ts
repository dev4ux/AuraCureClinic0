import fs from "node:fs";
import path from "node:path";

/**
 * Server-only check for whether a file actually exists under /public.
 *
 * This is what lets photo slots be "drop the file in and it appears": the
 * check runs when the page is rendered/built, so a component can ask for
 * /images/clinic-exterior.jpg and fall back cleanly until that file is added,
 * then use it automatically on the next build. Without this, next/image would
 * request a missing path and render a broken image.
 *
 * Only import this from Server Components — it touches the filesystem.
 */
export function publicImageExists(src: string): boolean {
  if (!src.startsWith("/")) return false;

  // Strip any query string and decode %20 etc. so filenames with spaces work.
  const cleaned = decodeURIComponent(src.split("?")[0]);

  // Refuse to walk outside /public.
  const resolved = path.resolve(path.join(process.cwd(), "public", cleaned));
  const publicDir = path.resolve(path.join(process.cwd(), "public"));
  if (!resolved.startsWith(publicDir + path.sep)) return false;

  try {
    return fs.statSync(resolved).isFile();
  } catch {
    return false;
  }
}
