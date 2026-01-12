"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";
import { DarkIcon } from "@/components/ui/DarkIcon";
import { LightIcon } from "@/components/ui/LightIcon";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Избегает гидратационной ошибки
    useEffect(() => setMounted(true), []);

    const isDark = useMemo(() => theme === "dark", [theme]);

    const handleToggle = useCallback(() => {
        setTheme(isDark ? "light" : "dark");
    }, [isDark, setTheme]);

    // Чтобы избежать сдвига верстки (layout shift) при загрузке,
    // можно вернуть заглушку того же размера, вместо null.
    if (!mounted) {
        return <div className="h-10 w-10" />;
    }

    return (
        <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            className="
                flex items-center justify-center w-8 h-8 rounded-lg
                text-text-muted
                dark:text-white
                transition-all duration-200
                hover:opacity-70
                dark:hover:opacity-70
            "
        >
            {isDark ? (
                <DarkIcon className="w-6 h-6" />
            ) : (
                <LightIcon className="w-6 h-6" />
            )}
        </button>
    );
}