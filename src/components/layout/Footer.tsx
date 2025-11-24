// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-zinc-900/80 bg-black">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} Formazon. All rights reserved.</p>

                <div className="flex gap-4">
                    <Link href="/contact" className="hover:text-zinc-300">
                        Contact
                    </Link>
                    {/* Здесь потом добавишь реальные ссылки */}
                    <a
                        href="mailto:you@example.com"
                        className="hover:text-zinc-300"
                    >
                        Email
                    </a>
                    {/* <a href="https://linkedin.com/..." className="hover:text-zinc-300">LinkedIn</a> */}
                </div>
            </div>
        </footer>
    );
}
