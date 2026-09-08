import { Reveal } from "@/components/ui/Reveal";
import type { BlogPost } from "@/lib/types";
import { ArticleCard } from "./ArticleCard";

/**
 * Article grid used by /blog and the category archives, plus the empty state
 * for a category that has no articles yet.
 */
export function ArticleGrid({
  posts,
  emptyMessage = "There are no guides in this category yet.",
  preloadFirst = false,
}: {
  posts: BlogPost[];
  emptyMessage?: string;
  preloadFirst?: boolean;
}) {
  if (!posts.length) {
    return (
      <p className="mt-10 rounded-(--radius-card) border border-dashed border-line-strong bg-white p-8 text-center text-sm text-stone">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Reveal key={post.slug} delay={(index % 3) * 80} className="h-full">
          <ArticleCard post={post} preload={preloadFirst && index === 0} />
        </Reveal>
      ))}
    </div>
  );
}
