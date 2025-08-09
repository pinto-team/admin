import { Truck, MapPin, Phone, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function DeliveryPage() {
    const deliveryAgents = [
        {
            id: '1',
            name: 'علی رضایی',
            phone: '09121111111',
            vehicle: 'موتور',
            status: 'online',
            currentOrders: 2,
            completedToday: 8,
            location: 'منطقه 1'
        },
        {
            id: '2',
            name: 'محمد کریمی',
            phone: '09122222222',
            vehicle: 'ماشین',
            status: 'busy',
            currentOrders: 1,
            completedToday: 12,
            location: 'منطقه 3'
        }
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'online':
                return <div className="badge badge-success">آنلاین</div>;
            case 'busy':
                return <div className="badge badge-warning">مشغول</div>;
            case 'offline':
                return <div className="badge badge-error">آفلاین</div>;
            default:
                return <div className="badge">نامشخص</div>;
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">پیک‌ها</h1>
                    <p className="text-base-content/70 mt-1">مدیریت پیک‌ها و ماموریت‌ها</p>
                </div>
                <button className="btn btn-primary">
                    <Truck className="w-4 h-4" />
                    افزودن پیک
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">پیک‌های آنلاین</div>
                        <div className="stat-value text-success">12</div>
                        <div className="stat-desc">از 15 پیک</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">تحویل‌های امروز</div>
                        <div className="stat-value text-primary">47</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">میانگین زمان تحویل</div>
                        <div className="stat-value text-info">28</div>
                        <div className="stat-desc">دقیقه</div>
                    </div>
                </div>
            </div>

            {/* Delivery Agents List */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-0">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>پیک</th>
                                    <th>تماس</th>
                                    <th>وسیله</th>
                                    <th>وضعیت</th>
                                    <th>سفارشات فعلی</th>
                                    <th>تحویل امروز</th>
                                    <th>موقعیت</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deliveryAgents.map((agent) => (
                                    <tr key={agent.id} className="hover">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar placeholder">
                                                    <div className="w-10 h-10 bg-info text-info-content rounded-full">
                                                        <Truck className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div className="font-bold">{agent.name}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-1">
                                                <Phone className="w-3 h-3" />
                                                {agent.phone}
                                            </div>
                                        </td>
                                        <td>{agent.vehicle}</td>
                                        <td>{getStatusBadge(agent.status)}</td>
                                        <td>
                                            <div className="badge badge-neutral">{agent.currentOrders}</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success">{agent.completedToday}</div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {agent.location}
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-ghost btn-sm">
                                                مشاهده نقشه
                                            </button>
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