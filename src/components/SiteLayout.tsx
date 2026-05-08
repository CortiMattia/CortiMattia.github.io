import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home", num: "01" },
  { to: "/research", label: "Research", num: "02" },
  { to: "/publications", label: "Publications", num: "03" },
  { to: "/teaching", label: "Teaching", num: "04" },
  { to: "/cv", label: "CV", num: "05" },
  { to: "/contact", label: "Contact", num: "06" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-40" />

      <header className="relative z-30 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3">
            <span className="size-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-mono text-xs font-semibold">
              MC
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-medium leading-none">Mattia Corti</span>
              <span className="block text-xs text-muted-foreground mt-0.5">Postdoc · MOX Polimi</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href="mailto:mattia.corti@polimi.it"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-4 py-2 hover:opacity-90 transition"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
        <div className="md:hidden border-t border-border/40 overflow-x-auto">
          <div className="flex gap-1 px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-1.5 rounded-full text-sm text-muted-foreground whitespace-nowrap"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-24 animate-float-up">
        {children}
      </main>

      <footer className="relative z-10 border-t border-border/40 mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-serif text-2xl">Mattia Corti</p>
            <p className="text-muted-foreground mt-2">© {new Date().getFullYear()} — All rights reserved.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Affiliation</p>
            <p>MOX — Politecnico di Milano</p>
            <p className="text-muted-foreground">Piazza Leonardo da Vinci 32, Milano</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Elsewhere</p>
            <div className="flex flex-col gap-1">
              <a className="link-underline w-fit" href="https://scholar.google.at/citations?user=xhqRbvUAAAAJ">Google Scholar</a>
              <a className="link-underline w-fit" href="mailto:mattia.corti@polimi.it">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="mb-16 max-w-4xl">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      )}
      <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">{title}</h1>
      {lead && <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">{lead}</p>}
    </div>
  );
}
