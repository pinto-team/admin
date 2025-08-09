import { DollarSign, TrendingUp, Calendar, Download } from "lucide-react";

export default function FinancePage() {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-base-content">مالی</h1>
                    <p className="text-base-content/70 mt-1">گزارش فروش و هزینه‌های لجستیک</p>
                </div>
                <button className="btn btn-primary">
                    <Download className="w-4 h-4" />
                    دانلود گزارش
                </button>
            </div>

            {/* Financial Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div className="stat-title">فروش امروز</div>
                        <div className="stat-value text-primary">4.2M</div>
                        <div className="stat-desc text-success">
                            <TrendingUp className="w-4 h-4 inline" /> ↗︎ 15%
                        </div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">هزینه ارسال</div>
                        <div className="stat-value text-warning">680K</div>
                        <div className="stat-desc">تومان</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">سود خالص</div>
                        <div className="stat-value text-success">3.52M</div>
                        <div className="stat-desc">تومان</div>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">پرداخت به پیک‌ها</div>
                        <div className="stat-value text-info">450K</div>
                        <div className="stat-desc">تومان</div>
                    </div>
                </div>
            </div>

            {/* Charts and Reports */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">فروش هفتگی</h2>
                        <div className="h-64 bg-base-200 rounded-lg flex items-center justify-center">
                            <p className="text-base-content/60">نمودار فروش هفتگی</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title">هزینه‌های لجستیک</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>پرداخت به پیک‌ها</span>
                                <span className="font-bold">450,000 تومان</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>سوخت و نگهداری</span>
                                <span className="font-bold">120,000 تومان</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>بیمه و مالیات</span>
                                <span className="font-bold">110,000 تومان</span>
                            </div>
                            <div className="divider"></div>
                            <div className="flex justify-between items-center font-bold text-lg">
                                <span>مجموع</span>
                                <span>680,000 تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title mb-4">تراکنش‌های اخیر</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>نوع</th>
                                    <th>توضیحات</th>
                                    <th>مبلغ</th>
                                    <th>تاریخ</th>
                                    <th>وضعیت</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="badge badge-success">درآمد</div></td>
                                    <td>فروش سفارش #4392</td>
                                    <td className="text-success">+935,000 تومان</td>
                                    <td>1403/10/15</td>
                                    <td><div className="badge badge-success">تایید شده</div></td>
                                </tr>
                                <tr>
                                    <td><div className="badge badge-warning">هزینه</div></td>
                                    <td>پرداخت به پیک علی رضایی</td>
                                    <td className="text-warning">-45,000 تومان</td>
                                    <td>1403/10/15</td>
                                    <td><div className="badge badge-success">پرداخت شده</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}