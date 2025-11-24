// src/components/ui/Button.tsx
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "outline" | "ghost";
    className?: string;
}

export function Button({
                           children,
                           href,
                           variant = "primary",
                           className = "",
                           ...props
                       }: ButtonProps) {
    // 1. Базовые стили (размер, шрифт, скругление, центровка)
    const baseStyles = "inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/20 disabled:opacity-50 disabled:pointer-events-none";

    // 2. Варианты стилей на токенах
    const variants = {
        primary: "bg-foreground text-background hover:opacity-90",
        outline: "border border-border-subtle text-text-muted hover:border-foreground hover:text-foreground hover:bg-surface-muted/50",
        ghost:   "text-text-muted hover:text-foreground hover:bg-surface-muted/50", // для простых кнопок без рамок
    };

    // Собираем итоговый класс
    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

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