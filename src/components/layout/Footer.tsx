// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-surface">
            <div className="mx-auto flex flex-col gap-4 gutter py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">

                {/* Copyright */}
                <p className="text-text-muted">
                    © {new Date().getFullYear()} Formazon. All rights reserved.
                </p>

                {/* Links */}
                <div className="flex gap-4">
                    <Link
                        href="/contact"
                        className="transition-colors hover:text-foreground"
                    >
                        Contact
                    </Link>

                    <a
                        href="mailto:you@example.com"
                        className="transition-colors hover:text-foreground"
                    >
                        Email
                    </a>
                      <a
                        href="https://linkedin.com/..."
                        className="transition-colors hover:text-foreground"
                      >
                        LinkedIn
                      </a>
                </div>
            </div>
        </footer>
    );
}
