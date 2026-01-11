"use client";

import Link from "next/link";
import { WorkItem } from "@/lib/content/work";

type WorkDropdownMenuProps = {
    workItems: WorkItem[];
    onItemHover?: (slug: string) => void;
    onItemLeave?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export function WorkDropdownMenu({
    workItems,
    onItemHover,
    onItemLeave,
    onMouseEnter,
    onMouseLeave,
}: WorkDropdownMenuProps) {
    return (
        <div 
            className="absolute top-full -left-3 pt-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div 
                className="bg-foreground backdrop-blur-sm rounded-sm min-w-[200px]">
                <ul>
                    {workItems.map((workItem) => {
                        return (
                            <li key={workItem.slug}>
                                <Link
                                    href={`/work/${workItem.slug}`}
                                    className="block px-3 pt-0.5 pb-1.5 hover:bg-background/10 transition-colors"
                                    onMouseEnter={() => onItemHover?.(workItem.slug)}
                                    onMouseLeave={() => onItemLeave?.()}
                                >
                                    <span className="label-medium text-background">{workItem.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
