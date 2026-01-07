// src/components/contact/ContactForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { contactContent } from "@/lib/content/contact";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
    const { form } = contactContent;
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        // Имитация задержки сети
        // В реальности здесь будет fetch('/api/send', { ... }) или Formspree
        setTimeout(() => {
            // Успешная отправка
            setStatus("success");

            // Если нужно сбросить форму через время:
            // setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    }

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
            <div className="space-y-1.5">
                <label htmlFor="name" className="label-medium text-text-muted">
                    {form.nameLabel}
                </label>
                <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder={form.namePlaceholder}
                    className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 caption text-foreground placeholder:text-text-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
                <label htmlFor="email" className="label-medium text-text-muted">
                    {form.emailLabel}
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder={form.emailPlaceholder}
                    className="w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 caption text-foreground placeholder:text-text-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                />
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
                <label htmlFor="message" className="label-medium text-text-muted">
                    {form.messageLabel}
                </label>
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={form.messagePlaceholder}
                    className="w-full resize-none rounded-lg border border-border-subtle bg-surface px-3 py-2 caption text-foreground placeholder:text-text-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
                />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
                <Button type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? form.sendingButton : form.submitButton}
                </Button>
            </div>

            {status === "error" && (
                <p className="label text-red-500">{form.errorMessage}</p>
            )}
        </form>
    );
}