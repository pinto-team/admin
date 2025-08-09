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
        root.classList.toggle("dark", theme === "dark");
        // DaisyUI theme name mapping (use "business" for dark, "light" for light by default)
        root.setAttribute("data-theme", theme === "dark" ? "business" : "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => setTheme(t => (t === "dark" ? "light" : "dark")), []);

    const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}
