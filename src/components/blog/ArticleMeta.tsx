import Link from "next/link";
import { blogCategory } from "@/data/blog/categories";
import { formatPostDate, readingMinutes } from "@/lib/blog";
import { cn } from "@/lib/cn";
import type { BlogPost } from "@/lib/types";
import { ClockIcon, PinIcon } from "@/components/ui/Icons";

/**
 * The line of publication metadata under an article title or on a card.
 *
 * Date, reading time and category are all real and derived from the article
 * itself. The place is shown only when the article is genuinely written for
 * one, which is what keeps the local signal honest.
 */
export function ArticleMeta({
  post,
  linkCategory = false,
  tone = "dark",
  className,
}: {
  post: BlogPost;
  /** Cards nest inside a stretched link, so they must not link the category. */
  linkCategory?: boolean;
  tone?: "dark" | "light";
  className?: string;
}) {
  const category = blogCategory(post.category);
  const muted = tone === "light" ? "text-cream/70" : "text-stone";
  const strong = tone === "light" ? "text-cream" : "text-graphite";

  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 text-xs", muted, className)}>
      {linkCategory ? (
        <Link
          href={`/blog/category/${category.slug}`}
          className={cn("font-semibold transition-colors hover:underline hover:underline-offset-4", strong)}
        >
          {category.title}
        </Link>
      ) : (
        <span className={cn("font-semibold", strong)}>{category.title}</span>
      )}
      <span aria-hidden="true">&middot;</span>
      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
      <span aria-hidden="true">&middot;</span>
      <span className="inline-flex items-center gap-1.5">
        <ClockIcon className="size-3.5" />
        {readingMinutes(post)} min read
      </span>
      {post.location ? (
        <>
          <span aria-hidden="true">&middot;</span>
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="size-3.5" />
            {post.location}
          </span>
        </>
      ) : null}
    </div>
  );
}
