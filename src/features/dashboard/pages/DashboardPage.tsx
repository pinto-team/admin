import { 
    BarChart3, 
    UserPlus, 
    FileText, 
    Settings, 
    TrendingUp, 
    Users2, 
    ShoppingBag, 
    Ticket,
    DollarSign,
    Package,
    Truck,
    Activity
} from "lucide-react";

export default function DashboardPage() {
    const stats = [
        {
            title: "بازدیدها",
            value: "12,450",
            change: "+12%",
            changeType: "positive",
            icon: <TrendingUp className="h-6 w-6" />,
            color: "primary"
        },
        {
            title: "کاربران جدید",
            value: "1,248",
            change: "+5%",
            changeType: "positive",
            icon: <Users2 className="h-6 w-6" />,
            color: "secondary"
        },
        {
            title: "سفارش‌ها",
            value: "328",
            change: "-3%",
            changeType: "negative",
            icon: <ShoppingBag className="h-6 w-6" />,
            color: "accent"
        },
        {
            title: "تیکت‌ها",
            value: "57",
            change: "+2%",
            changeType: "positive",
            icon: <Ticket className="h-6 w-6" />,
            color: "info"
        }
    ];

    const recentActivities = [
        {
            title: "ثبت‌نام کاربر جدید",
            time: "2 دقیقه پیش",
            type: "user"
        },
        {
            title: "سفارش #4392 ثبت شد",
            time: "10 دقیقه پیش",
            type: "order"
        },
        {
            title: "تیکت #981 پاسخ داده شد",
            time: "1 ساعت پیش",
            type: "ticket"
        },
        {
            title: "پیک جدید اضافه شد",
            time: "2 ساعت پیش",
            type: "delivery"
        }
    ];

    const quickActions = [
        {
            title: "ایجاد گزارش",
            icon: <FileText className="h-4 w-4" />,
            color: "btn-primary"
        },
        {
            title: "افزودن کاربر",
            icon: <UserPlus className="h-4 w-4" />,
            color: "btn-secondary"
        },
        {
            title: "تنظیمات",
            icon: <Settings className="h-4 w-4" />,
            color: "btn-accent"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">داشبورد</h1>
                    <p className="text-base-content/70">مرور سریع وضعیت امروز</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-primary">
                        <FileText className="h-4 w-4" />
                        ساخت گزارش
                    </button>
                    <button className="btn btn-outline">
                        <Settings className="h-4 w-4" />
                        تنظیمات
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="stat bg-base-200 rounded-box shadow">
                        <div className="stat-figure text-primary">
                            {stat.icon}
                        </div>
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value text-primary">{stat.value}</div>
                        <div className={`stat-desc ${stat.changeType === 'positive' ? 'text-success' : 'text-error'}`}>
                            {stat.change} نسبت به هفته قبل
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart Card */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center justify-between">
                                <h2 className="card-title">
                                    <BarChart3 className="h-5 w-5" />
                                    عملکرد هفتگی
                                </h2>
                                <div className="badge badge-primary">Real-time</div>
                            </div>
                            <div className="h-64 flex items-center justify-center bg-base-200 rounded-box">
                                <div className="text-center">
                                    <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p className="text-base-content/70">نمودار عملکرد هفتگی</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">فعالیت اخیر</h2>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="avatar placeholder">
                                        <div className="bg-primary text-primary-content rounded-full w-8">
                                            <span className="text-xs">
                                                {activity.type === 'user' && <Users2 className="h-3 w-3" />}
                                                {activity.type === 'order' && <ShoppingBag className="h-3 w-3" />}
                                                {activity.type === 'ticket' && <Ticket className="h-3 w-3" />}
                                                {activity.type === 'delivery' && <Truck className="h-3 w-3" />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">{activity.title}</p>
                                        <p className="text-sm text-base-content/70">{activity.time}</p>
                                    </div>
                                    <div className="badge badge-primary badge-sm">جدید</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">اقدامات سریع</h2>
                    <div className="flex flex-wrap gap-2">
                        {quickActions.map((action, index) => (
                            <button key={index} className={`btn ${action.color}`}>
                                {action.icon}
                                {action.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
