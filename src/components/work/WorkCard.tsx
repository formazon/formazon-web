import Link from "next/link";
import Image from "next/image";
import type { WorkItem } from "@/lib/content/work";
import { workCases } from "@/lib/content/work";
import { Tag } from "@/components/ui/Tag";

interface WorkListCardProps {
    item: WorkItem;
}

export function WorkCard({ item }: WorkListCardProps) {
    const fullCase = workCases[item.slug];
    const previewImage = fullCase?.images?.[0] ?? null;

    return (
        <Link
            href={`/work/${item.slug}`}
            className="
                group flex flex-col overflow-hidden
                bg-surface transition-all duration-300
                hover:border-text-muted/50
            "
        >
            {/* Preview image */}
            {previewImage && (
                <div className="relative aspect-[1.618/1] w-full overflow-hidden bg-surface-muted rounded-sm">
                    <Image
                        src={previewImage.src}
                        alt={previewImage.alt}
                        width={previewImage.width}
                        height={previewImage.height}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        priority={false}
                        loading="lazy"
                    />
                </div>
            )}

            {/* Text content */}
            <div className="flex flex-1 flex-col justify-between">
                <div className="space-y-4">
                    {/* Title */}
                    <h2 className="caption mt-6">
                        {item.title}
                    </h2>

                    {/* Description */}
                    <p className="subtitle-medium">
                        {item.description}
                    </p>

                    {/* ИСПОЛЬЗУЕМ НОВЫЙ КОМПОНЕНТ */}
                    {item.tags && item.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                                <Tag key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}