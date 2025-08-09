import { useState } from "react";
import { 
    Search, 
    Filter, 
    MoreHorizontal, 
    Eye, 
    Edit, 
    Trash2,
    ShoppingCart,
    Truck,
    CheckCircle,
    XCircle
} from "lucide-react";

export default function OrdersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const orders = [
        {
            id: "#4392",
            customer: "علی محمدی",
            products: "لپ‌تاپ، موس",
            amount: "2,500,000 تومان",
            status: "preparing",
            date: "2024-01-15",
            driver: "احمد رضایی"
        },
        {
            id: "#4393",
            customer: "فاطمه احمدی",
            products: "کتاب، قلم",
            amount: "150,000 تومان",
            status: "shipped",
            date: "2024-01-14",
            driver: "محمد کریمی"
        },
        {
            id: "#4394",
            customer: "رضا حسینی",
            products: "موبایل",
            amount: "8,500,000 تومان",
            status: "delivered",
            date: "2024-01-13",
            driver: "علی نوری"
        },
        {
            id: "#4395",
            customer: "مریم صادقی",
            products: "کفش، کیف",
            amount: "1,200,000 تومان",
            status: "cancelled",
            date: "2024-01-12",
            driver: "-"
        }
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "preparing":
                return <span className="badge badge-warning">در حال آماده‌سازی</span>;
            case "shipped":
                return <span className="badge badge-info">ارسال شده</span>;
            case "delivered":
                return <span className="badge badge-success">تحویل شده</span>;
            case "cancelled":
                return <span className="badge badge-error">لغو شده</span>;
            default:
                return <span className="badge badge-ghost">نامشخص</span>;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "preparing":
                return <ShoppingCart className="h-4 w-4" />;
            case "shipped":
                return <Truck className="h-4 w-4" />;
            case "delivered":
                return <CheckCircle className="h-4 w-4" />;
            case "cancelled":
                return <XCircle className="h-4 w-4" />;
            default:
                return <ShoppingCart className="h-4 w-4" />;
        }
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">سفارشات</h1>
                    <p className="text-base-content/70">مدیریت سفارشات و وضعیت تحویل</p>
                </div>
                <button className="btn btn-primary">
                    <ShoppingCart className="h-4 w-4" />
                    سفارش جدید
                </button>
            </div>

            {/* Filters */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="form-control flex-1">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="جستجو در سفارشات..."
                                    className="input input-bordered w-full"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="btn btn-square">
                                    <Search className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                        <div className="form-control">
                            <select
                                className="select select-bordered"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">همه وضعیت‌ها</option>
                                <option value="preparing">در حال آماده‌سازی</option>
                                <option value="shipped">ارسال شده</option>
                                <option value="delivered">تحویل شده</option>
                                <option value="cancelled">لغو شده</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>شماره سفارش</th>
                                    <th>مشتری</th>
                                    <th>محصولات</th>
                                    <th>مبلغ</th>
                                    <th>وضعیت</th>
                                    <th>تاریخ</th>
                                    <th>پیک مسئول</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td>
                                            <div className="font-bold">{order.id}</div>
                                        </td>
                                        <td>{order.customer}</td>
                                        <td>{order.products}</td>
                                        <td>{order.amount}</td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                {getStatusIcon(order.status)}
                                                {getStatusBadge(order.status)}
                                            </div>
                                        </td>
                                        <td>{order.date}</td>
                                        <td>{order.driver}</td>
                                        <td>
                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </div>
                                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <a className="flex items-center gap-2">
                                                            <Eye className="h-4 w-4" />
                                                            مشاهده جزئیات
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex items-center gap-2">
                                                            <Edit className="h-4 w-4" />
                                                            ویرایش
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="flex items-center gap-2 text-error">
                                                            <Trash2 className="h-4 w-4" />
                                                            حذف
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
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