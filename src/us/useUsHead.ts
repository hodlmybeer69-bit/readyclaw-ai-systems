import { useEffect } from "react";
import { US_SITE, US_PHONE, US_ADDRESS } from "./config";

/**
 * Document head for the EN-only US landing.
 *
 * index.html ships the main-site (readyclaw.vip) head: canonical, hreflang
 * alternates and Organization/Product JSON-LD. On the US page those are wrong,
 * so this hook rewrites the head to a standalone, self-canonical US document:
 *   - <html lang="en">, US title + meta description (target keywords)
 *   - canonical + og:url → https://us.readyclaw.vip/
 *   - strips the main-site hreflang alternates (US page is EN-only standalone)
 *   - replaces all JSON-LD with one Service graph for the AI receptionist
 *
 * Runs in an effect so the prerender (which drives the real app) captures the
 * rewritten head in its /us/index.html snapshot.
 */

const TITLE =
  "AI Receptionist & 24/7 Answering Service for Small Business | ReadyClaw";
const DESCRIPTION =
  "Never miss a call again. ReadyClaw is an AI receptionist and 24/7 answering service — an AI voice agent that answers every call, books appointments and captures leads. The virtual receptionist for small business.";
const OG_TITLE = "Stop losing customers to missed calls — AI Receptionist | ReadyClaw";

function setMeta(attr: "name" | "property", key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function serviceJsonLd(): string {
  const origin = US_SITE.origin;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${origin}/#service`,
    serviceType: "AI receptionist / 24/7 answering service",
    name: "ReadyClaw AI Receptionist",
    description:
      "AI receptionist and 24/7 answering service for local US businesses. An AI voice agent that answers every call, books appointments and captures leads — a virtual receptionist for small business.",
    url: `${origin}/`,
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", name: "Small and local businesses" },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${origin}/#business`,
      name: US_SITE.legalName,
      url: `${origin}/`,
      telephone: US_PHONE.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: US_ADDRESS.street,
        addressLocality: US_ADDRESS.locality,
        addressRegion: US_ADDRESS.region,
        postalCode: US_ADDRESS.postalCode,
        addressCountry: US_ADDRESS.country,
      },
      areaServed: { "@type": "Country", name: "United States" },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${origin}/`,
      category: "AI answering service",
    },
  });
}

export function useUsHead(): void {
  useEffect(() => {
    const origin = US_SITE.origin;
    const canonical = `${origin}/`;

    document.documentElement.lang = "en";
    document.title = TITLE;

    setMeta("name", "description", DESCRIPTION);
    setCanonical(canonical);

    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:title", OG_TITLE);
    setMeta("property", "og:description", DESCRIPTION);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", "ReadyClaw");
    setMeta("name", "twitter:title", OG_TITLE);
    setMeta("name", "twitter:description", DESCRIPTION);

    // Strip main-site hreflang alternates — the US page is a standalone EN doc.
    document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    // Drop og:locale:alternate (NL/ES/DE) — not relevant on the US page.
    document.head
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((el) => el.remove());

    // Replace every JSON-LD block with the single US Service graph.
    document.head
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((el) => el.remove());
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = serviceJsonLd();
    document.head.appendChild(ld);
  }, []);
}
