import { useI18n } from "@/providers/I18nProvider";

export default function LanguageToggle() {
    const { locale, setLocale, t } = useI18n();

    const toggle = () => setLocale(locale === "fa" ? "en" : "fa");

    return (
        <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted/50"
            title={t("changeLanguage")}
        >
            <span>{locale.toUpperCase()}</span>
        </button>
    );
}
