import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Check, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  has_mac: z.string().max(40),
  mode: z.string().max(40),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

const tierLabels: Record<string, string> = {
  basic: "Basic — €899",
  custom: "Custom — vanaf €1.199",
  jarvis: "Jarvis — €2.499",
};

export function OrderModal({
  tier,
  onOpenChange,
}: {
  tier: "basic" | "custom" | "jarvis" | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!tier) return;
    setError(null);
    const fd = new FormData(e.currentTarget);
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
    setSubmitting(true);
    const { error: insertErr } = await supabase.from("orders").insert({
      tier,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      has_mac: parsed.data.has_mac,
      mode: parsed.data.mode,
      notes: parsed.data.notes || null,
    });
    setSubmitting(false);
    if (insertErr) {
      setError("Er ging iets mis. Probeer opnieuw of mail hi@readyclaw.com");
      return;
    }
    setDone(true);
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
      <DialogContent className="bg-background border-border max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {done ? "Bestelling ontvangen" : "Bestel " + (tier ? tierLabels[tier] : "")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {done
              ? "We nemen binnen 24u contact op."
              : "Vul je gegevens in. Geen verplichting — we mailen eerst."}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="py-6 flex flex-col items-center gap-4 text-center">
            <div className="w-12 h-12 bg-accent text-primary-foreground flex items-center justify-center">
              <Check />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Check je inbox voor bevestiging
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Naam" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Telefoon (optioneel)" name="phone" />
            <Select label="Heb je al een Mac mini?" name="has_mac" options={[
              { v: "no", l: "Nee" },
              { v: "yes_remote", l: "Ja, alleen remote setup" },
              { v: "unsure", l: "Weet ik niet" },
            ]} />
            <Select label="Lokaal of cloud?" name="mode" options={[
              { v: "local", l: "Lokaal" },
              { v: "cloud", l: "Cloud" },
              { v: "hybrid", l: "Hybride" },
              { v: "unsure", l: "Weet ik niet" },
            ]} />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Notities
              </label>
              <textarea
                name="notes"
                rows={3}
                className="mt-1 w-full bg-secondary border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive font-mono">{error}</p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-primary-foreground py-3 font-mono text-xs uppercase tracking-wider hover:opacity-90 disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {submitting ? <><Loader2 size={14} className="animate-spin" /> Bezig…</> : "Verstuur bestelling →"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full bg-secondary border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: { v: string; l: string }[] }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue={options[0].v}
        className="mt-1 w-full bg-secondary border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>{o.l}</option>
        ))}
      </select>
    </div>
  );
}
