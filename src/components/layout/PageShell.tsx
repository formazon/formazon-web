// src/components/layout/PageShell.tsx
import { Container } from "./Container";

export function PageShell({
                              children,
                              wide = false, // бывает нужно (например, галереи)
                          }: {
    children: React.ReactNode;
    wide?: boolean;
}) {
    return (
        <Container>
            <div
                className={
                    (wide ? "" : "max-w-4xl") + " mx-auto py-space-12 lg:py-space-16"
                }
            >
                {children}
            </div>
        </Container>
    );
}

