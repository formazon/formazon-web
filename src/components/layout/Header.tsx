// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/journal", label: "Journal" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="border-b border-zinc-900/80 bg-black/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Логотип / бренд */}
                <Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
                    Formazon
                </Link>

                {/* Навигация */}
                <nav className="hidden gap-6 text-sm text-zinc-400 sm:flex">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    "transition-colors hover:text-zinc-100" +
                                    (isActive ? " text-zinc-100" : "")
                                }
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
