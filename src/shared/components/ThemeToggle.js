import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@/shared/components/ui/button";
import { useTheme } from "@/shared/hooks/useTheme";
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (_jsx(Button, { variant: "outline", size: "sm", onClick: toggleTheme, children: theme === "dark" ? "🌙" : "☀️" }));
}
