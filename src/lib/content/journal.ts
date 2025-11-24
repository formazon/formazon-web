// src/lib/content/journal.ts

export type JournalCoverImage = {
    src: string;   // путь в /public, например "/journal/how-to-shape-cover.png"
    alt: string;
    width: number;
    height: number;
};

export type JournalPost = {
    title: string;
    slug: string;
    excerpt: string;
    date: string; // ISO, напр. "2025-01-02"
    tag?: string;
};

export type JournalEntry = JournalPost & {
    body: string[];            // параграфы статьи
    coverImage?: JournalCoverImage;  // 👈 добавили обложку
};

export const journalEntries: Record<string, JournalEntry> = {
    "how-to-shape-a-product-from-zero": {
        title: "How to Shape a Product From Zero",
        slug: "how-to-shape-a-product-from-zero",
        excerpt:
            "Products become real when decisions become real. Thoughts on value, scope, sequencing, and momentum.",
        date: "2025-01-02",
        tag: "Product",
        coverImage: {
            src: "/journal/how-to-shape-cover.png",
            alt: "Sketches and wireframes for a new product concept",
            width: 1600,
            height: 900,
        },
        body: [
            "Most product ideas sound good in conversation. They feel obvious, natural, and almost inevitable. The hard part starts when you have to turn an idea into a sequence of concrete decisions that can be shipped.",
            "For me, shaping a product from zero always starts with constraints: who is this for, what are they trying to do, and what part of that journey do we want to own. Clarity here prevents you from building a generic 'everything and nothing' tool.",
            "The next step is to define a spine – a minimal path through the product that delivers real value. Not a feature list, but a narrative: how someone arrives, what they see first, what they do, and what changes for them as a result.",
            "From there, scope becomes a question of protection. What do we keep out of v1, even if it sounds tempting, because it weakens the spine. A product that tries to be polite to every idea usually ends up being impolite to the user’s time.",
        ],
    },

    "designing-for-clarity": {
        title: "Designing for Clarity",
        slug: "designing-for-clarity",
        excerpt:
            "Good design is not decoration — it's a reduction of noise. Grids, typography, and structure.",
        date: "2025-01-06",
        tag: "Design",
        coverImage: {
            src: "/journal/designing-for-clarity.png",
            alt: "Sketches and wireframes for a new product concept",
            width: 1600,
            height: 900,
        },
        body: [
            "A lot of design work is still described in terms of taste — 'nice', 'clean', 'cool'. But for most products the real metric is clarity: how quickly someone understands what this is, what it can do for them, and what they can do next.",
            "Clarity is built from a few boring tools: hierarchy, rhythm, contrast, and language. When those are strong, the interface feels calm and reliable, even if visually it’s very minimal.",
            "The grid and typography are doing most of this work. A good grid is not just vertical columns — it’s a way to align decisions. What belongs together, what is primary, what is secondary, and where the eye should rest.",
            "Decoration can be nice, but if it’s not anchored in structure, it tends to age very quickly. Clear things age slower.",
        ],
    },

    "why-ai-should-feel-predictable": {
        title: "Why AI Should Feel Predictable",
        slug: "why-ai-should-feel-predictable",
        excerpt:
            "People don’t trust randomness. Predictability, safety rails, and reasoning clarity in AI UX.",
        date: "2025-01-09",
        tag: "AI",
        coverImage: {
            src: "/journal/why-ai-should-feel-predictable.png",
            alt: "Sketches and wireframes for a new product concept",
            width: 1600,
            height: 900,
        },
        body: [
            "Most people don’t wake up wanting 'AI'. They want something specific: fewer repetitive tasks, better answers, or a second pair of eyes on their work. Whenever AI feels random, their trust collapses.",
            "Predictability doesn’t mean determinism in the technical sense — it means the experience has a clear mental model. When I do X, I roughly expect Y. If I don’t, the product should quickly show me what went wrong and what I can change.",
            "Well-designed AI products expose constraints and decisions: what data is used, what is ignored, how results are scored, and how I can influence the outcome without speaking an internal system language.",
            "The more powerful the system, the calmer the interface should feel. If the UI looks chaotic, people will assume the underlying intelligence is too.",
        ],
    },
};

export const journalPosts: JournalPost[] = Object.values(journalEntries)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getJournalEntry(slug: string): JournalEntry | undefined {
    return journalEntries[slug];
}

/**
 * Возвращает соседние записи для навигации:
 * - previous: запись новее (выше в списке)
 * - next: запись старее (ниже в списке)
 */
export function getJournalNeighbors(slug: string): {
    previous?: JournalPost;
    next?: JournalPost;
} {
    const index = journalPosts.findIndex((post) => post.slug === slug);
    if (index === -1) {
        return {};
    }

    const previous = index > 0 ? journalPosts[index - 1] : undefined;
    const next = index < journalPosts.length - 1 ? journalPosts[index + 1] : undefined;

    return { previous, next };
}
