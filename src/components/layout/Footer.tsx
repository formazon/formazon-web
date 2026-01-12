// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-surface">
            <div className="mx-auto flex flex-col sm:flex-row h-auto sm:h-16 items-center justify-between gap-4 sm:gap-0 py-4 sm:py-0 gutter">
                {/* ЛЕВАЯ ГРУППА: Privacy Policy */}
                <Link
                    href="/privacy-policy"
                    className="label-medium hover:opacity-70 transition-opacity order-1 sm:order-1"
                >
                    Privacy Policy
                </Link>

                {/* ЦЕНТР: Copyright */}
                <p className="label-medium text-center order-3 sm:order-2">
                    © {new Date().getFullYear()} Formazon. All rights reserved.
                </p>

                {/* ПРАВАЯ ГРУППА: Social Links */}
                <div className="flex items-center gap-6 order-2 sm:order-3">
                    <Link
                        href="https://x.com/formazon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-medium hover:opacity-70 transition-opacity"
                    >
                        X
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/faridrafikov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-medium hover:opacity-70 transition-opacity"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href="mailto:mail@formazon.com"
                        className="label-medium hover:opacity-70 transition-opacity"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
