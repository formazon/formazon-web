// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // 1. Добавили хуки
import { Menu, X } from "lucide-react";       // 2. Добавили иконки
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
    const [isOpen, setIsOpen] = useState(false); // Состояние меню

    // Закрываем меню автоматически, если изменился путь (пользователь перешел по ссылке)
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Блокируем скролл страницы, когда меню открыто (опционально, но хороший UX)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const activeNavItems = navItems.filter((item) => {
        if (item.feature === "journal" && !journalEnabled) return false;
        return true;
    });

    return (
        // relative нужен, чтобы мобильное меню позиционировалось относительно хедера
        <header className="relative border-b border-border-subtle bg-surface/80 backdrop-blur z-50">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground z-50"
                    onClick={() => setIsOpen(false)}
                >
                    Formazon
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    {/* Desktop Navigation (скрыта на мобильных sm:flex) */}
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

                    {/* Theme toggle (виден всегда) */}
                    <ThemeToggle />

                    {/* Mobile Menu Button (видна только на мобильных sm:hidden) */}
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
                    <nav className="flex flex-col gap-4 text-lg font-medium">
                        {activeNavItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={
                                        "block border-b border-border-subtle pb-4 transition-colors hover:text-foreground" +
                                        (isActive ? " text-foreground" : " text-text-muted")
                                    }
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