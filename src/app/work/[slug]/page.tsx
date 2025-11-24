// src/app/work/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkCaseLayout } from "@/components/work/WorkCaseLayout";
import { getWorkCase, workCases } from "@/lib/content/work";

// ВАЖНО: params теперь Promise
type Props = {
    params: Promise<{ slug: string }>;
};

// Генерим статику для всех кейсов (включая fuelet)
export function generateStaticParams() {
    return Object.keys(workCases).map((slug) => ({ slug }));
}

// generateMetadata тоже должен дождаться params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const workCase = getWorkCase(slug);

    if (!workCase) {
        return {
            title: "Case not found — Formazon",
        };
    }

    return {
        title: `${workCase.title} — Work — Formazon`,
        description: workCase.description,
    };
}

// Сам компонент страницы тоже async и ждёт params
export default async function WorkCasePage({ params }: Props) {
    const { slug } = await params;

    const workCase = getWorkCase(slug);

    if (!workCase) {
        return notFound();
    }

    return <WorkCaseLayout workCase={workCase} />;
}
