import Link from "next/link";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import {
  catalogueHref,
  catalogueLabel,
  catalogueReady,
  telHref,
  waMessages,
  whatsappHref,
} from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "./Wordmark";
import { DownloadIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";

const explore = [
  { href: "/", label: "Home" },
  { href: "/sofas", label: "Sofas" },
  { href: "/beds", label: "Beds" },
  { href: "/furniture", label: "All furniture" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { address, openingHours, email, serviceArea, social } = siteConfig;
  const socialLinks = Object.entries(social).filter(([, url]) => Boolean(url)) as [string, string][];

  return (
    /* Bottom padding leaves room for the floating mobile contact bar. */
    <footer className="border-t border-line bg-cream pb-24 lg:pb-0">
      <Container size="wide">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
              {siteConfig.tagline}. Sofas, beds, dining and storage furniture, made to order in the
              size, fabric and finish you choose.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappHref(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-deep"
              >
                <WhatsAppIcon className="size-[1.15rem]" />
                WhatsApp us
              </a>
              <a
                href={telHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                <PhoneIcon className="size-[1.15rem]" />
                Call now
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-explore" className="lg:col-span-2">
            <h2 id="footer-explore" className="eyebrow font-sans text-brass-deep">
              Explore
            </h2>
            <ul className="mt-4 space-y-1">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-graphite transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-categories" className="lg:col-span-3">
            <h2 id="footer-categories" className="eyebrow font-sans text-brass-deep">
              Furniture
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={category.href}
                    className="inline-block py-1 text-sm text-graphite transition-colors hover:text-ink"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow font-sans text-brass-deep">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={telHref} className="group flex items-start gap-3 text-graphite">
                  <PhoneIcon className="mt-0.5 size-[1.15rem] shrink-0 text-brass" />
                  <span>
                    <span className="block text-xs text-stone-light">Phone</span>
                    <span className="font-semibold text-ink group-hover:underline">
                      {siteConfig.phone.display}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-graphite"
                >
                  <WhatsAppIcon className="mt-0.5 size-[1.15rem] shrink-0 text-brass" />
                  <span>
                    <span className="block text-xs text-stone-light">WhatsApp</span>
                    <span className="font-semibold text-ink group-hover:underline">
                      Chat with us
                    </span>
                  </span>
                </a>
              </li>
              {email ? (
                <li>
                  <a href={`mailto:${email}`} className="group flex items-start gap-3 text-graphite">
                    <MailIcon className="mt-0.5 size-[1.15rem] shrink-0 text-brass" />
                    <span>
                      <span className="block text-xs text-stone-light">Email</span>
                      <span className="font-semibold text-ink group-hover:underline">{email}</span>
                    </span>
                  </a>
                </li>
              ) : null}
              {address ? (
                <li className="flex items-start gap-3 text-graphite">
                  <PinIcon className="mt-0.5 size-[1.15rem] shrink-0 text-brass" />
                  <span>
                    <span className="block text-xs text-stone-light">Showroom</span>
                    <span className="not-italic">
                      {address.streetAddress}, {address.locality}, {address.region}{" "}
                      {address.postalCode}
                    </span>
                  </span>
                </li>
              ) : null}
              {openingHours?.length ? (
                <li className="flex items-start gap-3 text-graphite">
                  <span className="mt-0.5 size-[1.15rem] shrink-0" />
                  <span>
                    <span className="block text-xs text-stone-light">Hours</span>
                    {openingHours.map((slot) => (
                      <span key={slot.days} className="block">
                        {slot.days}: {slot.hours}
                      </span>
                    ))}
                  </span>
                </li>
              ) : null}
              {serviceArea ? (
                <li className="text-xs text-stone">Serving {serviceArea}</li>
              ) : null}
            </ul>

            <a
              href={catalogueHref}
              {...(catalogueReady
                ? { download: siteConfig.catalogue.downloadName }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink px-5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              <DownloadIcon className="size-[1.15rem]" />
              {catalogueLabel}
            </a>
          </div>
        </div>

        {socialLinks.length ? (
          <ul className="flex flex-wrap gap-4 pb-8 text-sm">
            {socialLinks.map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize text-graphite underline-offset-4 hover:text-ink hover:underline"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="hairline" />

        <div className="flex flex-col gap-4 py-8 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link href="/privacy" className="inline-block py-1 transition-colors hover:text-ink">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="inline-block py-1 transition-colors hover:text-ink">
                Terms of use
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
