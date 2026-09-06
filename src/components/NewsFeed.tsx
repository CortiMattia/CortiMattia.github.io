import { useState } from "react";
import type { NewsItem } from "@/data/news";
import { cn } from "@/lib/utils";

function NewsCard({
  item,
  index,
  open,
  onToggle,
}: {
  item: NewsItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `news-panel-${index}`;
  return (
    <li className="hover-card-modern rounded-2xl border border-border overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left p-5 grid grid-cols-[4rem_1fr_auto] sm:grid-cols-[5rem_auto_1fr_auto] gap-4 items-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
        <span className="hidden sm:inline-block text-xs font-medium uppercase tracking-wider rounded-full border border-primary/40 text-primary px-3 py-1 w-fit">
          {item.category}
        </span>
        <span className="text-sm leading-relaxed">
          <span className="sm:hidden mr-2 inline-block text-[10px] font-medium uppercase tracking-wider rounded-full border border-primary/40 text-primary px-2 py-0.5 align-middle">
            {item.category}
          </span>
          {item.title}
        </span>
        <span
          aria-hidden
          className={cn(
            "text-muted-foreground transition-transform duration-300 text-lg leading-none",
            open && "rotate-45"
          )}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "border-t border-border p-5 md:p-6",
              item.image ? "grid md:grid-cols-[2fr_3fr] gap-6 items-start" : ""
            )}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.imageAlt ?? ""}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full rounded-xl object-cover"
              />
            )}
            <div>
              <h3 className="font-serif text-2xl leading-snug">{item.title}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.date}
                {item.venue && <span className="normal-case tracking-normal font-sans"> · {item.venue}</span>}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
              {item.linkUrl && item.linkLabel && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 text-primary px-5 py-2.5 text-sm font-medium hover:bg-primary/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.linkLabel}
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export function NewsFeed({ items, idPrefix = "news" }: { items: NewsItem[]; idPrefix?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <ul className="space-y-3" key={idPrefix}>
      {items.map((item, i) => (
        <NewsCard
          key={`${idPrefix}-${i}`}
          item={item}
          index={i}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </ul>
  );
}
