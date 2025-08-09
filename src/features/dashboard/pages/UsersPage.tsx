import { useState } from "react";
import { 
    Plus, 
    Search, 
    Edit, 
    Trash2, 
    User,
    Shield,
    Phone,
    Mail,
    MapPin,
    Calendar
} from "lucide-react";

interface Customer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    address: string;
    totalOrders: number;
    totalSpent: number;
    joinDate: string;
    lastOrder?: string;
}

interface Admin {
    id: string;
    name: string;
    email: string;
    role: 'super_admin' | 'admin' | 'manager';
    isActive: boolean;
    lastLogin?: string;
}

const mockCustomers: Customer[] = [
    {
        id: '1',
        name: 'احمد محمدی',
        phone: '09121234567',
        email: 'ahmad@example.com',
        address: 'تهران، خیابان ولیعصر، پلاک 123',
        totalOrders: 15,
        totalSpent: 2450000,
        joinDate: '1403/08/15',
        lastOrder: '1403/10/15'
    },
    {
        id: '2',
        name: 'فاطمه احمدی',
        phone: '09129876543',
        address: 'تهران، خیابان انقلاب، پلاک 456',
        totalOrders: 8,
        totalSpent: 1320000,
        joinDate: '1403/09/10',
        lastOrder: '1403/10/12'
    }
];

const mockAdmins: Admin[] = [
    {
        id: '1',
        name: 'علی رضایی',
        email: 'ali@company.com',
        role: 'super_admin',
        isActive: true,
        lastLogin: '1403/10/15 - 14:30'
    },
    {
        id: '2',
        name: 'مریم نوری',
        email: 'maryam@company.com',
        role: 'admin',
        isActive: true,
        lastLogin: '1403/10/14 - 09:15'
    }
];

export default function UsersPage() {
    const [activeTab, setActiveTab] = useState<'customers' | 'admins'>('customers');
    const [searchTerm, setSearchTerm] = useState('');

    const getRoleBadge = (role: Admin['role']) => {
        switch (role) {
            case 'super_admin':
                return <div className="badge badge-error">سوپر ادمین</div>;
            case 'admin':
                return <div className="badge badge-warning">ادمین</div>;
            case 'manager':
                return <div className="badge badge-info">مدیر</div>;
            default:
                return <div className="badge">نامشخص</div>;
        }
    };

    const filteredCustomers = mockCustomers.filter(customer =>
        customer.name.includes(searchTerm) || customer.phone.includes(searchTerm)
    );

    const filteredAdmins = mockAdmins.filter(admin =>
        admin.name.includes(searchTerm) || admin.email.includes(searchTerm)
    );

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">کاربران</h1>
                    <p className="text-base-content/70 mt-1">مدیریت مشتریان و ادمین‌ها</p>
                </div>
                <button className="btn btn-primary">
                    <Plus className="w-4 h-4" />
                    {activeTab === 'customers' ? 'افزودن مشتری' : 'افزودن ادمین'}
                </button>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed">
                <button
                    className={`tab ${activeTab === 'customers' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('customers')}
                >
                    <User className="w-4 h-4 ml-2" />
                    مشتریان ({mockCustomers.length})
                </button>
                <button
                    className={`tab ${activeTab === 'admins' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('admins')}
                >
                    <Shield className="w-4 h-4 ml-2" />
                    ادمین‌ها ({mockAdmins.length})
                </button>
            </div>

            {/* Search */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <div className="form-control">
                        <div className="input-group">
                            <span className="bg-base-200">
                                <Search className="w-4 h-4" />
                            </span>
                            <input 
                                type="text" 
                                placeholder={activeTab === 'customers' ? 'جستجوی مشتری...' : 'جستجوی ادمین...'} 
                                className="input input-bordered flex-1"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            {activeTab === 'customers' ? (
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body p-0">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>مشتری</th>
                                        <th>تماس</th>
                                        <th>آدرس</th>
                                        <th>تعداد سفارش</th>
                                        <th>مجموع خرید</th>
                                        <th>آخرین سفارش</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCustomers.map((customer) => (
                                        <tr key={customer.id} className="hover">
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar placeholder">
                                                        <div className="w-10 h-10 bg-neutral text-neutral-content rounded-full">
                                                            <User className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{customer.name}</div>
                                                        <div className="text-sm opacity-50">
                                                            عضو از {customer.joinDate}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <Phone className="w-3 h-3" />
                                                        {customer.phone}
                                                    </div>
                                                    {customer.email && (
                                                        <div className="flex items-center gap-1 text-sm opacity-50">
                                                            <Mail className="w-3 h-3" />
                                                            {customer.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="max-w-xs truncate" title={customer.address}>
                                                    {customer.address}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-ghost">{customer.totalOrders}</div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    {customer.totalSpent.toLocaleString()} تومان
                                                </span>
                                            </td>
                                            <td>{customer.lastOrder || 'هیچ سفارشی'}</td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <button className="btn btn-ghost btn-sm">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button className="btn btn-ghost btn-sm text-error">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body p-0">
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>ادمین</th>
                                        <th>ایمیل</th>
                                        <th>نقش</th>
                                        <th>وضعیت</th>
                                        <th>آخرین ورود</th>
                                        <th>عملیات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAdmins.map((admin) => (
                                        <tr key={admin.id} className="hover">
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar placeholder">
                                                        <div className="w-10 h-10 bg-primary text-primary-content rounded-full">
                                                            <Shield className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                    <div className="font-bold">{admin.name}</div>
                                                </div>
                                            </td>
                                            <td>{admin.email}</td>
                                            <td>{getRoleBadge(admin.role)}</td>
                                            <td>
                                                <div className={`badge ${admin.isActive ? 'badge-success' : 'badge-error'}`}>
                                                    {admin.isActive ? 'فعال' : 'غیرفعال'}
                                                </div>
                                            </td>
                                            <td>{admin.lastLogin || 'هرگز'}</td>
                                            <td>
                                                <div className="flex gap-2">
                                                    <button className="btn btn-ghost btn-sm">
                                                        <Edit className="w-4 h-4" />
                                                    </button>
                                                    <button className="btn btn-ghost btn-sm text-error">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}