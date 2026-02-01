// src/components/services/ServicesContent.tsx
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { H2Index } from "@/components/ui/H2Index";
import { services } from "@/lib/content/services";

interface ServicesContentProps {
    className?: string;
    /** "page" = standalone Services page: caption + H1 + intro; "preview" = block on home: H2Index only */
    variant?: "preview" | "page";
}

const PAGE_INTRO = {
    title: "I help shape products, interfaces, and brands around real constraints.",
    description:
        "Most of my work happens at the intersection of product definition, interface design, and narrative. I usually join as a founder, product partner, or design lead — to bring focus to what's being built and how it should look, feel, and behave.",
};

export function ServicesContent({ className = "", variant = "page" }: ServicesContentProps) {
    const isPage = variant === "page";

    return (
        <div className={className}>
            {isPage ? (
                <>
                    <section className="mb-12 space-y-4">
                        <p className="caption">Services</p>
                        <h1 className="h1 max-w-4xl">{PAGE_INTRO.title}</h1>
                        <p className="max-w-2xl">{PAGE_INTRO.description}</p>
                    </section>
                    <section className="mb-12 flex flex-col">
                        {services.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </section>
                </>
            ) : (
                <section className="mb-16 space-y-4">
                    <H2Index index={3} className="mb-16">Services</H2Index>
                    <div className="flex flex-col">
                        {services.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
