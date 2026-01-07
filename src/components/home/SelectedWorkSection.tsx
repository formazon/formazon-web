// src/components/work/SelectedWorkSection.tsx
import { featuredWorkItems } from "@/lib/content/work";
import { WorkCard } from "@/components/work/WorkCard";
import { QuadroDot } from "@/components/ui/QuadroDot";
import { H2Index } from "@/components/ui/H2Index";

export function SelectedWorkSection() {
    const items: React.ReactNode[] = [];
    
    featuredWorkItems.forEach((item, index) => {
        items.push(
            <div key={item.slug}>
                <WorkCard item={item} />
            </div>
        );
        
        // Добавляем QuadroDot после каждых двух карточек (после индексов 1, 3, 5...)
        if ((index + 1) % 2 === 0 && index < featuredWorkItems.length - 1) {
            items.push(
                <div key={`quadro-${index}`} className="col-span-1 md:col-span-2">
                    <QuadroDot />
                </div>
            );
        }
    });
    
    return (
        <section className="mb-16 space-y-6">
            <H2Index index={1}>
                Work
            </H2Index>
            <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2">
                {items}
            </div>
        </section>
    );
}