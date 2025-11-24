// src/components/home/JournalPostCard.tsx
import Link from "next/link";
import type { JournalPost } from "@/lib/content/journal";

type Props = {
    post: JournalPost;
};

export function JournalPostCard({ post }: Props) {
    return (
        <Link
            href={`/journal/${post.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/30 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/40"
        >
            <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                    {post.tag}
                </p>

                <h3 className="text-base font-medium text-zinc-100 group-hover:text-white">
                    {post.title}
                </h3>

                <p className="text-sm text-zinc-400">{post.excerpt}</p>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
            </p>
        </Link>
    );
}
