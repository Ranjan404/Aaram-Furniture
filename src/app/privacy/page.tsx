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
 * add advertising pixels, a contact form that stores data, or any third-party
 * embed. The analytics paragraphs are driven by `siteConfig.googleAnalyticsId`,
 * so they appear exactly when Google Analytics is loaded and not otherwise.
 */
export default function PrivacyPage() {
  const analytics = Boolean(siteConfig.googleAnalyticsId);

  return (
    <LegalPage title="Privacy policy" updated="Draft - pending review">
      <p>
        This page explains what happens to your information when you use this website or get in
        touch with {siteConfig.name}.
      </p>

      <h2>Information this website collects</h2>
      <p>
        This website is a set of static pages. It has no accounts, no login, no shopping cart and
        no database.{" "}
        {analytics
          ? "It uses Google Analytics to understand how visitors use the site, as described below. It does not run advertising trackers."
          : "It does not set cookies, and it does not run analytics or advertising trackers."}{" "}
        Nothing you type into the enquiry helper is stored on this site: the form simply opens
        WhatsApp with your message ready to send, and you choose whether to send it.
      </p>

      {analytics ? (
        <>
          <h2>Analytics and cookies</h2>
          <p>
            We use Google Analytics, a service provided by Google, to count visits and see which
            pages are read, so we can improve the site. It sets first-party cookies (named{" "}
            <code>_ga</code> and <code>_ga_*</code>) in your browser and collects information such
            as the pages you view, how long you stay, the site that referred you, your approximate
            location (derived from your IP address), and your device, browser and screen size. We do
            not use it to identify you personally, and we do not combine it with the details you
            send us by phone or WhatsApp.
          </p>
          <p>
            Google processes this information under its own terms and privacy policy (
            <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
              policies.google.com/privacy
            </a>
            ). You can refuse or delete these cookies in your browser settings, or stop Google
            Analytics on every site by installing Google&rsquo;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              rel="noopener noreferrer"
              target="_blank"
            >
              opt-out browser add-on
            </a>
            . The site works the same either way.
          </p>
        </>
      ) : null}

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
        {analytics ? (
          <li>Google provides the analytics service described above.</li>
        ) : null}
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
