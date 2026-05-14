import { Mail, Calendar, FileSearch } from "lucide-react";

const blocks = [
  {
    icon: Mail,
    label: "Email triage",
    title: "Wake up to a sorted inbox.",
    body: "Your AI reads every email overnight, ranks priority, summarizes the rest, and drafts replies for routine messages. You wake up to a 3-minute briefing instead of a 90-minute mess.",
    bullets: ["Top 3 priorities surfaced", "Routine replies pre-drafted", "Noise auto-archived with audit log"],
  },
  {
    icon: Calendar,
    label: "Calendar prep",
    title: "Walk into every meeting prepared.",
    body: "15 minutes before each external meeting, your AI delivers a briefing: company info, recent emails with attendees, prep notes, suggested opening question.",
    bullets: ["Auto-research on external attendees", "Recent communication threaded in", "Specific prep based on meeting type"],
  },
  {
    icon: FileSearch,
    label: "Document Q&A",
    title: "Ask your files anything.",
    body: "Connect Drive, Dropbox, OneDrive, or local folders. Then ask in plain language: 'What does the Acme contract say about cancellation?' Answer in 2 seconds with source.",
    bullets: ["Works on PDFs, Word, Pages, plain text", "Cited answers with direct links", "Local indexing on Jarvis tier"],
  },
];

export function WhatItDoes() {
  return (
    <section className="py-24 md:py-32 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">// What your ReadyClaw does</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
          Three skills that cover <em className="italic font-normal">90%</em> of daily friction.
        </h2>

        <div className="mt-16 space-y-px bg-border border border-border">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-background p-8 md:p-12 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-1">
                  <div className="w-12 h-12 border border-accent text-accent flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {b.label}
                  </div>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl tracking-tight">{b.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{b.body}</p>
                </div>
                <ul className="md:col-span-4 space-y-3 md:border-l md:border-border md:pl-8">
                  {b.bullets.map((bu, j) => (
                    <li key={j} className="flex gap-3 text-sm">
                      <span className="text-accent font-mono">+</span>
                      <span className="text-foreground/90">{bu}</span>
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
