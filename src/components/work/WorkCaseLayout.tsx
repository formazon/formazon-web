// src/components/work/WorkCaseLayout.tsx
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import type { WorkCase, WorkItem } from "@/lib/content/work";
import {WorkCard} from "@/components/work/WorkCard";
import { Tag } from "@/components/ui/Tag";
import { Shaper } from "@/components/ui/Shaper";
import { H2Index } from "@/components/ui/H2Index";

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
            <nav className="mb-6 caption">
                <Link href="/work" className="hover:opacity-70 transition-opacity">
                    Work
                </Link>
                <span className="mx-2 opacity-50">/</span>
                <span>{title}</span>
            </nav>

            {/* Hero */}
            <header className="mb-20 space-y-4">
                <div className="flex items-start gap-1">
                    <h1 className="h1 mb-6">
                        {title}
                    </h1>
                    {avatar && (
                        <Image
                            src={avatar}
                            alt={`${title} avatar`}
                            width={32}
                            height={32}
                            className="w-8 h-8 shrink-0 rounded"
                        />
                    )}
                </div>
                {heroSummary && (
                    <p className="subtitle mb-20">
                        {heroSummary}
                    </p>
                )}
                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="mt-0 flex flex-wrap gap-2 items-center">
                        <Shaper />
                        <span className="label-medium px-3 pt-[7px] pb-[7px]">
                            Tags
                        </span>
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
                {firstTwoImages.map((image, index) => (
                    <div key={image.src} className="mb-20">
                        <figure className="w-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="h-auto w-full object-cover rounded"
                                priority={false}
                            />
                        </figure>
                        {/* Добавляем заголовок и текст после первого изображения */}
                        {index === 0 && (
                            <>
                                <H2Index index={1}>
                                    Robotics as a Service
                                </H2Index>
                                <p className="mt-6 mb-20">
                                    The main product challenge was to balance simplicity with depth. We needed to handle high-resolution image processing and complex layering on mobile devices without overwhelming the user. Additionally, we had to build a sustainable content engine—moving beyond a static utility app to a dynamic platform with weekly asset drops and a thriving marketplace.
                                </p>
                            </>
                        )}
                    </div>
                ))}

                {/* Первый абзац текста */}
                {firstSection && (
                    <p>
                        {firstSection.body}
                    </p>
                )}
            </div>

            {/* НОВАЯ СЕКЦИЯ: Read Next */}
            {nextCase && (
                <section className="mt-24 border-t border-border-subtle pt-12 pb-20">
                    <div className="mb-20 flex items-baseline justify-between">
                        <h2 className="label-medium uppercase tracking-[0.2em] text-text-muted">
                            Up Next
                        </h2>
                        <Link
                            href="/work"
                            className="label text-text-muted underline underline-offset-4 hover:text-foreground transition-colors"
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