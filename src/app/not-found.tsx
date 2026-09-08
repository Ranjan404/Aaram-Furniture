import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Without this, the root layout's metadata applies unchanged and every dead URL
 * advertises itself on social platforms as the homepage - same title, same
 * description, same `og:url` - while shipping both Next's own `noindex` for the
 * 404 route and the layout's `index, follow`.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Page not found",
    description:
      "This page has been moved or does not exist. Browse the sofa and bed designs, or call or message us and we will point you to the right one.",
    path: "/404",
    noIndex: true,
  }),
  /* No canonical: this component renders under whatever URL was mistyped, so
     any single canonical it declared would be a claim about a page that is not
     the one being served. */
  alternates: {},
};

const suggestions = [
  { href: "/sofas", label: "Sofa designs" },
  { href: "/beds", label: "Bed designs" },
  { href: "/furniture", label: "All furniture" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <section className="surface-wash flex min-h-[70svh] items-center pt-[calc(var(--header-h)+3rem)] pb-20">
      <Container size="narrow" className="text-center">
        <p className="eyebrow text-brass-deep">404</p>
        <h1 className="mt-4 text-(length:--text-display-md)">
          That page has been moved or does not exist.
        </h1>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-stone">
          The design you were looking for may have been renamed. Try one of these, or just ask us
          directly.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong bg-white px-5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button
            href={whatsappHref(waMessages.general)}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="size-[1.15rem]" />}
          >
            WhatsApp us
          </Button>
          <Button
            href={telHref}
            variant="outline"
            size="lg"
            icon={<PhoneIcon className="size-[1.15rem]" />}
          >
            Call now
          </Button>
        </div>
      </Container>
    </section>
  );
}
