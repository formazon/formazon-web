// src/app/about/page.tsx
import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
    title: "About — Formazon",
    description:
        "About Farid Rafikov — product founder and designer working across apps, AI tools, and robotics-driven systems.",
};

export default function AboutPage() {
    return (
        <PageShell>
            <AboutContent className="mb-16" variant="page" />
        </PageShell>
    );
}
