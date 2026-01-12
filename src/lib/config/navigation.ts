// src/lib/config/navigation.ts

export type NavItem = {
    href: string;
    label: string;
    feature?: string;
};

export type SocialLink = {
    href: string;
    label: string;
    external: boolean;
};

export const navItems: NavItem[] = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/journal", label: "Journal", feature: "journal" },
    { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
    { href: "https://x.com/formazon", label: "X", external: true },
    { href: "https://www.linkedin.com/in/faridrafikov/", label: "LinkedIn", external: true },
    { href: "mailto:mail@formazon.com", label: "Email", external: false },
];
