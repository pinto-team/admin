import { createBrowserRouter } from "react-router-dom";
import AppRoot from "@/app/App";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import OrdersPage from "@/features/orders/pages/OrdersPage";
import ProductsPage from "@/features/products/pages/ProductsPage";
import UsersPage from "@/features/users/pages/UsersPage";
import DriversPage from "@/features/delivery/pages/DriversPage";
import FinancePage from "@/features/finance/pages/FinancePage";
import ReportsPage from "@/features/reports/pages/ReportsPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRoot />,
        children: [
            { path: "login", element: <LoginPage /> },
            {
                element: <ProtectedRoute />,
                children: [
                    { index: true, element: <DashboardPage /> },
                    { path: "orders", element: <OrdersPage /> },
                    { path: "products", element: <ProductsPage /> },
                    { path: "users", element: <UsersPage /> },
                    { path: "delivery", element: <DriversPage /> },
                    { path: "finance", element: <FinancePage /> },
                    { path: "reports", element: <ReportsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                    { path: "*", element: <NotFound /> }, // ⬅️ 404
                ],
            },
        ],
    },
]);

