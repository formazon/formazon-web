// src/components/work/WorkGrid.tsx
import type { ReactNode } from "react";
import type { WorkItem } from "@/lib/content/work";

type WorkGridProps = {
    items: WorkItem[];
    renderItem: (item: WorkItem) => ReactNode;
    columns?: 1 | 2 | 3;
};

export function WorkGrid({ items, renderItem, columns = 2 }: WorkGridProps) {
    const colsClass =
        columns === 3
            ? "grid gap-6 md:grid-cols-3"
            : columns === 1
                ? "grid gap-6"
                : "grid gap-6 md:grid-cols-2";

    return (
        <div className={colsClass}>
            {items.map((item) => (
                <div key={item.slug}>{renderItem(item)}</div>
            ))}
        </div>
    );
}
