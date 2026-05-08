import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mattia Corti" },
      { name: "description", content: "Get in touch with Mattia Corti at MOX, Politecnico di Milano." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "mattia.corti@polimi.it", href: "mailto:mattia.corti@polimi.it" },
  { label: "Google Scholar", value: "scholar profile", href: "https://scholar.google.at/citations?user=xhqRbvUAAAAJ" },
  { label: "MOX profile", value: "mox.polimi.it", href: "https://mox.polimi.it/people/people-details/?id_staff=736&nome_staff=Mattia+Corti" },
  { label: "RE.PUBLIC", value: "re.public.polimi.it", href: "https://re.public.polimi.it/cris/rp/rp145261" },
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's collaborate."
        lead="I'm always happy to discuss numerical methods, brain modeling, and possible joint projects."
      />

      <div className="grid lg:grid-cols-[1fr_1fr] gap-5">
        <a
          href="mailto:mattia.corti@polimi.it"
          className="hover-card-modern rounded-3xl border border-border p-10 group relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-radial)" }} />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Primary</p>
            <p className="font-serif text-3xl md:text-4xl mt-4 break-all">mattia.corti<span className="gradient-text">@polimi.it</span></p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              Send a message <span aria-hidden>→</span>
            </p>
          </div>
        </a>

        <div className="hover-card-modern rounded-3xl border border-border p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Office</p>
          <p className="font-serif text-2xl mt-4 leading-snug">
            MOX — Dipartimento di Matematica<br />
            Politecnico di Milano
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Piazza Leonardo da Vinci, 32<br />
            20133 Milano, Italy
          </p>
        </div>
      </div>

      <div className="mt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— Elsewhere</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="hover-card-modern flex items-center justify-between rounded-2xl border border-border px-5 py-4"
              >
                <span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.label}</span>
                  <span className="block mt-1">{c.value}</span>
                </span>
                <span className="text-muted-foreground" aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SiteLayout>
  );
}
