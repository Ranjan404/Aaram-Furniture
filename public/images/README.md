# Photography

## Important: the current images are stock photography

Every image in this folder is licence-free stock photography from
[Unsplash](https://unsplash.com), used so the layout could be designed and
reviewed with realistic content.

**They do not show this business's own furniture or completed orders.** Nothing
on the site claims otherwise. Replace them with photographs of real pieces
before promoting the site.

## How to replace an image

Keep the same filename and drop the new file in the same folder. Nothing in the
code needs to change - image paths live in `src/data/*.ts`, and the alt text
sits next to each path.

Filenames describe what is in the picture (`verde-velvet-sofa.jpg`, not
`sofa-02.jpg`) because the filename is one of the signals Google Images uses.
If you rename a file, keep it descriptive and hyphenated, and update the path in
the matching `src/data` entry.

When you change a photograph, **update its `alt` text too**. Alt text describes
what is actually in the picture; leaving the old description in place is worse
than having none.

| Folder | Used by | Suggested size |
| --- | --- | --- |
| `hero/modern-living-room-with-light-sectional-sofa.jpg` | Homepage hero - the single most important image | 2400px wide, landscape |
| `hero/upholstered-bed-linen-detail.jpg` | About section detail tile | 1800px |
| `categories/*.jpg` | Category cards, homepage and `/furniture`. Cropped square on phones, 4:3 above | 1800px |
| `products/sofas/*.jpg` | `/sofas`, homepage sofa row, hero shortcut | 1800px, landscape |
| `products/beds/*.jpg` | `/beds`, homepage bed row, hero shortcut | 1800px, landscape |
| `products/more/*.jpg` | Dining, TV units, wardrobes, chairs on `/furniture` | 1800px |
| `gallery/*.jpg` | Lifestyle gallery, homepage and `/collection` | 1800px, mixed orientation |
| `about/*.jpg` | About section and catalogue panel | 1800px |
| `og-cover.jpg` | Social share card | exactly 1200 x 630 |

Product image filenames follow the product slug, so
`products/sofas/verde-velvet-sofa.jpg` pairs with the "Verde Velvet Sofa" entry
in `src/data/products.ts` and with the `/furniture/verde-velvet-sofa` page.

## Guidelines

- **JPEG, sRGB, quality 80-85.** Next.js re-encodes to AVIF/WebP and resizes per
  device, so a single large source file per image is all that is needed.
- **Landscape unless the table says otherwise.** Cards crop to a fixed ratio, so
  keep the subject away from the extreme edges.
- **Shoot wide.** Room context sells furniture better than an isolated cut-out.
- Source files are capped at 1800px on the long edge (2400px for the hero).
  Anything larger only slows the build down - Next.js resizes per device anyway.

## Blur placeholders

Images fade in from a shared warm placeholder (`src/lib/blur.ts`). It applies to
every photograph automatically, so new images need no extra work.
