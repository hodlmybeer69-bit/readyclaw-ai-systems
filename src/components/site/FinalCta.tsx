import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE, isWhatsAppConfigured, whatsappLink } from "@/config";

const WA_MESSAGE =
  "Hoi ReadyClaw! Ik heb interesse in een pre-configured AI-medewerker op Mac mini. Kunnen jullie me meer vertellen?";

export function FinalCta({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="bg-ink-deep py-24 text-[oklch(0.93_0.01_84)] md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mono-label text-accent">// Klaar om te beginnen?</p>
            <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-[oklch(0.98_0.01_84)]">
              Plug in. Log in. <span className="italic text-accent">Klaar.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[oklch(0.74_0.01_84)]">
              Stel je vragen of bestel direct. Geen verplichting — we mailen altijd eerst en denken
              mee over wat bij jouw werk past.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-5">
            <button
              onClick={onOrder}
              className="group inline-flex items-center justify-between gap-3 bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] text-accent-foreground transition-all hover:bg-[oklch(0.98_0.01_84)] hover:text-ink-deep"
            >
              Kies je pakket
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            {isWhatsAppConfigured && (
              <a
                href={whatsappLink(WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 border border-[oklch(0.99_0.01_84/0.25)] px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[oklch(0.93_0.01_84)] transition-colors hover:border-accent hover:text-accent"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MessageCircle size={16} /> Stuur een WhatsApp
                </span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            )}

            <a
              href={`mailto:${SITE.email}`}
              className="group inline-flex items-center justify-between gap-3 border border-[oklch(0.99_0.01_84/0.25)] px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[oklch(0.93_0.01_84)] transition-colors hover:border-accent hover:text-accent"
            >
              {SITE.email}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
