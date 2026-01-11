"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ConsentStatus = "pending" | "accepted" | "rejected" | null;

interface CookieConsentContextType {
    consentStatus: ConsentStatus;
    setConsent: (accepted: boolean) => void;
    hasConsented: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_STORAGE_KEY = "cookie-consent";

export function CookieConsentProvider({ children }: { children: ReactNode }) {
    const [consentStatus, setConsentStatus] = useState<ConsentStatus>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check localStorage for existing consent
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (stored === "accepted" || stored === "rejected") {
            setConsentStatus(stored);
        } else {
            setConsentStatus("pending");
        }
    }, []);

    const setConsent = (accepted: boolean) => {
        const status: ConsentStatus = accepted ? "accepted" : "rejected";
        setConsentStatus(status);
        localStorage.setItem(CONSENT_STORAGE_KEY, status);
    };

    const hasConsented = consentStatus === "accepted";

    // Always provide context, but use safe defaults before mounting
    const contextValue = {
        consentStatus: mounted ? consentStatus : null,
        setConsent,
        hasConsented: mounted ? hasConsented : false,
    };

    return (
        <CookieConsentContext.Provider value={contextValue}>
            {children}
        </CookieConsentContext.Provider>
    );
}

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }
    return context;
}
