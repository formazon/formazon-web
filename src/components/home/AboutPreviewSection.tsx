// src/components/home/AboutPreviewSection.tsx
import { Button } from "@/components/ui/Button";
import { H2Index } from "@/components/ui/H2Index";
import { QuadroDot } from "@/components/ui/QuadroDot";

export function AboutPreviewSection() {
    return (
        <section className="mb-20 mt-16">
            <QuadroDot />
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                {/* Левый блок — заголовок */}
                <div className="space-y-4">
                    <H2Index index={2}>
                        About
                    </H2Index>

                    <h2 className="subtitle max-w-xl">
                        I’m a product founder and designer building digital tools, brands,
                        and interfaces across apps, AI platforms, and robotics systems.
                    </h2>

                    <p className="body text-text-muted max-w-xl">
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

                    <p className="label">
                        Background, philosophy and experience
                    </p>
                </div>
            </div>
        </section>
    );
}