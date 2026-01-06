/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "plex-sans": ["var(--font-plex-sans)", "Arial", "Helvetica", "sans-serif"],
                "plex-mono": ["var(--font-plex-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
