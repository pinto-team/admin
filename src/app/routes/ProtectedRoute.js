import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
export default function ProtectedRoute() {
    const { isAuthenticated } = useAuth();
    const loc = useLocation();
    if (!isAuthenticated) {
        const from = loc.pathname + (loc.search || "");
        return _jsx(Navigate, { to: "/login", replace: true, state: { from } });
    }
    return _jsx(Outlet, {});
}
