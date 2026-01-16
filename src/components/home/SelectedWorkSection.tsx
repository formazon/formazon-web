// src/components/work/SelectedWorkSection.tsx
import { featuredWorkItems } from "@/lib/content/work";
import { WorkCard } from "@/components/work/WorkCard";
import { QuadroDot } from "@/components/ui/QuadroDot";
import { H2Index } from "@/components/ui/H2Index";

export function SelectedWorkSection() {
    // Use clean JSX instead of useMemo for array (rendering-hoist-jsx rule)
    return (
        <section className="mb-16 space-y-6">
            <H2Index index={1}>
                Work
            </H2Index>
            <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2 work-grid">
                {featuredWorkItems.flatMap((item, index) => {
                    const elements = [
                        <div key={item.slug} className="work-card-item">
                            <WorkCard item={item} />
                        </div>
                    ];
                    
                    // Add QuadroDot after every 2 items
                    if ((index + 1) % 2 === 0 && index < featuredWorkItems.length - 1) {
                        elements.push(
                            <div key={`quadro-${index}`} className="col-span-1 md:col-span-2">
                                <QuadroDot />
                            </div>
                        );
                    }
                    
                    return elements;
                })}
            </div>
        </section>
    );
}