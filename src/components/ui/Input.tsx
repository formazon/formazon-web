// src/components/ui/Input.tsx
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

const baseInputStyles = "w-full rounded-lg border border-border-subtle bg-surface px-3 py-2 caption text-foreground placeholder:text-text-muted/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = "", ...props }, ref) => {
        return (
            <div className="space-y-1.5">
                <label htmlFor={props.id} className="label-medium text-text-muted">
                    {label}
                </label>
                <input
                    ref={ref}
                    className={`${baseInputStyles} ${className} ${error ? "border-red-500" : ""}`}
                    {...props}
                />
                {error && (
                    <p className="label text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, className = "", ...props }, ref) => {
        return (
            <div className="space-y-1.5">
                <label htmlFor={props.id} className="label-medium text-text-muted">
                    {label}
                </label>
                <textarea
                    ref={ref}
                    className={`${baseInputStyles} resize-none ${className} ${error ? "border-red-500" : ""}`}
                    {...props}
                />
                {error && (
                    <p className="label text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";
