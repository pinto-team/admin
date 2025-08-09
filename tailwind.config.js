/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#6366f1",
          secondary: "#f3f4f6", 
          accent: "#f59e0b",
          neutral: "#374151",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#6366f1",
          secondary: "#374151",
          accent: "#f59e0b", 
          neutral: "#1f2937",
          "base-100": "#111827",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        }
      }
    ],
    base: true,
    styled: true,
    utils: true,
    rtl: true, // Support for RTL languages like Persian
  },
}