// src/components/work/WorkListCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { WorkItem } from "@/lib/content/work";
import { workCases } from "@/lib/content/work";

type WorkListCardProps = {
    item: WorkItem;
};

export function WorkCard({ item }: WorkListCardProps) {
    const fullCase = workCases[item.slug];
    const previewImage = fullCase?.images?.[0] ?? null;

    return (
        <Link
            href={`/work/${item.slug}`}
            className="
                group flex flex-col overflow-hidden rounded-2xl
                border border-border-subtle bg-surface
                transition-all duration-300
                hover:border-text-muted/50 hover:bg-surface-muted/40
            "
        >
            {/* Preview image */}
            {previewImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted">
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
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div className="space-y-3">
                    {/* Label */}
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted transition-colors group-hover:text-text-muted/80">
                        Case study
                    </p>

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-foreground">
                        {item.title}
                    </h2>

                    {/* Description */}
                    <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                        {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="
                                        rounded-full border border-border-subtle bg-surface-muted/50
                                        px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-text-muted
                                    "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Call to action */}
                <div className="mt-6 text-xs font-medium text-text-muted underline underline-offset-4 transition-colors group-hover:text-foreground">
                    View case
                </div>
            </div>
        </Link>
    );
}