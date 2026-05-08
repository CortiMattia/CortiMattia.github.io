import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Mattia Corti" },
      { name: "description", content: "Research on numerical methods for brain modeling, neurodegenerative diseases, and high-performance scientific computing." },
    ],
  }),
  component: ResearchPage,
});

const projects = [
  {
    title: "Mathematical modeling of Alzheimer's disease",
    body: "Whole-brain models coupling misfolded protein propagation, tissue atrophy, and cerebral hypoperfusion. The aim is to capture the multiscale dynamics of neurodegeneration on patient-specific geometries reconstructed from MRI.",
    tags: ["Alzheimer's", "Reaction–diffusion", "MRI-based meshes"],
  },
  {
    title: "Polytopal Discontinuous Galerkin methods",
    body: "Structure-preserving polytopal DG schemes for prion-like spreading equations. The methods support agglomerated meshes, are robust on complex brain geometries, and preserve key qualitative properties of the continuous model.",
    tags: ["DG-FEM", "Polytopal meshes", "Numerical analysis"],
  },
  {
    title: "Cardiovascular and physiological flows",
    body: "Computational fluid dynamics of left atrium hemodynamics, including the impact of atrial fibrillation. Joint work bridging numerical methods with clinically relevant questions.",
    tags: ["CFD", "Cardiac modeling"],
  },
  {
    title: "Sensitivity analysis for biological models",
    body: "Quantifying the impact of parameter uncertainty in models of tau and amyloid-β propagation, using biological data to constrain mathematical formulations.",
    tags: ["Uncertainty quantification", "ERC NEMESIS"],
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
      <div className="space-y-12">
        {projects.map((p) => (
          <article key={p.title} className="border-l-2 border-accent pl-6">
            <h2 className="font-serif text-2xl font-semibold mb-3">{p.title}</h2>
            <p className="text-muted-foreground leading-relaxed prose-academic">{p.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs uppercase tracking-wider text-muted-foreground border border-border rounded-sm px-2 py-1">
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
