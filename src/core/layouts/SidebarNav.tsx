import { Link, useLocation } from "react-router-dom";
import { 
    Home, 
    ShoppingCart, 
    Package, 
    Users, 
    Truck, 
    DollarSign, 
    BarChart3, 
    Settings,
    FileText,
    UserPlus,
    Store,
    ClipboardList,
    CreditCard,
    TrendingUp,
    Activity
} from "lucide-react";

export default function SidebarNav() {
    const { pathname } = useLocation();

    const navigationItems = [
        {
            title: "داشبورد",
            icon: <Home className="h-5 w-5" />,
            href: "/",
            badge: null
        },
        {
            title: "سفارشات",
            icon: <ShoppingCart className="h-5 w-5" />,
            href: "/orders",
            badge: "12",
            children: [
                { title: "لیست سفارشات", href: "/orders" },
                { title: "جزئیات سفارش", href: "/orders/details" }
            ]
        },
        {
            title: "فروشگاه",
            icon: <Store className="h-5 w-5" />,
            href: "/products",
            badge: null,
            children: [
                { title: "لیست محصولات", href: "/products" },
                { title: "افزودن/ویرایش محصول", href: "/products/manage" },
                { title: "موجودی و انبارگردانی", href: "/products/inventory" }
            ]
        },
        {
            title: "کاربران",
            icon: <Users className="h-5 w-5" />,
            href: "/users",
            badge: null,
            children: [
                { title: "مشتریان", href: "/users/customers" },
                { title: "ادمین‌ها", href: "/users/admins" }
            ]
        },
        {
            title: "پیک‌ها",
            icon: <Truck className="h-5 w-5" />,
            href: "/delivery",
            badge: "3",
            children: [
                { title: "لیست پیک‌ها", href: "/delivery/drivers" },
                { title: "ماموریت‌ها و تحویل‌ها", href: "/delivery/missions" }
            ]
        },
        {
            title: "مالی",
            icon: <DollarSign className="h-5 w-5" />,
            href: "/finance",
            badge: null,
            children: [
                { title: "گزارش فروش روزانه", href: "/finance/sales" },
                { title: "هزینه‌های لجستیک", href: "/finance/logistics" }
            ]
        },
        {
            title: "گزارش‌ها",
            icon: <BarChart3 className="h-5 w-5" />,
            href: "/reports",
            badge: null,
            children: [
                { title: "سفارشات بر اساس بازه زمانی", href: "/reports/orders" },
                { title: "محصولات پرفروش", href: "/reports/products" },
                { title: "عملکرد پیک‌ها", href: "/reports/delivery" }
            ]
        },
        {
            title: "تنظیمات",
            icon: <Settings className="h-5 w-5" />,
            href: "/settings",
            badge: null,
            children: [
                { title: "نرخ ارسال", href: "/settings/shipping-rates" },
                { title: "تنظیمات عمومی", href: "/settings/general" }
            ]
        }
    ];

    const isActive = (href: string) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname.startsWith(href)) return true;
        return false;
    };

    return (
        <ul className="menu menu-lg bg-base-200 w-full">
            {navigationItems.map((item) => (
                <li key={item.href}>
                    <Link 
                        to={item.href}
                        className={`${isActive(item.href) ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                        {item.badge && (
                            <div className="badge badge-primary badge-sm">{item.badge}</div>
                        )}
                    </Link>
                    
                    {item.children && (
                        <ul className="menu menu-sm bg-base-200">
                            {item.children.map((child) => (
                                <li key={child.href}>
                                    <Link 
                                        to={child.href}
                                        className={`${isActive(child.href) ? 'active' : ''}`}
                                    >
                                        {child.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}
