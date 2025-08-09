import { useTheme } from "@/shared/hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className="btn btn-ghost btn-sm" onClick={toggleTheme}>
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}
