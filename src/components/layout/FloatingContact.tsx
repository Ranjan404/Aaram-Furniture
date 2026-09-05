"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Persistent conversion actions.
 *
 * Deliberately restrained: nothing appears until the visitor has scrolled past
 * the hero (where the same CTAs are already on screen), there is no popup or
 * auto-opening chat bubble, and the bar never covers page content because the
 * footer reserves matching bottom padding on small screens.
 */
export function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Phones and small tablets: a two-action bar pinned to the bottom. */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 p-3 backdrop-blur-xl transition-transform duration-500 ease-[var(--ease-premium)] lg:hidden",
          "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
          show ? "translate-y-0" : "translate-y-full",
        )}
        aria-hidden={!show}
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <a
            href={whatsappHref(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={show ? undefined : -1}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-white shadow-soft"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp us
          </a>
          <a
            href={telHref}
            tabIndex={show ? undefined : -1}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-line-strong bg-white text-sm font-semibold text-ink"
          >
            <PhoneIcon className="size-5" />
            Call now
          </a>
        </div>
      </div>

      {/* Desktop: a single, quiet WhatsApp action. */}
      <a
        href={whatsappHref(waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${siteConfig.name} on WhatsApp`}
        tabIndex={show ? undefined : -1}
        className={cn(
          "fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition-all duration-500 ease-[var(--ease-premium)] hover:bg-whatsapp-deep lg:grid",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
