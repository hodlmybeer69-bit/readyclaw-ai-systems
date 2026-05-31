import { SITE, isWhatsAppConfigured, whatsappLink } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em]">
                Ready<span className="text-accent">Claw</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-display text-2xl italic leading-snug">
              AI-medewerker, kant-en-klaar.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label text-ink-soft">// Product</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#what" className="link-underline">Wat het doet</a></li>
              <li><a href="#packages" className="link-underline">Pakketten</a></li>
              <li><a href="#how" className="link-underline">Hoe het werkt</a></li>
              <li><a href="#support" className="link-underline">Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label text-ink-soft">// Info</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#faq" className="link-underline">FAQ</a></li>
              <li><a href="#packages" className="link-underline">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mono-label text-ink-soft">// Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {isWhatsAppConfigured && (
                <li>
                  <a
                    href={whatsappLink("Hoi ReadyClaw! Ik heb een vraag.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="text-ink-soft">{SITE.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft md:flex-row md:items-center md:justify-between">
          <div>© 2026 ReadyClaw</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Plug in. Log in. Klaar.
          </div>
        </div>
      </div>
    </footer>
  );
}
