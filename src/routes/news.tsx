import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { NewsFeed } from "@/components/NewsFeed";
import { newsItems } from "@/data/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News Archive — Mattia Corti" },
      {
        name: "description",
        content:
          "All news, papers, talks and visits by Mattia Corti in reverse chronological order.",
      },
      { property: "og:title", content: "News Archive — Mattia Corti" },
      {
        property: "og:description",
        content:
          "All news, papers, talks and visits by Mattia Corti in reverse chronological order.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
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
            <span>Archive</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-white">
            News archive
          </h1>

          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Papers, talks, visits and activity — in reverse chronological order.
          </p>
        </div>
      </section>

      <NewsFeed items={newsItems} idPrefix="archive" />
    </SiteLayout>
  );
}
