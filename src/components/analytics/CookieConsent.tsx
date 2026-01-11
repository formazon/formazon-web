"use client";

import { useCookieConsent } from "@/components/providers/CookieConsentProvider";
import Link from "next/link";
import { cookieConsentEnabled } from "@/lib/config/features";

export function CookieConsent() {
    const { consentStatus, setConsent } = useCookieConsent();

    if (!cookieConsentEnabled || consentStatus !== "pending") {
        return null;
    }

    return (
        <div className="fixed bottom-1 right-1 z-50 max-w-sm rounded-sm border border-border-subtle/50 bg-foreground/80 backdrop-blur dark:bg-background/80 p-4 shadow-lg">
            <div className="flex flex-col gap-4">
                <p className="label text-background dark:text-foreground">
                    We use cookies and similar technologies to analyze site usage and improve your experience. 
                    By clicking "Accept", you consent to our use of cookies.{" "}
                    <Link 
                        href="/privacy-policy" 
                        className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                        Learn more
                    </Link>
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={() => setConsent(false)}
                        className="flex-1 inline-flex items-center justify-center rounded-sm px-4 py-2 label-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-background/20 dark:focus:ring-foreground/20 disabled:opacity-50 disabled:pointer-events-none border border-background/30 dark:border-foreground/30 text-background/80 dark:text-foreground/80 hover:bg-background/10 dark:hover:bg-foreground/10 hover:text-background dark:hover:text-foreground"
                    >
                        Reject
                    </button>
                    <button
                        onClick={() => setConsent(true)}
                        className="flex-1 inline-flex items-center justify-center rounded-sm px-4 py-2 label-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-background/20 dark:focus:ring-foreground/20 disabled:opacity-50 disabled:pointer-events-none bg-background dark:bg-foreground text-foreground dark:text-background hover:opacity-90"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
