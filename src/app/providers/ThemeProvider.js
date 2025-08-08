import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeCtx } from "./theme-context";
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved)
            return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = useCallback(() => setTheme(t => (t === "dark" ? "light" : "dark")), []);
    const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);
    return _jsx(ThemeCtx.Provider, { value: value, children: children });
}
