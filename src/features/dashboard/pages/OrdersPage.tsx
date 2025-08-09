import { useState } from "react";
import { 
    Eye, 
    Search, 
    Filter, 
    Plus,
    Clock,
    Truck,
    CheckCircle,
    XCircle,
    User,
    MapPin,
    Phone
} from "lucide-react";

interface Order {
    id: string;
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    items: { name: string; quantity: number; price: number }[];
    total: number;
    status: 'preparing' | 'shipping' | 'delivered' | 'cancelled';
    deliveryAgent?: string;
    createdAt: string;
}

const mockOrders: Order[] = [
    {
        id: '4392',
        customerName: 'احمد محمدی',
        customerPhone: '09121234567',
        customerAddress: 'تهران، خیابان ولیعصر، پلاک 123',
        items: [
            { name: 'پیتزا مارگاریتا', quantity: 2, price: 450000 },
            { name: 'نوشابه', quantity: 2, price: 35000 }
        ],
        total: 935000,
        status: 'delivered',
        deliveryAgent: 'علی رضایی',
        createdAt: '1403/10/15 - 14:30'
    },
    {
        id: '4393',
        customerName: 'فاطمه احمدی',
        customerPhone: '09129876543',
        customerAddress: 'تهران، خیابان انقلاب، پلاک 456',
        items: [
            { name: 'برگر چیکن', quantity: 1, price: 320000 },
            { name: 'سیب زمینی', quantity: 1, price: 85000 }
        ],
        total: 405000,
        status: 'shipping',
        deliveryAgent: 'محمد کریمی',
        createdAt: '1403/10/15 - 15:15'
    },
    {
        id: '4394',
        customerName: 'حسن موسوی',
        customerPhone: '09123456789',
        customerAddress: 'تهران، خیابان آزادی، پلاک 789',
        items: [
            { name: 'کباب کوبیده', quantity: 3, price: 380000 }
        ],
        total: 1140000,
        status: 'preparing',
        createdAt: '1403/10/15 - 15:45'
    }
];

export default function OrdersPage() {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const getStatusBadge = (status: Order['status']) => {
        switch (status) {
            case 'preparing':
                return <div className="badge badge-warning">در حال آماده‌سازی</div>;
            case 'shipping':
                return <div className="badge badge-info">در حال ارسال</div>;
            case 'delivered':
                return <div className="badge badge-success">تحویل شده</div>;
            case 'cancelled':
                return <div className="badge badge-error">لغو شده</div>;
            default:
                return <div className="badge">نامشخص</div>;
        }
    };

    const getStatusIcon = (status: Order['status']) => {
        switch (status) {
            case 'preparing':
                return <Clock className="w-5 h-5 text-warning" />;
            case 'shipping':
                return <Truck className="w-5 h-5 text-info" />;
            case 'delivered':
                return <CheckCircle className="w-5 h-5 text-success" />;
            case 'cancelled':
                return <XCircle className="w-5 h-5 text-error" />;
            default:
                return null;
        }
    };

    const filteredOrders = mockOrders.filter(order => {
        const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
        const matchesSearch = order.customerName.includes(searchTerm) || 
                            order.id.includes(searchTerm) ||
                            order.customerPhone.includes(searchTerm);
        return matchesStatus && matchesSearch;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">سفارشات</h1>
                    <p className="text-base-content/70 mt-1">مدیریت و پیگیری سفارشات</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    سفارش جدید
                </button>
            </div>

            {/* Filters */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="form-control flex-1">
                            <div className="input-group">
                                <span className="bg-base-200">
                                    <Search className="w-4 h-4" />
                                </span>
                                <input 
                                    type="text" 
                                    placeholder="جستجو بر اساس نام، شماره سفارش یا تلفن..." 
                                    className="input input-bordered flex-1"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Status Filter */}
                        <div className="form-control">
                            <select 
                                className="select select-bordered"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">همه وضعیت‌ها</option>
                                <option value="preparing">در حال آماده‌سازی</option>
                                <option value="shipping">در حال ارسال</option>
                                <option value="delivered">تحویل شده</option>
                                <option value="cancelled">لغو شده</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Orders Table */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body p-0">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>شماره سفارش</th>
                                    <th>مشتری</th>
                                    <th>مبلغ</th>
                                    <th>وضعیت</th>
                                    <th>پیک</th>
                                    <th>زمان ثبت</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover">
                                        <td>
                                            <div className="font-bold">#{order.id}</div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar placeholder">
                                                    <div className="w-10 h-10 bg-neutral text-neutral-content rounded-full">
                                                        <User className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{order.customerName}</div>
                                                    <div className="text-sm opacity-50">{order.customerPhone}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="font-semibold">
                                                {order.total.toLocaleString()} تومان
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                {getStatusIcon(order.status)}
                                                {getStatusBadge(order.status)}
                                            </div>
                                        </td>
                                        <td>
                                            {order.deliveryAgent ? (
                                                <span className="text-sm">{order.deliveryAgent}</span>
                                            ) : (
                                                <span className="text-sm opacity-50">تخصیص نیافته</span>
                                            )}
                                        </td>
                                        <td>{order.createdAt}</td>
                                        <td>
                                            <button 
                                                className="btn btn-ghost btn-sm"
                                                onClick={() => setSelectedOrder(order)}
                                            >
                                                <Eye className="w-4 h-4" />
                                                جزئیات
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Order Details Modal */}
            {selectedOrder && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg">جزئیات سفارش #{selectedOrder.id}</h3>
                            <button 
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => setSelectedOrder(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Customer Info */}
                            <div className="card bg-base-200">
                                <div className="card-body">
                                    <h4 className="font-semibold mb-3">اطلاعات مشتری</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>{selectedOrder.customerName}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            <span>{selectedOrder.customerPhone}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{selectedOrder.customerAddress}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Items */}
                            <div>
                                <h4 className="font-semibold mb-3">آیتم‌های سفارش</h4>
                                <div className="overflow-x-auto">
                                    <table className="table table-compact w-full">
                                        <thead>
                                            <tr>
                                                <th>محصول</th>
                                                <th>تعداد</th>
                                                <th>قیمت واحد</th>
                                                <th>جمع</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedOrder.items.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price.toLocaleString()} تومان</td>
                                                    <td>{(item.quantity * item.price).toLocaleString()} تومان</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="font-bold">
                                                <td colSpan={3}>مجموع:</td>
                                                <td>{selectedOrder.total.toLocaleString()} تومان</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            {/* Order Status */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-sm opacity-70">وضعیت سفارش:</span>
                                    <div className="mt-1">
                                        {getStatusBadge(selectedOrder.status)}
                                    </div>
                                </div>
                                {selectedOrder.deliveryAgent && (
                                    <div>
                                        <span className="text-sm opacity-70">پیک مسئول:</span>
                                        <div className="mt-1 font-semibold">
                                            {selectedOrder.deliveryAgent}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="modal-action">
                            <button 
                                className="btn btn-primary"
                                onClick={() => setSelectedOrder(null)}
                            >
                                بستن
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}