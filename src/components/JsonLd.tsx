/**
 * Renders a JSON-LD block. Kept in one component so escaping is handled
 * consistently wherever structured data is emitted.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for the "</script>" edge case only.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
