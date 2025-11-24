// src/app/journal/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { journalPosts } from "@/lib/content/journal";
import { JournalPostCard } from "@/components/home/JournalPostCard";
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
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    Journal
                </p>
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Short notes on product, design, and AI.
                </h1>
                <p className="max-w-2xl text-sm text-text-muted">
                    I use this journal to capture patterns, decisions, and observations from
                    building products, interfaces, and systems.
                </p>
            </section>

            {/* List of posts */}
            <section className="grid gap-6 md:grid-cols-3">
                {journalPosts.map((post) => (
                    <JournalPostCard key={post.slug} post={post} />
                ))}
            </section>
        </PageShell>
    );
}
