// src/app/about/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { aboutContent } from "@/lib/content/about";
import {TextLink} from "@/components/ui/TextLink";

export const metadata: Metadata = {
    title: "About — Formazon",
    description:
        "About Farid Rafikov — product founder and designer working across apps, AI tools, and robotics-driven systems.",
};

export default function AboutPage() {
    const { story, snapshot } = aboutContent;

    return (
        <PageShell>
            {/* ... Intro и Story (без изменений) ... */}

            <section className="mb-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
                {/* Story */}
                <div className="space-y-5 text-sm leading-relaxed text-text-muted">
                    {story.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Snapshot Sidebar */}
                <aside className="space-y-6 rounded-2xl border border-border-subtle bg-surface-muted p-5 text-xs text-text-muted">

                    {/* Profile (без изменений) ... */}
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

                    {/* History - ОБНОВЛЕННЫЙ БЛОК */}
                    <div className="space-y-2">
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                            Previously building
                        </p>
                        <ul className="space-y-1.5">
                            {snapshot.history.map((item) => (
                                <li key={item.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                                    {/* Если есть slug, делаем ссылку, иначе просто текст */}
                                    {item.slug ? (
                                        <TextLink href={`/work/${item.slug}`}>
                                            {item.name}
                                        </TextLink>
                                    ) : (
                                        <span className="text-foreground font-medium">{item.name}</span>
                                    )}

                                    <span className="text-right opacity-80">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How I can help (без изменений) ... */}
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

            {/* ... Way of working и CTA (без изменений) ... */}

            {/* Way of working */}
            <section className="mb-16 space-y-4 border-t border-border-subtle pt-10">
                {/* ... код ... */}
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle pt-10">
                {/* ... код ... */}
            </section>
        </PageShell>
    );
}