/**
 * ReadyClaw site configuration.
 *
 * Values marked `TODO` are real-world secrets/ids that must NOT be invented.
 * They are deliberately left as obvious placeholders until the owner provides
 * them. The build still works; the affected integration is inert until filled.
 */

export const SITE = {
  name: "ReadyClaw",
  origin: "https://readyclaw.vip",
  country: "Nederland",
} as const;


/**
 * WhatsApp number in international format, digits only (no +, spaces or dashes),
 * e.g. "31612345678". Used for the wa.me pre-filled CTA.
 * TODO(owner): replace with the real ReadyClaw WhatsApp number.
 */
export const WHATSAPP_NUMBER = "34658580436";

export const isWhatsAppConfigured = WHATSAPP_NUMBER.trim().length > 0;

/** Build a pre-filled WhatsApp deep link for a given message. */
export function whatsappLink(message: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
