import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Packages } from "@/components/site/Packages";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhatItDoes } from "@/components/site/WhatItDoes";
import { Support } from "@/components/site/Support";
import { Founder } from "@/components/site/Founder";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { OrderModal } from "@/components/site/OrderModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [tier, setTier] = useState<"basic" | "custom" | "jarvis" | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain" />
      <Nav />
      <main>
        <Hero />
        <Packages onOrder={setTier} />
        <HowItWorks />
        <WhatItDoes />
        <Support />
        <Founder />
        <Faq />
      </main>
      <Footer />
      <OrderModal tier={tier} onOpenChange={(o) => !o && setTier(null)} />
    </div>
  );
}
