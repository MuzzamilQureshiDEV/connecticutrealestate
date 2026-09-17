/**
 * Next.js configuration.
 *
 * WHY NEXT.JS (App Router) RATHER THAN VITE:
 *  - This is a 12-page marketing site whose main job is lead capture, so
 *    per-route `metadata` (title/description/OG) matters more than anything
 *    a SPA gives us. The App Router provides that natively.
 *  - Routes code-split on their own, and `next/image` handles responsive
 *    images — both explicit requirements in the brief.
 *  - Server components keep the marketing pages almost JS-free; only the
 *    interactive pieces (nav, filters, forms, carousels) ship as client code.
 *
 * STATIC EXPORT: set NEXT_EXPORT=1 to emit a fully static `out/` folder for
 * GitHub Pages or any static host. Image optimization is disabled in that mode
 * because it needs a server. Set NEXT_BASE_PATH when hosting under a sub-path
 * (e.g. /connecticutrealestate on GitHub Pages).
 */
const isExport = process.env.NEXT_EXPORT === '1';
const basePath = process.env.NEXT_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isExport ? 'export' : undefined,
  basePath: basePath || undefined,
  trailingSlash: isExport ? true : undefined,
  images: {
    unoptimized: isExport,
    remotePatterns: [
      // CLIENT: add the hosts your listing photos are served from.
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
