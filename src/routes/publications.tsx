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
    title: "Exploring tau protein and amyloid-beta propagation: a sensitivity analysis of mathematical models based on biological data",
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
        lead="A selection of journal articles and preprints. A complete and up-to-date list is on Google Scholar and ORCID."
      />
      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <h2 className="font-serif text-3xl font-semibold mb-6 text-muted-foreground">{year}</h2>
            <ul className="space-y-8">
              {grouped[year].map((p) => (
                <li key={p.title}>
                  <h3 className="font-serif text-lg font-medium leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.authors}</p>
                  <p className="text-sm italic text-foreground/80 mt-1">{p.venue}</p>
                  {p.links && (
                    <p className="mt-2 flex gap-4 text-sm">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-underline text-primary">
                          {l.label} ↗
                        </a>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
