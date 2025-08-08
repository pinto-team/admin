import { useI18n } from "@/shared/hooks/useI18n";
import { useState } from "react";
import { useLocation, useNavigate, type Location } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

type LocationState = { from?: string };

export default function LoginPage() {
    const { t } = useI18n();
    const navigate = useNavigate();
    const location = useLocation() as Location & { state?: LocationState };
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-dvh w-full grid place-items-center p-6">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">{t("login")}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        className="grid gap-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.currentTarget as HTMLFormElement;
                            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                            setLoading(true);
                            setTimeout(() => {
                                login(email);
                                const to = location.state?.from || "/";
                                navigate(to, { replace: true });
                            }, 500);
                        }}
                    >
                        <div className="grid gap-2">
                            <Label htmlFor="email">{t("email")}</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                dir="ltr"                // ← مهم برای ایمیل
                                inputMode="email"
                                className="font-mono text-sm"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">{t("password")}</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                dir="ltr"
                                className="text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? t("loading") : t("signIn")}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
