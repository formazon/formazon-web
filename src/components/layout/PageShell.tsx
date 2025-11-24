// src/components/layout/PageShell.tsx
import { ReactNode } from "react";
import { Container } from "./Container";

interface PageShellProps {
    children: ReactNode;
    wide?: boolean;      // Если true — контент шире (для галерей)
    className?: string;  // Возможность прокинуть доп. классы при необходимости
}

export function PageShell({
                              children,
                              wide = false,
                              className = "",
                          }: PageShellProps) {
    return (
        <Container>
            <div
                className={`
                    mx-auto 
                    py-12 lg:py-16 
                    ${wide ? "" : "max-w-4xl"} 
                    ${className}
                `}
            >
                {children}
            </div>
        </Container>
    );
}