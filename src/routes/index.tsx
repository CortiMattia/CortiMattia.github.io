import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import mattiaPhoto from "@/assets/mattia-photo.png.asset.json";
import brainArt from "@/assets/brain.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mattia Corti — Postdoctoral Researcher" },
      { name: "description", content: "Numerical methods and mathematical models for the brain at MOX, Politecnico di Milano." },
    ],
  }),
  component: Index,
});

const interests = [
  { num: "01", title: "Brain modeling", desc: "Whole-brain PDE models for neurodegenerative diseases." },
  { num: "02", title: "Polytopal DG", desc: "Structure-preserving discontinuous Galerkin schemes." },
  { num: "03", title: "HPC", desc: "Scalable solvers on patient-specific geometries." },
  { num: "04", title: "Cardiac CFD", desc: "Hemodynamics of the left atrium and atrial fibrillation." },
];

const news = [
  { date: "2026", tag: "Preprint", text: "Whole-brain model of amyloid-β accumulation and cerebral hypoperfusion in Alzheimer's disease." },
  { date: "2024", tag: "Published", text: "Structure-preserving polytopal DG methods — Journal of Scientific Computing." },
  { date: "2024", tag: "Visit", text: "Visiting researcher at the Mathematical Institute, University of Oxford." },
  { date: "2023", tag: "Visit", text: "Visiting researcher at the Faculty of Mathematics, University of Vienna." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl hero-navy border border-white/10">
        <img
          src={brainArt.url}
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute -right-44 -top-10 w-[36rem] max-w-none opacity-90 hidden md:block"
        />
        <div className="relative grid md:grid-cols-[auto_1fr] gap-10 items-center p-10 md:p-16">
          <img
            src={mattiaPhoto.url}
            alt="Mattia Corti"
            className="size-48 md:size-64 rounded-full object-cover ring-4 ring-white/10 shadow-2xl mx-auto md:mx-0"
          />
          <div>
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-white">
              Mattia Corti
            </h1>
            <p className="mt-4 font-mono text-sm md:text-base uppercase tracking-[0.25em] text-white/70">
              Postdoctoral Researcher
            </p>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              MOX, Politecnico di Milano — numerical methods and mathematical models
              to understand neurodegenerative diseases.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                AVAILABLE FOR COLLABORATIONS · 2026
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[rgb(17_16_50)] px-6 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Explore research
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
              >
                See publications
              </Link>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10 px-10 md:px-16 py-4 flex flex-wrap gap-x-10 gap-y-2">
          {[
            { k: "Postdoc at", v: "MOX · Polimi" },
            { k: "Field", v: "Numerical analysis" },
            { k: "Focus", v: "Neurodegeneration" },
            { k: "Visiting", v: "Oxford · Vienna" },
          ].map((m) => (
            <p key={m.k} className="text-xs font-mono uppercase tracking-wider text-white/50">
              {m.k} <span className="text-white/90 normal-case tracking-normal font-sans font-medium">{m.v}</span>
            </p>
          ))}
        </div>
      </section>

      {/* INTERESTS */}
      <section className="mt-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— Areas</p>
            <h2 className="font-serif text-4xl md:text-5xl">What I work on</h2>
          </div>
          <Link to="/research" className="hidden sm:inline-flex link-underline text-sm text-muted-foreground">
            See all research →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((i) => (
            <article key={i.num} className="hover-card-modern rounded-2xl border border-border p-6 h-full">
              <span className="font-mono text-xs text-muted-foreground">{i.num}</span>
              <h3 className="font-serif text-2xl mt-4">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{i.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="mt-32">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— Updates</p>
            <h2 className="font-serif text-4xl md:text-5xl">Recent activity</h2>
            <p className="mt-4 text-muted-foreground">
              A short stream of papers, talks and visits.
            </p>
          </div>
          <ul className="lg:col-span-8 space-y-3">
            {news.map((n, idx) => (
              <li
                key={idx}
                className="hover-card-modern group rounded-2xl border border-border p-5 grid grid-cols-[5rem_5rem_1fr] sm:grid-cols-[6rem_7rem_1fr] gap-4 items-center"
              >
                <span className="font-mono text-sm text-muted-foreground">{n.date}</span>
                <span className="text-xs font-medium uppercase tracking-wider rounded-full border border-primary/40 text-primary px-3 py-1 w-fit">
                  {n.tag}
                </span>
                <span className="text-sm leading-relaxed">{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32">
        <div className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-16">
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— Let's talk</p>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                Working on something <span className="italic gradient-text">interesting?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                I'm open to collaborations on numerical methods, brain modeling, and scientific
                computing — and to thesis projects at Polimi.
              </p>
            </div>
            <a
              href="mailto:mattia.corti@polimi.it"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-sm font-medium hover:opacity-90 transition w-fit"
            >
              mattia.corti@polimi.it
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
