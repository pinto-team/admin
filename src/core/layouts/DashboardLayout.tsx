import { Link, Outlet, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { 
    Menu, 
    LogOut, 
    Sun, 
    Moon, 
    Globe,
    ShoppingCart,
    Store,
    Users,
    Truck,
    DollarSign,
    BarChart3,
    Settings,
    Home
} from "lucide-react";

import { useI18n } from "@/shared/hooks/useI18n";

export default function DashboardLayout() {
    const { t, locale, setLocale } = useI18n();
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const location = useLocation();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleLanguage = () => {
        setLocale(locale === 'fa' ? 'en' : 'fa');
    };

    const isRTL = locale === 'fa';

    const menuItems = [
        { 
            id: 'dashboard', 
            label: isRTL ? 'داشبورد' : 'Dashboard', 
            path: '/', 
            icon: <Home className="w-5 h-5" /> 
        },
        { 
            id: 'orders', 
            label: isRTL ? 'سفارشات' : 'Orders', 
            path: '/orders', 
            icon: <ShoppingCart className="w-5 h-5" /> 
        },
        { 
            id: 'shop', 
            label: isRTL ? 'فروشگاه' : 'Shop', 
            path: '/shop', 
            icon: <Store className="w-5 h-5" /> 
        },
        { 
            id: 'users', 
            label: isRTL ? 'کاربران' : 'Users', 
            path: '/users', 
            icon: <Users className="w-5 h-5" /> 
        },
        { 
            id: 'delivery', 
            label: isRTL ? 'پیک‌ها' : 'Delivery', 
            path: '/delivery', 
            icon: <Truck className="w-5 h-5" /> 
        },
        { 
            id: 'finance', 
            label: isRTL ? 'مالی' : 'Finance', 
            path: '/finance', 
            icon: <DollarSign className="w-5 h-5" /> 
        },
        { 
            id: 'reports', 
            label: isRTL ? 'گزارش‌ها' : 'Reports', 
            path: '/reports', 
            icon: <BarChart3 className="w-5 h-5" /> 
        },
        { 
            id: 'settings', 
            label: isRTL ? 'تنظیمات' : 'Settings', 
            path: '/settings', 
            icon: <Settings className="w-5 h-5" /> 
        },
    ];

    return (
        <div className={`drawer ${isRTL ? 'drawer-end' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-100 border-b border-base-300 shadow-sm">
                    <div className="navbar-start">
                        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost lg:hidden">
                            <Menu className="w-5 h-5" />
                        </label>
                        <Link to="/" className="btn btn-ghost text-xl font-bold">
                            {isRTL ? 'داشبورد مدیریت' : 'Management Dashboard'}
                        </Link>
                    </div>
                    
                    <div className="navbar-end gap-2">
                        {/* Language Toggle */}
                        <button 
                            onClick={toggleLanguage}
                            className="btn btn-ghost btn-circle"
                            title={isRTL ? 'تغییر زبان' : 'Change Language'}
                        >
                            <Globe className="w-5 h-5" />
                        </button>

                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme}
                            className="btn btn-ghost btn-circle"
                            title={isRTL ? 'تغییر تم' : 'Toggle Theme'}
                        >
                            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                        </button>

                        {/* User Menu */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                                    A
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
                                <li>
                                    <button className="flex items-center gap-2">
                                        <LogOut className="w-4 h-4" />
                                        {isRTL ? 'خروج' : 'Logout'}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-6 bg-base-200 min-h-0">
                    <Outlet />
                </main>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
                <aside className="min-h-full w-72 bg-base-100 border-e border-base-300">
                    {/* Sidebar Header */}
                    <div className="p-4 border-b border-base-300">
                        <h2 className="text-lg font-bold text-base-content">
                            {isRTL ? 'منوی اصلی' : 'Main Menu'}
                        </h2>
                    </div>

                    {/* Navigation Menu */}
                    <ul className="menu p-4 space-y-2">
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link 
                                    to={item.path}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                        location.pathname === item.path 
                                            ? 'bg-primary text-primary-content' 
                                            : 'hover:bg-base-200'
                                    }`}
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
}
