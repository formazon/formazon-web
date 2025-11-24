// src/components/home/HomeHero.tsx
import { Button } from "@/components/ui/Button";

export type HomeHeroProps = {
    title: string;
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    highlightLine?: string;
};

export function HomeHero({
                             title,
                             subtitle,
                             primaryCta,
                             secondaryCta,
                             highlightLine,
                         }: HomeHeroProps) {
    return (
        <section className="mb-16 space-y-8">
            <div className="space-y-6">
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {title}
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                    {subtitle}
                </p>
                {highlightLine && (
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted/80">
                        {highlightLine}
                    </p>
                )}
            </div>

            {/* Использование нового компонента */}
            <div className="flex flex-wrap gap-3">
                <Button href={primaryCta.href}>
                    {primaryCta.label}
                </Button>

                {secondaryCta && (
                    <Button href={secondaryCta.href} variant="outline">
                        {secondaryCta.label}
                    </Button>
                )}
            </div>
        </section>
    );
}