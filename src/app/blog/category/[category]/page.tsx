import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogCategories } from "@/data/blog/categories";
import { postsInCategory } from "@/data/blog";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { articleListJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import type { BlogCategory } from "@/lib/types";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { CategoryNav } from "@/components/blog/CategoryNav";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { LeadCTA } from "@/components/sections/LeadCTA";

/** One archive page per category, all prerendered at build time. */
export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.slug }));
}

/**
 * Narrows an arbitrary URL segment to a known category. Anything else is a
 * 404 rather than an empty archive page, so no thin URL is ever indexable.
 */
function findCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/category/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);

  if (!category) {
    return buildMetadata({
      title: "Category not found",
      description: "This guide category does not exist.",
      path: `/blog/category/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: category.title,
    description: category.metaDescription,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: PageProps<"/blog/category/[category]">) {
  const { category: slug } = await params;
  const category = findCategory(slug);

  if (!category) notFound();

  const posts = postsInCategory(category.slug);
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/blog" },
    { name: category.title, path: `/blog/category/${category.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd
        data={articleListJsonLd({
          name: category.title,
          description: category.description,
          path: `/blog/category/${category.slug}`,
          posts,
        })}
      />

      <section className="surface-wash relative overflow-hidden border-b border-line pt-[calc(var(--header-h)+2.5rem)] pb-12 sm:pb-14 lg:pt-[calc(var(--header-h)+4rem)] lg:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(214,186,148,0.28),transparent_65%)] blur-2xl"
        />
        <Container size="wide">
          <Breadcrumbs trail={breadcrumb} />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-brass-deep">Guides</p>
              <h1 className="mt-4 text-(length:--text-display-md)">{category.title}</h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-stone sm:text-[1.0625rem]">
                {category.description}
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

          <CategoryNav active={category.slug} className="mt-10" />
        </Container>
      </section>

      <Section tone="ivory" labelledBy="category-articles-title">
        <h2 id="category-articles-title" className="sr-only">
          {category.title}
        </h2>
        <ArticleGrid
          posts={posts}
          preloadFirst
          emptyMessage="There are no guides in this category yet. Message us and we will answer your question directly in the meantime."
        />
      </Section>

      <LeadCTA />
    </>
  );
}
