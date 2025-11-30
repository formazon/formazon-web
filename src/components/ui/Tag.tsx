import { ReactNode } from "react";

interface TagProps {
    children: ReactNode;
    className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
    return (
        <span
            className={`
                inline-flex items-center rounded-full 
                bg-surface-muted
                px-4 py-3
                text-sm font-medium uppercase tracking-[0.04rem]
                transition-colors duration-300
                hover:bg-foreground hover:text-background
                ${className}
            `}
        >
            {children}
        </span>
    );
}