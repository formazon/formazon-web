// src/app/services/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { services } from "@/lib/content/services"; // Импортируем данные
import { Button } from "@/components/ui/Button"; // Используем общий компонент

export const metadata: Metadata = {
    title: "Services — Formazon",
    description:
        "Product, design, and branding services across apps, AI tools, and robotics-driven systems.",
};

export default function ServicesPage() {
    return (
        <PageShell>
            {/* Intro / hero */}
            <section className="mb-12 space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    Services
                </p>
                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    I help shape products, interfaces, and brands around real constraints.
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-text-muted">
                    Most of my work happens at the intersection of product definition,
                    interface design, and narrative. I usually join as a founder, product
                    partner, or design lead — to bring focus to what&apos;s being built and
                    how it should look, feel, and behave.
                </p>
            </section>

            {/* Services grid */}
            <section className="mb-16 grid gap-6 md:grid-cols-2">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="flex flex-col rounded-2xl border border-border-subtle bg-surface-muted p-5 transition-colors hover:border-text-muted/30"
                    >
                        <header className="mb-3 space-y-1">
                            <h2 className="text-sm font-semibold text-foreground">
                                {service.title}
                            </h2>
                            {service.subtitle && (
                                <p className="text-xs text-text-muted">{service.subtitle}</p>
                            )}
                        </header>

                        <p className="mb-4 text-sm leading-relaxed text-text-muted">
                            {service.description}
                        </p>

                        <ul className="mt-auto space-y-1.5 text-xs text-text-muted">
                            {service.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-2 items-start">
                                    <span className="mt-[6px] h-[3px] w-[12px] shrink-0 rounded-full bg-border-subtle" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            {/* How we can work together */}
            <section className="border-t border-border-subtle pt-10">
                <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    How I usually work
                </h2>

                <div className="grid gap-8 md:grid-cols-3 text-xs text-text-muted">
                    <div className="space-y-2">
                        <p className="font-medium text-foreground">Focused projects</p>
                        <p className="leading-relaxed">
                            A clear scope and timeline around a specific outcome: a new
                            product, redesign, investor deck, or a key release.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium text-foreground">Ongoing product partner</p>
                        <p className="leading-relaxed">
                            Long-term collaboration where I help shape direction, interfaces,
                            and story as the product evolves.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium text-foreground">Early conversations</p>
                        <p className="leading-relaxed">
                            If you&apos;re not sure about the scope yet, we can start with a short
                            call and a lightweight audit of what you already have.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <Button href="/contact" variant="outline">
                        Talk about a project
                    </Button>
                </div>
            </section>
        </PageShell>
    );
}