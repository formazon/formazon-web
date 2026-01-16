// src/app/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { PageShell } from "@/components/layout/PageShell";

// Dynamic imports for components below the fold (bundle-dynamic-imports)
const SelectedWorkSection = dynamic(
    () => import("@/components/home/SelectedWorkSection").then(mod => ({ default: mod.SelectedWorkSection })),
    { ssr: true }
);

const AboutPreviewSection = dynamic(
    () => import("@/components/home/AboutPreviewSection").then(mod => ({ default: mod.AboutPreviewSection })),
    { ssr: true }
);

const ServicesHomeSection = dynamic(
    () => import("@/components/home/ServicesHomeSection").then(mod => ({ default: mod.ServicesHomeSection })),
    { ssr: true }
);

const JournalPreviewSection = dynamic(
    () => import("@/components/home/JournalPreviewSection").then(mod => ({ default: mod.JournalPreviewSection })),
    { ssr: true }
);

const ContactCtaSection = dynamic(
    () => import("@/components/home/ContactCtaSection").then(mod => ({ default: mod.ContactCtaSection })),
    { ssr: true }
);

export const metadata: Metadata = {
    title: "Formazon — Farid Rafikov",
    description: "Product founder & designer portfolio.",
};

export default function HomePage() {
    return (
        <PageShell>
            <HomeHero
                title="Design, Product, and Growth"
                subtitle={`I'm Farid Rafikov — a product founder and designer working across apps, AI platforms, and robotics-driven systems.

I design and build digital products that combine clarity, structure, and thoughtful engineering. My work ranges from creative mobile apps and enterprise AI tools to robotics interfaces, brand systems, and product strategy.`}
            />
            <Suspense fallback={<div className="mb-16" />}>
                <SelectedWorkSection />
            </Suspense>
            <Suspense fallback={<div className="mb-20" />}>
                <AboutPreviewSection />
            </Suspense>
            <Suspense fallback={<div className="mb-16" />}>
                <ServicesHomeSection />
            </Suspense>
            <Suspense fallback={<div />}>
                <JournalPreviewSection />
            </Suspense>
            <Suspense fallback={<div />}>
                <ContactCtaSection />
            </Suspense>
        </PageShell>
    );
}
