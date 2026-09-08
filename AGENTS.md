# Furniture Future - project conventions

Static, frontend-only lead-generation site. Next.js 16 App Router, React 19,
TypeScript, Tailwind v4. No backend, database, CMS or auth - do not add one.

Read `README.md` first; it covers the architecture and the pre-launch checklist.

## Rules that matter here

1. **Content lives in `src/data/*.ts`, never hard-coded in components.**
   Business facts (name, phone, address, catalogue) live only in
   `src/config/site.ts`. Blog articles are `src/data/blog/posts/*.ts`,
   registered in `src/data/blog/index.ts` - see "The blog" in `README.md`.
   The places shown in "Where we deliver" are in `src/data/service-areas.ts`
   and are checked at module load against `siteConfig.serviceAreas`, so the
   site can never show a place the config does not claim. Add to the config
   first.
2. **Never invent business facts.** No addresses, opening hours, prices, review
   counts, ratings, awards or years in business unless they are already in the
   repo. Fields that are unknown are typed `| null`, are not rendered, and are
   left out of the structured data. Keep it that way.
3. **No fake functionality.** There is no backend, so nothing may pretend to
   submit. The enquiry form composes a WhatsApp deep link; the catalogue button
   falls back to a WhatsApp request until a real PDF exists. The testimonials
   in `src/data/testimonials.ts` are sample content: while
   `testimonialsAreVerified` is false the section shows a "sample" note and no
   rating/review structured data is emitted. Never present an invented quote as
   a verified review, and never emit `aggregateRating`/`review` JSON-LD without
   real reviews behind it.
4. **Contact links come from `src/lib/contact.ts`** (`telHref`, `whatsappHref`,
   `waMessages`). Do not hand-write a `tel:` or `wa.me` URL.
5. **Base CSS stays inside `@layer base`** in `globals.css`. Unlayered CSS beats
   Tailwind utilities and will silently override them.
6. **Do not pass conflicting utilities via `className`** (e.g. `hidden` onto a
   Button that sets `inline-flex`, or `bg-white` over a variant's `bg-ink`).
   Same-layer conflicts resolve by stylesheet order, not class order - add a
   variant or wrap the element instead.
7. **Server components by default.** Only `Header`, `FloatingContact`, `Reveal`
   and `EnquiryForm` are client components. Justify any new one.
8. **A new static route must be added to `src/app/sitemap.ts` by hand**, and a
   new product or article needs `npm run share-images` re-run, because each
   share card's filename is that item's slug. Both are silent failures
   otherwise: an absent sitemap entry, or a 404 share card.
9. **Images go through `SmartImage`** with a `sizes` string matching the real
   rendered width, and meaningful alt text. Only the hero is `preload`
   (`priority` is deprecated in Next 16). Quality is left at the default: Next
   16 allows only the qualities listed in `images.qualities`, which defaults to
   `[75]`, so a `quality` prop outside that list is silently coerced.
10. **Vary CTA wording by context** ("Explore sofa designs", "View bed designs",
   "Discuss your requirement", "Call for enquiry"). The same label repeated in
   every section reads as a template.
11. **Blog articles are typed content blocks, not markup.** Author them as
    `ArticleBlock[]`; `ArticleBody` owns the typography. Only `h2`/`h3` exist,
    so the title stays the page's only `h1`. In-prose links are `RichText`
    nodes (`{ text, href }`), never HTML strings. Do not add MDX, a markdown
    parser or a CMS.
12. **A blog category needs content behind it, and a local article needs a real
    local subject.** Never publish the same guide with the city name swapped,
    and never invent an author, a statistic, a price or a delivery time in an
    article any more than anywhere else. `FAQPage` is emitted only from the
    `faqs` a page actually renders.
13. Keep `npm run build` and `npx eslint .` clean before finishing.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
