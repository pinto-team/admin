import { createBrowserRouter } from "react-router-dom";
import AppRoot from "@/app/App";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import OrdersPage from "@/features/dashboard/pages/OrdersPage";
import ShopPage from "@/features/dashboard/pages/ShopPage";
import UsersPage from "@/features/dashboard/pages/UsersPage";
import DeliveryPage from "@/features/dashboard/pages/DeliveryPage";
import FinancePage from "@/features/dashboard/pages/FinancePage";
import ReportsPage from "@/features/dashboard/pages/ReportsPage";
import SettingsPage from "@/features/dashboard/pages/SettingsPage";
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
                    { path: "shop", element: <ShopPage /> },
                    { path: "users", element: <UsersPage /> },
                    { path: "delivery", element: <DeliveryPage /> },
                    { path: "finance", element: <FinancePage /> },
                    { path: "reports", element: <ReportsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                    { path: "*", element: <NotFound /> }, // ⬅️ 404
                ],
            },
        ],
    },
]);

