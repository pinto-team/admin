import { createContext } from "react";

export type Theme = "light" | "dark";

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

export const ThemeCtx = createContext<ThemeContextType | null>(null);