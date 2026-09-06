export interface NewsItem {
  year: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  venue?: string;
  linkLabel?: string;
  linkUrl?: string;
}

// Add, remove or reorder news items here. Items are displayed in array order
// (keep reverse chronological). Homepage shows the first 4; /news shows all.
export const newsItems: NewsItem[] = [
  {
    year: "2026",
    date: "3 July 2026",
    category: "Preprint",
    title:
      "Whole-brain model of amyloid-β accumulation and cerebral hypoperfusion in Alzheimer's disease",
    summary:
      "A mechanistic whole-brain computational model coupling amyloid-β dynamics with cerebral blood flow. The work investigates how local hypoperfusion can destabilise healthy states and contribute to brain-wide disease progression.",
    image: "/images/news/whole-brain-amyloid-hypoperfusion.png",
    imageAlt:
      "Whole-brain simulations of amyloid accumulation and cerebral blood-flow reduction under different injury scenarios",
    linkLabel: "View preprint",
    linkUrl: "#TODO-preprint-link", // TODO: replace with the preprint URL
  },
  {
    year: "2024",
    date: "2024",
    category: "Publication",
    title: "Structure-preserving polytopal DG methods",
    summary:
      "High-order discontinuous Galerkin discretisations on polytopal meshes, designed to preserve key qualitative properties of nonlinear PDE models.",
    venue: "Journal of Scientific Computing",
    linkLabel: "Read article",
    linkUrl: "#TODO-article-link", // TODO: replace with the article URL
  },
  {
    year: "2024",
    date: "2024",
    category: "Research visit",
    title: "Visiting researcher at the Mathematical Institute, University of Oxford",
    summary:
      "Research visit focused on numerical analysis and structure-preserving methods for nonlinear PDE systems.",
  },
  {
    year: "2023",
    date: "2023",
    category: "Research visit",
    title: "Visiting researcher at the Faculty of Mathematics, University of Vienna",
    summary:
      "Research visit and scientific exchange on numerical methods for nonlinear PDEs.",
  },
];
