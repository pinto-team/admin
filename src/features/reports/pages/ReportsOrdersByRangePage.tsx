import PageHeader from "@/shared/components/patterns/PageHeader";

export default function ReportsOrdersByRangePage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="سفارشات بر اساس بازه زمانی" />

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <div className="flex flex-wrap items-end gap-2">
            <label className="form-control">
              <div className="label"><span className="label-text">از تاریخ</span></div>
              <input type="date" className="input input-bordered" />
            </label>
            <label className="form-control">
              <div className="label"><span className="label-text">تا تاریخ</span></div>
              <input type="date" className="input input-bordered" />
            </label>
            <button className="btn btn-primary">اعمال</button>
          </div>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">تعداد سفارش</div>
          <div className="stat-value">1,245</div>
        </div>
        <div className="stat">
          <div className="stat-title">مبلغ کل</div>
          <div className="stat-value">420,500,000 تومان</div>
        </div>
      </div>
    </div>
  );
}