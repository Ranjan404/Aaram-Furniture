import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts, featuredPosts, postsInCategory } from "@/data/blog";
import { blogCategories } from "@/data/blog/categories";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { blogJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { shareCard } from "@/data/share-cards";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { ArticleCard, FeaturedArticleCard } from "@/components/blog/ArticleCard";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { LeadCTA } from "@/components/sections/LeadCTA";
import Link from "next/link";

const description =
  "Practical guides to buying furniture: sizing a sofa to your room, choosing a bed, upholstery for Delhi NCR's climate, and looking after what you buy.";

export const metadata: Metadata = buildMetadata({
  title: "Furniture Guides - Buying, Sizing & Care Advice",
  description,
  path: "/blog",
  image: shareCard("blog"),
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/blog" },
];

export default function BlogIndexPage() {
  /* The lead article, then everything else newest first. Falling back to the
     first post means the page still works if no article is flagged featured. */
  const [lead = blogPosts[0], ...otherFeatured] = featuredPosts;
  const rest = blogPosts.filter((post) => post.slug !== lead.slug);
  const secondary = otherFeatured.slice(0, 2);
  const latest = rest.filter((post) => !secondary.includes(post));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd data={blogJsonLd(blogPosts)} />

      <section className="surface-wash relative overflow-hidden border-b border-line pt-[calc(var(--header-h)+2.5rem)] pb-14 sm:pb-16 lg:pt-[calc(var(--header-h)+4rem)] lg:pb-18">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(214,186,148,0.28),transparent_65%)] blur-2xl"
        />
        <Container size="wide">
          <Breadcrumbs trail={breadcrumb} />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-brass-deep">Furniture guides</p>
              <h1 className="mt-4 text-(length:--text-display-lg)">
                Know what you are buying before you buy it.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-stone sm:text-[1.0625rem]">
                Sizing, frames, foam, upholstery and care, written the way we would explain it
                across a counter. No trend round-ups: just the measurements and the questions that
                decide whether a piece works in your home.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  href={whatsappHref(waMessages.general)}
                  variant="whatsapp"
                  icon={<WhatsAppIcon className="size-[1.15rem]" />}
                >
                  Ask us a question
                </Button>
                <Button
                  href={telHref}
                  variant="outline"
                  icon={<PhoneIcon className="size-[1.15rem]" />}
                >
                  Call for enquiry
                </Button>
              </div>
            </div>
          </div>

          <CategoryNav className="mt-10" />
        </Container>
      </section>

      <Section tone="ivory" labelledBy="featured-guides-title">
        <h2 id="featured-guides-title" className="sr-only">
          Featured guides
        </h2>

        <Reveal>
          <FeaturedArticleCard post={lead} />
        </Reveal>

        {secondary.length ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {secondary.map((post, index) => (
              <Reveal key={post.slug} delay={(index + 1) * 80} className="h-full">
                <ArticleCard
                  post={post}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 40vw"
                />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Section>

      <Section tone="cream" labelledBy="latest-guides-title">
        <SectionHeading
          id="latest-guides-title"
          eyebrow="Latest"
          title="Every guide, newest first."
          lead={`${blogPosts.length} guides so far, on the decisions people most often get wrong: sizing, seat comfort, storage and materials.`}
        />
        <ArticleGrid posts={latest} />
      </Section>

      <Section tone="ivory" labelledBy="browse-topics-title">
        <SectionHeading
          id="browse-topics-title"
          eyebrow="Browse by topic"
          title="Start with the room you are furnishing."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((category, index) => {
            const count = postsInCategory(category.slug).length;
            if (!count) return null;

            return (
              <li key={category.slug}>
                <Reveal delay={(index % 3) * 80} className="h-full">
                  <div className="group relative h-full rounded-(--radius-card) border border-line bg-white p-6 transition-[box-shadow,border-color,transform] duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-line-strong hover:shadow-lift focus-within:border-line-strong focus-within:shadow-lift">
                    <p className="eyebrow text-stone-light">
                      {count} {count === 1 ? "guide" : "guides"}
                    </p>
                    <h3 className="mt-2.5 text-[1.375rem] leading-snug">
                      <Link
                        href={`/blog/category/${category.slug}`}
                        className="after:absolute after:inset-0 after:content-[''] hover:underline hover:decoration-brass hover:underline-offset-4"
                      >
                        {category.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{category.description}</p>
                    <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink">
                      Read these
                      <ArrowRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      <CatalogueCTA />

      <Section tone="ivory" size="sm" labelledBy="guides-to-range-title">
        <SectionHeading
          id="guides-to-range-title"
          eyebrow="From reading to choosing"
          title="Ready to look at designs?"
          lead={`Every piece ${siteConfig.name} makes can be built in your size, upholstery and finish. Start with the two categories we lead on.`}
        />
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/sofas" iconAfter={<ArrowRightIcon className="size-4" />}>
            Explore sofa designs
          </Button>
          <Button href="/beds" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            View bed designs
          </Button>
          <Button
            href="/furniture"
            variant="outline"
            iconAfter={<ArrowRightIcon className="size-4" />}
          >
            All furniture categories
          </Button>
        </div>
      </Section>

      <LeadCTA />
    </>
  );
}
