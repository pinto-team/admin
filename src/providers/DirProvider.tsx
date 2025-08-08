import { createContext, useContext, useEffect, useState } from "react";

type Dir = "ltr" | "rtl";
type Ctx = { dir: Dir; toggle: () => void; set: (d: Dir) => void };
const DirCtx = createContext<Ctx | null>(null);

export function DirProvider({ children }: { children: React.ReactNode }) {
    const [dir, setDir] = useState<Dir>(() => (localStorage.getItem("dir") as Dir) || "ltr");

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("dir", dir);
        localStorage.setItem("dir", dir);
    }, [dir]);

    return (
        <DirCtx.Provider value={{ dir, toggle: () => setDir(d => d === "rtl" ? "ltr" : "rtl"), set: setDir }}>
            {children}
        </DirCtx.Provider>
    );
}

export const useDir = () => {
    const ctx = useContext(DirCtx);
    if (!ctx) throw new Error("useDir must be used within DirProvider");
    return ctx;
};
