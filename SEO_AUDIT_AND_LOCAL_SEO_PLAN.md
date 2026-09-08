# SEO Audit & Local SEO Strategy

**Project:** `Aaram-Furniture` (site brand in code: **Furniture Future**)
**Stack:** Next.js 16.3.4 (App Router), React 19.2.8, TypeScript, Tailwind CSS v4. Static, frontend-only.
**Audit date:** 7 September 2026
**Audit scope:** Source-code audit of the repository at branch `improvements`, plus a production build (`npm run build`) and inspection of the generated HTML, `sitemap.xml` and `robots.txt`. Plus a limited public SERP observation for the target cities. [Section 31](#31-open-graph-social-sharing--image-seo-audit) is a second pass covering Open Graph, social sharing and delivered image markup; where it contradicted the first pass, the first pass has been corrected in place and the correction is flagged.
**Target markets:** Noida, Delhi, Ghaziabad, Gurugram / Gurgaon.

> **Nothing in the website was modified to produce this report.** This document is the only file created. All statements marked **Observed** were verified against files in this repository or against the output of the production build. Everything marked **Recommendation** is a proposal for future work and has not been implemented.

> **On metrics:** this repository contains no analytics, no Search Console connection and no live domain, and the site does not appear to be deployed. Therefore **search volume, keyword difficulty, traffic, current rankings, backlink counts and domain authority could not be verified** for this site or for any competitor. Every keyword in this document is labelled a **potential target**, not a measured opportunity. Where a number would be needed and was not available, this report says so explicitly.

---

## Table of contents

1. [Executive Summary](#1-executive-summary)
2. [Website Overview](#2-website-overview)
3. [Current SEO Score](#3-current-seo-score)
4. [Current SEO Strengths](#4-current-seo-strengths)
5. [Current SEO Problems](#5-current-seo-problems)
6. [Technical SEO Audit](#6-technical-seo-audit)
7. [On-Page SEO Audit](#7-on-page-seo-audit)
8. [Content SEO Audit](#8-content-seo-audit)
9. [Local SEO Audit](#9-local-seo-audit)
10. [Noida SEO Strategy](#10-noida-seo-strategy)
11. [Delhi SEO Strategy](#11-delhi-seo-strategy)
12. [Ghaziabad SEO Strategy](#12-ghaziabad-seo-strategy)
13. [Gurugram / Gurgaon SEO Strategy](#13-gurugram--gurgaon-seo-strategy)
14. [Keyword Strategy](#14-keyword-strategy)
15. [Recommended Page / URL Structure](#15-recommended-page--url-structure)
16. [Internal Linking Strategy](#16-internal-linking-strategy)
17. [Schema / Structured Data Recommendations](#17-schema--structured-data-recommendations)
18. [Google Business Profile Strategy](#18-google-business-profile-strategy)
19. [Local Citation & Backlink Strategy](#19-local-citation--backlink-strategy)
20. [Content Strategy](#20-content-strategy)
21. [Competitor / SERP Insights](#21-competitor--serp-insights)
22. [SEO Risks](#22-seo-risks)
23. [Priority Fixes](#23-priority-fixes)
24. [30-Day SEO Plan](#24-30-day-seo-plan)
25. [60-Day SEO Plan](#25-60-day-seo-plan)
26. [90-Day SEO Plan](#26-90-day-seo-plan)
27. [Long-Term SEO Strategy](#27-long-term-seo-strategy)
28. [SEO Monitoring & KPIs](#28-seo-monitoring--kpis)
29. [Final Recommendation](#29-final-recommendation)
30. [Exact Next Steps](#30-exact-next-steps)
31. [Open Graph, Social Sharing & Image SEO Audit](#31-open-graph-social-sharing--image-seo-audit)

---

## 1. Executive Summary

### The short version

This is an unusually well-built website with almost no local SEO. The technical and on-page foundations are in the top decile of small business sites: every one of the 55 routes is prerendered static HTML, canonicals are correct and unambiguous, titles and descriptions are unique and written by a human, there is exactly one `<h1>` per page, structured data is present and honest, and the blog is nine genuinely substantial long-form guides rather than filler. The build is clean and lint is clean.

What is missing is the entire layer that decides whether a furniture business ranks in Noida, Delhi, Ghaziabad and Gurugram: there is no verified address, no business hours, no Google Business Profile, no city landing pages, no reviews, no citations, and **not one city name appears in any title tag, meta description, `<h1>` or `<h2>` on any commercial page of the site.**

### Answering your six questions directly

**1. How good or bad is the current SEO?**
Technically: good, verging on excellent. Locally: close to zero. The site would currently be a credible candidate to rank for national informational queries such as "sofa size guide India" and for brand queries, and a poor candidate for anything of the form `[furniture keyword] + [city]`, because the pages that should target those queries do not mention the cities at all.

**2. Does the site have the potential to rank in these cities?**
Yes for a meaningful subset, no for the hardest head terms in the short term.

- Realistically winnable within 3 to 6 months of consistent work: long-tail and question-based local queries, "near me" style queries once a Google Business Profile exists and is verified, sub-locality queries (sector-level in Noida, Gaur City / Indirapuram in Ghaziabad, Sohna Road / Golf Course Extension in Gurugram), and informational guide queries that pull in NCR buyers.
- Hard, and not a 90-day goal: single head terms such as "sofa set Delhi" or "furniture shop Noida". Those SERPs are held by national e-commerce brands, aggregator directories and long-established local manufacturers, and the local pack is held by verified businesses with review histories. See [section 21](#21-competitor--serp-insights).
- **Blocking constraint:** the biggest single limiter is not the code. It is that the business has not supplied an address or opening hours, has no Google Business Profile, and has no reviews. For local intent queries, Google's local pack is where most of the clicks go, and eligibility for it requires a verified profile with a real location or service area. Nothing that can be written in this repository substitutes for that.

**3. What is preventing better rankings right now?**
In order of severity: (a) the site is not live on a real domain (the domain in config is still a placeholder), (b) no Google Business Profile, (c) no city targeting anywhere in the commercial pages' metadata or copy, (d) no verified NAP so no `LocalBusiness` address in structured data, (e) no reviews, (f) no analytics or Search Console so nothing is measurable, (g) the product catalogue is sample data with invented names that carry no search demand.

**4. What should be improved to target these cities?**
Four things, in this order: launch on the real domain with GSC and analytics wired in; create and verify a Google Business Profile with the four cities as the service area; add the confirmed NAP to `src/config/site.ts` so the address, hours and `LocalBusiness` schema become real; then build **four** genuinely differentiated city landing pages plus a small set of sub-locality and service-plus-city pages, each with real local substance. Not forty. Four.

**5. What keywords, pages, content, technical and local strategies?**
See sections [10](#10-noida-seo-strategy) to [20](#20-content-strategy). The core pattern is a three-layer information architecture: category pages (`/sofas`, `/beds`) hold the commercial keyword, city pages (`/sofas-in-noida` style, or `/service-areas/noida`) hold the local modifier and the local proof, and blog guides hold the informational demand and feed links into both.

**6. What should be prioritised first?**
Phase 1 in [section 23](#23-priority-fixes). The single highest-return action is not a code change: it is claiming and verifying the Google Business Profile and collecting the first ten real reviews, in parallel with putting the site on its real domain. Both can start today and neither depends on a developer.

### Honest expectation setting

No one can promise a #1 ranking, and this report does not. What is defensible from the evidence: this codebase will not be the thing that holds the site back. Its technical quality means link equity and content will actually be crawled, indexed and rendered properly, which is more than most competitors in this space can say. But a furniture business ranking in four NCR cities is won on local signals (profile, reviews, citations, proximity, local links) and on content depth, and the site currently has one of those three and none of the local ones.

---

## 2. Website Overview

### 2.1 What the site is

**Observed:** A static, frontend-only lead-generation site for a furniture business. It has no backend, database, CMS or authentication, by design (`AGENTS.md`, `README.md`). Its conversion model is: browse designs, then call or WhatsApp. There is no cart, no checkout, no prices.

**Observed:** Three CTAs repeat throughout: call (`tel:+919315710072`), WhatsApp (`https://wa.me/919315710072` with a pre-filled contextual message), and "get the catalogue". All are built through `src/lib/contact.ts`; no `tel:` or `wa.me` URL is hand-written anywhere.

**Observed:** The enquiry form on the contact section does not post anywhere. It composes what the visitor typed into a WhatsApp deep link and opens the chat (`src/components/sections/EnquiryForm.tsx`). Nothing is stored. This is documented and deliberate.

### 2.2 Products and services offered

**Observed** from `src/data/products.ts`: 24 products in three groups, 8 each.

| Group | Count | Visible categories |
| --- | --- | --- |
| `sofas` | 8 | Sofas (three-seater, two-seater, L-shape sectional, modular, lounge, leather, velvet) |
| `beds` | 8 | Beds (upholstered, storage/hydraulic, platform, wingback, panel, cane, classic) |
| `more` | 8 | Dining (2), TV units (2), Wardrobes (1), Chairs (1), Recliners (1), Living room (1) |

**Observed:** The service proposition, stated repeatedly in copy and in `src/data/faqs.ts`, is **made to order in the customer's size, upholstery and finish**, plus building from a customer's reference photograph. This is the commercially most valuable and most defensible angle the site has, and it is currently under-used in metadata.

**Observed:** No prices anywhere. `Product.price` is optional and undefined for every product. `src/data/faqs.ts` states prices are quoted per piece.

**Observed:** All 24 product names are invented sample names ("Aspen Leather Three-Seater", "Verde Velvet Sofa", "Meridian L-Shape Sectional", "Vault Storage Bed", "Atlas Wardrobe" and so on). `README.md` item 9 flags replacing them with real product names as a pre-launch task.

### 2.3 Target audience

**Inferred from copy, and consistent throughout:** Delhi NCR home buyers and renters furnishing a flat, builder floor or high-rise apartment, who want a piece made to fit a specific room rather than an off-the-shelf size. The blog articles address 2BHK high-rise flats, builder floors, service lifts, staircase turns and monsoon humidity, which are all NCR-resident concerns. The audience definition is coherent; it is simply not stated in any indexable title or heading.

### 2.4 Routes and site structure

**Observed** from the production build: **55 prerendered routes**, all static. No server rendering, no ISR, no dynamic routes at request time.

```
/                                  Homepage (14 sections)
/sofas                             Sofa range + client-side category chips
/beds                              Bed range + client-side category chips
/furniture                         All categories + 5 anchor-target groups
/furniture/[slug]                  24 product detail pages
/collection                        Lifestyle gallery
/blog                              Guides index (featured, latest, topic grid)
/blog/[slug]                       9 article pages
/blog/category/[category]          6 category archives
/about
/contact
/privacy
/terms
/robots.txt   /sitemap.xml   /icon.svg   /apple-icon.png   /_not-found
```

**Observed:** Adding a product to `src/data/products.ts` or an article to `src/data/blog/index.ts` automatically produces its page, its listing card, its internal links and its sitemap entry. This is a real strategic asset: content scaling has near-zero engineering cost.

### 2.5 Navigation

**Observed** header primary nav (`src/components/layout/Header.tsx`): Sofas, Beds, Furniture, Collection, Guides, About, Contact. Plus a call button and a catalogue button. Mobile adds Home.

**Observed** footer (`src/components/layout/Footer.tsx`): an "Explore" column repeating the eight main routes, a "Categories" column built from `src/data/categories.ts`, a contact column (phone, WhatsApp, and address/hours/email only when non-null), the catalogue CTA, social links (all currently null so not rendered), a "Serving Delhi NCR" line, and Privacy / Terms.

**Problem:** There is no city or service-area navigation anywhere. A crawler and a visitor both leave the site without ever being told, on any commercial page, which cities are served, apart from the single footer line "Serving Delhi NCR" and one line in the contact section, "We serve Delhi NCR."

### 2.6 Brand and domain state

**Observed:** `src/config/site.ts` has `name: "Furniture Future"` and `url: "https://www.furniture-future.com"`, both carrying `TODO(owner)` comments. The git remote is `https://github.com/Ranjan404/Aaram-Furniture.git` and the working directory is `Aaram-Furniture`.

**Problem:** The brand name in the code and the repository name disagree, and the domain is a placeholder. Every canonical URL, every sitemap entry, every Open Graph URL and every `@id` in the structured data is currently built from a domain that may not be the live one. If the site is deployed with this value unchanged, canonicals will point at the wrong host and the site becomes effectively unindexable on its real domain.

**Recommendation:** Resolve the legal/trading business name and the live domain before anything else. This is a one-line change to `src/config/site.ts` that propagates everywhere, but it must happen before launch, not after.

### 2.7 What is deliberately absent (and correctly so)

**Observed:** `address`, `openingHours`, `email` and all three social links are `null` in `src/config/site.ts`. `testimonialsAreVerified` is `false` in `src/data/testimonials.ts`, and the six testimonials on the site are labelled sample content. No `aggregateRating`, `review`, `offers` or `priceRange` is emitted in any structured data anywhere. No prices, review counts, ratings, awards, years in business or delivery timelines appear.

This is the correct engineering decision and it must not be reversed to chase rich results. Fabricated reviews and ratings are a manual-action risk with Google, and in India presenting fabricated reviews as genuine is prohibited under the Consumer Protection Act 2019 and the BIS review guidelines (IS 19000:2022). Every recommendation in this document about ratings, hours and addresses is conditional on the business supplying real values.

---

## 3. Current SEO Score

Scores are judgements about **this site against what a competitive local furniture business needs in Delhi NCR**, not against a generic checklist. Each is explained so a future reader can disagree with the reasoning rather than just the number.

| Dimension | Score | One-line verdict |
| --- | --- | --- |
| Technical SEO | **74 / 100** | Excellent foundations, undermined by a placeholder domain and zero measurement |
| On-Page SEO | **68 / 100** | Clean and human-written, but targets no city and leaves category keywords homeless |
| Local SEO | **22 / 100** | Essentially unbuilt: no NAP, no GBP, no city pages, no reviews |
| Content SEO | **78 / 100** | Nine strong guides; product content is still sample data |
| Internal Linking | **80 / 100** | Genuinely bidirectional and automated; missing a local layer |
| Mobile SEO | **85 / 100** | Responsive, accessible, low JS, one heavy page |
| **Overall SEO Readiness** | **62 / 100** | A strong machine with the local ignition missing |

### 3.1 Technical SEO: 74 / 100

**Credits.** Every route is prerendered static HTML (verified: `✓ Generating static pages (55/55)`), so there is no JavaScript-rendering risk for crawlers at all. Canonical tags are absolute, correct and trailing-slash-free (verified in `.next/server/app/sofas.html`: `<link rel="canonical" href="https://www.furniture-future.com/sofas"/>`). `trailingSlash: false` in `next.config.ts` prevents duplicate-URL forms. `robots.txt` allows everything and declares both `Host` and `Sitemap`. `sitemap.xml` contains 49 URLs and blog entries carry their own `lastModified` rather than the build date. `poweredByHeader: false`. AVIF and WebP are enabled for images. Build clean, `npx eslint .` clean.

**Deductions.**
- **-12** the domain in `src/config/site.ts` is a placeholder marked `TODO(owner)`, so canonicals, sitemap, Open Graph URLs and structured-data `@id` values are all currently wrong for any real deployment.
- **-6** no Google Search Console verification, no analytics, no `verification` field in metadata. Nothing about performance in search is currently observable.
- **-4** ~15 MB of source JPEGs in `public/images`, largest 614 KB. `next/image` optimises delivery, so visitors are fine, but the repository and build are heavier than they need to be and any host with an image-optimisation quota will feel it.
- **-4** the homepage renders to 465 KB of uncompressed HTML across 14 sections, which is a lot of DOM for one URL.

### 3.2 On-Page SEO: 68 / 100

**Credits.** Every page has a unique, hand-written title and meta description built through one function (`buildMetadata()` in `src/lib/seo.ts`), so nothing is templated-generic. Exactly one `<h1>` per page (verified on `/` and `/sofas`). Heading order is clean; the blog block renderer can only express `h2` and `h3`, which makes a broken hierarchy structurally impossible. Every image has descriptive alt text and a `sizes` string matched to its rendered width. URL slugs are short, lowercase and hyphenated. Semantic HTML throughout (`<article>`, `<nav aria-label>`, `<time datetime>`, `<details>` for FAQs).

**Deductions.**
- **-18** **no city appears in any title, description, `<h1>` or `<h2>` on any commercial page.** Verified by grep across `src/app/**`: every page file returns zero matches for Noida, Delhi, Ghaziabad, Gurugram, Gurgaon or NCR, with one exception, the `/blog` meta description which mentions "Delhi NCR's climate". For a business whose entire market is four named cities, this is the single largest on-page gap.
- **-8** the secondary categories that carry real commercial search demand (dining table, wardrobe, TV unit) have **no URL of their own**. `src/data/categories.ts` points them at anchors: `/furniture#dining`, `/furniture#wardrobes`, `/furniture#tv-units`, `/furniture#chairs`, `/furniture#custom`. An anchor cannot rank as a separate result, cannot have its own title tag, and cannot accumulate its own links.
- **-6** the 24 product names are invented sample names with no search demand behind them. "Verde Velvet Sofa" competes for nothing; "Velvet 3 Seater Sofa" would.

### 3.3 Local SEO: 22 / 100

**Credits.** `serviceArea` is set to "Delhi NCR" and rendered in the footer and contact section. `serviceAreas` lists seven towns (Delhi, New Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad) and these are emitted as `areaServed` `Place` nodes in the `FurnitureStore` JSON-LD (verified: 7 `"@type":"Place"` nodes on the homepage). `FurnitureStore` schema exists with `telephone` and a `ContactPoint`. `locale` is `en_IN` and `inLanguage` is `en-IN`. Four blog articles are written about specific NCR places and carry a `location` field that emits `spatialCoverage`.

**Deductions.**
- **-30** no city landing pages exist at all. Nothing on the site can rank for `[service] in [city]`.
- **-20** `address` is `null`, so the `FurnitureStore` schema has **no `PostalAddress`, no `geo`, no `hasMap`**, and the site displays no address. There is no NAP to be consistent with.
- **-15** `openingHours` is `null`, so no `openingHoursSpecification` is emitted.
- **-13** no Google Business Profile is referenced anywhere, no `sameAs` links (all three social fields are `null`), and no citations exist. For local intent, this is the load-bearing wall.

### 3.4 Content SEO: 78 / 100

**Credits.** Nine articles, each **1,886 to 2,772 words** (measured from the source files), all with a FAQ block, all with takeaways, all with contextual internal links, all authored as typed content blocks so typography and heading order cannot break. Six categories, all populated (an empty category is hidden by design, so no thin archive can ship). Four articles are written around a genuinely local constraint (a Noida high-rise 2BHK layout, a Gurgaon apartment's planning sequence, a Ghaziabad builder floor's inherited layout, NCR climate and upholstery). Reading time, word count in schema and the contents list are all derived from the blocks so they cannot disagree with the page.

**Deductions.**
- **-12** all 24 products carry sample copy and invented names. The 24 product detail pages are the largest block of URLs on the site and are currently the weakest content on it.
- **-6** all nine articles share the publication date `2026-09-07`. `README.md` item 13 flags this. Nine guides published the same day is a visible "launched with a content dump" signal and gives Google no freshness gradient.
- **-4** no article yet targets the highest-intent local informational queries, for example choosing a sofa maker, what to check before ordering custom furniture, or delivery access in a specific tower type.

### 3.5 Internal Linking: 80 / 100

**Credits.** Linking runs both ways and is automated. Blog to range: contextual `RichText` links inside prose, a curated "From our range" sidebar block (`relatedLinks`, present in all nine articles), and an in-article CTA. Range to blog: `GuidesTeaser` on the homepage, `/sofas`, `/beds` and `/furniture`, matching articles **by tag** so a new guide joins the right pages with no route edit. `BreadcrumbList` schema plus visible breadcrumbs on every inner page. `getRelatedPosts()` guarantees three onward links from every article. The blog registry throws at build time on a duplicate slug, a reserved slug or an unknown `relatedPosts` entry, so a broken internal link fails the build instead of shipping.

**Deductions.**
- **-10** no local layer: nothing links city-relevant articles to a city page (because none exists), and no hub gathers the NCR content.
- **-6** five commercial categories are reachable only as fragment anchors, so internal link equity to dining, wardrobes and TV units all lands on one URL.
- **-4** no in-body links from `/sofas` or `/beds` prose down into individual product pages; product links come only from cards.

### 3.6 Mobile SEO: 85 / 100

**Credits.** `viewport` is set correctly (`width=device-width, initialScale=1`). Fluid type scale via CSS custom properties, mobile-first spacing steps, and a documented mobile-tighter vertical rhythm. Every image sits in a fixed-ratio frame so CLS is structurally 0. Only five client components; everything else is a server component, including the whole blog. Only the hero image is `priority`; everything else lazy-loads. Both fonts load through `next/font` with `display: swap`. `prefers-reduced-motion` disables all animation. Mobile menu handles `aria-expanded`, scroll lock and Escape-to-close. Tap targets are generously sized. Total CSS is one 60 KB file.

**Deductions.**
- **-9** the homepage at 465 KB of HTML with 14 sections is heavy for a mid-range Android on a 4G connection, even fully static.
- **-6** unverified in the field: no Core Web Vitals field data exists because the site is not live. `README.md` reports CLS 0 and sub-half-second local LCP, which is a local measurement, not a CrUX measurement. **Field data could not be verified.**

### 3.7 Overall SEO Readiness: 62 / 100

The weighting reflects what actually decides local furniture rankings: local signals carry more weight than technical polish once technical polish is already adequate, and here it is more than adequate. The site is a well-engineered vehicle with no fuel in the local tank. The 38 points missing are almost entirely recoverable, and most of them are recoverable by the business owner rather than by a developer.

---

## 4. Current SEO Strengths

These are worth listing explicitly because several of them are things competitors in this market usually get wrong, and none of them should be traded away during the improvement work.

### 4.1 Rendering and crawlability are a solved problem

**Observed:** all 55 routes prerender to static HTML at build time. The `/sofas` and `/beds` category chips filter client-side over data already present in the server-rendered HTML, so every product is in the initial HTML for crawlers and for no-JavaScript visitors; the chips only hide cards afterwards. `/blog/category/<slug>` is a real crawlable URL, not a client-side filter.

**Why it matters:** the single most common technical failure in this sector is a JavaScript-rendered catalogue that Googlebot indexes as an empty shell. That failure mode does not exist here.

### 4.2 Canonicalisation is unambiguous

**Observed:** one `canonicalUrl()` function serves both the canonical tags and the sitemap, so they cannot disagree. The root is emitted without a trailing slash. `trailingSlash: false`. Verified output: `https://www.furniture-future.com/sofas` on `/sofas`, matching the sitemap entry exactly.

### 4.3 Metadata is written, not generated

**Observed** titles and descriptions across all static routes:

| Route | Title (before the brand suffix) | Description length |
| --- | --- | --- |
| `/` | `Furniture Future \| Modern Sofas, Beds & Custom Furniture` (absolute, no suffix) | 219 chars |
| `/sofas` | `Sofa Designs - Modern, L-Shape & Custom Sofas` | 191 chars |
| `/beds` | `Bed Designs - Upholstered, Storage & Platform Beds` | 193 chars |
| `/furniture` | `All Furniture - Sofas, Beds, Dining, Storage & Custom` | 205 chars |
| `/collection` | `Collection - Furniture Gallery & Room Inspiration` | 163 chars |
| `/blog` | `Furniture Guides - Buying, Sizing & Care Advice` | 158 chars |
| `/about` | `About Us - How We Make Furniture` | 175 chars |
| `/contact` | `Contact - Call or WhatsApp for Furniture Designs` | 196 chars |
| `/privacy` | `Privacy Policy` | short |
| `/terms` | `Terms of Use` | short |
| `/furniture/[slug]` | `{product.name} - {category}` | derived per product |
| `/blog/[slug]` | `post.seoTitle ?? post.title` | per article |
| `/blog/category/[slug]` | `category.title` | per category, hand-written |

Note the `seoTitle` mechanism on articles: the browser title can carry the keyword phrasing while the visible `<h1>` stays readable. That is a deliberate, correct pattern, and it is already used on all nine articles.

### 4.4 Structured data is present and honest

**Observed** on the homepage (verified in the built HTML): `FurnitureStore`, `WebSite`, `FAQPage` with 5 `Question`/`Answer` pairs, `ContactPoint`, 9 `OfferCatalog` nodes, 7 `Place` nodes as `areaServed`. On `/furniture/verde-velvet-sofa`: `Product` with `Brand`, plus `BreadcrumbList` with 3 `ListItem`s. `ItemList` on `/sofas`, `/beds`, `/furniture`, `/collection`. `Blog` on `/blog`, `CollectionPage` on each category archive, `BlogPosting` on each article, and `FAQPage` on an article only when it actually renders a FAQ list, from the same data.

**Observed:** no `aggregateRating`, `review`, `offers` or `priceRange` anywhere. Confirmed by reading `src/lib/seo.ts` in full and by grepping the built HTML.

### 4.5 Content scaling is free

**Observed:** one new file plus one registry line produces a new article page, card, category entry, tag-matched teaser placement and sitemap entry. The same is true of products. Build-time integrity checks prevent duplicate slugs, reserved slugs and dangling related-post references.

**Why it matters:** the content plan in [section 20](#20-content-strategy) is realistic precisely because publishing costs almost nothing here.

### 4.6 Honesty is built into the data model

**Observed:** unknown facts are typed `| null`, are not rendered, and are omitted from structured data. `testimonialsAreVerified` gates both the visible "sample" note and all rating/review schema. The catalogue button falls back to a WhatsApp request rather than linking to a missing PDF. The enquiry form does not pretend to submit.

**Why it matters for SEO specifically:** this eliminates the two most common penalty risks for a small local site, fabricated reviews and thin fake content, and it means the schema will pass validation the moment real data is added.

### 4.7 Accessibility work doubles as SEO work

**Observed** and documented as browser-verified: one `h1` per page, no heading jumps, alt text on every image, accessible names on every link and button, visible focus rings, skip-to-content link, WCAG AA text contrast, and full content visibility with JavaScript disabled. Scroll reveals are progressive enhancement only.

### 4.8 Performance posture is good by construction

**Observed:** ~686 KB of raw JavaScript across all static chunks (`README.md` reports ~150 KB compressed, which is the Next.js and React baseline), a single 60 KB CSS file, no UI library, no icon library, no animation library. Icons are inline SVG, motion is CSS. Five client components total.

---

## 5. Current SEO Problems

Each problem below is stated as **Observed / Problem / Recommendation**, with a severity flag. Severity is judged by impact on the stated goal of ranking in the four target cities.

### 🔴 P1. The live domain is still a placeholder

**Observed:** `src/config/site.ts` line: `url: "https://www.furniture-future.com"`, carrying the comment `TODO(owner): replace with the live domain before launch.`

**Problem:** Every canonical tag, sitemap `<loc>`, Open Graph `url`, Twitter card, and structured-data `@id` and absolute image URL is derived from this value. Deploying to a different host without changing it means every page on the live site canonicalises to a domain the live site is not on. That is a total indexation failure, not a partial one.

**Recommendation:** Set `url` to the real domain before the first deploy. Then verify in the built HTML that `<link rel="canonical">` and the sitemap `<loc>` values both point at the live host. Choose one host form (with or without `www`) and 301 the other to it at the hosting layer; do not serve both.

### 🔴 P2. No Google Business Profile

**Observed:** No reference to a Google Business Profile, place ID, `hasMap`, `geo` or Maps URL anywhere in the repository. `PostalAddress.mapsUrl` exists as an optional field but `address` itself is `null`.

**Problem:** For queries with local intent ("sofa shop near me", "furniture shop in Noida", "sofa maker Ghaziabad"), the local pack occupies the most valuable screen real estate on mobile, and eligibility requires a verified profile. Without one, the site is competing only for the organic results below the pack, and is invisible on Google Maps entirely.

**Recommendation:** Claim and verify a profile. See [section 18](#18-google-business-profile-strategy) for the full specification. This is owner work, not developer work, and it is the highest-leverage single action available.

### 🔴 P3. No city targeting on any commercial page

**Observed:** grep across `src/app/**/*.tsx` for `noida|delhi|gurugram|gurgaon|ghaziabad|ncr` returns **0 matches in every page file** except `src/app/blog/page.tsx` (1 match, in the meta description). All city language lives in `src/data/blog/posts/*` and `src/config/site.ts`.

**Problem:** The pages that carry the commercial keywords (`/sofas`, `/beds`, `/furniture`, product pages, `/contact`) give Google no signal that they are relevant to Noida, Delhi, Ghaziabad or Gurugram. The two lines that do exist ("Serving Delhi NCR" in the footer, "We serve Delhi NCR." in the contact section) are the weakest possible signal: one umbrella phrase, in boilerplate, on every page.

**Recommendation:** Two independent fixes. (a) Add city landing pages, four of them, each with real differentiated substance ([sections 10 to 13](#10-noida-seo-strategy)). (b) Add honest local context to the existing commercial pages: the `/contact` page and the `/about` page should name the cities served in body copy and in the metadata, and the service-area list should be a rendered, linked list rather than a single umbrella phrase. Do not sprinkle city names into `/sofas` and `/beds` titles as a substitute for real city pages.

### 🔴 P4. No verified NAP, so no `LocalBusiness` address or hours

**Observed:** `address: null`, `openingHours: null`, `email: null` in `src/config/site.ts`. Confirmed in output: the `FurnitureStore` JSON-LD emits `name`, `url`, `description`, `telephone`, `image`, `areaServed`, `contactPoint` and `hasOfferCatalog`, and no `address`, `geo`, `hasMap` or `openingHoursSpecification`.

**Problem:** NAP consistency is a primary local ranking input, and there is currently no A and no H to be consistent about. The phone number is the only stable NAP element on the site.

**Recommendation:** The owner must decide and supply one of two models, and they lead to different schema:
- **Storefront model:** a real visitable showroom. Fill `address` and `openingHours`. The site then renders the address block and a "Get directions" button, and the schema gains `PostalAddress`. Add `geo` and `hasMap`.
- **Service-area model:** no public showroom, delivery and consultation only. Then `address` correctly stays `null`, and the correct schema shape is `areaServed` (already present) with the business type kept as `FurnitureStore` or narrowed appropriately. The Google Business Profile should be configured as a service-area business with the four cities listed and the address hidden.

Choosing the wrong model is worse than choosing late. A fabricated address is a suspension risk on Google Business Profile, and a hidden real address weakens proximity ranking for walk-in queries.

### 🟠 P5. No reviews, and testimonials are sample content

**Observed:** `testimonialsAreVerified = false` in `src/data/testimonials.ts`. Six sample testimonials render with a visible "sample" note, and no rating or review structured data is emitted anywhere.

**Problem:** Review count and rating are among the strongest local pack ranking inputs, and review text is a source of long-tail local relevance ("they made an L-shape for our Sector 137 flat"). The site currently has none, and correctly claims none.

**Recommendation:** Build a review pipeline before touching the schema. See [section 18.4](#184-review-generation-strategy). Only after real reviews exist should `testimonialsAreVerified` be flipped, and even then, `aggregateRating` should only ever be emitted from genuinely collected, attributable reviews.

### 🟠 P6. No analytics and no Search Console

**Observed:** grep for `gtag`, `googletagmanager`, `analytics`, `google-site-verification`, `clarity`, `hotjar`, `measurementId` across `src/` returns only two comment mentions in `src/app/privacy/page.tsx` explaining that the site does **not** run analytics. No `verification` field in the metadata objects.

**Problem:** No impressions, clicks, queries, coverage, Core Web Vitals field data, or conversion data. Every claim about progress after launch would be unfalsifiable, and indexation problems would go unnoticed.

**Recommendation:** Verify the property in Google Search Console (DNS TXT record is cleanest and avoids touching the code; alternatively add the `verification.google` field in the root layout metadata). Add one privacy-respecting analytics tool. **Note:** `src/app/privacy/page.tsx` explicitly states the site does not set cookies and does not run analytics, so adding any analytics **requires updating the privacy policy in the same change**. Flagging this because shipping analytics against a policy that denies it is a compliance problem, not just an inconsistency.

### 🟠 P7. Commercial category keywords have no URLs

**Observed:** `src/data/categories.ts` sets `href` to `/furniture#dining`, `/furniture#living-room`, `/furniture#tv-units`, `/furniture#wardrobes`, `/furniture#chairs`, `/furniture#custom`. Only `sofas` and `beds` have real routes.

**Problem:** "dining table", "wardrobe", "TV unit" and "custom furniture" carry independent commercial demand. As anchors they share one title tag, one meta description and one URL with everything else on `/furniture`, and they cannot rank separately. "Custom furniture" is the worst loss, since made-to-order is the business's strongest differentiator.

**Recommendation:** Promote at least `/custom-furniture`, `/dining`, `/wardrobes` and `/tv-units` to real routes with their own metadata, `ItemList` schema and `GuidesTeaser` placement, mirroring how `/sofas` and `/beds` are already built. Keep the anchors working as redirects or as in-page navigation so nothing breaks. Only promote a category that has enough products and copy to justify a page; with 1 to 2 products each in the current data, this depends on P8.

### 🟠 P8. The product catalogue is sample data

**Observed:** all 24 products carry invented names and sample descriptions; `README.md` items 8 and 9 flag replacing photography and names as pre-launch tasks. Image filenames are descriptive and slug-matched, which is correct, but they describe stock-style photographs.

**Problem:** 24 of the 49 sitemap URLs, roughly half the site, are pages about products that do not exist under those names. Product names carry no search demand. If the photography is stock, it is likely to appear on many other sites, which weakens the pages further.

**Recommendation:** Replace with the real range: real names that include the search term where natural ("Velvet 3 Seater Sofa" rather than "Verde Velvet Sofa"), real specifications, and the business's own photographs. Own photography is a genuine ranking and conversion asset for furniture and it also feeds the Google Business Profile.

### 🟡 P9. All nine articles share one publication date

**Observed:** `publishedAt: "2026-09-07"` on all nine posts. `src/data/blog/index.ts` documents this and flags it as a TODO.

**Problem:** No freshness gradient, and the visible date, the sitemap `lastmod` and the `datePublished` in schema all agree on a single launch date, which reads as a content dump.

**Recommendation:** Do not backdate, that would be false. Instead, stagger genuine publication going forward and set `updatedAt` honestly whenever an article is materially revised. Google compares stated dates against observed changes, so the dates must stay true.

### 🟡 P10. The homepage carries too much

**Observed:** 14 sections; 465 KB of uncompressed HTML; 9 rendered `<h2>` headings in the main content plus footer headings.

**Problem:** Topic dilution and mobile weight. The homepage currently tries to be the sofa page, the bed page, the about page, the gallery, the testimonials page, the guides teaser, the catalogue page, the enquiry form, the contact page and the FAQ.

**Recommendation:** This is a lower-priority trim, not a rebuild. Consider moving the full FAQ accordion to `/contact` (where `FaqSection` already renders) and keeping only a 3-question excerpt on the homepage, and trimming the gallery excerpt. Keep the `FAQPage` schema wherever the questions are actually rendered, which the code already enforces.

### 🟡 P11. Source images are heavy

**Observed:** 15 MB total across 51 JPEGs; largest single file 614 KB (`terra-two-seater-sofa.jpg`); hero at 599 KB.

**Problem:** Repository and build weight, and pressure on any host image-optimisation quota. Visitor-facing delivery is fine because `next/image` re-encodes to AVIF/WebP at the requested size.

**Recommendation:** Re-encode sources to a sensible maximum dimension (2400 px on the long edge is plenty) at quality 80 to 85. Expect a large reduction with no visible difference.

### 🟡 P12. No catalogue PDF

**Observed:** `public/catalogue/` contains only `README.md`. `siteConfig.catalogue.available` is `false`, so every catalogue button opens WhatsApp instead.

**Problem:** Not an SEO defect, the fallback is handled correctly. But a real PDF is a linkable, shareable asset and a lead magnet, and its absence is a missed content opportunity rather than a bug.

**Recommendation:** Produce the PDF, drop it at the documented path, flip the flag. Consider also making the catalogue a real HTML page so it is indexable, since a PDF competes poorly and cannot be optimised well.

### 🟡 P13. No `sameAs` social signals

**Observed:** `social.instagram`, `social.facebook`, `social.youtube` are all `null`, so no `sameAs` array is emitted and no social links render in the footer.

**Problem:** `sameAs` is an entity-consolidation signal, and for furniture specifically, Instagram is where this audience actually browses. Its absence is both an SEO and a demand-generation gap.

**Recommendation:** Create the profiles, populate them with the business's own photography, then set the three fields. They flow into the footer and the schema automatically.

### 🟢 P14. `hasOfferCatalog` uses `OfferCatalog` for leaf items

**Observed:** `furnitureStoreJsonLd()` builds `hasOfferCatalog.itemListElement` as an array of nine nested `OfferCatalog` nodes, one per category name.

**Problem:** Minor and non-harmful. Semantically, the leaves of an `OfferCatalog` are usually `Offer` nodes wrapping an `itemOffered`, not further `OfferCatalog` nodes. Google is tolerant here and this will not cause an error, but it conveys less than it could.

**Recommendation:** Low priority. If the schema is ever revisited, consider `Service` or `Product` leaves. Do **not** add `Offer` with a `price`, since no prices are known.

### 🟢 P15. Two pages emit the same `FurnitureStore` node

**Observed:** `furnitureStoreJsonLd()` is rendered on both `/` and `/contact`, both times with `"@id": "{url}#business"`.

**Problem:** Harmless and arguably correct, since the `@id` is stable so Google treats them as one entity. Worth noting only so a future reader does not "fix" it into two different `@id` values, which would be worse.

**Recommendation:** Leave it. If anything, keep the `@id` stable and reference it by `@id` from other nodes rather than re-emitting the full node.

---

## 6. Technical SEO Audit

### 6.1 Indexability and crawling

| Item | Observed | Verdict |
| --- | --- | --- |
| `robots.txt` | Generated by `src/app/robots.ts`. Output: `User-Agent: *` / `Allow: /` / `Host: https://www.furniture-future.com` / `Sitemap: https://www.furniture-future.com/sitemap.xml` | 🟢 Correct, but carries the placeholder domain |
| `sitemap.xml` | Generated by `src/app/sitemap.ts`. **49 URLs** verified in the build output. 10 static + 24 products + 6 blog categories + 9 articles | 🟢 Complete |
| Sitemap `lastmod` | Static and product routes use the build timestamp; articles use `updatedAt ?? publishedAt` | 🟡 Article handling is correct; product and static entries claim to change on every deploy |
| `changefreq` / `priority` | Set per route type (1.0 home, 0.9 sofas/beds, 0.8 furniture/blog/contact, 0.6 products/articles, 0.2 legal) | 🟢 Harmless. Google largely ignores both, but they are coherent |
| Canonical tags | `alternates.canonical` on every route, resolved against `metadataBase`. Verified absolute and trailing-slash-free | 🟢 Correct |
| `noindex` usage | Applied only via `buildMetadata({ noIndex: true })` on the not-found branches of `generateMetadata` for `/furniture/[slug]`, `/blog/[slug]` and `/blog/category/[category]` | 🟢 Exactly right |
| Crawlability | 100% static HTML, every route prerendered. Product grids and category archives are server-rendered before any client filtering | 🟢 No render-blocking risk |
| URL structure | Lowercase, hyphenated, shallow. Deepest path is 3 segments (`/blog/category/<slug>`) | 🟢 Clean |
| Trailing slash | `trailingSlash: false` in `next.config.ts`. Root canonical emitted without a slash by `canonicalUrl()` | 🟢 One form only |
| Redirects | **None configured.** No `redirects` or `headers` block in `next.config.ts` | 🟠 www/non-www and http/https must be handled at the hosting layer |
| Broken links | None found. Internal links are `next/link` with literal paths; the blog registry throws at build time on an unknown `relatedPosts` slug. Build and lint both clean | 🟢 |
| Duplicate URLs | None. Anchors (`/furniture#dining`) are fragments, not separate URLs. No query-parameter URLs anywhere: `/sofas` and `/beds` filtering is in-memory with no URL rewriting | 🟢 |
| HTTP / HTTPS | Not determinable from the repository. `siteConfig.url` uses `https` | ⚪ Depends on hosting |
| www / non-www | `siteConfig.url` includes `www`. No redirect is configured in the project | 🟠 Must be enforced at the host |
| 404 handling | `src/app/not-found.tsx` returns a real 404 with five useful onward links and both CTAs | 🟢 |
| Pagination | None needed. `/blog` lists all 9 articles on one page; largest category holds 2 | 🟢 |
| Faceted-navigation bloat | Impossible by construction: chips do not write to the URL | 🟢 |

**Recommendation (redirects):** at the hosting layer, enforce a single canonical host and scheme with 301s: `http://*` and the non-canonical host form both to `https://<canonical host>/`. Also confirm the host does not serve both `example.com` and `www.example.com` with 200s.

### 6.2 Meta robots and crawl directives

**Observed** in `src/app/layout.tsx`:

```ts
robots: {
  index: true, follow: true,
  googleBot: { index: true, follow: true,
    "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
}
```

**Verdict:** 🟢 `max-image-preview: large` is exactly right for a furniture site, since large image previews in search results materially affect click-through for visual products.

### 6.3 Structured data inventory (verified in the built HTML)

| Page | Types emitted |
| --- | --- |
| `/` | `FurnitureStore`, `WebSite`, `FAQPage` (5 Q/A), plus `ContactPoint`, 9 `OfferCatalog`, 7 `Place` |
| `/sofas`, `/beds`, `/furniture`, `/collection` | `BreadcrumbList` + `ItemList` of `Product` nodes |
| `/furniture/[slug]` | `BreadcrumbList` (3 `ListItem`) + `Product` with `Brand` |
| `/contact` | `BreadcrumbList` + `FurnitureStore` |
| `/about` | `BreadcrumbList` |
| `/blog` | `BreadcrumbList` + `Blog` with `blogPost` array |
| `/blog/[slug]` | `BreadcrumbList` + `BlogPosting` + `FAQPage` (only when the article renders FAQs) |
| `/blog/category/[slug]` | `BreadcrumbList` + `CollectionPage` with nested `ItemList` |

**Absent by design and correctly so:** `aggregateRating`, `review`, `offers`, `priceRange`. **Absent because the data is missing:** `PostalAddress`, `geo`, `hasMap`, `openingHoursSpecification`, `sameAs`. See [section 17](#17-schema--structured-data-recommendations).

### 6.4 Open Graph and social metadata

**Observed:** every page emits `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale` (`en_IN`), `og:image`, `og:image:alt`, `og:type`, plus a `summary_large_image` Twitter card. Articles switch `og:type` to `article` and add `published_time`, `modified_time` (when set), `section` and `tag`.

**Observed, and a genuinely subtle correct decision:** `og:image:width` and `og:image:height` are declared **only** for the known 1200x630 share image. Product and article photography, which is a different shape, gets `og:image` and `og:image:alt` without dimensions, because declaring 1200x630 for a differently-shaped photograph makes platforms crop the card wrongly. Verified in `src/lib/seo.ts`.

**Verdict:** 🟠 Structurally sound, with one real defect. **This summary was originally recorded as "🟢 Nothing to fix", and that was wrong.** A later pass over the *generated* HTML, rather than over `src/lib/seo.ts` alone, found that `og:image:alt` carries one hard-coded brand string for every image on the site, so on the 33 pages that supply their own photograph the alt text describes the company instead of the picture. `twitter:image:alt` is emitted nowhere. Both, plus the share-image shape problem behind the width and height restraint above, are audited in full in [section 31](#31-open-graph-social-sharing--image-seo-audit).

### 6.5 Performance and Core Web Vitals

**Measurable from the project:**

| Metric | Observed | Note |
| --- | --- | --- |
| Route rendering | 55/55 prerendered static | No TTFB penalty beyond the CDN |
| Total static JS | ~686 KB raw across all chunks | `README.md` reports ~150 KB compressed, the framework baseline |
| Total CSS | 60 KB, one file | No CSS framework bloat; Tailwind v4 with a small token layer |
| Client components | 5 (`Header`, `FloatingContact`, `Reveal`, `EnquiryForm`, `FilterableProductGrid`) | Everything else, including the entire blog, is a server component |
| Homepage HTML | 465 KB uncompressed, 14 sections | 🟠 Heaviest page on the site |
| `/sofas` HTML | 249 KB uncompressed | Acceptable |
| Image delivery | `next/image` with `formats: ["image/avif", "image/webp"]` | 🟢 |
| Image quality served | All 3,284 image URLs in the build are `q=75`, though the code asks for six different values | 🟠 Next 16 coerces to `images.qualities`, which is unset ([IMG1](#-img1-every-quality-prop-in-the-project-is-silently-coerced-to-75)) |
| Image priority | Only the hero is `priority`; everything else `loading="lazy"` | 🟢 Correct LCP strategy, but `priority` is deprecated in Next 16 in favour of `preload` ([IMG2](#-img2-priority-is-deprecated-in-next-16)) |
| Layout shift | Every image is inside a fixed-ratio frame (`SmartImage` owns the `aspect-*` class) | 🟢 CLS 0 by construction |
| `sizes` accuracy | Every `SmartImage` caller passes a `sizes` string; the prop is required, not optional | 🟢 Enforced by the type signature |
| Blur placeholders | Shared inline `BLUR_DATA_URL` | 🟢 No per-image payload |
| Fonts | Instrument Serif and Manrope via `next/font/google`, `display: "swap"`, `latin` subset, self-hosted at build | 🟢 No third-party font request, no FOIT |
| Source image weight | 15 MB, largest 614 KB | 🟡 Repository and quota concern, not a visitor concern |
| Caching headers | None configured in `next.config.ts` | ⚪ Next's defaults plus host CDN apply; `/_next/static` is immutable-hashed |
| Third-party scripts | **Zero.** No tag manager, no chat widget, no pixel | 🟢 Rare and valuable |

**Cannot be verified:** real-world Core Web Vitals. The site is not deployed, so there is no CrUX field data, no Search Console Core Web Vitals report, and no PageSpeed Insights field section. `README.md` reports CLS 0 and a sub-half-second local LCP; that is a lab measurement on local hardware and should not be quoted as field performance. **Field data could not be verified.**

**Recommendation:** after launch, run PageSpeed Insights on `/`, `/sofas`, `/beds`, one product page and one article, and watch the Search Console Core Web Vitals report once field data accumulates. The likely first finding is homepage LCP on mobile, driven by the hero image; the hero is already `priority`, so the lever is the image's encoded size rather than the loading strategy.

### 6.6 JavaScript rendering considerations

**Observed:** no content anywhere depends on client-side JavaScript to be present in the HTML. The `/sofas` and `/beds` chips filter a list already server-rendered in full. `/blog/category/<slug>` is a real route. `Reveal` animations are progressive enhancement and everything renders visible without JS. The `<details>`-based FAQ accordions work with JS disabled.

**Verdict:** 🟢 No action needed. This is the single strongest technical property of the site.

### 6.7 Mobile technical checks

**Observed:** correct `viewport` export; `themeColor: "#fbf9f6"`; `colorScheme: "light"`; `formatDetection: { telephone: true, address: false, email: false }` (telephone detection deliberately on, which suits a call-driven business); fluid type via CSS custom properties; mobile-first spacing; a floating call/WhatsApp bar that appears only after the hero scrolls past, so it does not obscure content or duplicate an on-screen CTA; no interstitials, no popups, no auto-opening chat.

**Verdict:** 🟢 No intrusive-interstitial risk, which is a real ranking factor on mobile.

### 6.8 Security and hygiene

**Observed:** `poweredByHeader: false`. No remote image patterns, so no open image proxy. No inline third-party script. Turbopack root pinned so the build cannot pick up a lockfile outside the repository.

**Recommendation:** add standard security headers at the hosting layer (HSTS, `X-Content-Type-Options`, `Referrer-Policy`, a Content Security Policy). These are not ranking factors, but HTTPS correctness is, and HSTS prevents the http-to-https redirect hop.

---

## 7. On-Page SEO Audit

### 7.1 Page-by-page assessment

Legend: 🟢 good, 🟡 needs work, 🔴 missing or wrong for the stated goal.

#### `/` (homepage)

| Element | Observed | Assessment |
| --- | --- | --- |
| Title | `Furniture Future \| Modern Sofas, Beds & Custom Furniture` (absolute, bypasses the template) | 🟡 Well-formed and brand-led, but names no city and no market |
| Description | 219 characters from `siteConfig.description`. Covers sofas, beds, custom, dining, wardrobes, TV units, WhatsApp and call | 🟡 Slightly long; will truncate. No city |
| `<h1>` | "Sofas and beds designed to make your space feel like home." | 🟡 Good human copy, zero keyword or location signal |
| `<h2>`s | 9 in main content, all descriptive sentences ("Sofas built around how you actually sit.", "Two rooms. Two things we do properly.", "The rest of the house, made to match.") | 🟡 Excellent for readers, weak as topical signals |
| Intent | Brand plus category discovery | 🟢 Appropriate |
| Schema | `FurnitureStore`, `WebSite`, `FAQPage` | 🟢 |
| Internal links out | Every category, both range pages, collection, blog, about, contact, all products featured | 🟢 Strong hub |

**Problem:** the homepage is the strongest page on the site by internal link equity and it is currently targeting nothing more specific than the brand name. For a local business, the homepage is normally the page that ranks for `[primary service] + [primary city]`.

**Recommendation:** the title should carry the market. A pattern such as `Custom Sofas & Beds in Delhi NCR | <Brand>` names both the differentiator (custom, made to order) and the market, without stuffing four city names into 60 characters. Then let the four city pages own the individual cities. Keep the `<h1>` human; add the location to the sub-headline copy rather than to the `<h1>`.

#### `/sofas`

| Element | Observed | Assessment |
| --- | --- | --- |
| Title | `Sofa Designs - Modern, L-Shape & Custom Sofas \| Furniture Future` | 🟢 Strong keyword coverage. 🔴 No city |
| Description | 191 chars, covers three-seaters, L-shaped sectionals, modular, loveseats, fabric, leather, custom size, plus a call/WhatsApp CTA | 🟢 Good. 🔴 No city |
| `<h1>` | "Sofa designs, made to your room." | 🟢 Carries "sofa designs" and the made-to-measure angle |
| `<h2>`s | 9 including "Sofas in every shape a living room needs.", "Sofas in real rooms.", "Read this before you order a sofa." | 🟢 |
| Body depth | All 8 sofas server-rendered with descriptions and highlights, plus a gallery, a guides teaser, a why-us band and a lead CTA | 🟢 |
| Schema | `BreadcrumbList` + `ItemList` of 8 `Product` nodes | 🟢 |
| Chips | Client-side over pre-rendered HTML, no URL change | 🟢 No crawl waste |
| Internal links in | Header, footer, homepage showcase, blog `relatedLinks`, in-prose article links, `/blog` CTA | 🟢 |

**Recommendation:** this page is close to ideal for the non-local query "sofa designs". Do **not** rename it to "Sofa Designs in Noida"; that would fight with the city pages and misrepresent the page. Instead let it rank nationally/NCR-wide and link it prominently from each city page.

#### `/beds`

Mirror image of `/sofas` and equally well built. Title `Bed Designs - Upholstered, Storage & Platform Beds`. `<h1>` "Beds designed for the room they go in." 8 beds server-rendered, `ItemList` schema, bedroom-specific guides teaser. Same single gap: 🔴 no city.

#### `/furniture`

| Element | Observed | Assessment |
| --- | --- | --- |
| Title | `All Furniture - Sofas, Beds, Dining, Storage & Custom` | 🟡 A list, not a target. Competing for nothing specific |
| `<h1>` | Present, one per page | 🟢 |
| Structure | Full category grid plus 5 anchor-target groups (`#dining`, `#living-room`, `#tv-units`, `#wardrobes`, `#chairs`, `#custom`) with their own `<h2>`s and product cards | 🟡 Well organised, but five commercial topics share one URL |
| Schema | `BreadcrumbList` + `ItemList` | 🟢 |

**Problem:** keyword cannibalisation in reverse. Rather than two pages fighting for one keyword, one page is trying to hold five keywords with a single title tag and a single description.

**Recommendation:** keep `/furniture` as the category hub, and promote the categories with genuine demand to their own routes. `/custom-furniture` is the most valuable of these because made-to-order is the business's core differentiator and it pairs naturally with every city (`custom furniture in Gurgaon` and so on). This is contingent on having enough real products and copy per category (see P8).

#### `/furniture/[slug]` (24 pages)

| Element | Observed | Assessment |
| --- | --- | --- |
| Title | `{product.name} - {product.category}`, e.g. `Verde Velvet Sofa - Sofas` | 🔴 Built on invented names with no search demand |
| Description | `{product.description}` + "Made to order in your size and finish." + phone + WhatsApp | 🟡 Good pattern, weak underlying copy |
| `<h1>` | `{product.name}` | 🔴 Same problem |
| Body | Description, highlights, made-to-order options, related products, lead CTA | 🟡 Thin-ish for a product page, and the same "made to order" block repeats on all 24 |
| Schema | `Product` with `Brand`, no `offers` | 🟢 Correct given no prices |
| Image | Slug-matched descriptive filename, descriptive alt | 🟢 |
| `noindex` on miss | Yes | 🟢 |

**Problem:** two compounding issues. (a) The names carry no demand. (b) The `madeToOrder` block is identical across all 24 pages, so the unique-content proportion per page is lower than it looks.

**Recommendation:** when the real range replaces the sample data: put the search term in the product name where it is honest ("Meridian L-Shape Sectional Sofa" keeps the brand name and adds the term); add per-product specifics (dimensions offered, upholstery options actually available for that piece, frame material, foam grade); and vary the standard block or move most of it to a linked `/custom-furniture` page so it is not duplicated 24 times.

#### `/collection`

Title `Collection - Furniture Gallery & Room Inspiration`. Lifestyle gallery plus featured sofas and beds, `ItemList` schema. 🟡 Low commercial intent and it competes with nothing. Fine as a supporting page. Its main value is internal linking and time on site. No change needed beyond eventually using the business's own photography.

#### `/about`

Title `About Us - How We Make Furniture`. 🟡 Adequate. **This is the page where local trust content belongs** and it currently has none: no cities named, no years, no workshop location, no team. It renders the sample testimonials.

**Recommendation:** once real facts exist, `/about` should carry the E-E-A-T layer: where the workshop is, how long the business has operated, who makes the furniture, which cities are delivered to, and real photographs of real work. This is also the natural home for the four city links.

#### `/contact`

Title `Contact - Call or WhatsApp for Furniture Designs`. Emits `FurnitureStore` and `BreadcrumbList`. Renders the enquiry form, trust signals, catalogue CTA and FAQ. Shows "We serve Delhi NCR."

🔴 **This is the most under-optimised page relative to its importance.** For local search, `/contact` is a primary landing page, and it currently has no address, no hours, no map, no city list, and no city in its title or description.

**Recommendation:** once NAP is supplied, this page should carry the full address block, hours, an embedded or linked map, a linked list of the four cities served (each linking to its city page), and a title that names the market.

#### `/blog`, `/blog/[slug]`, `/blog/category/[slug]`

🟢 The strongest on-page work on the site. Unique hand-written meta descriptions per category. `seoTitle` separate from the visible `<h1>` on every article. Breadcrumbs four levels deep on articles (Home / Guides / Category / Article) with matching `BreadcrumbList` schema. `FAQPage` emitted only from rendered FAQs. Structurally impossible to break heading order. Nothing to fix here except publishing more.

#### `/privacy`, `/terms`

Titles `Privacy Policy` and `Terms of Use`. 🟢 Correct: short titles, low sitemap priority, indexable, and they add trust signals. **Note** the privacy policy explicitly states no analytics and no cookies, which must be updated if analytics is added (see P6).

### 7.2 Keyword targeting matrix

| Page | Currently targets (inferred) | Should also target | Conflict risk |
| --- | --- | --- | --- |
| `/` | brand, "modern sofas beds custom furniture" | custom sofas and beds + Delhi NCR | Low |
| `/sofas` | sofa designs, L-shape sofa, modular sofa, custom sofa | keep as-is, NCR-wide | Low |
| `/beds` | bed designs, storage bed, upholstered bed, platform bed | keep as-is, NCR-wide | Low |
| `/furniture` | nothing specific | category hub only | 🟡 Currently absorbs 5 topics |
| `/furniture/[slug]` | invented product names | real product type + variant | 🟡 24 near-identical made-to-order blocks |
| `/collection` | gallery, inspiration | keep | Low |
| `/about` | brand + process | brand + local trust | Low |
| `/contact` | contact, WhatsApp | contact + cities + NAP | Low |
| `/blog/*` | informational, well differentiated | more of the same | Low, tags prevent overlap |
| **Missing** | (none) | `[service] in [city]` for 4 cities | Must be built to avoid stranding this demand |

### 7.3 Cannibalisation check

**Observed:** No two pages currently target the same primary keyword. `/sofas` (range) and `/collection` (gallery) both show sofas but with different intent and different titles. The nine articles are separated by category and tag; the tag-matching in `getPostsByTags()` means a guide appears on the range pages it is relevant to without duplicating a URL. Category archives list, they do not duplicate.

**Verdict:** 🟢 No cannibalisation today. **The main future cannibalisation risk is the city pages**: if `/sofas-in-noida`, `/sofas-in-delhi`, `/sofas-in-ghaziabad` and `/sofas-in-gurgaon` are written as the same page with the city swapped, they will cannibalise each other, dilute `/sofas`, and expose the site to a doorway-page judgement. [Section 15](#15-recommended-page--url-structure) specifies how to avoid this.

### 7.4 Image SEO

**Observed:** 51 images in `public/images`, organised into `hero/`, `categories/`, `products/{sofas,beds,more}/`, `gallery/`, `about/`, plus `og-cover.jpg`. Filenames are descriptive and hyphenated and match product slugs (`verde-velvet-sofa.jpg`, `meridian-l-shape-sectional-sofa.jpg`, `wall-mounted-wooden-tv-unit.jpg`). Every `ImageAsset` carries descriptive alt text; `src/lib/types.ts` documents that it must never be empty for content imagery.

**Verdict:** 🟢 Filename and alt practice is better than most commercial sites. 🟡 The images themselves appear to be stock photography, which limits Google Images value and offers no local proof. 🟡 Source files are heavy (P11).

**Recommendation:** own photography, shot in real NCR homes with customer permission, is the highest-value image work available. It feeds Google Images, the Google Business Profile, the city pages, Instagram, and the E-E-A-T signal simultaneously. When replacing files, keep the existing naming discipline.

**See also [section 31.9](#319-image-seo-audit-alongside-og-images-step-119)**, which audits the delivered markup rather than the source: `srcset`, `sizes`, lazy loading, the absence of any CSS-background or raw `<img>` photography, the quality coercion in [IMG1](#-img1-every-quality-prop-in-the-project-is-silently-coerced-to-75), the `priority` deprecation in [IMG2](#-img2-priority-is-deprecated-in-next-16), and why the missing `width`/`height` attributes are correct here rather than a defect.

### 7.5 Anchor text audit

**Observed:** CTA labels are deliberately varied per context ("Explore sofa designs", "View bed designs", "Ask about sofas", "All sofa guides", "All bedroom guides", "See the full collection", "Call for enquiry", "Discuss your requirement"), which `AGENTS.md` rule 9 mandates. In-prose article links are `RichText` nodes with real descriptive text ("sofa designs" linking to `/sofas`). Footer and header anchors are plain category names.

**Verdict:** 🟢 Natural, varied, descriptive, no "click here", no exact-match stuffing. 🟡 Missing: no anchor text anywhere contains a city, because there is nothing to link to. That changes once city pages exist, and the anchors to them should be varied too ("furniture delivery in Noida", "our Noida service area", "sofas for Noida flats"), never four identical exact-match anchors.

---

## 8. Content SEO Audit

### 8.1 Blog inventory (all nine articles verified against source)

| Slug | SEO title | Category | Words | Local? | FAQs | Featured |
| --- | --- | --- | --- | --- | --- | --- |
| `how-to-choose-a-sofa` | How to Choose a Sofa: Complete Buying Guide | buying-guides | 2,772 | no | yes | yes |
| `sofa-size-guide-for-your-living-room` | Sofa Size Guide: What Fits Your Living Room | sofas-living-room | 1,971 | no | yes | yes |
| `sofa-fabric-vs-leather-delhi-ncr-climate` | Fabric vs Leather Sofa for Delhi NCR Homes | delhi-ncr | 2,062 | Delhi NCR | yes | yes |
| `how-to-choose-a-bed` | How to Choose a Bed: Sizes, Storage & Frames | beds-bedroom | 2,287 | no | yes | yes |
| `furniture-for-small-apartments-noida` | Furniture for Small Apartments in Noida | small-spaces | 2,363 | **Noida** | yes | no |
| `furnishing-a-gurgaon-apartment` | How to Furnish a Gurgaon Apartment: Planning Guide | delhi-ncr | 2,218 | **Gurgaon** | yes | no |
| `furnishing-a-builder-floor-in-ghaziabad` | Furnishing a Builder Floor in Ghaziabad | small-spaces | 2,134 | **Ghaziabad** | yes | no |
| `furniture-care-summer-and-monsoon` | Furniture Care Guide: Summer, Monsoon & Dust | furniture-care | 1,931 | no | yes | no |
| `made-to-measure-vs-ready-made-furniture` | Made to Measure vs Ready Made Furniture | buying-guides | 1,886 | no | yes | no |

*Word counts are of the source `.ts` file including code scaffolding, so rendered prose is somewhat lower. The relative depth ranking is accurate and every article is unambiguously long-form.*

### 8.2 Content quality assessment

**Observed** by reading the articles: the local pieces are genuinely differentiated, not templated. The Noida article is built around compact high-rise 2BHK layouts (one combined living and dining space, a master that takes a queen comfortably and a king awkwardly, one usable wall because another is full-height glass, and the service lift as the non-negotiable constraint). The Ghaziabad article is about the inherited layout of a builder floor. The Gurgaon article is about planning sequence in a high-rise. The Delhi NCR article is about upholstery choice against the local climate. These share no structure with each other. `AGENTS.md` rule 11 and the file-level comments make this an enforced convention rather than an accident.

**Observed:** the writing gives specific, checkable guidance (seat depth ranges, clearance figures, "10 to 15 cm of clear wall at each end of a unit", "measure the service lift") without inventing prices, delivery times, statistics or review counts. The byline is the business (`author` is an `Organization` in the schema), with no invented author persona. Every article ends with a disclaimer that measurements vary by design.

**Verdict:** 🟢 This is the site's second-strongest asset after its technical build, and it is well above the quality of the informational content ranking for these queries (see [section 21](#21-competitor--serp-insights)).

### 8.3 Content gaps

| Gap | Why it matters | Priority |
| --- | --- | --- |
| No city landing pages | Nothing can rank for `[service] in [city]` | 🔴 |
| No Delhi-specific article | Three of four target cities have a dedicated piece; Delhi is covered only by the NCR-wide upholstery article | 🟠 |
| No "how to choose a sofa maker / what to check before ordering custom" | High-intent commercial-investigation query, and the business's differentiator | 🟠 |
| No delivery and access guide | Every NCR buyer's real fear. Service lifts, staircase turns, society permissions, tower types | 🟠 |
| No price-expectation content | People search "sofa set price" constantly. Cannot state prices (correctly), but **can** explain what drives cost: size, frame, foam grade, upholstery, mechanism | 🟠 |
| Real product content | 24 of 49 URLs are sample data | 🔴 |
| No customer stories / project pages | Real project write-ups with real photographs are the strongest possible local content and feed reviews and Instagram simultaneously | 🟠 |
| No sub-locality content | Sector-level Noida, Indirapuram/Gaur City Ghaziabad, Sohna Road/Golf Course Ext Gurugram, colony-level Delhi | 🟡 |
| No wardrobe / TV unit / dining depth | These categories have products but no supporting content or page | 🟡 |
| Single publication date | No freshness gradient | 🟡 |

### 8.4 Content that must not be created

Stated explicitly so a future implementer does not undo the site's best property:

- Do not create a fifth, sixth or twentieth city page by swapping the city name in an existing one. Four differentiated pages beat forty templated ones, and templated ones are a doorway-page risk.
- Do not invent prices, delivery windows, warranty terms, review counts, ratings, awards or years in business to fill out a page.
- Do not create category pages for categories with no products behind them.
- Do not create thin sub-locality pages ("sofas in Sector 62", "sofas in Sector 63", ...). Sub-locality targeting belongs inside a city page's copy and inside genuine project write-ups, not in one URL per sector.
- Do not add an AI-written article that repeats what the existing nine already say. The existing nine are the quality bar, and they are high.

---

## 9. Local SEO Audit

### 9.1 What local signals exist today

| Signal | Observed | State |
| --- | --- | --- |
| Business name | "Furniture Future" in `siteConfig.name`, `TODO(owner)` | 🟡 Unresolved (repo is named `Aaram-Furniture`) |
| Address | `address: null` | 🔴 Absent |
| Phone | `+91 93157 10072` / `+919315710072`, wired into every CTA and into `telephone` in schema | 🟢 Present and consistent |
| Opening hours | `openingHours: null` | 🔴 Absent |
| Email | `email: null` | 🔴 Absent |
| Service area (visible) | "Serving Delhi NCR" (footer), "We serve Delhi NCR." (contact section) | 🟡 Present but minimal, one umbrella phrase |
| Service area (schema) | `areaServed` with 7 `Place` nodes: Delhi, New Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad | 🟢 Best local signal on the site |
| `LocalBusiness` type | `FurnitureStore` with `@id`, `telephone`, `ContactPoint` (`availableLanguage: ["en","hi"]`), `hasOfferCatalog` | 🟢 Well formed for what it has |
| `geo` / `hasMap` | Absent | 🔴 |
| City landing pages | None | 🔴 |
| City words on commercial pages | Zero in every title, description, `<h1>` and `<h2>` | 🔴 |
| Local content | 4 articles genuinely about NCR places, with `spatialCoverage` | 🟢 |
| Google Business Profile | No reference anywhere | 🔴 |
| Reviews | None. `testimonialsAreVerified: false`, 6 labelled samples | 🔴 |
| Citations | None | 🔴 |
| Social profiles / `sameAs` | All `null` | 🔴 |
| Language and locale | `lang="en-IN"`, `og:locale: en_IN`, `inLanguage: en-IN`, Hindi declared in `availableLanguage` | 🟢 |

### 9.2 Can this site target these four cities?

**Yes, with an important qualification about which model applies.**

Google treats a local business one of two ways, and the right SEO strategy differs:

**Model A, storefront.** A real showroom customers can visit. Ranks strongly for proximity-based queries near the showroom, appears on Maps with a pin, and gets the strongest local pack presence in its own city. Weaker in the other three cities, where proximity works against it. This model needs: a real `PostalAddress`, real `openingHours`, `geo` coordinates, a verified GBP at that address, and photographs of the actual premises.

**Model B, service-area business.** Delivery, consultation and installation across NCR, with no public showroom or a workshop that is not customer-facing. GBP supports this: the address is hidden and the service areas are declared. Ranks less strongly in the local pack overall but can be declared for all four cities. This model needs: `address` to stay `null` (which it already is, correctly), `areaServed` (already present), and city landing pages doing more of the ranking work organically rather than through the pack.

**Observed:** the site is currently built consistent with Model B, and the data model handles both. **Which model is true has not been supplied and cannot be determined from the repository.** Everything in sections 10 to 13 is written to work under either, with the differences called out.

### 9.3 NAP consistency

**Observed:** there is currently only one NAP element, the phone number, and it is perfectly consistent because it is defined once in `src/config/site.ts` and referenced everywhere through `src/lib/contact.ts`. `AGENTS.md` rule 4 forbids hand-writing `tel:` or `wa.me` URLs, which is exactly the discipline that prevents NAP drift.

**Verdict:** 🟢 The mechanism for NAP consistency is already in place and enforced. 🔴 There is no address or hours to run through it.

**Recommendation:** when the address and hours are supplied, they enter `src/config/site.ts` once and propagate to the footer, the contact section, the "Get directions" button and the `LocalBusiness` schema automatically. Then use **that exact string, character for character** on the Google Business Profile and on every citation. Pick one format (including whether it is "Gurugram" or "Gurgaon", and whether the phone is written `+91 93157 10072` or `+91-93157-10072`) and never vary it.

### 9.4 Service-area and internal linking between location and service

**Observed:** there is no link path from a service page to a location or from a location to a service, because no location page exists. `areaServed` in schema is the only machine-readable connection, and it is invisible to visitors.

**Recommendation:** see [sections 15 and 16](#15-recommended-page--url-structure). The target shape is: every city page links to `/sofas`, `/beds` and `/custom-furniture`; `/contact` and `/about` link to all four city pages; each city page links to the article written about that city; each of those articles links back to its city page; and the footer gains a small "Areas we serve" column with the four cities. That is a complete, small, non-spammy mesh.

### 9.5 Reviews strategy readiness

**Observed:** the code is ready and the content is not. `testimonialsAreVerified` gates the visible sample note and all rating/review schema in one flag. `Testimonial` supports `quote`, `name`, optional `location`, optional `product` and optional `rating`.

**Note the `location` field.** It is already there, and it is the mechanism that turns reviews into local relevance: "Priya S., Sector 137, L-shape sectional" is a local signal that no amount of metadata writing can substitute for. Collect the locality with every review.

---

## Sections 10 to 13: how the four city strategies are built

Each city gets one landing page, and each page must be **differentiated by a real local constraint**, not by a swapped city name. The differentiators below are drawn from how homes in each city are actually built, which is the same principle the existing four local articles already use successfully.

Before writing any of these pages, three things must be confirmed by the business owner, because every one of them is a claim:

1. **Do you actually deliver and install in this city?** If not, do not build the page.
2. **What is genuinely different about serving this city?** Access, delivery windows, society permissions, typical project type.
3. **Do you have at least one real completed project there, with photographs and ideally a customer quote?** A city page with one real local project on it outranks a city page with none, and it is the difference between a useful page and a doorway page.

**A city page must not be published until item 3 is satisfied or the page has enough other genuine local substance to stand alone.** A city page whose only local content is the city name repeated is precisely what Google's doorway-page guidance targets.

### The shared template (structure, not copy)

Every city page shares this skeleton, and every section must be filled with content specific to that city:

| Section | What must be city-specific |
| --- | --- |
| `<h1>` | Names the city and the service naturally |
| Intro paragraph | The single local constraint this page is about |
| Housing stock section | What homes there are actually like, with real measurements |
| What we make for these homes | Which of the range suits that stock, linking to `/sofas`, `/beds`, `/custom-furniture` |
| Access and delivery | Lift dimensions, staircase turns, society rules, gate procedures, for that city |
| Real project | Photographs and details of at least one job actually done there |
| Reviews from that city | Filtered by `Testimonial.location`, once real reviews exist |
| Local FAQs | 4 to 6 questions genuinely specific to that city, feeding `FAQPage` from rendered content only |
| Related guide | Link to the article written about that city |
| CTA | WhatsApp opener mentioning the city, via `whatsappHref()` |

**Never** emit `FAQPage` schema from questions the page does not render, and never reuse the same FAQ set across all four pages.

---

## 10. Noida SEO Strategy

### Why Noida is the strongest starting point

**Observed:** Noida already has the deepest local content on the site: `furniture-for-small-apartments-noida` (the longest of the three city articles at ~2,363 source words), built around compact high-rise 2BHK layouts, with FAQs, takeaways and `spatialCoverage: Noida`. `Noida` and `Greater Noida` are both in `areaServed`. That article is an existing asset that a city page can immediately link to and be linked from.

**Local differentiator:** planned sector-grid high-rise apartments. The defining constraints are the **service lift** (the article already treats this as the non-negotiable constraint), fixed builder layouts repeated across hundreds of identical flats in a tower, one combined living-and-dining space, full-height glazing on one wall leaving fewer usable walls, and society delivery rules and timing windows.

**Strategic advantage specific to Noida:** because towers repeat the same floor plan hundreds of times, a piece designed for one flat in a tower fits every equivalent flat in that tower. That is a genuinely compelling, honest, local proposition, and no competitor's templated city page says it.

### Recommended page

**URL:** `/furniture-in-noida` (or `/service-areas/noida` if a service-area hub is preferred, see [section 15](#15-recommended-page--url-structure))

**Title (potential, ~57 chars):** `Custom Sofas & Beds in Noida | Made to Fit Your Flat`
**H1:** `Furniture made to fit a Noida flat, lift included`
**Meta description direction:** made-to-measure sofas and beds for Noida high-rise apartments; sized to the room and to the service lift; sector coverage; call or WhatsApp.

**Required city-specific sections:**
- Which sector groups are served, stated honestly (Noida sectors, Noida Extension / Greater Noida West, Greater Noida) with only the areas actually delivered to.
- The service-lift problem and how it is solved: measured before build, or built in sections and assembled in the flat, if that is genuinely what the business does.
- Standard builder layouts in Noida towers and what sofa depth and bed size actually work in them, with real figures.
- Delivery and society access: gate passes, timing windows, lift booking, whichever apply.
- At least one real Noida project with photographs.
- Local FAQs, for example: does it fit the service lift in my tower; can you deliver to Noida Extension; do you handle society gate formalities; how long from measurement to delivery in Noida.

**Internal links out:** `/sofas`, `/beds`, `/custom-furniture`, `/blog/furniture-for-small-apartments-noida`, `/contact`.
**Internal links in:** footer "Areas we serve", `/contact`, `/about`, and a link at the end of the Noida article back to this page.

### Noida keyword targets

**All labelled potential targets. Volume and difficulty could not be verified.**

*Primary (commercial, local):* sofa in Noida · sofa set in Noida · custom sofa Noida · sofa manufacturer Noida · bed in Noida · storage bed Noida · custom furniture Noida · furniture shop in Noida · made to order furniture Noida · L shape sofa Noida

*Secondary:* sofa makers in Noida · sofa repair and reupholstery Noida (only if genuinely offered) · wardrobe Noida · TV unit Noida · dining table Noida · sofa set for 2BHK Noida · king size bed Noida · sofa delivery Noida

*Sub-locality (put in body copy and project pages, not one URL each):* Noida Extension · Greater Noida West · Sector 137 · Sector 150 · Sector 168 · Sector 62 · Sector 78 · Noida sector-grid names actually served

*Long-tail and question-based:* will a 3 seater sofa fit in a Noida service lift · best sofa size for a Noida 2BHK · custom bed with storage for a small Noida bedroom · who makes sofas to order in Noida · how long does custom furniture take in Noida

### Realistic assessment

Winnable within 3 to 6 months with real content plus a verified GBP: the long-tail, question-based and sub-locality queries, and "near me" queries once GBP exists. Difficult and not a 90-day goal: "furniture shop in Noida" and "sofa set in Noida" as head terms, which are contested by aggregator directories, national retailers and established local manufacturers with review histories. **Competitor authority metrics could not be verified.**

---

## 11. Delhi SEO Strategy

### Why Delhi is the hardest of the four, and needs the most careful handling

**Observed:** Delhi has **no dedicated article**. The one Delhi-adjacent piece, `sofa-fabric-vs-leather-delhi-ncr-climate`, is written for the whole NCR, not for Delhi as a city. `Delhi` and `New Delhi` are both in `areaServed`. So Delhi has the largest market of the four and the thinnest content behind it.

**Local differentiator:** Delhi is not one housing type, it is several, and that is the honest angle. Older DDA and cooperative-society flats, independent houses in established colonies, barsatis and top-floor conversions, and newer builder floors. The defining constraints are **narrow staircases with tight turns and no service lift**, non-standard room dimensions in older builds (nothing is a builder-standard rectangle), and genuinely difficult vehicle access and parking in dense colonies.

**A second, structurally important Delhi consideration:** Delhi is also where the established furniture trade is concentrated, notably Kirti Nagar. That means Delhi SERPs contain the strongest incumbents of the four cities. Competing head-on for "furniture shop in Delhi" is not a sensible near-term objective.

**Recommended Delhi positioning:** compete on the thing volume retailers cannot do, which is furniture built to non-standard dimensions and delivered up a staircase that a standard sofa cannot physically pass. That is precisely the made-to-order proposition the business already leads with, and it is a genuine differentiator in Delhi specifically.

### Recommended page

**URL:** `/furniture-in-delhi`

**Title (potential, ~58 chars):** `Custom Sofas & Beds in Delhi | Built for Older Homes`
**H1:** `Furniture built for Delhi homes, staircase and all`
**Meta description direction:** made-to-measure sofas and beds for Delhi flats, colony houses and builder floors; built to non-standard room sizes and to what your staircase can take; call or WhatsApp.

**Required city-specific sections:**
- The four Delhi housing types above and what each one needs.
- The staircase problem, in detail and with measurements: what a standard three-seater cannot pass, what the turn radius means, and whether the business builds in sections and assembles in the room. **Only claim this if it is genuinely how the business works.**
- Non-standard room dimensions: why a made-to-measure piece is the correct answer in an older Delhi home rather than an upsell.
- Delivery access, parking and permitted hours in dense colonies.
- Zones served, honestly (South Delhi, West Delhi, East Delhi, North Delhi, whichever are genuinely covered), linking to project write-ups.
- At least one real Delhi project with photographs.
- Local FAQs, for example: my staircase turns, can a sofa get up it; can you build to a room that is not a standard size; do you deliver to [colony type]; can you match existing furniture in an older home.

**Also required:** a dedicated Delhi article to support this page, since Delhi is the only target city without one. Suggested subject, and it must be a real local constraint rather than a city-swap: **getting furniture into an older Delhi home**, covering staircase measurement, turn radius, doorway width in older builds, sectional construction, and what to measure before ordering. This is genuinely useful, genuinely local, and shares no structure with the Noida, Gurgaon or Ghaziabad pieces.

### Delhi keyword targets

**All labelled potential targets. Volume and difficulty could not be verified.**

*Primary:* sofa in Delhi · sofa set in Delhi · custom sofa Delhi · sofa manufacturer Delhi · custom furniture Delhi · bed in Delhi · furniture shop in Delhi · made to order furniture Delhi · sofa maker Delhi

*Secondary:* L shape sofa Delhi · storage bed Delhi · wardrobe Delhi · TV unit Delhi · sofa in South Delhi · sofa in West Delhi · custom furniture South Delhi · furniture for small Delhi flat

*Sub-locality (body copy and projects, not one URL each):* the specific colonies and zones actually served.

*Long-tail and question-based:* sofa for a narrow Delhi staircase · sectional sofa that fits through a small door · custom furniture for old Delhi flat · made to measure sofa for non standard room · will a sofa fit up my staircase

### Realistic assessment

Delhi is the largest opportunity and the slowest. Expect city-page and long-tail traction before any head-term movement. The "narrow access and non-standard sizes" angle is the realistic wedge, and it also converts well because it addresses a genuine fear. Head terms in Delhi should be treated as a 12-month-plus objective, contingent on authority building. **Competitor authority metrics could not be verified.**

---

## 12. Ghaziabad SEO Strategy

### Why Ghaziabad is likely the best value-for-effort of the four

**Observed:** `furnishing-a-builder-floor-in-ghaziabad` already exists (~2,134 source words), built specifically around **working with the layout you inherit** in a builder floor, with `spatialCoverage: Ghaziabad`. `Ghaziabad` is in `areaServed`.

**Local differentiator:** builder floors and the newer high-rise pockets, and above all the **inherited layout**. A builder floor comes with fixed positions for everything and no ability to move a wall, so furniture has to be designed around decisions someone else made. That is a different problem from Noida's identical-tower repetition and different again from Delhi's older housing stock.

**Why the value is good:** Ghaziabad SERPs are generally less contested than Delhi's or Gurugram's. **This is a qualitative observation from the SERP composition seen in [section 21](#21-competitor--serp-insights), not a measured difficulty figure. Keyword difficulty could not be verified.** What was observable is that Ghaziabad results are more heavily weighted towards aggregator directories (IndiaMART, JustDial) and templated city pages than towards strong dedicated local sites, and a genuinely good page competes well against templated pages.

### Recommended page

**URL:** `/furniture-in-ghaziabad`

**Title (potential, ~59 chars):** `Custom Sofas & Beds in Ghaziabad | Built to Your Floor`
**H1:** `Furniture for a Ghaziabad builder floor, measured on site`
**Meta description direction:** made-to-measure sofas, beds and storage for Ghaziabad builder floors and apartments; designed around the layout you already have; Indirapuram, Vaishali, Raj Nagar Extension and Gaur City; call or WhatsApp.

**Required city-specific sections:**
- The inherited-layout problem: fixed door and window positions, awkward alcoves, a living room shape that dictates seating.
- Builder floor versus high-rise pocket, and how the furniture answer differs between them.
- Which localities are genuinely served (Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Extension, Crossings Republik, Gaur City / Noida Extension border areas), listing only real coverage.
- Stair-versus-lift access for builder floors specifically, which usually means no service lift at all.
- Storage as the dominant local requirement, linking to storage beds and wardrobes.
- At least one real Ghaziabad project with photographs.
- Local FAQs, for example: can you deliver to a third-floor builder floor with no lift; can you build around an existing alcove; do you cover Raj Nagar Extension; can you match the woodwork already in the flat.

**Internal links:** to `/beds` (storage beds are the natural lead here), `/custom-furniture`, `/blog/furnishing-a-builder-floor-in-ghaziabad`, and back from that article to this page.

### Ghaziabad keyword targets

**All labelled potential targets. Volume and difficulty could not be verified.**

*Primary:* sofa in Ghaziabad · sofa set in Ghaziabad · custom sofa Ghaziabad · sofa manufacturer Ghaziabad · furniture shop in Ghaziabad · custom furniture Ghaziabad · bed in Ghaziabad · storage bed Ghaziabad · made to order furniture Ghaziabad

*Secondary:* sofa in Indirapuram · furniture in Vaishali · sofa Raj Nagar Extension · furniture Gaur City · wardrobe Ghaziabad · L shape sofa Ghaziabad · sofa set for builder floor

*Long-tail and question-based:* furniture for a builder floor with no lift · storage bed for a small Ghaziabad bedroom · custom wardrobe for a builder floor alcove · who makes sofas to order in Indirapuram · sofa delivery to a third floor without a lift

### Realistic assessment

The most winnable of the four in the 3-to-6-month window, particularly on locality-level and question-based queries (Indirapuram, Raj Nagar Extension, Gaur City). A verified GBP with the Ghaziabad localities in the service area, plus this page, plus the existing article, plus a handful of real reviews from Ghaziabad customers, is a credible package.

---

## 13. Gurugram / Gurgaon SEO Strategy

### The naming problem, first

**Observed:** the codebase is inconsistent by context and, on balance, correctly so. `serviceAreas` uses **"Gurugram"** (the official name, correct for structured data). The article uses **"Gurgaon"** in its slug (`furnishing-a-gurgaon-apartment`), title, tags and `location` field, which matches what people actually search and say.

**Recommendation:** keep both deliberately, and be consistent about which goes where.
- **Structured data, Google Business Profile, citations, legal and postal use: "Gurugram".** These must match exactly, everywhere.
- **Page copy, titles and URLs: "Gurgaon" as the lead, with "Gurugram" mentioned naturally once in the body.** Both forms then appear on the page without stuffing, and neither is misspelled.
- **Do not build two pages, one per spelling.** That is duplicate content and cannibalisation. One page, both words used naturally.

### Local differentiator

**Observed:** `furnishing-a-gurgaon-apartment` exists (~2,218 source words), in the `delhi-ncr` category, about **what to plan before anything is ordered**, with `spatialCoverage: Gurgaon`.

**Local differentiator:** large high-rise condominium apartments in managed gated developments. The defining constraints are different in kind from the other three cities: rooms are often **larger**, not smaller, so the failure mode is under-scaled furniture floating in a big room rather than over-scaled furniture cramping a small one. Ceilings are higher, which changes headboard and wall-unit proportions. There is usually a proper service lift, so access is less of a constraint. And the real friction is **society and management procedure**: gate passes, approved delivery hours, lift protection requirements, and in-flat work permissions.

**Commercial note:** Gurugram is the most likely of the four to support higher-value, whole-room and multi-room projects. That should shape the page: it should read as a project conversation, not a product listing.

### Recommended page

**URL:** `/furniture-in-gurgaon`

**Title (potential, ~56 chars):** `Custom Sofas & Beds in Gurgaon | Made to Measure`
**H1:** `Furniture scaled to a Gurgaon apartment`
**Meta description direction:** made-to-measure sofas, beds and wall units for Gurgaon high-rise apartments; scaled to large rooms and high ceilings; society delivery handled; call or WhatsApp.

**Required city-specific sections:**
- Scale: why standard sizes look under-scaled in a large Gurugram living room, with real figures on sofa length, sectional depth and headboard height against ceiling height.
- Whole-room and multi-room projects: how a living room, bedroom and media wall are planned together.
- Society and management procedure: gate passes, delivery windows, lift protection, in-flat assembly permissions.
- Sectors and corridors genuinely served (Golf Course Road, Golf Course Extension, Sohna Road, New Gurgaon sectors, Dwarka Expressway, DLF phases), listing only real coverage.
- At least one real Gurugram project with photographs. This city most rewards a proper project write-up.
- Local FAQs, for example: what sofa length suits a large Gurgaon living room; how tall should a headboard be with a 10 foot ceiling; do you handle society gate and lift formalities; can you plan a whole living room rather than one piece.

**Internal links:** to `/sofas` (sectionals and modular lead here), `/custom-furniture`, `/blog/furnishing-a-gurgaon-apartment`, and back from that article to this page. Also consider linking to `/collection`, since a design-led audience engages with the gallery.

### Gurugram / Gurgaon keyword targets

**All labelled potential targets. Volume and difficulty could not be verified.**

*Primary:* sofa in Gurgaon · sofa set in Gurgaon · custom sofa Gurgaon · custom furniture Gurgaon · furniture shop in Gurgaon · bespoke furniture Gurgaon · sofa manufacturer Gurgaon · made to order furniture Gurgaon · custom furniture Gurugram

*Secondary:* L shape sofa Gurgaon · sectional sofa Gurgaon · modular sofa Gurgaon · king size bed Gurgaon · TV unit Gurgaon · wardrobe Gurgaon · sofa Golf Course Road · furniture Sohna Road · custom furniture DLF Phase [n]

*Long-tail and question-based:* what size sofa for a large Gurgaon living room · headboard height for a high ceiling · custom sectional for a Gurgaon apartment · who makes bespoke furniture in Gurgaon · furniture delivery society permission Gurgaon

### Realistic assessment

Gurugram has the highest competition for "bespoke" and "luxury" framing, since observable SERPs there include interior-design studios and bespoke furniture manufacturers positioned upmarket (see [section 21](#21-competitor--serp-insights)). It also has the highest order value. Realistic near-term wins: project-type and question-based queries, plus sector and corridor queries. The strongest asset to build here is one excellent, photographed, real project write-up, which serves SEO, conversion and the Google Business Profile at once.

---

## 14. Keyword Strategy

> **Every keyword in this section is a potential target.** No search volume, keyword difficulty, CPC or competition figure is stated anywhere, because none could be verified for this project. **Data could not be verified.** Before committing to the plan, validate the list in Google Keyword Planner or an equivalent tool with location set to each city, and re-rank by real volume and difficulty.

### 14.1 The keyword architecture

Three layers, each owned by a different page type, so nothing cannibalises:

```
Layer 1  NON-LOCAL COMMERCIAL          ->  /sofas  /beds  /custom-furniture  /furniture/[slug]
         "L shape sofa designs", "storage bed", "made to order sofa"

Layer 2  LOCAL COMMERCIAL              ->  4 city pages (+ any future locality/project pages)
         "custom sofa Noida", "furniture shop in Ghaziabad"

Layer 3  INFORMATIONAL / QUESTION      ->  /blog/*  (currently 9 articles, 6 categories)
         "sofa size guide", "fabric vs leather sofa", "how to choose a bed"
```

The rule that keeps this clean: **a local modifier belongs on a city page, not on a category page.** `/sofas` should never be retitled "Sofas in Noida".

### 14.2 Primary keywords (highest commercial value, potential targets)

| Keyword pattern | Owning page | Notes |
| --- | --- | --- |
| custom sofa / made to order sofa | `/sofas`, `/custom-furniture` | The core differentiator. Currently under-targeted |
| sofa set designs | `/sofas` | Already well targeted |
| L shape sofa / corner sofa | `/sofas` + a product page | Already in the title |
| storage bed / hydraulic storage bed | `/beds` | Already in the title |
| upholstered bed / king size bed | `/beds` | Already in the title |
| custom furniture | `/custom-furniture` (**does not exist**) | 🔴 Highest-value missing page |
| `custom sofa {city}` x4 | city pages (**do not exist**) | 🔴 |
| `sofa set in {city}` x4 | city pages | 🔴 |
| `furniture shop in {city}` x4 | city pages | 🔴 Hardest tier |

### 14.3 Secondary keywords (potential targets)

Category level: modular sofa · sectional sofa · three seater sofa · two seater sofa · loveseat · leather sofa · velvet sofa · fabric sofa · platform bed · panel bed · wingback bed · cane bed · dining table set · round dining table · wall mounted TV unit · TV console · wardrobe · sliding wardrobe · accent chair · recliner.

Modifier level: made to measure furniture · bespoke furniture · furniture manufacturer · sofa maker · reupholstery (**only if genuinely offered, which is not stated in the repository**) · furniture for 2BHK · small apartment furniture · high ceiling furniture.

City-plus-category level: `{category} in {city}` across the four cities, but **only on a city page that genuinely covers that category**, never as its own URL per combination. Four cities times twenty categories is eighty doorway pages, and that is the failure mode to avoid.

### 14.4 Long-tail keywords (potential targets, best short-term ROI)

These are where a new site with excellent content actually wins, because they reward specificity over authority:

- will a 3 seater sofa fit through my door
- sofa size for a 12 x 15 living room
- how much clearance to leave around a bed
- difference between hydraulic and drawer storage bed
- fabric or leather sofa for Indian summers
- how to measure a room before ordering a sofa
- what to check in a sofa frame before buying
- how long does custom furniture take to make
- can a sofa be made in sections
- best sofa depth for tall people
- sofa for a 2BHK with a combined living and dining room
- headboard height for a high ceiling bedroom
- how to get a sofa up a narrow staircase
- what makes a custom sofa cost more

**Note:** several of these are already substantially answered inside the existing nine articles. The work is often not new content but surfacing existing answers, by adding them as explicit FAQ entries on the article that answers them (which the `faqs` field and `FAQPage` schema already support), and by giving them their own `<h2>` where the article addresses them.

### 14.5 Local-intent keywords (potential targets)

`near me` family: sofa shop near me · furniture shop near me · sofa maker near me · custom furniture near me. These are won almost entirely by the **Google Business Profile**, proximity and reviews, not by on-page work. They are the strongest argument for prioritising [section 18](#18-google-business-profile-strategy).

Locality family: the sector, sub-city and corridor names listed in sections 10 to 13. These belong in city-page body copy and project write-ups, never as one URL per locality.

### 14.6 Commercial-investigation keywords (potential targets)

Highest-converting tier and currently the least served:

- best sofa manufacturer in Delhi NCR
- custom furniture vs readymade, which is better *(already covered by `made-to-measure-vs-ready-made-furniture`, and this article should be linked from every city page)*
- how to choose a furniture maker
- questions to ask before ordering custom furniture
- is made to order furniture worth it
- what to check before paying for custom furniture

**Recommendation:** one new article, "What to check before you order custom furniture", would serve this whole tier and directly support the four city pages. It is also the article most likely to earn links.

### 14.7 Transactional keywords (potential targets)

sofa price · sofa set price · custom sofa cost · bed price · furniture price list · furniture on order.

**Important constraint:** the business quotes per piece and no prices exist in the repository, correctly. Do **not** invent price ranges to capture these queries. What is honest and effective instead is a **cost-drivers page or article**: what changes the price of a made-to-order sofa (length, depth, frame timber, foam grade, upholstery, mechanism, delivery access), ending in a WhatsApp CTA for an exact quote. This ranks for price-intent queries, tells the truth, and converts, and it can be written today from information the business already has.

### 14.8 Informational keywords (potential targets)

Already well served by the nine articles: sofa size guide · how to choose a sofa · how to choose a bed · standard bed sizes India · sofa fabric types · leather sofa care · monsoon furniture care · small apartment furniture ideas · 2BHK furniture layout.

**Observation from the SERP check:** informational furniture queries in India are dominated by furniture retailers' own blogs (Wooden Street, Interior Company, Alankaram, Induscraft and similar). That is good news, because it means the format works and a blog can rank, and it also means the bar is a retailer blog post rather than an authority publication. The existing nine articles are longer and more specific than the typical result in that set. **Their domain authority and backlink profiles could not be verified.**

### 14.9 Keywords to avoid

- Anything asserting a price, delivery time, warranty, rating or review count that the business has not supplied.
- `{category} {city}` as its own URL at scale. Four cities times twenty categories is a doorway-page pattern.
- "cheap furniture", "furniture sale", "60% off" style terms. They contradict the made-to-order positioning, attract non-converting traffic, and cannot be served honestly with no price list.
- Competitor brand names.
- "best furniture shop in [city]" as a page title claiming to be the best. Superlative self-claims are unverifiable and read as spam.

---

## 15. Recommended Page / URL Structure

### 15.1 Current structure (observed, 49 indexable URLs)

```
/                              homepage
/sofas                         range
/beds                          range
/furniture                     hub + 6 anchor-only categories
/furniture/[slug]              24 product pages
/collection                    gallery
/blog                          guides index
/blog/[slug]                   9 articles
/blog/category/[slug]          6 archives
/about  /contact
/privacy  /terms
```

### 15.2 Recommended target structure

New URLs are marked **NEW**. Everything else stays exactly as it is.

```
/                                          homepage  (retitle to name the market)
|
+-- /sofas                                 unchanged
+-- /beds                                  unchanged
+-- /furniture                             category hub, keeps the anchors
|   +-- /furniture/[slug]                  24 -> real product pages
|
+-- /custom-furniture              NEW     the made-to-order proposition as a real page
+-- /dining                        NEW     only if there are enough real products
+-- /wardrobes                     NEW     only if there are enough real products
+-- /tv-units                      NEW     only if there are enough real products
|
+-- /furniture-in-noida            NEW     city page
+-- /furniture-in-delhi            NEW     city page
+-- /furniture-in-ghaziabad        NEW     city page
+-- /furniture-in-gurgaon          NEW     city page
|
+-- /projects                      NEW     real completed work, index
|   +-- /projects/[slug]           NEW     one per real photographed project
|
+-- /collection                            unchanged
+-- /blog  /blog/[slug]  /blog/category/[slug]      unchanged, grows
+-- /about  /contact                       add local content
+-- /privacy  /terms                       unchanged (update privacy if analytics added)
```

That is **8 to 11 new URLs**, not 80. Total site size goes from 49 to roughly 60 URLs plus projects. This is deliberate: a small number of substantial pages is both better SEO and the only version of this plan that can actually be maintained by one business.

### 15.3 URL naming decision: `/furniture-in-noida` vs `/service-areas/noida`

| Option | For | Against |
| --- | --- | --- |
| `/furniture-in-noida` | The keyword is in the URL; flat and memorable; reads naturally as an anchor | Four top-level URLs that look similar; slightly less obviously a set |
| `/service-areas/noida` | Clearly a set; a `/service-areas` hub page gathers them and can rank for "areas we serve"; scales cleanly if a fifth city is added | The commercial keyword is not in the URL |

**Recommendation: `/furniture-in-noida` and siblings, plus a small `/service-areas` hub that links to all four.** This gets the keyword into the URL, and the hub gives the internal-linking and footer structure a single target. If the number of cities ever grows past six, migrate to the nested form with 301s.

### 15.4 Rules for adding any new URL

Codify these, because they are what keeps the site out of doorway-page territory:

1. **One URL per genuinely distinct search intent.** If two pages would answer the same question, they are one page.
2. **A page must be publishable on its own merits.** If its only distinguishing content is a swapped city or category name, it must not ship.
3. **A category page needs products behind it.** `/dining` with two products is thinner than the `/furniture#dining` anchor it replaces.
4. **A city page needs local substance behind it**, ideally a real project. See the gate at the top of [sections 10 to 13](#sections-10-to-13-how-the-four-city-strategies-are-built).
5. **Every new page enters `src/app/sitemap.ts`.** Static routes are listed manually there, so a new static route will be silently absent from the sitemap unless added. This is the single easiest thing to forget in this codebase.
6. **Every new page gets its own hand-written title and description** through `buildMetadata()`, its own `BreadcrumbList`, and the appropriate content schema.
7. **Keep URLs lowercase, hyphenated, trailing-slash-free**, matching the existing convention and `trailingSlash: false`.
8. **Never change an existing URL without a 301.** Product slugs derive from product names (`src/lib/slug.ts`), so **renaming a product changes its URL**. When the sample catalogue is replaced with real names, all 24 product URLs will change. Those old URLs are not yet indexed if the site has never been live, in which case there is no problem; if the site has been live, every one of them needs a redirect. Do the catalogue replacement **before** launch to avoid this entirely.

### 15.5 Note on the anchor categories

Keep `/furniture#dining` and its siblings working even after `/dining` exists. They are referenced from `src/data/categories.ts` and from the footer. The clean approach is to point `Category.href` at the new real routes and leave the anchor IDs in place on `/furniture` so any external link to a fragment still lands somewhere sensible.

---

## 16. Internal Linking Strategy

### 16.1 What already works (do not break it)

**Observed** and worth preserving exactly:

- **Tag-based blog-to-range matching.** `getPostsByTags()` in `src/data/blog/index.ts` scores articles by tag overlap, so `GuidesTeaser` on `/sofas` asks for `["sofas", "measuring", "upholstery"]` and gets the right guides with no hard-coded slugs. A new article joins the right pages by itself. It renders nothing when nothing matches, so it can never show a stale or empty block.
- **Curated sidebar links.** All nine articles have a `relatedLinks` block pointing into the range.
- **Guaranteed onward links.** `getRelatedPosts()` falls back through curated, then same-category, then most-recent, so every article always offers three onward links.
- **Build-time link integrity.** An unknown `relatedPosts` slug throws at module load, so a broken internal link fails the build.
- **Breadcrumbs everywhere**, visible and in `BreadcrumbList` schema, four levels deep on articles.

### 16.2 The missing layer: local

Target mesh, deliberately small and non-reciprocal-spammy:

```
                         /  (homepage)
                          |  links to both ranges, blog, contact
                          v
    /sofas  <---->  city pages  <---->  /beds
       ^                 | ^                ^
       |                 v |                |
       |          /custom-furniture         |
       |                 |                  |
       +---- GuidesTeaser (tag-matched) ----+
                         |
                         v
                    /blog/[slug]
                    (city article <--> its city page)
                         |
                         v
                    /projects/[slug]  ---->  city page for that project's city
```

Concretely, the links to add:

| From | To | Anchor guidance |
| --- | --- | --- |
| Footer, new "Areas we serve" column | 4 city pages | City name only, plus a link to `/service-areas` |
| `/contact` body | 4 city pages | Inside a rendered service-area list, varied phrasing |
| `/about` body | 4 city pages | In a sentence about where the business works |
| Each city page | `/sofas`, `/beds`, `/custom-furniture` | Descriptive, varied, never four identical anchors |
| Each city page | the article about that city | "Read our guide to ..." |
| Each city article | its city page | One contextual `RichText` link in the prose, near where the local constraint is discussed |
| Each city page | relevant `/projects/[slug]` | Project name |
| Each project page | its city page and the product pages used | Natural |
| `/custom-furniture` | `/sofas`, `/beds`, the FAQ, `made-to-measure-vs-ready-made-furniture` | Natural |
| Homepage | `/custom-furniture` | The made-to-order band already exists on the homepage and is the natural place |

**Anti-patterns to avoid:** identical exact-match anchors repeated site-wide ("custom sofa Noida" x 40); a footer link block listing every city and every category as a cross-product; and reciprocal links between all four city pages, which would make them look like a link ring. City pages should **not** link to each other; they should each link up to `/service-areas` and out to the range.

### 16.3 Product-page linking

**Observed:** the 24 product pages receive links from listing cards and from `getRelatedProducts()`, and link out to related products and the lead CTA. They receive no in-prose links.

**Recommendation:** once real product names exist, add contextual in-prose links from `/sofas` and `/beds` copy, and from the relevant articles, to the two or three specific designs that illustrate the point being made. `AGENTS.md` rule 10 already makes in-prose links a first-class `RichText` node, so this is cheap. A named design linked from the middle of a guide is worth much more than a card in a grid.

### 16.4 Crawl depth

**Observed:** every URL on the site is within 3 clicks of the homepage. Products are 2 clicks (`/` to `/sofas` to product). Articles are 2 (`/` to `/blog` to article). Category archives are 2.

**Recommendation:** keep city pages at depth 2 by linking them from the footer, which appears on every page. Do not bury them at depth 3 behind `/service-areas` only.

---

## 17. Schema / Structured Data Recommendations

### 17.1 What to add, in priority order

#### 🔴 1. `PostalAddress` on the `LocalBusiness`, **once a real address exists**

**Observed:** `furnitureStoreJsonLd()` in `src/lib/seo.ts` already contains the conditional block that emits `address` when `siteConfig.address` is non-null. **No code change is needed.** Filling in `src/config/site.ts` turns it on, and simultaneously renders the visible address block and the "Get directions" button.

**Do not** fill this in with an approximate or placeholder address. An address in schema that does not match the Google Business Profile is worse than no address.

#### 🔴 2. `openingHoursSpecification`, **once real hours exist**

**Observed:** `siteConfig.openingHours` is `null` and is typed as `OpeningHours[]` with human-readable `days` and `hours` strings ("Mon - Sat", "10:00 AM - 8:00 PM"). The visible rendering handles this shape, but `furnitureStoreJsonLd()` does **not** currently emit `openingHoursSpecification`.

**Recommendation:** when hours are supplied, add an `openingHoursSpecification` array to the schema. Schema.org requires machine-readable values (`dayOfWeek` as a list of `https://schema.org/Monday` style values, `opens` and `closes` as 24-hour `HH:MM`), so either store both forms in config or derive the machine form from the human form. Do not emit the human string into the schema field.

#### 🟠 3. `geo` and `hasMap`

**Recommendation:** with a real address, add `geo` (`GeoCoordinates` with `latitude` and `longitude`) and `hasMap` (the Google Maps place URL). `PostalAddress.mapsUrl` already exists as an optional field in the interface and is used by the "Get directions" button, so it is the natural source for `hasMap`.

#### 🟠 4. `sameAs`

**Observed:** `furnitureStoreJsonLd()` already builds `sameAs` from the non-null values of `siteConfig.social`, and omits the field entirely when all three are null. **No code change needed.** Create the Instagram, Facebook and YouTube profiles, set the three fields, and `sameAs` appears automatically. Also add the Google Business Profile URL to the `sameAs` set once it exists, which is the single most useful entry for entity consolidation.

#### 🟠 5. `LocalBusiness` reference from city pages

**Recommendation:** each new city page should emit `BreadcrumbList` plus a `WebPage` (or `Service`) node that references the business by `@id`:

```
"provider": { "@id": "https://<domain>/#business" }
```

Referencing by `@id` rather than re-emitting the whole `FurnitureStore` node keeps one entity across the graph. The codebase already uses this pattern (`websiteJsonLd()` sets `publisher: { "@id": "...#business" }`), so follow it.

Optionally add `Service` nodes with `areaServed` scoped to that single city and `serviceType` naming the actual service (custom sofa manufacturing, made-to-measure beds). **Do not** add `Offer` or any price to these.

#### 🟡 6. `FAQPage` on city pages

**Recommendation:** each city page's 4 to 6 genuinely local FAQs feed a `FAQPage` node, using the existing `faqJsonLd()` helper. **Critical constraint, already enforced elsewhere in the codebase:** emit it only from questions the page actually renders, and from the same data. The blog already does this correctly (`{post.faqs?.length ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}`). Follow that pattern exactly.

#### 🟡 7. `ImageObject` and an organisation logo

**Recommendation:** add a `logo` to the business node (a square logo, not the 1200x630 share image) once real branding exists. This is used in some Google surfaces.

#### 🟡 8. `Product` enrichment, without prices

**Recommendation:** once real products exist, `productJsonLd` can honestly gain `material`, `color`, `width`/`depth`/`height` as `QuantitativeValue` where the standard build size is known, and `additionalProperty` for options. **Still no `offers`, no `price`, no `aggregateRating`, no `review`.** Google will show an "out of stock" or incomplete-product warning in the rich results test without `offers`; that warning is acceptable and is the correct trade-off against publishing a fabricated price.

#### 🟢 9. `ProfilePage` / project schema

**Recommendation:** if `/projects/[slug]` pages are built, `CreativeWork` or `ImageGallery` with `contentLocation` set to the real city is a reasonable fit, mirroring how articles already use `spatialCoverage`.

### 17.2 What must never be added

| Type | Why not |
| --- | --- |
| `aggregateRating` | No verified reviews exist. Emitting one is a manual-action risk with Google and, presented as genuine, is prohibited under the Consumer Protection Act 2019 and IS 19000:2022 |
| `review` | Same. The six on-site testimonials are labelled sample content |
| `offers` / `price` / `priceRange` | Prices are quoted per piece; none is known |
| `award`, `foundingDate`, `numberOfEmployees` | Not supplied. Do not guess |
| `openingHoursSpecification` with invented hours | A wrong hours claim causes real customer harm and GBP inconsistency |
| `PostalAddress` with a placeholder | Breaks NAP consistency and risks GBP suspension |

**Observed:** `AGENTS.md` rule 3 and the comments in `src/lib/seo.ts` already encode all of this. It is restated here so a future SEO implementer chasing star ratings in the SERP does not undo it.

### 17.3 Validation

After any schema change, validate with the Rich Results Test and the Schema Markup Validator on: `/`, `/contact`, one product page, one article, one category archive and each city page. Expect an incomplete-product notice on product pages for the missing `offers`; that is intended.

---

## 18. Google Business Profile Strategy

> This is **off-page work** and it is the single highest-leverage item in this entire document. None of it involves the codebase. It can start today, in parallel with everything else.

### 18.1 The prerequisite decision

Choose the model, from [section 9.2](#92-can-this-site-target-these-four-cities):

- **Storefront:** a real address customers can visit. The profile shows the address and a Maps pin.
- **Service-area business:** no public premises. The address is entered for verification but hidden, and service areas are declared instead.

A hybrid is possible (a workshop plus a by-appointment showroom), and Google supports "visits by appointment only". **Pick the one that is true.** Google suspends profiles for fabricated addresses, and a suspension is far more damaging than a slow start.

### 18.2 Profile setup specification

| Field | What to enter |
| --- | --- |
| Business name | The **exact** trading name, matching the website's `siteConfig.name` character for character. No keywords appended. "Aaram Furniture" not "Aaram Furniture, Best Sofa Manufacturer in Noida". Keyword-stuffed names are a suspension risk and a common competitor violation worth reporting rather than copying |
| Primary category | **Furniture Manufacturer** if the business makes what it sells (which the site claims throughout), otherwise **Furniture Store**. The primary category is the strongest single ranking input on the profile, so choose it deliberately |
| Additional categories | Furniture Store, Sofa Store, Bed Shop, Custom Furniture Store, Interior Designer (**only if genuinely offered**), Upholstery Shop (**only if genuinely offered**) |
| Address | The real one, or hidden under the service-area model |
| Service areas | Noida, Greater Noida, Delhi, Ghaziabad, Gurugram. These should match `siteConfig.serviceAreas`. **Currently `serviceAreas` also lists Faridabad**, so either add Faridabad to the profile or remove it from the config, so the two agree |
| Phone | `+91 93157 10072`, identical to the site |
| Website | The homepage. Consider a UTM-tagged URL so GBP traffic is attributable in analytics |
| Hours | The real ones, matching whatever goes into `siteConfig.openingHours` |
| Attributes | Delivery, on-site services, appointment required, languages spoken, payment methods, wheelchair accessibility. Set only true ones |
| Description (750 chars) | Written once, naturally mentioning made-to-order, sofas, beds, custom furniture, and the four cities. Not a keyword list |
| Products | Add the real range with real photographs. Products on GBP are underused by competitors and directly support category queries |
| Services | "Custom sofa manufacturing", "Made-to-measure beds", "Wardrobes and storage", "Design consultation". Each accepts a description |
| Messaging | Enable it, and answer fast. Response time is visible to customers |
| Booking | Only if a real consultation booking flow exists. The site currently has none |

### 18.3 Photographs

This is where most local competitors are weakest and where a furniture business has an unfair advantage.

**Recommendation:** at minimum, exterior (if a storefront), interior, workshop and process shots, team at work, and above all **finished pieces installed in real customers' homes** with permission. Add new photographs weekly. Geotagging images is not a confirmed ranking factor and should not be relied on; what matters is a steady stream of genuine, high-quality, recent images. The same photographs then serve the city pages, the project pages, Instagram and the product pages, so shoot once and use everywhere.

### 18.4 Review generation strategy

**The single most important off-page activity.** Design the process now, before the first delivery after launch.

**The mechanics:**
1. Ask **at the moment of highest satisfaction**, which for furniture is at installation, in the customer's home, when the piece is in place and they are pleased with it. Not a week later by SMS.
2. Make it one tap. Generate the GBP short review link, turn it into a QR code, put it on the delivery note and on the installer's phone.
3. Ask by WhatsApp, since the whole business already runs on WhatsApp and the customer is already in the thread. Send the review link in that same conversation.
4. **Ask the customer to mention what they bought and their locality**, if they are willing. "L-shape sectional, Sector 137" is what turns a review into a local relevance signal. Never script the review or tell them what to say.
5. **Respond to every review**, positive and negative, within 48 hours. In the response, naturally mention the piece and the area. Responses are indexed content on the profile.
6. **Never** buy reviews, incentivise reviews with a discount, review-gate (asking only happy customers), or post reviews from staff or family. All are policy violations, all are detectable, and in India fabricated reviews presented as genuine are prohibited under the Consumer Protection Act 2019 and IS 19000:2022.

**A realistic target, not a promise:** ten to fifteen genuine reviews in the first 90 days from a business doing regular deliveries, then a steady rate thereafter. Review **recency** matters as much as count, so a steady trickle beats a burst.

**Then, and only then:** collect the best reviews into `src/data/testimonials.ts` with real names, localities and products, and flip `testimonialsAreVerified` to `true`. That single flag removes the "sample" note. Note that the codebase currently emits no rating or review schema at all; adding `aggregateRating` later is a separate, deliberate decision that should only be taken with real, attributable, permission-granted reviews behind it.

### 18.5 Google Business Profile posts

Post weekly. Furniture is visual, and Posts are the cheapest way to keep a profile active. Useful post types: a finished piece just installed (with the locality), a material or finish explainer, a link to a new blog guide, a genuine seasonal note. Avoid empty "Call us now" posts.

### 18.6 Q&A

Seed the profile's Q&A with the real questions from `src/data/faqs.ts` (custom sizes, own fabric choice, building from a reference photograph, how to see more designs, how pricing works) and answer them from the business account. Then monitor for public questions, which arrive unannounced and are often answered wrongly by strangers if the owner does not answer first.

### 18.7 One profile or four?

**Recommendation: one profile, unless there are genuinely multiple real premises.** Creating four profiles for four cities without four real locations is a fabrication and a suspension risk. If the business genuinely opens a second location, that location gets its own profile, its own `LocalBusiness` node with its own `@id`, and its own city page becomes a storefront page rather than a service-area page.

---

## 19. Local Citation & Backlink Strategy

> All off-page. **Prerequisite: the NAP must be finalised first** ([P4](#-p4-no-verified-nap-so-no-localbusiness-address-or-hours)). Building fifty citations and then changing the address means cleaning up fifty citations.

### 19.1 The NAP string

Before any citation work, write down the canonical NAP exactly once and use it character for character everywhere. Decide and freeze:

- Business name: exactly as on the Google Business Profile and in `siteConfig.name`.
- Address: one format, with or without unit prefix, with the city spelled one way. **"Gurugram" for postal and citation use** (see [section 13](#13-gurugram--gurgaon-seo-strategy)).
- Phone: one format. The site displays `+91 93157 10072`.
- Website: one host form, matching the canonical chosen in [P1](#-p1-the-live-domain-is-still-a-placeholder).

### 19.2 Tier 1 citations, do these first

| Platform | Why |
| --- | --- |
| Google Business Profile | The foundation. See [section 18](#18-google-business-profile-strategy) |
| Bing Places | Free, quick, and feeds other surfaces |
| Apple Business Connect | Apple Maps, and iOS users are a meaningful share of this audience |
| JustDial | Observed ranking on the front page for Noida and Ghaziabad furniture queries ([section 21](#21-competitor--serp-insights)). Being listed there is table stakes in India |
| IndiaMART | Observed dominating Ghaziabad sofa-set queries. Strong for manufacturer positioning specifically |
| Sulekha | Standard Indian local directory |
| Facebook Page | Also feeds `sameAs` |
| Instagram Business | The most important social platform for this product category |
| Google Maps (via GBP) | Same profile, but verify the pin position is exact |

### 19.3 Tier 2 citations

TradeIndia, Yellow Pages India, AsklaIla, Grotal, Cylex India, Yelp India, Foursquare, Trustpilot (only if reviews will genuinely be managed there), 99acres/Housing.com service listings if relevant, and Practo-style vertical directories are not relevant here.

**Recommendation:** stop at around 20 to 25 quality citations. Beyond that the return is negligible, and mass-submission services create inconsistent NAP entries that then have to be cleaned up.

### 19.4 Local link opportunities (genuine, not purchased)

Ranked by realistic achievability for a furniture business in NCR:

| Opportunity | How | Realism |
| --- | --- | --- |
| **Interior designers and architects** | Real referral relationships. Designers publish project pages and credit the furniture maker. This is the highest-quality local link available and it also generates revenue | 🟢 High |
| **Real-estate and interiors bloggers in NCR** | Offer genuine expertise, for example a quote or a data-free explainer on furnishing a specific tower type. The existing nine articles are the credential | 🟢 High |
| **Society and RWA newsletters and groups** | A furnishing talk or a measured guide for a specific society. Highly local and highly relevant | 🟡 Medium |
| **Home and interiors publications** | Pitch the genuinely distinctive angles the blog already owns: getting furniture up a Delhi staircase, designing for a service lift, scaling for high ceilings | 🟡 Medium |
| **Supplier and material partners** | Fabric houses, foam suppliers, timber suppliers often maintain "where to buy" or partner pages | 🟡 Medium |
| **Local business associations and trade bodies** | Furniture trade associations, local chambers of commerce | 🟡 Medium |
| **Vocational and design institutes** | Workshop visits, guest sessions, student projects. Educational domains link readily and are strong links | 🟡 Medium |
| **Sponsorship of genuine local events** | Society events, school fetes, local markets. Usually yields a real link and real awareness | 🟡 Medium |
| **Digital PR: original local data** | The one genuinely scalable idea: publish real, first-party data the business actually has, for example the distribution of sofa sizes actually ordered by city, or the most common room-size constraint by tower type. Original data earns links. **This must be real data from real orders, never estimated** | 🟢 High value, needs order history |

### 19.5 What not to do

- Do not buy links, use PBNs, or use guest-post networks. Manual-action risk with no upside.
- Do not use automated citation-blasting services. They create NAP inconsistency, which is the exact opposite of the goal.
- Do not do reciprocal link exchanges at scale with unrelated businesses.
- Do not create satellite microsites per city. Four thin domains are worse than four good pages on one domain.
- Do not chase high-DA irrelevant links. A link from a genuinely local NCR interiors blog is worth more here than a link from a generic high-authority listicle.

### 19.6 A note on measurability

**Backlink counts, referring domains and domain authority for this site and for competitors could not be verified**, since no such tool data was available for this audit and the site is not live. Once launched, establish a baseline in Search Console's Links report (free and authoritative for this site's own links) before judging any link-building work.

---

## 20. Content Strategy

### 20.1 The principle

The existing nine articles set a high bar: 1,900 to 2,800 words, specific and checkable, genuinely local where they claim to be local, and no invented facts. **That bar is the strategy.** Publishing at a lower quality would dilute an asset that currently differentiates the site. Two excellent pieces a month beats eight mediocre ones, and the codebase makes publishing cheap enough that quality is the only real constraint.

### 20.2 Content that directly supports the four cities

Highest priority, because these fill actual gaps identified in [section 8.3](#83-content-gaps):

| # | Working title | Why | Supports |
| --- | --- | --- | --- |
| 1 | Getting furniture into an older Delhi home: staircases, turns and doorways | The only target city with no dedicated article; a genuine, specific constraint | Delhi page |
| 2 | What to check before you order custom furniture | Serves the entire commercial-investigation tier; the most link-worthy piece available | All 4 city pages |
| 3 | What actually drives the price of a made-to-order sofa | Captures price-intent queries **honestly**, with no invented figures | All 4, and `/custom-furniture` |
| 4 | Delivery day: society permissions, lift booking and what to clear beforehand | Every NCR buyer's real anxiety; differs by city, so it can reference all four | All 4 |
| 5 | Storage that actually works in a builder floor | Extends the Ghaziabad angle into the strongest local requirement there | Ghaziabad, `/beds` |
| 6 | Scaling furniture for high ceilings and large rooms | Extends the Gurugram angle; nothing on the site covers this yet | Gurugram, `/sofas` |

### 20.3 Content that deepens existing category coverage

| # | Working title | Category | Fills |
| --- | --- | --- | --- |
| 7 | Wardrobe planning: hinged, sliding, and what fits behind each | `buying-guides` | Wardrobes have products but no content |
| 8 | TV unit and media wall planning: heights, cable runs and proportions | `sofas-living-room` | TV units have products but no content |
| 9 | Dining table sizing: seats, clearance and the walkway you forget | `buying-guides` | Dining has products but no content |
| 10 | Sofa frames and foam: what you are actually paying for | `buying-guides` | Deepens the strongest existing topic cluster |
| 11 | Reupholstery vs replacement | `furniture-care` | **Only if reupholstery is genuinely offered.** Not stated anywhere in the repository, so confirm first |

### 20.4 Content that is not a blog post

| Asset | Why it matters | Effort |
| --- | --- | --- |
| **`/projects/[slug]` write-ups of real completed work** | The highest-value content available. Real photographs, a real city, a real constraint solved, ideally a real customer quote. Feeds city pages, GBP, Instagram and conversion at once | Medium, needs photography |
| **`/custom-furniture` page** | Turns the core differentiator into a rankable page instead of a repeated paragraph on 24 product pages | Low |
| **Real product content for 24 pages** | Half the site's URLs. See [P8](#-p8-the-product-catalogue-is-sample-data) | Medium |
| **A real catalogue, as both PDF and an indexable HTML page** | Lead magnet plus a linkable asset. The PDF alone cannot be optimised well | Medium |
| **Own photography throughout** | Replaces stock; feeds Google Images, GBP, Instagram, city pages and E-E-A-T simultaneously | High, and worth it |
| **Video: a piece being made** | Furniture buyers respond to process. Feeds YouTube (`social.youtube` is already a config field awaiting a value) and GBP | Medium |

### 20.5 Publishing cadence and the date problem

**Observed:** all nine articles carry `publishedAt: "2026-09-07"`. Do **not** backdate them, which would be false and is exactly what the codebase's conventions forbid.

**Recommendation:** publish two genuinely new pieces per month from launch, each with its true date, and set `updatedAt` honestly whenever an existing article is materially revised. Within three months the site has a real freshness gradient. Prioritise from [section 20.2](#202-content-that-directly-supports-the-four-cities) in the order listed, since items 1 to 3 unblock the city pages.

### 20.6 Content maintenance

- Review every article at 6 months. Where something has genuinely changed, revise it and set `updatedAt`. Where nothing has changed, **leave the date alone**; the sitemap and schema both read from these fields and Google compares stated dates against observed changes.
- Add FAQ entries to existing articles as real customer questions arrive on WhatsApp. This is free, high-quality long-tail targeting, and `faqs` already feeds `FAQPage` schema from rendered content.
- When a new article is published, check that its `tags` match the range pages it should appear on, since `GuidesTeaser` matches by tag. A well-tagged article distributes itself.

### 20.7 AI-generated content risk

**Observed:** the existing nine articles do not read as generic AI output. They are specific, opinionated, and contain the kind of practical detail that comes from doing the work ("measure the service lift before you fall in love with anything", "10 to 15 cm of clear wall at each end of a unit", "most small flats feel cramped because of two or three pieces that are 15 cm too big").

**Risk:** the pressure to hit a cadence produces generic, unspecific articles that say nothing checkable. Google's guidance targets content produced primarily to rank rather than to help, regardless of how it was produced. The practical test for every future article: **does it contain at least three specific, checkable claims a competitor's article does not have?** If not, it is not ready. Using AI to draft is fine; publishing a draft that fails that test is not.

---

## 21. Competitor / SERP Insights

> **Scope and honesty statement.** What follows is based on a limited public search-results observation carried out during this audit, plus one competitor page fetched and analysed. **No competitor domain authority, backlink count, traffic estimate, keyword ranking or review count was available or verified.** Two attempted page fetches failed (one DNS failure, one HTTP 403). Everything below is a **structural pattern observation**, which is genuinely useful, and not a metrics comparison, which could not be done. **Competitor metrics could not be verified.**

### 21.1 What actually occupies these SERPs

Across the queries checked for Noida, Gurgaon and Ghaziabad, four distinct result types appear, and they call for different responses:

**Type 1: Aggregator directories.** JustDial and IndiaMART appear prominently, and for Ghaziabad sofa-set queries IndiaMART city-category pages dominated the observed results. These cannot be outranked by being a better furniture business; they are outranked by intent specificity. **Response:** be listed on them (they are Tier 1 citations), and compete for the specific queries they serve badly, which is anything with a real constraint in it.

**Type 2: National e-commerce and multi-city retailers.** Wooden Street and Urbanwood appeared with dedicated city pages ("Sofa Set in Ghaziabad", "Furniture Shop in Gurgaon"), and Wooden Street's Ghaziabad page lists physical store addresses in Indirapuram and Gaur City. These have large domains, discount messaging (up to 60 to 75% off), free delivery and installation, and no-cost EMI. **Response:** do not compete on price or catalogue breadth. Compete on made-to-measure, which they structurally cannot offer at scale.

**Type 3: Templated multi-city manufacturer sites.** The clearest example observed is SKF Decor, which runs a city-and-category URL matrix: `/noida/`, `/ghaziabad/`, `/noida/luxury-sofa-set.htm`, `/ghaziabad/luxury-sofa-set.htm`, `/ghaziabad/wooden-sofa-set.htm` and so on. The `/noida/` page was fetched and analysed. Its structure:

- Title: `Furniture Manufacturers in Noida, Royal Sofa Set, Wooden Sofa Suppliers in Noida`
- H1: `Furniture Manufacturers in Noida`
- H2s: `Royal Sofa Set Suppliers in Noida`, `Wooden Sofa Set Wholesale Suppliers in Noida`, then generic sections (Sofa Sets, Beds, Dining Tables, Why Choose Us, Awards and Recognitions)
- Roughly 1,200 to 1,400 words, with the city name repeated heavily through the body
- NAP shown, with a **New Delhi** address on a page targeting Noida, and body copy that says "though we are based in Delhi, we are ready to serve you"
- **No reviews or testimonials on the page**

**This is the most instructive competitor observation in the audit**, for three reasons:
1. It confirms the city-page strategy works in this market: these pages do appear in results.
2. It shows the quality bar is low: 1,200 to 1,400 words of city-keyword-repeating copy, with no genuinely local substance and no reviews. The site being audited already publishes 2,000-plus-word articles with real local specifics. A properly written city page here would be materially better content than what is currently ranking.
3. It shows the risk to avoid: the same page multiplied across cities and categories, with the city name swapped. That is the doorway pattern. It appears to be tolerated at present, but it is explicitly against Google's guidance, it is vulnerable to any update targeting scaled content, and it is not a strategy worth copying. **Beat it on substance, do not imitate its structure.**

**Type 4: Genuine local manufacturers with local positioning.** For Noida, examples observed include NoidaSofaMaker (positioning on 15+ years of custom work in Noida and Greater Noida, with a `/why-choose-us` page), Sharma Carpenter, Saifi Furniture (Greater Noida, positioning on being a direct maker with no middlemen), and Kazmi Sofa Maker (operating largely through Facebook). For Gurugram, the observed set skews upmarket: bespoke and luxury furniture manufacturers and interior studios (Innovante, Mads Creations, MWM Spaces, ExcelDes/Casa Exotique) rather than volume retailers, with one page mentioning a two-to-six-week custom lead time as normal.

**Response:** this is the direct competitive set. They compete on exactly the same proposition (direct maker, custom, local). The differentiators available to this site are content depth (already far ahead), technical quality (already far ahead), and reviews plus GBP (currently far behind).

### 21.2 Observed title and heading patterns

Patterns visible in the competitor set:

- Titles lead with the category plus the city, often with two or three variants comma-separated: `Furniture Manufacturers in Noida, Royal Sofa Set, Wooden Sofa Suppliers in Noida`.
- H1s are the bare keyword: `Furniture Manufacturers in Noida`.
- H2s repeat the city with a category variant each time.
- "Why Choose Us" and "Awards and Recognitions" style sections are near-universal, often unsubstantiated.
- Discount and offer language is heavy among the retailers.

**What to take, and what not to.** Take: putting the city and the category in the title and H1, because that is the signal the site currently lacks entirely. Do not take: repeating the city in every H2, comma-stuffed titles, or unsubstantiated awards sections. The site's own convention of a readable `<h1>` plus a keyword-carrying `seoTitle` (already implemented for articles via the `seoTitle` field) is the better pattern and should be extended to city pages.

### 21.3 Observed local signals among competitors

- NAP is generally displayed, though not always consistently with the city being targeted (the SKF Decor example shows a Delhi address on a Noida page).
- Physical store addresses on city pages, where they exist (Wooden Street lists Indirapuram and Gaur City stores on its Ghaziabad page), are clearly a strong local signal.
- Reviews on-page are **inconsistent** among competitors; the templated page examined had none. Google Business Profile reviews were not measurable in this audit. **Competitor review counts could not be verified.**
- Years-in-business claims are common ("15+ years", "over a decade"). The site being audited has no such claim in the repository, correctly, since it was not supplied. If the real figure exists, it is a legitimate and valuable trust signal and belongs on `/about`.

### 21.4 Informational SERP observation

For "how to choose a sofa size guide India", the observed results were almost entirely **furniture retailers' own blogs**: Wooden Street, Interior Company, Alankaram, Induscraft, Nismaaya Decor, Uber Decor, Cherrypick and others, with titles like "Standard Sofa Size in India", "Sofa Dimensions: How to Choose the Right Standard Sofa Size", "Best Sofa for Small Living Room in India (2026)".

**Two conclusions.** First, the format works: retailer blogs rank for these queries, so the site's nine guides are aimed at a winnable target. Second, note the title patterns: they front-load the query phrase and several carry a year. The existing `seoTitle` values on this site are good ("Sofa Size Guide: What Fits Your Living Room") and could front-load the query phrase slightly more aggressively without harming the visible `<h1>`, which is exactly what the `seoTitle` mechanism exists for. **These competitors' domain authority and traffic could not be verified**, so no claim is made about how hard they are to outrank.

### 21.5 SERP features to target

| Feature | Relevance | How to earn it |
| --- | --- | --- |
| Local pack / Maps | 🔴 Highest for local intent | GBP, reviews, proximity, categories. See [section 18](#18-google-business-profile-strategy) |
| Image pack | 🟠 High for furniture | Own photography, descriptive filenames and alt text (already good), `max-image-preview: large` (already set) |
| People Also Ask | 🟠 High | The `faqs` field on articles and city pages, with `FAQPage` schema from rendered content |
| Sitelinks | 🟡 Medium | Clear IA and breadcrumbs, both already in place |
| Review stars in results | 🟡 Medium | **Requires real reviews.** Not available now and must not be faked |
| Product rich results | 🟡 Medium | `Product` schema exists. Will show incomplete without `offers`, which is the correct trade-off |
| Video | 🟢 Low for now | Would need video content |

### 21.6 What could not be assessed

Stated plainly so this section is not over-read:

- Competitor domain authority, referring domains and backlink profiles: **could not be verified.**
- Competitor organic traffic and keyword rankings: **could not be verified.**
- Competitor Google Business Profile review counts, ratings and post activity: **could not be verified.**
- Keyword search volume and difficulty for any term in this document: **could not be verified.**
- Live SERP composition for every one of the four cities across the full keyword set: only a sample of queries was checked, and results are personalised and location-dependent.
- Two competitor pages could not be retrieved (one DNS failure, one HTTP 403).

**Recommendation:** before committing budget, run one round of proper tooling: Keyword Planner with location targeting for each of the four cities, and any backlink tool for a competitor gap analysis on the Type 4 competitors named in [section 21.1](#211-what-actually-occupies-these-serps). That converts this structural analysis into a prioritised, quantified plan.

---

## 22. SEO Risks

Severity is judged by impact on ranking in the four target cities. **Observed** risks exist now; **Prospective** risks are ones the improvement work itself could introduce, and those matter just as much here because several of the obvious "fixes" are traps.

### 22.1 Observed risks (present in the project today)

| Risk | Severity | Observed | Why it is a risk |
| --- | --- | --- | --- |
| Placeholder domain in canonicals, sitemap, OG and schema `@id` | 🔴 Critical | `url: "https://www.furniture-future.com"` with `TODO(owner)` | Deploying as-is canonicalises every page to a host the site is not on. Total indexation failure |
| No Google Business Profile | 🔴 Critical | No reference anywhere in the repository | Locks the site out of the local pack and Maps, which is where local-intent clicks go |
| No city signals on commercial pages | 🔴 Critical | 0 grep matches for the four cities across all `src/app/**` page files, except one in the `/blog` description | The commercial pages give Google no reason to rank them in any target city |
| No verified NAP | 🔴 Critical | `address: null`, `openingHours: null` | No `PostalAddress`, `geo`, `hasMap` or `openingHoursSpecification`. Nothing to be NAP-consistent with |
| Brand name unresolved | 🟠 High | `siteConfig.name = "Furniture Future"` vs repository `Aaram-Furniture` | The business name is the anchor of every citation and the GBP. Getting it wrong means redoing all citation work |
| No reviews | 🟠 High | `testimonialsAreVerified: false`, 6 labelled samples | Review count and recency are primary local pack inputs |
| No analytics, no Search Console | 🟠 High | No tags, no `verification` field | Indexation problems, coverage errors and crawl issues would go unnoticed; no progress is measurable |
| Half the URLs are sample product data | 🟠 High | 24 of 49 sitemap URLs; invented names; likely stock photography | Weak, low-demand pages; duplicated made-to-order block across all 24 |
| Product slugs derive from names | 🟠 High | `src/lib/slug.ts`, `withSlugs()` in `src/data/products.ts` | Replacing the sample catalogue **changes all 24 product URLs**. Harmless before launch, a 24-redirect job after |
| Five commercial categories are anchors only | 🟠 High | `/furniture#dining` and siblings in `src/data/categories.ts` | Dining, wardrobes, TV units and custom furniture cannot rank separately |
| Privacy policy contradicts any future analytics | 🟡 Medium | `src/app/privacy/page.tsx` states no cookies and no analytics | Adding analytics without updating the policy is a compliance problem, not just an inconsistency |
| Single publication date on all nine articles | 🟡 Medium | `publishedAt: "2026-09-07"` x9 | No freshness gradient; reads as a launch dump |
| Homepage weight and topic dilution | 🟡 Medium | 465 KB HTML, 14 sections, 9 main `<h2>`s | Mobile weight; the homepage targets nothing specific |
| Heavy source images | 🟡 Medium | 15 MB, largest 614 KB | Build and host optimisation quota pressure |
| No redirect configuration | 🟡 Medium | No `redirects` or `headers` in `next.config.ts` | www/non-www and http/https duplication must be solved at the host, or duplicate hosts will be served |
| `serviceAreas` includes Faridabad | 🟢 Low | 7 entries in `src/config/site.ts` including Faridabad | Every entry is a claim to serve that place. If Faridabad is not served, remove it; if it is, add it to the GBP so the two agree |
| `hasOfferCatalog` uses nested `OfferCatalog` leaves | 🟢 Low | `src/lib/seo.ts` | Semantically loose, not harmful, conveys less than it could |
| No `sameAs` | 🟢 Low | All three social fields `null` | Missing entity-consolidation signal |
| No catalogue PDF | 🟢 Low | `public/catalogue/` has only a README | Missed linkable asset. The WhatsApp fallback is handled correctly, so nothing is broken |

### 22.2 Prospective risks (introduced by doing the improvement work badly)

These are the ones that turn a good site into a penalised one, and every single one is a realistic failure mode of the plan in this document.

| Risk | Severity | The failure mode | The guardrail |
| --- | --- | --- | --- |
| **Doorway / duplicate city pages** | 🔴 Critical | Publishing `/furniture-in-noida`, `-delhi`, `-ghaziabad`, `-gurgaon` as one template with the city name swapped, then extending to `/sofas-in-noida`, `/beds-in-noida` and so on | The gate at the top of [sections 10 to 13](#sections-10-to-13-how-the-four-city-strategies-are-built): each page must be built on a genuinely different local constraint and ideally a real local project. Four pages, differentiated. Never a city-times-category matrix |
| **Fabricated reviews or ratings** | 🔴 Critical | Flipping `testimonialsAreVerified` to `true` with the sample content still in place, or adding `aggregateRating` to chase star ratings in results | The flag stays `false` until real, attributable, permission-granted reviews exist. Manual-action risk with Google, and prohibited under the Consumer Protection Act 2019 and IS 19000:2022 |
| **Invented business facts** | 🔴 Critical | Adding a placeholder address to "turn on" the schema, inventing opening hours, delivery timelines, prices, years in business or awards to fill out a city page | Unknown facts stay `null`. `AGENTS.md` rule 2 already enforces this. A wrong address risks GBP suspension; wrong hours cause real customer harm |
| **Keyword stuffing city names** | 🟠 High | Copying the competitor pattern of repeating the city in every `<h2>` and comma-stuffing titles | Use the existing `seoTitle` pattern: a keyword-carrying title tag with a readable `<h1>`. City named once in the title, once in the `<h1>`, and thereafter only where it is natural |
| **Cannibalising `/sofas` and `/beds`** | 🟠 High | Retitling `/sofas` to "Sofas in Noida", or making city pages compete for "sofa designs" | The three-layer architecture in [section 14.1](#141-the-keyword-architecture): local modifiers live only on city pages |
| **Thin category pages** | 🟠 High | Promoting `/dining`, `/wardrobes`, `/tv-units` while each has only 1 to 2 real products | Rule 3 in [section 15.4](#154-rules-for-adding-any-new-url). Promote only when there is enough real range and copy |
| **Thin sub-locality pages** | 🟠 High | One URL per Noida sector | Sub-locality targeting belongs in city-page body copy and real project write-ups |
| **`FAQPage` schema without rendered FAQs** | 🟠 High | Adding FAQ schema to city pages with more or different questions than the page shows | Follow the existing blog pattern exactly: emit from the rendered data only |
| **Forgetting the sitemap** | 🟠 High | New static routes are listed manually in `src/app/sitemap.ts`, so a new page silently never enters the sitemap | Rule 5 in [section 15.4](#154-rules-for-adding-any-new-url). Add every new static route, then verify the URL count went up |
| **Breaking product URLs after launch** | 🟠 High | Renaming products post-launch changes all their slugs with no redirects | Replace the sample catalogue **before** launch. If after, add 301s for every changed slug |
| **Low-quality AI content to hit a cadence** | 🟠 High | Generic articles that add nothing checkable, diluting a genuinely strong blog | The three-checkable-claims test in [section 20.7](#207-ai-generated-content-risk). Two excellent pieces a month, not eight weak ones |
| **Purchased links, PBNs, citation blasting** | 🟠 High | Fastest apparent progress, worst outcome | [Section 19.5](#195-what-not-to-do). Manual-action risk, plus NAP inconsistency that then has to be cleaned up |
| **Keyword-stuffed GBP business name** | 🟠 High | "Aaram Furniture - Best Sofa Manufacturer in Noida" | Exact trading name only. It is a suspension risk, and competitors doing it can be reported rather than imitated |
| **Multiple GBP profiles without multiple premises** | 🟠 High | One profile per target city to appear in four local packs | One profile per real location. Fabricated locations are a suspension risk |
| **Over-optimisation of anchor text** | 🟡 Medium | Forty identical "custom sofa Noida" internal anchors | [Section 16.2](#162-the-missing-layer-local): varied, descriptive anchors; no city-page-to-city-page link ring |
| **Analytics without a privacy update** | 🟡 Medium | Shipping GA against a policy that says there is none | Update `src/app/privacy/page.tsx` in the same change |
| **Breaking the base CSS layer or Tailwind conflicts** | 🟢 Low | Unlayered CSS silently overriding utilities, or conflicting `className` utilities | `AGENTS.md` rules 5 and 6 already document this. Relevant because new city pages will involve new markup |
| **Adding a client component unnecessarily** | 🟢 Low | Making a city page interactive and losing static rendering | `AGENTS.md` rule 7. City pages should be server components |

### 22.3 The one risk worth restating

The single most likely way this project goes wrong is not a technical mistake. It is that someone reads "we need to rank in four cities" and produces sixteen or eighty city-times-category pages from one template, because that is what the competitor in [section 21.1](#211-what-actually-occupies-these-serps) appears to be doing successfully. That approach is explicitly against Google's guidance on doorway pages and scaled content abuse, it is vulnerable to any update targeting exactly that pattern, and it would destroy the honesty properties that are currently this codebase's most unusual asset. **Four differentiated city pages, each with real local substance, is the recommendation. It is not a compromise; it is the better strategy.**

---

## 23. Priority Fixes

Prioritised on **Impact x Effort x SEO importance**. "Owner" means it does not require a developer; "Dev" means it does; "Both" means the owner supplies the facts and a developer wires them in (which for this codebase is usually a one-line change to `src/config/site.ts`).

| Priority | Issue / Opportunity | Expected impact | Difficulty | Owner | Recommended action |
| --- | --- | --- | --- | --- | --- |
| 🔴 Critical | Placeholder domain in `siteConfig.url` | High (blocking) | Low | Both | Decide the live domain; set `url`; verify canonicals and sitemap in the build; enforce one host form with 301s at the host |
| 🔴 Critical | Business name unresolved (`Furniture Future` vs `Aaram-Furniture`) | High (blocking) | Low | Owner | Confirm the trading name. Every citation and the GBP depend on it |
| 🔴 Critical | No Google Business Profile | **Highest of all** | Medium | Owner | Claim and verify. Full spec in [section 18.2](#182-profile-setup-specification) |
| 🔴 Critical | No verified NAP (address, hours) | High | Low (once decided) | Both | Choose storefront vs service-area ([section 9.2](#92-can-this-site-target-these-four-cities)); fill `address` and `openingHours`, or confirm they stay `null` deliberately |
| 🔴 Critical | No Search Console, no analytics | High (enabling) | Low | Dev | Verify GSC by DNS TXT; submit the sitemap; add one privacy-respecting analytics tool **and update the privacy policy in the same change** |
| 🔴 Critical | Zero city targeting on commercial pages | High | Medium | Dev | Retitle the homepage to name the market; add a rendered, linked service-area list to `/contact` and `/about` |
| 🔴 Critical | Sample product catalogue (24 URLs) | High | Medium/High | Both | Replace names, copy, specs and photography **before launch**, so the slug changes cost nothing |
| 🔴 Critical | `og:image:alt` describes the brand, not the picture, on 33 of 49 pages | Low for ranking, real for accessibility | Low | Dev | One change to `buildMetadata()`: take an `ImageAsset` so `alt` travels with `src` ([OG1](#-og1-ogimagealt-describes-the-brand-not-the-picture-on-33-of-49-pages)) |
| 🟠 High | No city landing pages | High | Medium/High | Both | Build 4 differentiated pages per [sections 10 to 13](#10-noida-seo-strategy). Gate each on real local substance |
| 🟠 High | No reviews | High | Medium (ongoing) | Owner | Stand up the review pipeline in [section 18.4](#184-review-generation-strategy) before the first post-launch delivery |
| 🟠 High | No `/custom-furniture` page | Medium/High | Low | Dev | Promote the core differentiator to a real route with `ItemList`, FAQ and city links |
| 🟠 High | Category keywords are anchors only | Medium | Medium | Dev | Promote `/dining`, `/wardrobes`, `/tv-units` **only once real range supports them** |
| 🟠 High | No `sameAs`, no social presence | Medium | Low | Owner | Create Instagram, Facebook, YouTube; set the three config fields; `sameAs` then emits automatically |
| 🟠 High | No Tier 1 citations | Medium | Low/Medium | Owner | The 9 platforms in [section 19.2](#192-tier-1-citations-do-these-first), with the frozen NAP string |
| 🟠 High | No Delhi article | Medium | Medium | Both | "Getting furniture into an older Delhi home", to support the Delhi page |
| 🟠 High | No commercial-investigation content | Medium | Medium | Both | "What to check before you order custom furniture" plus the cost-drivers piece |
| 🟠 High | No share-shaped images, so 33 of 49 cards are cropped badly | Medium (click-through) | Medium | Both | 1200x630 crops under `public/images/share/`, local articles first ([OG3](#-og3-33-of-49-share-images-are-the-wrong-shape-for-a-share-card)) |
| 🟠 High | `/sofas`, `/beds` and 14 other URLs share one generic card | Medium (click-through) | Low/Medium | Both | Six dedicated cards, in the order given in [OG5](#-og5-sixteen-urls-share-one-image-including-the-two-most-commercially-important-pages) |
| 🟡 Medium | `openingHoursSpecification` not emitted | Medium | Low | Dev | Add to `furnitureStoreJsonLd()` in machine-readable form once real hours exist |
| 🟡 Medium | No `geo` / `hasMap` | Medium | Low | Both | Add with the real address and Maps place URL |
| 🟡 Medium | Heavy source images | Low/Medium | Low | Dev | Re-encode to 2400 px long edge at quality 80 to 85 |
| 🟡 Medium | Every `quality` prop silently coerced to 75 | Low | Trivial | Dev | Set `images.qualities` in `next.config.ts`, or delete the inert props ([IMG1](#-img1-every-quality-prop-in-the-project-is-silently-coerced-to-75)) |
| 🟡 Medium | 404 inherits the homepage card and canonical, and ships two conflicting `robots` tags | Low | Trivial | Dev | A `metadata` export in `not-found.tsx` with `noIndex: true` ([OG7](#-og7-the-404-page-inherits-the-homepages-social-card-and-canonical-and-emits-contradictory-robots-directives)) |
| 🟡 Medium | Homepage weight and dilution | Low/Medium | Low | Dev | Move the full FAQ to `/contact`, keep a 3-question excerpt on `/`; trim the gallery excerpt |
| 🟡 Medium | Single publication date | Low/Medium | Low (ongoing) | Both | Stagger genuine future dates; set `updatedAt` honestly. Do not backdate |
| 🟡 Medium | No project write-ups | Medium | Medium/High | Both | `/projects/[slug]` from real photographed jobs. The best local content available |
| 🟡 Medium | No redirect or security headers | Low/Medium | Low | Dev | Enforce host and scheme 301s at the host; add HSTS and standard headers |
| 🟡 Medium | Privacy policy vs analytics | Low | Low | Dev | Update in the same change as analytics |
| 🟢 Low | `serviceAreas` includes Faridabad | Low | Trivial | Owner | Confirm and either keep it and add it to the GBP, or remove it |
| 🟢 Low | `hasOfferCatalog` shape | Low | Low | Dev | Optional: `Service` or `Product` leaves. Never add `Offer` with a price |
| 🟢 Low | `twitter:image:alt`, `og:image:type` absent | Low | Trivial | Dev | Fold into the [OG1](#-og1-ogimagealt-describes-the-brand-not-the-picture-on-33-of-49-pages) change; not worth a commit of their own |
| 🟢 Low | `priority` deprecated in Next 16 | None (hygiene) | Low | Dev | Rename to `preload` across the 9 files, and update `AGENTS.md` rule 8 in the same change ([IMG2](#-img2-priority-is-deprecated-in-next-16)) |
| 🟢 Low | No catalogue PDF | Low | Medium | Owner | Produce it, drop it at the documented path, flip the flag. Consider an indexable HTML version too |
| 🟢 Low | `/collection` uses stock photography | Low | Medium | Owner | Replace with own work over time |

---

## 24. 30-Day SEO Plan

**Theme: get live, get measurable, get findable.** Nothing in this month is about ranking. It is about removing the blockers that make ranking impossible, and starting the two things with the longest lead times (Google Business Profile verification, and review collection).

### Week 1: decisions and launch blockers

**Owner decisions (no developer needed, and everything else waits on these):**

- [ ] Confirm the trading business name.
- [ ] Confirm the live domain, and whether it is `www` or non-`www`.
- [ ] Decide the model: storefront with a visitable address, or service-area business.
- [ ] If storefront: supply the exact address (with pincode) and the exact opening hours.
- [ ] Supply a business email, or confirm there is none.
- [ ] Confirm the true service areas, and specifically whether Faridabad belongs in the list.
- [ ] Write down the canonical NAP string, exactly, once. Freeze it.

**Developer work:**

- [ ] Set `siteConfig.url` to the live domain. Rebuild. **Verify** in the built HTML that `<link rel="canonical">` on `/sofas` and the `<loc>` values in `sitemap.xml` both use the live host.
- [ ] Set `siteConfig.name`, and `address`, `openingHours`, `email` if supplied.
- [ ] Trim or extend `serviceAreas` to the confirmed list.
- [ ] Deploy. Enforce one canonical host and scheme with 301s at the hosting layer. Confirm the non-canonical form does **not** return 200.

### Week 2: measurement and the profile

- [ ] Verify the property in Google Search Console (DNS TXT is cleanest). Submit `sitemap.xml`. Confirm **49 URLs** discovered.
- [ ] Request indexing for `/`, `/sofas`, `/beds`, `/blog` and the three existing local articles.
- [ ] Add analytics, and **update `src/app/privacy/page.tsx` in the same change**, since it currently states there is none.
- [ ] Run PageSpeed Insights on `/`, `/sofas`, one product page and one article. Record the lab scores as a baseline. Field data will not exist yet.
- [ ] **Start the Google Business Profile.** Create it, submit for verification. Verification can take days or weeks, so this must not wait until month two. Full spec in [section 18.2](#182-profile-setup-specification).
- [ ] Register Bing Places and Apple Business Connect.

### Week 3: the review pipeline and social

- [ ] Stand up the review process **before the next delivery**: GBP short link, QR code on the delivery note, WhatsApp message template, and the ask scripted for the installer at the moment of installation ([section 18.4](#184-review-generation-strategy)).
- [ ] Create Instagram, Facebook and YouTube business profiles. Populate Instagram with whatever real work photography exists.
- [ ] Set `social.instagram`, `social.facebook`, `social.youtube` in `siteConfig`. Verify `sameAs` now appears in the homepage JSON-LD and the links appear in the footer.
- [ ] Begin Tier 1 citations with the frozen NAP: JustDial, IndiaMART, Sulekha ([section 19.2](#192-tier-1-citations-do-these-first)).

### Week 4: content and the first city page

- [ ] Photograph one real completed project in one of the four cities. This unblocks the first city page.
- [ ] Build **one** city page, and make it Noida, because Noida already has the deepest supporting article. Ship it complete: real local sections, real project, real FAQs, `BreadcrumbList` and `FAQPage` schema from rendered content, links to `/sofas`, `/beds` and the Noida article, and a link back from that article.
- [ ] **Add the new route to `src/app/sitemap.ts`.** Rebuild and confirm the sitemap count went from 49 to 50.
- [ ] Add a rendered, linked service-area list to `/contact`, and name the cities in `/about` body copy.
- [ ] Retitle the homepage to name the market.
- [ ] Seed the GBP Q&A from `src/data/faqs.ts`.

### 30-day exit criteria

Live on the real domain with correct canonicals; Search Console verified with the sitemap submitted and 49-plus URLs discovered; analytics running with a matching privacy policy; GBP submitted for verification; Tier 1 citations started with a frozen NAP; social profiles live and `sameAs` emitting; one complete city page shipped and in the sitemap; the review pipeline operating on live deliveries.

**Do not expect rankings this month.** Indexation and GBP verification are the deliverables.

---

## 25. 60-Day SEO Plan

**Theme: build the local layer properly, and replace the sample data.**

### Weeks 5 and 6: the remaining city pages

- [ ] Photograph a real project in each remaining city, or gather enough other genuine local substance to justify each page.
- [ ] Build `/furniture-in-ghaziabad` next, since it has an existing article and the least contested SERP of the four.
- [ ] Build `/furniture-in-gurgaon`, leaning on scale and society procedure, and on the most photogenic project available.
- [ ] Build `/furniture-in-delhi` **last**, and only alongside the new Delhi article, since it is the one city with no supporting content today.
- [ ] Build the small `/service-areas` hub and add the footer "Areas we serve" column linking all four.
- [ ] Add every new route to `src/app/sitemap.ts` and verify the count each time.
- [ ] Complete the local internal-link mesh in [section 16.2](#162-the-missing-layer-local), with varied anchors and **no city-to-city links**.

### Weeks 7 and 8: real products, and the custom-furniture page

- [ ] Replace all 24 products with the real range: real names carrying the search term where honest, real specifications, real photography. Accept that all 24 slugs change; this is why it happens as early as possible.
- [ ] If the site was already live with the sample slugs, add 301s for all 24 old URLs. Verify each one.
- [ ] Build `/custom-furniture`: the made-to-order proposition as a real page, with the FAQ, links to `/sofas` and `/beds`, links to all four city pages, and a link to `made-to-measure-vs-ready-made-furniture`. Move most of the repeated per-product made-to-order block here and link to it, so it is not duplicated 24 times.
- [ ] Add `openingHoursSpecification`, `geo` and `hasMap` to the business schema if the storefront model applies.
- [ ] Publish the two highest-priority new articles: the Delhi access piece, and "What to check before you order custom furniture".
- [ ] Re-encode the source images.
- [ ] Complete Tier 1 and begin Tier 2 citations.
- [ ] Validate every schema type in the Rich Results Test, including the new city pages.

### 60-day exit criteria

Four city pages live, differentiated, each with real local substance, all in the sitemap and all internally linked. Real product catalogue with real photography. `/custom-furniture` live. Two new articles published with real dates. Full business schema including hours and geo where applicable. Tier 1 citations complete. Ten-plus genuine GBP reviews accumulating. First Search Console impression data visible for city queries.

**What to expect by day 60:** impressions in Search Console for long-tail and city queries, probably at low positions. Early local pack visibility for "near me" queries if GBP verification completed and reviews started. Not head-term rankings.

---

## 26. 90-Day SEO Plan

**Theme: depth, authority and the first real measurement of what is working.**

### Weeks 9 and 10: content depth

- [ ] Publish the cost-drivers article ("what actually drives the price of a made-to-order sofa"). This is the honest answer to price-intent queries and it will likely be one of the highest-traffic pages on the site.
- [ ] Publish the delivery-day article, covering society permissions, lift booking and preparation, referencing all four cities.
- [ ] Build `/projects` and two or three `/projects/[slug]` pages from real photographed work. Link each to its city page.
- [ ] Add real FAQ entries to existing articles from the actual questions arriving on WhatsApp. Free long-tail targeting, and it feeds `FAQPage` schema.
- [ ] Promote `/dining`, `/wardrobes` or `/tv-units` to real routes **only if** the real range now supports them.

### Weeks 11 and 12: authority and analysis

- [ ] Begin genuine local outreach: interior designers and architects first, since it is both the best link source and a revenue channel ([section 19.4](#194-local-link-opportunities-genuine-not-purchased)).
- [ ] Pitch one interiors publication or NCR blog with the distinctive angles the blog already owns.
- [ ] Complete Tier 2 citations. Stop at roughly 20 to 25 total.
- [ ] **First real analysis.** In Search Console, review Queries and Pages for the full 90-day window: which city queries produce impressions, which pages get them, average position by city, and which queries produce impressions but no clicks (a title and description problem, which is cheap to fix).
- [ ] Review Core Web Vitals in Search Console, now that field data should exist.
- [ ] Review the GBP Insights: search terms, calls, direction requests, messages, and which photographs get viewed.
- [ ] **Run proper keyword tooling** with location targeting for each of the four cities, and re-prioritise the keyword lists in [section 14](#14-keyword-strategy) against real volume and difficulty. This is the point at which "potential targets" become a measured plan.
- [ ] Re-run the SERP observation in [section 21](#21-competitor--serp-insights) and note what moved.

### 90-day exit criteria

Four city pages plus `/custom-furniture` plus two or three project pages plus 13-plus articles, all real. 20-plus citations with a consistent NAP. 15-plus genuine reviews. Real query data in Search Console. A keyword plan based on measured volume rather than inference. At least two genuine local links in progress.

**Honest expectation at day 90:** long-tail and question-based queries ranking; sub-locality queries starting to appear; local pack presence for "near me" queries proportional to review count and proximity; city pages indexed and ranking somewhere on pages 2 to 5 for their main terms; head terms such as "sofa set in Delhi" still out of reach. **A 90-day head-term ranking should not be promised by anyone, and this document does not promise it.**

---

## 27. Long-Term SEO Strategy

### Months 4 to 6: consolidate and deepen

- Two genuine articles a month, prioritising the remaining gaps in [section 20](#20-content-strategy).
- One new real project write-up a month. Over a year this becomes twelve pieces of local proof, which is the hardest thing for any competitor to copy.
- Sub-locality depth **inside existing pages**, driven by where orders actually come from. If Indirapuram and Gaur City produce most Ghaziabad orders, those localities deserve real paragraphs and real projects on the Ghaziabad page, not their own thin URLs.
- Steady reviews. Target a consistent rate rather than a burst, since recency matters.
- Promote the remaining category pages as the real range grows.
- Consider a genuinely useful interactive tool, for example a room-fit calculator that takes room dimensions and suggests sofa sizes. Note this would need a client component, which `AGENTS.md` rule 7 requires justifying; a fit calculator is a legitimate justification. Tools like this earn links in a way that articles do not.

### Months 6 to 12: authority

- **Original first-party data.** Once there is a year of orders, the business genuinely knows things nobody else has published: the distribution of sofa sizes ordered by city, the most common room constraint by tower type, how often a service lift dictates a sectional build. Publishing real data earns links, gets cited, and is impossible to fabricate. This is the single highest-ceiling long-term SEO play available here, and it costs nothing but the discipline of recording orders properly.
- Designer and architect partnerships turned into published joint project pages.
- Video: a piece being made, from frame to upholstery. Feeds YouTube (the config field is already there), GBP and the product pages.
- If a second real premises opens, a second GBP, a second `LocalBusiness` node with its own `@id`, and that city's page becomes a storefront page.
- Reassess `aggregateRating` only when there is a substantial base of real, attributable reviews, and only with permission. The default remains: do not emit it.

### Year 2 and beyond

- Extend to a fifth and sixth city **only** when there is genuine delivery capacity and real completed projects there. Migrate to `/service-areas/<city>` with 301s if the set grows past six.
- Consider whether the business model has changed enough to justify e-commerce. It would be a fundamental change: `AGENTS.md` and `README.md` both state no backend, and adding prices and a cart changes the schema, the conversion model and the entire content strategy. Do not drift into it; decide it.
- Keep the honesty constraints. They are not a limitation to grow out of. They are why this site will still be indexable and penalty-free when the templated city-matrix competitors are not.

### The structural advantages to protect

Three properties of this codebase are worth defending against future expedience:

1. **Content lives in data, not components.** Content can be rewritten wholesale without touching JSX, which is why the content plans in this document are realistic.
2. **Unknown facts are `null` and are simply not rendered.** This is what makes every honesty guarantee in this report enforceable rather than aspirational.
3. **Build-time integrity checks.** Duplicate slugs, reserved slugs and dangling related-post references fail the build. Extend this discipline to any new content type: a city page with a missing required section should fail the build, not ship thin.

---

## 28. SEO Monitoring & KPIs

### 28.1 Tools, and what each is actually for

| Tool | Cost | What to watch | Cadence |
| --- | --- | --- | --- |
| **Google Search Console** | Free | Coverage and indexation; Queries by city; Pages; average position; CTR; Core Web Vitals field data; the Links report as the authoritative view of this site's own backlinks; sitemap status | Weekly, with a monthly deep review |
| **Google Business Profile Insights** | Free | Search terms that surfaced the profile; calls; direction requests; messages; photo views; review count, rating and recency | Weekly |
| **Google Analytics (or a privacy-respecting alternative)** | Free | Organic sessions by landing page; city-page engagement; tel: and WhatsApp click events; scroll depth on articles | Weekly |
| **PageSpeed Insights / CrUX** | Free | Lab and field LCP, CLS, INP for the key page types | Monthly |
| **Rich Results Test / Schema Validator** | Free | Every schema type after any change | On change |
| **Google Keyword Planner** | Free with Ads | Real volume and competition for the four cities. **This is what converts [section 14](#14-keyword-strategy) from potential targets into a measured plan** | Quarterly |
| **A rank tracker with city-level geo-targeting** | Paid | True local positions for the priority keyword set per city. National rank data is misleading for this business | Weekly, once there is something to track |
| **A backlink tool** | Paid | Competitor gap analysis on the Type 4 competitors in [section 21.1](#211-what-actually-occupies-these-serps) | Quarterly |
| **Local rank grid tool** (Local Falcon or similar) | Paid | Local pack position across a geographic grid, which is the only honest way to measure local pack performance since it varies by the searcher's exact location | Monthly |

### 28.2 KPIs, tiered by what they actually tell you

**Tier 1: business outcomes.** These are the only ones that matter to the owner.

| KPI | Source | Note |
| --- | --- | --- |
| Enquiries by channel (call, WhatsApp, form) | Analytics events plus GBP Insights plus the WhatsApp inbox | The site has no backend, so WhatsApp and call clicks are the conversion. Instrument both |
| Enquiries by city | Ask on every enquiry | The single most useful number in the whole plan, and it is free to collect |
| Enquiries attributable to organic search | Analytics landing page plus a UTM on the GBP website link | |
| Orders closed from organic enquiries | The business's own records | Ties SEO to revenue, which is the only argument that survives a budget review |

**Tier 2: search performance.**

| KPI | Source | Direction |
| --- | --- | --- |
| Indexed URLs vs sitemap URLs | GSC Coverage | Should converge. Any gap is a problem to diagnose |
| Total organic impressions | GSC | Up |
| Impressions for queries containing each of the four city names | GSC Queries, filtered | Up. **The primary measure of whether the local strategy is working** |
| Average position for the priority keyword set, per city | Geo-targeted rank tracker | Up |
| Local pack presence per city | Local grid tool | Up |
| Clicks and CTR by page | GSC | High impressions with low CTR is a title and description fix, which is the cheapest win available |
| GBP: calls, direction requests, messages | GBP Insights | Up |
| Review count, average rating, review recency | GBP | Up, steadily. Recency matters as much as count |

**Tier 3: technical and content health.**

| KPI | Source | Target |
| --- | --- | --- |
| Coverage errors | GSC | Zero |
| Core Web Vitals: URLs rated "Good" | GSC | 100% |
| Mobile usability issues | GSC | Zero |
| Articles published per month | The repository | 2, at the existing quality bar |
| Project write-ups published per month | The repository | 1 |
| Citation NAP consistency | Manual audit | 100% identical |
| Referring domains | Backlink tool or GSC Links | Up, slowly, from genuinely relevant sources |

### 28.3 Baseline discipline

**Before any of the improvement work ships, record the baseline**, which for most of these metrics is currently zero because the site is not live. Specifically record: indexed URLs (0), organic impressions (0), review count (0), citations (0), referring domains (unknown, **could not be verified**), and the PageSpeed lab scores from week 2 of the 30-day plan. Without a baseline, no later claim of improvement is falsifiable.

### 28.4 Reporting rhythm

- **Weekly (15 minutes):** GSC coverage errors; new reviews; new enquiries by city.
- **Monthly (1 hour):** full GSC review by query and page; GBP Insights; rank movement; content shipped versus planned; one concrete decision about what to change.
- **Quarterly (half a day):** re-run keyword research with real volume; re-run the competitor and SERP observation; re-prioritise this document's roadmap against what actually happened. **Update this file rather than starting a new one**, so the history of what was tried is preserved.

---

## 29. Final Recommendation

### The diagnosis in one paragraph

This site's problem is not its code. The code is genuinely good: 55 static prerendered routes, correct and unambiguous canonicals, unique hand-written metadata on every page, one `<h1>` per page, honest and well-formed structured data, a bidirectional internal-link system that maintains itself, nine long-form articles that are better than what currently ranks for the equivalent informational queries, and a clean build and lint. Almost no small business site in this sector is built this well. What the site does not have is a business identity that Google can attach to a place: no verified domain, no address, no hours, no Google Business Profile, no reviews, no citations, no social profiles, and not one city name in any commercial page's title, description or headings. **The machine is well built and the local ignition is missing.**

### What to do, in priority order

**1. Resolve the identity, this week.** The trading name, the live domain, and whether this is a storefront or a service-area business. Everything else is blocked on these three answers, and none of them requires a developer. The domain in particular is a launch blocker: deploying with the placeholder value canonicalises every page to the wrong host.

**2. Claim and verify the Google Business Profile, starting this week.** This is the highest-leverage single action available and it has the longest lead time, so it cannot be sequenced late. For local-intent furniture queries, the local pack is where the clicks are, and the site is currently not eligible for it at all.

**3. Start collecting real reviews before the next delivery.** Not after the website work, in parallel with it. Reviews compound and cannot be caught up later. Ask at installation, in the customer's home, over the WhatsApp thread the business already uses, and ask for the locality and the piece. Never buy, incentivise or gate them.

**4. Get measurable.** Search Console verified, sitemap submitted, analytics running (with the privacy policy updated in the same change). Everything after this point should be a decision informed by data rather than by inference, including this document's own keyword priorities.

**5. Replace the sample catalogue before launch, not after.** Product slugs derive from product names, so renaming 24 products after launch means 24 redirects. Before launch it costs nothing.

**6. Build four city pages, and only four.** Each one built on a genuinely different local constraint: Noida's service lifts and repeated tower layouts; Delhi's narrow staircases and non-standard rooms; Ghaziabad's inherited builder-floor layouts; Gurugram's large rooms, high ceilings and society procedure. Gate each page on having real local substance behind it, preferably one photographed real project. The blog already proves this can be done well: the three existing city articles share no structure with each other, which is exactly the standard the city pages must meet.

**7. Then content depth and authority.** The Delhi article, the "what to check before ordering custom" piece, the honest cost-drivers piece, real project write-ups, and genuine relationships with interior designers.

### What not to do, stated as plainly as possible

**Do not build a city-times-category page matrix.** A competitor visible in these SERPs is running `/noida/`, `/ghaziabad/`, `/noida/luxury-sofa-set.htm` and similar, with the city name swapped and roughly 1,200 words of keyword-repeating copy and no reviews. It appears to work at present. It is a doorway-page pattern, it is explicitly against Google's guidance, it is vulnerable to any update targeting scaled content, and copying it would trade away the single most unusual property this codebase has: that nothing on it is invented. **Beat that competitor on substance. Four good pages will.**

**Do not fabricate anything to fill a gap.** No placeholder address to switch on the schema. No invented hours, prices, delivery windows, years in business or awards. No flipping `testimonialsAreVerified` before real reviews exist. No `aggregateRating`. The codebase already enforces most of this through `| null` fields and a single verification flag, and that enforcement should be treated as a feature, not an obstacle.

### Ranking potential, honestly

**Genuinely achievable within 3 to 6 months of consistent work:** long-tail and question-based queries across all four cities; sub-locality queries (Noida sectors, Indirapuram and Gaur City, Sohna Road and Golf Course Extension, Delhi zones); "near me" queries proportional to review count and proximity once GBP is verified; informational guide queries that pull NCR buyers into the site; and Ghaziabad broadly, which had the least contested observable SERP of the four.

**Achievable over 6 to 12 months:** competitive positions for `custom sofa {city}` and `custom furniture {city}` in all four cities, which is the right target because it matches what the business actually does and it is where the templated competitors are weakest.

**Not a 90-day goal, and nobody should promise it:** single head terms such as "sofa set Delhi" or "furniture shop Noida". Those are held by national retailers, aggregator directories and long-established local manufacturers, and the local pack there is held by businesses with years of review history. **Their authority and review counts could not be verified**, but the SERP composition alone makes the difficulty clear.

**The external factors that will decide this more than any code change:** whether the Google Business Profile gets verified and stays active; how many genuine reviews arrive and how recent they are; whether real photography and real projects materialise; whether two good articles a month actually get published; and whether the business genuinely delivers to all four cities it claims. None of those are engineering problems, and all of them matter more than the remaining engineering.

### The one-sentence version

Spend the next month on identity, Google Business Profile, reviews and measurement rather than on code, because the code is already better than the competition's and the local signals are non-existent.

---

## 30. Exact Next Steps

The first ten actions, in order, with the owner of each. Steps 1 to 3 block almost everything else.

| # | Action | Owner | Blocks | Done when |
| --- | --- | --- | --- | --- |
| 1 | Confirm the trading business name, the live domain (and `www` vs non-`www`), and whether this is a storefront or a service-area business. If storefront, supply the exact address with pincode and the exact opening hours. Confirm whether Faridabad belongs in the service areas. Write the canonical NAP string down once and freeze it | **Owner** | 2, 3, 4, 5, 8 | All answers written down in one place |
| 2 | Set `url`, `name`, and `address` / `openingHours` / `email` / `serviceAreas` in `src/config/site.ts`. Rebuild. **Verify** that `<link rel="canonical">` on `/sofas` and every `<loc>` in `sitemap.xml` use the live host | **Dev** | 4 | Verified in the built HTML, not assumed |
| 3 | Create the Google Business Profile and submit it for verification. Use the exact name with no keywords appended, the correct primary category (Furniture Manufacturer if the business makes what it sells), and the four cities as service areas matching `serviceAreas` | **Owner** | 6, and all local pack visibility | Submitted; verification pending |
| 4 | Deploy to the live domain. Enforce one canonical host and scheme with 301s at the hosting layer, and confirm the non-canonical form does **not** return 200 | **Dev** | 5 | `curl -I` confirms the 301s |
| 5 | Verify the property in Google Search Console (DNS TXT). Submit `sitemap.xml`. Confirm 49 URLs discovered. Request indexing for `/`, `/sofas`, `/beds`, `/blog` and the three local articles | **Dev** | 9 | 49 URLs discovered in GSC |
| 6 | Stand up the review pipeline before the next delivery: GBP short link, QR code on the delivery note, the WhatsApp template, and the installer's ask at the moment of installation. Ask for the locality and the piece, never script the review | **Owner** | Local pack ranking | The next delivery ends with a review request made |
| 7 | Add analytics with tel: and WhatsApp click events, **and update `src/app/privacy/page.tsx` in the same change**, since it currently states the site runs no analytics and sets no cookies | **Dev** | 9 | Events firing; policy consistent |
| 8 | Create Instagram, Facebook and YouTube profiles; set the three `social` fields. Verify `sameAs` appears in the homepage JSON-LD and the links render in the footer. Begin Tier 1 citations with the frozen NAP | **Owner + Dev** | Entity consolidation | `sameAs` present in the built HTML |
| 9 | Replace the 24 sample products with the real range: real names carrying the search term where honest, real specs, real photography. **Do this before or immediately after launch**, because product slugs derive from names, so doing it later means 24 redirects | **Owner + Dev** | Half the site's URLs | 24 real product pages live |
| 10 | Photograph one real completed Noida project, then build and ship `/furniture-in-noida` complete: real local sections, that project, real FAQs, `BreadcrumbList` and `FAQPage` from rendered content, links to `/sofas`, `/beds` and the Noida article, and a link back from that article. **Add the route to `src/app/sitemap.ts`** and confirm the sitemap count went from 49 to 50 | **Owner + Dev** | The other three city pages, which follow the same pattern | The page is live, in the sitemap, and passes the Rich Results Test |

### The two things to check before every future deploy

1. **Did any new static route get added to `src/app/sitemap.ts`?** Static routes are listed manually there. A new page is silently absent from the sitemap otherwise, and this is the easiest thing in this codebase to forget.
2. **Does anything newly rendered assert a fact the business has not supplied?** A price, a delivery time, a rating, an address, a review, a year, an award. If yes, it does not ship. That constraint is currently the site's most valuable and least replaceable property.

---

## 31. Open Graph, Social Sharing & Image SEO Audit

**This section corresponds to Step 11 of the audit brief.** It is a second audit pass, run after sections 1 to 30 were written, and it is **planning only**: no image was created, no metadata was added, and no file under `src/`, `public/` or the project root was modified to produce it. Where it contradicts an earlier section, the earlier section has been corrected in place and the correction is noted here.

Every line marked **Observed** was verified against the generated HTML of a fresh `npm run build` (exit 0, 55/55 routes prerendered) on 7 September 2026, not against the source alone. Reading `src/lib/seo.ts` and concluding "the tags are there" is exactly how the one real defect in this area survived the first pass.

**Contents of this section**

- [31.1 Tag-by-tag inventory](#311-tag-by-tag-inventory-step-111)
- [31.2 OG image implementation findings](#312-og-image-implementation-findings-step-112)
- [31.3 The recommended OG image standard](#313-the-recommended-og-image-standard-step-113)
- [31.4 OG image strategy for Furniture Future](#314-og-image-strategy-for-furniture-future-step-114)
- [31.5 OG image content rules](#315-og-image-content-rules-step-115)
- [31.6 Page-by-page OG image mapping](#316-page-by-page-og-image-mapping-step-116)
- [31.7 Technical implementation requirements](#317-technical-implementation-requirements-step-117-not-implemented)
- [31.8 What OG images do and do not do for SEO](#318-what-og-images-do-and-do-not-do-for-seo-step-118)
- [31.9 Image SEO audit alongside OG images](#319-image-seo-audit-alongside-og-images-step-119)
- [31.10 Validation checklist](#3110-validation-checklist-step-1110)
- [31.11 Scope statement](#3111-scope-statement-step-1111)

### 31.1 Tag-by-tag inventory (Step 11.1)

**Where the tags come from.** Two places, and only two:

1. `src/app/layout.tsx` defines a root `openGraph` and `twitter` block plus `metadataBase: new URL(siteConfig.url)`.
2. `buildMetadata()` in `src/lib/seo.ts` returns a per-route override. **Every page file calls it** except `src/app/not-found.tsx`, which exports no metadata at all (see finding OG7).

`metadataBase` is what makes every social URL absolute. This is the single most important detail in the whole implementation and it is done correctly: relative image paths written in the source come out of the build as fully qualified `https://` URLs.

**Observed, in the built HTML.** Counts are over the 49 indexable URLs.

| Tag | Emitted? | Value in the build | Verdict |
| --- | --- | --- | --- |
| `og:title` | ✅ 49/49 | Page title, brand appended once (`socialTitle` guards against "Brand \| ... \| Brand") | 🟢 Page-specific everywhere |
| `og:description` | ✅ 49/49 | The page's own meta description | 🟢 Page-specific everywhere |
| `og:url` | ✅ 49/49 | Absolute, and **identical to `<link rel="canonical">` on every page checked** | 🟢 |
| `og:type` | ✅ 49/49 | `article` on the 9 guides, `website` on the other 40 | 🟢 (see OG9 on product pages) |
| `og:image` | ✅ 49/49 | Absolute `https://` URL, resolved from `metadataBase` | 🟢 mechanism, 🔴 host (OG2) |
| `og:image:url` | ❌ | Not emitted | 🟢 Not a defect. `og:image` and `og:image:url` are equivalent in the Open Graph spec; emitting both is redundant |
| `og:image:secure_url` | ❌ | Not emitted | 🟢 Low value here, since `og:image` is already `https`. Optional (OG8) |
| `og:image:type` | ❌ | Not emitted | 🟡 Cheap to add, marginal benefit (OG8) |
| `og:image:width` | ⚠️ 16/49 | `1200`, only where the share image is `og-cover.jpg` | 🟢 The restraint is correct; the cause is not (OG3) |
| `og:image:height` | ⚠️ 16/49 | `630`, same 16 URLs | As above |
| `og:image:alt` | ⚠️ 49/49 present, **33 wrong** | One hard-coded brand string for every image on the site | 🔴 **OG1, the one real defect** |
| `og:site_name` | ✅ 49/49 | `Furniture Future` | 🟢 |
| `og:locale` | ✅ 49/49 | `en_IN` | 🟢 Correct for the market, and rarely set by competitors |
| `article:published_time` | ✅ 9/9 guides | ISO timestamp from `publishedAt` | 🟢 |
| `article:modified_time` | ✅ where set | Only when `updatedAt` exists | 🟢 Honest: not faked to "now" |
| `article:section` | ✅ 9/9 guides | The real category title | 🟢 |
| `article:tag` | ✅ 9/9 guides | The article's own tags | 🟢 |
| `twitter:card` | ✅ 49/49 | `summary_large_image` | 🟢 |
| `twitter:title` | ✅ 49/49 | Same as `og:title` | 🟢 |
| `twitter:description` | ✅ 49/49 | Same as `og:description` | 🟢 |
| `twitter:image` | ✅ 49/49 | Absolute, same file as `og:image` | 🟢 |
| `twitter:image:alt` | ❌ 0/49 | Not emitted anywhere | 🟠 **OG4** |
| `twitter:site` / `twitter:creator` | ❌ | Not emitted | 🟢 **Correctly absent.** No X account exists, and inventing a handle would be a fabricated business fact. Revisit only if an account is genuinely created (ties to [P13](#-p13-no-sameas-social-signals)) |
| `og:video`, `og:audio` | ❌ | Not emitted | 🟢 No such assets exist |

**Share-image coverage across the 49 URLs.**

| Share image | URLs | Which |
| --- | --- | --- |
| `/images/og-cover.jpg` | 16 | `/`, `/sofas`, `/beds`, `/furniture`, `/collection`, `/about`, `/contact`, `/blog`, `/privacy`, `/terms`, and all 6 `/blog/category/*` archives |
| The product's own photograph | 24 | Every `/furniture/[slug]` |
| The article's own photograph | 9 | Every `/blog/[slug]` |

**Two things that are right and are easy to get wrong,** recorded so nobody "fixes" them later:

- The root layout and the page both define an `openGraph` block, yet the build emits **one** set of tags per page, not two. Next merges rather than appends. Verified by counting `og:` meta tags in `.next/server/app/sofas.html`.
- `og:url` equals the canonical URL on every page checked. Many sites leak a trailing-slash or `www` variant into `og:url` while the canonical says something else. This site cannot, because both are derived from `canonicalUrl()`.

### 31.2 OG image implementation findings (Step 11.2)

The brief's questions, answered against the build rather than assumed:

| Question | Finding |
| --- | --- |
| Is an OG image configured on every important page? | Yes. 49/49, no page falls back to nothing |
| Is the image URL absolute? | Yes, on all 49, via `metadataBase` |
| Does the URL resolve? | **No, not today.** The host is the placeholder `www.furniture-future.com` (OG2) |
| Is the image publicly accessible? | It will be. Files live in `public/images/`, served as static assets with no auth, no signed URL, no query string |
| Is it crawlable? | Yes. `robots.txt` is `User-Agent: * / Allow: /`, with nothing under `/images/` disallowed. `max-image-preview: large` is set in the robots meta |
| Is HTTPS used? | Yes, `siteConfig.url` is `https://`. Enforcement of the http to https redirect is a hosting task ([section 6.8](#68-security-and-hygiene)) |
| Is the image appropriate to the page? | Partly. 33/49 pages ship their own subject-matter photograph, which is better than most competitors. 16/49 share one generic interior (OG5) |
| Is one image duplicated across every page? | No, but it is duplicated across the 16 highest-value commercial pages, including `/sofas` and `/beds` |
| Is a generic logo used as the OG image? | **No.** `og-cover.jpg` is a photograph, not a logo. That is the right instinct, but the photograph carries no brand identity at all (OG6) |
| Static or dynamically generated? | Entirely static files from `public/`. No `opengraph-image.tsx`, no `ImageResponse`, no runtime generation |
| Compatible with the Next.js architecture? | Yes, and deliberately so. The OG URL points at the raw file in `public/`, **not** at `/_next/image`, so no image-optimizer round trip is involved in a social scrape |
| Can crawlers get it without JavaScript? | Yes. Every tag is in the server-rendered `<head>`. Nothing is injected client-side. This is the strongest property of the implementation |
| Caching problems? | Yes, latent. Facebook, LinkedIn and WhatsApp cache aggressively by URL. Because the filename is unversioned, replacing `og-cover.jpg` in place will keep serving the old card to those platforms for an unpredictable period (see 31.3) |

Findings follow the numbering used elsewhere in this report: 🔴 blocking, 🟠 high, 🟡 medium, 🟢 low or informational.

#### 🔴 OG1. `og:image:alt` describes the brand, not the picture, on 33 of 49 pages

**Observed.** `src/lib/seo.ts` line 7 defines one constant:

```ts
const OG_ALT = `${siteConfig.name} - premium sofas, beds and custom furniture`;
```

and then applies it to **every** share image, including the ones a page passes in itself:

```ts
images: [
  image === OG_IMAGE
    ? { url: image, width: 1200, height: 630, alt: OG_ALT }
    : { url: image, alt: OG_ALT },   // <- the page's own photo, the brand's alt text
],
```

Verified in the build, `/furniture/verde-velvet-sofa`:

```html
<meta property="og:image" content="https://.../images/products/sofas/verde-velvet-sofa.jpg"/>
<meta property="og:image:alt" content="Furniture Future - premium sofas, beds and custom furniture"/>
```

The picture is one green velvet sofa. The alt text says the business sells sofas, beds and custom furniture. The same mismatch occurs on all 24 product pages and all 9 articles.

**Problem.** Three separate ones, in descending order of importance:

1. **Accessibility.** `og:image:alt` is what a screen reader announces for a shared card. It currently describes the company rather than the image, on exactly the pages where the image is specific and worth describing.
2. **The correct text already exists and is being discarded.** Every `ImageAsset` in `src/data/**` carries real alt text ("Deep green velvet three-seater sofa on a light oak floor"), and `src/lib/types.ts` documents that it must never be empty for content imagery. `buildMetadata()` takes `image?: string`, a bare `src`, so the alt cannot travel with the image even though it exists two fields away.
3. **It is a small honesty defect,** which matters more in this codebase than it would elsewhere. `AGENTS.md` rule 2 forbids asserting what the repository does not know. Here the opposite happens: the repository knows what the photograph shows and publishes a generic claim instead.

**Recommendation.** Change the `image` parameter of `buildMetadata()` from `string` to `ImageAsset`, so `alt` arrives with `src`. Two call sites pass an image today (`src/app/blog/[slug]/page.tsx`, `src/app/furniture/[slug]/page.tsx`), and both already hold the full `ImageAsset`. Keep `OG_ALT` as the default for `og-cover.jpg` only. Full shape in [31.7](#317-technical-implementation-requirements-step-117-not-implemented). **Not implemented.**

**Note on section 6.4.** The first pass read this code and rated Open Graph "🟢 Nothing to fix". That verdict was wrong, and [section 6.4](#64-open-graph-and-social-metadata) has been corrected to point here. The reason it was missed is worth recording: the source looks correct because `alt` is present in the object literal, and only the built HTML makes it obvious that the same string appears under 33 different photographs.

#### 🔴 OG2. Every social URL and every social image URL points at the placeholder domain

**Observed.** `og:url`, `og:image` and `twitter:image` are absolute and resolved from `siteConfig.url`, which is still `https://www.furniture-future.com` with a `TODO(owner)` beside it.

**Problem.** This is [P1](#-p1-the-live-domain-is-still-a-placeholder) seen from the social side, and it is worse here than for canonicals. A canonical pointing at the wrong host is a signal Google re-evaluates on the next crawl. A share preview that failed to fetch its image is **cached by the platform**: Facebook, LinkedIn and WhatsApp will keep showing a blank or broken card for a URL long after the image starts resolving, until the cache is manually invalidated or expires. The first person to share the site before the domain is set can therefore poison the preview for that URL.

**Recommendation.** Set `siteConfig.url` before the site is shared anywhere, which [section 30](#30-exact-next-steps) already sequences as step 2. Then, immediately after launch, run each of the platform debuggers in [31.10](#3110-validation-checklist-step-1110) once per template URL, which forces a re-scrape. Do not share the URL in a WhatsApp group before doing this. **Not implemented.**

#### 🟠 OG3. 33 of 49 share images are the wrong shape for a share card

**Observed.** The pages that supply their own image supply their **content** photograph, at whatever aspect ratio the photograph happens to be. Measured from the files:

| Article | Share image | Pixels | Ratio | As a `summary_large_image` card |
| --- | --- | --- | --- | --- |
| `sofa-size-guide-for-your-living-room` | `gallery/twin-grey-sofas-living-room.jpg` | 1600x900 | 1.78 | 🟢 Near enough |
| `sofa-fabric-vs-leather-delhi-ncr-climate` | `products/sofas/hearth-leather-sofa.jpg` | 1600x900 | 1.78 | 🟢 Near enough |
| `furniture-care-summer-and-monsoon` | `about/styled-living-room-with-sectional-sofa.jpg` | 1600x900 | 1.78 | 🟢 Near enough |
| `furnishing-a-gurgaon-apartment` | `gallery/open-plan-living-and-dining-room.jpg` | 1600x1067 | 1.50 | 🟡 Top and bottom trimmed |
| `how-to-choose-a-sofa` | `gallery/ivory-boucle-sofa-living-room.jpg` | 1600x1172 | 1.37 | 🟡 Noticeably trimmed |
| `how-to-choose-a-bed` | `products/beds/serene-upholstered-king-bed.jpg` | 1600x1600 | 1.00 | 🟠 Half the frame discarded |
| `made-to-measure-vs-ready-made-furniture` | `categories/wooden-two-door-wardrobe.jpg` | 1200x1800 | 0.67 | 🔴 Portrait. A tall wardrobe reduced to a horizontal slice of its middle |
| `furniture-for-small-apartments-noida` | `categories/bespoke-joinery-with-accent-chair.jpg` | 1200x1800 | 0.67 | 🔴 Portrait |
| `furnishing-a-builder-floor-in-ghaziabad` | `gallery/minimal-interior-with-black-bench.jpg` | 1200x1800 | 0.67 | 🔴 Portrait |

Across the 24 product pages the same measurement gives: 4 portrait (1200x1800), 4 square (1600x1600), 16 landscape between 1.50 and 1.90.

**Problem.** Two of the three portrait articles are the **Noida and Ghaziabad local guides**, which are the two most likely pages in the whole site to be pasted into a WhatsApp group, and which [sections 10](#10-noida-seo-strategy) and [12](#12-ghaziabad-seo-strategy) both lean on. A 2:3 portrait photograph rendered into a 1.91:1 card is centre-cropped to roughly a third of its height: the subject of the picture is usually gone.

**This is not a criticism of the code.** The comment in `src/lib/seo.ts` explains that width and height are declared only for the image whose dimensions are known, precisely so platforms are not told a portrait photograph is 1200x630. That decision is correct and should stay. The defect is upstream of it: the site has no share-shaped derivative of these photographs to point at, so the correct decision produces a poor card anyway.

**Recommendation.** Produce one 1200x630 crop per article and per product, art-directed rather than centre-cropped, and point the share metadata at the crop while the page keeps the full-resolution original. Naming convention that fits the existing discipline: `public/images/share/blog/<post-slug>.jpg` and `public/images/share/products/<product-slug>.jpg`. Once the share image is always a known 1200x630, `og:image:width` and `og:image:height` can be emitted unconditionally and the conditional in `buildMetadata()` disappears. **Not implemented.**

#### 🟠 OG4. `twitter:image:alt` is absent on all 49 pages

**Observed.** `buildMetadata()` passes Twitter images as a bare string array:

```ts
twitter: { card: "summary_large_image", title: socialTitle, description, images: [image] }
```

A string carries no alt, so no `twitter:image:alt` is emitted. Confirmed absent from every built page inspected.

**Problem.** Cards on X, and on the several other clients that read `twitter:*` in preference to `og:*`, have no image description. Same accessibility gap as OG1, on a different surface.

**Recommendation.** Pass an object (`{ url, alt }`) instead of a string, using the same alt fixed in OG1 so the two surfaces cannot drift apart. **Not implemented.**

#### 🟠 OG5. Sixteen URLs share one image, including the two most commercially important pages

**Observed.** `/sofas` and `/beds` both share `og-cover.jpg`, a generic living-room photograph. So do `/furniture`, `/collection`, `/blog` and all six `/blog/category/*` archives.

**Problem.** Graded by page, because this is not equally a problem everywhere:

- `/sofas` and `/beds` are the site's two primary commercial pages ([section 14.2](#142-primary-keywords-highest-commercial-value-potential-targets)). Sharing an undifferentiated interior on both wastes the one piece of visual persuasion a link gets, and the fix is trivial: the site already owns 8 sofa photographs and 8 bed photographs.
- The six category archives are legitimately generic pages, but a per-category card is nearly free once a share-image pipeline exists.
- `/privacy` and `/terms` do not matter. Leave them on the default and do not spend a minute on it.

**Recommendation.** Six dedicated cards, in this order: `/sofas`, `/beds`, `/furniture`, `/collection`, `/blog`, `/contact`. Concepts in [31.4](#314-og-image-strategy-for-furniture-future-step-114). **Not implemented.**

#### 🟡 OG6. `og-cover.jpg` is technically correct and carries no brand identity

**Observed.** 1200x630 exactly, progressive JPEG, 160 KB, in `public/images/`. It is an unbranded photograph of a modern open-plan living room: no wordmark, no business name, no market, no text of any kind. It is also, on the evidence of the rest of the library, licensed stock rather than the business's own work ([P8](#-p8-the-product-catalogue-is-sample-data), [section 7.4](#74-image-seo)).

**Problem.** Not a bug. The dimensions, format, weight and encoding are all right, and choosing a photograph over a logo is the right call: logos make dull cards. But a card carrying no identifying mark does nothing for brand recall on the 16 URLs that use it, and because the photograph is stock, the identical image may appear on a competitor's card. This is the one place on the site where a wordmark is genuinely useful, because a shared link is often the first time somebody encounters the business at all.

**Recommendation.** Reshoot or recompose the default card as the business's own photography with a discreet `Furniture Future` wordmark and, at most, the confirmed market phrase "Delhi NCR". Nothing else: no phone number (it dates and it is not clickable in a card), no address (none is known), no rating, no years, no offer. **Not implemented.**

#### 🟡 OG7. The 404 page inherits the homepage's social card and canonical, and emits contradictory robots directives

**Observed** in `.next/server/app/_not-found.html`:

```html
<meta name="robots" content="noindex"/>          <!-- Next's own, for the 404 route -->
<meta name="robots" content="index, follow"/>    <!-- inherited from the root layout -->
<link rel="canonical" href="https://www.furniture-future.com"/>
<meta property="og:url" content="https://www.furniture-future.com"/>
<meta property="og:title" content="Furniture Future | Modern Sofas, Beds &amp; Custom Furniture"/>
```

Cause: `src/app/not-found.tsx` exports no `metadata`, so the root layout's block applies unchanged.

**Problem.** Every mistyped or dead URL advertises itself, on social platforms, as the homepage: same title, same description, same `og:url`. And the page ships two conflicting `robots` values. In practice Google honours the more restrictive directive and a 404 status code settles it anyway, so the ranking risk is minimal, but "two contradictory robots tags on a live page" is the kind of thing an SEO tool flags loudly and a human then spends an afternoon on.

**Recommendation.** Add a small `metadata` export to `src/app/not-found.tsx` with its own title and description and `noIndex: true`, which `buildMetadata()` already supports. It is the only page file in the project that does not call `buildMetadata()`. **Not implemented.**

#### 🟢 OG8. `og:image:type` and `og:image:secure_url` are not emitted

**Observed.** Neither appears in any built page.

**Problem.** Minimal. Every scraper that matters sniffs the content type from the response, and `og:image` is already an `https` URL, which is what `og:image:secure_url` exists to provide for pages served over http. The Open Graph specification does define both, so a strict validator may mention them.

**Recommendation.** Add `type: "image/jpeg"` to the image descriptor if and when the code is touched for OG1 or OG3; it is one property. `secureUrl` can be skipped, or added for completeness once the real domain is in place. Do not schedule work for this on its own. **Not implemented.**

#### 🟢 OG9. Product pages declare `og:type: website`

**Observed.** `/furniture/[slug]` emits `og:type="website"`, because `buildMetadata()` only switches to `article` when the `article` argument is present.

**Problem.** Effectively none. `og:type="product"` belongs to Facebook's older product-object vocabulary, is not in the `Metadata["openGraph"]` union that Next 16 types, and would need to be hand-written through a raw metadata field. Meanwhile the machine-readable product data Google actually consumes is already emitted as `Product` JSON-LD ([section 6.3](#63-structured-data-inventory-verified-in-the-built-html)).

**Recommendation.** Leave it. Recorded only so a future reader does not spend effort here, and specifically so nobody adds `product:price:amount` to a site that publishes no prices. **Not implemented, and should not be.**

### 31.3 The recommended OG image standard (Step 11.3)

The default, unless a specific page has a reason to differ:

| Property | Recommendation | Why |
| --- | --- | --- |
| Dimensions | **1200 x 630 px** | Broad compatibility across platforms, and what the existing `og-cover.jpg` already is |
| Aspect ratio | ~1.91:1 | The ratio a large summary card is laid out for. Anything squarer or taller gets cropped by the platform, not by you |
| Format | JPEG for photography, PNG only for flat colour and hard-edged text | JPEG is smaller for photographs; PNG avoids ringing artefacts around type |
| File size | Keep it modest. `og-cover.jpg` at 160 KB is a good working target | Messaging apps in particular are the fussiest consumers of share images, and several impose undocumented ceilings above which they fall back to a small thumbnail or no image. Small is strictly safer, and the ceilings are not published, so treat this as prudence rather than a specification |
| Safe area | Keep the wordmark and any text within the central ~80% | Different platforms crop the same card differently, and some render a square thumbnail from it |
| Type size | Large enough to read in a phone-sized preview. If it needs squinting at 400 px wide, it is too small | Most shares are opened on a phone |
| Text volume | A handful of words. One line, occasionally two | A card is a poster, not a paragraph |
| Colour and treatment | The site's own palette (warm ivory, ink, brass) and the same photographic treatment as the site | The card is the first frame of the site; it should not look like a different company |
| Filename | Descriptive and **versioned when replaced**: `og-cover-2026-09.jpg`, not a second `og-cover.jpg` | Platforms cache share images by URL. Overwriting in place is the single most common reason a "fixed" card keeps rendering the old image for weeks |

Two things to keep off every card, stated here because they are the usual temptations: keyword lists ("Sofa Manufacturer Noida Delhi Ghaziabad Gurgaon"), which read as spam to a human and are not read at all by a search engine; and any claim the repository cannot substantiate, which is `AGENTS.md` rule 2 applied to pixels. A card is published business communication like any other page.

### 31.4 OG image strategy for Furniture Future (Step 11.4)

**The constraint that shapes all of it.** Text baked into an image is invisible to the honesty checks that protect the rest of this project: no reviewer greps a JPEG. So the rule for this site is stricter than the general advice. **Only two claims may appear on a card:** the business name, and the market phrase `Delhi NCR`, which `src/config/site.ts` records as owner-confirmed. Anything else on the list in [31.5](#315-og-image-content-rules-step-115) is out until it is a fact in the repository.

**Homepage, `/`**

- Concept: the business's best full-room photograph, warm and uncluttered, with a discreet `Furniture Future` wordmark and the line **"Premium furniture, made to order for Delhi NCR"**.
- Why that line: it states the offer and the market in the words the site itself uses, without claiming a shop, a rating or a delivery time.
- This is the card that will be shared most and should be commissioned first.

**`/sofas`**

- Concept: one strong sofa photograph, the best of the eight, with the wordmark and **"Sofa designs, made to your room"**, echoing the page's own H1.
- Deliberately not "Sofa Manufacturer in Delhi NCR". The page is a range page and the card should look like a range, not a directory listing.

**`/beds`**

- Concept: the same treatment on an upholstered or storage bed. **"Beds built to your measurements"**.

**`/furniture`**

- Concept: a three-up composite of dining, wardrobe and TV unit, signalling breadth. **"Sofas, beds, dining, storage, custom"**.
- This is the one card where a composite beats a single photograph, because breadth is the page's whole proposition.

**`/collection`**

- Concept: a two or three frame gallery strip. Wordmark only, no line of copy; the page is visual and the card should be too.

**`/about`**

- Concept: the workshop photograph that already exists (`about/furniture-workshop-craftsmanship.jpg`), cropped to 1200x630. **"Made to order, in our workshop"**.
- Craft imagery outperforms showroom imagery on a card, and it is the one thing this business can show that a marketplace listing cannot.

**`/contact`**

- Concept: the default card is acceptable here. If one is made, **"Talk to us before you buy"**, no phone number in the image, because it is not clickable in a card and it dates the file.

**`/blog` and the six category archives**

- `/blog`: one card, **"Furniture guides"** plus the wordmark.
- The six archives: reuse the category's own subject matter. Sofas and living rooms gets a living room; Beds and bedrooms gets a bedroom; Small spaces gets a compact room; Furniture care gets a fabric or leather detail; Delhi NCR home guides gets an NCR apartment interior **only when a genuine one has been photographed**, otherwise it stays on the `/blog` card. Do not use a stock photograph of an unidentifiable city to imply local presence.

**The 9 articles**

- Rule: **the article's own photograph, cropped to 1200x630, no text overlay.** The card's job is to look like the subject of the guide, and the headline is already supplied by `og:title` directly beside it.
- The three at 1200x1800 (`made-to-measure-vs-ready-made-furniture`, `furniture-for-small-apartments-noida`, `furnishing-a-builder-floor-in-ghaziabad`) need a real crop decision, not a centre crop, and the two local ones should be done first (OG3).
- Never the same generic image on every post. The current implementation already avoids this, which is worth stating plainly since it is the most common failure on furniture blogs.

**The 24 product pages**

- Rule: **the product photograph, cropped to 1200x630, no overlay.** The product name is in `og:title`.
- The 4 portrait and 4 square products need art-directed crops. The 16 landscape ones are close enough to work as an interim.
- No price on a card, ever, on a site that publishes no prices.

**Future city pages**

If, and only if, the pages described in [sections 10 to 13](#10-noida-seo-strategy) get built with genuine local substance behind them, each gets its own card: a **photograph of real work delivered in that city**, wordmark, and one line naming the city ("Furniture, made for Noida flats").

Two prohibitions, both of which follow from [section 22.2](#222-prospective-risks-introduced-by-doing-the-improvement-work-badly):

1. **Never create a location page in order to have a location card.** The page has to earn its existence by being useful about the place. A card is a consequence of a page, never a reason for one.
2. **Never produce four cards by swapping the city name over the same photograph.** That is the doorway-page pattern rendered as an image, and it will read as one to any human who sees two of them.

### 31.5 OG image content rules (Step 11.5)

Every card, without exception:

- **Communicates the page's topic** at a glance, in the first frame, without reading any text.
- **Carries the Furniture Future wordmark**, in the site's own type and palette, consistently placed across the whole set.
- **Uses photography of furniture the business actually makes.** Stock is acceptable as an interim, as it is on the site today, but it is the weakest available option and it is the first thing to replace ([section 7.4](#74-image-seo)).
- **Has one clear subject.** One sofa, one bed, one room. A collage of six thumbnails is unreadable at preview size.
- **Uses readable type at preview scale,** in a handful of words at most.
- **Contains no keyword list, no city stuffing, no "No. 1" or "Best in Delhi NCR",** and no superlative the business cannot support.
- **Contains no fabricated fact.** Named and forbidden, because these are what get baked into cards: an address, opening hours, a price or "starting from" figure, a delivery time, a star rating, a review count, a customer count, years in business, an award, a certification, a discount or offer, and any city the business does not genuinely serve.
- **Looks like the same brand** as every other card in the set. A set of cards is a system; one off-palette card makes the whole set look borrowed.

### 31.6 Page-by-page OG image mapping (Step 11.6)

Only pages that exist in the project today. The 24 product pages and 9 articles are given as families plus a per-article table, because the per-article crop decision differs while the rule does not. Recommended text is a **concept**, to be approved by the owner before anything is designed.

| Page | Current OG image | Current status | Recommended OG image | Recommended text | Priority |
| --- | --- | --- | --- | --- | --- |
| `/` | `og-cover.jpg` | Correct size, unbranded stock interior, shared with 15 other URLs | Own photography, best full room | `Furniture Future` + "Premium furniture, made to order for Delhi NCR" | 🔴 |
| `/sofas` | `og-cover.jpg` | Generic. Not a sofa. Shared | One sofa from the range | `Furniture Future` + "Sofa designs, made to your room" | 🔴 |
| `/beds` | `og-cover.jpg` | Generic. Not a bed. Shared | One bed from the range | `Furniture Future` + "Beds built to your measurements" | 🔴 |
| `/furniture` | `og-cover.jpg` | Generic. Shared | Dining, wardrobe and TV unit composite | `Furniture Future` + "Sofas, beds, dining, storage, custom" | 🟠 |
| `/collection` | `og-cover.jpg` | Generic. Shared | Gallery strip, 2 to 3 frames | Wordmark only | 🟠 |
| `/about` | `og-cover.jpg` | Generic. Shared | `about/furniture-workshop-craftsmanship.jpg`, cropped | `Furniture Future` + "Made to order, in our workshop" | 🟠 |
| `/contact` | `og-cover.jpg` | Generic. Shared. Acceptable | Optional: a room with a person present | "Talk to us before you buy". No phone number in the image | 🟡 |
| `/blog` | `og-cover.jpg` | Generic. Shared | Composite of three article images | `Furniture Future` + "Furniture guides" | 🟡 |
| `/blog/category/*` (6 URLs) | `og-cover.jpg` | Generic on all six. Shared | Per-category subject photograph | Category name + wordmark | 🟡 |
| `/blog/[slug]` (9 URLs) | The article's own photograph | 🟢 Page-specific. 🟠 3 portrait, 1 square, so cropped badly. 🔴 alt text wrong (OG1) | 1200x630 crop of the same photograph | None. `og:title` carries the headline | 🟠 |
| `/furniture/[slug]` (24 URLs) | The product's own photograph | 🟢 Page-specific. 🟠 4 portrait, 4 square. 🔴 alt text wrong (OG1) | 1200x630 crop of the product photograph | None. `og:title` carries the product name | 🟠 |
| `/privacy` | `og-cover.jpg` | Shared. **Fine as is** | No change | No change | 🟢 |
| `/terms` | `og-cover.jpg` | Shared. **Fine as is** | No change | No change | 🟢 |
| 404 (`not-found.tsx`) | Inherits the homepage card, including `og:url` | 🟡 Advertises every dead URL as the homepage, and ships two conflicting robots tags (OG7) | Default card is fine; the **metadata** is the fix | Own title and description, `noIndex: true` | 🟡 |
| Future city pages | Do not exist | Not applicable. Do not build a page to justify a card | Real work delivered in that city | Wordmark + city, once the page has real substance | ⚪ Blocked on [sections 10 to 13](#10-noida-seo-strategy) |

**Per-article crop decisions,** since this is where the shape problem actually bites:

| Article | Current ratio | Crop needed | Priority |
| --- | --- | --- | --- |
| `furniture-for-small-apartments-noida` | 0.67 portrait | Yes, art-directed. Highest value local page | 🔴 |
| `furnishing-a-builder-floor-in-ghaziabad` | 0.67 portrait | Yes, art-directed. Local page | 🔴 |
| `made-to-measure-vs-ready-made-furniture` | 0.67 portrait | Yes. A tall wardrobe cannot survive a centre crop | 🟠 |
| `how-to-choose-a-bed` | 1.00 square | Yes | 🟠 |
| `how-to-choose-a-sofa` | 1.37 | Yes, mild | 🟡 |
| `furnishing-a-gurgaon-apartment` | 1.50 | Yes, mild. Local page | 🟡 |
| `sofa-size-guide-for-your-living-room` | 1.78 | Optional | 🟢 |
| `sofa-fabric-vs-leather-delhi-ncr-climate` | 1.78 | Optional | 🟢 |
| `furniture-care-summer-and-monsoon` | 1.78 | Optional | 🟢 |

### 31.7 Technical implementation requirements (Step 11.7, not implemented)

Specification for whoever does this later. **Nothing below has been applied.**

**The tags the implementation should produce**

```text
og:title              already correct
og:description        already correct
og:url                already correct, matches canonical
og:type               already correct (website / article)
og:image              already correct, absolute
og:image:width        emit unconditionally once every share image is 1200x630
og:image:height       emit unconditionally once every share image is 1200x630
og:image:type         add, "image/jpeg"
og:image:alt          FIX: must describe the image, not the brand (OG1)
og:site_name          already correct
og:locale             already correct, en_IN
og:image:secure_url   optional, low value
```

```text
twitter:card          already correct, summary_large_image
twitter:title         already correct
twitter:description   already correct
twitter:image         already correct, absolute
twitter:image:alt     ADD, from the same alt as og:image:alt (OG4)
twitter:site          only if an account genuinely exists
twitter:creator       only if an account genuinely exists
```

**Where the changes belong**

1. `src/lib/seo.ts`, `buildMetadata()`. Change `image?: string` to an `ImageAsset` so `alt` travels with `src`, default it to a module-level constant for `og-cover.jpg`, and use `image.alt` for both `og:image:alt` and `twitter:image:alt`. Pass the Twitter image as `{ url, alt }` rather than a bare string. Two call sites pass an image (`src/app/blog/[slug]/page.tsx`, `src/app/furniture/[slug]/page.tsx`) and both already have the whole `ImageAsset` in hand, so the change is small and type-checked end to end.
2. `src/app/not-found.tsx`. Add a `metadata` export via `buildMetadata()` with `noIndex: true` (OG7).
3. `public/images/share/`. The 1200x630 derivatives. Suggested layout mirroring the source tree: `share/blog/<post-slug>.jpg`, `share/products/<product-slug>.jpg`, `share/pages/<route>.jpg`.
4. Optionally a `shareImage` field on `BlogPost` and `Product` in `src/lib/types.ts`, so a page can point at its crop while the page body keeps the full-resolution original. Falling back to `image` when `shareImage` is absent keeps the change incremental and keeps `AGENTS.md` rule 1 intact: the mapping stays in `src/data`, not in a component.

**On dynamic generation.** Next supports `opengraph-image.tsx` with `ImageResponse`, and it would prerender at build time here, so it is technically compatible. It is still the wrong choice for most of this site: 33 of the 49 cards should show an actual photograph of the actual piece, which is a cropping job, not a rendering job. Templated cards also invite exactly the text this project must not publish, because the template makes it cheap to interpolate a city name or a claim into 24 images at once. If it is used at all, confine it to the category archives, and remember it adds a font-loading and build-time cost for cards nobody shares.

**Explicitly out of scope for this step, per the brief.** No OG image was created. No existing image was modified. No metadata was added. No file under `src/app/`, `src/components/`, `public/` or `next.config.ts` was touched. No layout or page metadata was changed. This section is a specification, not a change.

### 31.8 What OG images do and do not do for SEO (Step 11.8)

**What they help with**

- Link previews on Facebook, LinkedIn, WhatsApp, Telegram, Slack, iMessage and X.
- Brand presentation at the moment somebody encounters the business for the first time, which for a WhatsApp-driven furniture business is a genuinely frequent moment.
- Click-through rate on shared links, plausibly. Worth doing for that reason alone.
- Consistency: a card that matches the site reduces the bounce that follows a mismatch between preview and page.

**What they do not do**

- They are **not a Google ranking factor.** No card, however good, moves a position.
- They do not affect local pack placement. That is Google Business Profile, proximity, prominence and reviews ([section 18](#18-google-business-profile-strategy)).
- They do not build domain authority, and a shared link is not a backlink.
- They do not cause indexing. Sitemap, crawlability and internal links do.
- They will not produce rankings for "sofa in Noida" or any other city phrase. Nothing in this section changes what [sections 10 to 13](#10-noida-seo-strategy) say about how long that takes.

**The one real search connection,** stated carefully: Google can use `og:image` as **one** input when choosing a preview image for a result, and it can select a different image from the page instead. It is a hint about presentation, not a ranking input. On this site the more relevant lever is already pulled: `max-image-preview: large` is set in the robots meta, which is what permits a large image preview at all. Everything else about image visibility comes from the page itself: crawlable `<img>` elements, honest alt text, descriptive filenames, relevant surrounding copy, and photography worth surfacing.

### 31.9 Image SEO audit alongside OG images (Step 11.9)

**Observed** against the built HTML, not the source. Measurements are from `.next/server/app/sofas.html` (18 images) and `index.html`.

| Check | Finding | Verdict |
| --- | --- | --- |
| Descriptive filenames | All 51 files hyphenated and descriptive, matching product slugs (`meridian-l-shape-sectional-sofa.jpg`) | 🟢 Better than most commercial sites |
| Alt text on page images | Every `ImageAsset` carries real descriptive alt, and it reaches the HTML (`alt="Deep green velvet three-seater sofa on a light oak floor"`) | 🟢 |
| Alt text keyword stuffing | None. Alt text describes the picture, in sentences | 🟢 |
| Alt text on **share** images | Wrong on 33 of 49 pages | 🔴 OG1 |
| Responsive images | `srcset` with 10 candidate widths (256w to 3840w) plus a real `sizes` on every image | 🟢 |
| `sizes` accuracy | Present on 18/18 images on `/sofas`, and matched to the actual grid (`(max-width: 639px) 92vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 23vw`). The prop is required by `SmartImage`'s type, so it cannot be forgotten | 🟢 Enforced by the compiler, which is the only enforcement that lasts |
| Lazy loading | 18/18 lazy on `/sofas`. Exactly one preloaded image on `/`, the hero, with `fetchPriority="high"` | 🟢 Textbook LCP handling |
| Format | `formats: ["image/avif", "image/webp"]`, AVIF first | 🟢 |
| Compression, delivered | `next/image` re-encodes per request width | 🟢 |
| Compression, sources | 15 MB across 51 JPEGs, largest 613 KB | 🟡 [P11](#-p11-source-images-are-heavy) |
| Image **quality** actually served | **Every one of the 3,284 image URLs across the whole build is `q=75`**, while the code asks for 70, 82, 84, 85, 86 and 88 in seven places | 🟠 **IMG1, new** |
| `width` / `height` attributes | Absent, by design: `SmartImage` uses `fill`, so next/image emits absolute positioning instead | 🟢 See the note below |
| CLS | Zero by construction. The wrapper owns the `aspect-*` class, so the box exists before the pixels do | 🟢 |
| Blur placeholders | One shared inline `BLUR_DATA_URL` for every image | 🟢 No per-image payload |
| Discoverable as HTML images | Yes. `next/image` renders real `<img>` elements. **Zero raw `<img>` tags and zero photographs in CSS**: the only `background-image` rules in `globals.css` are two `linear-gradient`s | 🟢 |
| Surrounding content | Every image sits beside real copy: product description and specs, gallery captions, article prose | 🟢 |
| Image sitemap | None. `src/app/sitemap.ts` emits no `<image:image>` entries | ⚪ Optional |
| Deprecated API | `priority` is exposed by `SmartImage` and passed or forwarded in 8 further files, and is deprecated in Next 16 | 🟡 **IMG2, new** |
| Originality | Stock photography throughout | 🟡 [P8](#-p8-the-product-catalogue-is-sample-data), [section 7.4](#74-image-seo). The highest-value image work available, and unchanged by anything in this section |

#### 🟠 IMG1. Every `quality` prop in the project is silently coerced to 75

**Observed.** The code sets six distinct quality values across seven places: `SmartImage` defaults to 82, `Hero` uses 70 and 85, `SofaBedSplit` 84, `ArticleCard` and the article hero 86, the product page 88. The built HTML contains **3,284 image URLs and every single one carries `q=75`.** No `q=82`, no `q=86`, no `q=88` anywhere in the build.

**Cause,** confirmed in `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`: Next 16 changed the default of `images.qualities` from "all values allowed" to `[75]`, and a `quality` prop outside that list is coerced to the closest allowed entry. `next.config.ts` does not set `qualities`, so 75 is the only permitted value and every prop is rounded onto it. The build prints no warning; the docs note the warning appears in development logs.

**Problem.** Modest in visual terms, since 75 is a reasonable setting and the site looks fine. The real problem is that six deliberate decisions in the code are inert, and a future reader will believe the product hero is served at 88 when it is not. It also quietly undercuts [P11](#-p11-source-images-are-heavy), whose recommendation is expressed in quality terms.

**Recommendation.** Either add the values in use to `images.qualities` in `next.config.ts` so the props take effect, or delete the props and let everything render at the default so the code stops asserting something untrue. Prefer the second unless a side-by-side comparison shows a visible difference on the hero, since fewer allowed qualities means fewer variants to optimise and cache. **Not implemented.**

#### 🟡 IMG2. `priority` is deprecated in Next 16

**Observed.** `SmartImage` exposes a `priority` prop and forwards it to `next/image`, and eight further files pass or forward it: `Hero`, `CategoryGrid`, `ProductShowcase`, `ProductCard`, `ArticleGrid`, `ArticleCard`, `src/app/blog/[slug]/page.tsx` and `src/app/furniture/[slug]/page.tsx`. Next 16's image documentation states: "Starting with Next.js 16, the `priority` property has been deprecated in favor of the `preload` property in order to make the behavior clear."

**Problem.** None yet. It still works, and the build confirms the intended effect: exactly one preloaded image on the homepage with `fetchPriority="high"`. But it is on a removal path, and `AGENTS.md` rule 8 currently describes the convention in terms of `priority`, so the rule and the code would need renaming together rather than separately.

**Recommendation.** Rename the `SmartImage` prop to `preload` and forward `preload` instead, updating the eight files that pass it and `AGENTS.md` rule 8 in the same change. Behaviour is identical; the naming stops being wrong. Not an SEO fix, and not urgent. **Not implemented.**

**On the absent `width` and `height` attributes.** Recorded deliberately, because it looks like a defect and is not. `SmartImage` uses `fill`, so next/image emits no `width`/`height` attributes and instead absolutely positions the image inside a wrapper that already has an `aspect-ratio`. Layout is therefore reserved before the image loads, which is what those attributes exist to achieve, and CLS is zero by construction. An automated audit may still report "image elements do not have explicit width and height". That report would be a false positive here. Do not "fix" it by adding intrinsic dimensions to a `fill` image, which is not valid, and do not abandon the ratio wrapper to satisfy a tool.

### 31.10 Validation checklist (Step 11.10)

Current state, so this doubles as a status board. "After launch" means it cannot be checked until the site is deployed on the real domain.

| # | Check | Status |
| --- | --- | --- |
| 1 | Every important page has an OG image | ✅ 49/49 |
| 2 | OG image URL is absolute | ✅ via `metadataBase` |
| 3 | OG image is publicly accessible | ⏳ Will be. Static file in `public/`, no auth, not disallowed in `robots.txt`. Confirm after launch |
| 4 | OG image uses HTTPS | ✅ in the metadata. ⏳ Enforce the http to https 301 at the host |
| 5 | Image dimensions are appropriate | ⚠️ Correct for the 16 URLs on `og-cover.jpg`. Wrong shape on 33 (OG3) |
| 6 | Image is not unnecessarily huge | ✅ `og-cover.jpg` is 160 KB. ⚠️ Some product and article photographs exceed 500 KB and are used as share images as-is |
| 7 | Image is relevant to the page | ⚠️ Yes on 33, generic on 16 (OG5) |
| 8 | Image is not just a generic logo | ✅ It is a photograph. ⚠️ And carries no brand mark at all (OG6) |
| 9 | OG title is page-specific | ✅ 49/49 |
| 10 | OG description is page-specific | ✅ 49/49 |
| 11 | `og:url` matches the canonical URL | ✅ on every page checked. ⚠️ 404 inherits the homepage URL (OG7) |
| 12 | `og:type` is appropriate | ✅ `article` on guides, `website` elsewhere (OG9) |
| 13 | `og:image:alt` is present and correct | 🔴 Present on 49, **wrong on 33** (OG1) |
| 14 | Twitter/X metadata handled | ⚠️ Card, title, description and image yes. `twitter:image:alt` missing (OG4) |
| 15 | No duplicate or incorrect OG URLs | ✅ No duplicate tag blocks despite layout plus page both defining one. ⚠️ 404 (OG7) |
| 16 | Real domain in every social URL | 🔴 Placeholder host today (OG2) |
| 17 | Social preview validated on each platform | ⏳ Impossible until deployment |

**How to validate, after launch.** One representative URL per template (homepage, a range page, a product, an article, a category archive), through each of: the Facebook Sharing Debugger, the LinkedIn Post Inspector, X's card preview, and WhatsApp and Slack by pasting the link to yourself. Each debugger also **forces a re-scrape**, which is the remedy for OG2's cached-broken-card problem, so run them once deliberately at launch rather than only when something looks wrong. The Google Rich Results Test validates the JSON-LD, not Open Graph; the two are separate and both matter ([section 17.3](#173-validation)).

### 31.11 Scope statement (Step 11.11)

Nothing was implemented. Specifically: no OG image was created or modified, no metadata was added or changed, and no file was touched in `src/app/`, `src/components/`, `src/data/`, `src/lib/`, `src/config/`, `public/`, `next.config.ts` or `package.json`. `npm run build` was run to read the generated HTML; its output under `.next/` is not tracked.

The only files changed by this step are this document, which gained this section and the [table of contents](#table-of-contents) entry, plus corrections in [section 6.4](#64-open-graph-and-social-metadata), [section 6.5](#65-performance-and-core-web-vitals), [section 7.4](#74-image-seo), [section 23](#23-priority-fixes) and the [appendix](#appendix-audit-method-and-verification-log) where this pass contradicted or extended the first one.

**Read for this step:** `src/lib/seo.ts` and `src/app/layout.tsx` in full; every `buildMetadata()` call site across all 13 page files; `src/lib/types.ts`; `src/components/ui/SmartImage.tsx`; `next.config.ts`; `src/app/robots.ts`; `src/app/sitemap.ts`; the image frontmatter of all 9 blog posts; `public/images/og-cover.jpg` viewed as an image; the pixel dimensions and byte size of all 51 JPEGs; the emitted `og:*`, `twitter:*`, `robots` and `canonical` tags of 8 representative built pages (`/`, `/sofas`, `/about`, `/contact`, `/blog`, `/blog/how-to-choose-a-sofa`, `/blog/category/buying-guides`, `/furniture/verde-velvet-sofa`) plus `_not-found.html`; the `<img>` markup of `.next/server/app/sofas.html`; and the `qualities` and `priority` entries in `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md` and `.../02-guides/upgrading/version-16.md`.

**Summary of this section, in one line.** The Open Graph implementation is structurally sound and better than the sites it competes with, it contains one real defect worth fixing (`og:image:alt` on 33 pages), one blocker it shares with the rest of the site (the placeholder domain), and one genuine content gap (no share-shaped crops, so a third of the cards are cropped badly and the sixteen most valuable pages share a photograph with no brand on it).

---

## Appendix: audit method and verification log

So a future reader can reproduce or challenge any finding.

**Repository state:** branch `improvements`, one commit (`7ffbae9`), with uncommitted modifications to 16 tracked files and 5 untracked additions (the entire blog subsystem: `src/app/blog/`, `src/components/blog/`, `src/data/blog/`, `src/lib/blog.ts`, `src/components/sections/GuidesTeaser.tsx`). The blog is therefore new work not yet committed. Git remote: `https://github.com/Ranjan404/Aaram-Furniture.git`.

**What was read in full:** `README.md`, `AGENTS.md`, `CLAUDE.md`, `package.json`, `next.config.ts`, `src/config/site.ts`, `src/lib/seo.ts`, `src/lib/contact.ts`, `src/lib/types.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`, all 13 page files under `src/app/`, `src/data/blog/index.ts`, `src/data/blog/categories.ts`, `src/data/faqs.ts`, `src/data/categories.ts`, `src/components/ui/SmartImage.tsx`, plus the frontmatter of all 9 blog posts and a full reading of `furniture-for-small-apartments-noida.ts`.

**What was measured:**
- `npm run build`: succeeded, 55/55 static pages generated, TypeScript clean.
- `npx eslint .`: no output, clean.
- Generated `sitemap.xml`: **49 `<loc>` entries**.
- Generated `robots.txt`: `User-Agent: *` / `Allow: /` / `Host` / `Sitemap`.
- `.next/server/app/sofas.html`: canonical, title, 1 `<h1>`, 9 `<h2>`, 10 `og:*` tags, 249 KB.
- `.next/server/app/index.html`: 1 `<h1>`, JSON-LD type counts (`FurnitureStore`, `WebSite`, `FAQPage`, `ContactPoint`, 9 `OfferCatalog`, 7 `Place`, 5 `Question`/`Answer`), 465 KB.
- `.next/server/app/furniture/verde-velvet-sofa.html`: `Product`, `Brand`, `BreadcrumbList` with 3 `ListItem`; no `offers`.
- `public/images`: 51 files, 15 MB total, largest 614 KB.
- `.next/static`: 60 KB CSS in one file; ~686 KB of raw JS across chunks.
- City-name grep across all of `src/`: matches only in `src/data/blog/posts/*` (4 files), `src/config/site.ts`, `src/data/blog/index.ts`, `src/data/blog/categories.ts`, `src/lib/types.ts` and one match in `src/app/blog/page.tsx`. **Zero in every other page file.**
- Analytics and verification grep (`gtag`, `googletagmanager`, `analytics`, `google-site-verification`, `clarity`, `hotjar`, `measurementId`): only two explanatory comment mentions in `src/app/privacy/page.tsx`. None present.
- `next.config.ts` grep for `redirects`, `headers`, `rewrites`: none.

**Second pass, Open Graph and image SEO ([section 31](#31-open-graph-social-sharing--image-seo-audit)):**
- `npm run build` re-run: exit 0, 55/55 routes prerendered.
- Emitted `og:*`, `twitter:*`, `robots` and `canonical` tags extracted from 8 representative built pages (`/`, `/sofas`, `/about`, `/contact`, `/blog`, `/blog/how-to-choose-a-sofa`, `/blog/category/buying-guides`, `/furniture/verde-velvet-sofa`) plus `_not-found.html`. This is what found [OG1](#-og1-ogimagealt-describes-the-brand-not-the-picture-on-33-of-49-pages), [OG4](#-og4-twitterimagealt-is-absent-on-all-49-pages) and [OG7](#-og7-the-404-page-inherits-the-homepages-social-card-and-canonical-and-emits-contradictory-robots-directives), none of which are visible from `src/lib/seo.ts` alone.
- Pixel dimensions and byte size of all 51 JPEGs, read from the JPEG SOF headers rather than from `file`, whose output reports DPI. Aspect ratio computed per share image.
- `public/images/og-cover.jpg` opened and viewed: 1200x630, 160 KB, unbranded stock interior, no text.
- `q=` parameter counted across every built HTML file: **3,284 occurrences, all `q=75`** ([IMG1](#-img1-every-quality-prop-in-the-project-is-silently-coerced-to-75)).
- `<img>` markup of `.next/server/app/sofas.html`: 18 images, 18 `loading="lazy"`, `sizes` and a 10-candidate `srcset` on each, no `width`/`height` (a `fill` consequence). One `fetchPriority="high"` image on `/`.
- Grep for `background-image`, `bg-[url`, `backgroundImage` and raw `<img` across `src/`: two `linear-gradient`s in `globals.css`, no photographs in CSS, no raw `<img>`.
- `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md` and `.../02-guides/upgrading/version-16.md` read for the `qualities` default change and the `priority` deprecation ([IMG2](#-img2-priority-is-deprecated-in-next-16)).

**External research performed:** four Google searches (Noida sofa manufacturers; Gurgaon custom furniture; Ghaziabad sofa sets; India sofa size guides) and one successful competitor page fetch and analysis (`skfdecor.com/noida/`). Two fetches failed: `noidasofamaker.com` (DNS resolution failure) and `woodenstreet.com/sofa-set-in-ghaziabad` (HTTP 403).

**What could not be verified in the second pass:** whether any share image actually resolves, and how any platform renders any card. Both require deployment on the real domain. Every statement in [section 31](#31-open-graph-social-sharing--image-seo-audit) about cropping is derived from measured pixel dimensions against the ~1.91:1 card ratio, not from an observed preview. Messaging-app file-size ceilings are undocumented and are treated as prudence, not specification.

**What could not be verified, and is therefore stated nowhere in this document as fact:** search volume, keyword difficulty and CPC for any keyword; this site's or any competitor's traffic, rankings, backlink counts, referring domains or domain authority; competitor Google Business Profile review counts and ratings; real-world Core Web Vitals field data for this site (it is not deployed); whether the business genuinely delivers to each of the seven places listed in `serviceAreas`; whether a showroom, opening hours, email or social presence exists; and whether the product photography is licensed stock or original.

**Sources for the external research:**

- [KAZMI SOFA MAKER, Noida](https://www.facebook.com/kazmisofamaker/)
- [SKF Decor, Furniture Manufacturers in Noida](https://www.skfdecor.com/noida/)
- [SKF Decor, Luxury Sofa Set Manufacturers in Ghaziabad](https://www.skfdecor.com/ghaziabad/luxury-sofa-set.htm)
- [Sharma Carpenter, Best Sofa Manufacturers In Noida](https://sharmacarpenter.in/best-sofa-manufacturers-in-noida)
- [NoidaSofaMaker](https://noidasofamaker.com/)
- [Saifi Furniture, Sofa Set Manufacturers in Greater Noida](https://saififurnitures.in/sofa-set-manufacturers-in-greater-noida)
- [Ryan Office Systems, Sofa Manufacturing Factory in Noida](https://www.ryanofficesystems.in/noida/sofa-manufacturers)
- [JustDial, Sofa Set Manufacturers in Noida Sector 9](https://www.justdial.com/Noida/Sofa-Set-Manufacturers-in-Noida-Sector-9/nct-10443093)
- [JustDial, Sofa Dealers in Ghaziabad](https://www.justdial.com/Ghaziabad/Sofa-Dealers/nct-10442993)
- [Urbanwood, Furniture Shop in Gurgaon](https://www.urbanwood.in/furniture-shop-in-gurgaon)
- [Mads Creations, Custom furniture Gurgaon and Delhi](https://madscreations.in/residential/custom-furniture/)
- [ExcelDes, Luxury Custom Bespoke Furniture in Gurgaon](https://exceldes.com/luxury-custom-bespoke-furniture-in-gurgaon/)
- [GetMyCouch, Furniture Online in Gurgaon](https://www.getmycouch.com/pages/furniture-online-in-gurgaon)
- [Innovante Studio, Bespoke Furniture Manufacturers in Gurgaon and Delhi NCR](https://www.innovante.co.in/bespoke-furniture.html)
- [MWM Spaces, Bespoke Furniture Manufacturer in Gurgaon](https://www.mwmspaces.com/services/custom-furniture-manufacturer)
- [TradeIndia, Custom Made Furniture in Gurgaon](https://www.tradeindia.com/gurgaon/custom-made-furniture-city-194726.html)
- [Best of Exports, Furniture Manufacturers in Gurgaon](https://bestofexports.com/gurgaon/)
- [Wooden Street, Sofa Set in Ghaziabad](https://www.woodenstreet.com/sofa-set-in-ghaziabad)
- [IndiaMART, Sofa Set in Ghaziabad](https://dir.indiamart.com/ghaziabad/sofa-set.html)
- [IndiaMART, Wooden Sofa Set in Ghaziabad](https://dir.indiamart.com/ghaziabad/wooden-sofa-set.html)
- [Interior Company, Standard Sofa Sizes](https://shop.interiorcompany.com/blogs/guides/standard-sofa-sizes)
- [Alankaram, Standard Sofa Size Guide for Indian Homes](https://www.alankaram.in/blogs/blogs/standard-sofa-size-guide-for-indian-homes)
- [Wooden Street, The Complete Guide to Sofa Dimensions](https://www.woodenstreet.com/blog/standard-sofa-sizes)
- [Induscraft, How to Choose the Right Sofa Size](https://induscraft.com/blogs/news/how-to-choose-the-right-sofa-size-for-your-living-room)
- [Nismaaya Decor, Best Sofa for Small Living Room in India](https://www.nismaayadecor.in/blogs/news/best-sofa-for-small-living-room-in-india-2026)

---

*End of report. No source file in this project was modified, created or deleted in the course of this audit; this document is the only file written.*
