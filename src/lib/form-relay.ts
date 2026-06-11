const FORM_RELAY_ENDPOINT = "https://islasdigital.xyz/api/form";

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
