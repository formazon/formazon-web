import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { workItems } from "@/lib/content/work";
import { WorkCard } from "@/components/work/WorkCard";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
    title: "Work — Formazon",
    description:
        "Selected work across mobile apps, AI platforms, robotics tools, fintech products, and brand systems.",
};

export default function WorkPage() {
    return (
        <PageShell>
            {/* Intro / hero для списка работ */}
            <section className="mb-12 space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Work
                </p>
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    Selected work across apps, AI platforms, robotics tools, and brands.
                </h1>
                <p className="max-w-2xl text-sm text-zinc-400">
                    I usually work as a founder, product partner, or design lead — shaping
                    products from idea to launch, or helping existing teams move forward
                    with clarity.
                </p>
            </section>

            {/* Сетка кейсов */}
            <section>
                <WorkGrid
                    items={workItems}
                    columns={2}
                    renderItem={(item) => <WorkCard item={item} />}
                />
            </section>
        </PageShell>
    );
}
