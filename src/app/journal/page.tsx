// src/app/journal/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { journalPosts } from "@/lib/content/journal";
import { JournalPostCard } from "@/components/journal/JournalPostCard";
import { journalEnabled } from "@/lib/config/features";

export const metadata: Metadata = {
    title: "Journal — Formazon",
    description: "Notes on product, design, AI, and building digital tools.",
};

export default function JournalPage() {
    if (!journalEnabled) {
        return notFound();
    }

    return (
        <PageShell>
            {/* Intro */}
            <section className="mb-12 space-y-4">
                <p className="caption">
                    Journal
                </p>
                <h1 className="h1 max-w-4xl">
                Short notes on product, design, and AI.
                </h1>
                <div className="space-y-4">
                    <p className="subtitle max-w-3xl">
                    Journal to capture patterns, decisions, and observations from
                    building products, interfaces, and systems
                    </p>
                </div>
            </section>

            {/* List of posts */}
            <section className="grid gap-6 md:grid-cols-3 mb-20">
                {journalPosts.map((post) => (
                    <JournalPostCard key={post.slug} post={post} />
                ))}
            </section>
        </PageShell>
    );
}
