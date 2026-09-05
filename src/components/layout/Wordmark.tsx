import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Brand lockup: a monogram tile plus the business name. The monogram is drawn
 * from `siteConfig.shortName`, so renaming the business updates it everywhere.
 */
export function Wordmark({
  tone = "dark",
  className,
  href = "/",
}: {
  tone?: "dark" | "light";
  className?: string;
  href?: string;
}) {
  const monogram = siteConfig.shortName.charAt(0).toUpperCase();

  return (
    <Link
      href={href}
      className={cn("group flex min-w-0 items-center gap-3", className)}
      aria-label={`${siteConfig.name} - home`}
    >
      <span
        aria-hidden="true"
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl border font-display text-lg leading-none transition-colors duration-300",
          tone === "light"
            ? "border-white/35 bg-white/10 text-white group-hover:bg-white/20"
            : "border-line-strong bg-white text-ink group-hover:border-ink",
        )}
      >
        {monogram}
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.3rem] tracking-tight",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          {siteConfig.name}
        </span>
        {/* Wide letter-spacing makes this line long: it is hidden on the
            narrowest screens so it can never push the header actions off. */}
        <span
          className={cn(
            "mt-1 hidden text-[0.5625rem] font-semibold tracking-[0.22em] whitespace-nowrap uppercase min-[430px]:block",
            tone === "light" ? "text-white/60" : "text-stone-light",
          )}
        >
          Sofas &middot; Beds &middot; Custom
        </span>
      </span>
    </Link>
  );
}
