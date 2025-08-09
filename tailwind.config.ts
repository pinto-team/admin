import type { Config } from "tailwindcss";

// Tailwind v4 allows completely optional configuration, but we need to extend it to
// enable daisyUI and point to all of our template files.
// This config also enables RTL support for Persian UI and keeps dark-mode handling via the `class` strategy.
const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    plugins: [require("daisyui")],
    daisyui: {
        rtl: true,
        themes: [
            "light",
            "dark",
            // You can include any additional DaisyUI preset themes here or define custom themes.
        ],
    },
};

export default config;