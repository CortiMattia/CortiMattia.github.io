import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mattia Corti — Postdoctoral Researcher" },
      { name: "description", content: "Postdoctoral researcher in numerical analysis and mathematical modeling of the brain at MOX, Politecnico di Milano." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Postdoctoral Researcher
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
          Mattia Corti
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl prose-academic">
          I develop numerical methods and mathematical models for{" "}
          <span className="text-foreground font-medium">neurodegenerative diseases</span>,
          combining polytopal discontinuous Galerkin schemes, high-performance computing, and
          patient-specific brain data.
        </p>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl">
          Based at MOX — Dipartimento di Matematica, Politecnico di Milano, with visiting work
          at the University of Vienna and the Mathematical Institute, University of Oxford.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a href="mailto:mattia.corti@polimi.it" className="link-underline">mattia.corti@polimi.it</a>
          <a href="https://scholar.google.at/citations?user=xhqRbvUAAAAJ" target="_blank" rel="noreferrer" className="link-underline">Google Scholar</a>
          <a href="https://orcid.org/" target="_blank" rel="noreferrer" className="link-underline">ORCID</a>
          <a href="https://mox.polimi.it/people/people-details/?id_staff=736&nome_staff=Mattia+Corti" target="_blank" rel="noreferrer" className="link-underline">MOX profile</a>
        </div>
      </section>

      <section className="border-t border-border/60 pt-12">
        <h2 className="font-serif text-2xl font-semibold mb-6">Research interests</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          {[
            "Numerical modeling of neurodegenerative diseases",
            "Polytopal discontinuous Galerkin methods",
            "Whole-brain mathematical models",
            "High-performance scientific computing",
            "Computational fluid dynamics in physiology",
            "Sensitivity analysis & parameter estimation",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="text-muted-foreground">—</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border/60 mt-16 pt-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-2xl font-semibold">Recent news</h2>
          <Link to="/publications" className="text-sm text-muted-foreground link-underline">All publications →</Link>
        </div>
        <ul className="space-y-5">
          {[
            { date: "2026", text: "New preprint: A whole-brain model of amyloid beta accumulation and cerebral hypoperfusion in Alzheimer's disease (with Ahern, Goriely, Kuhl, Antonietti)." },
            { date: "2024", text: "Paper accepted in Journal of Scientific Computing on structure-preserving polytopal DG methods for neurodegenerative diseases." },
            { date: "2024", text: "Visiting researcher at the Mathematical Institute, University of Oxford." },
          ].map((n) => (
            <li key={n.text} className="grid grid-cols-[5rem_1fr] gap-4 text-sm">
              <span className="font-mono text-xs text-muted-foreground pt-0.5">{n.date}</span>
              <span className="text-foreground/90 leading-relaxed">{n.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
