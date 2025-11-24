// src/components/home/ContactCtaSection.tsx
import { Button } from "@/components/ui/Button";

export function ContactCtaSection() {
    return (
        <section className="mt-20 border-t border-border-subtle pt-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                {/* Левый текстовый блок */}
                <div className="space-y-4">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                        Work with me
                    </p>

                    <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Have a product to build, a team to support, or a story to shape?
                    </h2>

                    <p className="max-w-xl text-sm leading-relaxed text-text-muted">
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