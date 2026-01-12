"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, MouseEvent } from "react";
import { journalEnabled } from "@/lib/config/features";
import { workItems, workCases } from "@/lib/content/work";
import { ThemeToggle } from "./ThemeToggle";
import { Dot } from "@/components/ui/Dot";
import { DoubleDot } from "@/components/ui/DoubleDot";
import { MenuToggle } from "@/components/ui/MenuToggle";
import { WorkPreviewCard } from "@/components/ui/WorkPreviewCard";
import { WorkDropdownMenu } from "@/components/ui/WorkDropdownMenu";

const navItems = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/journal", label: "Journal", feature: "journal" },
    { href: "/contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://x.com/formazon", label: "X", external: true },
    { href: "https://www.linkedin.com/in/faridrafikov/", label: "LinkedIn", external: true },
    { href: "mailto:mail@formazon.com", label: "Email", external: false },
];

const socialLinkDesktopClassName = "label-medium hover:opacity-70 transition-opacity";
const socialLinkMobileClassName = "caption px-4 py-2";

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
        <header className="sticky top-0 z-50 bg-surface sm:bg-transparent">
            <div className="mx-auto flex h-14 sm:h-16 items-center justify-between gutter">
                {/* ЛЕВАЯ ГРУППА: Логотип */}
                <Link
                    href="/"
                    className={`caption-medium sm:label hover:opacity-70 transition-all duration-200 ${
                        isScrolled ? "rounded-sm" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    formazon.com
                </Link>

                {/* ЦЕНТР: Десктопное Меню */}
                <nav className={`hidden items-center gap-6 sm:flex transition-all duration-200 absolute left-1/2 -translate-x-1/2 ${
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
                                        className="group relative inline-block caption-medium uppercase transition-all duration-200"
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
                                        <WorkDropdownMenu
                                            workItems={workItems}
                                            onItemHover={setHoveredWorkSlug}
                                            onItemLeave={() => setHoveredWorkSlug(null)}
                                            onMouseEnter={() => setIsWorkHovered(true)}
                                            onMouseLeave={() => {
                                                setIsWorkHovered(false);
                                                setHoveredWorkSlug(null);
                                            }}
                                        />
                                    )}
                                </div>
                            );
                        }
                        
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group relative inline-block caption-medium uppercase transition-all duration-200"
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
                <div className={`flex items-center gap-2 sm:gap-4 transition-all duration-200 ${
                    isScrolled ? "rounded-sm" : ""
                }`}>
                    {/* Social Links - Desktop */}
                    <div className="hidden items-center gap-6 sm:flex">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className={socialLinkDesktopClassName}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Theme toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="absolute left-0 top-14 h-[calc(100vh-4rem)] w-full bg-background border-b border-border-subtle px-4 py-6 sm:hidden">
                    <nav className="flex flex-col gap-2">
                        <DoubleDot />
                        {activeNavItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        flex items-center justify-center h-18 px-0 caption-medium uppercase text-[20px]! transition-colors text-foreground
                                        ${isActive
                                        ? "bg-surface-muted"
                                        : ""
                                    }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        {/* Mobile Social Links */}
                        <div className="mt-4 pt-4">
                            <DoubleDot />
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className={socialLinkMobileClassName}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}