/**
 * ReadyClaw US (AI receptionist) configuration.
 *
 * Values marked `TODO(owner)` are real-world contact details that must NOT be
 * invented. They are deliberately obvious placeholders until Simon provides
 * the live US phone number, Miami address and booking link. The page builds
 * and renders fine; the affected CTA is simply inert/placeholder until filled.
 *
 * Keep NAP (Name, Address, Phone) identical here, in the footer and in the
 * Service JSON-LD (see useUsHead.ts) so local-SEO citations stay consistent.
 */

export const US_SITE = {
  name: "ReadyClaw",
  origin: "https://us.readyclaw.vip",
  legalName: "ReadyClaw",
} as const;

/**
 * Live US phone number for the "Call our AI now" CTA.
 * `tel` is digits + leading +1 (used in the tel: href).
 * `display` is the human-readable form shown in the UI / footer.
 * TODO(owner): replace both with the real provisioned US number.
 */
export const US_PHONE = {
  tel: "+10000000000",
  display: "+1 (000) 000-0000",
} as const;

/**
 * Miami business address (NAP). Shown in the footer and Service JSON-LD.
 * TODO(owner): replace with the real registered Miami address.
 */
export const US_ADDRESS = {
  street: "000 Example Ave, Suite 000",
  locality: "Miami",
  region: "FL",
  postalCode: "33101",
  country: "US",
} as const;

/**
 * "Book a demo" destination. Until a real Calendly/booking URL exists, this
 * scrolls to the contact band so the CTA is never a dead link.
 * TODO(owner): replace with the real booking URL (e.g. Calendly).
 */
export const US_BOOKING_URL = "#book";

export const isUsPhoneConfigured = !/0{6,}/.test(US_PHONE.tel);
export const isUsBookingConfigured = /^https?:\/\//.test(US_BOOKING_URL);

/** Single-line address used in footer / structured data. */
export function formatUsAddress(): string {
  const a = US_ADDRESS;
  return `${a.street}, ${a.locality}, ${a.region} ${a.postalCode}`;
}
