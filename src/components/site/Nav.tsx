import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav({ onOrder }: { onOrder: () => void }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // At the very top the nav sits over the dark photographic hero → light text.
  // Once scrolled it gets a paper bar with ink text.
  const link = scrolled ? "text-ink-soft hover:text-foreground" : "text-[oklch(0.85_0.01_84)] hover:text-white";
  const wordmark = scrolled ? "text-foreground" : "text-[oklch(0.97_0.01_84)]";
  const orderBtn = scrolled
    ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
    : "bg-[oklch(0.97_0.01_84)] text-ink-deep hover:bg-accent hover:text-accent-foreground";
  const burger = scrolled ? "text-foreground" : "text-[oklch(0.95_0.01_84)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:h-[72px]">
        <a href="#top" className="flex items-center gap-2.5" aria-label={t.nav.homeAria}>
          <span className="h-2 w-2 rounded-full bg-accent dot-pulse" />
          <span className={`font-mono text-[13px] font-semibold uppercase tracking-[0.18em] ${wordmark}`}>
            Ready<span className="text-accent">Claw</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${link}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSwitcher inactiveClass={link} />
          </div>
          <button
            onClick={onOrder}
            className={`hidden items-center gap-2 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all md:inline-flex ${orderBtn}`}
          >
            {t.nav.order} <span aria-hidden>→</span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`-mr-2 p-2 md:hidden ${burger}`}
            aria-label={t.nav.menuAria}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft"
              >
                {l.label}
              </a>
            ))}
            <div className="border-b border-border py-3">
              <LanguageSwitcher inactiveClass="text-ink-soft hover:text-foreground" layout="stack" />
            </div>
            <button
              onClick={() => {
                setOpen(false);
                onOrder();
              }}
              className="mt-3 bg-foreground px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.16em] text-background"
            >
              {t.nav.order} →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
