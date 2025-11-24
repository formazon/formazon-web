// src/components/home/HomeHero.tsx
import Link from "next/link";

export type HomeHeroProps = {
    title: string;
    subtitle: string;
    primaryCta: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
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
            {/* Верхний текстовый блок */}
            <div className="space-y-6">
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                    {title}
                </h1>

                <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
                    {subtitle}
                </p>

                {highlightLine && (
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {highlightLine}
                    </p>
                )}
            </div>

            {/* Кнопки */}
            <div className="flex flex-wrap gap-3">
                <Link
                    href={primaryCta.href}
                    className="rounded-full bg-zinc-100 px-5 py-2 text-xs font-medium text-black transition hover:bg-white"
                >
                    {primaryCta.label}
                </Link>

                {secondaryCta && (
                    <Link
                        href={secondaryCta.href}
                        className="rounded-full border border-zinc-700 px-5 py-2 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
                    >
                        {secondaryCta.label}
                    </Link>
                )}
            </div>
        </section>
    );
}
