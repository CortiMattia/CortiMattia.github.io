import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import brainModeling from "@/assets/brain-modeling.jpg.asset.json";
import polydg from "@/assets/polydg.jpg.asset.json";
import hpc from "@/assets/hpc.jpg.asset.json";
import cardiac from "@/assets/cardiac.jpg.asset.json";

export interface Interest {
  num: string;
  title: string;
  desc: string;
  image: string;
  philosophy: string[];
}

export const interests: Interest[] = [
  {
    num: "01",
    title: "Brain modeling",
    desc: "Whole-brain PDE models for neurodegenerative diseases.",
    image: brainModeling.url,
    philosophy: [
      "The brain is the most complex organ we know — and neurodegenerative diseases like Alzheimer's develop silently for decades before symptoms appear. I believe mathematics can give us a window into this hidden phase.",
      "My approach is to describe the brain as a continuum: partial differential equations that couple the accumulation of toxic proteins (amyloid-β, tau), the mechanics of brain tissue, and cerebral blood flow, all on patient-specific geometries reconstructed from MRI.",
      "The philosophy is simple: a model is only useful if it can say something about a real patient. That is why I work at the interface between numerical analysis, medical imaging, and clinical data — turning scans into simulations that may one day support early diagnosis.",
    ],
  },
  {
    num: "02",
    title: "Polytopal DG",
    desc: "Structure-preserving discontinuous Galerkin schemes.",
    image: polydg.url,
    philosophy: [
      "Real geometries — brains, hearts, arteries — are never cubes or spheres. Polytopal methods let us mesh them with general polygons and polyhedra, keeping the meshing step simple and the approximation accurate.",
      "I develop high-order discontinuous Galerkin methods on polytopal grids that preserve the structure of the underlying physics: positivity of concentrations, energy dissipation, conservation laws. A numerical scheme should respect the mathematics it approximates.",
      "For me, the beauty of this field is the dialogue between theory and practice: proving stability and convergence of a method, and then watching it run robustly on a complex anatomical mesh.",
    ],
  },
  {
    num: "03",
    title: "HPC",
    desc: "Scalable solvers on patient-specific geometries.",
    image: hpc.url,
    philosophy: [
      "A whole-brain simulation with millions of degrees of freedom is useless if it takes weeks to run. High-performance computing is what turns mathematical models into practical tools.",
      "I work on scalable solvers and preconditioners for the large, ill-conditioned linear systems arising from high-order discretizations on patient-specific geometries — the kind of systems where a naive solver simply fails.",
      "The goal is clinical relevance: simulations that finish in hours, on geometries that come from real MRI data, so that modeling can actually enter the medical workflow.",
    ],
  },
  {
    num: "04",
    title: "Cardiac CFD",
    desc: "Hemodynamics of the left atrium and atrial fibrillation.",
    image: cardiac.url,
    philosophy: [
      "The human heart is a sophisticated machine, finely tuned by evolution — and blood flow is both its engine and a marker of its health. In the left atrium, disturbed flow is tightly linked to thrombus formation and atrial fibrillation.",
      "I use computational fluid dynamics to study atrial hemodynamics: how flow patterns, vortices, and wall shear stresses change in healthy and pathological conditions, on geometries extracted from patient imaging.",
      "The underlying belief is that quantitative, physics-based biomarkers from simulations can complement clinical imaging and help stratify risk — bringing numerical analysis into the cardiology room.",
    ],
  },
];

export function InterestCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {interests.map((i) => (
        <Dialog key={i.num}>
          <DialogTrigger
            className="hover-card-modern group rounded-2xl border border-border overflow-hidden text-left cursor-pointer bg-card p-0"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={i.image}
                alt={i.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <span className="absolute top-3 left-3 font-mono text-xs text-white/80 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                {i.num}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{i.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary">
                Read more <span aria-hidden>→</span>
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-card border-border">
            <div className="relative h-56 sm:h-72">
              <img
                src={i.image}
                alt={i.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="font-mono text-xs text-muted-foreground">{i.num}</span>
                <DialogHeader className="mt-1">
                  <DialogTitle className="font-serif text-3xl sm:text-4xl font-normal">{i.title}</DialogTitle>
                </DialogHeader>
              </div>
            </div>
            <div className="px-6 pb-8 space-y-4 max-h-[40vh] overflow-y-auto">
              {i.philosophy.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

// Dialog needs the trigger re-export for convenience
import { DialogTrigger } from "@/components/ui/dialog";
