import { Link, useLocation } from "react-router-dom";

export default function SidebarNav() {
    const { pathname } = useLocation();

    const Item = ({ to, children }: { to: string; children: React.ReactNode }) => {
        const active =
            (to === "/" && pathname === "/") ||
            (to !== "/" && pathname.startsWith(to));

        return (
            <li>
                <Link to={to} className={active ? "active" : undefined}>
                    {children}
                </Link>
            </li>
        );
    };

    return (
        <nav aria-label="Sidebar">
            <ul className="menu rounded-box p-0 w-full">
                <Item to="/">داشبورد</Item>
                <Item to="/orders">سفارشات</Item>
                <Item to="/store">فروشگاه</Item>
                <Item to="/users">کاربران</Item>
                <Item to="/riders">پیک‌ها</Item>
                <Item to="/financial">مالی</Item>
                <Item to="/reports">گزارش‌ها</Item>
                <Item to="/settings">تنظیمات</Item>
            </ul>
        </nav>
    );
}
