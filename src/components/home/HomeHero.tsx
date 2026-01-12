// src/components/home/HomeHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, MouseEvent, useEffect, useRef, useCallback, useMemo } from "react";
import { heroProjects } from "@/lib/content/work";
import { WorkPreviewCard } from "@/components/ui/WorkPreviewCard";
import { TypingText } from "@/components/ui/TypingText";

export type HomeHeroProps = {
    title: string;
    subtitle: string;
};

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
    const containerRef = useRef<HTMLDivElement>(null);

    // Memoize scroll handler
    const handleScroll = useCallback(() => {
        setHoveredProject(null);
        setIsHovered(false);
    }, []);

    // Hide card on scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    // Memoize mouse handlers
    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setHoveredProject(null);
    }, []);

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

    const handleProjectEnter = useCallback((slug: string) => {
        setHoveredProject(slug);
    }, []);

    const handleProjectLeave = useCallback(() => {
        setHoveredProject(null);
    }, []);

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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
                            onMouseEnter={() => handleProjectEnter(project.slug)}
                            onMouseLeave={handleProjectLeave}
                        >
                            <Link
                                href={`/work/${project.slug}`}
                                className="block w-17 h-17 pr-6"
                            >
                                <div className="relative w-17 h-17 rounded-full bg-white border-2 border-background flex items-center justify-center">
                                    <Image
                                        src={project.logo}
                                        alt={project.slug}
                                        width={68}
                                        height={68}
                                        className="w-17"
                                        style={{ height: 'auto' }}
                                    />
                                </div>
                            </Link>
                        </div>
                    );
                })}
                </div>
                
                {/* Work Preview Card */}
                {hoveredProject && (
                    <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                            left: `${mousePosition.x + 16}px`,
                            top: `${mousePosition.y + 16}px`,
                        }}
                    >
                        <WorkPreviewCard workSlug={hoveredProject} />
                    </div>
                )}
            </div>
        </section>
    );
}