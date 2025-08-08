import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { DirProvider } from "@/providers/DirProvider";
import { I18nProvider } from "@/providers/I18nProvider"; // 👈

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <DirProvider>
                <I18nProvider>
                    <App />
                </I18nProvider>
            </DirProvider>
        </ThemeProvider>
    </StrictMode>
);
