import { Phone } from "lucide-react";
import { US_PHONE } from "../config";
import { track } from "../track";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#capabilities", label: "What it does" },
  { href: "#industries", label: "Who it's for" },
  { href: "#faq", label: "FAQ" },
];

export function UsNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[oklch(0.99_0.01_84/0.12)] bg-ink-deep/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-3.5"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="ReadyClaw US home">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.96_0.01_84)]">
            Ready<span className="text-accent">Claw</span>
          </span>
          <span className="ml-1 rounded-sm border border-[oklch(0.99_0.01_84/0.2)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[oklch(0.72_0.01_84)]">
            US
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => track("cta_click", { target: l.href, location: "nav" })}
                data-umami-event="cta_click"
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-[oklch(0.78_0.01_84)] transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${US_PHONE.tel}`}
          onClick={() => track("call_click", { location: "nav" })}
          data-umami-event="call_click"
          className="group inline-flex items-center gap-2 bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-foreground transition-colors hover:bg-[oklch(0.98_0.01_84)] hover:text-ink-deep"
        >
          <Phone size={13} className="transition-transform group-hover:-rotate-12" />
          Call our AI now
        </a>
      </nav>
    </header>
  );
}
