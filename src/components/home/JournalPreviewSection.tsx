// src/components/home/JournalPreviewSection.tsx
import Link from "next/link";
import { journalPosts } from "@/lib/content/journal";
import { JournalPostCard } from "./JournalPostCard";
import { journalEnabled } from "@/lib/config/features";

export function JournalPreviewSection() {
    if (!journalEnabled) {
        return null;
    }

    return (
        <section className="mb-20 mt-20 space-y-6">
            {/* Header */}
            <div className="flex items-baseline justify-between">
                <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Journal
                </h2>

                <Link
                    href="/journal"
                    className="text-xs text-zinc-500 underline underline-offset-4 hover:text-zinc-200"
                >
                    View all
                </Link>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                {journalPosts.slice(0, 3).map((post) => (
                    <JournalPostCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
}

