import { slugify } from "@/lib/slug";
import type { ArticleBlock, BlogPost, RichText } from "@/lib/types";

/** Average adult reading speed for non-technical prose, in words per minute. */
const WORDS_PER_MINUTE = 220;

function richTextWords(text: RichText): number {
  return text.reduce((total, node) => {
    const value = typeof node === "string" ? node : node.text;
    return total + value.trim().split(/\s+/).filter(Boolean).length;
  }, 0);
}

/** Words in an article body, used for the reading-time estimate. */
export function wordCount(blocks: ArticleBlock[]): number {
  return blocks.reduce((total, block) => {
    switch (block.type) {
      case "paragraph":
        return total + richTextWords(block.text);
      case "heading":
        return total + richTextWords([block.text]);
      case "list":
        return total + block.items.reduce((sum, item) => sum + richTextWords(item), 0);
      case "definitions":
        return (
          total +
          block.items.reduce(
            (sum, item) => sum + richTextWords([item.term]) + richTextWords(item.text),
            0,
          )
        );
      case "table":
        return total + block.rows.flat().reduce((sum, cell) => sum + richTextWords([cell]), 0);
      case "callout":
        return total + richTextWords([block.title]) + richTextWords(block.text);
      case "checklist":
        return total + block.items.reduce((sum, item) => sum + richTextWords([item]), 0);
      case "image":
        return total + richTextWords([block.caption]);
      case "cta":
        // Conversion copy is not part of the read.
        return total;
    }
  }, 0);
}

/** Whole minutes, never zero, so the label always reads sensibly. */
export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(wordCount(post.blocks) / WORDS_PER_MINUTE));
}

export interface OutlineEntry {
  /** Index of the heading block in `post.blocks`. */
  index: number;
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Heading ids for the in-page contents list and for the headings themselves.
 *
 * Both the aside and the body call this, so they can never disagree about an
 * anchor. Repeated heading text is disambiguated with a numeric suffix.
 */
export function articleOutline(blocks: ArticleBlock[]): OutlineEntry[] {
  const used = new Map<string, number>();

  return blocks.flatMap((block, index) => {
    if (block.type !== "heading") return [];

    const base = slugify(block.text) || `section-${index}`;
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);

    return [{ index, id: seen ? `${base}-${seen + 1}` : base, text: block.text, level: block.level }];
  });
}

/** Map of block index -> heading id, for the body renderer. */
export function headingIds(blocks: ArticleBlock[]): Map<number, string> {
  return new Map(articleOutline(blocks).map((entry) => [entry.index, entry.id]));
}

/**
 * Human date, e.g. "7 September 2026". Fixed to en-IN and UTC so the server
 * render and the client agree - the pages are static, so the build machine's
 * locale must not leak into the HTML.
 */
export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** ISO-8601 timestamp for `datePublished` / `dateModified` and Open Graph. */
export function postTimestamp(iso: string): string {
  return `${iso}T00:00:00+05:30`;
}
