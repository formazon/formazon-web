// src/app/services/page.tsx
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesContent } from "@/components/services/ServicesContent";

export const metadata: Metadata = {
    title: "Services — Formazon",
    description:
        "Product, design, and branding services across apps, AI tools, and robotics-driven systems.",
};

export default function ServicesPage() {
    return (
        <PageShell>
            <ServicesContent variant="page" />
        </PageShell>
    );
}
