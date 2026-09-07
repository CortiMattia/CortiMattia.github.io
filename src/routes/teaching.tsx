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
  { period: "2025 — 2026", role: "Teaching assistant", course: "Integration of ODE Based and Neural Network Models", who: "Intensive Passion-in-Action ENHANCE Course", where: "Politecnico di Milano & TU Delft", students: 25 },
  { period: "2025 — 2026", role: "Teaching assistant", course: "Numerical Mathematics", who: "BSc in Mathematical Engineering", where: "Politecnico di Milano", students: 203 },
  { period: "2024 — 2025", role: "Teaching assistant", course: "Numerical Mathematics", who: "BSc in Mathematical Engineering", where: "Politecnico di Milano", students: 200 },
  { period: "2022 — 2023", role: "Teaching assistant", course: "Numerical Mathematics", who: "BSc in Mathematical Engineering", where: "Politecnico di Milano", students: 214 },
  { period: "2021 — 2022", role: "Teaching assistant", course: "Numerical Mathematics", who: "BSc in Mathematical Engineering", where: "Politecnico di Milano", students: 222 },
  { period: "2020 — 2021", role: "Tutor", course: "Fundamentals of Maths and Statistics", who: "BSc in Urban Planning", where: "Politecnico di Milano", students: 1 },
];

function TeachingPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 md:p-14 mb-10 shadow-2xl">
        {/* Immagine di sfondo posizionata sul lato destro */}
        <img
          src="/images/SfondoSito.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-right opacity-80"
        />

        {/* Gradiente scuro di protezione per mantenere il testo sempre leggibile */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/40" />

        {/* Contenuto testuale */}
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span>Teaching</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-white">
            Teaching activities
          </h1>
        </div>
      </section>
      <div className="space-y-3">
        {items.map((it) => (
          <article
            key={it.course}
            className="hover-card-modern rounded-2xl border border-border p-6 grid sm:grid-cols-[14rem_1fr] gap-4"
          >
            <span className="font-mono text-sm text-muted-foreground">{it.period}</span>
            <div>
              <p className="font-serif text-2xl leading-snug">{it.course}</p>
              <p className="text-sm text-muted-foreground mt-2">{it.role} · {it.who} · {it.where} · Total of Students: {it.students}</p>
            </div>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
