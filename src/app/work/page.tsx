import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { workItems } from "@/lib/content/work";
import { WorkCard } from "@/components/work/WorkCard";
import { QuadroDot } from "@/components/ui/QuadroDot";

export const metadata: Metadata = {
    title: "Work — Formazon",
    description:
        "Selected work across mobile apps, AI platforms, robotics tools, fintech products, and brand systems.",
};

export default function WorkPage() {
    const items: React.ReactNode[] = [];
    
    workItems.forEach((item, index) => {
        items.push(
            <div key={item.slug}>
                <WorkCard item={item} />
            </div>
        );
        
        // Добавляем QuadroDot после каждых двух карточек (после индексов 1, 3, 5...)
        if ((index + 1) % 2 === 0 && index < workItems.length - 1) {
            items.push(
                <div key={`quadro-${index}`} className="col-span-1 md:col-span-2">
                    <QuadroDot />
                </div>
            );
        }
    });

    return (
        <PageShell>
            {/* Intro / hero для списка работ */}
            <section className="mb-12 space-y-4">
                <p className="caption">
                    Work
                </p>
                <h1 className="h1 max-w-4xl">
                    Mobile apps, AI platforms, robotics tools, fintech products, and brand systems.
                </h1>
            </section>

            {/* Сетка кейсов */}
            <section>
                <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2">
                    {items}
                </div>
            </section>
        </PageShell>
    );
}
