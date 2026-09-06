import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { NewsFeed } from "@/components/NewsFeed";
import { newsItems } from "@/data/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News Archive — Mattia Corti" },
      { name: "description", content: "All news, papers, talks and visits by Mattia Corti in reverse chronological order." },
      { property: "og:title", content: "News Archive — Mattia Corti" },
      { property: "og:description", content: "All news, papers, talks and visits by Mattia Corti in reverse chronological order." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="— Archive"
        title="News archive"
        lead="Papers, talks, visits and activity — in reverse chronological order."
      />
      <NewsFeed items={newsItems} idPrefix="archive" />
    </SiteLayout>
  );
}
