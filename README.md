# Aaram Furniture - website

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
| 2 | **Live domain** (canonical URLs, sitemap, social cards) | `src/config/site.ts` -> `url` |
| 3 | Showroom address (shows the address block + "Get directions", and adds the address to Google's structured data) | `src/config/site.ts` -> `address` |
| 4 | Business hours | `src/config/site.ts` -> `openingHours` |
| 5 | Service area, e.g. "Delhi NCR" | `src/config/site.ts` -> `serviceArea` |
| 6 | Email and social links | `src/config/site.ts` -> `email`, `social` |
| 7 | **Catalogue PDF** | see `public/catalogue/README.md` |
| 8 | **Real product photography** | see `public/images/README.md` |
| 9 | Real product names, descriptions and specs | `src/data/products.ts` |
| 10 | **Real customer testimonials** - the six on the site now are samples (see "Social proof / testimonials") | `src/data/testimonials.ts` |
| 11 | Review the FAQ answers you can actually commit to | `src/data/faqs.ts` |
| 12 | Have the privacy policy and terms reviewed | `src/app/privacy`, `src/app/terms` |

The phone number `+91 93157 10072` is already wired into every call and
WhatsApp link on the site. Change it once in `src/config/site.ts` and it updates
everywhere, including the structured data.

### Fields left empty on purpose

`address`, `openingHours`, `serviceArea`, `email` and the social links are
`null`. A `null` field is simply not rendered, and it is left out of the
structured data too. No placeholder address, no invented opening hours, no
fabricated ratings, review counts, years in business or customer numbers appear
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
  components/
    ui/                 Container, Section, Button, SmartImage, Reveal, Icons
    layout/             Header, Footer, FloatingContact, Wordmark
    sections/           Hero, CategoryGrid, SofaBedSplit, ProductShowcase,
                        ProductCard, FilterableProductGrid, CatalogueCTA,
                        WhyChooseUs, LifestyleGallery, Testimonials,
                        TrustSignals, AboutSection, LeadCTA, ContactSection,
                        FaqSection, PageHero, EnquiryForm, LegalPage
  app/                  Routes (see below), sitemap.ts, robots.ts, icons
public/
  images/               All photography (see public/images/README.md)
  catalogue/            Drop the catalogue PDF here (see its README)
```

**Content lives in `src/data`, never in components.** Every section renders from
that data, so the range can be rewritten without touching JSX.

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, featured sofas, featured beds, the sofa/bed split feature, other furniture, why us, gallery, testimonials, catalogue, about, enquiry, contact, FAQ |
| `/sofas` | Full sofa range, with category chips |
| `/beds` | Full bed range, with category chips |
| `/furniture` | All categories, plus dining / living / TV units / wardrobes / chairs / custom (anchor targets) |
| `/furniture/[slug]` | One page per design, prerendered from `src/data/products.ts` |
| `/collection` | Lifestyle gallery |
| `/about`, `/contact` | |
| `/privacy`, `/terms` | Draft legal pages |
| `/sitemap.xml`, `/robots.txt` | Generated from the same config |

Adding a product to `src/data/products.ts` automatically creates its detail
page, its sitemap entry and its listing card. Slugs come from the product name.

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

## SEO

- Per-page title, description and canonical URL, all derived from
  `src/config/site.ts` via `buildMetadata()`.
- Open Graph and Twitter cards, with a 1200x630 share image.
- `sitemap.xml` (33 URLs, including every product) and `robots.txt`, generated.
- Descriptive, hyphenated image filenames matching each product slug
  (`verde-velvet-sofa.jpg`), plus descriptive alt text on every image.
- JSON-LD: `FurnitureStore` and `WebSite` on the homepage, `BreadcrumbList` on
  every inner page, `ItemList` on `/sofas`, `/beds`, `/furniture` and
  `/collection`, `Product` on each design page, `FAQPage` on the homepage.
- **No `aggregateRating`, `review`, `offers` or `priceRange` is emitted
  anywhere.** Those need verified reviews and real prices; publishing invented
  ones risks a manual penalty as well as being untrue.
- One `<h1>` per page and a clean heading order throughout.

Set the real domain in `src/config/site.ts` before submitting the sitemap.

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

- All 33 routes are prerendered as static HTML at build time.
- Only the hero photograph is `priority`; everything else lazy-loads.
- Every image sits in a fixed-ratio frame, so there is no layout shift, and all
  use `next/image` with a `sizes` string matched to the real rendered width.
- Client components are limited to the five that genuinely need interaction:
  `Header`, `FloatingContact`, `Reveal`, `EnquiryForm` and
  `FilterableProductGrid`. Everything else is a server component.
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
