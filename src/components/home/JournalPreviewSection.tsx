// src/components/home/JournalPreviewSection.tsx
import Link from "next/link";
import { journalPosts } from "@/lib/content/journal";
import { JournalPostCard } from "./JournalPostCard";
import { journalEnabled } from "@/lib/config/features";
import { H2Index } from "@/components/ui/H2Index";
import { QuadroDot } from "@/components/ui/QuadroDot";

export function JournalPreviewSection() {
    if (!journalEnabled) {
        return null;
    }

    return (
        <section className="mb-20 mt-20 space-y-6">
            <QuadroDot />
            {/* Header */}
            <div className="flex items-baseline justify-between gap-4">
                <H2Index index={4}>
                    Journal
                </H2Index>

                <Link
                    href="/journal"
                    className="label underline underline-offset-4 transition-colors hover:text-foreground"
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