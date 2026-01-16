// src/components/contact/ContactForm.tsx
"use client";

import { useState, FormEvent, useCallback, useRef } from "react";
import { contactContent } from "@/lib/content/contact";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
    const { form } = contactContent;
    const [status, setStatus] = useState<FormStatus>("idle");
    const abortControllerRef = useRef<AbortController | null>(null);

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Cancel previous request if any (client-swr-dedup rule)
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        
        const abortController = new AbortController();
        abortControllerRef.current = abortController;
        
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                signal: abortController.signal,
            });

            // Check if request was aborted
            if (abortController.signal.aborted) {
                return;
            }

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to send message');
            }

            setStatus("success");
            e.currentTarget.reset();
        } catch (error) {
            // Ignore abort errors
            if (error instanceof Error && error.name === 'AbortError') {
                return;
            }
            console.error('Form submission error:', error);
            setStatus("error");
        } finally {
            abortControllerRef.current = null;
        }
    }, []);

    if (status === "success") {
        return (
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6 caption text-green-500">
                <p className="caption-medium">{form.successMessage}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <Input
                required
                type="text"
                id="name"
                name="name"
                label={form.nameLabel}
                placeholder={form.namePlaceholder}
            />

            {/* Email Input */}
            <Input
                required
                type="email"
                id="email"
                name="email"
                label={form.emailLabel}
                placeholder={form.emailPlaceholder}
            />

            {/* Message Input */}
            <Textarea
                required
                id="message"
                name="message"
                label={form.messageLabel}
                placeholder={form.messagePlaceholder}
                rows={5}
            />

            {/* Submit Button */}
            <div className="pt-2">
                <Button type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? form.sendingButton : form.submitButton}
                </Button>
            </div>

            {status === "error" ? (
                <p className="label text-red-500">{form.errorMessage}</p>
            ) : null}
        </form>
    );
}