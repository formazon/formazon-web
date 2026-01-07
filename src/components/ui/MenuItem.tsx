import Link from "next/link";

type MenuItemProps = {
    href: string;
    label: string;
    isActive: boolean;
    onClick?: () => void;
};

export function MenuItem({ href, label, isActive, onClick }: MenuItemProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`
                bg-surface-muted px-4 py-2 rounded-full 
                label-medium uppercase 
                transition-all duration-200
                hover:bg-foreground hover:text-background
                ${isActive
                ? "bg-transparent ring-1 ring-inset text-foreground" : "bg-surface-muted text-text-muted"}
            `}
        >
            {label}
        </Link>
    );
}