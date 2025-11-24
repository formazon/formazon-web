// src/components/home/CapabilityItem.tsx
import type { Capability } from "@/lib/content/capabilities";

type CapabilityItemProps = {
    capability: Capability;
};

export function CapabilityItem({ capability }: CapabilityItemProps) {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-zinc-900 bg-zinc-950/40 p-5">
            <h3 className="text-sm font-semibold text-zinc-50">
                {capability.title}
            </h3>
            <p className="text-xs text-zinc-400">
                {capability.description}
            </p>
            <ul className="mt-1 space-y-1 text-xs text-zinc-500">
                {capability.points.map((point) => (
                    <li key={point} className="flex gap-2">
                        <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-zinc-500" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
