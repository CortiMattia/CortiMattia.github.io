import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import bibSource from "@/data/publications.bib?raw";
import { toPublications } from "@/lib/bibtex";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Mattia Corti" },
      {
        name: "description",
        content:
          "High-order numerical methods and mathematical models for multiphysics and biomedical applications, with a focus on brain diseases and patient-specific simulations.",
      },
      { property: "og:title", content: "Research — Mattia Corti" },
      {
        property: "og:description",
        content:
          "Polytopal DG, structure-preserving methods, brain modelling and data-informed modelling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const publications = toPublications(bibSource);

/**
 * Research visuals — replace the files in `public/images/research/`
 * with real simulation results, meshes, MRI/PET maps or connectome figures.
 */
const areas = [
  {
    num: "01",
    id: "polytopal-dg",
    keyword: "polydg",
    title: "Polytopal DG",
    label: "Polytopal DG",
    short: "High-order discontinuous Galerkin schemes on polygonal and polyhedral meshes.",
    image: "/images/PolytopalMesh.png",
    alt: "Irregular polytopal mesh coloured with a spectral scalar field",
    heading: "Numerical methods designed for complex geometries",
    text: "I develop high-order discontinuous Galerkin discretizations on polygonal and polyhedral meshes. Polytopal meshes offer a flexible representation of heterogeneous domains and complex geometries reconstructed from imaging data, while retaining high-order accuracy and computational efficiency.",
    tags: [
      "Polygonal & polyhedral meshes",
      "High-order approximation",
      "Mesh agglomeration",
      "Multiphysics PDEs",
    ],
  },
  {
    num: "02",
    id: "structure-preserving",
    keyword: "structure-preserving",
    title: "Structure-Preserving Methods",
    label: "Structure-Preserving Methods",
    short: "Structure-preserving numerical discretizations for nonlinear PDEs.",
    image: "/images/StructurePreserving.png",
    alt: "Folded ribbon surface coloured with a scientific scalar-field gradient",
    heading: "Reliable schemes for nonlinear propagation phenomena",
    text: "For nonlinear reaction–diffusion and conformational-conversion models, numerical accuracy alone is not enough. I design discretizations that retain qualitative properties of the continuous problem, including non-negativity, boundedness and stability, making simulations more physically meaningful and robust.",
    tags: [
      "Positivity-preservation",
      "Boundedness-by-Entropy",
      "Local discontinuous Galerkin",
    ],
  },
  {
    num: "03",
    id: "brain-modelling",
    keyword: "neuroscience",
    title: "Brain Modelling",
    label: "Brain Modelling",
    short: "Whole-brain PDE models for neurodegenerative diseases.",
    image: "/images/BrainModeling.png",
    alt: "Computational brain surface coloured by a simulated concentration field",
    heading: "Multiscale models of brain disease and physiology",
    text: "I build mathematical models of brain processes across scales, from protein misfolding and propagation to tissue atrophy, cerebral perfusion, cerebrospinal-fluid dynamics and epileptic activity. These models are solved in realistic brain geometries to investigate disease mechanisms and possible dynamical transitions.",
    note: {
      image: "/images/brainum-logo.png",
      title: "The BraiNum Project",
      body: "My work on the topic is part of the BraiNum project. BraiNum aims at developing a mathematical model for the physiological and pathological function of the brain and central nervous system. It is developed at the Laboratory for Modeling and Scientific Computing (MOX) of the Department of Mathematics, Politecnico di Milano.",
    },
    tags: [
      "Alzheimer's & Parkinson's disease",
      "Protein spreading",
      "Brain perfusion and CSF",
      "Epileptic seizures",
    ],
  },
  {
    num: "04",
    id: "data-informed",
    keyword: "data-informed",
    title: "Data-informed Modelling",
    label: "Data-informed Modelling",
    short: "Data-informed modelling, uncertainty quantification and parameter calibration.",
    image: "/images/DataDriven.png",
    alt: "Brain connectome flowing into an uncertainty surface",
    heading: "From imaging and clinical data to predictive models",
    text: "I combine mechanistic models with multimodal biological and clinical data to create patient-specific computational frameworks. This includes parameter calibration, uncertainty quantification, graph-based brain models and NeuralODE approaches for predicting heterogeneous disease trajectories.",
    tags: [
      "MRI and PET imaging",
      "Brain connectomes",
      "Uncertainty quantification",
      "Sensitivity Analysis",
      "Neural ODEs",
    ],
  },
] as const;

/** Replace with the real URLs when available. */
const softwareLinks = [
  { label: "Code", href: "https://it.mathworks.com/matlabcentral/fileexchange/174340-lymph-discontinuous-polytopal-methods-for-multi-physics" },
  { label: "Documentation", href: "https://lymph.bitbucket.io/" },
  { label: "Paper Lymph 1.0", href: "https://dl.acm.org/doi/10.1145/3716310" },
  { label: "Preprint Lymph 2.0", href: "https://doi.org/10.48550/arXiv.2606.24646" },
];

const heroTags = ["PolyDG", "Structure-Preserving", "Neuroscience", "Data-informed"];

function outputsFor(keyword: string) {
  return publications.filter((p) => p.topics.includes(keyword)).slice(0, 6);
}

type ResearchNote = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
};

function AreaNote({ note }: { note: ResearchNote }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.06]">
      <div
        className={`grid gap-6 p-6 ${note.image ? "md:grid-cols-[1fr_auto] md:items-center" : ""}`}
      >
        <div>
          <p className="font-serif text-2xl gradient-text">{note.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
          {note.href && note.linkLabel && (
            <a
              href={note.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-primary transition hover:text-primary/80"
            >
              {note.linkLabel}
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
        {note.image && (
          <div className="flex justify-center md:justify-end">
            <div className="flex h-36 w-full max-w-[260px] items-center justify-center rounded-xl border border-border/60 bg-background/30 p-4">
              <img src={note.image} alt={note.imageAlt ?? ""} className="h-full w-full object-contain" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ResearchPage() {
  return (
    <SiteLayout>
      {/* HERO — same header block as Teaching / Publications */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-8 md:p-14 mb-10 shadow-2xl">
        <img
          src="/images/SfondoSito.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-right opacity-80"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/40" />

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            <span>Research</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-white">
            Mathematical modelling for complex biological systems
          </h1>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            I develop high-order numerical methods and mathematical models for multiphysics and
            biomedical applications, with a particular focus on brain diseases and patient-specific
            simulations.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-primary/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AREA CARDS */}
      <section id="research-areas" className="scroll-mt-24">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {areas.map((a) => (
            <article
              key={a.id}
              className="hover-card-modern group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 font-mono text-xs tracking-[0.2em] text-white/80">
                  {a.num}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-2xl leading-snug">{a.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.short}</p>
                <a
                  href={`#${a.id}`}
                  className="link-underline mt-6 inline-flex w-fit items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary"
                >
                  Read more <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DETAILED SECTIONS */}
      <div className="mt-20 space-y-20">
        {areas.map((a, i) => (
          <section key={a.id} id={a.id} className="scroll-mt-24 border-t border-border pt-14">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  {a.num} — {a.label}
                </p>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">{a.heading}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{a.text}</p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {"note" in a && a.note && <AreaNote note={a.note as ResearchNote} />}

                <div className="mt-9">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Selected outputs
                  </p>
                  <ul className="mt-4 space-y-3">
                    {outputsFor(a.keyword).map((o) => (
                      <li key={o.key} className="border-l-2 border-primary/50 pl-4">
                        <p className="text-sm leading-snug">{o.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {o.venue} · {o.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/publications"
                    className="link-underline mt-5 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary"
                  >
                    All publications <span aria-hidden>→</span>
                  </Link>
                </div>

                <a
                  href="#research-areas"
                  className="link-underline mt-8 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Back to research areas <span aria-hidden>↑</span>
                </a>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card/60">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* SOFTWARE */}
      <section className="mt-20 border-t border-border pt-14">
    <div className="hover-card-modern rounded-2xl border border-border bg-card/60 p-8 md:p-12">
      <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
        {/* Logo lymph */}
        <div className="flex justify-center lg:justify-start">
          <div className="flex h-36 w-full max-w-[280px] items-center justify-center rounded-xl border border-border/70 bg-background/40 p-6">
            <img
              src="/images/lymph-logo.png"
              alt="lymph logo"
              className="max-h-20 w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Testo e link */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Open-source software
          </p>

          <h2 className="mt-4 font-serif text-4xl gradient-text">
            The lymph library
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A MATLAB library for the high-order discontinuous Galerkin
            discretization of coupled multi-physics differential problems on
            polytopal grids.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {softwareLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-primary transition hover:bg-primary/10"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* PUBLICATIONS CTA */}
      <section className="mt-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Selected outputs
        </p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">
          Explore the complete publication record
        </h2>
        <p className="mt-4 text-muted-foreground">
          Journal articles, conference proceedings, software papers and preprints.
        </p>
        <Link
          to="/publications"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm text-primary transition hover:bg-primary/10"
        >
          View publications <span aria-hidden>→</span>
        </Link>
      </section>
    </SiteLayout>
  );
}
