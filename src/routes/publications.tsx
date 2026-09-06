import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import bibSource from "@/data/publications.bib?raw";
import { toPublications, typeLabel, type Publication } from "@/lib/bibtex";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Mattia Corti" },
      { name: "description", content: "Selected publications and preprints by Mattia Corti." },
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
  const grouped = publications.reduce<Record<string, Publication[]>>((acc, p) => {
    (acc[p.year] ||= []).push(p);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));


  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Publications"
        title="Selected works"
        lead="A curated list of journal articles and preprints. The complete list is on Google Scholar."
      />

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
    </SiteLayout>
  );
}
