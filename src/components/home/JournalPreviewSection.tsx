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
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    Journal
                </h2>

                <Link
                    href="/journal"
                    className="text-xs text-text-muted underline underline-offset-4 transition-colors hover:text-foreground"
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