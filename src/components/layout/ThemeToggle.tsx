"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkIcon } from "@/components/ui/DarkIcon";
import { LightIcon } from "@/components/ui/LightIcon";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Избегает гидратационной ошибки
    useEffect(() => setMounted(true), []);

    // Чтобы избежать сдвига верстки (layout shift) при загрузке,
    // можно вернуть заглушку того же размера, вместо null.
    if (!mounted) {
        return <div className="h-10 w-10" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
                rounded-lg px-0 py-[3px]
                text-text-muted
                transition-colors
                hover:text-foreground
            "
        >
            {isDark ? (
                <DarkIcon className="h-8 w-8" />
            ) : (
                <LightIcon className="h-8 w-8" />
            )}
        </button>
    );
}