import { BarChart3, TrendingUp, Download, Calendar, Filter } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">گزارش‌ها</h1>
                    <p className="text-base-content/70 mt-1">تجزیه و تحلیل عملکرد</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-outline">
                        <Filter className="w-4 h-4" />
                        فیلتر
                    </button>
                    <button className="btn btn-primary">
                        <Download className="w-4 h-4" />
                        دانلود
                    </button>
                </div>
            </div>

            {/* Date Range Selector */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">از تاریخ</span>
                            </label>
                            <input type="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">تا تاریخ</span>
                            </label>
                            <input type="date" className="input input-bordered" />
                        </div>
                        <button className="btn btn-primary mt-8">اعمال فیلتر</button>
                    </div>
                </div>
            </div>

            {/* Report Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Sales Report */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">
                            <BarChart3 className="w-5 h-5" />
                            گزارش فروش
                        </h2>
                        <div className="space-y-4">
                            <div className="stat">
                                <div className="stat-title">کل فروش این ماه</div>
                                <div className="stat-value text-primary">45.2M</div>
                                <div className="stat-desc text-success">15% افزایش</div>
                            </div>
                            <div className="h-32 bg-base-200 rounded-lg flex items-center justify-center">
                                <p className="text-base-content/60">نمودار فروش</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Products */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">محصولات پرفروش</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>پیتزا مارگاریتا</span>
                                <div className="badge badge-primary">142 فروش</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>برگر چیکن</span>
                                <div className="badge badge-secondary">98 فروش</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>کباب کوبیده</span>
                                <div className="badge badge-accent">87 فروش</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Performance */}
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">عملکرد پیک‌ها</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span>میانگین زمان تحویل</span>
                                <span className="font-bold">28 دقیقه</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>تحویل‌های موفق</span>
                                <span className="font-bold text-success">96.5%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>رضایت مشتریان</span>
                                <span className="font-bold text-info">4.6/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">روند فروش ماهانه</h2>
                        <div className="h-64 bg-base-200 rounded-lg flex items-center justify-center">
                            <p className="text-base-content/60">نمودار خطی فروش</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">توزیع سفارشات</h2>
                        <div className="h-64 bg-base-200 rounded-lg flex items-center justify-center">
                            <p className="text-base-content/60">نمودار دایره‌ای</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}