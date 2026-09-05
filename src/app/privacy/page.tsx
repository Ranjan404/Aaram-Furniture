import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { telHref } from "@/lib/contact";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles information when you use this website or contact us.`,
  path: "/privacy",
});

/**
 * TODO(owner): have this reviewed before launch, and update it the moment you
 * add analytics, advertising pixels, a contact form that stores data, or any
 * third-party embed. The statements below describe the site exactly as it is
 * built today: static pages, no accounts, no tracking, no data storage.
 */
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="Draft - pending review">
      <p>
        This page explains what happens to your information when you use this website or get in
        touch with {siteConfig.name}.
      </p>

      <h2>Information this website collects</h2>
      <p>
        This website is a set of static pages. It has no accounts, no login, no shopping cart and
        no database. It does not set cookies, and it does not run analytics or advertising trackers.
        Nothing you type into the enquiry helper is stored on this site: the form simply opens
        WhatsApp with your message ready to send, and you choose whether to send it.
      </p>

      <h2>Information you send us</h2>
      <p>
        When you call or message us, we receive whatever you choose to share, typically your name,
        phone number, room measurements and any photographs or reference designs. We use that only
        to answer your enquiry and to prepare a quote.
      </p>

      <h2>Third parties</h2>
      <ul>
        <li>
          WhatsApp and your phone network handle any messages or calls you make. Their own privacy
          terms apply to those conversations.
        </li>
        <li>
          The site is served by a web host, which may keep standard server logs.
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can ask us to delete the enquiry details you have shared with us at any time. Call or
        message{" "}
        <a href={telHref}>{siteConfig.phone.display}</a> and we will remove
        them.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: call{" "}
        <a href={telHref}>{siteConfig.phone.display}</a>
        {siteConfig.email ? (
          <>
            {" "}or email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </>
        ) : null}
        .
      </p>
    </LegalPage>
  );
}
