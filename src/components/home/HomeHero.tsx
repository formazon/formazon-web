// src/components/home/HomeHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, MouseEvent, useEffect, useRef, useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import { heroProjects } from "@/lib/content/work";
import dynamic from "next/dynamic";

// Dynamic imports for non-critical components
const WorkPreviewCard = dynamic(
    () => import("@/components/ui/WorkPreviewCard").then(mod => ({ default: mod.WorkPreviewCard })),
    { ssr: false }
);

const TypingText = dynamic(
    () => import("@/components/ui/TypingText").then(mod => ({ default: mod.TypingText })),
    { ssr: true }
);

interface HomeHeroProps {
    title: string;
    subtitle: string;
}

export function HomeHero({
                             title,
                             subtitle,
                         }: HomeHeroProps) {
    
    // Memoize paragraphs split
    const paragraphs = useMemo(
        () => subtitle.split('\n\n').filter(p => p.trim()),
        [subtitle]
    );

    const [isHovered, setIsHovered] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { resolvedTheme } = useTheme();
    
    // Avoid hydration mismatch by using mounted state (rendering-hydration-no-flicker rule)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Hide card on scroll - useCallback needed for cleanup
    const handleScroll = useCallback(() => {
        setHoveredProject(null);
        setIsHovered(false);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    // Mouse handlers - no need for useCallback if only used inline
    // But we keep handleMouseMove as useCallback since it's called frequently
    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        // Check if cursor is still in container bounds
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const isInBounds = 
                e.clientX >= rect.left && 
                e.clientX <= rect.right && 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom;
            
            if (!isInBounds) {
                setHoveredProject(null);
                setIsHovered(false);
            }
        }
    }, []);

    // Use resolvedTheme only after mounting to avoid hydration mismatch
    const isDark = mounted && resolvedTheme === "dark";

    return (
        <section className="mb-16 space-y-8">
            <div className="space-y-6">
                <h1 className="h1 max-w-4xl">
                    <TypingText text={title} typingSpeed={75} showCursor={true} cursorCharacter="|" />
                </h1>
                <div className="space-y-4">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="subtitle max-w-3xl">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
                
                {/* Stacked Project Logos */}
                <div 
                    ref={containerRef}
                    className="relative mt-8 h-16 w-72"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        setHoveredProject(null);
                    }}
                    onMouseMove={handleMouseMove}
                >
                {heroProjects.map((project, index) => {
                    return (
                        <div
                            key={project.slug}
                            className="absolute top-0 left-0 transition-all duration-300 ease-out"
                            style={{
                                transform: isHovered 
                                    ? `translateX(${index * 72}px)` 
                                    : `translateX(${index * 50}px)`,
                                zIndex: index + 1,
                            }}
                            onMouseEnter={() => setHoveredProject(project.slug)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <Link
                                href={`/work/${project.slug}`}
                                className="block w-17 h-17 pr-6"
                            >
                                <div className={`${project.slug === 'fuelet' && isDark ? 'bg-background' : 'bg-white'} relative w-17 h-17 rounded-full border-2 border-background flex items-center justify-center`}>
                                    <Image
                                        src={project.logo}
                                        alt={project.slug}
                                        width={68}
                                        height={68}
                                        className="w-17"
                                        style={{ 
                                            height: 'auto',
                                            filter: project.slug === 'fuelet' && isDark ? 'invert(1)' : 'none'
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                    );
                })}
                </div>
                
                {/* Work Preview Card */}
                {hoveredProject ? (
                    <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                            left: `${mousePosition.x + 16}px`,
                            top: `${mousePosition.y + 16}px`,
                        }}
                    >
                        <WorkPreviewCard workSlug={hoveredProject} />
                    </div>
                ) : null}
            </div>
        </section>
    );
}