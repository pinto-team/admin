import { useState } from "react";
import { 
    BarChart3, 
    PieChart, 
    TrendingUp, 
    Download,
    Calendar,
    Filter,
    Users,
    ShoppingCart,
    Truck,
    DollarSign
} from "lucide-react";

export default function ReportsPage() {
    const [selectedReport, setSelectedReport] = useState("sales");
    const [timeRange, setTimeRange] = useState("month");

    const reportTypes = [
        {
            id: "sales",
            title: "گزارش فروش",
            description: "تحلیل فروش بر اساس بازه زمانی",
            icon: <BarChart3 className="h-6 w-6" />,
            color: "primary"
        },
        {
            id: "products",
            title: "محصولات پرفروش",
            description: "محصولات با بیشترین فروش",
            icon: <ShoppingCart className="h-6 w-6" />,
            color: "secondary"
        },
        {
            id: "delivery",
            title: "عملکرد پیک‌ها",
            description: "تحلیل عملکرد و زمان تحویل",
            icon: <Truck className="h-6 w-6" />,
            color: "accent"
        },
        {
            id: "customers",
            title: "تحلیل مشتریان",
            description: "رفتار و ترجیحات مشتریان",
            icon: <Users className="h-6 w-6" />,
            color: "info"
        }
    ];

    const topProducts = [
        {
            name: "لپ‌تاپ اپل مک‌بوک پرو",
            sales: 45,
            revenue: "3,825,000,000 تومان",
            growth: "+12%"
        },
        {
            name: "کتاب برنامه‌نویسی React",
            sales: 120,
            revenue: "54,000,000 تومان",
            growth: "+8%"
        },
        {
            name: "کفش ورزشی نایک",
            sales: 78,
            revenue: "195,000,000 تومان",
            growth: "+15%"
        },
        {
            name: "موبایل سامسونگ گلکسی",
            sales: 32,
            revenue: "384,000,000 تومان",
            growth: "+5%"
        }
    ];

    const deliveryPerformance = [
        {
            driver: "احمد رضایی",
            missions: 45,
            completed: 42,
            avgTime: "25 دقیقه",
            rating: 4.8
        },
        {
            driver: "محمد کریمی",
            missions: 38,
            completed: 35,
            avgTime: "28 دقیقه",
            rating: 4.5
        },
        {
            driver: "علی نوری",
            missions: 52,
            completed: 50,
            avgTime: "22 دقیقه",
            rating: 4.9
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">گزارش‌ها</h1>
                    <p className="text-base-content/70">تحلیل و گزارش‌های جامع سیستم</p>
                </div>
                <div className="flex gap-2">
                    <select
                        className="select select-bordered"
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                    >
                        <option value="week">هفته جاری</option>
                        <option value="month">ماه جاری</option>
                        <option value="quarter">سه ماهه</option>
                        <option value="year">سال جاری</option>
                    </select>
                    <button className="btn btn-primary">
                        <Download className="h-4 w-4" />
                        دانلود گزارش
                    </button>
                </div>
            </div>

            {/* Report Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reportTypes.map((report) => (
                    <div
                        key={report.id}
                        className={`card bg-base-100 shadow-xl cursor-pointer transition-all ${
                            selectedReport === report.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedReport(report.id)}
                    >
                        <div className="card-body">
                            <div className="flex items-center gap-3">
                                <div className={`text-${report.color}`}>
                                    {report.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{report.title}</h3>
                                    <p className="text-sm text-base-content/70">{report.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Report Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart Section */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">
                                {reportTypes.find(r => r.id === selectedReport)?.icon}
                                {reportTypes.find(r => r.id === selectedReport)?.title}
                            </h2>
                            <div className="badge badge-primary">{timeRange}</div>
                        </div>
                        <div className="h-80 flex items-center justify-center bg-base-200 rounded-box">
                            <div className="text-center">
                                <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                <p className="text-base-content/70">
                                    نمودار {reportTypes.find(r => r.id === selectedReport)?.title} برای {timeRange}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Section */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">داده‌های {timeRange}</h2>
                        
                        {selectedReport === "products" && (
                            <div className="space-y-4">
                                {topProducts.map((product, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded-box">
                                        <div>
                                            <h4 className="font-semibold">{product.name}</h4>
                                            <p className="text-sm text-base-content/70">{product.sales} فروش</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-primary">{product.revenue}</p>
                                            <p className="text-sm text-success">{product.growth}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedReport === "delivery" && (
                            <div className="space-y-4">
                                {deliveryPerformance.map((driver, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-base-200 rounded-box">
                                        <div>
                                            <h4 className="font-semibold">{driver.driver}</h4>
                                            <p className="text-sm text-base-content/70">
                                                {driver.completed}/{driver.missions} ماموریت
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">{driver.avgTime}</p>
                                            <p className="text-sm text-primary">امتیاز: {driver.rating}/5</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedReport === "sales" && (
                            <div className="space-y-4">
                                <div className="stat bg-base-200 rounded-box">
                                    <div className="stat-title">فروش کل</div>
                                    <div className="stat-value text-primary">125,000,000 تومان</div>
                                    <div className="stat-desc text-success">+15% نسبت به دوره قبل</div>
                                </div>
                                <div className="stat bg-base-200 rounded-box">
                                    <div className="stat-title">تعداد سفارشات</div>
                                    <div className="stat-value text-secondary">1,247</div>
                                    <div className="stat-desc text-success">+8% نسبت به دوره قبل</div>
                                </div>
                            </div>
                        )}

                        {selectedReport === "customers" && (
                            <div className="space-y-4">
                                <div className="stat bg-base-200 rounded-box">
                                    <div className="stat-title">مشتریان جدید</div>
                                    <div className="stat-value text-info">156</div>
                                    <div className="stat-desc text-success">+12% نسبت به دوره قبل</div>
                                </div>
                                <div className="stat bg-base-200 rounded-box">
                                    <div className="stat-title">مشتریان فعال</div>
                                    <div className="stat-value text-accent">892</div>
                                    <div className="stat-desc text-success">+5% نسبت به دوره قبل</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}