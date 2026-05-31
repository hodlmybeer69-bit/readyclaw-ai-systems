import { useState } from "react";
import { z } from "zod";
import { Check, Loader2, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { TierId } from "@/App";
import {
  WEB3FORMS_ACCESS_KEY,
  isWeb3FormsConfigured,
  isWhatsAppConfigured,
  whatsappLink,
} from "@/config";

const schema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  has_mac: z.string().max(40),
  mode: z.string().max(40),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

const TIER_LABELS: Record<TierId, string> = {
  basic: "Basic — €899",
  custom: "Custom — vanaf €1.199",
  jarvis: "Jarvis — €2.499",
};

export function OrderModal({
  tier,
  onOpenChange,
}: {
  tier: TierId | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!tier) return;
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if ((fd.get("company_website") as string)?.trim()) {
      setDone(true);
      return;
    }

    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || "",
      has_mac: fd.get("has_mac"),
      mode: fd.get("mode"),
      notes: fd.get("notes") || "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Validatiefout");
      return;
    }

    if (!isWeb3FormsConfigured) {
      setError("Bestellingen worden nog gekoppeld. Neem contact op via WhatsApp of het formulier hieronder.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nieuwe ReadyClaw-bestelling — ${TIER_LABELS[tier]}`,
        from_name: "ReadyClaw website",
        tier: TIER_LABELS[tier],
        naam: parsed.data.name,
        email: parsed.data.email,
        telefoon: parsed.data.phone || "—",
        heeft_mac_mini: parsed.data.has_mac,
        modus: parsed.data.mode,
        notities: parsed.data.notes || "—",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Onbekende fout");
      setDone(true);
      form.reset();
    } catch {
      setError("Er ging iets mis. Probeer opnieuw of stuur ons een WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  function close(open: boolean) {
    if (!open) {
      setDone(false);
      setError(null);
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={!!tier} onOpenChange={close}>
      <DialogContent className="max-w-lg border-border bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl tracking-[-0.01em]">
            {done ? "Bestelling ontvangen" : `Bestel ${tier ? TIER_LABELS[tier] : ""}`}
          </DialogTitle>
          <DialogDescription className="text-ink-soft">
            {done
              ? "We nemen binnen 24u contact op."
              : "Vul je gegevens in. Geen verplichting — we mailen eerst."}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground">
              <Check />
            </div>
            <p className="mono-label text-ink-soft">Check je inbox voor de bevestiging</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" action="https://api.web3forms.com/submit">
            {/* honeypot — hidden from humans */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <Field label="Naam" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telefoon (optioneel)" name="phone" />
            <Select
              label="Heb je al een Mac mini?"
              name="has_mac"
              options={[
                { v: "Nee", l: "Nee" },
                { v: "Ja, alleen remote setup", l: "Ja, alleen remote setup" },
                { v: "Weet ik niet", l: "Weet ik niet" },
              ]}
            />
            <Select
              label="Lokaal of cloud?"
              name="mode"
              options={[
                { v: "Lokaal", l: "Lokaal" },
                { v: "Cloud", l: "Cloud" },
                { v: "Hybride", l: "Hybride" },
                { v: "Weet ik niet", l: "Weet ik niet" },
              ]}
            />
            <div>
              <label className="mono-label text-ink-soft">Notities</label>
              <textarea
                name="notes"
                rows={3}
                className="mt-1.5 w-full border border-input bg-secondary px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>

            {error && <p className="font-mono text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 bg-accent py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Bezig…
                </>
              ) : (
                "Verstuur bestelling →"
              )}
            </button>

            {isWhatsAppConfigured && (
              <a
                href={whatsappLink(
                  `Hoi ReadyClaw! Ik wil graag ${tier ? TIER_LABELS[tier] : "een pakket"} bestellen.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-input py-3 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle size={14} /> Liever via WhatsApp
              </a>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mono-label text-ink-soft">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full border border-input bg-secondary px-3 py-2 text-sm outline-none focus:border-accent"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { v: string; l: string }[];
}) {
  return (
    <div>
      <label className="mono-label text-ink-soft">{label}</label>
      <select
        name={name}
        defaultValue={options[0].v}
        className="mt-1.5 w-full border border-input bg-secondary px-3 py-2 text-sm outline-none focus:border-accent"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
    </div>
  );
}
