import Link from "next/link";
import type { FestiveAnnouncement } from "@/config/festive";
import { Sparkle } from "./Decor";

/**
 * The festive strip above the navigation. Rendered inside the fixed header, so
 * its height is reserved by `--bar-h` (see `globals.css`), which the root
 * layout switches on with `data-festive-bar` only when there is a message.
 * One line at every width: the short form on phones, the long one from `sm`.
 *
 * It holds no state: `Header` renders it from a prop the server layout
 * resolved at build time, so the browser never decides what it says.
 */
export function AnnouncementBar({ announcement }: { announcement: FestiveAnnouncement }) {
  return (
    <div className="relative flex h-[var(--bar-h)] items-center justify-center overflow-hidden bg-[linear-gradient(90deg,var(--color-maroon-deep),var(--color-maroon)_50%,var(--color-maroon-deep))] px-4 text-[0.8125rem] text-cream">
      <Link
        href={announcement.href}
        className="flex min-w-0 items-center gap-2 py-1 hover:underline hover:decoration-gold-soft hover:underline-offset-4"
      >
        <Sparkle className="size-3 shrink-0 text-gold-soft" />
        <span className="truncate sm:hidden">{announcement.short}</span>
        <span className="hidden truncate sm:inline">{announcement.long}</span>
        <span className="hidden shrink-0 font-semibold text-gold-soft md:inline">
          {announcement.cta} &rarr;
        </span>
        <Sparkle className="size-3 shrink-0 text-gold-soft" delay={1.2} />
      </Link>
    </div>
  );
}
