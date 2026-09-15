// Canoniek relay-domein. Hier stond de oude host islasdigital.xyz, die sinds
// 18-8-2026 op domeinniveau 308 naar islas-digital.com staat. Deze POST draagt
// Content-Type: application/json en is dus geen simple request: de browser
// stuurt eerst een preflight OPTIONS, en een preflight volgt NOOIT een redirect.
// Elke inzending eindigde daardoor in een network error, zonder één regel in de
// serverlogs — dezelfde storing die 15-9 een echte SongGift-bestelling kostte.
// Bewaakt door tests/relay-endpoint.test.mjs (`npm test`).
const FORM_RELAY_ENDPOINT = "https://islas-digital.com/api/form";

export interface FormRelayPayload {
  site: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  hp?: string;
}

/** POSTs a submission to the central form relay. Returns true when accepted. */
export async function submitFormRelay(payload: FormRelayPayload): Promise<boolean> {
  const res = await fetch(FORM_RELAY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hp: "", ...payload }),
  }).catch(() => null);
  if (!res || !res.ok) return false;
  const json = await res.json().catch(() => ({ ok: false }));
  return json.ok === true;
}
