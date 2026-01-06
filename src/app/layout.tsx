// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const ibmPlexSans = IBM_Plex_Sans({
    weight: ["400", "500"],
    subsets: ["latin", "cyrillic"],
    variable: "--font-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["400", "500"],
    subsets: ["latin", "cyrillic"],
    variable: "--font-plex-mono",
});

export const metadata: Metadata = {
    title: "Formazon — Farid Rafikov",
    description: "Personal portfolio of Farid Rafikov: product, design, and AI work.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        {/* Используем токены:
            bg-background — белый в светлой, черный в темной
            text-foreground — черный в светлой, белый в темной
        */}
        <body className="bg-background text-foreground antialiased font-plex-sans">
        <ThemeProvider>
            <div className="min-h-screen flex flex-col">
                <Header />

                {/* Основной контент страницы */}
                <main className="flex-1 pt-[88px] pb-20">
                    {children}
                </main>

                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}