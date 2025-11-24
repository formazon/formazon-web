// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Formazon — Farid Rafikov",
    description: "Personal portfolio of Farid Rafikov: product, design, and AI work.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-black text-zinc-100 antialiased">
        {/* Весь layout сайта */}
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Основной контент страницы */}
            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
        </body>
        </html>
    );
}
