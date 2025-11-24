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
            <nav className="mb-6 text-xs text-zinc-500">
                <Link href="/work" className="hover:text-zinc-200">
                    Work
                </Link>
                <span className="mx-2">/</span>
                <span className="text-zinc-300">{title}</span>
            </nav>

            {/* Hero */}
            <header className="mb-10 space-y-4">
                {heroKicker && (
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {heroKicker}
                    </p>
                )}
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                    {title}
                </h1>
                {heroSummary && (
                    <p className="max-w-2xl text-sm text-zinc-400">
                        {heroSummary}
                    </p>
                )}
            </header>

            {/* Meta info */}
            <section className="mb-12 grid gap-6 text-xs text-zinc-400 sm:grid-cols-2 md:grid-cols-4">
                {role && (
                    <div>
                        <p className="mb-1 font-medium text-zinc-500">Role</p>
                        <p>{role}</p>
                    </div>
                )}
                {type && (
                    <div>
                        <p className="mb-1 font-medium text-zinc-500">Type</p>
                        <p>{type}</p>
                    </div>
                )}
                {timeframe && (
                    <div>
                        <p className="mb-1 font-medium text-zinc-500">Timeframe</p>
                        <p>{timeframe}</p>
                    </div>
                )}
                {services && services.length > 0 && (
                    <div>
                        <p className="mb-1 font-medium text-zinc-500">Scope</p>
                        <ul className="space-y-0.5">
                            {services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            {/* Text sections */}
            <section className="space-y-10">
                {sections.map((section) => (
                    <article key={section.id} className="space-y-3">
                        <h2 className="text-sm font-semibold text-zinc-100">
                            {section.title}
                        </h2>
                        <p className="max-w-3xl text-sm leading-relaxed text-zinc-300">
                            {section.body}
                        </p>
                    </article>
                ))}
            </section>

            {/* Gallery / visuals */}
            <section className="mt-12 border-t border-zinc-900 pt-10">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Visuals
                </p>

                {!images || images.length === 0 ? (
                    <>
                        <p className="max-w-2xl text-xs text-zinc-500">
                            This is a placeholder for screenshots, UI mockups, or diagrams.
                            You can replace this block with a real gallery later.
                        </p>
                        <div className="mt-4 h-40 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40" />
                    </>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                        {images.map((image) => (
                            <figure
                                key={image.src}
                                className="overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/60"
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
                                    <figcaption className="px-4 py-3 text-xs text-zinc-500">
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
