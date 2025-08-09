import PageHeader from "@/shared/components/patterns/PageHeader";

export default function FinanceSalesReportPage() {
  return (
    <div className="grid gap-4">
      <PageHeader title="گزارش فروش روزانه" />

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">تعداد سفارش</div>
          <div className="stat-value">328</div>
          <div className="stat-desc">+12% نسبت به دیروز</div>
        </div>
        <div className="stat">
          <div className="stat-title">درآمد</div>
          <div className="stat-value">86,500,000 تومان</div>
          <div className="stat-desc">-3% نسبت به دیروز</div>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">جزئیات</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>ساعت</th>
                  <th>تعداد</th>
                  <th>مبلغ</th>
                </tr>
              </thead>
              <tbody>
                {[{h:"9-10", n:32, amt:8500000},{h:"10-11", n:45, amt:11300000}].map((r,i)=> (
                  <tr key={i}>
                    <td>{r.h}</td>
                    <td>{r.n}</td>
                    <td>{r.amt.toLocaleString()} تومان</td>
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