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
    avatar?: string; // Путь к аватарке проекта в /public, например /work/jungle.svg
};

/** Объект со всеми кейсами по slug (один источник правды) */
export const workCases: Record<string, WorkCase> = {
    appfortype: {
        order: 20,
        title: "AppForType",
        slug: "appfortype",
        description:
            "Category-defining mobile creative suite used by 4M+ creators to blend typography, collage, and photography.",
        tags: ["Product", "Mobile App", "Growth"],
        avatar: "/work/appfortype.svg",
        heroKicker: "Creative Mobile Suite",
        heroSummary:
            "A mixed-media editor that bridged the gap between desktop design tools and mobile convenience. AppForType empowered millions of users to turn everyday photos into expressive stories using handcrafted typography and real-world textures.",
        role: "Founder, Product & Design",
        type: "B2C Mobile App (iOS / Android)",
        timeframe: "2016 — Present",
        services: [
            "Product Strategy",
            "Full-cycle UX/UI",
            "Content Ecosystem",
            "Monetization Strategy",
            "Brand Identity",
        ],
        sections: [
            {
                id: "overview",
                title: "The Vision",
                body:
                    "In the mid-2010s, mobile editing was limited to filters. To add expressive typography or create collages, creators had to rely on complex desktop software. AppForType was built to solve this friction: a tool designed specifically for 'mixed media' on mobile—combining photos, handwriting, and layout in a seamless, gesture-based interface.",
            },
            {
                id: "challenge",
                title: "The Challenge",
                body:
                    "The main product challenge was to balance simplicity with depth. We needed to handle high-resolution image processing and complex layering on mobile devices without overwhelming the user. Additionally, we had to build a sustainable content engine—moving beyond a static utility app to a dynamic platform with weekly asset drops and a thriving marketplace.",
            },
            {
                id: "approach",
                title: "The Approach",
                body:
                    "We engineered a custom rendering engine that treated typography as 'stickers' rather than fonts, allowing for hand-lettered assets that couldn't be replicated by system text. We also developed the 'Sheer' feature—a computer-vision tool allowing users to photograph their own handwriting, remove the background instantly, and apply it as a digital layer. The UI was designed to be 'invisible', maximizing the canvas space and using gestures for manipulation.",
            },
            {
                id: "outcome",
                title: "Impact",
                body:
                    "AppForType grew organically to over 4 million downloads without paid acquisition, becoming a staple tool for influencers and small businesses. It was featured as 'App of the Day' by Apple multiple times globally. The scalable content model allowed us to partner with international lettering artists, creating a continuous revenue stream via In-App Purchases.",
            },
        ],
        // Не забудь добавить реальные скриншоты в папку /public/work/appfortype/
        images: [
            {
                src: "/work/appfortype/appfortype-1.jpg",
                alt: "AppForType editor interface showing typography layers",
                width: 1600,
                height: 987,
            },
            {
                src: "/work/appfortype/aft-scanner.jpg",
                alt: "The 'Sheer' feature: scanning real handwriting into the app",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/appfortype/aft-shop.jpg",
                alt: "In-app marketplace and content discovery",
                width: 1600,
                height: 900,
            },
            {
                src: "/work/appfortype/aft-collages.jpg",
                alt: "Examples of user-generated content and collages",
                width: 1600,
                height: 900,
            },
        ],
    },

    explyt: {
        order: 50,
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
        order: 40,
        title: "TRA Robotics",
        slug: "tra-robotics",
        description:
            "Industrial automation and robotics tools with clear interfaces for control, monitoring, and workflows.",
        tags: ["Robotics", "Systems", "UX"],
        avatar: "/work/tra-robotics.svg",
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
        images: [
            {
                src: "/work/tra-robotics/tra-robotics-1.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/tra-robotics/tra-robotics-2.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/tra-robotics/tra-robotics-3.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/tra-robotics/tra-robotics-4.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/tra-robotics/tra-robotics-5.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/tra-robotics/tra-robotics-6.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1185,
                height: 960,
            },
            {
                src: "/work/tra-robotics/tra-robotics-7.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1185,
                height: 960,
            },
            {
                src: "/work/tra-robotics/tra-robotics-8.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1185,
                height: 960,
            },
            {
                src: "/work/tra-robotics/tra-robotics-9.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1185,
                height: 960,
            },
            {
                src: "/work/tra-robotics/tra-robotics-10.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1185,
                height: 960,
            },
            {
                src: "/work/tra-robotics/tra-robotics-11.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1185,
                height: 960,
            },
            {
                src: "/work/tra-robotics/tra-robotics-12.jpg",
                alt: "TRA Robotics focuses on automating physical workflows using robotic systems. My work centered on turning complex, technical operations into clear interfaces that operators and engineers can use confidently",
                width: 1920,
                height: 1185,
            },
        ],
    },

    fuelet: {
        order: 30,
        title: "Fuelet Wallet",
        slug: "fuelet",
        description:
            "Fintech product designed around clarity, trust, and simple user flows.",
        tags: ["Fintech", "Product"],
        avatar: "/work/fuelet.svg",
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
                src: "/work/fuelet/fuelet-wallet-1.jpg",
                alt: "Fuelet main dashboard with balances and recent activity",
                width: 1920,
                height: 1185,
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
        order: 10,
        title: "Jungle Robotics",
        slug: "jungle",
        description:
            "Lightweight productivity and automation system aimed at simplifying daily workflows.",
        tags: ["Productivity", "Automation"],
        avatar: "/work/jungle.svg",
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
        images: [
            {
                src: "/work/jungle/jungle-robotics-1.jpg",
                alt: "Jungle Robotics interface showing automation flows",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/jungle/jungle-robotics-2.jpg",
                alt: "Jungle Robotics interface showing automation flows",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/jungle/jungle-robotics-3.jpg",
                alt: "Jungle Robotics interface showing automation flows",
                width: 1920,
                height: 1185,
            },
            {
                src: "/work/jungle/jungle-robotics-4.jpg",
                alt: "Jungle Robotics interface showing automation flows",
                width: 1920,
                height: 1185,
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

    montessori: {
        order: 70,
        title: "Montessori Platform",
        slug: "montessori",
        description:
            "Data analytics and learning management platform for organizing preschool and school-age children's education.",
        tags: ["EdTech", "Analytics", "Product"],
        heroKicker: "Education platform",
        heroSummary:
            "A platform for tracking, analyzing, and organizing the learning process for preschool and school-age children using data-driven insights and structured workflows.",
        role: "Product & Design",
        type: "EdTech Platform",
        timeframe: "Project-based",
        services: ["Product strategy", "UX design", "Data visualization"],
        sections: [
            {
                id: "overview",
                title: "Overview",
                body:
                    "Montessori Platform was built to help educators and parents track children's progress, organize learning activities, and make data-informed decisions about each child's development path.",
            },
            {
                id: "challenge",
                title: "Challenge",
                body:
                    "Education data is often fragmented and hard to interpret. The challenge was to create a system that surfaces meaningful insights without overwhelming teachers or reducing children to metrics.",
            },
            {
                id: "approach",
                title: "Approach",
                body:
                    "We focused on clear visualizations, simple input flows, and contextual guidance. The interface was designed to feel supportive rather than administrative, helping educators spend more time with children and less time on paperwork.",
            },
            {
                id: "outcome",
                title: "Outcome",
                body:
                    "The platform enabled schools to better understand individual learning patterns, communicate progress to parents, and adapt curricula based on real observations.",
            },
        ],
        images: [
            {
                src: "/work/montessori/montessori-1.jpg",
                alt: "Montessori Platform interface showing analytics and learning management",
                width: 1920,
                height: 1185,
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
    "jungle",
    "appfortype",
    "fuelet",
    "tra-robotics",
    "explyt",
    "esprito",
];

// Избранные в том порядке, в каком указали в featuredWorkSlugs
export const featuredWorkItems: WorkItem[] = featuredWorkSlugs
    .map((slug) => workItems.find((item) => item.slug === slug))
    .filter((item): item is WorkItem => Boolean(item));

export function getRandomWorkCase(currentSlug: string): WorkItem | undefined {
    // Сразу фильтруем workItems, не создавая лишних промежуточных переменных
    const otherItems = workItems.filter((item) => item.slug !== currentSlug);

    if (otherItems.length === 0) return undefined;

    const randomIndex = Math.floor(Math.random() * otherItems.length);
    return otherItems[randomIndex];
}

/**
 * Возвращает соседние работы для навигации на основе order:
 * - previous: работа с меньшим order (предыдущая в списке)
 * - next: работа с большим order (следующая в списке)
 */
export function getWorkNeighbors(currentSlug: string): {
    previous?: WorkItem;
    next?: WorkItem;
} {
    const sortedItems = [...workItems].sort((a, b) => {
        const aOrder = workCases[a.slug]?.order ?? 999;
        const bOrder = workCases[b.slug]?.order ?? 999;
        return aOrder - bOrder;
    });

    const currentIndex = sortedItems.findIndex((item) => item.slug === currentSlug);
    if (currentIndex === -1) {
        return {};
    }

    const previous = currentIndex > 0 ? sortedItems[currentIndex - 1] : undefined;
    const next = currentIndex < sortedItems.length - 1 ? sortedItems[currentIndex + 1] : undefined;

    return { previous, next };
}