import { getPostsByTags } from "@/data/blog";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ArticleCard } from "@/components/blog/ArticleCard";

/**
 * Guides band for the range pages: the product-to-blog half of the internal
 * linking.
 *
 * Articles are matched on their tags rather than listed by slug, so a new
 * guide appears on the pages it is relevant to without anyone editing a route.
 * The band renders nothing at all if no article matches, which keeps an empty
 * heading off the page.
 */
export function GuidesTeaser({
  tags,
  eyebrow = "Before you buy",
  title,
  lead,
  tone = "cream",
  limit = 3,
  ctaLabel = "All furniture guides",
}: {
  /** Article tags to match, most important first. */
  tags: string[];
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "ivory" | "cream" | "wash";
  limit?: number;
  ctaLabel?: string;
}) {
  const posts = getPostsByTags(tags, limit);
  if (!posts.length) return null;

  return (
    <Section tone={tone} labelledBy="guides-teaser-title">
      <SectionHeading
        id="guides-teaser-title"
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        action={
          <Button href="/blog" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            {ctaLabel}
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
