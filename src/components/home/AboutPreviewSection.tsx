// src/components/home/AboutPreviewSection.tsx
import Link from "next/link";

export function AboutPreviewSection() {
    return (
        <section className="mb-20 mt-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                {/* Левый блок — заголовок */}
                <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        About
                    </p>

                    <h2 className="max-w-xl text-2xl font-semibold leading-tight text-zinc-50 sm:text-3xl">
                        I’m a product founder and designer building digital tools, brands,
                        and interfaces across apps, AI platforms, and robotics systems.
                    </h2>

                    <p className="max-w-xl text-sm text-zinc-400">
                        My work sits at the intersection of product clarity, interface
                        design, and engineering. Over the last 15+ years I’ve built and led
                        projects such as AppForType, Explyt, TRA Robotics, Fuelet, Jungle,
                        and Esprito.
                    </p>
                </div>

                {/* Правый блок — кнопка */}
                <div className="flex flex-col gap-2 md:text-right">
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-2 text-xs font-semibold text-black transition hover:bg-white"
                    >
                        Read more
                    </Link>

                    <p className="text-xs text-zinc-500">
                        Background, philosophy and experience
                    </p>
                </div>
            </div>
        </section>
    );
}
