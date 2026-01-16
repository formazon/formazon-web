"use client";

import { createContext, useContext, useEffect, useState, useMemo, ReactNode } from "react";

type ConsentStatus = "pending" | "accepted" | "rejected" | null;

interface CookieConsentContextType {
    consentStatus: ConsentStatus;
    setConsent: (accepted: boolean) => void;
    hasConsented: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_STORAGE_KEY = "cookie-consent";

// Extend Window interface for TypeScript
declare global {
    interface Window {
        __COOKIE_CONSENT__?: string;
    }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
    // Initialize state from inline script or localStorage (synchronous, no waterfall)
    const getInitialConsent = (): ConsentStatus => {
        if (typeof window === "undefined") return null;
        
        // Try to get from inline script first (synchronous)
        const scriptConsent = window.__COOKIE_CONSENT__;
        if (scriptConsent === "accepted" || scriptConsent === "rejected") {
            return scriptConsent;
        }
        if (scriptConsent === "pending") {
            return "pending";
        }
        
        // Fallback to localStorage (shouldn't happen if inline script worked)
        try {
            const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
            if (stored === "accepted" || stored === "rejected") {
                return stored;
            }
        } catch (e) {
            // localStorage might not be available
        }
        
        return "pending";
    };

    const [consentStatus, setConsentStatus] = useState<ConsentStatus>(getInitialConsent);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Sync with localStorage in case it was updated elsewhere
        try {
            const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
            if (stored === "accepted" || stored === "rejected") {
                setConsentStatus(stored);
            }
        } catch (e) {
            // localStorage might not be available
        }
    }, []);

    const setConsent = (accepted: boolean) => {
        const status: ConsentStatus = accepted ? "accepted" : "rejected";
        setConsentStatus(status);
        try {
            localStorage.setItem(CONSENT_STORAGE_KEY, status);
            // Update window property for consistency
            if (typeof window !== "undefined") {
                window.__COOKIE_CONSENT__ = status;
            }
        } catch (e) {
            // localStorage might not be available
        }
    };

    // Use useMemo for derived state (rule: rerender-derived-state)
    const hasConsented = useMemo(
        () => consentStatus === "accepted",
        [consentStatus]
    );

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
