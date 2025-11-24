// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { journalEnabled } from "@/lib/config/features";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/journal", label: "Journal", feature: "journal" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();

    const activeNavItems = navItems.filter((item) => {
        if (item.feature === "journal" && !journalEnabled) return false;
        return true;
    });

    return (
        <header className="border-b border-border-subtle bg-surface/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground"
                >
                    Formazon
                </Link>

                {/* Right side: nav + theme toggle */}
                <div className="flex items-center gap-6">
                    {/* Navigation */}
                    <nav className="hidden gap-6 text-sm text-text-muted sm:flex">
                        {activeNavItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={
                                        "transition-colors hover:text-foreground" +
                                        (isActive ? " text-foreground" : "")
                                    }
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Theme toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
