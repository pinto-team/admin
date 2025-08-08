import { useState } from "react";
import { useLocation, useNavigate, type Location } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import LoginForm from "../components/LoginForm";
import { useAuth } from "@/app/providers/AuthProvider";

type LocationState = { from?: string };

export default function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation() as Location & { state?: LocationState };
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-dvh w-full grid place-items-center p-6">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm
                        loading={loading}
                        onSubmit={({ email }) => {
                            setLoading(true);
                            setTimeout(() => {
                                login(email);
                                const to = location.state?.from || "/";
                                navigate(to, { replace: true });
                            }, 500);
                        }}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
