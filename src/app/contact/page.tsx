// src/app/contact/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { contactContent } from "@/lib/content/contact";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: contactContent.meta.title,
    description: contactContent.meta.description,
};

export default function ContactPage() {
    const { intro, direct, socials, guidelines } = contactContent;

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

            {/* Main Content Grid: Form (Left) vs Info (Right) */}
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">

                {/* Column 1: Contact Form */}
                <section>
                    {/* Визуальная обертка формы */}
                    <div className="rounded-2xl border border-border-subtle bg-surface-muted/30 p-6 sm:p-8">
                        <ContactForm />
                    </div>
                </section>

                {/* Column 2: Info & Guidelines */}
                <aside className="space-y-10">

                    {/* Direct Contacts */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                        {/* Email */}
                        <div className="space-y-3">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                                {direct.label}
                            </p>
                            <a
                                href={`mailto:${direct.email}`}
                                className="inline-block text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
                            >
                                {direct.email}
                            </a>
                            <p className="text-xs text-text-muted leading-relaxed">
                                {direct.description}
                            </p>
                        </div>

                        {/* Socials */}
                        <div className="space-y-3">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                                {socials.label}
                            </p>
                            <ul className="space-y-2 text-sm text-foreground">
                                {socials.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="underline underline-offset-4 transition-opacity hover:opacity-80"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Guidelines (What to include) */}
                    <div className="border-t border-border-subtle pt-8 space-y-4 text-sm">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                            {guidelines.label}
                        </p>

                        <p className="text-text-muted">
                            {guidelines.intro}
                        </p>

                        <ul className="space-y-1 text-text-muted text-xs">
                            {guidelines.points.map((point) => (
                                <li key={point}>• {point}</li>
                            ))}
                        </ul>

                        <p className="pt-2 text-[11px] text-text-muted/70 italic">
                            {guidelines.privacy}
                        </p>
                    </div>
                </aside>
            </div>
        </PageShell>
    );
}