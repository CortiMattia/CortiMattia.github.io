import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import bibSource from "@/data/publications.bib?raw";
import { toPublications, typeLabel, type Publication } from "@/lib/bibtex";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Mattia Corti" },
      { name: "description", content: "List of journal articles and preprints by Mattia Corti." },
      { property: "og:title", content: "Publications — Mattia Corti" },
      { property: "og:description", content: "Journal articles, books, conference papers and preprints by Mattia Corti." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PublicationsPage,
});

const publications: Publication[] = toPublications(bibSource);

function PublicationsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return publications;
    return publications.filter((p) =>
      [p.title, p.authors, p.venue, p.year].some((f) => f.toLowerCase().includes(q)),
    );
  }, [query]);

  const grouped = filtered.reduce<Record<string, Publication[]>>((acc, p) => {
    (acc[p.year] ||= []).push(p);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <SiteLayout>
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 md:p-14 mb-10 shadow-2xl">
        <img
          src="/images/SfondoSito.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-right opacity-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/40" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span>Publications</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-white">
            My works
          </h1>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            List of journal articles and preprints.
          </p>

          <div className="mt-6">
            <label htmlFor="pub-search" className="sr-only">
              Search publications
            </label>
            <input
              id="pub-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author or journal…"
              className="w-full rounded-full border border-white/15 bg-background/60 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>
        </div>
      </section>

      {years.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No publications match “{query}”.
        </p>
      ) : (
        <div className="space-y-16">
          {years.map((year) => (
            <section key={year}>
              <div className="flex items-baseline gap-4 mb-6">
                <h2 className="font-serif text-6xl gradient-text">{year}</h2>
                <span className="font-mono text-xs text-muted-foreground">
                  {grouped[year].length} {grouped[year].length === 1 ? "entry" : "entries"}
                </span>
              </div>
              <ul className="space-y-3">
                {grouped[year].map((p) => (
                  <li key={p.key} className="hover-card-modern rounded-2xl border border-border p-6">
                    <span className="inline-block rounded-full border border-primary/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary">
                      {typeLabel(p.type)}
                    </span>
                    <h3 className="font-serif text-2xl leading-snug mt-3">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.authors}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                      <span className="italic text-foreground/80">{p.venue}</span>

                      {p.links && (
                        <span className="flex gap-2">
                          {p.links.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 rounded-full border border-primary/40 text-primary px-3 py-1 text-xs font-medium hover:bg-primary/10 transition"
                            >
                              {l.label} ↗
                            </a>
                          ))}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </SiteLayout>
  );
}
