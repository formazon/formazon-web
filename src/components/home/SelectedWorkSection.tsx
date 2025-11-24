// src/components/work/SelectedWorkSection.tsx
import { featuredWorkItems } from "@/lib/content/work";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkCard } from "@/components/work/WorkCard";
import { Button } from "@/components/ui/Button";

export function SelectedWorkSection() {
    return (
        <section className="mb-16 space-y-6">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                    Selected work
                </h2>
                <Button href="/work" variant="ghost" className="px-0 underline underline-offset-4">
                    View all
                </Button>
            </div>

            <WorkGrid
                items={featuredWorkItems}
                columns={2}
                renderItem={(item) => <WorkCard item={item} />}
            />
        </section>
    );
}