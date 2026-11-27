"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { catalogueHref, catalogueLabel, catalogueReady, telHref, whatsappHref, waMessages } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";
import {
  CloseIcon,
  DownloadIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

const navLinks = [
  { href: "/sofas", label: "Sofas" },
  { href: "/beds", label: "Beds" },
  { href: "/custom-furniture", label: "Custom" },
  { href: "/furniture", label: "Furniture" },
  { href: "/collection", label: "Collection" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const mobileLinks = [{ href: "/", label: "Home" }, ...navLinks];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /** The homepage hero sits behind the header, so it starts transparent. */
  const overlayCapable = pathname === "/";
  const solid = !overlayCapable || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever navigation happens. Adjusting state during
  // render (rather than in an effect) avoids a flash of the open menu on the
  // newly rendered page.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  // Lock background scroll and wire up Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-premium)]",
        solid
          ? "border-b border-line bg-ivory/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
        scrolled && !open && "shadow-[0_1px_24px_-12px_rgba(23,20,15,0.25)]",
      )}
    >
      <Container size="wide">
        <div className="flex h-[var(--header-h)] items-center justify-between gap-4">
          <Wordmark tone={solid ? "dark" : "light"} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        /* Eight items have to fit at exactly 1024px, so the
                           horizontal padding starts tight and only opens up
                           from xl, where the phone number also appears. */
                        "relative rounded-full px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 xl:px-4",
                        solid
                          ? "text-graphite hover:text-ink"
                          : "text-white/80 hover:text-white",
                        active && (solid ? "text-ink" : "text-white"),
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-2.5 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 ease-[var(--ease-premium)] xl:inset-x-4",
                          solid ? "bg-ink" : "bg-white",
                          active && "scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={telHref}
              className={cn(
                "hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 xl:inline-flex",
                solid ? "text-ink hover:bg-sand/70" : "text-white hover:bg-white/15",
              )}
            >
              <PhoneIcon className="size-4" />
              <span>{siteConfig.phone.display}</span>
            </a>

            {/* Prominent catalogue CTA. The show/hide lives on a wrapper rather
                than on the Button, whose own `inline-flex` would otherwise
                compete with a `hidden` utility in the same cascade layer. */}
            <div className="hidden sm:block">
              <Button
                href={catalogueHref}
                variant={solid ? "primary" : "onImage"}
                size="sm"
                icon={<DownloadIcon className="size-4" />}
                {...(catalogueReady ? { download: siteConfig.catalogue.downloadName } : {})}
              >
                {catalogueLabel}
              </Button>
            </div>

            {/* Phone-sized screens: the same action as a compact icon button.
                The full label is still one tap away in the menu below. */}
            <a
              href={catalogueHref}
              aria-label={catalogueLabel}
              {...(catalogueReady
                ? { download: siteConfig.catalogue.downloadName }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className={cn(
                "hidden size-11 place-items-center rounded-full border transition-colors duration-300 min-[360px]:grid sm:hidden",
                solid
                  ? "border-line-strong bg-white text-ink"
                  : "border-white/40 bg-white/15 text-white backdrop-blur-md",
              )}
            >
              <DownloadIcon className="size-[1.15rem]" />
            </a>

            {/* Compact call button keeps conversion one tap away on phones. */}
            <a
              href={telHref}
              aria-label={`Call ${siteConfig.name} on ${siteConfig.phone.display}`}
              className={cn(
                "grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                solid
                  ? "border-line-strong bg-white text-ink"
                  : "border-white/40 bg-white/15 text-white backdrop-blur-md",
              )}
            >
              <PhoneIcon className="size-[1.15rem]" />
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                solid
                  ? "border-line-strong bg-white text-ink"
                  : "border-white/40 bg-white/15 text-white backdrop-blur-md",
              )}
            >
              {open ? <MenuIconSwap open /> : <MenuIconSwap />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-ivory lg:hidden"
      >
        <Container>
          <nav aria-label="Mobile" className="py-6">
            <ul className="flex flex-col">
              {mobileLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-4 font-display text-2xl text-ink",
                      pathname === link.href && "text-brass-deep",
                    )}
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-stone-light">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-3">
              <Button
                href={catalogueHref}
                size="lg"
                className="w-full"
                icon={<DownloadIcon className="size-[1.15rem]" />}
                onClick={close}
                {...(catalogueReady ? { download: siteConfig.catalogue.downloadName } : {})}
              >
                {catalogueLabel}
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  href={whatsappHref(waMessages.general)}
                  variant="whatsapp"
                  size="lg"
                  onClick={close}
                  icon={<WhatsAppIcon className="size-[1.15rem]" />}
                >
                  WhatsApp
                </Button>
                <Button
                  href={telHref}
                  variant="outline"
                  size="lg"
                  onClick={close}
                  icon={<PhoneIcon className="size-[1.15rem]" />}
                >
                  Call
                </Button>
              </div>
              <p className="pt-1 text-center text-sm text-stone">
                Speak to us on{" "}
                <a href={telHref} className="font-semibold text-ink underline underline-offset-4">
                  {siteConfig.phone.display}
                </a>
              </p>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

/** Small wrapper so the icon swap stays readable in the button above. */
function MenuIconSwap({ open }: { open?: boolean }) {
  return open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />;
}
