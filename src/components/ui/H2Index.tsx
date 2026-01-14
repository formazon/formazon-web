// src/components/ui/H2Index.tsx

interface H2IndexProps {
    children: React.ReactNode;
    index?: number | string;
    className?: string;
}

export function H2Index({ children, index = 1, className = "" }: H2IndexProps) {
    return (
        <div className={`mt-20 flex items-start gap-2 ${className}`}>
            <h2 className="h2">
                {children}
            </h2>
            <span className="label text-black-40 pt-[4px]">
                [{index}]
            </span>
        </div>
    );
}

