/**
 * US-site detection.
 *
 * The US landing (AI receptionist) lives at us.readyclaw.vip and is also
 * reachable at the `/us` path on any deployment (so Vercel preview URLs, which
 * are *.vercel.app and cannot carry the subdomain, can still render it).
 *
 * Production: a Vercel host-rewrite serves `dist/us/index.html` at the apex of
 * us.readyclaw.vip, so the browser URL there is `/` — we must detect by HOST.
 * Preview / direct: the URL is `/us`, so we also detect by PATH.
 *
 * This single predicate is shared by both the prerender (which navigates to
 * `/us/`) and the browser (hydration), so the rendered app always matches the
 * markup on both sides.
 */
export const US_HOST = "us.readyclaw.vip";

export function isUsSite(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase();
  return host === US_HOST || path === "/us" || path.startsWith("/us/");
}
