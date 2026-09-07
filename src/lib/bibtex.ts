export interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
}

export interface Publication {
  key: string;
  type: string;
  year: string;
  title: string;
  authors: string;
  venue: string;
  links: { label: string; href: string }[];
  /** Research-area keywords declared in the .bib `keywords` field. */
  topics: string[];
}

/** Research areas: bib keyword -> section id on /research. */
export const RESEARCH_TOPICS: { id: string; keyword: string; label: string }[] = [
  { id: "polytopal-dg", keyword: "polydg", label: "PolyDG" },
  { id: "structure-preserving", keyword: "structure-preserving", label: "Structure-Preserving" },
  { id: "brain-modelling", keyword: "neuroscience", label: "Neuroscience" },
  { id: "data-informed", keyword: "data-informed", label: "Data-informed" },
];

export function topicInfo(keyword: string) {
  return RESEARCH_TOPICS.find((t) => t.keyword === keyword);
}

/** Strip TeX braces, common escapes and collapse whitespace. */
function clean(value: string): string {
  return value
    .replace(/\\&/g, "&")
    .replace(/\\%/g, "%")
    .replace(/\\_/g, "_")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Read a balanced {...} or "..." value starting at index i. */
function readValue(src: string, i: number): [string, number] {
  while (i < src.length && /\s/.test(src[i])) i++;
  if (src[i] === "{") {
    let depth = 0;
    const start = i;
    for (; i < src.length; i++) {
      if (src[i] === "{") depth++;
      else if (src[i] === "}") {
        depth--;
        if (depth === 0) return [src.slice(start + 1, i), i + 1];
      }
    }
    return [src.slice(start + 1), i];
  }
  if (src[i] === '"') {
    const start = ++i;
    for (; i < src.length; i++) {
      if (src[i] === '"' && src[i - 1] !== "\\") return [src.slice(start, i), i + 1];
    }
    return [src.slice(start), i];
  }
  const start = i;
  while (i < src.length && !/[,\n}]/.test(src[i])) i++;
  return [src.slice(start, i), i];
}

/** Remove whole-line BibTeX comments (lines whose first non-space char is %). */
function stripComments(src: string): string {
  return src
    .split("\n")
    .filter((line) => !/^\s*%/.test(line))
    .join("\n");
}

export function parseBibtex(input: string): BibEntry[] {
  const source = stripComments(input);
  const entries: BibEntry[] = [];
  let i = 0;

  while (i < source.length) {
    const at = source.indexOf("@", i);
    if (at === -1) break;

    const braceOpen = source.indexOf("{", at);
    if (braceOpen === -1) break;

    const type = source.slice(at + 1, braceOpen).trim().toLowerCase();
    if (type === "comment" || type === "preamble" || type === "string") {
      const [, next] = readValue(source, braceOpen);
      i = next;
      continue;
    }

    // Find the end of the whole entry (balanced braces).
    let depth = 0;
    let end = braceOpen;
    for (; end < source.length; end++) {
      if (source[end] === "{") depth++;
      else if (source[end] === "}") {
        depth--;
        if (depth === 0) break;
      }
    }

    const body = source.slice(braceOpen + 1, end);
    const commaIdx = body.indexOf(",");
    const key = (commaIdx === -1 ? body : body.slice(0, commaIdx)).trim();

    const fields: Record<string, string> = {};
    let j = commaIdx === -1 ? body.length : commaIdx + 1;
    while (j < body.length) {
      const eq = body.indexOf("=", j);
      if (eq === -1) break;
      const name = body.slice(j, eq).replace(/^[,\s]+/, "").trim().toLowerCase();
      const [raw, next] = readValue(body, eq + 1);
      if (name) fields[name] = clean(raw);
      j = next;
      while (j < body.length && /[\s,]/.test(body[j])) j++;
    }

    entries.push({ type, key, fields });
    i = end + 1;
  }

  return entries;
}

function formatAuthors(raw?: string): string {
  if (!raw) return "";
  return raw
    .split(/\s+and\s+/i)
    .map((name) => {
      const n = name.trim();
      if (n.includes(",")) {
        const [last, first] = n.split(",");
        const initials = first
          .trim()
          .split(/[\s.-]+/)
          .filter(Boolean)
          .map((p) => p[0].toUpperCase() + ".")
          .join(" ");
        return `${initials} ${last.trim()}`.trim();
      }
      const parts = n.split(/\s+/);
      const last = parts.pop() ?? "";
      const initials = parts.map((p) => p[0].toUpperCase() + ".").join(" ");
      return `${initials} ${last}`.trim();
    })
    .join(", ");
}

const TYPE_LABEL: Record<string, string> = {
  article: "Journal article",
  book: "Book",
  inbook: "Book chapter",
  incollection: "Book chapter",
  inproceedings: "Conference proceedings",
  conference: "Conference proceedings",
  misc: "Preprint",
  unpublished: "Preprint",
  techreport: "Preprint",
};

export const PUBLICATION_TYPES = [
  "article",
  "book",
  "inbook",
  "incollection",
  "inproceedings",
  "conference",
  "misc",
  "unpublished",
  "techreport",
] as const;

export function typeLabel(type: string): string {
  return TYPE_LABEL[type] ?? "Publication";
}

function buildVenue(e: BibEntry): string {
  const f = e.fields;
  const parts: string[] = [];
  const main =
    f["journal"] ||
    f["booktitle"] ||
    f["publisher"] ||
    (f["archiveprefix"] || f["eprint"] ? "Preprint" : "") ||
    f["howpublished"] ||
    "";
  if (main) parts.push(main);
  if (f["volume"]) parts.push(f["volume"] + (f["number"] ? `(${f["number"]})` : ""));
  if (f["pages"]) parts.push(f["pages"].replace(/--/g, "–"));
  if (!f["journal"] && !f["booktitle"] && f["eprint"]) {
    parts.push(`${f["archiveprefix"] || "arXiv"}:${f["eprint"]}`);
  }
  return parts.join(", ");
}

function buildLinks(e: BibEntry): { label: string; href: string }[] {
  const f = e.fields;
  const links: { label: string; href: string }[] = [];
  if (f["doi"]) links.push({ label: "DOI", href: `https://doi.org/${f["doi"].replace(/^https?:\/\/doi\.org\//, "")}` });
  if (f["eprint"]) links.push({ label: "arXiv", href: `https://arxiv.org/abs/${f["eprint"]}` });
  if (f["url"] && !links.some((l) => l.href === f["url"])) {
    links.push({ label: "Link", href: f["url"] });
  }
  return links;
}

export function toPublications(source: string): Publication[] {
  return parseBibtex(source)
    .filter((e) => (PUBLICATION_TYPES as readonly string[]).includes(e.type))
    .map((e) => ({
      key: e.key,
      type: e.type,
      year: e.fields["year"] ?? "",
      title: e.fields["title"] ?? "(untitled)",
      authors: formatAuthors(e.fields["author"]),
      venue: buildVenue(e),
      links: buildLinks(e),
      topics: (e.fields["keywords"] ?? "")
        .split(",")
        .map((k) => k.trim().toLowerCase())
        .filter((k) => RESEARCH_TOPICS.some((t) => t.keyword === k)),
    }))
    .sort((a, b) => Number(b.year || 0) - Number(a.year || 0));
}
