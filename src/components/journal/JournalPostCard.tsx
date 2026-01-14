// src/components/journal/JournalPostCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { JournalPost } from "@/lib/content/journal";
import { journalEntries } from "@/lib/content/journal";
import { journalEnabled } from "@/lib/config/features";
import { Tag } from "../ui/Tag";

interface Props {
    post: JournalPost;
}

export function JournalPostCard({ post }: Props) {
    // Достаём полную запись, чтобы получить coverImage
    const fullEntry = journalEntries[post.slug];
    const coverImage = fullEntry?.coverImage ?? null;

    const content = (
        <>
            {/* Cover image */}
            {coverImage && (
                <div className="relative aspect-[1.618/1] w-full overflow-hidden rounded-sm">
                    <Image
                        src={coverImage.src}
                        alt={coverImage.alt}
                        width={coverImage.width}
                        height={coverImage.height}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Text content */}
            <div className="flex flex-1 flex-col justify-between py-5 px-0">
                <div className="space-y-2">
                    <h3 className="subtitle-medium">
                        {post.title}
                    </h3>

                    <p className="text-text-muted">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-4 flex items-center gap-4">
                    {post.tag && (
                        <Tag>{post.tag ?? "Journal"}</Tag>
                    )}
                    <p className="label text-text-muted">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>
            </div>
            </div>
        </>
    );

    if (!journalEnabled) {
        return (
            <div className="group flex flex-col overflow-hidden transition">
                {content}
            </div>
        );
    }

    return (
        <Link
            href={`/journal/${post.slug}`}
            className="group flex flex-col overflow-hidden transition hover:bg-surface"
        >
            {content}
        </Link>
    );
}
