import { LOCALES, DEFAULT_LOCALE, type Locale, type Dictionary } from "./types";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { nl } from "./locales/nl";
import { de } from "./locales/de";

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Dictionary };

/** Locale → full dictionary. */
export const dictionaries: Record<Locale, Dictionary> = { en, es, nl, de };

/**
 * Determine the active locale from a URL path.
 *
 * EN is the DEFAULT and lives at the site root (`/`). The other three locales
 * are served under a one-segment prefix (`/es`, `/nl`, `/de`). Anything else
 * (including `/`) resolves to EN. This is the single source of truth shared by
 * both the prerender (server-side navigation) and the browser (hydration), so
 * the rendered language always matches the URL.
 */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.replace(/^\/+/, "").split("/")[0]?.toLowerCase();
  return (LOCALES as readonly string[]).includes(seg) && seg !== DEFAULT_LOCALE
    ? (seg as Locale)
    : DEFAULT_LOCALE;
}

/** Build the root path for a locale: EN → "/", others → "/<locale>/". */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}

/** Absolute canonical URL for a locale, given the site origin. */
export function localeUrl(origin: string, locale: Locale): string {
  return `${origin.replace(/\/$/, "")}${localePath(locale)}`;
}
