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
            <nav className="mb-6 text-xs text-text-muted transition-colors">
                <Link href="/journal" className="hover:text-foreground transition-colors">
                    Journal
                </Link>
                <span className="mx-2 opacity-50">/</span>
                <span className="text-foreground">{title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8 space-y-4">
                {tag && (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                        {tag}
                    </p>
                )}
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {title}
                </h1>
                <p className="text-xs text-text-muted">{formattedDate}</p>
            </header>

            {/* Cover image (если есть) */}
            {coverImage && (
                <div className="mb-8 overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted">
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
                        // text-foreground с небольшой прозрачностью часто читается лучше,
                        // но чистый text-foreground тоже подойдет.
                        className="max-w-3xl text-sm leading-relaxed text-foreground/90"
                    >
                        {paragraph}
                    </p>
                ))}
            </section>

            {/* Navigation */}
            <section className="mt-12 border-t border-border-subtle pt-8">
                <div className="grid gap-4 md:grid-cols-2">
                    {previous && (
                        <Link
                            href={`/journal/${previous.slug}`}
                            className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-muted p-4 transition-all hover:border-text-muted/50 hover:bg-surface-muted/80"
                        >
                            <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-text-muted transition-colors group-hover:text-text-muted/80">
                                ← Previous
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-foreground transition-colors">
                                    {previous.title}
                                </p>
                                <p className="text-[11px] text-text-muted">
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
                            className="group flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-muted p-4 text-right transition-all hover:border-text-muted/50 hover:bg-surface-muted/80"
                        >
                            <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-text-muted transition-colors group-hover:text-text-muted/80">
                                Next →
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-foreground transition-colors">
                                    {next.title}
                                </p>
                                <p className="text-[11px] text-text-muted">
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
                        className="text-text-muted underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                        Back to all entries
                    </Link>
                </div>
            </section>
        </PageShell>
    );
}