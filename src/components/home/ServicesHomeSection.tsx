// src/components/home/ServicesHomeSection.tsx
import Link from "next/link";
import { services } from "@/lib/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesHomeSection() {
    return (
        <section className="mb-16 space-y-6">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                    What I do
                </h2>
                <Link
                    href="/services"
                    className="text-xs text-text-muted underline underline-offset-4 transition-colors hover:text-foreground"
                >
                    Detailed approach
                </Link>
            </div>

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