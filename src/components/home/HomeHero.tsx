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
    { slug: "tra-robotics", logo: "/work/tra-robotics.svg" },
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
                    onMouseLeave={() => setIsHovered(false)}
                >
                {projects.map((project, index) => (
                    <Link
                        key={project.slug}
                        href={`/work/${project.slug}`}
                        className="absolute top-0 left-0 w-17 h-17 transition-all duration-300 ease-out"
                        style={{
                            transform: isHovered 
                                ? `translateX(${index * 72}px)` 
                                : `translateX(${index * 50}px)`,
                            zIndex: index + 1,
                        }}
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
                ))}
                </div>
            </div>
        </section>
    );
}