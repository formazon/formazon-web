// src/lib/content/contact.ts

export const contactContent = {
    meta: {
        title: "Contact — Formazon",
        description: "Get in touch about product, design, AI tools, or potential collaboration.",
    },
    intro: {
        label: "Contact",
        title: "Let’s talk about your product, idea, or project.",
        description:
            "Whether you want to shape a new product, streamline an existing one, align your narrative, or discuss collaboration — feel free to send a short message with context. I reply to most emails within a day.",
    },
    direct: {
        label: "Email",
        email: "hello@formazon.com",
        description: "The best way to start a conversation — especially if you already have context, documents, or links.",
    },
    socials: {
        label: "Other channels",
        links: [
            { label: "Telegram", href: "https://t.me/yourtelegram" },
            { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
            { label: "View work", href: "/work" },
        ],
    },
    form: {
        nameLabel: "Name",
        namePlaceholder: "Jane Doe",
        emailLabel: "Email",
        emailPlaceholder: "jane@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project...",
        submitButton: "Send message",
        sendingButton: "Sending...",
        successMessage: "Thanks for reaching out! I'll get back to you shortly.",
        errorMessage: "Something went wrong. Please try again or email me directly.",
    },
    guidelines: {
        label: "What to include",
        intro: "To make things faster, you can include:",
        points: [
            "A short description of the product or idea",
            "Your current challenges or what you want to improve",
            "Any links: website, Figma, Notion, docs",
            "The timeline or constraints (if known)",
        ],
        privacy: "Everything stays confidential — I don’t share any project details.",
    },
};