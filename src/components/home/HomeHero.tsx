// src/components/home/HomeHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type HomeHeroProps = {
    title: string;
    subtitle: string;
};

const projects = [
    { slug: "appfortype", logo: "/work/appfortype.svg" },
    { slug: "jungle", logo: "/work/jungle.svg" },
    { slug: "fuelet", logo: "/work/fuelet.svg" },
];

export function HomeHero({
                             title,
                             subtitle,
                         }: HomeHeroProps) {
    // Разделяем subtitle на два абзаца
    const paragraphs = subtitle.split('\n\n').filter(p => p.trim());
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="mb-16 space-y-8">
            <div className="space-y-6">
                <h1 className="h1 text-foreground">
                    {title}
                </h1>
                <div className="space-y-4">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="subtitle text-foreground max-w-3xl">
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
                
                {/* Stacked Project Logos */}
                <div 
                    className="relative mt-8 h-16 w-[240px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* White circular background with border */}
                    <div 
                        className="absolute top-1/2 -translate-y-1/2 w-[64px] h-[64px] rounded-full bg-white transition-all duration-300 ease-out"
                        style={{
                            left: isHovered 
                                ? `${32 + (projects.length - 1) * 40}px` 
                                : `${32 + (projects.length - 1) * 25}px`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 0,
                            boxShadow: '0 0 0 2px white',
                        }}
                    />
                    {projects.map((project, index) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="absolute top-0 left-0 w-16 h-16 transition-all duration-300 ease-out"
                            style={{
                                transform: isHovered 
                                    ? `translateX(${index * 80}px)` 
                                    : `translateX(${index * 50}px)`,
                                zIndex: index + 1,
                            }}
                        >
                            <Image
                                src={project.logo}
                                alt={project.slug}
                                width={64}
                                height={64}
                                className="w-16 h-16"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}