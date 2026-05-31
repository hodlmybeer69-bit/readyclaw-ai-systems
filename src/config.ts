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
  email: "hi@readyclaw.com",
  country: "Nederland",
} as const;

/**
 * Web3Forms access key — get a free key at https://web3forms.com.
 * TODO(owner): replace with the real ReadyClaw Web3Forms access key.
 * Until then the order form posts to Web3Forms but is rejected (invalid key).
 */
export const WEB3FORMS_ACCESS_KEY: string = "d19c4d6f-9a16-41be-8576-ac6ca31cfd35";

/**
 * WhatsApp number in international format, digits only (no +, spaces or dashes),
 * e.g. "31612345678". Used for the wa.me pre-filled CTA.
 * TODO(owner): replace with the real ReadyClaw WhatsApp number.
 */
export const WHATSAPP_NUMBER = "34658580436";

export const isWeb3FormsConfigured = WEB3FORMS_ACCESS_KEY !== "TODO_WEB3FORMS_ACCESS_KEY";
export const isWhatsAppConfigured = WHATSAPP_NUMBER.trim().length > 0;

/** Build a pre-filled WhatsApp deep link for a given message. */
export function whatsappLink(message: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
