import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const APEX_ORIGIN = "https://cashyslegacy.org";
// Next.js lowercases Host and strips the port before matching this regex.
const WWW_HOST = "www\\.cashyslegacy\\.org";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Host redirect lives here (not proxy.ts/middleware): Next.js 16 proxy is
  // Node-only, and @opennextjs/cloudflare does not yet support Node middleware.
  // next.config redirects run in the OpenNext Worker routing layer. Query
  // strings are forwarded automatically.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: WWW_HOST }],
        destination: `${APEX_ORIGIN}/:path*`,
        statusCode: 301,
      },
    ];
  },
}

export default nextConfig

initOpenNextCloudflareForDev();
