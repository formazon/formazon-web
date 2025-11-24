// src/components/work/WorkListCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { WorkItem } from "@/lib/content/work";
import { workCases } from "@/lib/content/work";

type WorkListCardProps = {
    item: WorkItem;
};

export function WorkListCard({ item }: WorkListCardProps) {
    // Находим полный кейс, чтобы достать превью-изображение
    const fullCase = workCases[item.slug];
    const previewImage = fullCase?.images?.[0] ?? null;

    return (
        <Link
            href={`/work/${item.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 transition hover:border-zinc-700 hover:bg-zinc-900/50"
        >
            {/* Preview image */}
            {previewImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={previewImage.src}
                        alt={previewImage.alt}
                        width={previewImage.width}
                        height={previewImage.height}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </div>
            )}

            {/* Text content */}
            <div className="flex flex-1 flex-col justify-between p-5">
                <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        Case study
                    </p>

                    <h2 className="text-base font-semibold text-zinc-50 sm:text-lg">
                        {item.title}
                    </h2>

                    <p className="max-w-xl text-sm text-zinc-400">
                        {item.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
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
                </div>

                <div className="mt-4 text-xs font-medium text-zinc-300 underline underline-offset-4 group-hover:text-white">
                    View case
                </div>
            </div>
        </Link>
    );
}
