import { useState } from "react";
import { 
    Search, 
    Plus, 
    Edit, 
    Trash2,
    Users,
    User,
    Mail,
    Phone,
    Calendar,
    ShoppingBag
} from "lucide-react";

export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [userTypeFilter, setUserTypeFilter] = useState("all");

    const users = [
        {
            id: 1,
            name: "علی محمدی",
            email: "ali@example.com",
            phone: "09123456789",
            type: "customer",
            joinDate: "2024-01-15",
            orders: 12,
            totalSpent: "15,000,000 تومان",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "فاطمه احمدی",
            email: "fateme@example.com",
            phone: "09187654321",
            type: "customer",
            joinDate: "2024-01-10",
            orders: 8,
            totalSpent: "8,500,000 تومان",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "رضا حسینی",
            email: "reza@example.com",
            phone: "09111111111",
            type: "admin",
            joinDate: "2023-12-01",
            orders: 0,
            totalSpent: "0 تومان",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "مریم صادقی",
            email: "maryam@example.com",
            phone: "09222222222",
            type: "customer",
            joinDate: "2024-01-05",
            orders: 3,
            totalSpent: "2,500,000 تومان",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = userTypeFilter === "all" || user.type === userTypeFilter;
        return matchesSearch && matchesType;
    });

    const getUserTypeBadge = (type: string) => {
        switch (type) {
            case "admin":
                return <span className="badge badge-primary">ادمین</span>;
            case "customer":
                return <span className="badge badge-secondary">مشتری</span>;
            default:
                return <span className="badge badge-ghost">نامشخص</span>;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">کاربران</h1>
                    <p className="text-base-content/70">مدیریت کاربران و دسترسی‌ها</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="h-4 w-4" />
                    افزودن کاربر
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
                                    placeholder="جستجو در کاربران..."
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
                                value={userTypeFilter}
                                onChange={(e) => setUserTypeFilter(e.target.value)}
                            >
                                <option value="all">همه کاربران</option>
                                <option value="customer">مشتریان</option>
                                <option value="admin">ادمین‌ها</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={user.avatar} alt={user.name} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="card-title">{user.name}</h2>
                                    {getUserTypeBadge(user.type)}
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">{user.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">{user.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">عضویت: {user.joinDate}</span>
                                </div>
                                {user.type === "customer" && (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <ShoppingBag className="h-4 w-4 opacity-70" />
                                            <span className="text-sm">{user.orders} سفارش</span>
                                        </div>
                                        <div className="text-sm font-semibold text-primary">
                                            {user.totalSpent}
                                        </div>
                                    </>
                                )}
                            </div>
                            
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-ghost btn-sm">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="btn btn-ghost btn-sm text-error">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredUsers.length === 0 && (
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold">کاربری یافت نشد</h3>
                        <p className="text-base-content/70">کاربری با فیلترهای انتخابی شما وجود ندارد.</p>
                    </div>
                </div>
            )}
        </div>
    );
}