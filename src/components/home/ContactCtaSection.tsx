// src/components/home/ContactCtaSection.tsx
import { Button } from "@/components/ui/Button";
import { H2Index } from "@/components/ui/H2Index";
import { QuadroDot } from "@/components/ui/QuadroDot";

export function ContactCtaSection() {
    return (
        <section className="mt-20 pt-10 pb-20">
            <QuadroDot />
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                {/* Левый текстовый блок */}
                <div className="space-y-4">
                    <H2Index index={1}>
                        Work with me
                    </H2Index>

                    <h2 className="subtitle text-foreground max-w-xl">
                        Have a product to build, a team to support, or a story to shape?
                    </h2>

                    <p className="body text-text-muted max-w-xl">
                        I work with founders and teams on product strategy, UX, AI features,
                        and brand narratives. If you have something in mind, let’s talk.
                    </p>
                </div>

                {/* Правый блок с действиями */}
                <div className="flex flex-col gap-3 md:items-end md:text-right">
                    <Button href="/contact">
                        Contact page
                    </Button>

                    <a
                        href="mailto:you@example.com"
                        className="text-xs text-text-muted underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                        Or email me directly
                    </a>
                </div>
            </div>
        </section>
    );
}