import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Mattia Corti" },
      { name: "description", content: "Selected publications and preprints by Mattia Corti." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  links?: { label: string; href: string }[];
};

const publications: Pub[] = [
  {
    year: "2026",
    title: "A whole-brain model of amyloid beta accumulation and cerebral hypoperfusion in Alzheimer's disease",
    authors: "M. Corti, A. Ahern, A. Goriely, E. Kuhl, P. F. Antonietti",
    venue: "Preprint, arXiv:2601.08478",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.08478" }],
  },
  {
    year: "2024",
    title: "Structure preserving polytopal discontinuous Galerkin methods for the numerical modeling of neurodegenerative diseases",
    authors: "M. Corti, F. Bonizzoni, P. F. Antonietti",
    venue: "Journal of Scientific Computing, 100:39",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/s10915-024-02581-7" }],
  },
  {
    year: "2024",
    title: "Exploring tau protein and amyloid-beta propagation: a sensitivity analysis based on biological data",
    authors: "M. Corti",
    venue: "Preprint, arXiv:2404.14169",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2404.14169" }],
  },
  {
    year: "2023",
    title: "A coupled mathematical and numerical model for protein spreading and tissue atrophy applied to Alzheimer's disease",
    authors: "M. Corti, P. F. Antonietti, F. Bonizzoni, L. Dede', A. Quarteroni",
    venue: "Mathematical Models and Methods in Applied Sciences",
  },
  {
    year: "2022",
    title: "Impact of atrial fibrillation on left atrium haemodynamics: A computational fluid dynamics study",
    authors: "M. Corti, A. Zingaro, L. Dede', A. M. Quarteroni",
    venue: "Computers in Biology and Medicine, 150:106143",
  },
];

function PublicationsPage() {
  const grouped = publications.reduce<Record<string, Pub[]>>((acc, p) => {
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
                <li key={p.title} className="hover-card-modern rounded-2xl border border-border p-6">
                  <h3 className="font-serif text-2xl leading-snug">{p.title}</h3>
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
