// src/components/journal/JournalLayout.tsx
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import type { JournalEntry, JournalPost } from "@/lib/content/journal";
import { Tag } from "@/components/ui/Tag";
import { QuadroDot } from "@/components/ui/QuadroDot";
import { JournalNavigationCard } from "./JournalNavigationCard";

interface JournalLayoutProps {
    entry: JournalEntry;
    previous?: JournalPost;
    next?: JournalPost;
}

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
            <nav className="mb-6 caption">
                <Link href="/journal" className="hover:opacity-70 transition-opacity">
                    Journal
                </Link>
                <span className="mx-2 opacity-50">/</span>
                <span>{title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8 space-y-4">
                <h1 className="max-w-3xl h1">
                    {title}
                </h1>
                <p className="label-medium">{formattedDate}</p>
                {tag && (
                    <Tag>{tag}</Tag>
                )}
            </header>

            {/* Cover image (если есть) */}
            {coverImage && (
                <div className="mb-8 overflow-hidden rounded-sm border border-border-subtle bg-surface-muted">
                    <Image
                        src={coverImage.src}
                        alt={coverImage.alt}
                        width={coverImage.width}
                        height={coverImage.height}
                        className="h-auto w-full object-cover"
                        priority
                    />
                </div>
            )}

            {/* Body */}
            <section className="space-y-5">
                {body.map((paragraph, index) => (
                    <p
                        key={index}
                        className="max-w-3xl"
                    >
                        {paragraph}
                    </p>
                ))}
            </section>

            {/* Navigation */}
            <section className="mt-12 pt-8">
                <QuadroDot />
                <div className="grid gap-4 md:grid-cols-2 mt-8">
                    {previous && (
                        <JournalNavigationCard
                            post={previous}
                            direction="previous"
                            href={`/journal/${previous.slug}`}
                        />
                    )}

                    {next && (
                        <JournalNavigationCard
                            post={next}
                            direction="next"
                            href={`/journal/${next.slug}`}
                        />
                    )}
                </div>

                <div className="mt-10 label mb-10">
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