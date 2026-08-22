import { Phone, MapPin } from "lucide-react";
import { US_PHONE, formatUsAddress, US_BOOKING_URL } from "../config";
import { track } from "../track";

export function UsFooter() {
  const year = new Date().getFullYear();

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
              The AI receptionist that never misses a call.
            </p>
          </div>

          {/* NAP — keep identical to config.ts / Service JSON-LD */}
          <div className="md:col-span-4">
            <div className="mono-label text-ink-soft">// Contact</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${US_PHONE.tel}`}
                  onClick={() => track("call_click", { location: "footer" })}
                  data-umami-event="call_click"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <Phone size={14} className="text-accent" />
                  {US_PHONE.display}
                </a>
              </li>
              <li className="flex items-start gap-2 text-ink-soft">
                <MapPin size={14} className="mt-0.5 text-accent" />
                <span>
                  ReadyClaw
                  <br />
                  {formatUsAddress()}
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mono-label text-ink-soft">// Get started</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={US_BOOKING_URL}
                  onClick={() => track("book_demo", { location: "footer" })}
                  data-umami-event="book_demo"
                  className="link-underline"
                >
                  Book a demo
                </a>
              </li>
              <li>
                <a href="#capabilities" className="link-underline">
                  What it does
                </a>
              </li>
              <li>
                <a href="#faq" className="link-underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft md:flex-row md:items-center md:justify-between">
          <div>© {year} ReadyClaw · AI receptionist & 24/7 answering service</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Serving small businesses across the United States
          </div>
        </div>
      </div>
    </footer>
  );
}
