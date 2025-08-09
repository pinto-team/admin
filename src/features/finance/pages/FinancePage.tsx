import { useState } from "react";
import { 
    DollarSign, 
    TrendingUp, 
    TrendingDown,
    BarChart3,
    PieChart,
    Calendar,
    CreditCard,
    Truck,
    Users,
    ShoppingCart
} from "lucide-react";

export default function FinancePage() {
    const [timeRange, setTimeRange] = useState("week");

    const financialStats = [
        {
            title: "فروش کل",
            value: "125,000,000 تومان",
            change: "+15%",
            changeType: "positive",
            icon: <DollarSign className="h-6 w-6" />,
            color: "primary"
        },
        {
            title: "سفارشات",
            value: "1,247",
            change: "+8%",
            changeType: "positive",
            icon: <ShoppingCart className="h-6 w-6" />,
            color: "secondary"
        },
        {
            title: "هزینه لجستیک",
            value: "12,500,000 تومان",
            change: "-3%",
            changeType: "negative",
            icon: <Truck className="h-6 w-6" />,
            color: "accent"
        },
        {
            title: "سود خالص",
            value: "45,000,000 تومان",
            change: "+22%",
            changeType: "positive",
            icon: <TrendingUp className="h-6 w-6" />,
            color: "success"
        }
    ];

    const recentTransactions = [
        {
            id: "#TXN001",
            type: "income",
            amount: "2,500,000 تومان",
            description: "فروش سفارش #4392",
            date: "2024-01-15",
            status: "completed"
        },
        {
            id: "#TXN002",
            type: "expense",
            amount: "150,000 تومان",
            description: "پرداخت به پیک",
            date: "2024-01-15",
            status: "completed"
        },
        {
            id: "#TXN003",
            type: "income",
            amount: "850,000 تومان",
            description: "فروش سفارش #4393",
            date: "2024-01-14",
            status: "completed"
        },
        {
            id: "#TXN004",
            type: "expense",
            amount: "75,000 تومان",
            description: "هزینه حمل و نقل",
            date: "2024-01-14",
            status: "pending"
        }
    ];

    const getTransactionIcon = (type: string) => {
        return type === "income" ? 
            <TrendingUp className="h-4 w-4 text-success" /> : 
            <TrendingDown className="h-4 w-4 text-error" />;
    };

    const getTransactionStatus = (status: string) => {
        switch (status) {
            case "completed":
                return <span className="badge badge-success">تکمیل شده</span>;
            case "pending":
                return <span className="badge badge-warning">در انتظار</span>;
            default:
                return <span className="badge badge-ghost">نامشخص</span>;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">مالی</h1>
                    <p className="text-base-content/70">گزارشات مالی و مدیریت هزینه‌ها</p>
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
                        <BarChart3 className="h-4 w-4" />
                        گزارش کامل
                    </button>
                </div>
            </div>

            {/* Financial Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {financialStats.map((stat, index) => (
                    <div key={index} className="stat bg-base-200 rounded-box shadow">
                        <div className="stat-figure text-primary">
                            {stat.icon}
                        </div>
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-value text-primary">{stat.value}</div>
                        <div className={`stat-desc ${stat.changeType === 'positive' ? 'text-success' : 'text-error'}`}>
                            {stat.change} نسبت به دوره قبل
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts and Reports */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">
                                <BarChart3 className="h-5 w-5" />
                                نمودار فروش
                            </h2>
                            <div className="badge badge-primary">{timeRange}</div>
                        </div>
                        <div className="h-64 flex items-center justify-center bg-base-200 rounded-box">
                            <div className="text-center">
                                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p className="text-base-content/70">نمودار فروش {timeRange}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Revenue Distribution */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">
                                <PieChart className="h-5 w-5" />
                                توزیع درآمد
                            </h2>
                        </div>
                        <div className="h-64 flex items-center justify-center bg-base-200 rounded-box">
                            <div className="text-center">
                                <PieChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p className="text-base-content/70">نمودار توزیع درآمد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">تراکنش‌های اخیر</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>شماره تراکنش</th>
                                    <th>نوع</th>
                                    <th>مبلغ</th>
                                    <th>توضیحات</th>
                                    <th>تاریخ</th>
                                    <th>وضعیت</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentTransactions.map((transaction) => (
                                    <tr key={transaction.id}>
                                        <td>
                                            <div className="font-bold">{transaction.id}</div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                {getTransactionIcon(transaction.type)}
                                                <span className={transaction.type === "income" ? "text-success" : "text-error"}>
                                                    {transaction.type === "income" ? "درآمد" : "هزینه"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className={transaction.type === "income" ? "text-success" : "text-error"}>
                                            {transaction.amount}
                                        </td>
                                        <td>{transaction.description}</td>
                                        <td>{transaction.date}</td>
                                        <td>{getTransactionStatus(transaction.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}