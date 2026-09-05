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
  },

  // Trailing-slash-free, lowercase URLs keep canonical tags unambiguous.
  trailingSlash: false,

  poweredByHeader: false,
};

export default nextConfig;
