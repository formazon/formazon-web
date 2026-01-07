// src/app/page.tsx
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { JournalPreviewSection } from "@/components/home/JournalPreviewSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesHomeSection } from "@/components/home/ServicesHomeSection";

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
            <SelectedWorkSection />
            <AboutPreviewSection />
            <ServicesHomeSection />
            <JournalPreviewSection />
            <ContactCtaSection />
        </PageShell>
    );
}
