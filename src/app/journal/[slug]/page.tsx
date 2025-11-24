// src/app/journal/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    getJournalEntry,
    getJournalNeighbors,
    journalEntries,
} from "@/lib/content/journal";
import { JournalLayout } from "@/components/journal/JournalLayout";
import { journalEnabled } from "@/lib/config/features";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    // Если журнал выключен — не генерим вообще никаких страниц
    if (!journalEnabled) {
        return [];
    }

    return Object.keys(journalEntries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // Даже если кто-то дернет напрямую — покажем 404-заголовок
    if (!journalEnabled) {
        return {
            title: "Journal is not available — Formazon",
        };
    }

    const { slug } = await params;
    const entry = getJournalEntry(slug);

    if (!entry) {
        return {
            title: "Journal entry not found — Formazon",
        };
    }

    return {
        title: `${entry.title} — Journal — Formazon`,
        description: entry.excerpt,
    };
}

export default async function JournalEntryPage({ params }: Props) {
    if (!journalEnabled) {
        return notFound();
    }

    const { slug } = await params;
    const entry = getJournalEntry(slug);

    if (!entry) {
        return notFound();
    }

    const { previous, next } = getJournalNeighbors(slug);

    return <JournalLayout entry={entry} previous={previous} next={next} />;
}

