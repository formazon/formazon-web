// src/components/work/WorkCaseLayout.tsx
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import type { WorkCase } from "@/lib/content/work";

type WorkCaseLayoutProps = {
    workCase: WorkCase;
};

export function WorkCaseLayout({ workCase }: WorkCaseLayoutProps) {
    const {
        title,
        heroKicker,
        heroSummary,
        role,
        type,
        timeframe,
        services,
        sections,
        images,
    } = workCase;

    return (
        <PageShell>
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs text-text-muted transition-colors">
                <Link href="/work" className="hover:text-foreground transition-colors">
                    Work
                </Link>
                <span className="mx-2 opacity-50">/</span>
                <span className="text-foreground">{title}</span>
            </nav>

            {/* Hero */}
            <header className="mb-10 space-y-4">
                {heroKicker && (
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                        {heroKicker}
                    </p>
                )}
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {title}
                </h1>
                {heroSummary && (
                    <p className="max-w-2xl text-sm text-text-muted leading-relaxed">
                        {heroSummary}
                    </p>
                )}
            </header>

            {/* Meta info */}
            <section className="mb-12 grid gap-6 text-xs sm:grid-cols-2 md:grid-cols-4 border-b border-border-subtle pb-12">
                {role && (
                    <div className="space-y-1">
                        <p className="font-medium text-text-muted">Role</p>
                        <p className="text-foreground">{role}</p>
                    </div>
                )}
                {type && (
                    <div className="space-y-1">
                        <p className="font-medium text-text-muted">Type</p>
                        <p className="text-foreground">{type}</p>
                    </div>
                )}
                {timeframe && (
                    <div className="space-y-1">
                        <p className="font-medium text-text-muted">Timeframe</p>
                        <p className="text-foreground">{timeframe}</p>
                    </div>
                )}
                {services && services.length > 0 && (
                    <div className="space-y-1">
                        <p className="font-medium text-text-muted">Scope</p>
                        <ul className="space-y-0.5 text-foreground">
                            {services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            {/* Text sections */}
            <section className="space-y-12">
                {sections.map((section) => (
                    <article key={section.id} className="space-y-3">
                        <h2 className="text-sm font-semibold text-foreground">
                            {section.title}
                        </h2>
                        {/* text-foreground/90 или text-text-muted?
                            Для длинных текстов лучше использовать цвет чуть светлее черного,
                            но темнее серого placeholder-а. text-text-muted в вашей теме достаточно читабелен.
                        */}
                        <p className="max-w-3xl text-sm leading-relaxed text-text-muted">
                            {section.body}
                        </p>
                    </article>
                ))}
            </section>

            {/* Gallery / visuals */}
            <section className="mt-16 border-t border-border-subtle pt-10">
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    Visuals
                </p>

                {!images || images.length === 0 ? (
                    <>
                        <p className="max-w-2xl text-xs text-text-muted">
                            This is a placeholder for screenshots, UI mockups, or diagrams.
                            You can replace this block with a real gallery later.
                        </p>
                        <div className="mt-4 h-40 rounded-2xl border border-dashed border-border-subtle bg-surface-muted/50" />
                    </>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                        {images.map((image) => (
                            <figure
                                key={image.src}
                                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className="h-auto w-full object-cover"
                                    priority={false}
                                />
                                {image.alt && (
                                    <figcaption className="border-t border-border-subtle px-4 py-3 text-xs text-text-muted bg-surface/50">
                                        {image.alt}
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>
                )}
            </section>
        </PageShell>
    );
}