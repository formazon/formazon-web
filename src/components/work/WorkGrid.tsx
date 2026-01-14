// src/components/work/WorkGrid.tsx
import { useMemo } from "react";
import type { ReactNode } from "react";
import type { WorkItem } from "@/lib/content/work";

interface WorkGridProps {
    items: WorkItem[];
    renderItem: (item: WorkItem) => ReactNode;
    columns?: 1 | 2 | 3;
}

export function WorkGrid({ items, renderItem, columns = 2 }: WorkGridProps) {
    const colsClass = useMemo(() => {
        if (columns === 3) {
            return "grid gap-x-5 md:grid-cols-3";
        }
        if (columns === 1) {
            return "grid gap-x-4 gap-y-20";
        }
        return "grid gap-x-4 gap-y-20 md:grid-cols-2";
    }, [columns]);

    return (
        <div className={colsClass}>
            {items.map((item) => (
                <div key={item.slug}>{renderItem(item)}</div>
            ))}
        </div>
    );
}
