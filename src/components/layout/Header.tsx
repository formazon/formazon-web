"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const activeNavItems = navItems.filter((item) => {
        return !(item.feature === "journal" && !journalEnabled);
    });

    return (
        <header className="relative bg-surface/80 backdrop-blur z-50">
            <div className="mx-auto flex h-16 items-center justify-between gutter">
                {/* ЛЕВАЯ ГРУППА: Логотип */}
                <Link
                    href="/"
                    className="label text-foreground hover:opacity-70 transition-opacity"
                    onClick={() => setIsOpen(false)}
                >
                    formazon.com
                </Link>

                {/* ЦЕНТР: Десктопное Меню */}
                <nav className="hidden items-center gap-6 sm:flex">
                    {activeNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    caption-medium text-foreground normal-case
                                    transition-all duration-200
                                    hover:underline
                                    ${isActive ? "underline" : ""}
                                `}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* ПРАВАЯ ГРУППА: Соцсети + Тема + Мобильный бургер */}
                <div className="flex items-center gap-4">
                    {/* Social Links - Desktop */}
                    <div className="hidden items-center gap-6 sm:flex">
                        <Link
                            href="https://x.com/formazon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label text-foreground hover:opacity-70 transition-opacity"
                        >
                            X
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/faridrafikov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label text-foreground hover:opacity-70 transition-opacity"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="mailto:mail@formazon.com"
                            className="label text-foreground hover:opacity-70 transition-opacity"
                        >
                            Email
                        </Link>
                    </div>

                    {/* Theme toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="rounded-lg p-2 text-text-muted hover:bg-surface-muted hover:text-foreground sm:hidden"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="absolute left-0 top-16 h-[calc(100vh-4rem)] w-full bg-background border-b border-border-subtle px-4 py-6 sm:hidden">
                    <nav className="flex flex-col gap-2">
                        {activeNavItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        block px-4 py-3 rounded-xl text-lg font-medium transition-colors
                                        ${isActive
                                        ? "bg-surface-muted text-foreground"
                                        : "text-text-muted hover:text-foreground"
                                    }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        {/* Mobile Social Links */}
                        <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border-subtle">
                            <Link
                                href="https://x.com/formazon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="label text-foreground px-4 py-2"
                            >
                                X
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/faridrafikov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="label text-foreground px-4 py-2"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="mailto:mail@formazon.com"
                                className="label text-foreground px-4 py-2"
                            >
                                Email
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}