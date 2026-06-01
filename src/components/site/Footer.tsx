import { isWhatsAppConfigured, whatsappLink } from "@/config";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;

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
              {f.tagline}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label text-ink-soft">// {f.productHeading}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {f.productLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono-label text-ink-soft">// {f.infoHeading}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {f.infoLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mono-label text-ink-soft">// {f.contactHeading}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {isWhatsAppConfigured && (
                <li>
                  <a
                    href={whatsappLink(f.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {f.whatsApp}
                  </a>
                </li>
              )}
              <li className="text-ink-soft">{f.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft md:flex-row md:items-center md:justify-between">
          <div>{f.copyright}</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {f.closer}
          </div>
        </div>
      </div>
    </footer>
  );
}
