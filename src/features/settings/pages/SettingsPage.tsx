import { useState } from "react";
import { 
    Settings, 
    Truck, 
    Globe, 
    Bell, 
    Shield, 
    Palette,
    Save,
    CreditCard,
    MapPin
} from "lucide-react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("general");
    const [shippingRates, setShippingRates] = useState({
        local: "50,000",
        intercity: "150,000",
        express: "250,000"
    });

    const tabs = [
        {
            id: "general",
            title: "تنظیمات عمومی",
            icon: <Settings className="h-4 w-4" />
        },
        {
            id: "shipping",
            title: "نرخ ارسال",
            icon: <Truck className="h-4 w-4" />
        },
        {
            id: "notifications",
            title: "اعلان‌ها",
            icon: <Bell className="h-4 w-4" />
        },
        {
            id: "security",
            title: "امنیت",
            icon: <Shield className="h-4 w-4" />
        },
        {
            id: "appearance",
            title: "ظاهر",
            icon: <Palette className="h-4 w-4" />
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">تنظیمات</h1>
                    <p className="text-base-content/70">مدیریت تنظیمات سیستم</p>
                </div>
                <button className="btn btn-primary">
                    <Save className="h-4 w-4" />
                    ذخیره تغییرات
                </button>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed">
                {tabs.map((tab) => (
                    <a
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.icon}
                        {tab.title}
                    </a>
                ))}
            </div>

            {/* Tab Content */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    {activeTab === "general" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">تنظیمات عمومی</h2>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">نام شرکت</span>
                                </label>
                                <input type="text" className="input input-bordered" defaultValue="شرکت ما" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ایمیل پشتیبانی</span>
                                </label>
                                <input type="email" className="input input-bordered" defaultValue="support@example.com" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">شماره تماس</span>
                                </label>
                                <input type="tel" className="input input-bordered" defaultValue="021-12345678" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">آدرس</span>
                                </label>
                                <textarea className="textarea textarea-bordered" defaultValue="تهران، خیابان ولیعصر"></textarea>
                            </div>
                        </div>
                    )}

                    {activeTab === "shipping" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">نرخ ارسال</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ارسال محلی (تومان)</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        className="input input-bordered" 
                                        value={shippingRates.local}
                                        onChange={(e) => setShippingRates({...shippingRates, local: e.target.value})}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ارسال بین شهری (تومان)</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        className="input input-bordered" 
                                        value={shippingRates.intercity}
                                        onChange={(e) => setShippingRates({...shippingRates, intercity: e.target.value})}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ارسال سریع (تومان)</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        className="input input-bordered" 
                                        value={shippingRates.express}
                                        onChange={(e) => setShippingRates({...shippingRates, express: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="alert alert-info">
                                <Truck className="h-4 w-4" />
                                <span>نرخ‌های ارسال بر اساس کیلومتر و نوع ارسال محاسبه می‌شود.</span>
                            </div>
                        </div>
                    )}

                    {activeTab === "notifications" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">اعلان‌ها</h2>
                            
                            <div className="space-y-4">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">اعلان سفارشات جدید</span>
                                        <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">اعلان موجودی کم</span>
                                        <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">اعلان پرداخت</span>
                                        <input type="checkbox" className="toggle toggle-primary" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">اعلان ایمیل</span>
                                        <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">امنیت</h2>
                            
                            <div className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">رمز عبور فعلی</span>
                                    </label>
                                    <input type="password" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">رمز عبور جدید</span>
                                    </label>
                                    <input type="password" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">تکرار رمز عبور جدید</span>
                                    </label>
                                    <input type="password" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">احراز هویت دو مرحله‌ای</span>
                                        <input type="checkbox" className="toggle toggle-primary" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "appearance" && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold">ظاهر</h2>
                            
                            <div className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">تم</span>
                                    </label>
                                    <select className="select select-bordered">
                                        <option>روشن</option>
                                        <option>تیره</option>
                                        <option>خودکار</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">زبان</span>
                                    </label>
                                    <select className="select select-bordered">
                                        <option>فارسی</option>
                                        <option>English</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">اندازه فونت</span>
                                    </label>
                                    <select className="select select-bordered">
                                        <option>کوچک</option>
                                        <option>متوسط</option>
                                        <option>بزرگ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}