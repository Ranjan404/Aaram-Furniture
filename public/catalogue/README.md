# Product catalogue

Put the real catalogue PDF in this folder, then switch the site over to it.

## Steps

1. Save the PDF here as exactly:

   ```
   public/catalogue/product-catalogue.pdf
   ```

2. Open `src/config/site.ts` and set:

   ```ts
   catalogue: {
     available: true,   // <- change false to true
     ...
   }
   ```

That is the only change needed. Every "Download catalogue" button in the header,
hero area, catalogue section, contact section, product pages and footer switches
from the WhatsApp fallback to a direct download of this file.

## Why the fallback exists

Until a real PDF is added, `available` stays `false` and every catalogue button
opens WhatsApp with a pre-filled catalogue request instead. Nothing on the site
links to a file that does not exist, so there are no broken downloads.

## Renaming the file

If you want a different download filename, update both `path` and
`downloadName` in `src/config/site.ts`.
