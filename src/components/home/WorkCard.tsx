// src/components/home/WorkCard.tsx
import Link from "next/link";
import type { WorkItem } from "@/lib/content/work";

type WorkCardProps = {
    item: WorkItem;
};

export function WorkCard({ item }: WorkCardProps) {
    return (
        <Link
            href={`/work/${item.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition hover:border-zinc-500/80 hover:bg-zinc-900/60"
        >
            <div className="space-y-2">
                <h3 className="text-base font-semibold text-zinc-50">
                    {item.title}
                </h3>
                <p className="text-xs text-zinc-400">
                    {item.description}
                </p>
            </div>

            {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-zinc-800 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-500"
                        >
              {tag}
            </span>
                    ))}
                </div>
            )}
        </Link>
    );
}
