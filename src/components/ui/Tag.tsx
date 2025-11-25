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
                border border-border-subtle bg-surface-muted/50 
                px-2.5 py-1 
                text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted
                whitespace-nowrap
                ${className}
            `}
        >
            {children}
        </span>
    );
}