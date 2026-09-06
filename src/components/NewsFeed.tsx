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
    <li className="hover-card-modern overflow-hidden rounded-2xl border border-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="grid w-full grid-cols-[4rem_1fr_auto] items-center gap-4 rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:grid-cols-[5rem_auto_1fr_auto]"
      >
        <span className="font-mono text-sm text-muted-foreground">
          {item.year}
        </span>

        <span className="hidden w-fit rounded-full border border-primary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary sm:inline-block">
          {item.category}
        </span>

        <span className="text-sm leading-relaxed">
          <span className="mr-2 inline-block rounded-full border border-primary/40 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wider text-primary sm:hidden">
            {item.category}
          </span>
          {item.title}
        </span>

        <span
          aria-hidden
          className={cn(
            "text-lg leading-none text-muted-foreground transition-transform duration-300",
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
              item.image
                ? "grid items-start gap-6 md:grid-cols-[2fr_3fr]"
                : ""
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
              <h3 className="font-serif text-2xl leading-snug">
                {item.title}
              </h3>

              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.date}
                {item.venue && (
                  <span className="font-sans normal-case tracking-normal">
                    {" "}
                    · {item.venue}
                  </span>
                )}
              </p>

              <p className="mt-4 text-left text-sm leading-relaxed text-muted-foreground md:text-justify">
                {item.summary}
              </p>

              {item.linkUrl && item.linkLabel && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

export function NewsFeed({
  items,
  idPrefix = "news",
}: {
  items: NewsItem[];
  idPrefix?: string;
}) {
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
