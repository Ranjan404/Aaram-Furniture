/**
 * Tiny class name joiner. Accepts any falsy value so `cond && "class"` reads
 * naturally at call sites without pulling in clsx for a two line helper.
 */
export function cn(...parts: unknown[]): string {
  return parts.filter((p) => typeof p === "string" && p.length > 0).join(" ");
}
