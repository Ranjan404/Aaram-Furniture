import { whatsappHref } from "@/lib/contact";
import { headingIds } from "@/lib/blog";
import type { ArticleBlock } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { RichText } from "./RichText";

/**
 * Renders an article body from its blocks.
 *
 * Typography lives here rather than in a global prose stylesheet, for the same
 * reason base styles are kept inside `@layer base`: a rule that can win against
 * a Tailwind utility by accident is a rule that will. Every block owns its own
 * vertical rhythm, and the wrapper resets the top margin of whichever block
 * happens to come first.
 */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  const ids = headingIds(blocks);

  return (
    /* The `:first-child` selector is more specific than the `mt-*` utility on
       the block itself, so it wins without needing `!important`. */
    <div className="[&>*:first-child]:mt-0">
      {blocks.map((block, index) => (
        <Block key={index} block={block} headingId={ids.get(index)} />
      ))}
    </div>
  );
}

function Block({ block, headingId }: { block: ArticleBlock; headingId?: string }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mt-6 text-[1.0625rem] leading-[1.8] text-graphite">
          <RichText value={block.text} />
        </p>
      );

    case "heading": {
      /* scroll-mt keeps an anchored heading clear of the sticky header when a
         reader jumps to it from the contents list. */
      if (block.level === 2) {
        return (
          <h2
            id={headingId}
            className="mt-14 scroll-mt-28 text-(length:--text-display-sm) first:mt-0"
          >
            {block.text}
          </h2>
        );
      }
      return (
        <h3 id={headingId} className="mt-10 scroll-mt-28 text-[1.375rem]">
          {block.text}
        </h3>
      );
    }

    case "list":
      return block.ordered ? (
        <ol className="mt-6 space-y-3.5">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-4 text-[1.0625rem] leading-[1.75] text-graphite">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong font-display text-sm text-brass-deep"
              >
                {index + 1}
              </span>
              <span>
                <RichText value={item} />
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mt-6 space-y-3">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3.5 text-[1.0625rem] leading-[1.75] text-graphite">
              <span aria-hidden="true" className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-brass" />
              <span>
                <RichText value={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "definitions":
      return (
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {block.items.map((item) => (
            <div key={item.term} className="py-5">
              <dt className="font-display text-xl text-ink">{item.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-stone">
                <RichText value={item.text} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "table":
      return (
        <figure className="mt-9">
          {/* Wide tables scroll inside their own box so the page body never
              scrolls sideways on a phone. */}
          <div className="overflow-x-auto rounded-(--radius-card) border border-line">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <caption className="sr-only">{block.caption}</caption>
              <thead>
                <tr className="bg-cream">
                  {block.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-stone-light uppercase"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="align-top">
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={
                          cellIndex === 0
                            ? "px-4 py-3.5 font-semibold text-ink"
                            : "px-4 py-3.5 leading-relaxed text-graphite"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-3 text-xs text-stone-light">{block.caption}</figcaption>
        </figure>
      );

    case "callout":
      return (
        <aside className="mt-9 rounded-(--radius-card) border border-line border-l-2 border-l-brass bg-cream p-6 sm:p-7">
          <p className="eyebrow text-brass-deep">{block.title}</p>
          <p className="mt-3 text-base leading-relaxed text-graphite">
            <RichText value={block.text} />
          </p>
        </aside>
      );

    case "checklist":
      return (
        <div className="mt-9 rounded-(--radius-card) border border-line bg-white p-6 sm:p-7">
          <h3 className="text-xl">{block.title}</h3>
          <ul className="mt-4 space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                <CheckMark />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "image":
      return (
        <figure className="mt-10">
          <SmartImage
            image={block.image}
            ratio="wide"
            sizes="(max-width: 1023px) 92vw, 44rem"
            zoom={false}
            className="rounded-(--radius-media) border border-line"
          />
          <figcaption className="mt-3 text-xs text-stone-light">{block.caption}</figcaption>
        </figure>
      );

    case "cta":
      return (
        <aside className="surface-wash mt-11 rounded-(--radius-media) border border-line p-7 sm:p-9">
          <h3 className="text-(length:--text-display-xs)">{block.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-stone">{block.text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              href={whatsappHref(block.whatsappMessage)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              {block.whatsappLabel}
            </Button>
            {block.link ? (
              <Button
                href={block.link.href}
                variant="outline"
                iconAfter={<ArrowRightIcon className="size-4" />}
              >
                {block.link.label}
              </Button>
            ) : null}
          </div>
        </aside>
      );
  }
}

function CheckMark() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brass-soft text-brass-deep"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="size-3">
        <path d="m5 13 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
