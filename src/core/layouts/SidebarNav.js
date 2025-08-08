import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
export default function SidebarNav() {
    const { pathname } = useLocation();
    const Item = ({ to, children, }) => {
        const active = (to === "/" && pathname === "/") ||
            (to !== "/" && pathname.startsWith(to));
        return (_jsx(Button, { asChild: true, variant: active ? "secondary" : "ghost", className: "justify-start", children: _jsx(Link, { to: to, children: children }) }));
    };
    return (_jsxs("nav", { className: "grid gap-1", children: [_jsx(Item, { to: "/", children: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F" }), _jsx(Item, { to: "/login", children: "\u0648\u0631\u0648\u062F" })] }));
}
