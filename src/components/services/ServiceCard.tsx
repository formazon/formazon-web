// src/components/services/ServiceCard.tsx
import type { Service } from "@/lib/content/services";

type ServiceCardProps = {
    service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <article className="flex flex-col rounded-2xl border border-border-subtle bg-surface p-5 transition-colors hover:border-text-muted/30 hover:bg-surface-muted/30">
            <header className="mb-3 space-y-1">
                <h3 className="text-sm font-semibold text-foreground">
                    {service.title}
                </h3>
                {service.subtitle && (
                    <p className="text-xs text-text-muted opacity-80">
                        {service.subtitle}
                    </p>
                )}
            </header>

            <p className="mb-4 text-sm leading-relaxed text-text-muted">
                {service.description}
            </p>

            {/* mt-auto прижимает список к низу, если карточки разной высоты */}
            <ul className="mt-auto space-y-1.5 text-xs text-text-muted/90">
                {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 items-start">
                        {/* Декоративная черточка или точка */}
                        <span className="mt-[7px] h-[2px] w-[6px] shrink-0 rounded-full bg-border-subtle" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}