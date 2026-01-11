// src/app/about/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { aboutContent } from "@/lib/content/about";
import {TextLink} from "@/components/ui/TextLink";
import { TypingText } from "@/components/ui/TypingText";

export const metadata: Metadata = {
    title: "About — Formazon",
    description:
        "About Farid Rafikov — product founder and designer working across apps, AI tools, and robotics-driven systems.",
};

export default function AboutPage() {
    const { story, snapshot } = aboutContent;

    return (
        <PageShell>
            <section className="mb-16 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">                
                <div className="space-y-5">
                    <p className="caption">
                        About
                    </p>
                    <h1 className="h1">
                        <TypingText text="Farid Rafikov" />
                    </h1>
                    {story.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* Snapshot Sidebar */}
                <aside className="space-y-6 rounded-sm border border-border-subtle p-5">

                    {/* Profile (без изменений) ... */}
                    <div className="space-y-2">
                        <p className="label-medium">
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
                        <p className="label">
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
                                        <span className="label-medium">{item.name}</span>
                                    )}

                                    <span className="text-right opacity-80">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How I can help (без изменений) ... */}
                    <div className="space-y-2">
                        <p className="label-medium">
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
        </PageShell>
    );
}