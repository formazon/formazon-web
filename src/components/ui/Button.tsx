// src/components/ui/Button.tsx
import { useMemo } from "react";
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
}

const baseStyles = "inline-flex items-center justify-center rounded-sm px-4 py-2 label-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
    primary: "bg-foreground text-background hover:opacity-90",
    outline: "border border-border-subtle text-text-muted hover:border-foreground hover:text-foreground hover:bg-surface-muted/50",
    ghost:   "text-text-muted hover:text-foreground hover:bg-surface-muted/50",
} as const;

export function Button({
                           children,
                           href,
                           variant = "primary",
                           className = "",
                           ...props
                       }: ButtonProps) {
    // Memoize className calculation
    const combinedClassName = useMemo(
        () => `${baseStyles} ${variants[variant]} ${className}`,
        [variant, className]
    );

    // 3. Логика рендера: Link или button
    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}