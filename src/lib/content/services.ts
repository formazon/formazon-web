// src/lib/content/services.ts

export type Service = {
    title: string;
    subtitle?: string;
    description: string;
    bullets: string[];
};

export const services: Service[] = [
    {
        title: "Product & UX direction",
        subtitle: "From zero to a coherent product",
        description:
            "Shaping products from first idea to something people can actually use — with a focus on structure, clarity, and momentum.",
        bullets: [
            "Product narrative and positioning",
            "Feature framing and scope definition",
            "User journeys and core flows",
            "Early prototypes and interaction models",
        ],
    },
    {
        title: "Interface & visual design",
        subtitle: "Interfaces that stay calm and legible",
        description:
            "Interfaces for apps, dashboards, and tools — built on typography, hierarchy, and clean visual systems.",
        bullets: [
            "Mobile and web interfaces",
            "Design systems and components",
            "Complex dashboards and states",
            "Handoff-ready Figma files",
        ],
    },
    {
        title: "AI & developer tools UX",
        subtitle: "Making AI and complex tools feel predictable",
        description:
            "Design for AI-assisted workflows and developer tools where trust, safety, and clarity matter more than visual tricks.",
        bullets: [
            "AI-assisted flows and review loops",
            "IDE and CLI tooling UX",
            "Enterprise-ready workflows",
            "Explainability and failure modes",
        ],
    },
    {
        title: "Brand & product story",
        subtitle: "A story that matches the product",
        description:
            "Visual and verbal language that ties together product, site, decks, and investor communication.",
        bullets: [
            "Naming directions and brand spine",
            "Visual identity for product sites",
            "Pitch and investor decks",
            "Launch and announcement assets",
        ],
    },
];