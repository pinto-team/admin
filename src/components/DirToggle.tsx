import { useDir } from "@/providers/DirProvider";

export default function DirToggle() {
    const { dir, toggle } = useDir();
    return (
        <button
            onClick={toggle}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted/50"
            title="Toggle direction"
        >
            <span>{dir === "rtl" ? "LTR" : "RTL"}</span>
        </button>
    );
}
