import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Mattia Corti" },
      { name: "description", content: "Curriculum vitae of Mattia Corti." },
    ],
  }),
  component: CVPage,
});

const sections: { heading: string; entries: { period: string; title: string; place: string; note?: string }[] }[] = [
  {
    heading: "Appointments",
    entries: [
      { period: "2024 — now", title: "Postdoctoral Researcher (art. 22-ter)", place: "MOX, Politecnico di Milano" },
      { period: "2024", title: "Visiting Researcher", place: "Mathematical Institute, University of Oxford" },
      { period: "2023 — 2024", title: "Visiting Researcher", place: "Faculty of Mathematics, University of Vienna" },
    ],
  },
  {
    heading: "Education",
    entries: [
      { period: "2020 — 2024", title: "Ph.D. in Mathematical Models and Methods in Engineering", place: "Politecnico di Milano", note: "Advisor: P. F. Antonietti" },
      { period: "2018 — 2020", title: "M.Sc. in Mathematical Engineering", place: "Politecnico di Milano" },
      { period: "2015 — 2018", title: "B.Sc. in Mathematical Engineering", place: "Politecnico di Milano" },
    ],
  },
  {
    heading: "Grants & affiliations",
    entries: [
      { period: "2024 — now", title: "ERC Synergy Grant — NEMESIS", place: "Project member" },
      { period: "2023 — now", title: "INdAM-GNCS member", place: "Italian National Group for Scientific Computing" },
    ],
  },
];

function CVPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Curriculum vitae"
        title="A short CV"
        lead="Highlights of my academic trajectory. The full PDF is available on request."
      />
      <div className="space-y-20">
        {sections.map((s, sIdx) => (
          <section key={s.heading}>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-xs text-muted-foreground">0{sIdx + 1}</span>
              <h2 className="font-serif text-4xl">{s.heading}</h2>
            </div>
            <div className="space-y-3">
              {s.entries.map((e) => (
                <div
                  key={e.title + e.period}
                  className="hover-card-modern rounded-2xl border border-border p-6 grid sm:grid-cols-[12rem_1fr] gap-4"
                >
                  <span className="font-mono text-sm text-muted-foreground">{e.period}</span>
                  <div>
                    <p className="font-serif text-xl leading-snug">{e.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{e.place}</p>
                    {e.note && <p className="text-sm text-muted-foreground italic mt-1">{e.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
