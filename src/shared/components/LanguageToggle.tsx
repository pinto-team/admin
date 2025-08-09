import { useI18n } from "@/shared/hooks/useI18n";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
    const { locale, setLocale } = useI18n();
    return (
        <button 
            className="btn btn-ghost btn-circle" 
            onClick={() => setLocale(locale === "fa" ? "en" : "fa")}
            aria-label="Toggle language"
        >
            <Globe className="h-4 w-4" />
        </button>
    );
}
