import { createBrowserRouter } from "react-router-dom";
import AppRoot from "@/app/App";
import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

import OrdersPage from "@/features/orders/pages/OrdersPage";
import OrderDetailsPage from "@/features/orders/pages/OrderDetailsPage";
import ProductsPage from "@/features/store/pages/ProductsPage";
import ProductEditorPage from "@/features/store/pages/ProductEditorPage";
import InventoryPage from "@/features/store/pages/InventoryPage";
import CustomersPage from "@/features/users/pages/CustomersPage";
import AdminsPage from "@/features/users/pages/AdminsPage";
import CouriersPage from "@/features/couriers/pages/CouriersPage";
import CourierMissionsPage from "@/features/couriers/pages/CourierMissionsPage";
import FinanceSalesReportPage from "@/features/finance/pages/FinanceSalesReportPage";
import FinanceLogisticsCostsPage from "@/features/finance/pages/FinanceLogisticsCostsPage";
import ReportsOrdersByRangePage from "@/features/reports/pages/ReportsOrdersByRangePage";
import ReportsBestSellersPage from "@/features/reports/pages/ReportsBestSellersPage";
import ReportsCourierPerformancePage from "@/features/reports/pages/ReportsCourierPerformancePage";
import SettingsShippingRatesPage from "@/features/settings/pages/SettingsShippingRatesPage";

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

                    // Orders
                    { path: "orders", element: <OrdersPage /> },
                    { path: "orders/:id", element: <OrderDetailsPage /> },

                    // Store
                    { path: "store/products", element: <ProductsPage /> },
                    { path: "store/products/new", element: <ProductEditorPage /> },
                    { path: "store/products/:id", element: <ProductEditorPage /> },
                    { path: "store/inventory", element: <InventoryPage /> },

                    // Users
                    { path: "users/customers", element: <CustomersPage /> },
                    { path: "users/admins", element: <AdminsPage /> },

                    // Couriers
                    { path: "couriers", element: <CouriersPage /> },
                    { path: "couriers/missions", element: <CourierMissionsPage /> },

                    // Finance
                    { path: "finance/sales", element: <FinanceSalesReportPage /> },
                    { path: "finance/logistics-costs", element: <FinanceLogisticsCostsPage /> },

                    // Reports
                    { path: "reports/orders", element: <ReportsOrdersByRangePage /> },
                    { path: "reports/best-sellers", element: <ReportsBestSellersPage /> },
                    { path: "reports/courier-performance", element: <ReportsCourierPerformancePage /> },

                    // Settings
                    { path: "settings/shipping-rates", element: <SettingsShippingRatesPage /> },

                    { path: "*", element: <NotFound /> }, // ⬅️ 404
                ],
            },
        ],
    },
]);

