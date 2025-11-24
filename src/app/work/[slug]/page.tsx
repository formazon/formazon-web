// src/app/work/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkCaseLayout } from "@/components/work/WorkCaseLayout";
import { getWorkCase, getRandomWorkCase, workCases } from "@/lib/content/work"; // Добавили импорт

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return Object.keys(workCases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const workCase = getWorkCase(slug);

    if (!workCase) {
        return { title: "Case not found — Formazon" };
    }

    return {
        title: `${workCase.title} — Work — Formazon`,
        description: workCase.description,
    };
}

export default async function WorkCasePage({ params }: Props) {
    const { slug } = await params;

    const workCase = getWorkCase(slug);

    if (!workCase) {
        return notFound();
    }

    // Получаем следующий случайный проект
    const nextCase = getRandomWorkCase(slug);

    // Передаем nextCase в лэйаут
    return <WorkCaseLayout workCase={workCase} nextCase={nextCase} />;
}