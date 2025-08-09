import { useI18n } from "@/shared/hooks/useI18n";

export default function LanguageToggle() {
    const { locale, setLocale } = useI18n();
    return (
        <button className="btn btn-outline btn-sm" onClick={() => setLocale(locale === "fa" ? "en" : "fa")}>
            {locale.toUpperCase()}
        </button>
    );
}
