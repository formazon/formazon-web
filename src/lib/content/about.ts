// src/lib/content/about.ts

export const aboutContent = {
    intro: {
        label: "About",
        title: "I build and shape digital products — from first idea to something people actually use.",
        description:
            "I work at the intersection of product, interface, and narrative. Most of my time goes into shaping how products behave, how they look, and how they are explained — so teams can move faster without losing clarity.",
    },
    story: [
        "Over the last years I've been founding, designing, and growing products across different domains: mobile creativity tools, AI platforms for engineers, fintech, and robotics-driven systems. I like working close to constraints — real teams, real codebases, and real operational limits.",
        "My background is a mix of product thinking, interface design, and hands-on implementation. I'm comfortable jumping between high-level structure and very concrete screens, flows, or states. A good day is when something abstract turns into a clear, shippable decision.",
        "I prefer long-term collaborations, where we can build a shared language for the product and reuse it across the app, site, decks, and internal docs. That usually means fewer random features and more deliberate, compounding work.",
        "I mostly work remotely, but I treat products as real, physical things: they live inside teams, processes, and hardware — not just inside Figma.",
    ],
    snapshot: {
        profile: [
            { label: "Role", value: "Product founder & designer" },
            { label: "Focus", value: "Apps, AI tools, interfaces, brand systems" },
            { label: "Mode", value: "Long-term product partner & focused projects" },
        ],
        // Можно брать из work.ts, но часто для About нужны более короткие описания
        history: [
            {
                name: "TRA Robotics",
                slug: "tra-robotics", // Добавили slug
                desc: "Industrial automation & robotics tools"
            },
            {
                name: "AppForType",
                slug: "appfortype",
                desc: "Creative mobile editor & content marketplace"
            },
            {
                name: "Explyt",
                slug: "explyt",
                desc: "AI-powered testing platform for engineers"
            },
            {
                name: "Fuelet",
                slug: "fuelet",
                desc: "Fintech UX around clarity and trust"
            },
            {
                name: "Jungle",
                slug: "jungle",
                desc: "Lightweight productivity & automation"
            },
            {
                name: "Esprito",
                slug: "esprito",
                desc: "Brand & narrative systems"
            },
        ],
        services: [
            "Shaping the first version of a product",
            "Clarifying flows and interfaces in existing tools",
            "Aligning product, site, and decks into one story",
            "Designing AI-assisted workflows that feel predictable",
        ],
    },
    principles: [
        {
            title: "Calm, structured pace",
            description:
                "I prefer fewer threads running in parallel and a clear sense of what we're actually trying to change in the product.",
        },
        {
            title: "Concrete artifacts",
            description:
                "Screens, flows, maps, and docs that can be shared with the team — not just abstract ideas or moodboards.",
        },
        {
            title: "Closer to the product",
            description:
                "I like to stay close to the real state of the product — staging builds, engineering constraints, support tickets, and metrics.",
        },
    ],
    cta: {
        label: "Next",
        text: "If you'd like to work together or talk through a product idea, send a short note with context.",
        button: "Contact me",
        href: "/contact",
    },
};