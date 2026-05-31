import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ProductBand } from "@/components/site/ProductBand";
import { WhatItDoes } from "@/components/site/WhatItDoes";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Packages } from "@/components/site/Packages";
import { Support } from "@/components/site/Support";
import { Founder } from "@/components/site/Founder";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { OrderModal } from "@/components/site/OrderModal";

export type TierId = "basic" | "custom" | "jarvis";

export function App() {
  const [tier, setTier] = useState<TierId | null>(null);
  useReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="grain" aria-hidden />
      <Nav onOrder={() => setTier("custom")} />
      <main>
        <Hero onOrder={() => setTier("custom")} />
        <Marquee />
        <ProductBand />
        <WhatItDoes />
        <HowItWorks />
        <Packages onOrder={setTier} />
        <Support />
        <Founder />
        <Faq />
        <FinalCta onOrder={() => setTier("custom")} />
      </main>
      <Footer />
      <OrderModal tier={tier} onOpenChange={(open) => !open && setTier(null)} />
    </div>
  );
}
