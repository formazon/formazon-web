// src/components/home/HomeHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, MouseEvent } from "react";
import { workCases } from "@/lib/content/work";

export type HomeHeroProps = {
    title: string;
    subtitle: string;
};

const projects = [
    { slug: "appfortype", logo: "/work/appfortype.svg" },
    { slug: "jungle", logo: "/work/jungle.svg" },
    { slug: "fuelet", logo: "/work/fuelet.svg" },
    { slug: "tra-robotics", logo: "/work/tra-robotics.svg" },
];

export function HomeHero({
                             title,
                             subtitle,
                         }: HomeHeroProps) {
    // Разделяем subtitle на два абзаца
    const paragraphs = subtitle.split('\n\n').filter(p => p.trim());
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    return (
        <section className="mb-16 space-y-8">
            <div className="space-y-6">
                <h1 className="h1 max-w-4xl">
                    {title}
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
                    className="relative mt-8 h-16 w-72"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        setHoveredProject(null);
                    }}
                    onMouseMove={(e: MouseEvent<HTMLDivElement>) => {
                        setMousePosition({ x: e.clientX, y: e.clientY });
                    }}
                >
                {projects.map((project, index) => {
                    const workCase = workCases[project.slug];
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
                                <div className="relative w-17 h-17 rounded-full bg-white border-2 border-white flex items-center justify-center">
                                    <Image
                                        src={project.logo}
                                        alt={project.slug}
                                        width={68}
                                        height={68}
                                        className="w-17 h-17"
                                    />
                                </div>
                            </Link>
                        </div>
                    );
                })}
                </div>
                
                {/* Tooltip */}
                {hoveredProject && workCases[hoveredProject] && (
                    <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                            left: `${mousePosition.x + 16}px`,
                            top: `${mousePosition.y + 16}px`,
                        }}
                    >
                        <div className="bg-foreground/80 backdrop-blur-sm rounded-sm p-3 max-w-xs">
                            <p className="label-medium text-background mb-1">
                                {workCases[hoveredProject].title}
                            </p>
                            <p className="label text-background/80">
                                {workCases[hoveredProject].description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}