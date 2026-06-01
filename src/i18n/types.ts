import type { TierId } from "@/App";

/**
 * The full content surface of the ReadyClaw site, in one language.
 *
 * Every user-facing string lives here so the components stay purely structural.
 * All four locale files (`en`, `es`, `nl`, `de`) implement this exact shape —
 * TypeScript therefore guarantees no locale is missing a key (no placeholders,
 * no silent fallbacks). Prices, package ids, the WhatsApp number and the
 * Web3Forms payload field-keys deliberately live OUTSIDE this dictionary in
 * `config.ts` / the components, so translation can never touch them.
 */
export interface Dictionary {
  /** Document-head metadata. `htmlLang`/`ogLocale` drive <html lang> + og:locale. */
  meta: {
    htmlLang: string;
    ogLocale: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };

  /** Visible labels for the four selectable languages (shown in the switcher). */
  languageNames: Record<Locale, string>;

  nav: {
    homeAria: string;
    menuAria: string;
    languageAria: string;
    order: string;
    links: { href: string; label: string }[];
  };

  hero: {
    imgAlt: string;
    chip: string;
    headline: { line1: string; emphasis: string; rest: string };
    body: string;
    ctaPackage: string;
    ctaHow: string;
    quote: string;
    quoteCaption: string;
    stats: { v: string; l: string }[];
  };

  marquee: string[];

  product: {
    kicker: string;
    imgAlt: string;
    headline: { before: string; emphasis: string; after: string };
    body: string;
    specs: { k: string; v: string }[];
  };

  what: {
    kicker: string;
    headline: { before: string; emphasis: string; after: string };
    body: string;
    imgAlt: string;
    blocks: { n: string; label: string; title: string; body: string; bullets: string[] }[];
  };

  how: {
    kicker: string;
    headline: { before: string; emphasis: string; after: string };
    note: string;
    steps: { n: string; t: string; d: string }[];
  };

  packages: {
    kicker: string;
    headline: { before: string; emphasis: string; after: string };
    body: string;
    mostChosen: string;
    footnote: string;
    /** The word that precedes a "starting from" price (e.g. "from"/"vanaf"). */
    fromPrice: string;
    /** Per-tier copy. `price` is intentionally absent — it stays in the component. */
    tiers: Record<TierId, { tagline: string; priceNote: string; hardware: string; features: string[]; cta: string }>;
  };

  support: {
    kicker: string;
    headline: { before: string; emphasis: string; after: string };
    body: string;
    monthly: string;
    yearly: string;
    yearlyBadge: string;
    perYear: string;
    perMonth: string;
    tiers: { id: string; name: string; features: string[] }[];
  };

  founder: {
    imgAlt: string;
    nameTag: string;
    roleTag: string;
    kicker: string;
    quote: string;
    paragraphs: string[];
    signature: string;
    cta: string;
    waMessage: string;
  };

  faq: {
    kicker: string;
    headline: { before: string; emphasis: string; after: string };
    items: { q: string; a: string }[];
  };

  finalCta: {
    kicker: string;
    headline: { before: string; emphasis: string; after: string };
    body: string;
    ctaPackage: string;
    ctaWhatsApp: string;
    waMessage: string;
  };

  footer: {
    tagline: string;
    productHeading: string;
    infoHeading: string;
    contactHeading: string;
    productLinks: { href: string; label: string }[];
    infoLinks: { href: string; label: string }[];
    whatsApp: string;
    waMessage: string;
    country: string;
    copyright: string;
    closer: string;
  };

  order: {
    tierLabels: Record<TierId, string>;
    titlePrefix: string;
    doneTitle: string;
    doneDescription: string;
    formDescription: string;
    doneHint: string;
    fieldName: string;
    fieldEmail: string;
    fieldPhone: string;
    fieldHasMac: string;
    fieldMode: string;
    fieldNotes: string;
    hasMacOptions: { v: string; l: string }[];
    modeOptions: { v: string; l: string }[];
    submit: string;
    submitting: string;
    whatsAppCta: string;
    waMessagePrefix: string;
    waMessageSuffix: string;
    waMessageFallback: string;
    errors: {
      nameRequired: string;
      emailInvalid: string;
      validation: string;
      notConfigured: string;
      generic: string;
      unknown: string;
    };
    emailSubjectPrefix: string;
  };
}

/** The four supported locales, in switcher display order. EN is the default. */
export const LOCALES = ["en", "es", "nl", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
