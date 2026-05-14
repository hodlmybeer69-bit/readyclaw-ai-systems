import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#packages", label: "Pakketten" },
    { href: "#support", label: "Support" },
    { href: "#how", label: "Hoe werkt het" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
          <span className="w-2 h-2 bg-accent dot-pulse" />
          READYCLAW<span className="text-muted-foreground">/v1</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#packages"
          className="hidden md:inline-flex items-center gap-2 bg-accent text-primary-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider hover:opacity-90"
        >
          Bestel <span aria-hidden>→</span>
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground">
                {l.label}
              </a>
            ))}
            <a href="#packages" onClick={() => setOpen(false)} className="bg-accent text-primary-foreground px-4 py-3 text-center">
              Bestel →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
