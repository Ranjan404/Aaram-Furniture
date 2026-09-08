import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { blogCategory } from "@/data/blog/categories";
import { formatPostDate, postTimestamp, readingMinutes } from "@/lib/blog";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { ArticleMeta } from "@/components/blog/ArticleMeta";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleAside } from "@/components/blog/ArticleAside";
import { ArticleFaqs } from "@/components/blog/ArticleFaqs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { LeadCTA } from "@/components/sections/LeadCTA";

/** Every article is prerendered at build time. */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Guide not found",
      description: "This guide is no longer published.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const category = blogCategory(post.category);

  return buildMetadata({
    // `seoTitle` exists so the browser title can carry the keyword phrasing
    // while the visible H1 stays readable. Neither is ever generic.
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.shareImage ?? post.image,
    article: {
      publishedTime: postTimestamp(post.publishedAt),
      ...(post.updatedAt ? { modifiedTime: postTimestamp(post.updatedAt) } : {}),
      section: category.title,
      tags: post.tags,
    },
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const category = blogCategory(post.category);
  const related = getRelatedPosts(post);
  const minutes = readingMinutes(post);

  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/blog" },
    { name: category.title, path: `/blog/category/${category.slug}` },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd data={blogPostingJsonLd(post, category)} />
      {/* FAQPage is emitted only when the page really shows a FAQ list. */}
      {post.faqs?.length ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}

      <article>
        <header className="surface-wash border-b border-line pt-[calc(var(--header-h)+2rem)] pb-12 lg:pt-[calc(var(--header-h)+3rem)] lg:pb-14">
          <Container size="wide">
            <Breadcrumbs trail={breadcrumb} />

            <div className="mt-8 max-w-3xl">
              <p className="eyebrow text-brass-deep">{category.title}</p>
              <h1 className="mt-4 text-(length:--text-display-md)">{post.title}</h1>
              <p className="mt-6 text-base leading-relaxed text-stone sm:text-[1.0625rem]">
                {post.excerpt}
              </p>
              <ArticleMeta post={post} linkCategory className="mt-7" />
            </div>
          </Container>
        </header>

        <Container size="wide" className="pt-10 lg:pt-14">
          <SmartImage
            image={post.image}
            ratio="editorial"
            preload
            zoom={false}
            sizes="(max-width: 1023px) 92vw, 84rem"
            className="rounded-(--radius-media) border border-line"
          />
        </Container>

        <div className="bg-ivory pt-12 pb-16 lg:pt-16 lg:pb-24">
          <Container size="wide">
            <div className="grid gap-12 xl:grid-cols-12 xl:gap-16">
              {/* `min-w-0` is load bearing: a grid item defaults to
                  `min-width: auto`, so without it the article's widest table
                  stretches the whole column past the viewport instead of
                  scrolling inside its own box. The prose is then capped so line
                  length stays readable however wide the viewport gets. */}
              <div className="min-w-0 xl:col-span-8">
                <div className="max-w-[46rem]">
                  <section
                    aria-labelledby="takeaways-title"
                    className="rounded-(--radius-media) border border-line bg-cream p-6 sm:p-8"
                  >
                    <h2
                      id="takeaways-title"
                      className="eyebrow font-sans text-brass-deep"
                    >
                      The short version
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {post.takeaways.map((takeaway) => (
                        <li
                          key={takeaway}
                          className="flex gap-3 text-[0.9375rem] leading-relaxed text-graphite"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-brass"
                          />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs text-stone-light">
                      {minutes} minute read &middot; published{" "}
                      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                      {post.updatedAt ? (
                        <>
                          {" "}
                          &middot; updated{" "}
                          <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time>
                        </>
                      ) : null}
                    </p>
                  </section>

                  <div className="mt-12">
                    <ArticleBody blocks={post.blocks} />
                  </div>

                  {post.faqs?.length ? <ArticleFaqs faqs={post.faqs} /> : null}

                  {post.tags.length ? (
                    <div className="mt-14 border-t border-line pt-6">
                      <h2 className="eyebrow font-sans text-stone-light">Topics</h2>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-graphite"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <p className="mt-8 text-xs leading-relaxed text-stone-light">
                    Written by the team at {siteConfig.name}. General guidance only: measurements
                    and specifications vary by design, so confirm the figures for the piece you are
                    ordering.
                  </p>
                </div>
              </div>

              <aside className="min-w-0 xl:col-span-4">
                <ArticleAside post={post} />
              </aside>
            </div>
          </Container>
        </div>
      </article>

      <RelatedArticles posts={related} />

      <LeadCTA />
    </>
  );
}
