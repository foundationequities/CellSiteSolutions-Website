/**
 * Site mode — one source of truth for draft vs. live behavior.
 *
 * FAIL-SAFE DIRECTION: the site is DRAFT unless someone explicitly sets
 * NEXT_PUBLIC_LIVE=1. A forgotten environment variable therefore leaves the
 * deployment noindexed and showing draft content, rather than silently
 * publishing an unfinished site to search engines.
 *
 * Draft mode (default):
 *   - robots.txt disallows all + every page carries meta noindex,nofollow
 *   - location pages that are schema-valid but pending human `_verified`
 *     sign-off still RENDER, behind a visible DRAFT PREVIEW banner, because
 *     a reviewer has to see a page to verify it
 *
 * Live mode (NEXT_PUBLIC_LIVE=1, set at domain cutover):
 *   - robots.txt allow-all + segmented sitemaps
 *   - ONLY human-verified location pages render; everything else 404s
 *
 * Sitemaps always list the verified/published set only, in either mode.
 */
export const IS_LIVE = process.env.NEXT_PUBLIC_LIVE === "1";

/** Convenience inverse — true whenever the deployment is a noindexed draft. */
export const IS_DRAFT = !IS_LIVE;
