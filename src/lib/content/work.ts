// src/lib/content/work.ts
export type WorkItem = {
    title: string;
    slug: string; // для /work/[slug]
    description: string;
    tags?: string[];
};

export const workItems: WorkItem[] = [
    {
        title: "AppForType",
        slug: "appfortype",
        description:
            "Creative mobile toolkit for storytelling — templates, editors, and a marketplace used by millions.",
        tags: ["Product", "Mobile app", "Branding"],
    },
    {
        title: "Explyt",
        slug: "explyt",
        description:
            "AI-powered platform for generating and analyzing software tests with deterministic, enterprise-ready workflows.",
        tags: ["AI", "Enterprise", "Developer tools"],
    },
    {
        title: "TRA Robotics",
        slug: "tra-robotics",
        description:
            "Industrial automation and robotics tools with clear interfaces for control, monitoring, and workflows.",
        tags: ["Robotics", "UX", "Systems"],
    },
    {
        title: "Fuelet",
        slug: "fuelet",
        description:
            "Fintech product designed around clarity, trust, and simple user flows.",
        tags: ["Fintech", "Product"],
    },
    {
        title: "Jungle",
        slug: "jungle",
        description:
            "Lightweight productivity and automation system aimed at simplifying daily workflows.",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "Esprito",
        slug: "esprito",
        description:
            "Brand and product narrative system focused on clarity, visual identity, and storytelling.",
        tags: ["Branding", "Narrative"],
    },
];
