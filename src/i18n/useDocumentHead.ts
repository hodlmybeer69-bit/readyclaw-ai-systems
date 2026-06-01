import { useEffect } from "react";
import { SITE } from "@/config";
import { localeUrl } from "./index";
import type { Dictionary, Locale } from "./types";

/** Upsert a <meta> tag selected by attribute (name/property) = value. */
function setMeta(attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Upsert <link rel="canonical">. */
function setCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Apply per-locale document head: <html lang>, title, description, canonical
 * and the og:* locale fields. Runs in a layout-safe effect so the prerender
 * (which drives the real app) captures the localized head in its snapshot.
 *
 * hreflang alternates are static in index.html (identical on every page), so
 * they are intentionally NOT touched here.
 */
export function useDocumentHead(locale: Locale, t: Dictionary): void {
  useEffect(() => {
    const canonical = localeUrl(SITE.origin, locale);

    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;

    setMeta("name", "description", t.meta.description);
    setCanonical(canonical);

    setMeta("property", "og:locale", t.meta.ogLocale);
    setMeta("property", "og:title", t.meta.ogTitle);
    setMeta("property", "og:description", t.meta.ogDescription);
    setMeta("property", "og:url", canonical);

    setMeta("name", "twitter:title", t.meta.ogTitle);
    setMeta("name", "twitter:description", t.meta.ogDescription);
  }, [locale, t]);
}
