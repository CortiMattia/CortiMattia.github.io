import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
    title: "Polytopal DG",
    desc: "High-order discontinuous Galerkin schemes on polygonal and polyhedral meshes.",
    image: "images/PolytopalMesh.png",
    philosophy: [
      "Complex geometries and adaptive computations naturally produce irregular meshes, non-matching interfaces and elements of very different sizes. Polytopal methods turn this apparent complication into flexibility: general polygonal and polyhedral cells can be used directly, without forcing the geometry into a rigid mesh structure.",
      "My research develops high-order discontinuous Galerkin methods on polygonal and agglomerated meshes. Mesh agglomeration combines neighbouring cells into larger polytopes where fine resolution is unnecessary, helping to control small or poorly shaped elements while preserving detail where it matters.",
      "The goal is to build methods that are both flexible and mathematically reliable: stable, accurate and efficient on general meshes, with rigorous error control to guide adaptive refinement. In this way, mesh design becomes part of the numerical method rather than a preprocessing obstacle."
      ],
  },
  {
    num: "02",
    title: "Structure-Preserving Methods",
    desc: "Structure-preserving numerical discretizations for PDEs.",
    image: "images/StructurePreserving.png",
    philosophy: [
      "Nonlinear diffusion systems often carry essential physical and biological structure: densities must remain non-negative, relevant quantities may be conserved, and entropy should decay over time. These are not cosmetic features of a model—they determine whether a simulation remains meaningful.",
      "My work develops structure-preserving numerical methods for nonlinear and cross-diffusion PDEs, with a particular focus on boundedness-by-entropy techniques. By exploiting the entropy structure of a system, I design discretisations that reproduce its dissipation mechanism and help retain stability and physically admissible bounds at the discrete level.",
      "This approach is particularly valuable for strongly coupled multi-species models, where classical maximum principles can fail. My aim is to combine rigorous entropy estimates with accurate computation, producing simulations that remain stable, bounded and faithful to the long-time behaviour of the underlying system."
  ],
  },
  {
    num: "03",
    title: "Brain modeling",
    desc: "Whole-brain PDE models for neurodegenerative diseases.",
    image: "images/BrainModeling.png",
    philosophy: [
      "The brain is one of the most complex systems we know, and neurodegenerative diseases can progress silently for decades before symptoms emerge. I use mathematics to connect biological mechanisms, medical imaging and data in transparent, testable models of this hidden progression.",
      "My work develops coupled nonlinear PDE models of protein aggregation and transport, tissue mechanics and cerebral blood flow on patient-specific brain geometries reconstructed from MRI. I pair these models with high-order, structure-preserving numerical methods designed to deliver stable, physically meaningful and computationally reliable simulations.",
      "My goal is not mathematical complexity for its own sake. It is to build computational models that help interpret patient data, investigate mechanisms of disease progression and support the long-term development of better tools for research and clinical decision-making."    ],
  },
  {
    num: "04",
    title: "Data-informed modelling",
    desc: "Data-informed modelling, uncertainty quantification and parameters calibration",
    image: "images/DataDriven.png",
    philosophy: [
      "A simulation is not automatically a prediction. In nonlinear biological models, measurements are incomplete, parameters are uncertain and modelling assumptions matter. Reliable computation must therefore account for uncertainty rather than hide it behind a single numerical outcome.",
      "My work combines mechanistic PDE models with parameter calibration, sensitivity analysis and uncertainty quantification. I study how experimental, clinical or imaging data can inform unknown model parameters, and how uncertainty in those inputs propagates through nonlinear coupled dynamics.",
      "The goal is to build data-informed computational models that remain transparent and interpretable: models that can test biological hypotheses, identify robust mechanisms and show where additional measurements would be most valuable."
]
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
