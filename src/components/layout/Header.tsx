"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { journalEnabled } from "@/lib/config/features";
import { ThemeToggle } from "./ThemeToggle";
import { MenuItem } from "@/components/ui/MenuItem";

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
            {/* Основной контейнер с justify-between разнесет ЛЕВУЮ и ПРАВУЮ группы по краям */}
            <div className="mx-auto flex h-16 items-center justify-between gutter">

                {/* --- ЛЕВАЯ ГРУППА: Логотип + Десктопное Меню --- */}
                <div className="flex items-center gap-6"> {/* gap-6 отделит лого от меню */}
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        F
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 sm:flex">
                        {activeNavItems.map((item) => (
                            <MenuItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                isActive={pathname === item.href}
                            />
                        ))}
                    </nav>
                </div>

                {/* --- ПРАВАЯ ГРУППА: Тема + Мобильный бургер --- */}
                <div className="flex items-center gap-2">
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
                    </nav>
                </div>
            )}
        </header>
    );
}