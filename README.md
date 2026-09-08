# Furniture Future - website

A static, frontend-only marketing site for a furniture business, built to turn
visitors into phone and WhatsApp enquiries. Sofas and beds lead; dining,
storage, media units and custom work sit behind them.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. No backend,
no database, no CMS, no authentication.

---

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build - every page is prerendered
npm start       # serve the production build
npm run lint
```

---

## Before you go live - the short list

Everything below is deliberate: where information was not available, the site
leaves it out rather than inventing it. Each item is a one-line change.

| # | What | Where |
| --- | --- | --- |
| 1 | Business name and tagline | `src/config/site.ts` -> `name`, `tagline` |
| 2 | ~~Live domain~~ - set to `https://www.furniturefuture.com`. **Still to do at the host:** 301 non-`www` and `http` to this form | `src/config/site.ts` -> `url` |
| 3 | Showroom address (shows the address block + "Get directions", and adds the address to Google's structured data) | `src/config/site.ts` -> `address` |
| 4 | Business hours | `src/config/site.ts` -> `openingHours` |
| 5 | ~~Service area~~ - set to Delhi NCR. Check `serviceAreas` matches where you actually deliver | `src/config/site.ts` -> `serviceArea`, `serviceAreas` |
| 6 | Email and social links | `src/config/site.ts` -> `email`, `social` |
| 7 | **Catalogue PDF** | see `public/catalogue/README.md` |
| 8 | **Real product photography** | see `public/images/README.md` |
| 9 | Real product names, descriptions and specs | `src/data/products.ts` |
| 10 | **Real customer testimonials** - the six on the site now are samples (see "Social proof / testimonials") | `src/data/testimonials.ts` |
| 11 | Review the FAQ answers you can actually commit to | `src/data/faqs.ts` |
| 12 | Have the privacy policy and terms reviewed | `src/app/privacy`, `src/app/terms` |
| 13 | **Blog publication dates** - all nine launch guides carry the launch date | `src/data/blog/index.ts` |
| 14 | Confirm the places in "Where we deliver", Faridabad especially | `src/data/service-areas.ts` (and `serviceAreas` in the config) |
| 15 | ~~Lead time~~ - set to 4 to 7 days from design confirmation. Split it per category if it really differs by piece | `src/config/site.ts` -> `leadTime` |
| 16 | Replace the generated share cards with designed ones | `npm run share-images`, then see "The generated share cards" |

The phone number `+91 93157 10072` is already wired into every call and
WhatsApp link on the site. Change it once in `src/config/site.ts` and it updates
everywhere, including the structured data.

### Fields left empty on purpose

`address`, `openingHours`, `email` and the social links are `null`. A `null`
field is simply not rendered, and it is left out of the structured data too.
Three fields are confirmed and therefore do render: `serviceArea` and
`serviceAreas` (so the market is named in the title, the hero and the "Where we
deliver" section, and the individual towns reach `areaServed`), and `leadTime`
(the only delivery figure the site states, deliberately a range rather than a
single number, shown on `/custom-furniture` and on every product page). No
placeholder address, no invented opening hours, no price, no delivery charge and
no fabricated rating, review count, years in business or customer number appears
anywhere on the site.

---

## How it is put together

```
src/
  config/site.ts        Single source of truth: brand, phone, address, catalogue
  lib/
    contact.ts          tel:/wa.me link builders + the pre-written WhatsApp openers
    seo.ts              Per-page metadata + JSON-LD builders
    types.ts            Product, Category, GalleryItem, Testimonial, Feature, Faq
    blur.ts, cn.ts, slug.ts
  data/                 All page content. Edit here, not in components.
    products.ts         Sofas, beds and other furniture (sample catalogue)
    categories.ts  gallery.ts  features.ts  testimonials.ts  faqs.ts
    custom-furniture.ts  What /custom-furniture renders
    service-areas.ts     The places shown in "Where we deliver", checked
                         against siteConfig.serviceAreas at module load
    share-cards.ts       Social share card per fixed route, with its alt text
    blog/               The guides: categories.ts, index.ts (the registry)
      posts/            One file per article, authored as content blocks
  components/
    ui/                 Container, Section, Button, SmartImage, Reveal, Icons
    layout/             Header, Footer, FloatingContact, Wordmark
    sections/           Hero, CategoryGrid, SofaBedSplit, ProductShowcase,
                        ProductCard, FilterableProductGrid, CatalogueCTA,
                        WhyChooseUs, LifestyleGallery, Testimonials,
                        TrustSignals, AboutSection, LeadCTA, ContactSection,
                        FaqSection, PageHero, EnquiryForm, LegalPage,
                        GuidesTeaser, ServiceAreas
    blog/               ArticleBody (the block renderer), ArticleCard,
                        ArticleAside, ArticleGrid, ArticleFaqs, ArticleMeta,
                        RelatedArticles, CategoryNav, Breadcrumbs, RichText
  app/                  Routes (see below), sitemap.ts, robots.ts, icons
scripts/
  generate-share-images.mjs   Builds the 1200x630 social cards
public/
  images/               All photography (see public/images/README.md)
    share/              Generated 1200x630 social cards - do not hand-edit
  catalogue/            Drop the catalogue PDF here (see its README)
```

**Content lives in `src/data`, never in components.** Every section renders from
that data, so the range can be rewritten without touching JSX.

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, featured sofas, featured beds, the sofa/bed split feature, other furniture, why us, gallery, testimonials, catalogue, about, where we deliver, enquiry, contact, a three-question FAQ excerpt |
| `/sofas` | Full sofa range, with category chips |
| `/beds` | Full bed range, with category chips |
| `/custom-furniture` | Made to order: what is built to measure, how the process runs, what is adjustable, and the custom-order FAQ |
| `/furniture` | All categories, plus dining / living / TV units / wardrobes / chairs / custom (anchor targets) |
| `/furniture/[slug]` | One page per design, prerendered from `src/data/products.ts` |
| `/collection` | Lifestyle gallery |
| `/blog` | The guides: featured, latest, and the topic grid |
| `/blog/[slug]` | One page per article, prerendered from `src/data/blog` |
| `/blog/category/[category]` | One archive per category |
| `/about`, `/contact` | |
| `/privacy`, `/terms` | Draft legal pages |
| `/sitemap.xml`, `/robots.txt` | Generated from the same config |

Adding a product to `src/data/products.ts` automatically creates its detail
page, its sitemap entry and its listing card. Slugs come from the product name.
The blog works the same way - see "The blog" below.

---

## Conversion

Three actions repeat throughout: **call**, **WhatsApp**, **get the catalogue**.

- Call links use `tel:+919315710072`; WhatsApp uses `https://wa.me/919315710072`.
- WhatsApp links carry a pre-filled, context-aware message. Enquiring from a
  product card opens with that product's name; the sofa page opens with a sofa
  message. See `waMessages` in `src/lib/contact.ts`. Raw URLs never appear in
  visible copy.
- A floating bar (call + WhatsApp on phones, a single WhatsApp button on
  desktop) appears only after the visitor scrolls past the hero, where the same
  CTAs are already on screen. There is no popup and no auto-opening chat.

### Section order is the business hierarchy

Sofas and beds are the business, not two categories among eight, so the
homepage states that in its structure rather than in adjectives:

```
hero  ->  featured sofas  ->  featured beds  ->  sofa / bed split feature
      ->  everything else  ->  trust  ->  gallery  ->  proof  ->  catalogue
```

- `SofaBedSplit` is the full-bleed band that carries both categories at once
  (`src/components/sections/SofaBedSplit.tsx`, content in `primaryFeatures` in
  `src/data/categories.ts`). Keep it to exactly two panels; a third would flatten
  the hierarchy the rest of the page is built on.
- The homepage renders `<CategoryGrid scope="secondary" />`, so dining,
  wardrobes, TV units and the rest appear *below* the split feature and in
  smaller cells. `/furniture` still renders the full grid (`scope="all"`), where
  sofas and beds keep their large cells.
- The hero carries the two category shortcuts at every breakpoint: a two-up row
  on phones and tablets, the side panel from `xl`.
- No photograph is used twice on the homepage - the split feature deliberately
  uses neither the category-card nor the gallery frames.

### Social proof / testimonials

The testimonials section is live on the homepage and `/about`. It is CSS-only:
a snap-scrolling rail on phones, a two-column grid from `sm`, three columns from
`lg`, with the first card inverted to ink so the block has a focal point. Star
ratings, avatar initials, customer name, location and the piece they bought are
all optional per entry.

**The six entries currently in `src/data/testimonials.ts` are sample content.**
They are written to show the layout, are not real reviews, and are not
attributed to anyone. While `testimonialsAreVerified` is `false`, a short note
appears under the section and **no rating or review structured data is emitted
anywhere on the site**.

To make it real:

```ts
// src/data/testimonials.ts
export const testimonialsAreVerified = true;   // 1. flip this

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "…what the customer actually wrote…",   // 2. their words, not tidied
    name: "Priya S.",                              // 3. name or first name + initial
    location: "Rohini",                            //    optional
    product: "L-shape sectional",                  //    optional
    rating: 5,                                     //    only if they gave one
  },
  // …
];
```

The note disappears the moment the flag is `true`. Only publish feedback you
have permission to use: presenting fabricated reviews as genuine is prohibited
under the Consumer Protection Act 2019 and the BIS review guidelines
(IS 19000:2022), and platforms penalise it.

`TrustSignals` (design consultation, made-to-measure, direct WhatsApp,
catalogue) is a separate band on `/contact`. Everything in it describes a
service the business actually offers, so it needs no verification and can stay
alongside real testimonials.

### Browsing and filtering

`/sofas` and `/beds` carry category chips ("L-shape", "Leather", "Storage"...)
built from the `tags` on each product in `src/data/products.ts`. Filtering is
client-side over data that is already on the page - no request, no URL rewriting.
The full grid is server-rendered first, so every design is in the HTML for search
engines and for anyone browsing without JavaScript; the chips only hide cards
afterwards. A chip appears only when it actually narrows the list.

### The enquiry form is real, not decorative

There is no backend, so the form on the contact section does not pretend to
submit. It composes what the visitor typed into a WhatsApp message and opens the
chat with it ready to send. Nothing is stored.

To add server-side submission later, everything needed is already collected in
`values` inside `src/components/sections/EnquiryForm.tsx` - add a route handler,
POST to it, and keep the WhatsApp hand-off as the fallback.

### The catalogue button never 404s

While `siteConfig.catalogue.available` is `false`, every "Download catalogue"
button opens WhatsApp with a catalogue request instead of linking to a file that
does not exist. Add the PDF, flip the flag, and all of them become real
downloads. Nothing else changes.

---

## The blog

`/blog` is a search-acquisition system, not a news page. Every page it produces
is static, and adding an article needs no new route.

### Adding an article

1. Write `src/data/blog/posts/<slug>.ts`, exporting one `BlogPost`.
2. Import it in `src/data/blog/index.ts` and add it to `registry`.

That is the whole process. The article page, its card, its category archive
entry and its sitemap entry all follow. `src/data/blog/index.ts` throws at build
time on a duplicate slug, a slug that collides with the `/blog/category` route,
or a `relatedPosts` entry that does not exist, so a broken link fails the build
rather than shipping.

### Articles are structured content, not markup

An article body is an array of typed blocks (`ArticleBlock` in
`src/lib/types.ts`): `paragraph`, `heading`, `list`, `definitions`, `table`,
`callout`, `checklist`, `image` and `cta`. `ArticleBody` owns all the
typography, which means:

- An author cannot break the page layout or the heading order. Only `h2` and
  `h3` are expressible, so the article title stays the page's only `h1`.
- Every in-article link is a real `next/link`. Paragraph text is a `RichText`
  array, so a link is `{ text: "sofa designs", href: "/sofas" }` rather than a
  string of HTML.
- A `cta` block builds its WhatsApp link through `whatsappHref()`, like every
  other CTA on the site.
- There is no MDX, no markdown parser and no CMS - and so no new dependency.

Reading time, the word count in the structured data and the "On this page"
contents list are all derived from the blocks (`src/lib/blog.ts`), so they can
never disagree with what the page shows.

### Categories

Six, in `src/data/blog/categories.ts`, each with its own archive page and its
own meta description. A category exists because there is content for it: an
empty one is hidden from the chip row and the topic grid, and would only be a
thin page. `/blog/category/<slug>` is a real crawlable URL, not a client-side
filter.

### Internal linking runs both ways

- **Blog to range**: contextual links inside the prose, a curated "From our
  range" block in the sidebar (`relatedLinks`), and the in-article CTA.
- **Range to blog**: `GuidesTeaser` on the homepage, `/sofas`, `/beds` and
  `/furniture`. It matches articles by **tag**, not by slug, so a new guide
  appears on the pages it is relevant to without anyone editing a route. It
  renders nothing when no article matches.

### What the blog does not do

No author bios for people who do not exist - the byline is the business, and the
structured data `author` is an `Organization`. No fabricated statistics, prices,
delivery times or review counts, exactly as everywhere else. Local articles are
written about a real local constraint (a service lift, a staircase turn,
monsoon humidity), so no two of them are the same article with the city name
swapped.

---

## SEO

- Per-page title, description and canonical URL, all derived from
  `src/config/site.ts` via `buildMetadata()`.
- Open Graph and Twitter cards. **Every page's share image is a 1200x630 crop**
  under `public/images/share/`, so no card is cropped to a slice of its middle
  by the platform. `og:image:alt` and `twitter:image:alt` come from the
  photograph's own alt text, not from a brand string.
- `sitemap.xml` (50 URLs: every product, every article and every blog category)
  and `robots.txt`, generated. Article entries carry the article's own
  `lastModified`, not the build date.
- Descriptive, hyphenated image filenames matching each product slug
  (`verde-velvet-sofa.jpg`), plus descriptive alt text on every image.
- JSON-LD: `FurnitureStore` and `WebSite` on the homepage, `BreadcrumbList` on
  every inner page, `ItemList` on `/sofas`, `/beds`, `/furniture` and
  `/collection`, `Product` on each design page, `FAQPage` on the homepage,
  `Blog` on `/blog`, `CollectionPage` on each category archive, and
  `BlogPosting` on each article. `FAQPage` is emitted on an article only when
  that article actually renders a FAQ list, and from the same data.
- Open Graph `type` is `article` on the guides, with `published_time`, `section`
  and `tag`. `og:image:width`/`height` are declared only for images known to be
  1200x630 - the generated cards and `og-cover.jpg` - because stating those
  dimensions for a differently shaped photograph makes platforms crop the card
  wrongly.
- `not-found.tsx` has its own metadata, so a dead URL no longer advertises
  itself on social platforms as the homepage.
- The market is named in the homepage title, the hero sub-headline and the
  meta description, and the individual towns are rendered in a "Where we
  deliver" section on `/`, `/about`, `/contact` and `/custom-furniture`. Before
  that, not one of them appeared in any heading, paragraph or link on the site -
  they existed only inside the `areaServed` JSON-LD, which no visitor and no
  ranking factor reads as page content.
- **No `aggregateRating`, `review`, `offers` or `priceRange` is emitted
  anywhere.** Those need verified reviews and real prices; publishing invented
  ones risks a manual penalty as well as being untrue.
- One `<h1>` per page and a clean heading order throughout.

The domain is set (`https://www.furniturefuture.com`), so canonicals, the
sitemap and every social URL resolve. Two things still have to happen outside
this repo, in this order:

1. **Enforce the `www` form and https at the host, as 301s.** A redirect written
   in `next.config.ts` would still let some setups answer the non-canonical host
   with a 200, which is what splits link equity across hostnames. Confirm with
   `curl -I https://furniturefuture.com` and `curl -I http://www.furniturefuture.com`
   that both return 301 and not 200.
2. **Run each platform's share debugger once, deliberately, at launch** -
   Facebook Sharing Debugger, LinkedIn Post Inspector, and paste the link to
   yourself in WhatsApp and Slack. Facebook, LinkedIn and WhatsApp cache a share
   preview per URL, so a card fetched before the site was live stays broken
   until the cache is invalidated, and each debugger forces a re-scrape.

`SEO_AUDIT_AND_LOCAL_SEO_PLAN.md` in the repo root is the full audit and the
30/60/90-day plan. The items still outstanding there need business facts or
owner action (Google Business Profile, reviews, citations, real product range,
city landing pages), not code.

### The generated share cards

`npm run share-images` rebuilds every card in `public/images/share/` from the
photography already in `public/images/`. **Re-run it after adding or renaming a
product or an article**, because each card's filename is that item's slug and
`src/data/products.ts` and `src/data/blog/index.ts` attach `shareImage` by that
convention. A source wider than 1.45:1 is cropped to fill using sharp's
attention strategy; a squarer or portrait source is laid whole onto the site's
cream field, because it cannot be cropped that hard without losing the subject
the alt text describes.

These are mechanical crops standing in for a designed set. Section 31.4 of the
audit specifies what should replace them: own photography, a discreet wordmark
on the route cards, and no text at all on the article and product cards. Name
any replacement with a new filename (`og-cover-2026-09.jpg`, not a second
`og-cover.jpg`) - platforms cache by URL, and overwriting in place is the usual
reason a fixed card keeps rendering the old image for weeks.

---

## Accessibility

Verified in a browser rather than assumed:

- One `h1` per page, no heading-level jumps.
- Every image has descriptive alt text.
- Every link and button has an accessible name; no icon-only action lacks a label.
- Visible 2px focus ring on every interactive element, logical tab order, and a
  "Skip to content" link.
- Mobile menu: `aria-expanded`, background scroll lock, Escape closes it and
  returns focus to the toggle.
- Text colours meet WCAG AA (4.5:1) on the surfaces they sit on. The palette in
  `globals.css` is tuned for this - check any colour you change.
- `prefers-reduced-motion` disables every transition and animation, and all
  content stays visible.
- Scroll reveals are progressive enhancement: with JavaScript off, every section
  renders fully visible.

---

## Performance notes

- All 55 routes are prerendered as static HTML at build time.
- Only the hero photograph is `preload`; everything else lazy-loads.
- Every image sits in a fixed-ratio frame, so there is no layout shift, and all
  use `next/image` with a `sizes` string matched to the real rendered width.
- Client components are limited to the five that genuinely need interaction:
  `Header`, `FloatingContact`, `Reveal`, `EnquiryForm` and
  `FilterableProductGrid`. Everything else is a server component, the whole
  blog included: the category chips are links, the FAQ accordions are
  `<details>`, and the article sidebar is `position: sticky`.
- Measured on the production build: CLS 0 on every page, homepage LCP well under
  half a second locally, ~150KB of compressed JavaScript (the Next.js/React
  baseline).
- No UI, icon or animation library. Icons are inline SVG; motion is CSS.

---

## Design system

Tokens live at the top of `src/app/globals.css` (`@theme`): warm ivory and cream
surfaces, near-black warm ink for type, a brass accent, and soft shadows.
Headings use Instrument Serif, everything else Manrope, both via `next/font`.

- **Type scale**: four fluid display steps (`--text-display-xs/sm/md/lg`) so the
  hero, section headings and card titles read as a hierarchy. `h1`/`h2` carry
  tight optical leading; `h3`/`h4` get more air.
- **Spacing**: one vertical rhythm, set by `<Section size="sm|default|lg">`.
  Mobile steps are deliberately tighter than desktop.
- **Cards**: `--radius-card` / `--radius-media`, a 1px `line` border, and a lift
  on hover (`-translate-y-1` + `shadow-lift`). Used identically by product,
  category, feature, trust and contact cards.
- **Buttons**: `primary` (ink), `light` (on dark/photography), `outline`,
  `whatsapp`, `ghost`, `onImage` - in three sizes. Use a variant rather than
  overriding colours through `className`.

Two things to know before editing styles:

1. Base element styles are inside `@layer base`. Keep them there - unlayered CSS
   outranks Tailwind utilities, so an unlayered `h1 { color: ... }` would
   silently beat `class="text-white"`.
2. Avoid passing conflicting utilities through `className` (`hidden` onto a
   component that already sets `inline-flex`, or `bg-white` over a variant's
   `bg-ink`). Same-layer conflicts resolve by stylesheet order, not class order.
   Add a variant, or wrap the element.
