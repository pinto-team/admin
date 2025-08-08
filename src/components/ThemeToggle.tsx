import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import {useI18n} from "@/hooks/useI18n.ts"; // ✅ از hooks

export default function ThemeToggle() {
    const { theme, toggle } = useTheme();
    const { t } = useI18n();
    return (
        <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted/50"
            title={theme === "dark" ? t("light") : t("dark")}
        >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === "dark" ? t("light") : t("dark")}</span>
        </button>
    );
}
