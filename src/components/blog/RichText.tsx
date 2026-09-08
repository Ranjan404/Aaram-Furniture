import Link from "next/link";
import type { InlineNode, RichText as RichTextValue } from "@/lib/types";

/** True for anything that leaves the site. Mirrors the rule in `Button`. */
function isExternal(href: string) {
  return /^(https?:|tel:|mailto:)/.test(href);
}

const linkClass =
  "font-semibold text-ink underline decoration-brass-soft underline-offset-4 transition-colors hover:decoration-brass";

/**
 * Renders one run of inline article copy.
 *
 * Article text is authored as data, so links have to be built here rather than
 * written as markup. Internal paths become real `next/link` navigations, which
 * is what makes in-article internal links prefetch and behave like the rest of
 * the site.
 */
function Inline({ node }: { node: InlineNode }) {
  if (typeof node === "string") return <>{node}</>;

  const content = node.strong ? <strong className="font-semibold text-ink">{node.text}</strong> : node.text;

  if (!node.href) return <>{content}</>;

  if (isExternal(node.href)) {
    return (
      <a
        href={node.href}
        className={linkClass}
        {...(node.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={node.href} className={linkClass}>
      {content}
    </Link>
  );
}

export function RichText({ value }: { value: RichTextValue }) {
  return (
    <>
      {value.map((node, index) => (
        <Inline key={index} node={node} />
      ))}
    </>
  );
}
