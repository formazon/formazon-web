// src/lib/content/capabilities.ts
export type Capability = {
    title: string;
    description: string;
    points: string[];
};

export const capabilities: Capability[] = [
    {
        title: "Product Strategy & 0→1",
        description:
            "From idea to shippable product — scope, decisions, and momentum.",
        points: [
            "Product discovery and positioning",
            "Defining value, scope, and roadmap",
            "Helping founders make clear decisions",
        ],
    },
    {
        title: "UX & Interface Design",
        description:
            "Interfaces for apps, platforms, and tools that feel structured and clear.",
        points: [
            "Information architecture and flows",
            "Design systems and UI libraries",
            "Prototypes for validation and alignment",
        ],
    },
    {
        title: "AI & Engineering Direction",
        description:
            "Designing predictable, trustworthy AI features and integrations.",
        points: [
            "LLM integration strategy",
            "Deterministic flows and safety rails",
            "Collaboration with engineering teams",
        ],
    },
    {
        title: "Brand & Narrative for Products",
        description:
            "Names, identities, and stories that support the product, not overshadow it.",
        points: [
            "Brand identity and visual language",
            "Product websites and launch materials",
            "Investor and partner decks",
        ],
    },
];
