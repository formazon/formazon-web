// src/components/work/SelectedWorkSection.tsx
import { featuredWorkItems } from "@/lib/content/work";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkCard } from "@/components/work/WorkCard";

export function SelectedWorkSection() {
    return (
        <section className="mb-16 space-y-6">
            <WorkGrid
                items={featuredWorkItems}
                columns={2}
                renderItem={(item) => <WorkCard item={item} />}
            />
        </section>
    );
}