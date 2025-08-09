import { 
    BarChart3, 
    TrendingUp, 
    TrendingDown, 
    Users2, 
    ShoppingBag, 
    Truck, 
    DollarSign,
    Package,
    Clock,
    CheckCircle,
    XCircle
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">داشبورد</h1>
                    <p className="text-base-content/70 mt-1">مرور سریع وضعیت امروز</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-primary">
                        <BarChart3 className="w-4 h-4" />
                        ساخت گزارش
                    </button>
                    <button className="btn btn-outline">
                        تنظیمات
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <ShoppingBag className="w-8 h-8" />
                        </div>
                        <div className="stat-title">سفارشات امروز</div>
                        <div className="stat-value text-primary">89</div>
                        <div className="stat-desc text-success">
                            <TrendingUp className="w-4 h-4 inline" /> ↗︎ 15% (نسبت به دیروز)
                        </div>
                    </div>
                </div>

                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div className="stat-title">فروش امروز</div>
                        <div className="stat-value text-secondary">4.2M</div>
                        <div className="stat-desc">تومان</div>
                    </div>
                </div>

                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <Users2 className="w-8 h-8" />
                        </div>
                        <div className="stat-title">کاربران فعال</div>
                        <div className="stat-value text-accent">1,248</div>
                        <div className="stat-desc text-success">
                            <TrendingUp className="w-4 h-4 inline" /> ↗︎ 5% این هفته
                        </div>
                    </div>
                </div>

                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-warning">
                            <Truck className="w-8 h-4" />
                        </div>
                        <div className="stat-title">پیک‌های آنلاین</div>
                        <div className="stat-value text-warning">12</div>
                        <div className="stat-desc">از 15 پیک</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Charts */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <div className="flex items-center justify-between">
                                <h2 className="card-title">
                                    <BarChart3 className="w-5 h-5" />
                                    عملکرد هفتگی
                                </h2>
                                <div className="badge badge-primary">Real-time</div>
                            </div>
                            <div className="h-64 bg-base-200 rounded-lg flex items-center justify-center">
                                <p className="text-base-content/60">اینجا چارت میاد</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">فعالیت اخیر</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="avatar placeholder">
                                    <div className="w-8 h-8 bg-success text-success-content rounded-full">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">سفارش #4392 تحویل شد</p>
                                    <p className="text-sm text-base-content/60">2 دقیقه پیش</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="avatar placeholder">
                                    <div className="w-8 h-8 bg-info text-info-content rounded-full">
                                        <Package className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">سفارش جدید دریافت شد</p>
                                    <p className="text-sm text-base-content/60">5 دقیقه پیش</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="avatar placeholder">
                                    <div className="w-8 h-8 bg-warning text-warning-content rounded-full">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">تاخیر در تحویل #4385</p>
                                    <p className="text-sm text-base-content/60">10 دقیقه پیش</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">در حال آماده‌سازی</h3>
                                <p className="text-2xl font-bold text-warning">23</p>
                            </div>
                            <Clock className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">در حال ارسال</h3>
                                <p className="text-2xl font-bold text-info">15</p>
                            </div>
                            <Truck className="w-8 h-8 text-info" />
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">تحویل شده</h3>
                                <p className="text-2xl font-bold text-success">142</p>
                            </div>
                            <CheckCircle className="w-8 h-8 text-success" />
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">لغو شده</h3>
                                <p className="text-2xl font-bold text-error">3</p>
                            </div>
                            <XCircle className="w-8 h-8 text-error" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">اقدامات سریع</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <button className="btn btn-primary">افزودن محصول جدید</button>
                        <button className="btn btn-secondary">مدیریت سفارشات</button>
                        <button className="btn btn-accent">ایجاد گزارش</button>
                        <button className="btn btn-outline">تنظیمات فروشگاه</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
