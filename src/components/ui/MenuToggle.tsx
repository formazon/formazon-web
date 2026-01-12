"use client";

import { CloseIcon } from "./CloseIcon";
import { MenuIcon } from "./MenuIcon";

interface MenuToggleProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export function MenuToggle({ isOpen, onClick, className = "" }: MenuToggleProps) {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle menu"
            className={`flex items-center justify-center w-8 h-8 rounded-lg text-text-muted dark:text-foreground hover:opacity-70 dark:hover:opacity-70 sm:hidden transition-opacity ${className}`}
        >
            {isOpen ? (
                <CloseIcon className="w-6 h-6" />
            ) : (
                <MenuIcon className="w-6 h-6" />
            )}
        </button>
    );
}
