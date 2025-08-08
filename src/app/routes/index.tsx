import { createBrowserRouter } from "react-router-dom";
import AppRoot from "@/app/App";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRoot />,
        children: [
            { path: "login", element: <LoginPage /> },
            {
                element: <ProtectedRoute />,    // ⬅️ هرچی زیرش هست محافظت میشه
                children: [
                    { index: true, element: <DashboardPage /> },
                    // { path: "reports", element: <ReportsPage /> }, مثال
                ],
            },
        ],
    },
]);
