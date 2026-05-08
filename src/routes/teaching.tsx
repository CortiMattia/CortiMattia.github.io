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
        lead="Selected teaching activities at Politecnico di Milano. I am happy to discuss thesis projects in numerical analysis and scientific computing."
      />
      <ul className="divide-y divide-border">
        {items.map((it) => (
          <li key={it.course} className="py-6 grid sm:grid-cols-[12rem_1fr] gap-2 sm:gap-6">
            <span className="text-sm text-muted-foreground font-mono">{it.period}</span>
            <div>
              <p className="font-serif text-lg font-medium">{it.course}</p>
              <p className="text-sm text-muted-foreground mt-1">{it.role} — {it.where}</p>
            </div>
          </li>
        ))}
      </ul>
    </SiteLayout>
  );
}
