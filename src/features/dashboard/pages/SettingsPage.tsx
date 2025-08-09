import { Save, Settings, Truck, DollarSign, Globe, Shield } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">تنظیمات</h1>
                    <p className="text-base-content/70 mt-1">پیکربندی سیستم و نرخ‌ها</p>
                </div>
                <button className="btn btn-primary">
                    <Save className="w-4 h-4" />
                    ذخیره تغییرات
                </button>
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed">
                <a className="tab tab-active">نرخ ارسال</a>
                <a className="tab">تنظیمات عمومی</a>
                <a className="tab">امنیت</a>
            </div>

            {/* Delivery Rates */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">
                        <Truck className="w-5 h-5" />
                        نرخ ارسال
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">نرخ پایه ارسال (تومان)</span>
                                </label>
                                <input type="number" className="input input-bordered" value="15000" />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">نرخ هر کیلومتر اضافه (تومان)</span>
                                </label>
                                <input type="number" className="input input-bordered" value="3000" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">حداکثر فاصله ارسال (کیلومتر)</span>
                                </label>
                                <input type="number" className="input input-bordered" value="25" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ارسال رایگان برای سفارشات بالای (تومان)</span>
                                </label>
                                <input type="number" className="input input-bordered" value="500000" />
                            </div>

                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">تحویل شبانه (بعد از ساعت 22)</span>
                                    <input type="checkbox" className="toggle toggle-primary" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">هزینه اضافه تحویل شبانه (%)</span>
                                </label>
                                <input type="number" className="input input-bordered" value="30" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Settings */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">
                        <DollarSign className="w-5 h-5" />
                        تنظیمات پرداخت
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">پرداخت نقدی</span>
                                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">پرداخت آنلاین</span>
                                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                </label>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">کارت به کارت</span>
                                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">شماره کارت دریافت</span>
                                </label>
                                <input type="text" className="input input-bordered" placeholder="6037-9977-****-****" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Store Info */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">
                        <Settings className="w-5 h-5" />
                        اطلاعات فروشگاه
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">نام فروشگاه</span>
                                </label>
                                <input type="text" className="input input-bordered" value="رستوران آنلاین" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">شماره تماس</span>
                                </label>
                                <input type="text" className="input input-bordered" value="021-12345678" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ساعات کاری (باز)</span>
                                </label>
                                <input type="time" className="input input-bordered" value="08:00" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">آدرس فروشگاه</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="آدرس کامل فروشگاه"></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ساعات کاری (بسته)</span>
                                </label>
                                <input type="time" className="input input-bordered" value="23:00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">تنظیمات اعلان‌ها</h2>
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">اعلان سفارش جدید</span>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">اعلان تحویل موفق</span>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">اعلان کم بودن موجودی</span>
                                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}