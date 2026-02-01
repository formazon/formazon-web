/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                nav: "960px",
                belowNav: { max: "959px" },
            },
            fontFamily: {
                "plex-sans": ["var(--font-plex-sans)", "Arial", "Helvetica", "sans-serif"],
                "plex-mono": ["var(--font-plex-mono)", "monospace"],
            },
            colors: {
                black: "var(--color-black)",
                "black-20": "var(--color-black-20)",
                "black-40": "var(--color-black-40)",
            },
        },
    },
    plugins: [],
};
