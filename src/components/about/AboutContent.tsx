// src/components/about/AboutContent.tsx
import { H2Index } from "@/components/ui/H2Index";
import { QuadroDot } from "@/components/ui/QuadroDot";

interface AboutContentProps {
    className?: string;
    /** "page" = standalone About page: no QuadroDot, caption + H1; "preview" = block on home */
    variant?: "preview" | "page";
}

export function AboutContent({ className = "", variant = "preview" }: AboutContentProps) {
    const isPage = variant === "page";

    return (
        <section className={className}>
            <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4">
                    {isPage ? (
                        <>
                            <p className="caption">About</p>
                            <h1 className="h1">Farid Rafikov</h1>
                        </>
                    ) : (
                        <H2Index index={2}>
                            Farid Rafikov
                        </H2Index>
                    )}

                    <p className="body max-w-3xl">
                        Over the last years I've been founding, designing, and growing products across different domains: mobile creativity tools, AI platforms for engineers, fintech, and robotics-driven systems. I like working close to constraints — real teams, real codebases, and real operational limits.
                    </p>
                    <p className="body max-w-3xl">
                        My background is a mix of product thinking, interface design, and hands-on implementation. I'm comfortable jumping between high-level structure and very concrete screens, flows, or states. A good day is when something abstract turns into a clear, shippable decision.
                    </p>
                    <p className="body max-w-3xl">
                        I prefer long-term collaborations, where we can build a shared language for the product and reuse it across the app, site, decks, and internal docs. That usually means fewer random features and more deliberate, compounding work.
                    </p>
                    <p className="body max-w-3xl">
                        I mostly work remotely, but I treat products as real, physical things: they live inside teams, processes, and hardware — not just inside Figma.
                    </p>
                </div>

                <div className="flex flex-col gap-3 md:text-right md:items-end mt-6 md:mt-20">
                    <img
                        src="/farid-rafikov.jpg"
                        alt="Farid Rafikov"
                        className="w-full h-full object-cover rounded-sm shadow-lg"
                        loading="lazy"
                        width={648}
                        height={648}
                        style={{ maxWidth: "648px", maxHeight: "648px" }}
                    />
                </div>
            </div>
        </section>
    );
}
