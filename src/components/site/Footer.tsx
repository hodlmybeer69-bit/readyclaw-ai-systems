import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-2xl">
              ReadyClaw<span className="text-accent">.</span>
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              AI-medewerker, kant-en-klaar.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">// Product</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#packages" className="hover:text-accent">Pakketten</a></li>
              <li><a href="#how" className="hover:text-accent">Hoe het werkt</a></li>
              <li><a href="#support" className="hover:text-accent">Support</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">// Bedrijf</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
              <li><a href="mailto:hi@readyclaw.com" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">// Contact</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hi@readyclaw.com" className="hover:text-accent">hi@readyclaw.com</a></li>
              <li className="text-muted-foreground">Nederland</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 font-mono text-xs text-muted-foreground">
          <div>© 2026 ReadyClaw — KvK pending</div>
          <div className="flex gap-4">
            <span>v1.0 / NL</span>
            <Link to="/admin" className="hover:text-accent">⚙ admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
