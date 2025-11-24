// src/components/home/CapabilitiesSection.tsx
import { capabilities } from "@/lib/content/capabilities";
import { CapabilityItem } from "./CapabilityItem";

export function CapabilitiesSection() {
    return (
        <section className="mb-16 space-y-6">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                What I do
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                {capabilities.map((capability) => (
                    <CapabilityItem key={capability.title} capability={capability} />
                ))}
            </div>
        </section>
    );
}