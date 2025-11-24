// src/app/page.tsx
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntroStrip } from "@/components/home/HomeIntroStrip";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { JournalPreviewSection } from "@/components/home/JournalPreviewSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
    title: "Formazon — Farid Rafikov",
    description: "Product founder & designer portfolio.",
};

export default function HomePage() {
    return (
        <PageShell>
            <HomeHero
                title="I build digital products, brands, and interfaces."
                subtitle="I’m Farid Rafikov — a product founder and designer working across apps, AI platforms, and robotics-driven systems."
                primaryCta={{ label: "See my work", href: "/work" }}
                secondaryCta={{ label: "Work with me", href: "/contact" }}
                highlightLine="Previously building: TRA Robotics, AppForType, Explyt, Fuelet, Jungle, Esprito"
            />
            <HomeIntroStrip />
            <SelectedWorkSection />
            <CapabilitiesSection />
            <AboutPreviewSection />
            <JournalPreviewSection />
            <ContactCtaSection />
        </PageShell>
    );
}
