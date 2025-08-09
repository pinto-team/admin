import { useState } from "react";
import { 
    Search, 
    Plus, 
    Edit, 
    Trash2,
    Truck,
    User,
    Phone,
    MapPin,
    Clock,
    Activity,
    CheckCircle,
    XCircle
} from "lucide-react";

export default function DriversPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const drivers = [
        {
            id: 1,
            name: "احمد رضایی",
            phone: "09123456789",
            vehicle: "موتورسیکلت",
            plateNumber: "12-345-67",
            status: "online",
            currentLocation: "تهران، ونک",
            missions: 15,
            completedMissions: 12,
            rating: 4.8,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "محمد کریمی",
            phone: "09187654321",
            vehicle: "اتومبیل",
            plateNumber: "34-567-89",
            status: "offline",
            currentLocation: "تهران، تجریش",
            missions: 8,
            completedMissions: 7,
            rating: 4.5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "علی نوری",
            phone: "09111111111",
            vehicle: "موتورسیکلت",
            plateNumber: "56-789-12",
            status: "busy",
            currentLocation: "تهران، سعادت آباد",
            missions: 22,
            completedMissions: 20,
            rating: 4.9,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "حسن احمدی",
            phone: "09222222222",
            vehicle: "اتومبیل",
            plateNumber: "78-901-23",
            status: "online",
            currentLocation: "تهران، پاسداران",
            missions: 5,
            completedMissions: 4,
            rating: 4.2,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const filteredDrivers = drivers.filter(driver => {
        const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            driver.phone.includes(searchTerm);
        const matchesStatus = statusFilter === "all" || driver.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "online":
                return <span className="badge badge-success">آنلاین</span>;
            case "offline":
                return <span className="badge badge-error">آفلاین</span>;
            case "busy":
                return <span className="badge badge-warning">مشغول</span>;
            default:
                return <span className="badge badge-ghost">نامشخص</span>;
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "online":
                return <CheckCircle className="h-4 w-4 text-success" />;
            case "offline":
                return <XCircle className="h-4 w-4 text-error" />;
            case "busy":
                return <Activity className="h-4 w-4 text-warning" />;
            default:
                return <Activity className="h-4 w-4" />;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">پیک‌ها</h1>
                    <p className="text-base-content/70">مدیریت پیک‌ها و ماموریت‌ها</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="h-4 w-4" />
                    افزودن پیک
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
                                    placeholder="جستجو در پیک‌ها..."
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
                                <option value="online">آنلاین</option>
                                <option value="offline">آفلاین</option>
                                <option value="busy">مشغول</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drivers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrivers.map((driver) => (
                    <div key={driver.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={driver.avatar} alt={driver.name} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="card-title">{driver.name}</h2>
                                    <div className="flex items-center gap-2">
                                        {getStatusIcon(driver.status)}
                                        {getStatusBadge(driver.status)}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">{driver.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Truck className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">{driver.vehicle} - {driver.plateNumber}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">{driver.currentLocation}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Activity className="h-4 w-4 opacity-70" />
                                    <span className="text-sm">{driver.missions} ماموریت ({driver.completedMissions} تکمیل شده)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-primary">
                                        امتیاز: {driver.rating}/5
                                    </span>
                                </div>
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
            {filteredDrivers.length === 0 && (
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <Truck className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold">پیکی یافت نشد</h3>
                        <p className="text-base-content/70">پیکی با فیلترهای انتخابی شما وجود ندارد.</p>
                    </div>
                </div>
            )}
        </div>
    );
}