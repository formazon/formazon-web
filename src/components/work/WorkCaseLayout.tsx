"use client";

// src/components/work/WorkCaseLayout.tsx
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { PageShell } from "@/components/layout/PageShell";
import type { WorkCase, WorkItem } from "@/lib/content/work";
import {WorkCard} from "@/components/work/WorkCard";
import { Tag } from "@/components/ui/Tag";
import { Shaper } from "@/components/ui/Shaper";
import { H2Index } from "@/components/ui/H2Index";
import { QuadroDot } from "../ui/QuadroDot";

type WorkCaseLayoutProps = {
    workCase: WorkCase;
    previousCase?: WorkItem;
    nextCase?: WorkItem;
};

export function WorkCaseLayout({ workCase, previousCase, nextCase }: WorkCaseLayoutProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    
    const {
        title,
        heroSummary,
        tags,
        sections,
        images,
        avatar,
    } = workCase;

    // Все изображения для вывода
    const allImages = images || [];
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
                <div className="flex items-start gap-2.5 sm:gap-4">
                    <h1 className="h1 mb-6">
                        {title}
                    </h1>
                    {avatar && (
                        workCase.slug === 'appfortype' ? (
                            <div className="relative rounded-full dark:bg-white mt-1">
                                <Image
                                    src={avatar}
                                    alt={`${title} avatar`}
                                    width={64}
                                    height={64}
                                    className="w-11 sm:w-16"
                                    style={{ height: 'auto' }}
                                />
                            </div>
                        ) : (
                            <Image
                                src={avatar}
                                alt={`${title} avatar`}
                                width={64}
                                height={64}
                                className="w-11 sm:w-16 mt-1"
                                style={{ 
                                    height: 'auto',
                                    filter: workCase.slug === 'fuelet' && isDark ? 'invert(1)' : 'none' 
                                }}
                            />
                        )
                    )}
                    
                </div>
                {heroSummary && (
                    <p className="subtitle mb-20 max-w-3xl">
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
            <div className="space-y-8 mb-20">
                {/* Все изображения на всю ширину */}
                {allImages.map((image, index) => {
                    // Проверяем, нужно ли группировать текущее изображение со следующим
                    const nextImage = allImages[index + 1];
                    const shouldGroup = image.groupWithNext && nextImage;
                    
                    // Если это второе изображение в группе, пропускаем его (оно уже отображено)
                    const prevImage = index > 0 ? allImages[index - 1] : null;
                    const isSecondInGroup = prevImage?.groupWithNext === true;
                    
                    if (isSecondInGroup) {
                        return null;
                    }

                    // Подсчитываем индекс для H2Index (учитывая только отображенные изображения с контентом)
                    let contentIndex = 0;
                    for (let i = 0; i <= index; i++) {
                        const img = allImages[i];
                        if (i > 0 && allImages[i - 1]?.groupWithNext) {
                            continue; // Пропускаем второе изображение в группе
                        }
                        if (img?.content) {
                            contentIndex++;
                        }
                    }

                    return (
                        <div key={image.src} className="mb-20">
                            {shouldGroup ? (
                                // Два изображения рядом
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <figure className="w-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            className="h-auto w-full object-cover rounded"
                                            priority={index === 0}
                                        />
                                    </figure>
                                    {nextImage && (
                                        <figure className="w-full">
                                            <Image
                                                src={nextImage.src}
                                                alt={nextImage.alt}
                                                width={nextImage.width}
                                                height={nextImage.height}
                                                className="h-auto w-full object-cover rounded"
                                                priority={false}
                                            />
                                        </figure>
                                    )}
                                </div>
                            ) : (
                                // Одно изображение на всю ширину
                                <figure className="w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                        className="h-auto w-full object-cover rounded"
                                        priority={index === 0}
                                    />
                                </figure>
                            )}
                            {/* Добавляем контент после изображения, если он есть */}
                            {image.content && (
                                <>
                                    {image.content.title && (
                                        <div className="max-w-3xl">
                                            <H2Index index={contentIndex}>
                                                {image.content.title}
                                            </H2Index>
                                        </div>
                                    )}
                                    {image.content.body && (
                                        <p className="mt-6 mb-20 max-w-3xl">
                                            {image.content.body}
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}

                {/* Первый абзац текста */}
                {firstSection && (
                    <>
                        <div className="max-w-3xl">
                            <H2Index index={allImages.filter(img => img.content).length + 1}>
                                {firstSection.title || "Overview"}
                            </H2Index>
                        </div>
                        <p className="mt-6 max-w-3xl">
                            {firstSection.body}
                        </p>
                    </>
                )}
            </div>

            <QuadroDot />

            {/* НОВАЯ СЕКЦИЯ: Previous & Next */}
            {(previousCase || nextCase) && (
                <section className="mt-10 pt-12 pb-20">
                    <div className="mb-10 flex items-baseline justify-between">
                        <h2 className="label-medium">
                            {previousCase && nextCase ? "More Work" : "Up Next"}
                        </h2>
                        <Link
                            href="/work"
                            className="label text-text-muted underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                            View all work
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {previousCase && <WorkCard item={previousCase} />}
                        {nextCase && <WorkCard item={nextCase} />}
                    </div>
                </section>
            )}
        </PageShell>
    );
}