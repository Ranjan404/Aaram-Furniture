import Link from "next/link";
import { cn } from "@/lib/cn";
import type { BlogPost } from "@/lib/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { ArticleMeta } from "./ArticleMeta";

/**
 * Article card, built on the same frame, border, radius and hover lift as
 * `ProductCard` so the blog reads as part of the same site.
 *
 * The title carries a stretched link, which makes the whole card clickable
 * while keeping exactly one anchor inside it - nested links would be invalid
 * markup and unusable with a keyboard.
 */
export function ArticleCard({
  post,
  sizes = "(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw",
  preload = false,
  className,
}: {
  post: BlogPost;
  sizes?: string;
  preload?: boolean;
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
      <SmartImage image={post.image} ratio="wide" sizes={sizes} preload={preload} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <ArticleMeta post={post} />

        <h3 className="mt-3 text-[1.375rem] leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:underline hover:decoration-brass hover:underline-offset-4"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone">{post.excerpt}</p>

        {/* mt-auto pins the action row to the foot so rows align across a grid. */}
        <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink">
          Read the guide
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}

/**
 * The lead article on /blog: the same card turned on its side, with a larger
 * image and the excerpt given room to breathe.
 */
export function FeaturedArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative grid overflow-hidden rounded-(--radius-media) border border-line bg-white transition-[box-shadow,border-color] duration-500 ease-[var(--ease-premium)] hover:border-line-strong hover:shadow-lift focus-within:border-line-strong focus-within:shadow-lift lg:grid-cols-2">
      <SmartImage
        image={post.image}
        ratio="fill"
        preload
        sizes="(max-width: 1023px) 100vw, 46vw"
        className="min-h-64 lg:min-h-[26rem]"
      />

      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <p className="eyebrow text-brass-deep">Start here</p>
        <h3 className="mt-4 text-(length:--text-display-sm) leading-tight">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:underline hover:decoration-brass hover:underline-offset-[6px]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-5 text-base leading-relaxed text-stone">{post.excerpt}</p>
        <ArticleMeta post={post} className="mt-6" />
        <span className="mt-7 flex items-center gap-2 text-sm font-semibold text-ink">
          Read the guide
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
