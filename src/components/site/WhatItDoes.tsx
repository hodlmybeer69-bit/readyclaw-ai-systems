import { Mail, CalendarClock, FileSearch } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

// Icons stay in the component (structural), paired with the dictionary blocks by index.
const ICONS = [Mail, CalendarClock, FileSearch];

export function WhatItDoes() {
  const { t } = useI18n();
  const w = t.what;

  return (
    <section id="what" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Photographic header: editorial heading + framed product still */}
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal">
            <p className="kicker-rule mono-label text-accent">{w.kicker}</p>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.015em]">
              {w.headline.before}
              <span className="italic text-accent">{w.headline.emphasis}</span>
              {w.headline.after}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              {w.body}
            </p>
          </div>

          <div className="reveal img-frame img-zoom tick-corners aspect-[4/3] md:aspect-[5/4]">
            <img
              src="/img/macmini-topdown.jpg"
              alt={w.imgAlt}
              width={1400}
              height={1120}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          {w.blocks.map((b, idx) => {
            const Icon = ICONS[idx] ?? Mail;
            return (
              <div
                key={b.n}
                className="reveal group grid gap-6 border-t border-border py-10 transition-colors hover:bg-card md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="flex items-start gap-5 md:col-span-5">
                  <div className="font-display text-5xl leading-none text-accent transition-transform group-hover:-translate-y-1 md:text-6xl">
                    {b.n}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 text-foreground">
                      <Icon size={16} className="text-accent" />
                      <span className="mono-label text-ink-soft">{b.label}</span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl leading-tight tracking-[-0.01em] md:text-4xl">
                      {b.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-ink-soft md:col-span-4">{b.body}</p>

                <ul className="space-y-3 md:col-span-3 md:border-l md:border-border md:pl-8">
                  {b.bullets.map((bu, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <span className="font-mono text-accent">+</span>
                      <span className="text-foreground/85">{bu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
