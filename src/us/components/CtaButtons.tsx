import { Phone, CalendarCheck } from "lucide-react";
import { US_PHONE, US_BOOKING_URL } from "../config";
import { track } from "../track";

/**
 * The two primary conversion CTAs, reused in the hero and final band.
 *   - "Call our AI now"  → tel: link, fires call_click
 *   - "Book a demo"      → booking link, fires book_demo
 *
 * `tone` adapts styling to the panel behind the buttons:
 *   - "dark"     → on the dark ink hero
 *   - "onAccent" → on the vermilion final-CTA band
 */
export function CtaButtons({ tone = "dark" }: { tone?: "dark" | "onAccent" }) {
  const onAccent = tone === "onAccent";

  const callClass = onAccent
    ? "bg-ink-deep text-[oklch(0.98_0.01_84)] hover:bg-[oklch(0.99_0.01_84)] hover:text-ink-deep"
    : "bg-accent text-accent-foreground hover:bg-[oklch(0.98_0.01_84)] hover:text-ink-deep";

  const bookClass = onAccent
    ? "border border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10"
    : "border border-[oklch(0.99_0.01_84/0.3)] text-[oklch(0.95_0.01_84)] backdrop-blur-sm hover:border-accent hover:text-accent";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`tel:${US_PHONE.tel}`}
        onClick={() => track("call_click", { location: tone })}
        data-umami-event="call_click"
        className={`group inline-flex items-center gap-2.5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition-all ${callClass}`}
      >
        <Phone size={15} className="transition-transform group-hover:-rotate-12" />
        Call our AI now
      </a>
      <a
        href={US_BOOKING_URL}
        onClick={() => track("book_demo", { location: tone })}
        data-umami-event="book_demo"
        className={`inline-flex items-center gap-2.5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${bookClass}`}
      >
        <CalendarCheck size={15} />
        Book a demo
      </a>
    </div>
  );
}
