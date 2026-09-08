import Link from "next/link";
import type { Product } from "@/lib/types";
import { waMessages, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/SmartImage";
import { ArrowUpRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Product card.
 *
 * The name is a "stretched" link so the whole card is clickable while the card
 * itself stays a plain container - a nested <a> inside an <a> would be invalid
 * markup and unusable with a keyboard. The WhatsApp action is lifted above the
 * stretched area so it remains separately clickable and focusable.
 */
export function ProductCard({
  product,
  preload = false,
  sizes = "(max-width: 639px) 92vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 23vw",
  className,
}: {
  product: Product;
  preload?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-(--radius-media) border border-line bg-white",
        "transition-[box-shadow,border-color,transform] duration-500 ease-[var(--ease-premium)]",
        "hover:-translate-y-1 hover:border-line-strong hover:shadow-lift focus-within:border-line-strong focus-within:shadow-lift",
        className,
      )}
    >
      <div className="relative">
        <SmartImage image={product.image} ratio="product" sizes={sizes} preload={preload} />
        {product.badge ? (
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-ink uppercase backdrop-blur-sm">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="eyebrow text-stone-light">{product.category}</p>

        <h3 className="mt-2.5 text-[1.375rem] leading-snug">
          <Link
            href={`/furniture/${product.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:underline hover:decoration-brass hover:underline-offset-4"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-1.5 text-sm text-brass-deep">{product.style}</p>

        {/* Clamped so cards stay a scannable height; the full copy is on the
            design page. */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone">
          {product.description}
        </p>

        <ul className="mt-4 mb-6 flex flex-wrap gap-x-4 gap-y-1.5">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-1.5 text-xs text-graphite">
              <span aria-hidden="true" className="size-1 rounded-full bg-brass" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Price only ever renders when a real one has been entered. */}
        {product.price ? (
          <p className="mt-4 font-display text-xl text-ink">{product.price}</p>
        ) : null}

        {/* mt-auto pins the action row to the card foot so rows line up across a grid. */}
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5">
          <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            View design
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          <a
            href={whatsappHref(waMessages.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex min-h-10 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-whatsapp-deep"
          >
            <WhatsAppIcon className="size-4" />
            Enquire
            <span className="sr-only">on WhatsApp about the {product.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
