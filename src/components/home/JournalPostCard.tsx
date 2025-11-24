// src/components/home/JournalPostCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { JournalPost } from "@/lib/content/journal";
import { journalEntries } from "@/lib/content/journal";

type Props = {
    post: JournalPost;
};

export function JournalPostCard({ post }: Props) {
    // Достаём полную запись, чтобы получить coverImage
    const fullEntry = journalEntries[post.slug];
    const coverImage = fullEntry?.coverImage ?? null;

    return (
        <Link
            href={`/journal/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted transition hover:bg-surface"
        >
            {/* Cover image */}
            {coverImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={coverImage.src}
                        alt={coverImage.alt}
                        width={coverImage.width}
                        height={coverImage.height}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </div>
            )}

            {/* Text content */}
            <div className="flex flex-1 flex-col justify-between p-5">
                <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                        {post.tag ?? "Journal"}
                    </p>

                    <h3 className="text-base font-medium text-foreground group-hover:text-foreground">
                        {post.title}
                    </h3>

                    <p className="text-sm text-text-muted">
                        {post.excerpt}
                    </p>
                </div>

                <p className="mt-4 text-xs text-text-muted">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>
            </div>
        </Link>
    );
}
