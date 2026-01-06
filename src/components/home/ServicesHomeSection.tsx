// src/components/home/ServicesHomeSection.tsx
import { services } from "@/lib/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { H2Index } from "@/components/ui/H2Index";
import { QuadroDot } from "@/components/ui/QuadroDot";

export function ServicesHomeSection() {
    return (
        <section className="mb-16 space-y-6">
            <QuadroDot />
            <H2Index index={1}>
                What I do
            </H2Index>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Если услуг будет много, тут можно сделать .slice(0, 4),
                   но сейчас их 4, так что показываем все.
                */}
                {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
        </section>
    );
}