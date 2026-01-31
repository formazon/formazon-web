"use client";

import type { Service } from "@/lib/content/services";
import { useState } from "react";

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article
            className={`
                group grid w-full rounded-sm border-t border-black-20 bg-surface
                transition-[grid-template-rows,border-color] duration-300 ease-out
                hover:border-black
                ${expanded ? "grid-rows-[96px_1fr] md:grid-rows-[120px_1fr]" : "grid-rows-[96px_0fr] md:grid-rows-[120px_0fr]"}
            `}
        >
            <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="relative flex h-[96px] w-full cursor-pointer items-center text-left md:h-[120px]"
                aria-expanded={expanded}
                aria-label={expanded ? "Свернуть" : "Развернуть"}
            >
                <h3 className="subtitle-medium pr-10">{service.title}</h3>
                <span
                    className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center text-black-40 transition-colors group-hover:text-black"
                    aria-hidden
                >
                    <svg
                        width={48}
                        height={48}
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ease-out ${expanded ? "rotate-45" : ""}`}
                    >
                        <line
                            y1="-0.5"
                            x2="44.0001"
                            y2="-0.5"
                            transform="matrix(0.999998 0.00209904 0.00209896 0.999998 10 33.0483)"
                            stroke="currentColor"
                        />
                        <line
                            y1="-0.5"
                            x2="44.0001"
                            y2="-0.5"
                            transform="matrix(-0.00209904 -0.999998 0.999998 0.00209896 33.0488 54)"
                            stroke="currentColor"
                        />
                    </svg>
                </span>
            </button>

            <div className="min-h-0 overflow-hidden transition-[opacity] duration-300 ease-out" style={{ opacity: expanded ? 1 : 0 }}>
                <div className="pb-10 pl-10">
                    <ul className="list-disc list-inside">
                        {service.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}
