"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Избегает гидратационной ошибки
    useEffect(() => setMounted(true), []);

    // Чтобы избежать сдвига верстки (layout shift) при загрузке,
    // можно вернуть заглушку того же размера, вместо null.
    if (!mounted) {
        return <div className="h-8 w-8" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="
                rounded-lg p-2
                text-text-muted
                transition-colors
                hover:bg-surface-muted hover:text-foreground
            "
        >
            {isDark ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </button>
    );
}