// src/components/journal/JournalLayout.tsx
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import type { JournalEntry, JournalPost } from "@/lib/content/journal";

type JournalLayoutProps = {
    entry: JournalEntry;
    previous?: JournalPost;
    next?: JournalPost;
};

export function JournalLayout({ entry, previous, next }: JournalLayoutProps) {
    const { title, date, tag, body, coverImage } = entry;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <PageShell>
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs text-zinc-500">
                <Link href="/journal" className="hover:text-zinc-200">
                    Journal
                </Link>
                <span className="mx-2">/</span>
                <span className="text-zinc-300">{title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8 space-y-4">
                {tag && (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                        {tag}
                    </p>
                )}
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    {title}
                </h1>
                <p className="text-xs text-zinc-500">{formattedDate}</p>
            </header>

            {/* Cover image (если есть) */}
            {coverImage && (
                <div className="mb-8 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40">
                    <Image
                        src={coverImage.src}
                        alt={coverImage.alt}
                        width={coverImage.width}
                        height={coverImage.height}
                        className="h-auto w-full object-cover"
                    />
                </div>
            )}

            {/* Body */}
            <section className="space-y-5">
                {body.map((paragraph, index) => (
                    <p
                        key={index}
                        className="max-w-3xl text-sm leading-relaxed text-zinc-300"
                    >
                        {paragraph}
                    </p>
                ))}
            </section>

            {/* Navigation */}
            <section className="mt-12 border-t border-zinc-900 pt-8">
                <div className="grid gap-4 md:grid-cols-2">
                    {previous && (
                        <Link
                            href={`/journal/${previous.slug}`}
                            className="group flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4 transition hover:border-zinc-700 hover:bg-zinc-900/60"
                        >
                            <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                ← Previous
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-zinc-100 group-hover:text-white">
                                    {previous.title}
                                </p>
                                <p className="text-[11px] text-zinc-500">
                                    {new Date(previous.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </Link>
                    )}

                    {next && (
                        <Link
                            href={`/journal/${next.slug}`}
                            className="group flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4 text-right transition hover:border-zinc-700 hover:bg-zinc-900/60"
                        >
                            <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                Next →
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-zinc-100 group-hover:text-white">
                                    {next.title}
                                </p>
                                <p className="text-[11px] text-zinc-500">
                                    {new Date(next.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>
                        </Link>
                    )}
                </div>

                <div className="mt-6 text-xs">
                    <Link
                        href="/journal"
                        className="text-zinc-500 underline underline-offset-4 hover:text-zinc-200"
                    >
                        Back to all entries
                    </Link>
                </div>
            </section>
        </PageShell>
    );
}

