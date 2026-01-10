"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { journalEnabled } from "@/lib/config/features";
import { workItems, workCases } from "@/lib/content/work";
import { ThemeToggle } from "./ThemeToggle";
import { Dot } from "@/components/ui/Dot";
import { WorkPreviewCard } from "@/components/ui/WorkPreviewCard";

const navItems = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/journal", label: "Journal", feature: "journal" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isWorkHovered, setIsWorkHovered] = useState(false);
    const [hoveredWorkSlug, setHoveredWorkSlug] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        // Проверяем сразу при монтировании
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const activeNavItems = navItems.filter((item) => {
        return !(item.feature === "journal" && !journalEnabled);
    });

    return (
        <header className="sticky top-0 z-50">
            <div className="mx-auto flex h-16 items-center justify-between gutter">
                {/* ЛЕВАЯ ГРУППА: Логотип */}
                <Link
                    href="/"
                    className={`label hover:opacity-70 transition-all duration-200 ${
                        isScrolled ? "bg-surface/80 backdrop-blur rounded-sm px-3 py-[9px]" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    formazon.com
                </Link>

                {/* ЦЕНТР: Десктопное Меню */}
                <nav className={`hidden items-center gap-6 sm:flex transition-all duration-200 ${
                    isScrolled ? "bg-surface/80 backdrop-blur rounded-sm px-3 py-2" : ""
                }`}>
                    {activeNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        const isWork = item.href === "/work";
                        
                        if (isWork) {
                            return (
                                <div
                                    key={item.href}
                                    className="relative inline-flex"
                                    onMouseEnter={() => setIsWorkHovered(true)}
                                    onMouseLeave={() => {
                                        setIsWorkHovered(false);
                                        setHoveredWorkSlug(null);
                                    }}
                                    onMouseMove={(e: MouseEvent<HTMLDivElement>) => {
                                        setMousePosition({ x: e.clientX, y: e.clientY });
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="group relative inline-block caption-medium normal-case transition-all duration-200"
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        {!isWork && (
                                            <div className={`absolute top-full left-0 mt-1 w-full flex justify-between transition-all duration-200 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"}`}>
                                                <Dot />
                                                <Dot />
                                            </div>
                                        )}
                                    </Link>
                                    
                                    {/* Невидимая зона для плавного перехода */}
                                    {isWorkHovered && (
                                        <div 
                                            className="absolute top-full left-0 w-full h-1"
                                            onMouseEnter={() => setIsWorkHovered(true)}
                                        />
                                    )}
                                    
                                    {/* Выпадающее меню работ */}
                                    {isWorkHovered && (
                                        <div 
                                            className="absolute top-full -left-3 pt-2"
                                            onMouseEnter={() => setIsWorkHovered(true)}
                                            onMouseLeave={() => {
                                                setIsWorkHovered(false);
                                                setHoveredWorkSlug(null);
                                            }}
                                        >
                                            <div 
                                                className="bg-foreground backdrop-blur-sm rounded-sm min-w-[200px]">
                                                <ul>
                                                    {workItems.map((workItem) => {
                                                        const workCase = workCases[workItem.slug];
                                                        const previewImage = workCase?.images?.[0] ?? null;
                                                        return (
                                                            <li key={workItem.slug}>
                                                                <Link
                                                                    href={`/work/${workItem.slug}`}
                                                                    className="block px-3 pt-0.5 pb-1.5 hover:bg-background/10 transition-colors"
                                                                    onMouseEnter={() => setHoveredWorkSlug(workItem.slug)}
                                                                    onMouseLeave={() => setHoveredWorkSlug(null)}
                                                                >
                                                                    <span className="label-medium text-background">{workItem.title}</span>
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group relative inline-block caption-medium normal-case transition-all duration-200"
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className={`absolute top-full left-0 mt-0 w-full flex justify-between transition-all duration-200 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"}`}>
                                    <Dot />
                                    <Dot />
                                </div>
                            </Link>
                        );
                    })}
                </nav>
                
                {/* Превью карточки работы рядом с курсором */}
                {hoveredWorkSlug && workCases[hoveredWorkSlug] && (
                    <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                            left: `${mousePosition.x + 16}px`,
                            top: `${mousePosition.y + 16}px`,
                        }}
                    >
                        <WorkPreviewCard workSlug={hoveredWorkSlug} />
                    </div>
                )}

                {/* ПРАВАЯ ГРУППА: Соцсети + Тема + Мобильный бургер */}
                <div className={`flex items-center gap-4 transition-all duration-200 ${
                    isScrolled ? "bg-surface/80 backdrop-blur rounded-sm pl-3 pr-1.5 py-0" : ""
                }`}>
                    {/* Social Links - Desktop */}
                    <div className="hidden items-center gap-6 sm:flex">
                        <Link
                            href="https://x.com/formazon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label hover:opacity-70 transition-opacity"
                        >
                            X
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/faridrafikov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="label hover:opacity-70 transition-opacity"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href="mailto:mail@formazon.com"
                            className="label hover:opacity-70 transition-opacity"
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
                                        block px-4 py-3 rounded-xl subtitle transition-colors
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
                                className="label px-4 py-2"
                            >
                                X
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/faridrafikov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="label px-4 py-2"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="mailto:mail@formazon.com"
                                className="label px-4 py-2"
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