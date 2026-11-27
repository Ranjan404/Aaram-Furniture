import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without it, Next walks up the
  // filesystem looking for a lockfile and can pick one outside the repo.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },

  images: {
    // Modern formats first; next/image falls back automatically.
    formats: ["image/avif", "image/webp"],
    // Every photograph is served from /public, so no remote patterns are
    // needed. Add `remotePatterns` here if imagery ever moves to a CDN.
    //
    // `qualities` is deliberately unset, which in Next 16 means [75]. A
    // `quality` prop outside the allowed list is silently coerced to the
    // nearest allowed value, so the components no longer pass one - a prop
    // asking for 88 that is served at 75 is worse than no prop at all. To make
    // per-image quality real again, list the values here first.
  },

  // Trailing-slash-free, lowercase URLs keep canonical tags unambiguous.
  trailingSlash: false,

  poweredByHeader: false,

  /**
   * Retired URLs. Both were live and in the sitemap during the Diwali 2026
   * campaign, so they may be indexed or shared; a permanent redirect to the
   * closest evergreen page passes that on instead of serving a 404.
   */
  async redirects() {
    return [
      { source: "/diwali-furniture", destination: "/furniture", permanent: true },
      { source: "/blog/diwali-furniture-planning-guide", destination: "/blog", permanent: true },
    ];
  },

  /**
   * Baseline security headers.
   *
   * These are NOT the canonical-host fix. Enforcing one host and one scheme
   * (www vs non-www, http to https) has to happen at the hosting layer as a
   * 301, before Next sees the request: a redirect written here would still
   * answer the non-canonical host with a 200 on some setups, which is what
   * splits a site's link equity across two hostnames. After deploying, confirm
   * with `curl -I` that the non-canonical form returns 301 and not 200.
   *
   * `Strict-Transport-Security` is deliberately absent for the same reason: it
   * belongs on the host that terminates TLS, and setting it before the https
   * redirect is in place can lock visitors out of a misconfigured domain.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // The site frames nothing and should never be framed.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Send the origin to other sites, the full URL within this one, so
          // referral traffic stays attributable without leaking paths.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // No camera, microphone or geolocation is used anywhere.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
