"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent } from "react";
import { journalEnabled } from "@/lib/config/features";
import { navItems, socialLinks } from "@/lib/config/navigation";
import { workItems, workCases } from "@/lib/content/work";
import { ThemeToggle } from "./ThemeToggle";
import { Dot } from "@/components/ui/Dot";
import { DoubleDot } from "@/components/ui/DoubleDot";
import { MenuToggle } from "@/components/ui/MenuToggle";
import dynamic from "next/dynamic";

// Dynamic import for WorkPreviewCard (only needed on hover)
const WorkPreviewCard = dynamic(
    () => import("@/components/ui/WorkPreviewCard").then(mod => ({ default: mod.WorkPreviewCard })),
    { ssr: false }
);
import { WorkDropdownMenu } from "@/components/ui/WorkDropdownMenu";

const socialLinkDesktopClassName = "label-medium hover:opacity-70 transition-opacity";
const socialLinkMobileClassName = "caption px-4 py-2 uppercase";

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isWorkHovered, setIsWorkHovered] = useState(false);
    const [hoveredWorkSlug, setHoveredWorkSlug] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Close menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle scroll: hide header on scroll down, show on scroll up; always show near top
    const scrollThreshold = 80;
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 0);

            if (currentScrollY <= scrollThreshold) {
                setIsHeaderVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsHeaderVisible(false);
            } else {
                setIsHeaderVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Memoize filtered nav items
    const activeNavItems = useMemo(
        () => navItems.filter((item) => !(item.feature === "journal" && !journalEnabled)),
        []
    );

    // Memoize mouse move handler
    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);

    // Memoize work hover handlers
    const handleWorkMouseEnter = useCallback(() => {
        setIsWorkHovered(true);
    }, []);

    const handleWorkMouseLeave = useCallback(() => {
        setIsWorkHovered(false);
        setHoveredWorkSlug(null);
    }, []);

    const handleWorkItemHover = useCallback((slug: string) => {
        setHoveredWorkSlug(slug);
    }, []);

    const handleWorkItemLeave = useCallback(() => {
        setHoveredWorkSlug(null);
    }, []);

    const handleMenuToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-transform duration-300 ease-out ${isOpen ? "bg-surface" : "bg-surface/80 backdrop-blur"} ${!isHeaderVisible ? "-translate-y-full" : "translate-y-0"}`}
        >
            <div className="mx-auto flex h-12 sm:h-12 items-center justify-between gutter">
                {/* ЛЕВАЯ ГРУППА: Логотип (мобильная и от 960px) */}
                <Link
                    href="/"
                    className={`caption-medium hover:opacity-70 transition-all duration-200 uppercase sm:hidden nav:inline-block ${
                        isScrolled ? "" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    formazon.com
                </Link>

                {/* ЦЕНТР: Десктопное Меню; 640–959px: на всю ширину с gutter, пункты влево, тема вправо; от 960px: только пункты по центру */}
                <nav className={`hidden items-center gap-6 sm:flex transition-all duration-200 absolute left-1/2 -translate-x-1/2 sm:left-0 sm:right-0 sm:translate-x-0 sm:px-6 sm:justify-between nav:left-1/2 nav:-translate-x-1/2 nav:w-fit nav:px-0 nav:justify-center`}>
                    <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="caption-medium hover:opacity-70 transition-all duration-200 hidden sm:inline-block sm:uppercase nav:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        formazon.com
                    </Link>
                    {activeNavItems.map((item) => {
                        const isActive = pathname === item.href;
                        const isWork = item.href === "/work";
                        
                        if (isWork) {
                            return (
                                <div
                                    key={item.href}
                                    className="relative inline-flex"
                                    onMouseEnter={handleWorkMouseEnter}
                                    onMouseLeave={handleWorkMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <Link
                                        href={item.href}
                                        className="group relative inline-block caption-medium uppercase transition-all duration-200"
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                    </Link>
                                    
                                    {/* Невидимая зона для плавного перехода */}
                                    {isWorkHovered ? (
                                        <div 
                                            className="absolute top-full left-0 w-full h-1"
                                            onMouseEnter={() => setIsWorkHovered(true)}
                                        />
                                    ) : null}
                                    
                                    {/* Выпадающее меню работ */}
                                    {isWorkHovered ? (
                                        <WorkDropdownMenu
                                            workItems={workItems}
                                            onItemHover={handleWorkItemHover}
                                            onItemLeave={handleWorkItemLeave}
                                            onMouseEnter={handleWorkMouseEnter}
                                            onMouseLeave={handleWorkMouseLeave}
                                        />
                                    ) : null}
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
                    </div>
                    <span className="hidden sm:inline-flex nav:hidden">
                        <ThemeToggle />
                    </span>
                </nav>
                
                {/* Превью карточки работы рядом с курсором */}
                {hoveredWorkSlug && workCases[hoveredWorkSlug] ? (
                    <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                            left: `${mousePosition.x + 16}px`,
                            top: `${mousePosition.y + 16}px`,
                        }}
                    >
                        <WorkPreviewCard workSlug={hoveredWorkSlug} />
                    </div>
                ) : null}

                {/* ПРАВАЯ ГРУППА: только мобильная (<640px) и от 960px (соцсети) */}
                <div className={`flex items-center gap-2 sm:gap-4 transition-all duration-200 sm:hidden nav:flex ${
                    isScrolled ? "rounded-sm" : ""
                }`}>
                    {/* Social Links - Desktop (от 960px) */}
                    <div className="hidden items-center gap-6 nav:flex uppercase">
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

                    {/* Theme toggle - мобильная и от 960px */}
                    <div className="sm:hidden nav:flex">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button - только мобильная (<640px) */}
                    <div className="sm:hidden">
                        <MenuToggle isOpen={isOpen} onClick={handleMenuToggle} />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen ? (
                <div className="absolute left-0 top-12 h-[calc(100vh-3rem)] w-full bg-background border-b border-border-subtle px-4 py-6 sm:hidden">
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
            ) : null}
        </header>
    );
}