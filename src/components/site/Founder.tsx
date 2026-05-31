import { ArrowRight } from "lucide-react";
import { SITE } from "@/config";

export function Founder() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 md:grid-cols-12">
        {/* Monogram / signature tile */}
        <div className="reveal md:col-span-4">
          <div className="relative aspect-square bg-ink-deep">
            <div className="absolute inset-0 glow-warm opacity-60" aria-hidden />
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <span className="mono-label text-[oklch(0.7_0.01_84)]">// Founder</span>
              <span className="font-display text-[12rem] leading-[0.7] text-[oklch(0.97_0.01_84)]">
                R<span className="text-accent">.</span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[oklch(0.72_0.01_84)]">
                Robbie — ReadyClaw
              </span>
            </div>
          </div>
        </div>

        <div className="reveal md:col-span-8">
          <p className="mono-label text-accent">// Van de oprichter</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,3.6vw,3.2rem)] italic leading-[1.1] tracking-[-0.01em]">
            "I built this because I was tired of seeing smart people lose to AI."
          </h2>

          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Drie maanden geleden zat ik te worstelen met API-keys, n8n-workflows en prompt
              engineering — en ik ben technisch. Ik dacht: als dit voor mij al lastig is, hoe moet
              een gewone ondernemer dit ooit aan de praat krijgen?
            </p>
            <p>
              Antwoord: dat doen ze niet. Ze blijven hangen op ChatGPT en komen nooit verder.
              Ondertussen gaat AI gewoon door zonder hen.
            </p>
            <p>
              ReadyClaw is het antwoord dat ik wenste dat bestond. Een Mac mini, pre-configured.
              Plug in. Log in. Klaar. Geen abonnementen, geen consultants, geen leercurve.
            </p>
            <p className="text-foreground">Klinkt als waar je op wachtte? Laten we praten.</p>
          </div>

          <p className="mt-7 font-display text-xl italic">— Robbie, Founder</p>

          <a
            href={`mailto:${SITE.email}?subject=15-min%20demo`}
            className="group mt-8 inline-flex items-center gap-2.5 border border-foreground px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-all hover:bg-foreground hover:text-background"
          >
            Boek een 15-min demo
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
