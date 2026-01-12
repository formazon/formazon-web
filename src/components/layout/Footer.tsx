// src/components/layout/Footer.tsx
import Link from "next/link";

const linkClassName = "label-medium hover:opacity-70 transition-opacity";

const socialLinks = [
    { href: "https://x.com/formazon", label: "X", external: true },
    { href: "https://www.linkedin.com/in/faridrafikov/", label: "LinkedIn", external: true },
    { href: "mailto:mail@formazon.com", label: "Email", external: false },
];

export function Footer() {
    return (
        <footer className="bg-surface">
            <div className="mx-auto flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-between gap-4 sm:gap-0 py-4 sm:py-0 gutter">
                {/* ЦЕНТР: Copyright */}
                <p className="label-medium text-center order-3 sm:order-2">
                    © {new Date().getFullYear()} formazon. All rights reserved.
                </p>

                {/* ГРУППА: Privacy Policy + Social Links */}
                <div className="flex items-center gap-8 sm:gap-6 order-2 sm:order-3">
                    <Link href="/privacy-policy" className={linkClassName}>
                        Privacy Policy
                    </Link>
                    {socialLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            {...(link.external && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                            className={linkClassName}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
