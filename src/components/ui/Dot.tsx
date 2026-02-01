interface DotProps {
    bgColor?: string;
    className?: string;
}

export function Dot({ bgColor = "bg-foreground", className }: DotProps = {}) {
    return <div className={`w-1 h-0.5 ${bgColor} ${className || ""}`} />;
}

