// src/components/home/AboutPreviewSection.tsx
import { Button } from "@/components/ui/Button";

export function AboutPreviewSection() {
    return (
        <section className="mb-20 mt-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                {/* Левый блок — заголовок */}
                <div className="space-y-4">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                        About
                    </p>

                    <h2 className="max-w-xl text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                        I’m a product founder and designer building digital tools, brands,
                        and interfaces across apps, AI platforms, and robotics systems.
                    </h2>

                    <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                        My work sits at the intersection of product clarity, interface
                        design, and engineering. Over the last 15+ years I’ve built and led
                        projects such as AppForType, Explyt, TRA Robotics, Fuelet, Jungle,
                        and Esprito.
                    </p>
                </div>

                {/* Правый блок — кнопка */}
                <div className="flex flex-col gap-3 md:text-right md:items-end">
                    <Button href="/about">
                        Read more
                    </Button>

                    <p className="text-xs text-text-muted">
                        Background, philosophy and experience
                    </p>
                </div>
            </div>
        </section>
    );
}