import { PhoneCall, CalendarClock, UserPlus, MessageSquareText, Share2, Languages } from "lucide-react";

const CARDS = [
  {
    icon: PhoneCall,
    title: "Answers every call, 24/7",
    body: "Picks up on the first ring, day or night. Your 24/7 answering service never sleeps, never takes lunch, never puts a caller on hold.",
  },
  {
    icon: CalendarClock,
    title: "Books appointments",
    body: "Checks your availability and schedules the appointment right on the call — straight into your calendar.",
  },
  {
    icon: UserPlus,
    title: "Captures every lead",
    body: "Takes the name, number and reason for the call, then texts or emails you the details before they cool off.",
  },
  {
    icon: MessageSquareText,
    title: "Answers your FAQs",
    body: "Hours, location, pricing, services — the AI voice agent knows your business and answers like your best front-desk hire.",
  },
  {
    icon: Share2,
    title: "Routes & transfers",
    body: "Recognizes urgent or VIP calls and warm-transfers them to you or a teammate, with context.",
  },
  {
    icon: Languages,
    title: "Bilingual EN / ES",
    body: "Greets and serves callers in English or Spanish automatically — a must for local US markets.",
  },
];

export function UsCapabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="reveal max-w-3xl">
          <p className="kicker-rule mono-label text-accent">What it does</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            A complete <span className="italic text-accent">AI answering service</span> that works like your best receptionist.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            One AI voice agent handles the calls your team can't get to — so no opportunity slips
            through to voicemail.
          </p>
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="group bg-card p-7 transition-colors hover:bg-paper-2">
              <c.icon size={22} className="text-accent" />
              <h3 className="mt-5 font-display text-xl tracking-[-0.01em]">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
