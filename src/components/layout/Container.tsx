// src/components/layout/Container.tsx
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto w-full gutter">
            {children}
        </div>
    );
}