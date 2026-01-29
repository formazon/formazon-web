// src/app/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { PageShell } from "@/components/layout/PageShell";
import { QuadroDot } from "@/components/ui/QuadroDot";

// Dynamic imports for components below the fold (bundle-dynamic-imports)
const SelectedWorkSection = dynamic(
    () => import("@/components/home/SelectedWorkSection").then(mod => ({ default: mod.SelectedWorkSection })),
    { ssr: true }
);

const AboutContent = dynamic(
    () => import("@/components/about/AboutContent").then(mod => ({ default: mod.AboutContent })),
    { ssr: true }
);

const ServicesContent = dynamic(
    () => import("@/components/services/ServicesContent").then(mod => ({ default: mod.ServicesContent })),
    { ssr: true }
);

const JournalPreviewSection = dynamic(
    () => import("@/components/home/JournalPreviewSection").then(mod => ({ default: mod.JournalPreviewSection })),
    { ssr: true }
);

const ContactContent = dynamic(
    () => import("@/components/contact/ContactContent").then(mod => ({ default: mod.ContactContent })),
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
            <Suspense fallback={<div className="mb-16" />}>
                <QuadroDot />
                <AboutContent className="mb-16" variant="preview" />
            </Suspense>
            <Suspense fallback={<div className="mb-16" />}>
                <QuadroDot />
                <ServicesContent variant="preview" />
            </Suspense>
            <Suspense fallback={<div />}>
                <JournalPreviewSection />
            </Suspense>
            <Suspense fallback={<div />}>
                <QuadroDot />
                <ContactContent variant="preview" className="mt-16 mb-16" />
            </Suspense>
        </PageShell>
    );
}
