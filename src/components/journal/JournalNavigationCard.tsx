import Link from "next/link";
import type { JournalPost } from "@/lib/content/journal";

interface JournalNavigationCardProps {
    post: JournalPost;
    direction: "next" | "previous";
    href: string;
}

export function JournalNavigationCard({ post, direction, href }: JournalNavigationCardProps) {
    const isNext = direction === "next";
    const label = isNext ? "Next →" : "← Previous";
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <Link
            href={href}
            className={`group flex flex-col justify-between rounded-sm border border-border-subtle p-4 transition-all hover:border-foreground ${isNext ? "text-right" : ""}`}
        >
            <div className="mb-2 label-medium text-text-muted transition-colors group-hover:text-text-muted/80">
                {label}
            </div>
            <div className="space-y-1">
                <p className="subtitle-medium transition-colors">
                    {post.title}
                </p>
                <p className="label text-text-muted">
                    {formattedDate}
                </p>
            </div>
        </Link>
    );
}

