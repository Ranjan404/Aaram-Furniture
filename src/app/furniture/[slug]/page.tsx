import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { allProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import {
  catalogueHref,
  catalogueLabel,
  catalogueReady,
  telHref,
  waMessages,
  whatsappHref,
} from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { DownloadIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { ProductCard } from "@/components/sections/ProductCard";
import { LeadCTA } from "@/components/sections/LeadCTA";
import Link from "next/link";

/** Every product page is pre-rendered at build time. */
export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

const groupLabels: Record<string, { name: string; path: string }> = {
  sofas: { name: "Sofas", path: "/sofas" },
  beds: { name: "Beds", path: "/beds" },
  more: { name: "Furniture", path: "/furniture" },
};

export async function generateMetadata({
  params,
}: PageProps<"/furniture/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Design not found",
      description: "This furniture design is no longer listed.",
      path: `/furniture/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${product.name} - ${product.category}`,
    description: `${product.description} Made to order in your size and finish. Call ${siteConfig.phone.display} or message us on WhatsApp for details.`,
    path: `/furniture/${product.slug}`,
    image: product.shareImage ?? product.image,
  });
}

/**
 * Options that apply to every made-to-order piece. The build time is read from
 * `siteConfig` rather than written out here, so it cannot drift from the same
 * figure on `/custom-furniture`; the row disappears if it is ever unset.
 */
const madeToOrder = [
  "Size adjusted to your room measurements",
  "Fabric, leather or finish of your choice",
  "Left or right orientation where the design allows",
  ...(siteConfig.leadTime
    ? [`Built in ${siteConfig.leadTime} once the design is confirmed`]
    : []),
  "Guidance on what suits daily use before you order",
];

export default async function ProductPage({ params }: PageProps<"/furniture/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const group = groupLabels[product.group];
  const related = getRelatedProducts(product);

  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: group.name, path: group.path },
    { name: product.name, path: `/furniture/${product.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          category: product.category,
          image: new URL(product.image.src, siteConfig.url).toString(),
          brand: { "@type": "Brand", name: siteConfig.name },
          // No `offers` block: pricing is quoted per piece, so publishing a
          // price here would be inaccurate.
        }}
      />

      <section className="surface-wash border-b border-line pt-[calc(var(--header-h)+2rem)] pb-16 lg:pt-[calc(var(--header-h)+3.5rem)] lg:pb-24">
        <Container size="wide">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-stone">
              {breadcrumb.map((crumb, index) => {
                const last = index === breadcrumb.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {last ? (
                      <span aria-current="page" className="inline-block py-1.5 text-graphite">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.path} className="inline-block py-1.5 transition-colors hover:text-ink">
                        {crumb.name}
                      </Link>
                    )}
                    {!last ? <span aria-hidden="true">/</span> : null}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SmartImage
                image={product.image}
                ratio="wide"
                preload
                zoom={false}
                sizes="(max-width: 1023px) 92vw, 56vw"
                className="rounded-[2rem] border border-line shadow-soft"
              />
            </div>

            <div className="lg:col-span-5">
              <p className="eyebrow text-brass-deep">{product.category}</p>
              <h1 className="mt-4 text-(length:--text-display-md)">{product.name}</h1>
              <p className="mt-3 text-base text-brass-deep">{product.style}</p>

              <p className="mt-6 leading-relaxed text-stone">{product.description}</p>

              {product.price ? (
                <p className="mt-6 font-display text-3xl text-ink">{product.price}</p>
              ) : (
                <p className="mt-6 text-sm text-stone">
                  Priced per piece, based on the size and materials you choose. Message us for a
                  quote.
                </p>
              )}

              <div className="mt-8 rounded-(--radius-card) border border-line bg-ivory p-6">
                <h2 className="text-[0.6875rem] font-semibold tracking-[0.18em] text-stone-light uppercase">
                  Specification
                </h2>
                <ul className="mt-4 space-y-3">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-ink">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brass"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={whatsappHref(waMessages.product(product.name))}
                  variant="whatsapp"
                  size="lg"
                  icon={<WhatsAppIcon className="size-[1.15rem]" />}
                >
                  Enquire on WhatsApp
                </Button>
                <Button
                  href={telHref}
                  size="lg"
                  icon={<PhoneIcon className="size-[1.15rem]" />}
                >
                  Call {siteConfig.phone.display}
                </Button>
              </div>

              <a
                href={catalogueHref}
                {...(catalogueReady
                  ? { download: siteConfig.catalogue.downloadName }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="mt-4 inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:text-brass-deep"
              >
                <DownloadIcon className="size-4" />
                {catalogueLabel}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="ivory" size="sm" labelledBy="made-to-order-title">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow text-brass-deep">Made to order</p>
            <h2 id="made-to-order-title" className="mt-4 text-(length:--text-display-sm)">
              What you can change on this design.
            </h2>
          </div>
          <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {madeToOrder.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 60}>
                  <div className="h-full rounded-(--radius-card) border border-line bg-white p-6 text-sm leading-relaxed text-graphite">
                    {item}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {related.length ? (
        <Section tone="cream" labelledBy="related-title">
          <SectionHeading
            id="related-title"
            eyebrow="Also consider"
            title="Other designs in this range."
            action={
              <Button href={group.path} variant="outline">
                All {group.name.toLowerCase()}
              </Button>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.id} delay={index * 80} className="h-full">
                <ProductCard
                  product={item}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
                />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <LeadCTA />
    </>
  );
}
