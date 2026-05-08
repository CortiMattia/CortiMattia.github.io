import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/teaching", label: "Teaching" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between gap-6">
          <Link to="/" className="font-serif text-xl font-semibold tracking-tight">
            Mattia Corti
          </Link>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
      <footer className="border-t border-border/60 mt-24">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Mattia Corti</p>
          <p className="font-serif italic">MOX — Dipartimento di Matematica, Politecnico di Milano</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{eyebrow}</p>
      )}
      <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
      {lead && <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{lead}</p>}
    </div>
  );
}
