import { Link, Outlet } from "react-router-dom";
import { useMemo, useState } from "react";
import { Menu } from "lucide-react";

import { useI18n } from "@/shared/hooks/useI18n";
import LanguageToggle from "@/shared/components/LanguageToggle";
import ThemeToggle from "@/shared/components/ThemeToggle";

import SidebarNav from "./SidebarNav";

export default function DashboardLayout() {
    const { t, locale } = useI18n();

    // For RTL (Farsi) we show drawer on the right using `drawer-end`
    const drawerOrientationClass = locale === "fa" ? "drawer-end" : "";

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className={`drawer lg:drawer-open ${drawerOrientationClass}`}>
            {/* --- Mobile / small screens drawer toggle --- */}
            <input
                id="app-drawer"
                type="checkbox"
                className="drawer-toggle"
                checked={mobileOpen}
                onChange={() => setMobileOpen((prev) => !prev)}
            />

            {/* Main content */}
            <div className="drawer-content flex flex-col min-h-dvh">
                {/* Header */}
                <header className="navbar bg-base-100/80 backdrop-blur sticky top-0 z-10 border-b">
                    {/* Mobile menu trigger */}
                    <div className="navbar-start lg:hidden">
                        <label
                            htmlFor="app-drawer"
                            className="btn btn-ghost btn-square"
                            aria-label="Open menu"
                        >
                            <Menu className="size-5" />
                        </label>
                    </div>

                    {/* Brand */}
                    <div className="navbar-center lg:navbar-start">
                        <Link to="/" className="font-bold text-lg">
                            {t("appTitle")}
                        </Link>
                    </div>

                    <div className="navbar-end flex gap-2">
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </header>

                {/* Routed pages */}
                <main className="p-4 md:p-6 grow min-w-0">
                    <Outlet />
                </main>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                {/* Clickable overlay for mobile */}
                <label
                    htmlFor="app-drawer"
                    className="drawer-overlay"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Sidebar content */}
                <aside className="w-72 h-full bg-base-200 border-e p-4 flex flex-col">
                    <h2 className="font-bold mb-4 hidden lg:block">{t("appTitle")}</h2>
                    <SidebarNav />
                </aside>
            </div>
        </div>
    );
}
