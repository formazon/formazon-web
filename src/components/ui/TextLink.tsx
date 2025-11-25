import Link from "next/link";
import { ReactNode } from "react";

interface TextLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    external?: boolean; // Опционально: для открытия в новой вкладке
}

export function TextLink({
                             href,
                             children,
                             className = "",
                             external = false
                         }: TextLinkProps) {
    const styles = "font-medium text-foreground underline underline-offset-4 decoration-border-subtle transition-all hover:decoration-foreground hover:opacity-80";

    const combinedClassName = `${styles} ${className}`;

    if (external) {
        return (
            <a
                href={href}
                className={combinedClassName}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={combinedClassName}>
            {children}
        </Link>
    );
}