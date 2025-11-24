// src/lib/content/work.ts

//
// Базовый тип для списка проектов (карточки на /work и на главной)
//
export type WorkItem = {
    title: string;
    slug: string; // /work/[slug]
    description: string;
    tags?: string[];
};

export type WorkCaseSectionId = "overview" | "challenge" | "approach" | "outcome";

export type WorkCaseSection = {
    id: WorkCaseSectionId;
    title: string;
    body: string;
};

/** Тип для картинок кейса */
export type WorkCaseImage = {
    /** Путь к картинке в /public, например /work/fuelet-dashboard.png */
    src: string;
    alt: string;
    width: number;
    height: number;
};

/** Полный кейс = WorkItem + мета + секции + (опционально) картинки */
export type WorkCase = WorkItem & {
    order?: number;
    heroKicker?: string;
    heroSummary?: string;
    role?: string;
    type?: string;
    timeframe?: string;
    services?: string[];
    sections: WorkCaseSection[];
    images?: WorkCaseImage[];
};

/** Объект со всеми кейсами по slug (один источник правды) */
export const workCases: Record<string, WorkCase> = {
    appfortype: {
        order: 10,
        title: "AppForType",
        slug: "appfortype",
        description:
            "Creative mobile toolkit for storytelling — templates, editors, and a marketplace used by millions.",
        tags: ["Product", "Mobile app", "Branding"],
        heroKicker: "Creative mobile app",
        heroSummary:
            "A photo and video editing toolkit that turns everyday content into expressive stories using typography, templates, and curated assets.",
        role: "Founder, Product & Design",
        type: "B2C mobile app",
        timeframe: "Long-term product, multi-year",
        services: [
            "Product strategy",
            "UX & UI design",
            "Design system",
            "Content ecosystem",
            "Brand & narrative",
        ],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "AppForType is a creative mobile app for people who want to edit photos and videos quickly without learning complex desktop tools. It combines text, templates, and visual assets into a simple, approachable editor that still feels powerful for advanced users.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "The challenge was to design an editor that feels light and inspiring on a small screen, while still supporting layers, typography, and a large library of templates. It needed to be fast to start, intuitive to explore, and scalable as the library and feature set grew.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "The product was shaped around a few strong principles: quick entry into editing, clear structure of tools, and a template-first mindset. The design system used strong hierarchy, restrained color, and clear iconography to guide users through complex interactions. The marketplace was integrated into the editor so that content and tools felt like one system.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "AppForType reached millions of installs and maintained high ratings, becoming a daily tool for creators who wanted to design quickly on mobile. The editor architecture and content system made it possible to continuously add new features and templates without losing clarity.",
            },
        ],
        // images: [] // можно добавить по аналогии с Fuelet
    },

    explyt: {
        order: 20,
        title: "Explyt",
        slug: "explyt",
        description:
            "AI-powered platform for generating and analyzing software tests with deterministic, enterprise-ready workflows.",
        tags: ["AI", "Enterprise", "Developer tools"],
        heroKicker: "AI-powered testing platform",
        heroSummary:
            "An AI-assisted test generation platform that integrates into existing engineering workflows and IDEs, focusing on determinism, safety, and developer trust.",
        role: "Product & Design",
        type: "B2B / Enterprise, Developer tool",
        timeframe: "Ongoing",
        services: [
            "Product strategy",
            "AI UX design",
            "Developer workflows",
            "Enterprise UX",
            "Brand & narrative",
        ],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "Explyt helps engineering teams generate, review, and evolve software tests using AI. Instead of treating AI as a black box, the platform focuses on clear workflows, explainability, and integration into existing tools like IDEs and CI pipelines.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "AI for testing can easily become noisy or untrustworthy. The main challenge was to design flows where developers stay in control: they understand why a test is generated, what it covers, and how it impacts their codebase.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "The product was structured around deterministic workflows and clear artifacts. Interfaces made test coverage, diffs, and AI decisions visible. The IDE plugin and web dashboard were designed to feel like natural extensions of existing engineering practices, not replacements.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "The result is a platform that makes AI-assisted testing practical at scale: teams can offload repetitive work while keeping ownership of their test suites, with a clear mental model of what the AI is doing and why.",
            },
        ],
        images: [
            {
                src: "/work/explyt/explyt-branding.png",
                alt: "Explyt main dashboard with balances and recent activity",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/explyt/explyt-dashboard.png",
                alt: "Explyt main dashboard with balances and recent activity",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/explyt/explyt-onboarding.png",
                alt: "Explyt onboarding flow with clear steps",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/explyt/explyt-transfer-flow.png",
                alt: "Explyt money transfer flow with guided confirmations",
                width: 1600,
                height: 900,
            },
        ],
    },

    "tra-robotics": {
        order: 30,
        title: "TRA Robotics",
        slug: "tra-robotics",
        description:
            "Industrial automation and robotics tools with clear interfaces for control, monitoring, and workflows.",
        tags: ["Robotics", "Systems", "UX"],
        heroKicker: "Robotics automation",
        heroSummary:
            "Interfaces and workflows for industrial robotics — making complex systems operable, monitorable, and understandable for real teams in the field.",
        role: "Product & UX",
        type: "Industrial systems",
        timeframe: "Project-based",
        services: [
            "Complex UX",
            "Control dashboards",
            "Monitoring interfaces",
            "System mapping",
        ],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "Robotics systems are inherently complex: there are many states, safety constraints, and edge cases. The challenge was to present this complexity in a way that remains accurate and reliable, while still being usable day-to-day.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "The product interfaces were built on strong information hierarchy, clear feedback, and separation between monitoring, control, and configuration. Visual design was calm, utilitarian, and focused on reliability over decoration.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "The resulting tools improved situational awareness, reduced cognitive load for operators, and created a more consistent language across different parts of the system.",
            },
        ],
    },

    fuelet: {
        order: 40,
        title: "Fuelet",
        slug: "fuelet",
        description:
            "Fintech product designed around clarity, trust, and simple user flows.",
        tags: ["Fintech", "Product"],
        heroKicker: "Fintech UX",
        heroSummary:
            "A fintech experience focused on clarity, trust, and guided flows for non-technical users.",
        role: "Product & UX",
        type: "Fintech",
        timeframe: "Project-based",
        services: ["Product UX", "Flows", "Visual design"],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "Fuelet required interfaces where money, risk, and technical constraints are presented in a way that feels understandable and safe.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "Designing flows that handle edge cases and regulatory constraints without overwhelming users.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "We focused on linear, guided flows with clear copy, progressive disclosure of complexity, and a visual language that communicates trust.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "Users could complete key tasks without feeling lost, while still having access to more advanced information when needed.",
            },
        ],
        /** Пример подключения реальных изображений */
        images: [
            {
                src: "/work/fuelet/fuelet-branding.png",
                alt: "Fuelet main dashboard with balances and recent activity",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/fuelet/fuelet-dashboard.png",
                alt: "Fuelet main dashboard with balances and recent activity",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/fuelet/fuelet-onboarding.png",
                alt: "Fuelet onboarding flow with clear steps",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/fuelet/fuelet-transfer-flow.png",
                alt: "Fuelet money transfer flow with guided confirmations",
                width: 1600,
                height: 900,
            },
        ],
    },

    jungle: {
        order: 50,
        title: "Jungle",
        slug: "jungle",
        description:
            "Lightweight productivity and automation system aimed at simplifying daily workflows.",
        tags: ["Productivity", "Automation"],
        heroKicker: "Productivity & automation",
        heroSummary:
            "A tool for simplifying daily work through structured, lightweight automation.",
        role: "Product & Design",
        type: "Productivity",
        timeframe: "Project-based",
        services: ["Product design", "UX", "Interaction design"],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "Jungle was designed as a way to reduce friction in daily workflows by automating repetitive tasks without heavy setup.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "Building automation that doesn’t feel like programming, and doesn’t require a complex mental model from the user.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "We used patterns like templates, presets, and guided creation flows instead of raw rule-building, focusing on direct manipulation and clarity.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "The result was a tool that made automation feel more like configuring helpful behaviors than writing logic.",
            },
        ],
    },

    esprito: {
        order: 60,
        title: "Esprito",
        slug: "esprito",
        description:
            "Brand and product narrative system focused on clarity, visual identity, and storytelling.",
        tags: ["Branding", "Narrative"],
        heroKicker: "Brand & narrative",
        heroSummary:
            "A brand and narrative system that gives products a clear, coherent visual and verbal identity.",
        role: "Brand & Product Direction",
        type: "Brand system",
        timeframe: "Project-based",
        services: ["Brand identity", "Narrative", "Visual system"],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "Esprito work focused on building a consistent way to talk about and show the product — from naming and messaging to visual systems.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "Finding a balance between personality and clarity, avoiding generic brand language while still being precise.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "We developed a narrative spine first — what the product stands for, what it refuses to be — and then built visuals and messaging on top of it.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "The result was a cohesive identity that could be applied to interfaces, websites, decks, and communication without losing its core idea.",
            },
        ],
    },
};

/** Получить полный кейс по slug */
export function getWorkCase(slug: string): WorkCase | undefined {
    return workCases[slug];
}

// Список работ в общем порядке (используется на /work)
export const workItems: WorkItem[] = Object.values(workCases)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .map(({ title, slug, description, tags }) => ({
        title,
        slug,
        description,
        tags,
    }));

// Какие из них считаем избранными для главной
export const featuredWorkSlugs: string[] = [
    "appfortype",
    "explyt",
    "tra-robotics",
    "fuelet",
];

// Избранные в том порядке, в каком указали в featuredWorkSlugs
export const featuredWorkItems: WorkItem[] = featuredWorkSlugs
    .map((slug) => workItems.find((item) => item.slug === slug))
    .filter((item): item is WorkItem => Boolean(item));

