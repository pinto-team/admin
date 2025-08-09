import { createBrowserRouter } from "react-router-dom";
import AppRoot from "@/app/App";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import OrdersPage from "@/features/orders/pages/OrdersPage";
import StorePage from "@/features/store/pages/StorePage";
import UsersPage from "@/features/users/pages/UsersPage";
import RidersPage from "@/features/riders/pages/RidersPage";
import FinancialPage from "@/features/financial/pages/FinancialPage";
import ReportsPage from "@/features/reports/pages/ReportsPage";
import SettingsPage from "@/features/settings/pages/SettingsPage";

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
                    { path: "store", element: <StorePage /> },
                    { path: "users", element: <UsersPage /> },
                    { path: "riders", element: <RidersPage /> },
                    { path: "financial", element: <FinancialPage /> },
                    { path: "reports", element: <ReportsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                    { path: "*", element: <NotFound /> }, // ⬅️ 404
                ],
            },
        ],
    },
]);

