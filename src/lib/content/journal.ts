// src/lib/content/journal.ts

export type JournalPost = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    tag?: string;
};

export const journalPosts: JournalPost[] = [
    {
        title: "How to Shape a Product From Zero",
        slug: "how-to-shape-a-product-from-zero",
        excerpt:
            "Products become real when decisions become real. Thoughts on value, scope, sequencing, and momentum.",
        date: "2025-01-02",
        tag: "Product",
    },
    {
        title: "Designing for Clarity",
        slug: "designing-for-clarity",
        excerpt:
            "Good design is not decoration — it's a reduction of noise. Grids, typography, and structure.",
        date: "2025-01-06",
        tag: "Design",
    },
    {
        title: "Why AI Should Feel Predictable",
        slug: "why-ai-should-feel-predictable",
        excerpt:
            "People don’t trust randomness. Predictability, safety rails, and reasoning clarity in AI UX.",
        date: "2025-01-09",
        tag: "AI",
    },
];
