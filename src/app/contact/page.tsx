// src/app/contact/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { contactContent } from "@/lib/content/contact";
import { ContactForm } from "@/components/contact/ContactForm";
import { TextLink } from "@/components/ui/TextLink"; // 1. Импортируем компонент

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
                <p className="caption">
                    {intro.label}
                </p>

                <h1 className="h1 max-w-4xl">
                    {intro.title}
                </h1>

                <p className="max-w-2xl">
                    {intro.description}
                </p>
            </section>

            {/* Main Content Grid */}
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">

                {/* Column 1: Contact Form */}
                <section>
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
                            <p className="label-medium">
                                {direct.label}
                            </p>

                            {/* 2. Используем TextLink для email */}
                            <TextLink
                                href={`mailto:${direct.email}`}
                                external={true} // mailto считается внешней ссылкой (нужен <a>, а не <Link>)
                                className="caption"
                            >
                                {direct.email}
                            </TextLink>

                            <p className="label">
                                {direct.description}
                            </p>
                        </div>

                        {/* Socials */}
                        <div className="space-y-3">
                            <p className="label-medium">
                                {socials.label}
                            </p>
                            <ul className="space-y-2 caption">
                                {socials.links.map((link) => {
                                    // Проверяем, внешняя ли ссылка (начинается с http)
                                    const isExternal = link.href.startsWith("http");

                                    return (
                                        <li key={link.label}>
                                            {/* 3. Используем TextLink с авто-определением external */}
                                            <TextLink
                                                href={link.href}
                                                external={isExternal}
                                            >
                                                {link.label}
                                            </TextLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Guidelines (What to include) */}
                    <div className="border-t border-border-subtle pt-8 space-y-4">
                        <p className="label-medium">
                            {guidelines.label}
                        </p>

                        <p className="caption">
                            {guidelines.intro}
                        </p>

                        <ul className="space-y-1 label">
                            {guidelines.points.map((point) => (
                                <li key={point}>• {point}</li>
                            ))}
                        </ul>

                        <p className="pt-2 label">
                            {guidelines.privacy}
                        </p>
                    </div>
                </aside>
            </div>
        </PageShell>
    );
}