import { Link, Outlet } from "react-router-dom";
import { Menu, LogOut, User } from "lucide-react";

import { useI18n } from "@/shared/hooks/useI18n";
import LanguageToggle from "@/shared/components/LanguageToggle";
import ThemeToggle from "@/shared/components/ThemeToggle";

import { ScrollArea } from "@/shared/components/ui/scroll-area";

import SidebarNav from "./SidebarNav";

export default function DashboardLayout() {
    const { t } = useI18n();

    return (
        <div className="min-h-screen bg-base-100" dir="rtl">
            {/* Sidebar */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-100 border-b border-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                                <Menu className="h-6 w-6" />
                            </label>
                        </div>
                        
                        <div className="flex-1">
                            <Link to="/" className="btn btn-ghost text-xl font-bold">
                                {t("appTitle") || "داشبورد"}
                            </Link>
                        </div>
                        
                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <User className="h-6 w-6" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>پروفایل</a></li>
                                    <li><a>تنظیمات</a></li>
                                    <li><a className="text-error"><LogOut className="h-4 w-4" /> خروج</a></li>
                                </ul>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <LanguageToggle />
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                    
                    {/* Page content */}
                    <div className="flex-1 p-4 md:p-6">
                        <Outlet />
                    </div>
                </div>
                
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <aside className="min-h-full w-80 bg-base-200 text-base-content">
                        {/* Sidebar header */}
                        <div className="p-4 border-b border-base-300">
                            <h2 className="text-xl font-bold">{t("appTitle") || "داشبورد"}</h2>
                        </div>
                        
                        {/* Sidebar navigation */}
                        <ScrollArea className="flex-1 p-4">
                            <SidebarNav />
                        </ScrollArea>
                    </aside>
                </div>
            </div>
        </div>
    );
}
