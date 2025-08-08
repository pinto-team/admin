export type Locale = "fa" | "en";

export const messages: Record<Locale, Record<string, string>> = {
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
