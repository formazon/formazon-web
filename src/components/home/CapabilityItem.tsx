// src/components/home/CapabilityItem.tsx
import type { Capability } from "@/lib/content/capabilities";

type CapabilityItemProps = {
    capability: Capability;
};

export function CapabilityItem({ capability }: CapabilityItemProps) {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-surface p-5 transition-colors hover:border-text-muted/30">
            <h3 className="text-sm font-semibold text-foreground">
                {capability.title}
            </h3>
            <p className="text-xs leading-relaxed text-text-muted">
                {capability.description}
            </p>
            <ul className="mt-1 space-y-1.5 text-xs text-text-muted/90">
                {capability.points.map((point) => (
                    <li key={point} className="flex gap-2 items-start">
                        {/* Точка маркированного списка */}
                        <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-text-muted" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}