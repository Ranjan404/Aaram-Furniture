import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { BlogPost } from "@/lib/types";
import { ArticleCard } from "./ArticleCard";

/** Onward reading at the foot of an article. */
export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  return (
    <Section tone="cream" labelledBy="related-guides-title">
      <SectionHeading
        id="related-guides-title"
        eyebrow="Keep reading"
        title="Guides that go with this one."
        action={
          <Button href="/blog" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            All furniture guides
          </Button>
        }
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 80} className="h-full">
            <ArticleCard post={post} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
