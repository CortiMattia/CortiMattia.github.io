import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Mattia Corti" },
      { name: "description", content: "Numerical methods, polytopal DG, and whole-brain models for neurodegenerative diseases." },
    ],
  }),
  component: ResearchPage,
});

const projects = [
  {
    num: "01",
    title: "Mathematical modeling of Alzheimer's disease",
    body: "Whole-brain models coupling misfolded protein propagation, tissue atrophy, and cerebral hypoperfusion on patient-specific geometries reconstructed from MRI.",
    tags: ["Alzheimer's", "Reaction–diffusion", "MRI meshes"],
  },
  {
    num: "02",
    title: "Polytopal Discontinuous Galerkin methods",
    body: "Structure-preserving polytopal DG schemes for prion-like spreading equations. Robust on agglomerated meshes and complex brain geometries.",
    tags: ["DG-FEM", "Polytopal", "Numerical analysis"],
  },
  {
    num: "03",
    title: "Cardiovascular and physiological flows",
    body: "Computational fluid dynamics of left atrium hemodynamics, including the impact of atrial fibrillation on flow patterns.",
    tags: ["CFD", "Cardiac modeling"],
  },
  {
    num: "04",
    title: "Sensitivity analysis for biological models",
    body: "Quantifying parameter uncertainty in models of tau and amyloid-β propagation, constrained by biological data.",
    tags: ["UQ", "ERC NEMESIS"],
  },
];

function ResearchPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Research"
        title="Numerical methods for the brain"
        lead="My work sits at the interface between numerical analysis, scientific computing, and the mathematical modeling of neurodegenerative diseases."
      />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article key={p.num} className="hover-card-modern rounded-3xl border border-border p-8">
            <div className="flex items-baseline justify-between mb-6">
              <span className="font-mono text-xs text-muted-foreground">{p.num} / 04</span>
              <span className="size-2 rounded-full bg-primary" />
            </div>
            <h2 className="font-serif text-3xl leading-tight">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed mt-4">{p.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono uppercase tracking-wider text-muted-foreground border border-border rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
