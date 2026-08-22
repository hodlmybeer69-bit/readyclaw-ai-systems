import { PhoneMissed } from "lucide-react";

const POINTS = [
  "Voicemail is where leads go to die — most callers hang up and dial the next business.",
  "After-hours and lunch-rush calls are the ones you never even see.",
  "A human answering service is expensive, and still puts callers on hold.",
];

export function UsProblem() {
  return (
    <section className="border-b border-border bg-paper-2 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-12">
        <div className="reveal md:col-span-5">
          <p className="kicker-rule mono-label text-accent">The cost of a missed call</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-[-0.015em]">
            Every missed call is a customer calling your{" "}
            <span className="italic text-accent">competitor.</span>
          </h2>
        </div>

        <div className="reveal md:col-span-7">
          <ul className="space-y-6">
            {POINTS.map((p, i) => (
              <li key={i} className="flex items-start gap-4 border-b border-border pb-6">
                <PhoneMissed size={20} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-lg leading-relaxed text-ink-soft">{p}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-2xl italic leading-snug">
            ReadyClaw answers every one of them — instantly, around the clock.
          </p>
        </div>
      </div>
    </section>
  );
}
