import { CtaButtons } from "./CtaButtons";
import { US_PHONE } from "../config";

export function UsFinalCta() {
  return (
    <section id="book" className="relative isolate overflow-hidden bg-accent py-24 text-accent-foreground md:py-32">
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background:radial-gradient(circle_at_1px_1px,oklch(0.18_0.01_62)_1px,transparent_0)] [background-size:30px_30px]" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-6 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em]">
          Stop losing customers to missed calls.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-accent-foreground/85">
          Call the AI receptionist right now and hear it answer — or book a 15-minute demo and
          we'll set it up on your number.
        </p>

        <div className="mt-10 flex justify-center">
          <CtaButtons tone="onAccent" />
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-foreground/70">
          Talk to it live: {US_PHONE.display}
        </p>
      </div>
    </section>
  );
}
