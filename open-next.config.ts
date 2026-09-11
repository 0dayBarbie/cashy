import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Dummy cache is enough for the first workers.dev deploy.
// Add R2 + uncomment the binding in wrangler.jsonc for ISR/data-cache persistence:
// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
// export default defineCloudflareConfig({ incrementalCache: r2IncrementalCache });
export default defineCloudflareConfig();
