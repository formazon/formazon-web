// src/components/work/WorkCaseLayout.tsx
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import type { WorkCase, WorkItem } from "@/lib/content/work";
import {WorkCard} from "@/components/work/WorkCard";
import { Tag } from "@/components/ui/Tag";

type WorkCaseLayoutProps = {
    workCase: WorkCase;
    nextCase?: WorkItem;
};

export function WorkCaseLayout({ workCase, nextCase }: WorkCaseLayoutProps) {
    const {
        title,
        heroSummary,
        tags,
        sections,
        images,
        avatar,
    } = workCase;

    // Объединяем контент: берем первые два изображения и первый абзац текста
    const firstTwoImages = images?.slice(0, 2) || [];
    const firstSection = sections?.[0];

    return (
        <PageShell>
            {/* Breadcrumb */}
            <nav className="mb-6 caption text-foreground">
                <Link href="/work" className="hover:opacity-70 transition-opacity">
                    Work
                </Link>
                <span className="mx-2 opacity-50">/</span>
                <span>{title}</span>
            </nav>

            {/* Hero */}
            <header className="mb-20 space-y-4">
                <div className="flex items-start gap-1">
                    <h1 className="h1 text-foreground mb-6">
                        {title}
                    </h1>
                    {avatar && (
                        <Image
                            src={avatar}
                            alt={`${title} avatar`}
                            width={32}
                            height={32}
                            className="w-8 h-8 shrink-0"
                        />
                    )}
                </div>
                {heroSummary && (
                    <p className="subtitle text-foreground mb-20">
                        {heroSummary}
                    </p>
                )}
                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="mt-0 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Tag key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </div>
                )}
            </header>

            {/* Единый контейнер с контентом */}
            <div className="space-y-8">
                {/* Первые два изображения на всю ширину */}
                {firstTwoImages.map((image) => (
                    <figure key={image.src} className="w-full">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-auto w-full object-cover"
                            priority={false}
                        />
                    </figure>
                ))}

                {/* Первый абзац текста */}
                {firstSection && (
                    <p className="body text-black">
                        {firstSection.body}
                    </p>
                )}
            </div>

            {/* НОВАЯ СЕКЦИЯ: Read Next */}
            {nextCase && (
                <section className="mt-24 border-t border-border-subtle pt-12">
                    <div className="mb-8 flex items-baseline justify-between">
                        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            Up Next
                        </h2>
                        <Link
                            href="/work"
                            className="text-xs text-text-muted underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                            View all work
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2">
                        {/* Показываем карточку. Можно растянуть на всю ширину или ограничить половиной */}
                        <WorkCard item={nextCase} />
                    </div>
                </section>
            )}
        </PageShell>
    );
}