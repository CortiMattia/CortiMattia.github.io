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
      { period: "2024 — present", title: "Postdoctoral Researcher (art. 22-ter)", place: "MOX, Politecnico di Milano" },
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
      { period: "2024 —", title: "ERC Synergy Grant — NEMESIS", place: "Project member" },
      { period: "2023 —", title: "INdAM-GNCS member", place: "Italian National Group for Scientific Computing" },
    ],
  },
];

function CVPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Curriculum vitae"
        title="CV"
        lead="A short academic CV. A full PDF version is available on request."
      />
      <div className="space-y-14">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-serif text-2xl font-semibold mb-6">{s.heading}</h2>
            <ul className="divide-y divide-border">
              {s.entries.map((e) => (
                <li key={e.title + e.period} className="py-5 grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6">
                  <span className="text-sm font-mono text-muted-foreground">{e.period}</span>
                  <div>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted-foreground">{e.place}</p>
                    {e.note && <p className="text-sm text-muted-foreground italic mt-1">{e.note}</p>}
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
