import { createContext } from "react";

export type Locale = "fa" | "en";

export type I18nCtxType = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: string) => string;
};

export const I18nCtx = createContext<I18nCtxType | null>(null);
