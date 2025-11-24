import Link from "next/link";
import Image from "next/image";
import type { WorkItem } from "@/lib/content/work";
import { workCases } from "@/lib/content/work";

type WorkCardProps = {
    item: WorkItem;
};

export function WorkCard({ item }: WorkCardProps) {
    // Находим полный кейс, чтобы получить images[]
    const fullCase = workCases[item.slug];
    const previewImage = fullCase?.images?.[0] || null;

    return (
        <Link
            href={`/work/${item.slug}`}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 transition hover:border-zinc-500/80 hover:bg-zinc-900/60"
        >
            {/* Preview Image */}
            {previewImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={previewImage.src}
                        alt={previewImage.alt}
                        width={previewImage.width}
                        height={previewImage.height}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        priority={false}
                    />
                </div>
            )}

            {/* Text content */}
            <div className="p-5">
                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-zinc-50">
                        {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{item.description}</p>
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
            </div>
        </Link>
    );
}
