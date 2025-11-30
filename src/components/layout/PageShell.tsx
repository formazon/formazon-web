// src/components/layout/PageShell.tsx
import { ReactNode } from "react";
import { Container } from "./Container";

interface PageShellProps {
    children: ReactNode;
    wide?: boolean;
    className?: string;
}

export function PageShell({
                              children,
                              className = "",
                          }: PageShellProps) {
    return (
        <Container>
            <div
                className={`
                    w-full 
                    ${className}
                `}
            >
                {children}
            </div>
        </Container>
    );
}