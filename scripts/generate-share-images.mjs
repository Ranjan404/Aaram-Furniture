/**
 * Generates the 1200x630 social share cards under `public/images/share/`.
 *
 *   node scripts/generate-share-images.mjs        (or: npm run share-images)
 *
 * WHY THESE EXIST
 * A share card is laid out at roughly 1.91:1. The content photography in this
 * project is every shape from 1.78:1 to 0.67:1 portrait, so pointing the share
 * metadata straight at it hands Facebook, LinkedIn and WhatsApp a picture they
 * then centre-crop to a horizontal slice of its middle. These derivatives give
 * every page a card of the right shape while the page itself keeps the
 * full-resolution original.
 *
 * FILENAMES ARE A CONTRACT
 * `src/data/products.ts` and `src/data/blog/index.ts` attach each item's
 * `shareImage` by convention from its slug, so the names below must keep
 * matching. Add a product or an article, then re-run this script.
 *
 * TREATMENT
 * A source at 1.45:1 or wider is cropped to fill, positioned by sharp's
 * attention strategy. Anything squarer or taller is laid whole onto the site's
 * cream field instead: those cannot be cropped that hard without discarding
 * the subject, and every `alt` string describes the whole photograph.
 *
 * This is a mechanical crop, not art direction. Section 31.4 of
 * SEO_AUDIT_AND_LOCAL_SEO_PLAN.md specifies the designed set that should
 * eventually replace it - own photography, a discreet wordmark on the page
 * cards, and no text at all on the article and product cards.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUB = path.join(ROOT, "public");

const W = 1200;
const H = 630;
/** --color-cream from globals.css. */
const CREAM = "#f5f1ea";
/** At or above this source ratio, crop to fill; below it, use the cream field. */
const CROP_ABOVE = 1.45;

/** Mirrors `slugify()` in src/lib/slug.ts. */
function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* The data files are TypeScript, so they are read as text rather than imported.
   Both patterns are anchored on the shape the files actually have; a parse miss
   throws rather than silently skipping an item. */

function blogJobs() {
  const dir = path.join(ROOT, "src/data/blog/posts");
  return fs.readdirSync(dir).sort().map((file) => {
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    // Stop at `blocks:`, below which an article may contain further images.
    const head = source.slice(0, source.indexOf("blocks:"));
    const slug = head.match(/slug:\s*"([^"]+)"/)?.[1];
    const image = head.match(/image:\s*\{\s*src:\s*"([^"]+)"/)?.[1];
    if (!slug || !image) throw new Error(`Could not read slug and image from ${file}`);
    return { source: image, out: `/images/share/blog/${slug}.jpg` };
  });
}

function productJobs() {
  const source = fs.readFileSync(path.join(ROOT, "src/data/products.ts"), "utf8");
  const pattern = /name:\s*"([^"]+)",[\s\S]*?image:\s*\{\s*src:\s*"([^"]+)"/g;
  const jobs = [];
  for (const [, name, image] of source.matchAll(pattern)) {
    jobs.push({ source: image, out: `/images/share/products/${slugify(name)}.jpg` });
  }
  if (!jobs.length) throw new Error("No products parsed from src/data/products.ts");
  return jobs;
}

/** Route cards. Keep in step with `pageShareCards` in src/data/share-cards.ts. */
const pageSources = {
  sofas: "/images/categories/beige-l-shape-sectional-sofa.jpg",
  beds: "/images/categories/modern-king-bed-with-panelled-headboard.jpg",
  furniture: "/images/gallery/open-plan-living-and-dining-room.jpg",
  collection: "/images/gallery/grey-sofa-and-media-wall-living-room.jpg",
  blog: "/images/categories/light-living-room-with-grey-sofa.jpg",
  contact: "/images/gallery/lounge-seating-in-brick-walled-space.jpg",
  about: "/images/about/contemporary-furniture-showroom-lounge.jpg",
  "custom-furniture": "/images/about/furniture-workshop-craftsmanship.jpg",
};

const jobs = [
  ...blogJobs(),
  ...productJobs(),
  ...Object.entries(pageSources).map(([key, source]) => ({
    source,
    out: `/images/share/pages/${key}.jpg`,
  })),
];

let bytes = 0;

for (const job of jobs) {
  const inFile = path.join(PUB, job.source);
  if (!fs.existsSync(inFile)) throw new Error(`Missing source image: ${job.source}`);

  const outFile = path.join(PUB, job.out);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const { width, height } = await sharp(inFile).metadata();
  const crop = width / height >= CROP_ABOVE;

  await (crop
    ? sharp(inFile).resize(W, H, { fit: "cover", position: sharp.strategy.attention })
    : sharp(inFile).resize(W, H, { fit: "contain", background: CREAM })
  )
    .jpeg({ quality: 82, progressive: true, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(outFile);

  const size = fs.statSync(outFile).size;
  bytes += size;
  console.log(
    `${job.out.padEnd(60)} ${String(Math.round(size / 1024)).padStart(4)} KB  ` +
      `${crop ? "crop " : "field"}  <- ${job.source} (${width}x${height})`,
  );
}

console.log(`\n${jobs.length} cards, ${Math.round(bytes / 1024)} KB total.`);
