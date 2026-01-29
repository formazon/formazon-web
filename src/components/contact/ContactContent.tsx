// src/components/contact/ContactContent.tsx
import { ContactForm } from "@/components/contact/ContactForm";
import { H2Index } from "@/components/ui/H2Index";
import { TextLink } from "@/components/ui/TextLink";
import { contactContent } from "@/lib/content/contact";

interface ContactContentProps {
    className?: string;
    /** "page" = standalone Contact page: caption + H1; "preview" = block on home: no descriptor, H2Index */
    variant?: "preview" | "page";
}

export function ContactContent({ className = "", variant = "page" }: ContactContentProps) {
    const { intro, direct, socials, guidelines } = contactContent;
    const isPage = variant === "page";

    return (
        <div className={className}>
            {/* Intro */}
            <section className="mb-12 space-y-4">
                {isPage && <p className="caption">{intro.label}</p>}

                {isPage ? (
                    <h1 className="h1 max-w-4xl">{intro.title}</h1>
                ) : (
                    <H2Index index={5}>{intro.title}</H2Index>
                )}

                <p className="max-w-2xl">{intro.description}</p>
            </section>

            {/* Main Content Grid */}
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
                <section>
                    <div className="rounded-2xl border border-border-subtle bg-surface-muted/30 p-6 sm:p-8">
                        <ContactForm />
                    </div>
                </section>

                <aside className="space-y-10">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                        <div className="space-y-3">
                            <p className="label-medium">{direct.label}</p>
                            <TextLink
                                href={`mailto:${direct.email}`}
                                external
                                className="caption"
                            >
                                {direct.email}
                            </TextLink>
                            <p className="label">{direct.description}</p>
                        </div>

                        <div className="space-y-3">
                            <p className="label-medium">{socials.label}</p>
                            <ul className="space-y-2 caption">
                                {socials.links.map((link) => {
                                    const isExternal = link.href.startsWith("http");
                                    return (
                                        <li key={link.label}>
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

                    <div className="border-t border-border-subtle pt-8 space-y-4">
                        <p className="label-medium">{guidelines.label}</p>
                        <p className="caption">{guidelines.intro}</p>
                        <ul className="space-y-1 label">
                            {guidelines.points.map((point) => (
                                <li key={point}>• {point}</li>
                            ))}
                        </ul>
                        <p className="pt-2 label">{guidelines.privacy}</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
