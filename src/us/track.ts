/**
 * Conversion event tracking for the US landing.
 *
 * Fires Umami custom events (the Umami script is loaded in index.html). The
 * three day-one conversion events are:
 *   - call_click  → "Call our AI now" tapped (tel: link)
 *   - book_demo   → "Book a demo" tapped
 *   - cta_click   → any other primary CTA (nav order, secondary buttons)
 *
 * Umami also auto-tracks elements carrying `data-umami-event`, so every CTA
 * sets BOTH the attribute (works without JS handlers) and an onClick that calls
 * this helper (works even if attribute auto-tracking is missed). Double-firing
 * is avoided by only calling track() from onClick; the attribute is a fallback
 * that Umami de-dupes per click.
 */

export type ConversionEvent = "call_click" | "book_demo" | "cta_click";

type UmamiGlobal = {
  track: (event: string, data?: Record<string, unknown>) => void;
};

export function track(event: ConversionEvent, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const umami = (window as unknown as { umami?: UmamiGlobal }).umami;
  if (umami && typeof umami.track === "function") {
    umami.track(event, data);
  }
}
