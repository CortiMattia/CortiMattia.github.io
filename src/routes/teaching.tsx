import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching — Mattia Corti" },
      { name: "description", content: "Courses, seminars and supervision." },
    ],
  }),
  component: TeachingPage,
});

const items = [
  { period: "2024 — present", role: "Teaching assistant", course: "Numerical Analysis for Partial Differential Equations", where: "Politecnico di Milano" },
  { period: "2023 — 2024", role: "Teaching assistant", course: "Numerical Methods for Differential Equations", where: "Politecnico di Milano" },
  { period: "2022 — 2023", role: "Tutor", course: "Mathematical Analysis II", where: "Politecnico di Milano" },
];

function TeachingPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Teaching"
        title="Courses & supervision"
        lead="Selected teaching activities. I'm happy to discuss thesis projects in numerical analysis and scientific computing."
      />
      <div className="space-y-3">
        {items.map((it) => (
          <article
            key={it.course}
            className="hover-card-modern rounded-2xl border border-border p-6 grid sm:grid-cols-[14rem_1fr] gap-4"
          >
            <span className="font-mono text-sm text-muted-foreground">{it.period}</span>
            <div>
              <p className="font-serif text-2xl leading-snug">{it.course}</p>
              <p className="text-sm text-muted-foreground mt-2">{it.role} · {it.where}</p>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
