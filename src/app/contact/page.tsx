// src/app/contact/page.tsx
import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { PageShell } from "@/components/layout/PageShell";
import { contactContent } from "@/lib/content/contact";

export const metadata: Metadata = {
    title: contactContent.meta.title,
    description: contactContent.meta.description,
};

export default function ContactPage() {
    return (
        <PageShell>
            <ContactContent variant="page" />
        </PageShell>
    );
}
