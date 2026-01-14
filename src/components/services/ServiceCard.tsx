// src/components/services/ServiceCard.tsx
import type { Service } from "@/lib/content/services";
import { Dot } from "@/components/ui/Dot";

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <article className="flex flex-col rounded-sm border border-border-subtle bg-surface p-5">
            <header className="mb-3 space-y-1">
                <h3 className="subtitle-medium">
                    {service.title}
                </h3>
                {service.subtitle && (
                    <p className="label text-text-muted">
                        {service.subtitle}
                    </p>
                )}
            </header>

            <p className="mb-4 body-16 text-foreground">
                {service.description}
            </p>

            {/* mt-auto прижимает список к низу, если карточки разной высоты */}
            <ul className="mt-auto space-y-1.5 body-16">
                {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start">
                        {/* Декоративная черточка или точка */}
                        <span className="mt-3 shrink-0">
                            <Dot bgColor="bg-black-40" />
                        </span>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}