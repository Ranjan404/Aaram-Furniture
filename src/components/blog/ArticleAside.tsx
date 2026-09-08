import Link from "next/link";
import { siteConfig } from "@/config/site";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { articleOutline } from "@/lib/blog";
import type { BlogPost } from "@/lib/types";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * The article sidebar: contents, links into the range, and the two contact
 * actions used everywhere else on the site.
 *
 * Sticky positioning is pure CSS, and the contents list is built at build time
 * from the article's own headings, so the whole aside ships no JavaScript.
 */
export function ArticleAside({ post }: { post: BlogPost }) {
  const outline = articleOutline(post.blocks).filter((entry) => entry.level === 2);

  return (
    <div className="flex flex-col gap-8 xl:sticky xl:top-[calc(var(--header-h)+2rem)]">
      {outline.length > 2 ? (
        <nav aria-labelledby="article-contents" className="rounded-(--radius-card) border border-line bg-white p-6">
          <h2 id="article-contents" className="eyebrow font-sans text-brass-deep">
            On this page
          </h2>
          <ol className="mt-4 space-y-2.5">
            {outline.map((entry) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  className="block text-sm leading-snug text-graphite transition-colors hover:text-ink"
                >
                  {entry.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {post.relatedLinks?.length ? (
        <div className="rounded-(--radius-card) border border-line bg-cream p-6">
          <h2 className="eyebrow font-sans text-brass-deep">From our range</h2>
          <ul className="mt-4 space-y-4">
            {post.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group block">
                  <span className="flex items-center gap-1.5 font-display text-lg text-ink group-hover:underline group-hover:decoration-brass group-hover:underline-offset-4">
                    {link.label}
                    <ArrowRightIcon className="size-4 shrink-0 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-stone">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="rounded-(--radius-card) border border-line bg-white p-6">
        <h2 className="font-display text-xl text-ink">Rather just ask?</h2>
        <p className="mt-2 text-sm leading-relaxed text-stone">
          Send a photo of the room and the measurements. You will get a straight answer about what
          fits before anything is quoted.
        </p>
        <div className="mt-5 grid gap-2.5">
          <a
            href={whatsappHref(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-deep"
          >
            <WhatsAppIcon className="size-[1.15rem]" />
            Message us
          </a>
          <a
            href={telHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            <PhoneIcon className="size-[1.15rem]" />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}
