import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "fa" | "en";
type Dict = Record<Locale, Record<string, string>>;

const messages: Dict = {
    fa: {
        title: "سلام دنیا — داشبورد",
        desc: "با تغییر زبان، متن‌ها و جهت صفحه عوض می‌شوند.",
        dark: "تاریک",
        light: "روشن",
        changeLanguage: "تغییر زبان",
        sampleCardTitle: "کارت نمونه",
        primary: "اولیه",
        secondary: "ثانویه",
        outline: "حاشیه‌دار",
    },
    en: {
        title: "Hello World — Dashboard",
        desc: "Switching the language updates texts and page direction.",
        dark: "Dark",
        light: "Light",
        changeLanguage: "Change language",
        sampleCardTitle: "Sample Card",
        primary: "Primary",
        secondary: "Secondary",
        outline: "Outline",
    },
};

type Ctx = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(() => (localStorage.getItem("locale") as Locale) || "fa");

    // ✅ هماهنگ‌سازی dir/lang با زبان
    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("lang", locale);
        root.setAttribute("dir", locale === "fa" ? "rtl" : "ltr");
        localStorage.setItem("locale", locale);
    }, [locale]);

    const t = useMemo(() => {
        const dict = messages[locale] || {};
        return (key: string) => dict[key] ?? key;
    }, [locale]);

    const setLocale = (l: Locale) => setLocaleState(l);

    return <I18nCtx.Provider value={{ locale, setLocale, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => {
    const ctx = useContext(I18nCtx);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
};
