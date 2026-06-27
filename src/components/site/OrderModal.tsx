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
import { isWhatsAppConfigured, whatsappLink } from "@/config";
import { submitFormRelay } from "@/lib/form-relay";
import { useI18n } from "@/i18n/I18nProvider";
import type { Dictionary } from "@/i18n/types";

/** Build the validation schema with localized messages (logic unchanged). */
function makeSchema(t: Dictionary) {
  return z.object({
    name: z.string().trim().min(1, t.order.errors.nameRequired).max(100),
    email: z.string().trim().email(t.order.errors.emailInvalid).max(255),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    has_mac: z.string().max(40),
    mode: z.string().max(40),
    notes: z.string().max(2000).optional().or(z.literal("")),
  });
}

export function OrderModal({
  tier,
  onOpenChange,
}: {
  tier: TierId | null;
  onOpenChange: (open: boolean) => void;
}) {
  const { t } = useI18n();
  const o = t.order;
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

    const parsed = makeSchema(t).safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || "",
      has_mac: fd.get("has_mac"),
      mode: fd.get("mode"),
      notes: fd.get("notes") || "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? o.errors.validation);
      return;
    }

    setSubmitting(true);
    try {
      const sent = await submitFormRelay({
        site: "readyclaw",
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || "",
        message: `BESTELLING — ${o.tierLabels[tier]}

Heeft Mac mini: ${parsed.data.has_mac}
Modus: ${parsed.data.mode}
Notities: ${parsed.data.notes || "—"}`,
      });
      if (!sent) throw new Error(o.errors.unknown);
      setDone(true);
      form.reset();
    } catch {
      setError(o.errors.generic);
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
            {done ? o.doneTitle : `${o.titlePrefix}${tier ? o.tierLabels[tier] : ""}`}
          </DialogTitle>
          <DialogDescription className="text-ink-soft">
            {done ? o.doneDescription : o.formDescription}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground">
              <Check />
            </div>
            <p className="mono-label text-ink-soft">{o.doneHint}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* honeypot — hidden from humans */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <Field label={o.fieldName} name="name" required />
            <Field label={o.fieldEmail} name="email" type="email" required />
            <Field label={o.fieldPhone} name="phone" />
            <Select label={o.fieldHasMac} name="has_mac" options={o.hasMacOptions} />
            <Select label={o.fieldMode} name="mode" options={o.modeOptions} />
            <div>
              <label className="mono-label text-ink-soft">{o.fieldNotes}</label>
              <textarea
                name="notes"
                rows={3}
                className="mt-1.5 w-full border border-input bg-secondary px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>

            {error && <p className="font-mono text-sm text-destructive">{error}</p>}

            <label className="flex items-start gap-2 text-[11px] leading-snug text-muted-foreground/70">
              <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 flex-none" />
              <span>{o.consent}</span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 bg-accent py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-foreground hover:text-background disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> {o.submitting}
                </>
              ) : (
                o.submit
              )}
            </button>

            {isWhatsAppConfigured && (
              <a
                href={whatsappLink(
                  `${o.waMessagePrefix}${tier ? o.tierLabels[tier] : o.waMessageFallback}${o.waMessageSuffix}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-input py-3 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle size={14} /> {o.whatsAppCta}
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
        {options.map((opt) => (
          <option key={opt.v} value={opt.v}>
            {opt.l}
          </option>
        ))}
      </select>
    </div>
  );
}
