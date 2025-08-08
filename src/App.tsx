import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/hooks/useI18n";

export default function App() {
    const { t, locale } = useI18n();

    return (
        <div className="min-h-dvh p-6 space-y-6">
            <div className="flex gap-3">
                <ThemeToggle />
                <LanguageToggle />
            </div>

            <div className="rounded-lg border p-6 space-y-2">
                <h1 className="text-2xl font-bold">{t("title")}</h1>
                <p className="text-sm text-muted-foreground">{t("desc")}</p>
                <p className="text-xs opacity-70">({locale.toUpperCase()})</p>
            </div>

            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>{t("sampleCardTitle")}</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3">
                    <Button>{t("primary")}</Button>
                    <Button variant="secondary">{t("secondary")}</Button>
                    <Button variant="outline">{t("outline")}</Button>
                </CardContent>
            </Card>
        </div>
    );
}
