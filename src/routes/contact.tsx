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

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lead="Always happy to discuss numerical methods, brain modeling, and possible collaborations."
      />

      <div className="grid sm:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-3">Email</h2>
          <a href="mailto:mattia.corti@polimi.it" className="link-underline text-primary">
            mattia.corti@polimi.it
          </a>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold mb-3">Office</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            MOX — Dipartimento di Matematica<br />
            Politecnico di Milano<br />
            Piazza Leonardo da Vinci, 32<br />
            20133 Milano, Italy
          </p>
        </div>

        <div className="sm:col-span-2 border-t border-border pt-8">
          <h2 className="font-serif text-xl font-semibold mb-4">Elsewhere</h2>
          <ul className="grid sm:grid-cols-2 gap-y-2 text-sm">
            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://scholar.google.at/citations?user=xhqRbvUAAAAJ">Google Scholar</a></li>
            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://orcid.org/">ORCID</a></li>
            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://mox.polimi.it/people/people-details/?id_staff=736&nome_staff=Mattia+Corti">MOX profile</a></li>
            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://re.public.polimi.it/cris/rp/rp145261">RE.PUBLIC@POLIMI</a></li>
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
}
