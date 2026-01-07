// src/components/home/JournalPostCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { JournalPost } from "@/lib/content/journal";
import { journalEntries } from "@/lib/content/journal";
import { Tag } from "../ui/Tag";

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
            className="group flex flex-col overflow-hidden transition hover:bg-surface"
        >
            {/* Cover image */}
            {coverImage && (
                <div className="relative aspect-[1.618/1] w-full overflow-hidden rounded-sm">
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
            <div 
                className="flex flex-1 flex-col justify-between py-5 px-0 border-0"
                style={{ boxSizing: 'content-box', borderColor: 'transparent', borderStyle: 'none', borderImage: 'none' }}
            >
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
        </Link>
    );
}
