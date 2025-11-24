// src/app/about/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { aboutContent } from "@/lib/content/about"; // Импортируем контент
import { Button } from "@/components/ui/Button"; // Используем наш компонент

export const metadata: Metadata = {
    title: "About — Formazon",
    description:
        "About Farid Rafikov — product founder and designer working across apps, AI tools, and robotics-driven systems.",
};

export default function AboutPage() {
    const { intro, story, snapshot, principles, cta } = aboutContent;

    return (
        <PageShell>
            {/* Intro */}
            <section className="mb-12 space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    {intro.label}
                </p>

                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {intro.title}
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
                    {intro.description}
                </p>
            </section>

            {/* Two-column layout: story + snapshot */}
            <section className="mb-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
                {/* Story */}
                <div className="space-y-5 text-sm leading-relaxed text-text-muted">
                    {story.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Snapshot Sidebar */}
                <aside className="space-y-6 rounded-2xl border border-border-subtle bg-surface-muted p-5 text-xs text-text-muted">

                    {/* Profile */}
                    <div className="space-y-2">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                            Snapshot
                        </p>
                        <ul className="space-y-1.5">
                            {snapshot.profile.map((item) => (
                                <li key={item.label} className="flex justify-between gap-4">
                                    <span className="text-text-muted">{item.label}</span>
                                    <span className="text-foreground text-right">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* History */}
                    <div className="space-y-2">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                            Previously building
                        </p>
                        <ul className="space-y-1.5">
                            {snapshot.history.map((item) => (
                                <li key={item.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                                    <span className="text-foreground font-medium">{item.name}</span>
                                    <span className="text-right opacity-80">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How I can help */}
                    <div className="space-y-2">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                            How I can help
                        </p>
                        <ul className="space-y-1.5 list-disc list-inside marker:text-text-muted/50">
                            {snapshot.services.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>

            {/* Way of working */}
            <section className="mb-16 space-y-4 border-t border-border-subtle pt-10">
                <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    Way of working
                </h2>

                <div className="grid gap-8 md:grid-cols-3 text-xs text-text-muted">
                    {principles.map((principle) => (
                        <div key={principle.title} className="space-y-2">
                            <p className="font-medium text-foreground">{principle.title}</p>
                            <p className="leading-relaxed">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle pt-10">
                <div className="flex flex-col gap-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            {cta.label}
                        </p>
                        <p className="text-sm text-foreground">
                            {cta.text}
                        </p>
                    </div>

                    <div>
                        <Button href={cta.href} variant="outline">
                            {cta.button}
                        </Button>
                    </div>
                </div>
            </section>
        </PageShell>
    );
}