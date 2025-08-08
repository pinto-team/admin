import { createContext } from "react";

export type Theme = "light" | "dark";

export type ThemeCtxType = {
    theme: Theme;
    toggle: () => void;
    set: (t: Theme) => void;
};

export const ThemeCtx = createContext<ThemeCtxType | null>(null);
