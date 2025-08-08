import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function App() {
    return (
        <div className="min-h-dvh p-6 flex items-start justify-center bg-background text-foreground">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-xl">ShadCN + Tailwind v4 تست</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>اگر استایل‌ها لود شده باشن، این کارت و دکمه‌ها باید ظاهر شیکی داشته باشن.</p>
                    <div className="flex gap-3">
                        <Button>دکمه عادی</Button>
                        <Button variant="secondary">ثانویه</Button>
                        <Button variant="outline">Outline</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
