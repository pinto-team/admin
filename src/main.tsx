import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routes";

import ThemeProvider from "@/app/providers/ThemeProvider";
import I18nProvider from "@/app/providers/I18nProvider";

import AuthProvider from "@/app/providers/AuthProvider";
// ...
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <I18nProvider>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
            </I18nProvider>
        </ThemeProvider>
    </StrictMode>
);