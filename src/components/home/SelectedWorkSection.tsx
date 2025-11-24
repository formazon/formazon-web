import Link from "next/link";
import { featuredWorkItems } from "@/lib/content/work";
import { WorkCard } from "./WorkCard";
import { WorkGrid } from "@/components/work/WorkGrid";

export function SelectedWorkSection() {
    return (
        <section className="mb-16 space-y-6">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                    Selected work
                </h2>
                <Link
                    href="/work"
                    className="text-xs text-zinc-500 underline underline-offset-4 hover:text-zinc-200"
                >
                    View all
                </Link>
            </div>

            <WorkGrid
                items={featuredWorkItems}
                columns={2}
                renderItem={(item) => <WorkCard item={item} />}
            />
        </section>
    );
}
