// src/components/home/ContactCtaSection.tsx
import Link from "next/link";

export function ContactCtaSection() {
    return (
        <section className="mt-20 border-t border-zinc-900 pt-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        Work with me
                    </p>

                    <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
                        Have a product to build, a team to support, or a story to shape?
                    </h2>

                    <p className="max-w-xl text-sm text-zinc-400">
                        I work with founders and teams on product strategy, UX, AI features,
                        and brand narratives. If you have something in mind, let’s talk.
                    </p>
                </div>

                <div className="flex flex-col gap-3 text-sm text-zinc-300">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-2 text-xs font-semibold text-black transition hover:bg-white"
                    >
                        Contact page
                    </Link>

                    <a
                        href="mailto:you@example.com"
                        className="text-xs text-zinc-400 underline underline-offset-4 hover:text-zinc-100"
                    >
                        Or email me directly
                    </a>
                </div>
            </div>
        </section>
    );
}
