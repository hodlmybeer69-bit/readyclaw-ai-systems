import { Phone, CheckCircle2 } from "lucide-react";

/**
 * A glassy "live call" mockup that sits in the hero — shows the AI receptionist
 * answering an incoming call, transcribing it, and booking an appointment.
 * Pure CSS/React (no image dependency), so it always renders in the prerender
 * snapshot and stays crisp at any size.
 */
export function CallCard() {
  const bars = [0.35, 0.7, 0.45, 0.9, 0.6, 1, 0.5, 0.8, 0.4, 0.75, 0.55, 0.3];

  return (
    <div className="spec-chip relative w-full max-w-sm rounded-lg p-5 shadow-[0_40px_80px_-40px_oklch(0.143_0.012_62/0.7)]">
      {/* call header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
            <Phone size={15} className="text-accent" />
          </span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[oklch(0.7_0.01_84)]">
              Incoming call
            </div>
            <div className="text-sm font-medium text-[oklch(0.95_0.01_84)]">
              Unknown · Mobile
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent dot-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Live
          </span>
        </div>
      </div>

      {/* waveform */}
      <div className="mt-5 flex h-8 items-end gap-1" aria-hidden>
        {bars.map((h, i) => (
          <span
            key={i}
            className="wave-bar w-1 flex-1 rounded-full bg-accent/70"
            style={{ height: `${h * 100}%`, animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>

      {/* transcript */}
      <div className="mt-5 space-y-3 border-t border-[oklch(0.99_0.01_84/0.14)] pt-4 text-sm">
        <p className="text-[oklch(0.8_0.01_84)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[oklch(0.62_0.01_84)]">
            Caller
          </span>
          <br />
          “Hi, are you open Saturday? I need an appointment.”
        </p>
        <p className="text-[oklch(0.95_0.01_84)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            ReadyClaw AI
          </span>
          <br />
          “We are — I can book you Saturday at 10:30. What's your name?”
        </p>
      </div>

      {/* outcome chip */}
      <div className="mt-5 flex items-center gap-2.5 rounded-md bg-[oklch(0.99_0.01_84/0.06)] px-3.5 py-2.5">
        <CheckCircle2 size={16} className="text-accent" />
        <span className="text-sm text-[oklch(0.92_0.01_84)]">
          Appointment booked · lead captured
        </span>
      </div>
    </div>
  );
}
