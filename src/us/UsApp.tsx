import { useReveal } from "@/hooks/useReveal";
import { useUsHead } from "./useUsHead";
import { UsNav } from "./components/UsNav";
import { UsHero } from "./components/UsHero";
import { UsMarquee } from "./components/UsMarquee";
import { UsProblem } from "./components/UsProblem";
import { UsCapabilities } from "./components/UsCapabilities";
import { UsHowItWorks } from "./components/UsHowItWorks";
import { UsIndustries } from "./components/UsIndustries";
import { UsFaq } from "./components/UsFaq";
import { UsFinalCta } from "./components/UsFinalCta";
import { UsFooter } from "./components/UsFooter";

/**
 * ReadyClaw US — EN-only AI-receptionist landing served at us.readyclaw.vip
 * (and at /us on preview deployments). Shares the ReadyClaw brand/design tokens
 * but is a self-contained page with its own positioning, SEO and conversion
 * events (call_click / book_demo / cta_click).
 */
export function UsApp() {
  useReveal();
  useUsHead();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="grain" aria-hidden />
      <UsNav />
      <main>
        <UsHero />
        <UsMarquee />
        <UsProblem />
        <UsCapabilities />
        <UsHowItWorks />
        <UsIndustries />
        <UsFaq />
        <UsFinalCta />
      </main>
      <UsFooter />
    </div>
  );
}
