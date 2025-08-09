import { createBrowserRouter, Navigate } from "react-router-dom";
import AppRoot from "@/app/App";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import { DashboardLayout } from "@/features/dashboard/components";
import { OrdersPage, OrderDetailPage } from "@/features/orders";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRoot />,
        children: [
            { index: true, element: <Navigate to="/dashboard" replace /> },
            { path: "login", element: <LoginPage /> },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardLayout />,
                        children: [
                            { index: true, element: <DashboardPage /> },
                            { path: "orders", element: <OrdersPage /> },
                            { path: "orders/:id", element: <OrderDetailPage /> },
                            // سایر مسیرها در آینده اضافه خواهند شد
                            { path: "*", element: <NotFound /> },
                        ],
                    },
                ],
            },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

