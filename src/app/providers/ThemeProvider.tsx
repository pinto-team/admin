import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeCtx, type Theme } from "./theme-context";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem("theme") as Theme | null;
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        // Remove existing theme classes
        root.classList.remove("light", "dark");
        // Add the current theme class
        root.classList.add(theme);
        // Set data-theme attribute for DaisyUI
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => setTheme(t => (t === "dark" ? "light" : "dark")), []);

    const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
