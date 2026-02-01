// src/components/contact/ContactContent.tsx
import { ContactCard } from "@/components/contact/ContactCard";
import { H2Index } from "@/components/ui/H2Index";
import { contactContent } from "@/lib/content/contact";

interface ContactContentProps {
    className?: string;
    /** "page" = standalone Contact page: caption + H1; "preview" = block on home: no descriptor, H2Index */
    variant?: "preview" | "page";
}

export function ContactContent({ className = "", variant = "page" }: ContactContentProps) {
    const { intro, direct, socials } = contactContent;
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
            </section>

            <section className="mb-16 flex flex-col">
                <ContactCard title={direct.email} href={`mailto:${direct.email}`} />
                {socials.links
                    .filter((link) => link.label === "Telegram" || link.label === "LinkedIn")
                    .map((link) => (
                        <ContactCard
                            key={link.label}
                            title={link.label}
                            href={link.href}
                            external
                        />
                    ))}
            </section>
        </div>
    );
}
