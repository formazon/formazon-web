import { ReactNode } from "react";

interface TagProps {
    children: ReactNode;
    className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
    return (
        <span
            className={`
                inline-flex items-center rounded-xs
                bg-tag-surface
                px-3 pt-[7px] pb-[7px]
                label-medium
                border border-transparent
                transition-all duration-300
                hover:bg-transparent hover:border-foreground
                ${className}
            `}
        >
            {children}
        </span>
    );
}