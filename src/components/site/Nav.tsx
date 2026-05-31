import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#what", label: "Wat het doet" },
  { href: "#how", label: "Hoe het werkt" },
  { href: "#packages", label: "Pakketten" },
  { href: "#support", label: "Support" },
  { href: "#faq", label: "FAQ" },
];

export function Nav({ onOrder }: { onOrder: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:h-[72px]">
        <a href="#top" className="flex items-center gap-2.5" aria-label="ReadyClaw home">
          <span className="h-2 w-2 rounded-full bg-accent dot-pulse" />
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em]">
            Ready<span className="text-accent">Claw</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOrder}
            className="hidden items-center gap-2 bg-foreground px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-background transition-all hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            Bestel <span aria-hidden>→</span>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 p-2 text-foreground md:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOrder();
              }}
              className="mt-3 bg-foreground px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.16em] text-background"
            >
              Bestel →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
